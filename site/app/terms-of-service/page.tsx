import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | GuideAtlas",
  description: "Terms for using the GuideAtlas platform as a traveler or independent guide.",
  openGraph: {
    title: "Terms of Service | GuideAtlas",
    description: "Terms for using the GuideAtlas platform as a traveler or independent guide.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <h1>Terms of Service</h1>
        <p>
          GuideAtlas is a platform that connects travelers with independent local guides offering tours and
          experiences. These terms outline responsibilities and limitations for using the site.
        </p>
      </section>

      <section className="card section" aria-label="Terms of service content">
        <h2>Platform Role</h2>
        <p>
          GuideAtlas provides discovery and communication tools. Guides are independent providers. Unless
          explicitly stated otherwise, GuideAtlas is not the organizer or operator of tours.
        </p>

        <h2>User Responsibilities (Travelers)</h2>
        <ul>
          <li>Provide accurate information when contacting guides or submitting requests</li>
          <li>Respect local laws, customs, and safety instructions</li>
          <li>Use the platform in good faith and avoid abusive or fraudulent activity</li>
        </ul>

        <h2>Guide Responsibilities</h2>
        <ul>
          <li>Provide accurate tour descriptions and availability (when applicable)</li>
          <li>Maintain any required licenses/permits and appropriate insurance (where required by law)</li>
          <li>Deliver tours professionally, safely, and in compliance with local regulations</li>
        </ul>

        <h2>Content and Conduct</h2>
        <p>
          You agree not to misuse the platform, scrape protected areas, upload unlawful content, or
          interfere with normal operations.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, GuideAtlas is not liable for losses arising from tours,
          guide services, traveler behavior, or third-party actions. This includes but is not limited to
          injury, delays, cancellations, or disputes between travelers and guides.
        </p>

        <h2>Future Booking Terms</h2>
        <p>
          Booking, payments, refunds, and cancellation rules may be introduced in the future (for example,
          via Stripe). If/when bookings are enabled, additional terms will apply and will be presented
          before purchase.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms as the platform evolves. Material changes will be reflected on this
          page with a revised date.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href="mailto:support@guideatlas.app">support@guideatlas.app</a>.
        </p>
      </section>

    </main>
  );
}
