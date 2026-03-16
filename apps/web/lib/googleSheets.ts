import { JWT } from "google-auth-library";

type GuideWaitlistRow = {
  name: string;
  email: string;
  city: string;
  country: string;
  tour_type: string;
  created_at: string;
};

function getEnvOrThrow(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function getGooglePrivateKey(): string {
  // On platforms like Netlify, multiline env vars are often stored with literal "\n".
  return getEnvOrThrow("GOOGLE_PRIVATE_KEY").replace(/\\n/g, "\n");
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

  const range = sheetRange("guides_waitlist!B:B");
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

  const range = sheetRange("guides_waitlist!A:F");
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
