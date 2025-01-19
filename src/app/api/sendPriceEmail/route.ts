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
      "startTimeInUTC",
      "startDate",
      "person",
      "price",
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

    // Read email template from 'public/templates' folder
    const templatePath = path.join(process.cwd(), "public", "templates", "ClientLead.html");
    let templateContent = fs.readFileSync(templatePath, "utf8");

    // Find the airport locations in the database
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

    // Replace placeholders in the email template
    templateContent = templateContent
      .replace("##CUSTOMER_NAME##", `${data.firstName} ${data.lastName}`)
      .replace("##DATE##", data.startDate?.date)
      .replace("##TIME##", utcTime)
      .replace("##FROM##", data.from)
      .replace("##TO##", data.to)
      .replaceAll("##PHONE##", data.phone)
      .replace("##PAX##", data.person)
      .replaceAll("##AIRCRAFT_TYPE##", data.craftType)
      .replaceAll("##EMAIL##", data.email)
      .replaceAll("##NM##", convertedDistance)
      .replaceAll("##TITLE##", "Flight Price Request")
      .replaceAll("##HEADER##", "Price Check Request")
      .replace("##TourType##", data.tourType === "roundTrip" ? "Round Trip" : "One Way")
      .replace("##PREVIEW##", `
        ${data.firstName} requested a price check for their upcoming trip. Check the details to provide the best quote.
      `)
      .replace(
        "##PRICE##",
        `
          <div style="font-weight: 600;">
            Price 
            <span style="margin-left: 40px;">${data.price}</span> 
          </div>
        `
      );

    // Handling round trip placeholders
    if (data.tourType === "roundTrip") {
      let utcTime2 = `${data.endDate?.time} (${data.endTimeInUTC} in UTC)`;

      templateContent = templateContent.replace("##DATE1##", `
        <div class="flex-table-row">
          <div class="tableDate">${data.endDate?.date}</div>
          <div>${data.to}</div>
          <div>${data.from}</div>
          <div class="small">${data.person}</div>
          <div class="long">${utcTime2}</div>
          <div>${convertedDistance}</div>
        </div>`);
    } else {
      templateContent = templateContent.replace("##DATE1##", "");
    }

    // Handling additional user information
    if (data.isExtraData) {
      templateContent = templateContent.replace("##EXTRA_PART##",
        `
        <h2 style="margin: 20px 0px 0px 0px;">Additional Information</h2>
        <div class="additional-info">
          <h4>About the Client</h4>
          <p>${data.youself}</p>

          <h4>Traveling with pets:</h4>
          <p>${data.isPet ? "Yes" : "No"}</p>

          <h4>Travel with children under 3 years old:</h4>
          <p>${data.isChild ? "Yes" : "No"}</p>

          <h4>Baggage</h4>
          <ul style="margin: 8px 0px">
            ${data.baggage.filter((i: any) => i.trim()).map((i: any) => `<li>${i}</li>`).join("")}
          </ul>

          <h4>Message:</h4>
          <p>${data.requirement}</p>
        </div>
        `);
    } else {
      templateContent = templateContent.replace("##EXTRA_PART##", "");
    }

    // Email options
    let clientMails = process.env.EMAIL;
    let mailOptions = {
      from: process.env.EMAIL,
      to: clientMails,
      subject: `Client Price Check: ${data.startDate?.date} ${data.from} >> ${data.to}`,
      html: templateContent,
    };

    // Send email
    await sendEmail(mailOptions);

    return NextResponse.json({
      response: { success: true },
      message: "Email sent Successfully",
    }, { status: 200 });

  } catch (error) {
    console.error("Error :", error);
    return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
  }
}