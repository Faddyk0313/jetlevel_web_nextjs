import { NextResponse } from "next/server";
import Airport2 from "@/models/Airport2"; 
import {connectToMongoDB} from "@/lib/db"; 
import { calculateDistance } from "@/lib/utils";

export async function GET(_: Request, { params }: { params: { from: string; to: string } }) {
    try {
      await connectToMongoDB();

      let from = params.from;
      let to = params.to;
  
      if (!from)
        return NextResponse.json({ message: "please provide from" }, { status: 403 });
    
      if (!to)
        return NextResponse.json({ message: "please provide to" }, { status: 403 });
    
      let search = await Airport2.findOne({
        codeIcaoAirport: { $regex: `${from}`, $options: "i" },
      });
  
      let search1 = await Airport2.findOne({
        codeIcaoAirport: { $regex: `${to}`, $options: "i" },
      });
      const numericValue1 = search?.loc?.lat;
      const numericValue2 = search?.loc?.lon;
  
      const numericValue3 = search1?.loc?.lat;
      const numericValue4 = search1?.loc?.lon;
  
      let distance = await calculateDistance(
        numericValue1,
        numericValue2,
        numericValue3,
        numericValue4
      );
  
     return NextResponse.json({ data: distance, }, { status: 200 });
   }catch (error) {
     console.error("Error :", error);
     return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
   }
   };


 