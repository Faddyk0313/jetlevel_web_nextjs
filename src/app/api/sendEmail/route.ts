import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";
import fs from "fs";
import path from "path";
import { calculateDistance } from "@/lib/utils";
import Airport2 from "@/models/Airport2";
import { connectToMongoDB } from "@/lib/db";

export async function POST(req: Request) {
  try {
        await connectToMongoDB();
    
    const data = await req.json();

    // Required fields validation
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "tourType",
      "from",
      "to",
      "craftType",
      "startDate",
      "startTimeInUTC",
      "person",
    ];

    for (let key of requiredFields) {
      if (!data[key] || data[key] === "") {
        return NextResponse.json(
          { error: `Please provide ${key}` },
          { status: 400 }
        );
      }
    }

    if (data.tourType === "roundTrip" && (!data.endDate || !data.endTimeInUTC)) {
      return NextResponse.json({ error: `Please provide endDate` }, { status: 400 });
    }

    // Read email templates from 'public/templates' folder
    const templatePathClient = path.join(process.cwd(), "public", "templates", "ClientRequest.html");
    const templatePathLead = path.join(process.cwd(), "public", "templates", "ClientLead.html");

    let templateContent = fs.readFileSync(templatePathClient, "utf8");
    let templateContent1 = fs.readFileSync(templatePathLead, "utf8");

    // Find the from and to locations in the database
    const searchFrom = await Airport2.findOne({
      codeIcaoAirport: { $regex: `${data.from}`, $options: "i" },
    });

    const searchTo = await Airport2.findOne({
      codeIcaoAirport: { $regex: `${data.to}`, $options: "i" },
    });

    const lat1 = searchFrom?.loc?.lat;
    const lon1 = searchFrom?.loc?.lon;
    const lat2 = searchTo?.loc?.lat;
    const lon2 = searchTo?.loc?.lon;

    const distance = await calculateDistance(lat1, lon1, lat2, lon2);
    const convertedDistance = (distance * 0.539957).toFixed(0);

    const utcTime = `${data.startDate?.time} (${data.startTimeInUTC} in UTC)`;

    templateContent = templateContent.replace("##USER_NAME##", data.firstName + " " + data.lastName);
    templateContent1 = templateContent1.replace("##CUSTOMER_NAME##", data.firstName + " " + data.lastName);
    templateContent = templateContent.replace("##DATE##",  data.startDate?.date);
    templateContent1 = templateContent1.replace("##DATE##", data.startDate?.date);
    templateContent = templateContent.replace("##TIME##", data.startDate?.time);
    templateContent1 = templateContent1.replace("##TIME##", utcTime);
    templateContent = templateContent.replace("##FROM##", data.from);
    templateContent1 = templateContent1.replace("##FROM##", data.from);
    templateContent = templateContent.replace("##TO##", data.to);
    templateContent1 = templateContent1.replace("##TO##", data.to);
    templateContent = templateContent.replace("##PAX##", data.person);
    templateContent1 = templateContent1.replace("##PAX##", data.person);
    templateContent = templateContent.replaceAll("##AIRCRAFT_TYPE##", data.craftType);
    templateContent1 = templateContent1.replaceAll("##AIRCRAFT_TYPE##", data.craftType);
    templateContent1 = templateContent1.replaceAll("##EMAIL##", data.email);
    templateContent1 = templateContent1.replaceAll("##PHONE##", data.phone);
    templateContent1 = templateContent1.replaceAll("##NM##", convertedDistance);
    templateContent1 = templateContent1.replaceAll("##TITLE##", "Flight Request");
    templateContent1 = templateContent1.replaceAll("##HEADER##", "New Flight Request");
    templateContent1 = templateContent1.replaceAll("##TourType##", data.tourType == "roundTrip" ? "Round Trip" : "One Way");
    templateContent = templateContent.replaceAll("##TourType##", data.tourType == "roundTrip" ? "Round Trip" : "One Way");
    templateContent1 = templateContent1.replace("##PRICE##", "");
    templateContent = templateContent.replace("##PREVIEW##", `
      
      Thanks, ${data.firstName}, we've received your request. We'll be in touch soon.
      
      `);
    templateContent1 = templateContent1.replace("##PREVIEW##", `
      ${data.firstName} requests a quote. Review the itinerary and respond with the next steps
      
      `);

    // Handling round trip specific placeholders
    if (data.tourType === "roundTrip") {
      let utcTime2 = `${data.endDate?.time} (${data.endTimeInUTC} in UTC)`;
      templateContent = templateContent.replace("##DATE1##", `
        <tr class="otherRows">
          <td>${data.endDate?.date}</td>
          <td>${data.to}</td>
          <td>${data.from}</td>
          <td>${data.person}</td>
          <td>${data.endDate?.time}</td>
        </tr>`);

      templateContent1 = templateContent1.replace("##DATE1##", `
        <div class="flex-table-row">
          <div class="tableDate">${data.endDate?.date}</div>
          <div>${data.to}</div>
          <div>${data.from}</div>
          <div class="small">${data.person}</div>
          <div class="long">${utcTime2}</div>
          <div>${distance}</div>
        </div>`);
    } else {
      templateContent = templateContent.replace("##DATE1##", "");
      templateContent1 = templateContent1.replace("##DATE1##", "");
    }

    // Handle extra information section
    if (data.isExtraData) {
      templateContent1 = templateContent1.replace("##EXTRA_PART##", `
        <h2>Additional Information</h2>
        <p>About the Client: ${data.youself}</p>
        <p>Traveling with pets: ${data.isPet ? "Yes" : "No"}</p>
        <p>Travel with children under 3 years old: ${data.isChild ? "Yes" : "No"}</p>
        <p>Baggage:</p>
        <ul>${data.baggage.filter((i:any) => i.trim()).map((i:any) => `<li>${i}</li>`).join("")}</ul>
        <p>Message: ${data.requirement}</p>`);
    } else {
      templateContent1 = templateContent1.replace("##EXTRA_PART##", "");
    }

    // Send email to the client
    let mailOptions = {
      from: process.env.EMAIL,
      to: data.email,
      subject: `Inquiry Confirmation: ${data.startDate?.date} ${data.from} >> ${data.to}`,
      html: templateContent,
    };

    await sendEmail(mailOptions);

    // Send email to the admin
    let clientMails = process.env.EMAIL;
    let mailOptions1 = {
      from: process.env.EMAIL,
      to: clientMails,
      subject: `Client Lead Request: ${data.startDate?.date} ${data.from} >> ${data.to}`,
      html: templateContent1,
    };

    await sendEmail(mailOptions1);

    return NextResponse.json({
      response: { success: true },
      message: "Email sent successfully",
      redirectUri: "https://jetlevel.com/thank-you/",
    }, { status: 200 });

  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
  }
}