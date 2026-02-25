/**
 * MongoDB connection singleton for Next.js
 * Reuses connection across serverless invocations
 */
import mongoose from "mongoose";

function getMongoUri(): string {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Please define MONGODB_URI in .env.local (or Vercel env vars)");
  return uri;
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

if (process.env.NODE_ENV !== "production") {
  global.mongoose = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(getMongoUri(), { bufferCommands: false });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}

export default connectDB;
