import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/PageHero";
import { VersionOneSceneGrid } from "@/components/VersionOne";
import { PrimaryButton } from "@/components/PrimaryButton";
import { getScene, scenes } from "@/content/fylmkit";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return scenes.map((scene) => ({ slug: scene.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const scene = getScene(slug);
  if (!scene) return { title: "Version one — fylmkit" };
  return {
    title: `${scene.title} — Version one — fylmkit`,
    description: scene.summary,
  };
}

export default async function ScenePage({ params }: Props) {
  const { slug } = await params;
  const scene = getScene(slug);
  if (!scene) notFound();

  return (
    <PageShell>
      <PageHero
        pill="Version one"
        title={scene.title}
        body={scene.summary}
        image={scene.image}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Version one", href: "/version-one" },
          { label: scene.title },
        ]}
        cta={{ label: "Join waitlist", href: "#waitlist" }}
      />

      <section className="section shell !pt-0">
        <div className="grid w-full items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-5">
            <h2 className="type-h2 text-[var(--paper)]">What it is</h2>
            {scene.body.map((paragraph) => (
              <p key={paragraph} className="type-body-large">
                {paragraph}
              </p>
            ))}
            <ul className="mt-2 flex flex-col gap-3">
              {scene.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 type-body text-[var(--paper)]"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[16px] border border-[var(--border)]">
            <Image
              src={scene.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 520px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section shell !pt-0">
        <div className="flex w-full flex-col gap-3">
          <h2 className="type-h2 text-[var(--paper)]">How it fits in the chain</h2>
          <p className="type-body max-w-[640px]">
            Version one is not a timeline editor. This scene type is one step in a
            describe → plan → review flow.
          </p>
        </div>
        <ol className="grid w-full gap-3 md:grid-cols-3">
          {scene.howItFits.map((step, index) => (
            <li key={step} className="card-border flex flex-col gap-3 p-5">
              <span className="type-caption text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="type-body-small text-[var(--paper)]">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section shell !pt-0">
        <div className="flex w-full flex-col gap-3">
          <h2 className="type-h2 text-[var(--paper)]">Examples</h2>
          <p className="type-body max-w-[640px]">
            Patterns this scene type is built to cover — not stock templates with your
            logo slapped on.
          </p>
        </div>
        <div className="grid w-full gap-3 md:grid-cols-3">
          {scene.examples.map((example) => (
            <article key={example.title} className="card-border flex flex-col gap-3 p-5">
              <h3 className="type-h3 text-[var(--paper)]">{example.title}</h3>
              <p className="type-body-small">{example.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell !pt-0">
        <div className="card-border flex w-full flex-col gap-6 p-6 md:flex-row md:items-start md:justify-between md:p-8">
          <div className="flex max-w-[560px] flex-col gap-3">
            <h2 className="type-h2 text-[var(--paper)]">Best for</h2>
            <ul className="flex flex-col gap-3">
              {scene.bestFor.map((item) => (
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
          </div>
          <div className="flex flex-col items-start gap-3">
            <PrimaryButton
              href="/version-one"
              label="Back to version one"
              variant="secondary"
            />
            <PrimaryButton href="#waitlist" label="Join waitlist" variant="primary" />
          </div>
        </div>
      </section>

      <section className="section shell !pt-0">
        <div className="flex w-full flex-col gap-3">
          <h2 className="type-h2 text-[var(--paper)]">More scene types</h2>
          <p className="type-body">Other parts of short-form version one.</p>
        </div>
        <VersionOneSceneGrid excludeSlug={scene.slug} />
      </section>
    </PageShell>
  );
}
