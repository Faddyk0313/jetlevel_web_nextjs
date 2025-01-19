import { NextResponse } from "next/server";
import Aircraft from "@/models/Aircraft"; 
import {connectToMongoDB} from "@/lib/db"; 

export async function GET() {

    try {
        await connectToMongoDB();

      const aircraft = await Aircraft.find({}).select("Aircraft_name");
      return NextResponse.json({ data: aircraft, }, { status: 200 });
    }catch (error) {
      console.error("Error :", error);
      return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
    }
}