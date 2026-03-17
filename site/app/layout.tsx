import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";

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

const GA_MEASUREMENT_ID = "G-GGT7XHR7QK";

export const metadata: Metadata = {
  title: "GuideAtlas",
  description: "Discover authentic tours by local experts",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "icon", url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <SiteHeader />
        <div className="siteContent">{children}</div>
        <SiteFooter />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
