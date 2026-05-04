"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";
import { getCityImageUrl } from "../data/cityImages";
import { trackEvent } from "../lib/analytics";

type DestinationCardProps = {
  href: string;
  citySlug: string;
  cityName: string;
  country: string;
  subtitle?: string;
  priority?: boolean;
};

export default function DestinationCard({
  href,
  citySlug,
  cityName,
  country,
  subtitle,
  priority,
}: DestinationCardProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageUrl = getCityImageUrl(citySlug);
  const accent = Math.abs(
    citySlug.split("").reduce((total, ch) => total + ch.charCodeAt(0), 0) % 360,
  );

  return (
    <Link
      className="destinationCard"
      href={href}
      onClick={() => {
        void trackEvent("browse_tours_click", {
          city: citySlug,
          metadata: { source: "destination-card", href },
        });
      }}
    >
      <div className="destinationCardMedia" aria-hidden="true">
        {imageUrl && !hasImageError ? (
          <Image
            src={imageUrl}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="destinationCardImage"
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div
            className="destinationCardFallback"
            style={
              {
                "--accent-hue": String(accent),
              } as CSSProperties
            }
          >
            <p>{cityName}</p>
            <span>{country}</span>
          </div>
        )}
      </div>
      <div className="destinationCardBody">
        <h3>{cityName}</h3>
        <p>{subtitle ?? "Local experiences"}</p>
        <span>{country}</span>
      </div>
    </Link>
  );
}
