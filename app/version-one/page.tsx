import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { ScrubCard } from "@/components/ScrubCard";
import { versionOne } from "@/content/fylmkit";

export const metadata: Metadata = {
  title: "Version one — fylmkit",
  description: versionOne.body,
};

export default function VersionOnePage() {
  const [a, b, c, d] = versionOne.scenes;

  return (
    <PageShell>
      <PageHero
        pill={versionOne.pill}
        title={versionOne.title}
        body={versionOne.body}
        image={versionOne.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Version one" },
        ]}
        cta={{ label: "Join waitlist", href: "#waitlist" }}
      />

      <section className="section shell !pt-0">
        <div className="flex w-full flex-col gap-3">
          <h2 className="type-h2 text-[var(--paper)]">Scene types</h2>
          <p className="type-body max-w-[640px]">
            Designed scenes for real content. Open any card for the full breakdown.
          </p>
        </div>
        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full flex-col gap-2 md:flex-row">
            <ScrubCard {...a} href={a.href} wide />
            <ScrubCard {...b} href={b.href} />
          </div>
          <div className="flex w-full flex-col gap-2 md:flex-row">
            <ScrubCard {...c} href={c.href} />
            <ScrubCard {...d} href={d.href} wide />
          </div>
        </div>
      </section>

      <section className="section shell !pt-0">
        <div className="flex w-full flex-col gap-3">
          <h2 className="type-h2 text-[var(--paper)]">What version one does</h2>
          <p className="type-body max-w-[640px]">{versionOne.downloadNote}</p>
        </div>
        <div className="grid w-full gap-3 md:grid-cols-2">
          {versionOne.capabilities.map((item) => (
            <article key={item.title} className="card-border flex flex-col gap-3 p-5">
              <h3 className="type-h3 text-[var(--paper)]">{item.title}</h3>
              <p className="type-body-small">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell !pt-0">
        <div className="relative min-h-[280px] w-full overflow-hidden rounded-[16px] border border-[var(--border)]">
          <Image
            src="/scenes/features.jpg"
            alt=""
            fill
            className="object-cover opacity-70"
            sizes="1200px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,11,12,0.92), rgba(11,11,12,0.35))",
            }}
          />
          <div className="absolute inset-0 flex max-w-[520px] flex-col justify-center gap-3 p-8 md:p-12">
            <h2 className="type-h2 text-[var(--paper)]">Not an editor</h2>
            <p className="type-body">
              There is no timeline to drag, no keyframes, no rendering queue to babysit.
              You describe, review and post.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
