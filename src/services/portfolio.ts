/**
 * Server-side portfolio data (for SSR)
 */
import connectDB from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export async function getPortfolioItems() {
  await connectDB();
  return Portfolio.find({}).sort({ order: 1, createdAt: -1 }).lean();
}
