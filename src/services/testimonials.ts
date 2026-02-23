/**
 * Server-side testimonials data (for SSR)
 */
import connectDB from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function getTestimonials() {
  await connectDB();
  return Testimonial.find({}).sort({ order: 1, createdAt: -1 }).lean();
}
