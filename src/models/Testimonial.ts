/**
 * Mongoose schema for Testimonials
 */
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITestimonial extends Document {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String },
    content: { type: String, required: true },
    avatar: { type: String },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Testimonial: Model<ITestimonial> =
  mongoose.models.Testimonial ?? mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);

export default Testimonial;
