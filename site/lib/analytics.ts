"use client";

export type ProductEventName =
  | "guide_signup_submitted"
  | "tour_submitted"
  | "city_page_view"
  | "browse_tours_click";

type ProductEventPayload = {
  path?: string;
  city?: string;
  guide_slug?: string;
  tour_id?: string;
  metadata?: Record<string, unknown> | string;
};

export async function trackEvent(eventName: ProductEventName, payload: ProductEventPayload = {}): Promise<void> {
  try {
    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: eventName,
        path: payload.path ?? (typeof window !== "undefined" ? window.location.pathname : "/"),
        city: payload.city,
        guide_slug: payload.guide_slug,
        tour_id: payload.tour_id,
        metadata: payload.metadata,
      }),
      keepalive: true,
    });
  } catch {
    // Intentionally swallow tracking errors so product flow is never blocked.
  }
}
