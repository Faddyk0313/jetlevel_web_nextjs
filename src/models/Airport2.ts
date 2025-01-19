import mongoose, { Document, Model, Schema } from "mongoose";

// Define the Airport interface extending mongoose Document
export interface IAirport extends Document {
  type: string;
  nameAirport: string;
  latitudeAirport: number;
  longitudeAirport: number;
  iso_region: string;
  municipality: string;
  codeIcaoAirport: string;
  iata_code: string;
  loc: {
    lon: number;
    lat: number;
  };
}

// Define Mongoose schema with proper types
const airportSchema = new Schema<IAirport>({
  type: { type: String, required: true },
  nameAirport: { type: String, required: true },
  latitudeAirport: { type: Number, required: true },
  longitudeAirport: { type: Number, required: true },
  iso_region: { type: String, required: true },
  municipality: { type: String, required: true },
  codeIcaoAirport: { type: String, required: true },
  iata_code: { type: String, required: true },
  loc: {
    lon: { type: Number, required: true },
    lat: { type: Number, required: true },
  },
});

// Use globalThis to store the model to prevent recompilation during hot reloads
const Airport2 = mongoose.models.Airport2 || mongoose.model<IAirport>("Airport2", airportSchema);

// Ensure the model is stored globally to avoid re-compiling in development mode
if (process.env.NODE_ENV !== "production") {
  (globalThis as any).Airport2 = Airport2;
}

export default Airport2;