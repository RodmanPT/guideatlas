import Link from "next/link";

type EmptyStateProps = {
  title: string;
  text: string;
  actionHref: string;
  actionLabel: string;
};

export default function EmptyState({ title, text, actionHref, actionLabel }: EmptyStateProps) {
  return (
    <section className="emptyState" aria-label={title}>
      <div className="emptyStateIllustration" aria-hidden="true" />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link className="cta" href={actionHref}>
        {actionLabel}
      </Link>
    </section>
  );
}

