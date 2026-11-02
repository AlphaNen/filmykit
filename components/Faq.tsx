"use client";

import { useState } from "react";
import { faq } from "@/content/fylmkit";
import { SectionPill } from "./SectionPill";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section shell">
      <div className="section-head">
        <SectionPill>{faq.pill}</SectionPill>
        <div className="flex w-full flex-col items-center gap-2 text-center">
          <h2 className="type-h1 text-[var(--paper)]">{faq.title}</h2>
        </div>
      </div>

      <div className="card-border w-full max-w-[720px] overflow-hidden">
        {faq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={item.q}
              className="border-b border-[var(--border)] last:border-b-0"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6"
                onClick={() => setOpen(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                <span className="type-body-bold text-[var(--paper)]">{item.q}</span>
                <span
                  className="type-h3 text-[var(--accent)]"
                  aria-hidden
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="type-body px-5 pb-5 md:px-6">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
