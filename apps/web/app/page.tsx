import GuideSignupForm from "../components/GuideSignupForm";

export default function HomePage() {
  const featuredTours = [
    "Sunrise Food Walk",
    "Hidden Neighborhood Stories",
    "Local Markets and Traditions",
  ];

  return (
    <main>
      <section className="hero">
        <h1>Discover authentic tours by local experts</h1>
        <p>
          GuideAtlas helps travelers connect with independent local guides for
          meaningful, one-of-a-kind experiences.
        </p>
        <a className="cta" href="#join-guide">
          Become a Guide
        </a>
      </section>

      <section className="grid" aria-label="How GuideAtlas works">
        <article className="card">
          <h2>How it works</h2>
          <p>
            Explore cities, compare local guides, and choose tours that match
            your interests.
          </p>
        </article>
        <article className="card" aria-label="Featured tours placeholder">
          <h2>Featured tours</h2>
          <p>Coming soon: hand-picked local experiences from top guides.</p>
          <ul>
            {featuredTours.map((tour) => (
              <li key={tour}>{tour}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h2>Join as a guide</h2>
          <p>
            Share your local expertise, publish your tours, and grow your
            independent business.
          </p>
        </article>
      </section>

      <GuideSignupForm />

      <section className="newsletter" aria-label="Newsletter signup">
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
    </main>
  );
}
