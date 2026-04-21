import DestinationCard from "../components/DestinationCard";
import GuideSignupForm from "../components/GuideSignupForm";
import HeroCitySearch from "../components/HeroCitySearch";
import TrackEventLink from "../components/TrackEventLink";
import TourCard from "../components/TourCard";
import { CITIES } from "../data/cities";
import { getCityImageUrl } from "../data/cityImages";
import { getCityToursUrl } from "../lib/url";

const FEATURED_TOURS = [
  { city: "Lisbon", citySlug: "lisbon", title: "Lisbon Food Tour", duration: "3h" },
  { city: "Rome", citySlug: "rome", title: "Hidden Gems of Rome", duration: "2.5h" },
  { city: "Tokyo", citySlug: "tokyo", title: "Tokyo Night Walk", duration: "3h" },
  { city: "Barcelona", citySlug: "barcelona", title: "Barcelona Bike Tour", duration: "2h" },
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

const PLATFORM_DIFF_POINTS = [
  "Guides keep full control of bookings and payments",
  "Zero commission on tours",
  "Travelers discover people, not commodity listings",
  "AI-assisted matching based on intent and style",
];

const COMPARE_MARKETPLACE = [
  "Optimized for transaction volume",
  "Price pressure between similar listings",
  "High commissions compress guide margins",
  "Traveler choices feel crowded and repetitive",
];

const COMPARE_ATLAS = [
  "A global discovery layer for independent guides",
  "Profiles that highlight expertise, style, and personality",
  "Bring your own booking flow: website, WhatsApp, Calendly, or preferred tools",
  "Access to local specialists often invisible on major marketplaces",
];

const AI_DISCOVERY_PROMPTS = [
  "Find me a food tour in Lisbon with a local chef.",
  "Show me a photography guide in Tokyo.",
  "Who can take me to hidden places in Rome?",
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
            <TrackEventLink
              className="cta"
              href="/tours"
              eventName="browse_tours_click"
              eventPayload={{ metadata: { source: "home-hero-explore" } }}
            >
              Explore Tours
            </TrackEventLink>
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
          {FEATURED_TOURS.map((tour, index) => (
            <TourCard
              key={tour.title}
              title={tour.title}
              duration={tour.duration}
              guideLabel="Local Guide"
              groupLabel="Small group"
              description={`${tour.city} · Editorial preview card`}
              imageSrc={getCityImageUrl(tour.citySlug)}
              imagePriority={index < 4}
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

      <section className="section positioningSection">
        <div className="sectionHeader">
          <p className="sectionEyebrow">Positioning</p>
          <h2>Not Another Booking Marketplace</h2>
          <p>
            GuideAtlas is not trying to outscale Viator, GetYourGuide, or Airbnb Experiences. We are
            building the opposite: a premium discovery platform where independent guides can stand out.
          </p>
        </div>
        <ul className="positioningPoints">
          {PLATFORM_DIFF_POINTS.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <section className="section compareSection">
        <div className="sectionHeader">
          <h2>How We Compete With Big Brands</h2>
          <p>We do not compete on inventory size. We compete on relevance, authenticity, and guide freedom.</p>
        </div>
        <div className="compareGrid">
          <article className="compareCard">
            <h3>Traditional Marketplaces</h3>
            <ul>
              {COMPARE_MARKETPLACE.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <article className="compareCard compareCardAtlas">
            <h3>GuideAtlas</h3>
            <ul>
              {COMPARE_ATLAS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section sectionSoft audienceSection">
        <div className="sectionHeader">
          <h2>Value For Both Sides</h2>
        </div>
        <div className="audienceGrid">
          <article className="audienceCard">
            <p className="audienceLabel">For Travelers</p>
            <h3>Discover guides worth choosing</h3>
            <p>
              Explore authentic profiles with niche expertise and unique local experiences beyond standardized
              tour catalogs.
            </p>
          </article>
          <article className="audienceCard">
            <p className="audienceLabel">For Guides</p>
            <h3>Grow without giving up control</h3>
            <p>
              Build a premium profile and be discovered globally while keeping your own booking and payment
              stack.
            </p>
          </article>
        </div>
        <div className="aiDiscoveryBlock">
          <p className="aiDiscoveryLabel">AI-assisted discovery</p>
          <ul>
            {AI_DISCOVERY_PROMPTS.map((prompt) => (
              <li key={prompt}>&ldquo;{prompt}&rdquo;</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section sectionSoft guideCtaBlock">
        <div>
          <h2>Are you a local guide?</h2>
          <p>Join the waitlist and be invited when GuideAtlas launches in your city.</p>
        </div>
        <div className="heroActions">
          <a className="cta ctaGhost ctaGhostDark" href="#join-guide">
            Join Waitlist
          </a>
        </div>
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
