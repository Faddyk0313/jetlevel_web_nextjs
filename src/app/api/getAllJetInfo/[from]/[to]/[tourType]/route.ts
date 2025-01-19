import { NextResponse } from "next/server";
import Airport2 from "@/models/Airport2"; 
import {connectToMongoDB} from "@/lib/db"; 
import { calculateDistance } from "@/lib/utils";

export async function GET(_: Request, { params }: { params: { from: string; to: string; tourType: string } }) {

try{
  let from = params.from;
  let to = params.to;
  let tourType = params.tourType;
    await connectToMongoDB();
  


  if (!from)
    return NextResponse.json({ message: "please provide from" }, { status: 403 });

  if (!to)
    return NextResponse.json({ message: "please provide to" }, { status: 403 });

  if (!tourType)
    return NextResponse.json({ message: "please provide tourType" }, { status: 403 });


  let jetInfo = [
    {
      type: "Vision Jet",
      rate: [4000, 4200],
      capacity: "7",
      speed: 506.94,
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/very-light-jet-int.jpg",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Vision-jet.png",
    },
    {
      type: "Turbo prop",
      rate: [4950, 5000],
      capacity: "6-8",
      speed: 587.41, //kph
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Turbo_prop-int.jpeg",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/TurboProp-jpeg.webp",
    },
    {
      type: "Very Light Jet",
      rate: [4950, 5950],
      capacity: "4-5",
      speed: 587.41,
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Phenom-100-int-1-jpg.webp",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Very-Light-Jets-.webp",

    },
    {
      type: "Light Jet",
      rate: [6250, 7450],
      capacity: "6-8",
      speed: 667.88,
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Light_jet-int.jpeg",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Light-jet-jpeg.webp",
    },
    {
      type: "Mid Size Jet",
      rate: [7950, 8950],
      capacity: "7-9",
      speed: 748.34,
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Midsize_jet-int.jpeg",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Midsize-jet-jpeg.webp",
    },
    {
      type: "Super Midsize Jet",
      rate: [9450, 10950],
      capacity: "8-10",
      speed: 788.58,
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Super-midsize-int.jpeg",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Super-Midsize-Jet-jpeg.webp",
    },
    {
      type: "Heavy Jet",
      rate: [11450, 12950],
      capacity: "10-16",
      speed: 788.58,
      time: 0,
      cost: [0, 0],
      img2: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/heavy-int.jpeg",
      img1: "https://assets.contento.io/assets/s_01JA0hQj1BcayHdvz8pvEM0GH0/Heavy-jet-jpeg.webp",
    },
  ];
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
    Number(numericValue1),
    Number(numericValue2),
    Number(numericValue3),
    Number(numericValue4)
  );

  if (distance > 1150.78) {
    jetInfo = jetInfo.filter((item) => item.type != "Turbo prop");
  }

  await Promise.all(
    jetInfo.map(async (item, index) => {
      let timeInHours = distance / item.speed;
      // let timeObj = convertTimeFormat(timeInHours);

      jetInfo[index].time = timeInHours + 0.2;
      let timeCalculated = (timeInHours < 1.3 && (item.type == "Turbo prop" || item.type == "Vision Jet")) ? 1.3 : (timeInHours < 2 ? 2 : timeInHours);
      timeCalculated += 0.2;
      if (tourType == "roundTrip") {
        jetInfo[index].cost[0] = jetInfo[index].rate[0] * timeCalculated;
        jetInfo[index].cost[1] = jetInfo[index].rate[1] * timeCalculated;
        jetInfo[index].cost[0] = Math.floor(jetInfo[index].cost[0] * 2);
        jetInfo[index].cost[1] = Math.floor(jetInfo[index].cost[1] * 2);
      } else if (tourType == "oneWay") {
        jetInfo[index].cost[0] = Math.floor(jetInfo[index].rate[0] * timeCalculated);
        jetInfo[index].cost[1] = Math.floor(jetInfo[index].rate[1] * timeCalculated);
      }
    })
  );

  return NextResponse.json({ data: jetInfo }, { status: 200 });
}catch (error) {
  console.error("Error :", error);
  return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
}
};


