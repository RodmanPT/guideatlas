"use client";

import { useEffect } from "react";

import { trackEvent } from "../lib/analytics";

type Props = {
  citySlug: string;
};

export default function CityPageTracker({ citySlug }: Props) {
  useEffect(() => {
    void trackEvent("city_page_view", {
      city: citySlug,
      metadata: { source: "city-page" },
    });
  }, [citySlug]);

  return null;
}

