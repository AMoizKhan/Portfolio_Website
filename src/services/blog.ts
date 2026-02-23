/**
 * Server-side blog data (for SSR)
 */
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function getBlogPosts() {
  await connectDB();
  return Blog.find({}).sort({ publishedAt: -1 }).lean();
}
