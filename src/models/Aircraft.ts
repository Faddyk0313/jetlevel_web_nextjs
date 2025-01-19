import mongoose, { Document, Model, Schema } from "mongoose";

// Define the Aircraft interface extending mongoose Document
export interface IAircraft extends Document {
  Aircraft_name: string;
  RANGE: string;
  MAX_PASSENGERS: string;
  CRUISE_SPEED: string;
  RENTAL_RATE: string;
  MANUFACTURER: string;
  BAG_CAPACITY: string;
  CABIN_LENGTH: string;
  CABIN_WIDTH: string;
  CABIN_HEIGHT: string;
  PRICE_PER_HOUR: string;
}

// Define Mongoose schema with proper types
const aircraftSchema = new Schema<IAircraft>({
  Aircraft_name: { type: String, required: true },
  RANGE: { type: String, required: true },
  MAX_PASSENGERS: { type: String, required: true },
  CRUISE_SPEED: { type: String, required: true },
  RENTAL_RATE: { type: String, required: true },
  MANUFACTURER: { type: String, required: true },
  BAG_CAPACITY: { type: String, required: true },
  CABIN_LENGTH: { type: String, required: true },
  CABIN_WIDTH: { type: String, required: true },
  CABIN_HEIGHT: { type: String, required: true },
  PRICE_PER_HOUR: { type: String, required: true },
});

// Use globalThis to store the model to prevent recompilation during hot reloads
const Aircraft: Model<IAircraft> = mongoose.models.Aircraft || mongoose.model<IAircraft>("Aircraft", aircraftSchema);

// Ensure the model is stored globally to avoid re-compiling in development mode
if (process.env.NODE_ENV !== "production") {
  (globalThis as any).Aircraft = Aircraft;
}

export default Aircraft;