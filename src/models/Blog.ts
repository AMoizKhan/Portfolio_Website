/**
 * Mongoose schema for Blog posts
 */
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, default: "" },
    content: { type: String, default: "" },
    image: { type: String, required: true },
    author: { type: String, default: "Admin" },
    publishedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Blog: Model<IBlog> =
  (mongoose.models.Blog as Model<IBlog>) ??
  mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
