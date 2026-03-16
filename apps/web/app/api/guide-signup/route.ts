import { NextResponse } from "next/server";

import { appendGuideWaitlistRow, isEmailOnWaitlist } from "../../../lib/googleSheets";

export const runtime = "nodejs";

type SignupPayload = {
  email?: unknown;
  city?: unknown;
  tour_type?: unknown;
};

function asCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: SignupPayload;
  try {
    payload = (await request.json()) as SignupPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const email = asCleanString(payload.email).toLowerCase();
  const city = asCleanString(payload.city);
  const tourType = asCleanString(payload.tour_type);

  if (!email || !city) {
    return NextResponse.json({ error: "Email and city are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Basic sanity limits to keep the sheet clean.
  const maxLen = 200;
  if ([email, city, tourType].some((v) => v.length > maxLen)) {
    return NextResponse.json({ error: "Field too long." }, { status: 400 });
  }

  try {
    const isDuplicate = await isEmailOnWaitlist(email);
    if (isDuplicate) {
      return NextResponse.json({ error: "duplicate" }, { status: 409 });
    }

    await appendGuideWaitlistRow({
      name: "",
      email,
      city,
      country: "",
      tour_type: tourType,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save signup." }, { status: 500 });
  }
}
