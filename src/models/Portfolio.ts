/**
 * Mongoose schema for Portfolio / Work Gallery items
 */
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPortfolio extends Document {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const PortfolioSchema = new Schema<IPortfolio>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, default: "" },
    image: { type: String, required: true },
    link: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Portfolio: Model<IPortfolio> =
  (mongoose.models.Portfolio as Model<IPortfolio>) ??
  mongoose.model<IPortfolio>("Portfolio", PortfolioSchema);

export default Portfolio;
