import Link from "next/link";
import { versionOne } from "@/content/fylmkit";
import { SectionPill } from "./SectionPill";
import { ScrubCard } from "./ScrubCard";
import { PrimaryButton } from "./PrimaryButton";

export function VersionOneTeaser() {
  const [a, b, c, d] = versionOne.scenes;

  return (
    <section id="version-one" className="section shell">
      <div className="section-head">
        <SectionPill>{versionOne.pill}</SectionPill>
        <div className="flex w-full flex-col gap-2 text-left">
          <h2 className="type-h1 text-[var(--paper)]">{versionOne.title}</h2>
          <p className="type-body">{versionOne.summary}</p>
        </div>
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

      <PrimaryButton
        href={versionOne.href}
        label="Explore version one"
        variant="secondary"
      />
    </section>
  );
}

export function VersionOneSceneGrid({
  excludeSlug,
}: {
  excludeSlug?: string;
}) {
  const items = versionOne.scenes.filter((scene) => scene.slug !== excludeSlug);
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2">
      {items.map((scene) => (
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
  );
}
