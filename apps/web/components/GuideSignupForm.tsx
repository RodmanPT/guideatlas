"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  city: string;
  country: string;
  tourType: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  city: "",
  country: "",
  tourType: "",
};

export default function GuideSignupForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    const cleaned = {
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      city: form.city.trim(),
      country: form.country.trim(),
      tourType: form.tourType.trim(),
    };

    if (!cleaned.name || !cleaned.email || !cleaned.city || !cleaned.country || !cleaned.tourType) {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cleaned.email)) {
      setIsError(true);
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/guide-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cleaned.name,
          email: cleaned.email,
          city: cleaned.city,
          country: cleaned.country,
          tour_type: cleaned.tourType,
        }),
      });

      if (response.status === 409) {
        setIsError(true);
        setMessage("You are already on the waitlist.");
        return;
      }

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setIsError(true);
        setMessage(data?.error ? String(data.error) : "Something went wrong. Please try again.");
        return;
      }

      setMessage("Thank you for joining GuideAtlas. We will contact you soon.");
      setForm(initialState);
    } catch (error) {
      console.error(error);
      setIsError(true);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="signup" id="join-guide" aria-label="Become a founding guide">
      <h2>Become a founding guide</h2>
      <p>Join the early GuideAtlas network and get priority onboarding support.</p>

      <form className="signupForm" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            required
          />
        </label>

        <label>
          City
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
            required
          />
        </label>

        <label>
          Type of tours
          <input
            type="text"
            value={form.tourType}
            onChange={(event) => setForm((prev) => ({ ...prev, tourType: event.target.value }))}
            placeholder="Walking tours, food tours, private tours..."
            required
          />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Join GuideAtlas"}
        </button>
      </form>

      {message ? (
        <p className={isError ? "signupMessage error" : "signupMessage success"}>{message}</p>
      ) : null}
    </section>
  );
}
