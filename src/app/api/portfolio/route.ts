/**
 * GET /api/portfolio - Fetch all portfolio items (for client-side use)
 * Items sorted by order then createdAt
 */
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  try {
    await connectDB();
    const items = await Portfolio.find({})
      .sort({ order: 1, createdAt: -1 })
      .lean();
    return NextResponse.json(items);
  } catch (err) {
    console.error("Portfolio API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
