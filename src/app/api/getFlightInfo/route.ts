export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

interface FlightDetails {
    fa_flight_id: string;
    aircraft_type: string |null;
    origin?: {
      code_icao: string;
    };
    destination?: {
      code_icao: string;
    };
  }
  interface WeatherObservation {
    observations: {
      temperature: number;
      wind_speed: number;
    }[];
  }
async function getFlightDetails(ident:string) :Promise<FlightDetails|null> {
try{
  //flight details
    const apiUrl = `https://aeroapi.flightaware.com/aeroapi/flights/${ident}`;


    const config = {
      method: "GET",
      headers: {  
        "Accept": "application/json; charset=UTF-8",
        "x-apikey": process.env.FLIGHT_TRACKER_API || "",
      },
    };

    const response = await fetch(apiUrl,config);
    const data = await response.json();

    
    return data?.flights?.[0] || null;
     
  }
  catch(error) {
      console.log(error);
      return null
  }
}

async function getMap(fa_flight_id:string) {
  // map
try{
  const apiUrl = `https://aeroapi.flightaware.com/aeroapi/flights/${fa_flight_id}/map`;

    const config = {
      method: "GET",
      headers: {
        Accept: "application/json; charset=UTF-8",
        "x-apikey": process.env.FLIGHT_TRACKER_API || "",
      },
    };

    const response = await fetch(apiUrl,config);
    const data = await response.json();

        return data;
     
    }catch(err){
        console.log("Error generating map",err);
        return null
    }
}

async function getWealther(cityICAO:string|null|undefined) : Promise<WeatherObservation | null>{
try{
  // wealther
    const apiUrl = `https://aeroapi.flightaware.com/aeroapi/airports/${cityICAO}/weather/observations`;

    const config = {
      method: "GET",
      params: {
        temperature_units: 'F'
      },
      headers: {
        "Accept": "application/json; charset=UTF-8",
        "x-apikey": process.env.FLIGHT_TRACKER_API || "",
      },
    };

    let response = await fetch(apiUrl,config);
    const data = await response.json();

    return data;
    }catch (error) {
    console.log(error);
    return null
  }
}

async function getAirCraftType(aircraft_type:string|null|undefined) {
  try{
    const apiUrl = `https://aeroapi.flightaware.com/aeroapi/aircraft/types/${aircraft_type}`;

    const config = {
      method: "GET",
      headers: {
        "Accept": "application/json; charset=UTF-8",
        "x-apikey": process.env.FLIGHT_TRACKER_API || "",
      },
    };

    let response = await fetch(apiUrl,config);
    const data = await response.json();

    return data;
    }catch(err){
        console.log(err);
      return null
    }
}

export async function GET(req:Request) {
    try {
    const { searchParams } = new URL(req.url);
    const ident = searchParams.get("ident");

    if (!ident) 
        return NextResponse.json({ message: "ident is required" }, { status: 400 });

    let data = await getFlightDetails(ident);
    let flightId = data?.fa_flight_id;
    if (!flightId) 
        return NextResponse.json({ message: "wrong ident identifier" }, { status: 400 });

    let data1 = await getMap(flightId);
    let data2 = await getAirCraftType(data?.aircraft_type);
    let data3 = await getWealther(data?.origin?.code_icao)
    let data4 = await getWealther(data?.destination?.code_icao)

    return NextResponse.json([data, data1,data2,data3?.observations[0],data4?.observations[0]], { status: 200 });

  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
  }
};

