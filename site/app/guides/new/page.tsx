import type { Metadata } from "next";

import GuideProfileForm from "../../../components/GuideProfileForm";

export const metadata: Metadata = {
  title: "Create Guide Profile | GuideAtlas",
  description: "Publish your guide profile and get discovered by travelers by city.",
  openGraph: {
    title: "Create Guide Profile | GuideAtlas",
    description: "Publish your guide profile and get discovered by travelers by city.",
    type: "website",
  },
};

type PageProps = {
  searchParams?: {
    city?: string;
  };
};

export default function NewGuideProfilePage({ searchParams }: PageProps) {
  const initialCity = (searchParams?.city ?? "").trim();

  return (
    <main className="pageMain">
      <section className="hero heroCompact">
        <h1>Create your guide profile</h1>
        <p>Share your story, languages, and city expertise so travelers can discover your tours.</p>
      </section>

      <GuideProfileForm initialCity={initialCity} />
    </main>
  );
}

