"use client";

import { FormEvent, useState } from "react";
import { waitlist } from "@/content/fylmkit";
import { SectionPill } from "./SectionPill";
import { PrimaryButton } from "./PrimaryButton";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [industry, setIndustry] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, industry }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong");
      }
      setStatus("done");
      setMessage(waitlist.success);
      setEmail("");
      setIndustry("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="waitlist" className="section shell">
      <div className="section-head">
        <SectionPill>{waitlist.pill}</SectionPill>
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <h2 className="type-h1 text-[var(--paper)]">{waitlist.title}</h2>
          <p className="type-body w-full max-w-[560px] px-1">{waitlist.body}</p>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="card-border flex w-full max-w-[720px] flex-col gap-5 overflow-hidden p-6 md:p-8"
      >
        <label className="flex flex-col gap-2">
          <span className="type-body-small text-[var(--paper)]">
            {waitlist.emailLabel}
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@brand.com"
            className="rounded-[12px] border border-[var(--border)] bg-[var(--bg)] px-4 py-3 type-body text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="type-body-small text-[var(--paper)]">
            {waitlist.industryLabel}
          </span>
          <select
            name="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="rounded-[12px] border border-[var(--border)] bg-[var(--bg)] px-4 py-3 type-body text-[var(--paper)] outline-none focus:border-[var(--accent)]"
          >
            <option value="">{waitlist.industryPlaceholder}</option>
            {waitlist.industries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <PrimaryButton
          type="submit"
          label={status === "loading" ? "Joining…" : waitlist.submit}
          variant="primary"
          disabled={status === "loading"}
          className="w-full disabled:opacity-60"
        />

        {message ? (
          <p
            className="type-body-small"
            style={{
              color: status === "error" ? "#ff8f8f" : "var(--paper)",
            }}
            role="status"
          >
            {message}
          </p>
        ) : (
          <p className="type-caption">{waitlist.micro}</p>
        )}
      </form>
    </section>
  );
}
