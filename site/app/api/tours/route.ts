import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import {
  appendProductEventRow,
  appendTourRow,
  findGuideBySlug,
  listToursByCity,
} from "../../../lib/googleSheets";
import { toSlug } from "../../../../shared/utils/helpers";

export const runtime = "nodejs";

type TourPayload = {
  guide_slug?: unknown;
  title?: unknown;
  city?: unknown;
  duration?: unknown;
  price?: unknown;
  description?: unknown;
  meeting_point?: unknown;
};

function asCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function citySlugFromCityName(city: string): string {
  return toSlug(city);
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const city = asCleanString(url.searchParams.get("city"));
    const tours = await listToursByCity(city || undefined);
    return NextResponse.json({ tours }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to read tours." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  let payload: TourPayload;
  try {
    payload = (await request.json()) as TourPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const guideSlug = asCleanString(payload.guide_slug).toLowerCase();
  const title = asCleanString(payload.title);
  const city = asCleanString(payload.city);
  const duration = asCleanString(payload.duration);
  const price = asCleanString(payload.price);
  const description = asCleanString(payload.description);
  const meetingPoint = asCleanString(payload.meeting_point);

  if (!guideSlug || !title || !city || !duration || !price || !description || !meetingPoint) {
    return NextResponse.json(
      { error: "guide_slug, title, city, duration, price, description and meeting_point are required." },
      { status: 400 },
    );
  }

  const maxLen = 1000;
  if ([guideSlug, title, city, duration, price, description, meetingPoint].some((v) => v.length > maxLen)) {
    return NextResponse.json({ error: "Field too long." }, { status: 400 });
  }

  try {
    const guide = await findGuideBySlug(guideSlug);
    if (!guide) {
      return NextResponse.json({ error: "Guide not found for guide_slug." }, { status: 404 });
    }

    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();
    const citySlug = citySlugFromCityName(city);

    await appendTourRow({
      id,
      guide_slug: guide.slug,
      guide_name: guide.name,
      title,
      city,
      duration,
      price,
      description,
      meeting_point: meetingPoint,
      created_at: createdAt,
    });

    await appendProductEventRow({
      event_name: "tour_submitted",
      path: "/api/tours",
      city: citySlug,
      guide_slug: guide.slug,
      tour_id: id,
      metadata: JSON.stringify({ source: "tour-create-form" }),
      created_at: createdAt,
    });

    revalidatePath(`/${citySlug}-tours`);

    return NextResponse.json(
      {
        tour: {
          id,
          guide_slug: guide.slug,
          guide_name: guide.name,
          title,
          city,
          duration,
          price,
          description,
          meeting_point: meetingPoint,
          created_at: createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create tour." }, { status: 500 });
  }
}
