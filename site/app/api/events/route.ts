import { NextResponse } from "next/server";

import { appendProductEventRow } from "../../../lib/googleSheets";

export const runtime = "nodejs";

const ALLOWED_EVENTS = new Set([
  "guide_signup_submitted",
  "tour_submitted",
  "city_page_view",
  "browse_tours_click",
]);

type EventPayload = {
  event_name?: unknown;
  path?: unknown;
  city?: unknown;
  guide_slug?: unknown;
  tour_id?: unknown;
  metadata?: unknown;
};

function asCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: EventPayload;
  try {
    payload = (await request.json()) as EventPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const eventName = asCleanString(payload.event_name);
  const path = asCleanString(payload.path) || "/";
  const city = asCleanString(payload.city);
  const guideSlug = asCleanString(payload.guide_slug);
  const tourId = asCleanString(payload.tour_id);

  if (!eventName || !ALLOWED_EVENTS.has(eventName)) {
    return NextResponse.json({ error: "Invalid event_name." }, { status: 400 });
  }

  let metadata = "";
  if (payload.metadata && typeof payload.metadata === "object") {
    metadata = JSON.stringify(payload.metadata);
  } else if (typeof payload.metadata === "string") {
    metadata = payload.metadata.slice(0, 1000);
  }

  try {
    await appendProductEventRow({
      event_name: eventName,
      path,
      city: city || undefined,
      guide_slug: guideSlug || undefined,
      tour_id: tourId || undefined,
      metadata: metadata || undefined,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    // Tracking must never break UX; keep a soft-fail in MVP.
    console.warn("Event tracking skipped.", error);
    return NextResponse.json({ ok: true, skipped: true }, { status: 202 });
  }
}
