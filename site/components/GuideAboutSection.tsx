type Props = {
  paragraphs: string[];
};

export default function GuideAboutSection({ paragraphs }: Props) {
  return (
    <section className="card section" aria-label="Guide about section">
      <h2>About</h2>
      <div className="guideAboutText">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

