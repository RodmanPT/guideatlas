import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter" aria-label="Footer">
      <div className="siteFooterInner">
        <div className="siteFooterBrand">
          <p className="siteFooterLogo">GuideAtlas</p>
          <p>Discover cities through local people and authentic experiences.</p>
        </div>

        <div>
          <h3>About</h3>
          <Link href="/">Home</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>

        <div>
          <h3>Become a Guide</h3>
          <Link href="/become-guide">Join as Guide</Link>
          <Link href="/#join-guide">Guide Waitlist</Link>
        </div>

        <div>
          <h3>Destinations</h3>
          <Link href="/tours">Browse Cities</Link>
          <Link href="/lisbon-tours">Lisbon</Link>
          <Link href="/rome-tours">Rome</Link>
          <Link href="/tokyo-tours">Tokyo</Link>
          <a href="mailto:hello@guideatlas.app">Contact</a>
        </div>
      </div>
    </footer>
  );
}
