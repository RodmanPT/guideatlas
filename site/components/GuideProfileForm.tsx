"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  initialCity?: string;
};

type FormState = {
  name: string;
  email: string;
  city: string;
  country: string;
  languages: string;
  bio: string;
  rating: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  city: "",
  country: "",
  languages: "",
  bio: "",
  rating: "",
};

export default function GuideProfileForm({ initialCity = "" }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ ...initialState, city: initialCity });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const canSubmit = useMemo(
    () => Boolean(form.name.trim() && form.email.trim() && form.city.trim() && form.bio.trim()),
    [form],
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    if (!canSubmit) {
      setIsError(true);
      setMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/guides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          city: form.city.trim(),
          country: form.country.trim(),
          languages: form.languages.trim(),
          bio: form.bio.trim(),
          rating: form.rating.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string; guide?: { slug: string } } | null;

      if (!response.ok) {
        setIsError(true);
        setMessage(data?.error ? String(data.error) : "Could not create guide profile.");
        return;
      }

      setMessage("Guide profile published.");
      if (data?.guide?.slug) {
        router.push(`/guides/${data.guide.slug}`);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Could not create guide profile.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="signup" aria-label="Guide profile form">
      <h2>Create your public guide profile</h2>
      <p>Publish your profile so travelers can discover you by city.</p>

      <form className="signupForm" onSubmit={onSubmit}>
        <label>
          Name *
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>

        <label>
          City *
          <input
            type="text"
            value={form.city}
            onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
            required
          />
        </label>

        <label>
          Country
          <input
            type="text"
            value={form.country}
            onChange={(event) => setForm((prev) => ({ ...prev, country: event.target.value }))}
          />
        </label>

        <label>
          Languages (comma separated)
          <input
            type="text"
            value={form.languages}
            onChange={(event) => setForm((prev) => ({ ...prev, languages: event.target.value }))}
            placeholder="English, Portuguese"
          />
        </label>

        <label>
          Bio *
          <textarea
            value={form.bio}
            onChange={(event) => setForm((prev) => ({ ...prev, bio: event.target.value }))}
            required
            rows={4}
          />
        </label>

        <label>
          Rating (optional)
          <input
            type="number"
            min="0"
            max="5"
            step="0.1"
            value={form.rating}
            onChange={(event) => setForm((prev) => ({ ...prev, rating: event.target.value }))}
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish Guide Profile"}
        </button>
      </form>

      {message ? <p className={isError ? "signupMessage error" : "signupMessage success"}>{message}</p> : null}
    </section>
  );
}
