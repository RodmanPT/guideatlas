import { JWT } from "google-auth-library";
import type { Guide } from "../../shared/types/guide";
import type { Tour } from "../../shared/types/tour";
import { toSlug } from "../../shared/utils/helpers";

type GuideWaitlistRow = {
  name: string;
  email: string;
  city: string;
  country: string;
  tour_type: string;
  created_at: string;
};

type GuideProfileRow = {
  id: string;
  slug: string;
  name: string;
  email: string;
  city: string;
  country: string;
  languages: string[];
  bio: string;
  rating?: number;
  created_at: string;
};

type TourRow = {
  id: string;
  guide_slug: string;
  guide_name: string;
  title: string;
  city: string;
  duration: string;
  price: string;
  description: string;
  meeting_point: string;
  created_at: string;
};

type ProductEventRow = {
  event_name: string;
  path: string;
  city?: string;
  guide_slug?: string;
  tour_id?: string;
  metadata?: string;
  created_at: string;
};

function getEnvOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value.trim();
}

function stripWrappingQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith("\"") && trimmed.endsWith("\"")) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function getGooglePrivateKey(): string {
  // On platforms like Netlify, multiline env vars are often stored with literal "\n".
  return stripWrappingQuotes(getEnvOrThrow("GOOGLE_PRIVATE_KEY"))
    // Some dotenv parsers turn "\\n" into "\\\n" (a stray backslash before a real newline).
    .replace(/\\\r\n/g, "\n")
    .replace(/\\\n/g, "\n")
    // If a trailing "\n" was trimmed away, remove the leftover backslash.
    .replace(/\\$/g, "")
    // Handle both "\n" and "\\n" variants (different shells/UIs escape differently).
    .replace(/\\\\r\\\\n/g, "\n")
    .replace(/\\\\n/g, "\n")
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n");
}

async function getAccessToken(): Promise<string> {
  const clientEmail = getEnvOrThrow("GOOGLE_CLIENT_EMAIL");
  const privateKey = getGooglePrivateKey();

  const auth = new JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const { access_token: accessToken } = await auth.authorize();
  if (!accessToken) {
    throw new Error("Failed to obtain Google access token.");
  }

  return accessToken;
}

function getSpreadsheetId(): string {
  return getEnvOrThrow("GOOGLE_SHEET_ID");
}

function getSheetTabName(): string {
  return (process.env.GOOGLE_SHEET_TAB || "guides_waitlist").trim() || "guides_waitlist";
}

function hasGoogleSheetsConfig(): boolean {
  return Boolean(
    process.env.GOOGLE_CLIENT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim() &&
      process.env.GOOGLE_SHEET_ID?.trim(),
  );
}

function getGuidesTabName(): string {
  return (process.env.GOOGLE_SHEET_GUIDES_TAB || "guides_profiles").trim() || "guides_profiles";
}

function getToursTabName(): string {
  return (process.env.GOOGLE_SHEET_TOURS_TAB || "tours").trim() || "tours";
}

function getEventsTabName(): string {
  return (process.env.GOOGLE_SHEET_EVENTS_TAB || "product_events").trim() || "product_events";
}

function sheetTabA1(tabName: string): string {
  // Always quote to safely handle spaces/special characters.
  const escaped = tabName.replace(/'/g, "''");
  return `'${escaped}'`;
}

function sheetRange(rangeA1: string): string {
  return encodeURIComponent(rangeA1);
}

async function sheetsRequest<T>(
  path: string,
  init: RequestInit,
  accessToken: string,
): Promise<T> {
  const response = await fetch(`https://sheets.googleapis.com/v4/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  const text = await response.text();
  let json: unknown = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    // Keep raw text for error reporting below.
  }

  if (!response.ok) {
    const message = typeof json === "object" && json && "error" in json ? JSON.stringify(json) : text;
    throw new Error(`Google Sheets API error (${response.status}): ${message}`.slice(0, 1200));
  }

  return json as T;
}

export async function isEmailOnWaitlist(email: string): Promise<boolean> {
  const spreadsheetId = getSpreadsheetId();
  const accessToken = await getAccessToken();

  const range = sheetRange(`${sheetTabA1(getSheetTabName())}!B:B`);
  const data = await sheetsRequest<{ values?: string[][] }>(
    `spreadsheets/${spreadsheetId}/values/${range}`,
    { method: "GET" },
    accessToken,
  );

  const emails = (data.values ?? [])
    .flat()
    .map((v) => (v ?? "").trim().toLowerCase())
    .filter((v) => v && v !== "email");

  // If a header row exists, it will typically be the first value: "email".
  return emails.includes(email.trim().toLowerCase());
}

export async function appendGuideWaitlistRow(row: GuideWaitlistRow): Promise<void> {
  const spreadsheetId = getSpreadsheetId();
  const accessToken = await getAccessToken();

  const range = sheetRange(`${sheetTabA1(getSheetTabName())}!A:F`);
  await sheetsRequest(
    `spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      body: JSON.stringify({
        values: [
          [
            row.name,
            row.email,
            row.city,
            row.country,
            row.tour_type,
            row.created_at,
          ],
        ],
      }),
    },
    accessToken,
  );
}

