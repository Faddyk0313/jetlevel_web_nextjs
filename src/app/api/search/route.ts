export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import Airport2 from "@/models/Airport2"; 
import {connectToMongoDB} from "@/lib/db"; 

export async function GET(req:Request) {
  try {
    const { searchParams } = new URL(req.url);
    const input = searchParams.get("query");
    await connectToMongoDB();
  

  if (!input){
    return NextResponse.json({ message: "please provide search query" }, { status: 400 });
  }
    let search:any = [];
    if (input.length >= 3) {
      console.log(input);
      search = await Airport2.find({
        $text: {
          $search: `\"${input}\"`
        },
      }).sort({ type: 1 });

      search = search.slice(0, 10);

    }
   

    return NextResponse.json({ message: "Success",search }, { status: 200 });

  
  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
  }
}