import Link from "next/link";
import type { Metadata } from "next";

import styles from "./page.module.css";

const METRICS = [
  { label: "New leads this week", value: "27", delta: "+18%" },
  { label: "Response rate", value: "92%", delta: "+6%" },
  { label: "Groups in pipeline", value: "11", delta: "+3" },
  { label: "Profile views", value: "1,284", delta: "+22%" },
];

const CALENDAR_ITEMS = [
  { day: "Mon", slot: "09:30 - 12:30", tour: "Lisbon Food Circuit", status: "Open spots: 4" },
  { day: "Tue", slot: "15:00 - 18:00", tour: "Hidden Alleys Walk", status: "Private group" },
  { day: "Wed", slot: "10:00 - 13:00", tour: "Riverside Photo Tour", status: "Open spots: 2" },
  { day: "Fri", slot: "17:30 - 20:00", tour: "Sunset Storytelling", status: "Waitlist: 6" },
];

const MONTH_NAME = "April 2026";
const MONTH_WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTH_START_OFFSET = 2; // Month starts on Wednesday.
const MONTH_DAYS = 30;
const BUSY_DAYS = new Set([2, 5, 8, 10, 14, 16, 18, 22, 25, 29]);
const PARTIAL_DAYS = new Set([3, 7, 11, 15, 21, 27]);

const GROUPS = [
  { name: "Family Group / Canada", size: "5 travelers", stage: "New lead" },
  { name: "Corporate Team / Germany", size: "12 travelers", stage: "Contacted" },
  { name: "Couple / Mexico", size: "2 travelers", stage: "Negotiating" },
  { name: "Student Group / Spain", size: "18 travelers", stage: "Confirmed" },
];

const LEADS = [
  {
    traveler: "Anna Keller",
    request: "Food tour for 4 people with vegetarian options",
    channel: "Email",
  },
  {
    traveler: "Marc Dubois",
    request: "Private walking tour + custom local spots",
    channel: "WhatsApp",
  },
  {
    traveler: "Nina Rocha",
    request: "Small group photography tour at sunrise",
    channel: "Email",
  },
];

const SOCIAL_PLATFORMS = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Facebook",
  "Google Business",
  "Tripadvisor",
];

const PUBLIC_PROFILE_POINTS = [
  "How travelers see your story, style, and expertise",
  "Showcase tours, photos, trust signals, and social proof",
  "Built to convert discovery into direct contact",
];

const WORKSPACE_POINTS = [
  "Plan calendar slots and manage group capacity",
  "Handle lead communication by Email and WhatsApp",
  "Use AI support and integrations to speed up follow-ups",
];

export const metadata: Metadata = {
  title: "Guide Dashboard Demo | GuideAtlas",
  description: "Preview the future guide workspace with calendar, lead inbox, groups and integrations.",
};

