import { NextResponse } from "next/server";

export async function POST(req:Request) {
  const { email } = await req.json();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
  }

  const PRIVATE_API_KEY = ""; // Use environment variables
  // const LIST_ID = "UV3HQC"; // Your Klaviyo list ID

  try {
    const url = 'https://a.klaviyo.com/api/lists/UV3HQC/relationships/profiles';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/vnd.api+json',
        revision: '2024-10-15',
        'content-type': 'application/vnd.api+json',
        Authorization: 'Klaviyo-API-Key '
      },
      body: '{"data":[{"type":"profile","attributes": {"email": "fahd@jetlevel.com"}}]}'

    };

const profileResponse = await fetch(url, options)

    if (profileResponse.ok) {
      return NextResponse.json({ message: "Subscription successful" }, { status: 200 });
    } else {
      const errorData = await profileResponse.json();
      return NextResponse.json({ message: errorData.message || "Subscription failed" }, { status: profileResponse.status });
    }
  } catch (error) {
    console.error("Error subscribing user:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}