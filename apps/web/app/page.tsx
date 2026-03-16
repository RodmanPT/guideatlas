import GuideSignupForm from "../components/GuideSignupForm";
import Link from "next/link";

import { CITIES } from "../data/cities";
import { getCityToursUrl } from "../lib/url";

export default function HomePage() {
  const cityImages: Record<string, string> = {
    lisbon:
      "https://images.unsplash.com/photo-1525207934214-58e69a8f8a8b?auto=format&fit=crop&w=1200&q=60",
    porto:
      "https://images.unsplash.com/photo-1526401485004-2aa7c11e1a7c?auto=format&fit=crop&w=1200&q=60",
    madrid:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=60",
    barcelona:
      "https://images.unsplash.com/photo-1509803874385-db7c23652552?auto=format&fit=crop&w=1200&q=60",
    rome:
      "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1200&q=60",
    paris:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=60",
    london:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=60",
    tokyo:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=60",
    bangkok:
      "https://images.unsplash.com/photo-1540610615066-8e7e9278d2b3?auto=format&fit=crop&w=1200&q=60",
    "new-york":
      "https://images.unsplash.com/photo-1546436836-07a91091f160?auto=format&fit=crop&w=1200&q=60",
  };

  const featuredExperiences = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1520967824495-b529aeba26df?auto=format&fit=crop&w=1200&q=60",
      city: "Lisbon",
      title: "Lisbon Food Tour",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1200&q=60",
      city: "Rome",
      title: "Hidden Gems of Rome",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=60",
      city: "Tokyo",
      title: "Tokyo Night Walk",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1528747045269-390fe33c19a3?auto=format&fit=crop&w=1200&q=60",
      city: "Barcelona",
      title: "Barcelona Bike Tour",
    },
  ];

  const howItWorks = [
    {
      title: "Discover a city",
      description: "Start with a destination and browse experiences shaped by local culture.",
    },
    {
      title: "Choose a tour",
      description: "Pick a tour style: food, walking, private, and more (coming soon).",
    },
    {
      title: "Explore with a local guide",
      description: "Meet your guide and experience neighborhoods through real local perspective.",
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
        <div className="homeHeroContent">
          <p className="homeEyebrow">GuideAtlas</p>
          <h1>Explore cities through local guides</h1>
          <p>Discover authentic tours created by independent guides around the world.</p>
          <div className="homeCtaRow">
            <Link className="cta" href="/tours">
              Explore Tours
            </Link>
            <a className="cta ctaGhost" href="#join-guide">
              Become a Guide
            </a>
          </div>
        </div>
        <div className="homeHeroMedia" aria-hidden="true">
          <div className="homeHeroPhoto" />
          <div className="homeHeroStat">
            <p className="homeHeroStatKicker">Launching soon</p>
            <p className="homeHeroStatValue">Local tours, real people</p>
          </div>
        </div>
      </section>

      <section className="homeSection" aria-label="Featured experiences">
        <div className="homeSectionHeader">
          <h2 className="homeSectionTitle">Featured Experiences</h2>
          <p className="homeSectionLead">A quick taste of the experiences travelers love to book.</p>
        </div>
        <div className="homeExperienceGrid">
          {featuredExperiences.map((experience) => (
            <article key={experience.title} className="homeExperienceCard">
              <div className="homeExperienceImageWrap">
                <img
                  className="homeExperienceImage"
                  src={experience.imageUrl}
                  alt={`${experience.city} city photo`}
                  loading="lazy"
                />
              </div>
              <div className="homeExperienceBody">
                <p className="homeCardMeta">{experience.city}</p>
                <h3>{experience.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="homeSection" aria-label="Browse by city">
        <div className="homeSectionHeader">
          <h2 className="homeSectionTitle">Browse by City</h2>
          <p className="homeSectionLead">Pick a destination and explore tours created by independent local guides.</p>
        </div>
        <div className="homeCityGrid" aria-label="Cities">
          {CITIES.map((city) => (
            <Link key={city.slug} className="homeCityCard" href={getCityToursUrl(city.slug)}>
              <div className="homeCityImageWrap" aria-hidden="true">
                <img
                  className="homeCityImage"
                  src={cityImages[city.slug]}
                  alt={`${city.name} photo`}
                  loading="lazy"
                />
              </div>
              <div className="homeCityBody">
                <h3>{city.name}</h3>
                <p>{city.country}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="homeSection sectionAlt" aria-label="How GuideAtlas works">
        <div className="homeSectionHeader">
          <h2 className="homeSectionTitle">How GuideAtlas Works</h2>
          <p className="homeSectionLead">A simple flow for travelers, built around local expertise.</p>
        </div>
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
        <div className="homeSectionHeader">
          <h2 className="homeSectionTitle">Why GuideAtlas?</h2>
          <p className="homeSectionLead">Built for travelers who want authentic experiences, not generic tours.</p>
        </div>
        <ul className="homeTrustList">
          {trustPoints.map((point) => (
            <li key={point} className="homeTrustItem">
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="homeSection sectionAlt" aria-label="Guide call to action">
        <div className="homeGuideCta">
          <div>
            <h2 className="homeSectionTitle">Are you a local guide?</h2>
            <p className="homeSectionLead">
              Create tours and share your city with travelers from around the world.
            </p>
          </div>
          <a className="cta" href="#join-guide">
            Become a Guide
          </a>
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
          {CITIES.slice(0, 4).map((city) => (
            <Link key={city.slug} href={getCityToursUrl(city.slug)}>
              {city.name}
            </Link>
          ))}
        </div>
        <div>
          <h3>Become a Guide</h3>
          <a href="#join-guide">Join the Waitlist</a>
        </div>
        <div>
          <h3>About GuideAtlas</h3>
          <p className="footerNote">Connecting travelers with authentic local experiences.</p>
          <div className="homeFooterLegal" aria-label="Legal links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