export default function GuideDashboardDemoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Guide Workspace Demo</p>
        <h1>Your command center as an independent guide</h1>
        <p>
          See how GuideAtlas can help you manage availability, group leads, direct messaging, and social presence
          from one polished workspace.
        </p>
        <div className={styles.heroActions}>
          <a className={styles.primaryCta} href="/#join-guide">
            Join Guide Waitlist
          </a>
          <Link className={styles.ghostCta} href="/become-guide">
            Back to Guide Page
          </Link>
        </div>
      </section>

      <section className={styles.dualViewSection} aria-label="Guide dual perspective">
        <article className={styles.perspectiveCard}>
          <p className={styles.perspectiveTag}>Public side</p>
          <h2>Your visible profile for travelers</h2>
          <ul className={styles.perspectiveList}>
            {PUBLIC_PROFILE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <Link className={styles.ghostCta} href="/guides/maria-santos">
            Open Demo Public Profile
          </Link>
        </article>
        <article className={styles.perspectiveCard}>
          <p className={styles.perspectiveTag}>Guide side</p>
          <h2>Your private productivity workspace</h2>
          <ul className={styles.perspectiveList}>
            {WORKSPACE_POINTS.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <a className={styles.ghostCta} href="#workspace">
            Jump to Workspace Demo
          </a>
        </article>
      </section>

      <section className={styles.metricsGrid} aria-label="Guide dashboard metrics" id="workspace">
        {METRICS.map((metric) => (
          <article className={styles.metricCard} key={metric.label}>
            <p>{metric.label}</p>
            <strong>{metric.value}</strong>
            <span>{metric.delta}</span>
          </article>
        ))}
      </section>

      <section className={styles.mainGrid}>
        <article className={styles.panel}>
          <header className={styles.panelHeader}>
            <h2>Calendar and availability</h2>
            <p>Manage schedule blocks, recurring tours, and private requests without spreadsheet chaos.</p>
          </header>
          <div className={styles.monthCard} aria-label="Monthly availability snapshot">
            <div className={styles.monthHeader}>
              <h3>{MONTH_NAME}</h3>
              <p>Monthly view</p>
            </div>
            <div className={styles.monthGrid} role="grid" aria-label={`${MONTH_NAME} calendar`}>
              {MONTH_WEEK_DAYS.map((weekDay) => (
                <span key={weekDay} className={styles.monthWeekday}>
                  {weekDay}
                </span>
              ))}
              {Array.from({ length: 35 }, (_, index) => {
                const dayNumber = index - MONTH_START_OFFSET + 1;
                if (dayNumber < 1 || dayNumber > MONTH_DAYS) {
                  return <span key={`empty-${index}`} className={styles.monthCellEmpty} aria-hidden="true" />;
                }

                const dayState = BUSY_DAYS.has(dayNumber)
                  ? "busy"
                  : PARTIAL_DAYS.has(dayNumber)
                    ? "partial"
                    : "free";

                return (
                  <span
                    key={`day-${dayNumber}`}
                    className={`${styles.monthCell} ${
                      dayState === "busy"
                        ? styles.monthCellBusy
                        : dayState === "partial"
                          ? styles.monthCellPartial
                          : styles.monthCellFree
                    }`}
                    role="gridcell"
                    aria-label={`Day ${dayNumber}, ${dayState}`}
                  >
                    {dayNumber}
                  </span>
                );
              })}
            </div>
            <div className={styles.monthLegend}>
              <span>
                <i className={`${styles.legendDot} ${styles.legendBusy}`} aria-hidden="true" />
                Busy
              </span>
              <span>
                <i className={`${styles.legendDot} ${styles.legendPartial}`} aria-hidden="true" />
                Limited spots
              </span>
              <span>
                <i className={`${styles.legendDot} ${styles.legendFree}`} aria-hidden="true" />
                Free
              </span>
            </div>
          </div>
          <ul className={styles.list}>
            {CALENDAR_ITEMS.map((item) => (
              <li key={`${item.day}-${item.tour}`}>
                <span>{item.day}</span>
                <div>
                  <strong>{item.tour}</strong>
                  <p>{item.slot}</p>
                </div>
                <em>{item.status}</em>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.panel}>
          <header className={styles.panelHeader}>
            <h2>Group pipeline</h2>
            <p>Track every interested group from first message to confirmed experience.</p>
          </header>
          <ul className={styles.list}>
            {GROUPS.map((group) => (
              <li key={group.name}>
                <span>{group.stage}</span>
                <div>
                  <strong>{group.name}</strong>
                  <p>{group.size}</p>
                </div>
                <em>Open card</em>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.secondaryGrid}>
        <article className={styles.panel}>
          <header className={styles.panelHeader}>
            <h2>Lead inbox and direct messaging</h2>
            <p>Reply quickly through email or WhatsApp with smart templates and saved replies.</p>
          </header>
          <div className={styles.leadStack}>
            {LEADS.map((lead) => (
              <article className={styles.leadCard} key={lead.traveler}>
                <p className={styles.leadName}>{lead.traveler}</p>
                <p className={styles.leadRequest}>{lead.request}</p>
                <div className={styles.leadActions}>
                  <button type="button">Send Email</button>
                  <button type="button">Send WhatsApp</button>
                  <button type="button">Move to CRM</button>
                </div>
                <span>{lead.channel} preferred</span>
              </article>
            ))}
          </div>
        </article>

        <article className={`${styles.panel} ${styles.panelAccent}`}>
          <header className={styles.panelHeader}>
            <h2>Profile and social integrations</h2>
            <p>Connect external channels to boost credibility and close leads faster.</p>
          </header>
          <div className={styles.integrationCard}>
            <h3>Social platform integrations</h3>
            <p>
              Connect your guide profile to the channels where travelers already discover you.
            </p>
            <div className={styles.platformChips} aria-label="Supported social platforms">
              {SOCIAL_PLATFORMS.map((platform) => (
                <span key={platform} className={styles.platformChip}>
                  {platform}
                </span>
              ))}
            </div>
            <ul>
              <li>Show your latest posts and videos directly in your guide page</li>
              <li>Keep your profile active with fresh social proof from multiple channels</li>
              <li>Publish tour openings to your connected platforms in one flow</li>
            </ul>
          </div>
          <div className={styles.integrationCard}>
            <h3>AI co-pilot</h3>
            <p>Generate reply drafts, tour descriptions, and follow-up messages in your tone.</p>
            <ul>
              <li>Suggests best time slots by demand</li>
              <li>Drafts personalized responses in seconds</li>
              <li>Highlights at-risk leads before they go cold</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
