import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { features, versionOne } from "@/content/fylmkit";

export const metadata: Metadata = {
  title: "Features — fylmkit",
  description: features.body,
};

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHero
        pill={features.pill}
        title={features.title}
        body={features.body}
        image={features.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Features" },
        ]}
        cta={{ label: "Join waitlist", href: "#waitlist" }}
      />

      <section className="section shell !pt-0">
        <div className="grid w-full gap-4 md:grid-cols-2">
          {features.groups.map((group) => (
            <article key={group.title} className="card-border flex flex-col gap-4 p-6">
              <h2 className="type-h2 text-[var(--paper)]">{group.title}</h2>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 type-body-small text-[var(--text-secondary)]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell !pt-0">
        <div className="flex w-full flex-col gap-4">
          <h2 className="type-h2 text-[var(--paper)]">Scene types in version one</h2>
          <div className="grid w-full gap-3 sm:grid-cols-2">
            {versionOne.scenes.map((scene) => (
              <Link
                key={scene.slug}
                href={scene.href}
                className="card-border flex flex-col gap-2 p-5 transition-colors hover:border-[var(--accent)]"
              >
                <h3 className="type-h3 text-[var(--paper)]">{scene.title}</h3>
                <p className="type-body-small">{scene.detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
