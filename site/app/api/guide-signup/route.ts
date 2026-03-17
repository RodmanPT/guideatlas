import { NextResponse } from "next/server";

import { appendGuideWaitlistRow, appendProductEventRow, isWaitlistSignupDuplicate } from "../../../lib/googleSheets";
import { toSlug } from "../../../../shared/utils/helpers";

export const runtime = "nodejs";

type SignupPayload = {
  name?: unknown;
  email?: unknown;
  city?: unknown;
  country?: unknown;
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

  const name = asCleanString(payload.name);
  const email = asCleanString(payload.email).toLowerCase();
  const city = asCleanString(payload.city);
  const country = asCleanString(payload.country);
  const tourType = asCleanString(payload.tour_type);

  if (!name || !email || !city || !country || !tourType) {
    return NextResponse.json({ error: "Name, email, city, country and tour type are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Basic sanity limits to keep the sheet clean.
  const maxLen = 200;
  if ([name, email, city, country, tourType].some((v) => v.length > maxLen)) {
    return NextResponse.json({ error: "Field too long." }, { status: 400 });
  }

  try {
    const isDuplicate = await isWaitlistSignupDuplicate(email, city, country);
    if (isDuplicate) {
      return NextResponse.json({ error: "duplicate" }, { status: 409 });
    }

    await appendGuideWaitlistRow({
      name,
      email,
      city,
      country,
      tour_type: tourType,
      created_at: new Date().toISOString(),
    });

    await appendProductEventRow({
      event_name: "guide_signup_submitted",
      path: "/api/guide-signup",
      city: toSlug(city),
      metadata: JSON.stringify({ source: "waitlist-form" }),
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save signup." }, { status: 500 });
  }
}
