export type CookieConsent = {
  status: "accepted" | "custom";
  analytics: boolean;
  timestamp: string;
};

export const COOKIE_CONSENT_STORAGE_KEY = "guideatlas.cookieConsent.v1";
export const COOKIE_CONSENT_UPDATED_EVENT = "guideatlas:cookie-consent-updated";

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (!parsed || (parsed.status !== "accepted" && parsed.status !== "custom")) return null;
    if (typeof parsed.analytics !== "boolean") return null;
    if (typeof parsed.timestamp !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeCookieConsent(consent: CookieConsent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new Event(COOKIE_CONSENT_UPDATED_EVENT));
}

export function hasAnalyticsConsent(): boolean {
  const consent = readCookieConsent();
  return Boolean(consent?.analytics);
}
