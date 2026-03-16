import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | GuideAtlas",
  description: "Learn how GuideAtlas collects and uses personal data and your rights under GDPR.",
  openGraph: {
    title: "Privacy Policy | GuideAtlas",
    description: "Learn how GuideAtlas collects and uses personal data and your rights under GDPR.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <h1>Privacy Policy</h1>
        <p>
          GuideAtlas is building a marketplace that connects travelers with independent local guides. This
          policy explains how we handle personal data, including guide waitlist signups.
        </p>
      </section>

      <section className="card section" aria-label="Privacy policy content">
        <h2>What We Collect</h2>
        <p>
          When you join the guide waitlist, we may collect: your name, email address, city, country, and the
          type of tours you offer.
        </p>

        <h2>Why We Collect It</h2>
        <p>
          We collect this information to process your request to become a guide, communicate with you about
          onboarding, and share product updates relevant to your signup.
        </p>

        <h2>How Data Is Stored</h2>
        <p>
          For the MVP, waitlist submissions are stored in a private Google Sheet accessible only to
          authorized GuideAtlas administrators and service accounts. We apply reasonable security controls
          and limit access to the minimum required.
        </p>

        <h2>GDPR Legal Basis</h2>
        <p>
          We generally rely on your consent and/or our legitimate interest in responding to your inquiry and
          building the GuideAtlas platform. If the legal basis changes as the product evolves, we will
          update this policy.
        </p>

        <h2>Your Rights (GDPR)</h2>
        <p>As an EU/EEA user, you may have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion (right to be forgotten)</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent at any time (where applicable)</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We keep waitlist data only as long as needed to contact you about onboarding and platform updates,
          or until you request deletion.
        </p>

        <h2>Contact</h2>
        <p>
          To request access, correction, or deletion of your data, contact us at{" "}
          <a href="mailto:privacy@guideatlas.com">privacy@guideatlas.com</a>.
        </p>
      </section>

    </main>
  );
}
