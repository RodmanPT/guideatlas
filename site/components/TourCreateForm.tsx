"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toSlug } from "../../shared/utils/helpers";

type Props = {
  initialGuideSlug?: string;
  initialCity?: string;
};

type FormState = {
  guideSlug: string;
  title: string;
  city: string;
  duration: string;
  price: string;
  description: string;
  meetingPoint: string;
};

const initialState: FormState = {
  guideSlug: "",
  title: "",
  city: "",
  duration: "",
  price: "",
  description: "",
  meetingPoint: "",
};

export default function TourCreateForm({ initialGuideSlug = "", initialCity = "" }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    ...initialState,
    guideSlug: initialGuideSlug,
    city: initialCity,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const canSubmit = useMemo(
    () =>
      Boolean(
        form.guideSlug.trim() &&
          form.title.trim() &&
          form.city.trim() &&
          form.duration.trim() &&
          form.price.trim() &&
          form.description.trim() &&
          form.meetingPoint.trim(),
      ),
    [form],
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    if (!canSubmit) {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/tours", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guide_slug: form.guideSlug.trim().toLowerCase(),
          title: form.title.trim(),
          city: form.city.trim(),
          duration: form.duration.trim(),
          price: form.price.trim(),
          description: form.description.trim(),
          meeting_point: form.meetingPoint.trim(),
        }),
      });

      const data = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        setIsError(true);
        setMessage(data?.error ? String(data.error) : "Could not publish tour.");
        return;
      }

      setMessage("Tour published successfully.");
      router.push(`/${toSlug(form.city)}-tours`);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Could not publish tour.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="signup" aria-label="Tour creation form">
      <h2>Publish a tour</h2>
      <p>Add your tour so travelers can book it from your city page.</p>
      <p>
        Do not have a guide slug yet? <a href="/guides/new">Create your guide profile first</a>.
      </p>

      <form className="signupForm" onSubmit={onSubmit}>
        <label>
          Guide slug *
          <input
            type="text"
            value={form.guideSlug}
            onChange={(event) => setForm((prev) => ({ ...prev, guideSlug: event.target.value }))}
            placeholder="maria-lisbon"
            required
          />
        </label>

        <label>
          Tour title *
          <input
            type="text"
            value={form.title}
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
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
          Duration *
          <input
            type="text"
            value={form.duration}
            onChange={(event) => setForm((prev) => ({ ...prev, duration: event.target.value }))}
            placeholder="3 hours"
            required
          />
        </label>

        <label>
          Price *
          <input
            type="text"
            value={form.price}
            onChange={(event) => setForm((prev) => ({ ...prev, price: event.target.value }))}
            placeholder="€45"
            required
          />
        </label>

        <label>
          Meeting point *
          <input
            type="text"
            value={form.meetingPoint}
            onChange={(event) => setForm((prev) => ({ ...prev, meetingPoint: event.target.value }))}
            required
          />
        </label>

        <label>
          Description *
          <textarea
            value={form.description}
            onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
            rows={4}
            required
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish Tour"}
        </button>
      </form>

      {message ? <p className={isError ? "signupMessage error" : "signupMessage success"}>{message}</p> : null}
    </section>
  );
}
