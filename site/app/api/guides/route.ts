import { NextResponse } from "next/server";

import {
  appendGuideProfileRow,
  appendProductEventRow,
  listGuideProfiles,
} from "../../../lib/googleSheets";
import { toSlug } from "../../../../shared/utils/helpers";

export const runtime = "nodejs";

type GuidePayload = {
  name?: unknown;
  email?: unknown;
  city?: unknown;
  country?: unknown;
  languages?: unknown;
  bio?: unknown;
  rating?: unknown;
};

function asCleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parseLanguages(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => asCleanString(item))
      .filter(Boolean)
      .slice(0, 8);
  }

  const raw = asCleanString(value);
  if (!raw) return [];

  return raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 8);
}

function parseRating(value: unknown): number | undefined {
  const raw = typeof value === "number" ? value : Number.parseFloat(asCleanString(value));
  if (!Number.isFinite(raw)) return undefined;
  if (raw < 0 || raw > 5) return undefined;
  return Math.round(raw * 10) / 10;
}

function normalizeCitySlug(city: string): string {
  return toSlug(city);
}

function ensureUniqueSlug(baseSlug: string, existingSlugs: Set<string>): string {
  const fallbackBase = baseSlug || "guide";
  let slug = fallbackBase;
  let counter = 2;
  while (existingSlugs.has(slug)) {
    slug = `${fallbackBase}-${counter}`;
    counter += 1;
  }
  return slug;
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const cityFilter = asCleanString(url.searchParams.get("city"));
    const slugFilter = asCleanString(url.searchParams.get("slug")).toLowerCase();

    const guides = await listGuideProfiles();
    const filtered = guides.filter((guide) => {
      if (slugFilter && guide.slug.toLowerCase() !== slugFilter) return false;
      if (cityFilter && normalizeCitySlug(guide.city) !== cityFilter.toLowerCase()) return false;
      return true;
    });

    if (slugFilter) {
      const guide = filtered[0];
      if (!guide) {
        return NextResponse.json({ error: "Guide not found." }, { status: 404 });
      }
      return NextResponse.json({ guide }, { status: 200 });
    }

    return NextResponse.json({ guides: filtered }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to read guides." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  let payload: GuidePayload;
  try {
    payload = (await request.json()) as GuidePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = asCleanString(payload.name);
  const email = asCleanString(payload.email).toLowerCase();
  const city = asCleanString(payload.city);
  const country = asCleanString(payload.country);
  const bio = asCleanString(payload.bio);
  const languages = parseLanguages(payload.languages);
  const rating = parseRating(payload.rating);

  if (!name || !email || !city || !bio) {
    return NextResponse.json({ error: "Name, email, city and bio are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const maxLen = 500;
  if ([name, email, city, country, bio].some((v) => v.length > maxLen)) {
    return NextResponse.json({ error: "Field too long." }, { status: 400 });
  }

  try {
    const existing = await listGuideProfiles();
    if (existing.some((guide) => guide.email.toLowerCase() === email)) {
      return NextResponse.json({ error: "A guide profile with this email already exists." }, { status: 409 });
    }

    const existingSlugs = new Set(existing.map((guide) => guide.slug));
    const slugBase = toSlug(`${name}-${city}`) || toSlug(name);
    const slug = ensureUniqueSlug(slugBase, existingSlugs);
    const id = crypto.randomUUID();
    const createdAt = new Date().toISOString();

    await appendGuideProfileRow({
      id,
      slug,
      name,
      email,
      city,
      country,
      languages,
      bio,
      rating,
      created_at: createdAt,
    });

    await appendProductEventRow({
      event_name: "guide_signup_submitted",
      path: "/api/guides",
      city: normalizeCitySlug(city),
      guide_slug: slug,
      metadata: JSON.stringify({ source: "guide-profile-form" }),
      created_at: createdAt,
    });

    return NextResponse.json(
      {
        guide: {
          id,
          slug,
          name,
          email,
          city,
          country,
          languages,
          bio,
          rating,
          created_at: createdAt,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create guide profile." }, { status: 500 });
  }
}
