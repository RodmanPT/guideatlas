"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

import { COOKIE_CONSENT_UPDATED_EVENT, hasAnalyticsConsent } from "../lib/cookieConsent";

type Props = {
  measurementId: string;
};

export default function GoogleAnalyticsLoader({ measurementId }: Props) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const evaluateConsent = () => {
      setEnabled(hasAnalyticsConsent());
    };

    evaluateConsent();
    window.addEventListener(COOKIE_CONSENT_UPDATED_EVENT, evaluateConsent);
    window.addEventListener("storage", evaluateConsent);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_UPDATED_EVENT, evaluateConsent);
      window.removeEventListener("storage", evaluateConsent);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
