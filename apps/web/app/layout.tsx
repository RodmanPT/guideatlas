import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import CookieConsentBanner from "../components/CookieConsentBanner";

export const metadata: Metadata = {
  title: "GuideAtlas",
  description: "Discover authentic tours by local experts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
