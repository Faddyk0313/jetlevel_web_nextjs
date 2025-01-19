import { NextResponse } from "next/server";
import {sendEmail} from "@/lib/sendEmail"; 

import fs from 'fs';
import path from 'path';

export async function POST(req:Request) {
    try{
        const data = await req.json();


      if (!data?.name || !data?.email || !data?.message) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){
        return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
      }
    
    const templatePath = path.join(process.cwd(), "public", "templates", "ContactUs.html");
    let templateContent = fs.readFileSync(templatePath, 'utf8');

      templateContent = templateContent.replace("##NAME##", data.name );
      templateContent = templateContent.replace("##EMAIL##", data.email);
      templateContent = templateContent.replace("##MESSAGE##", data.message);
    
      let clientMails = process.env.EMAIL;
        let mailOptions = {
          from: process.env.EMAIL,
          to: clientMails,
          subject: `New Contact Form Submission`,
          html: templateContent,
        };
    
      await sendEmail(mailOptions)
        .then(async (response) => {
          console.log("email send:", response);
        }).catch(async (err) => {
          console.log(err);
          
          return NextResponse.json({ response: { success: false }, message: `Error in sending verification email, Please register again ${err}` }, { status: 400 });

        });
        return NextResponse.json({ message: "Email sent Successfully",response: { success: true }, }, { status: 200 });

    }catch (error) {
        console.error("Error :", error);
        return NextResponse.json({ err:error,message: "Internal server error" }, { status: 500 });
      }
    }