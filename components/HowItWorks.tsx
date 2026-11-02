"use client";

import { useState } from "react";
import { howItWorks } from "@/content/fylmkit";
import { SectionPill } from "./SectionPill";
import { PrimaryButton } from "./PrimaryButton";

export function HowItWorksTeaser() {
  return (
    <section id="how-it-works" className="section shell">
      <div className="section-head">
        <SectionPill>{howItWorks.pill}</SectionPill>
        <div className="flex w-full flex-col gap-2 text-left">
          <h2 className="type-h1 text-[var(--paper)]">{howItWorks.title}</h2>
          <p className="type-body">{howItWorks.summary}</p>
        </div>
      </div>

      <div className="grid w-full gap-3 md:grid-cols-3">
        {howItWorks.steps.slice(0, 3).map((step, index) => (
          <article key={step.title} className="card-border flex flex-col gap-3 p-5">
            <span className="type-caption text-[var(--accent)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="type-h3 text-[var(--paper)]">{step.title}</h3>
            <p className="type-body-small">{step.body}</p>
          </article>
        ))}
      </div>

      <PrimaryButton
        href={howItWorks.href}
        label="See the full chain"
        variant="secondary"
      />
    </section>
  );
}

export function HowItWorksFull() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section shell !pt-0">
      <div className="flex w-full max-w-[1080px] flex-col">
        {howItWorks.steps.map((card, index) => {
          const isOpen = open === index;
          return (
            <button
              key={card.title}
              type="button"
              onClick={() => setOpen(index)}
              className="w-full border-b border-[var(--border)] p-5 text-left transition-colors md:p-8"
              style={{
                background: isOpen ? "rgba(255,107,44,0.04)" : "transparent",
              }}
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="flex min-w-[220px] items-start gap-4">
                  <span
                    className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h2 className="type-h2 text-[var(--paper)]">{card.title}</h2>
                    <p className="type-body-small">{card.subtitle}</p>
                  </div>
                </div>

                <div
                  className={`grid flex-1 transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] md:grid-rows-[1fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-5 md:max-w-[560px]">
                      <p className="type-body">{card.body}</p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {card.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 type-caption text-[var(--text-secondary)]"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ background: "var(--accent)" }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
