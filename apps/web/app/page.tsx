import GuideSignupForm from "../components/GuideSignupForm";
import Link from "next/link";

export default function HomePage() {
  const featuredTours = [
    {
      city: "Lisbon",
      title: "Lisbon Food Tour",
      description: "Taste local classics in neighborhood taverns and family-run markets.",
    },
    {
      city: "Rome",
      title: "Hidden Gems of Rome",
      description: "Walk through quieter streets, artisan corners, and local stories beyond the crowds.",
    },
    {
      city: "Tokyo",
      title: "Tokyo Night Walk",
      description: "Discover neon districts, late-night food spots, and cultural rituals after sunset.",
    },
    {
      city: "Barcelona",
      title: "Barcelona Bike Tour",
      description: "Ride across iconic neighborhoods, seafront paths, and architecture-filled avenues.",
    },
  ];

  const howItWorks = [
    {
      title: "Discover a city",
      description: "Choose a destination and explore experiences designed by people who live there.",
    },
    {
      title: "Choose a tour",
      description: "Compare formats, themes, and durations to find the right tour for your trip style.",
    },
    {
      title: "Explore with a local guide",
      description: "Meet your guide and experience the city through culture, stories, and local perspective.",
    },
  ];

  const trustPoints = [
    "Authentic local experiences",
    "Independent guides",
    "Small group tours",
    "Unique city discoveries",
  ];

  return (
    <main className="homeMain">
      <section className="hero homeHero">
        <p className="homeEyebrow">GuideAtlas for Travelers</p>
        <h1>Discover authentic tours led by local guides</h1>
        <p>
          Explore cities through unique experiences created by independent local guides.
        </p>
        <div className="homeCtaRow">
          <Link className="cta" href="/tours">
            Explore Tours
          </Link>
          <a className="cta ctaGhost" href="#join-guide">
            Become a Guide
          </a>
        </div>
      </section>

      <section className="homeSection" aria-label="Featured tours">
        <h2 className="homeSectionTitle">Featured Tours</h2>
        <p className="homeSectionLead">Preview the kind of memorable experiences travelers can book.</p>
        <div className="grid">
          {featuredTours.map((tour) => (
            <article key={tour.title} className="card homeTourCard">
              <p className="homeCardMeta">{tour.city}</p>
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homeSection sectionAlt" aria-label="How it works">
        <h2 className="homeSectionTitle">How It Works</h2>
        <div className="grid homeStepsGrid">
          {howItWorks.map((step, index) => (
            <article key={step.title} className="card homeStepCard">
              <p className="homeStepNumber">Step {index + 1}</p>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homeSection" aria-label="Why GuideAtlas">
        <h2 className="homeSectionTitle">Why GuideAtlas?</h2>
        <div className="grid">
          {trustPoints.map((point) => (
            <article key={point} className="card homeTrustCard">
              <h3>{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <GuideSignupForm />

      <section className="newsletter homeSection" aria-label="Newsletter signup">
        <h2>Newsletter signup</h2>
        <p>Get early destination drops and platform updates.</p>
        <form>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer className="footer homeFooter" aria-label="Footer">
        <div>
          <h3>Explore Tours</h3>
          <Link href="/tours">Browse Tours by City</Link>
        </div>
        <div>
          <h3>Cities</h3>
          <Link href="/lisbon-tours">Lisbon</Link>
        </div>
        <div>
          <h3>Become a Guide</h3>
          <a href="#join-guide">Join the Waitlist</a>
        </div>
        <div>
          <h3>About GuideAtlas</h3>
          <p className="footerNote">Connecting travelers with authentic local experiences.</p>
        </div>
      </footer>
    </main>
  );
}
