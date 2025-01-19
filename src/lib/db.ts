import mongoose, { Connection } from "mongoose";

// Check if the connection already exists globally to prevent multiple connections in dev mode
let cached = (globalThis as any).mongoose || { conn: null, promise: null };

export async function connectToMongoDB() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(process.env.MONGODB_URI!);
    }

    cached.conn = await cached.promise;
    console.log("New MongoDB connection established");

    (globalThis as any).mongoose = cached; // Store connection globally

    return cached.conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}