/**
 * GET /api/testimonials - Fetch all testimonials
 * Sorted by order then createdAt
 */
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectDB();
    const items = await Testimonial.find({})
      .sort({ order: 1, createdAt: -1 })
      .lean();
    return NextResponse.json(items);
  } catch (err) {
    console.error("Testimonials API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch testimonials" },
      { status: 500 }
    );
  }
}
