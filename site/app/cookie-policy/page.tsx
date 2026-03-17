import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | GuideAtlas",
  description: "Information about cookies used by the GuideAtlas website.",
  openGraph: {
    title: "Cookie Policy | GuideAtlas",
    description: "Information about cookies used by the GuideAtlas website.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <h1>Cookie Policy</h1>
        <p>
          This page explains how GuideAtlas uses cookies and similar technologies. Last updated on
          March 17, 2026.
        </p>
      </section>

      <section className="card section" aria-label="Cookie policy content">
        <h2>Essential Storage</h2>
        <p>
          GuideAtlas uses essential storage to keep the website working and to remember your cookie
          preferences. This includes the local storage key <code>guideatlas.cookieConsent.v1</code>.
        </p>

        <h2>Analytics Cookies (Google Analytics)</h2>
        <p>
          If you accept analytics cookies, GuideAtlas loads Google Analytics 4 (measurement ID{" "}
          <code>G-GGT7XHR7QK</code>) to understand how visitors use the site. Google Analytics may set
          cookies such as <code>_ga</code> and <code>_ga_*</code> to measure usage patterns.
        </p>

        <h2>Consent and Control</h2>
        <p>
          Analytics cookies are optional and are only loaded after you provide consent in the cookie
          banner. You can reject analytics cookies in the preference modal.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings, including blocking or deleting cookies. If
          you clear site data, you will be asked for cookie preferences again on your next visit.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about cookies, contact{" "}
          <a href="mailto:privacy@guideatlas.com">privacy@guideatlas.com</a>.
        </p>
      </section>

    </main>
  );
}