async function readSheetValues(tabName: string, range = "A:Z"): Promise<string[][]> {
  const spreadsheetId = getSpreadsheetId();
  const accessToken = await getAccessToken();
  const encodedRange = sheetRange(`${sheetTabA1(tabName)}!${range}`);

  const data = await sheetsRequest<{ values?: string[][] }>(
    `spreadsheets/${spreadsheetId}/values/${encodedRange}`,
    { method: "GET" },
    accessToken,
  );

  return data.values ?? [];
}

async function appendSheetRow(tabName: string, range: string, values: Array<string | number>): Promise<void> {
  const spreadsheetId = getSpreadsheetId();
  const accessToken = await getAccessToken();
  const encodedRange = sheetRange(`${sheetTabA1(tabName)}!${range}`);

  await sheetsRequest(
    `spreadsheets/${spreadsheetId}/values/${encodedRange}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      body: JSON.stringify({ values: [values] }),
    },
    accessToken,
  );
}

function dropLikelyHeader(values: string[][], firstCell: string): string[][] {
  if (!values.length) return values;
  const cell = (values[0][0] ?? "").trim().toLowerCase();
  if (cell === firstCell.trim().toLowerCase()) {
    return values.slice(1);
  }
  return values;
}

export async function appendGuideProfileRow(row: GuideProfileRow): Promise<void> {
  await appendSheetRow(getGuidesTabName(), "A:J", [
    row.id,
    row.slug,
    row.name,
    row.email,
    row.city,
    row.country,
    row.languages.join(", "),
    row.bio,
    row.rating ?? "",
    row.created_at,
  ]);
}

export async function listGuideProfiles(): Promise<Guide[]> {
  if (!hasGoogleSheetsConfig()) return [];

  try {
    const values = dropLikelyHeader(await readSheetValues(getGuidesTabName(), "A:J"), "id");
    return values
      .map((row) => {
        const ratingRaw = (row[8] ?? "").trim();
        const rating = ratingRaw ? Number.parseFloat(ratingRaw) : undefined;

        return {
          id: (row[0] ?? "").trim(),
          slug: (row[1] ?? "").trim(),
          name: (row[2] ?? "").trim(),
          email: (row[3] ?? "").trim().toLowerCase(),
          city: (row[4] ?? "").trim(),
          country: (row[5] ?? "").trim(),
          languages: (row[6] ?? "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
          bio: (row[7] ?? "").trim(),
          rating: Number.isFinite(rating) ? rating : undefined,
          created_at: (row[9] ?? "").trim(),
        };
      })
      .filter((guide) => guide.id && guide.slug && guide.name && guide.city);
  } catch (error) {
    console.warn("listGuideProfiles fallback: returning empty list.", error);
    return [];
  }
}

export async function findGuideBySlug(slug: string): Promise<Guide | null> {
  const normalized = slug.trim().toLowerCase();
  if (!normalized) return null;

  const guides = await listGuideProfiles();
  return guides.find((guide) => guide.slug.toLowerCase() === normalized) ?? null;
}

export async function appendTourRow(row: TourRow): Promise<void> {
  await appendSheetRow(getToursTabName(), "A:J", [
    row.id,
    row.guide_slug,
    row.guide_name,
    row.title,
    row.city,
    row.duration,
    row.price,
    row.description,
    row.meeting_point,
    row.created_at,
  ]);
}

export async function listToursByCity(citySlug?: string): Promise<Tour[]> {
  if (!hasGoogleSheetsConfig()) return [];

  try {
    const values = dropLikelyHeader(await readSheetValues(getToursTabName(), "A:J"), "id");
    const normalizedCity = (citySlug ?? "").trim().toLowerCase();

    return values
      .map((row) => ({
        id: (row[0] ?? "").trim(),
        guide_slug: (row[1] ?? "").trim(),
        guide_name: (row[2] ?? "").trim(),
        title: (row[3] ?? "").trim(),
        city: (row[4] ?? "").trim(),
        duration: (row[5] ?? "").trim(),
        price: (row[6] ?? "").trim(),
        description: (row[7] ?? "").trim(),
        meeting_point: (row[8] ?? "").trim(),
        created_at: (row[9] ?? "").trim(),
      }))
      .filter((tour) => tour.id && tour.title && tour.city)
      .filter((tour) => (normalizedCity ? toSlug(tour.city) === normalizedCity : true));
  } catch (error) {
    console.warn("listToursByCity fallback: returning empty list.", error);
    return [];
  }
}

export async function appendProductEventRow(row: ProductEventRow): Promise<void> {
  if (!hasGoogleSheetsConfig()) return;

  await appendSheetRow(getEventsTabName(), "A:G", [
    row.event_name,
    row.path,
    row.city ?? "",
    row.guide_slug ?? "",
    row.tour_id ?? "",
    row.metadata ?? "",
    row.created_at,
  ]);
}
