import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { HowItWorksFull } from "@/components/HowItWorks";
import { howItWorks } from "@/content/fylmkit";

export const metadata: Metadata = {
  title: "How it works — fylmkit",
  description: howItWorks.body,
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <PageHero
        pill={howItWorks.pill}
        title={howItWorks.title}
        body={howItWorks.body}
        image={howItWorks.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "How it works" },
        ]}
        cta={{ label: "Join waitlist", href: "#waitlist" }}
      />
      <HowItWorksFull />
      <section className="section shell !pt-0">
        <div className="card-border max-w-[720px] p-6 md:p-8">
          <h2 className="type-h2 text-[var(--paper)]">You stay in control</h2>
          <p className="type-body mt-3">
            Every step is a suggestion you can edit. Change the script, swap a scene,
            adjust timing, replace the voice. The fastest way to lose a brand is to hand
            them content that is not theirs.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
