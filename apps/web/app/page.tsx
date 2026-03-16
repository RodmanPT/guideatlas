import Link from "next/link";

import DestinationCard from "../components/DestinationCard";
import GuideSignupForm from "../components/GuideSignupForm";
import HeroCitySearch from "../components/HeroCitySearch";
import TourCard from "../components/TourCard";
import { CITIES } from "../data/cities";
import { getCityToursUrl } from "../lib/url";

const FEATURED_TOURS = [
  { city: "Lisbon", title: "Lisbon Food Tour", duration: "3h" },
  { city: "Rome", title: "Hidden Gems of Rome", duration: "2.5h" },
  { city: "Tokyo", title: "Tokyo Night Walk", duration: "3h" },
  { city: "Barcelona", title: "Barcelona Bike Tour", duration: "2h" },
];

const HOW_IT_WORKS = [
  {
    title: "Explore Cities",
    text: "Browse curated destination pages and discover where local guides are already launching tours.",
  },
  {
    title: "Find Unique Tours",
    text: "Compare authentic experiences designed around neighborhoods, food culture, and local stories.",
  },
  {
    title: "Meet Local Guides",
    text: "Connect directly with independent guides who know each city beyond the usual tourist path.",
  },
];

const TRUST_POINTS = [
  "Authentic local experiences",
  "Independent guides",
  "Small group tours",
  "Unique city discoveries",
];

export default function HomePage() {
  const featuredCities = CITIES.slice(0, 9);

  return (
    <main className="pageMain">
      <section className="heroVideo">
        <video
          className="heroVideoMedia"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/city-placeholder.svg"
        >
          <source src="/videos/guideatlas-hero.mp4" type="video/mp4" />
        </video>
        <div className="heroVideoOverlay" />

        <div className="heroVideoContent">
          <p className="heroKicker">Travel discovery platform</p>
          <h1>Find Tours Created by Locals</h1>
          <p>Discover cities through the people who know them best.</p>
          <div className="heroSearchWrap">
            <HeroCitySearch />
          </div>
          <div className="heroActions">
            <Link className="cta" href="/tours">
              Explore Tours
            </Link>
            <a className="cta ctaGhost" href="#join-guide">
              Become a Guide
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>How It Works</h2>
        </div>
        <div className="stepsGrid">
          {HOW_IT_WORKS.map((step) => (
            <article className="stepCard" key={step.title}>
              <span className="stepIcon" aria-hidden="true">
                ◉
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Featured Destinations</h2>
          <p>Explore city pages and upcoming local experiences.</p>
        </div>
        <div className="destinationGrid">
          {featuredCities.map((city) => (
            <DestinationCard
              key={city.slug}
              href={getCityToursUrl(city.slug)}
              citySlug={city.slug}
              cityName={city.name}
              country={city.country}
            />
          ))}
        </div>
      </section>

      <section className="section sectionSoft">
        <div className="sectionHeader">
          <h2>Tour Card Preview</h2>
          <p>Reusable tour cards designed for future guide-published experiences.</p>
        </div>
        <div className="tourGrid">
          {FEATURED_TOURS.map((tour) => (
            <TourCard
              key={tour.title}
              title={tour.title}
              duration={tour.duration}
              guideLabel="Local Guide"
              groupLabel="Small group"
              description={`${tour.city} · Editorial preview card`}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <h2>Why GuideAtlas?</h2>
        </div>
        <ul className="trustGrid">
          {TRUST_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="section sectionSoft guideCtaBlock">
        <div>
          <h2>Are you a local guide?</h2>
          <p>Create tours and share your city with travelers from around the world.</p>
        </div>
        <a className="cta" href="#join-guide">
          Become a Guide
        </a>
      </section>

      <GuideSignupForm />

      <section className="newsletter section" aria-label="Newsletter signup">
        <h2>Newsletter Signup</h2>
        <p>Get early destination drops and platform updates.</p>
        <form>
          <input type="email" name="email" placeholder="you@example.com" aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
