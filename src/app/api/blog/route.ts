/**
 * GET /api/blog - Fetch all blog posts (for client-side use)
 * Sorted by publishedAt descending
 */
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET() {
  try {
    await connectDB();
    const posts = await Blog.find({})
      .sort({ publishedAt: -1 })
      .lean();
    return NextResponse.json(posts);
  } catch (err) {
    console.error("Blog API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
