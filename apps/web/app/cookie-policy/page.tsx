import type { Metadata } from "next";
import Link from "next/link";

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
    <main>
      <section className="hero">
        <h1>Cookie Policy</h1>
        <p>This page explains how GuideAtlas uses cookies and similar technologies.</p>
      </section>

      <section className="card" aria-label="Cookie policy content">
        <h2>Essential Cookies</h2>
        <p>
          Essential cookies may be used to enable core functionality and security. For example, they can
          help protect forms and maintain basic site performance.
        </p>

        <h2>Analytics Cookies (Future)</h2>
        <p>
          We may introduce analytics to understand how the site is used and improve user experience. If we
          add analytics cookies, we will update this policy and, where required, provide consent controls.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings, including blocking or deleting cookies. If
          you disable cookies, some site features may not work as intended.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about cookies, contact{" "}
          <a href="mailto:privacy@guideatlas.com">privacy@guideatlas.com</a>.
        </p>
      </section>

      <footer className="footer" aria-label="Footer">
        <Link href="/">Home</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms-of-service">Terms</Link>
      </footer>
    </main>
  );
}

