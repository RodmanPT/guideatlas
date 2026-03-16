"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import type { ReactNode } from "react";

import { type ProductEventName, trackEvent } from "../lib/analytics";

type Props = LinkProps & {
  className?: string;
  children: ReactNode;
  eventName: ProductEventName;
  eventPayload?: {
    path?: string;
    city?: string;
    guide_slug?: string;
    tour_id?: string;
    metadata?: Record<string, unknown> | string;
  };
};

export default function TrackEventLink({
  className,
  children,
  eventName,
  eventPayload,
  ...linkProps
}: Props) {
  return (
    <Link
      {...linkProps}
      className={className}
      onClick={() => {
        void trackEvent(eventName, eventPayload);
      }}
    >
      {children}
    </Link>
  );
}

