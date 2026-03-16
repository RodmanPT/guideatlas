import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="siteHeader" aria-label="Main navigation">
      <div className="siteHeaderInner">
        <Link href="/" className="siteLogo" aria-label="GuideAtlas home">
          <Image
            src="/logo-icon.png"
            alt="GuideAtlas logo"
            width={40}
            height={40}
            className="siteLogoImage"
            priority
          />
          <span className="siteLogoText">GuideAtlas</span>
        </Link>

        <nav className="siteNav" aria-label="Primary">
          <Link href="/tours">Destinations</Link>
          <Link href="/become-guide">Become a Guide</Link>
          <Link href="/tours" className="siteSearchLink" aria-label="Search destinations">
            <span aria-hidden="true">⌕</span>
            <span className="siteSearchLabel">Search</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
