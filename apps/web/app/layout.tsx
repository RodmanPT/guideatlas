import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import CookieConsentBanner from "../components/CookieConsentBanner";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "GuideAtlas",
  description: "Discover authentic tours by local experts",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <SiteHeader />
        <div className="siteContent">{children}</div>
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
