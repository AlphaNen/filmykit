import Image from "next/image";
import Link from "next/link";
import { SectionPill } from "./SectionPill";
import { PrimaryButton } from "./PrimaryButton";

type Crumb = { label: string; href?: string };

type Props = {
  pill: string;
  title: string;
  body: string;
  image?: string;
  crumbs?: Crumb[];
  cta?: { label: string; href: string };
};

export function PageHero({ pill, title, body, image, crumbs, cta }: Props) {
  return (
    <section className="shell relative overflow-hidden px-[var(--pad)] pb-12 pt-10 md:pb-16 md:pt-14">
      {image ? (
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
          <Image src={image} alt="" fill className="object-cover" priority sizes="1200px" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(11,11,12,0.55) 0%, var(--bg) 78%)",
            }}
          />
        </div>
      ) : null}

      {crumbs?.length ? (
        <nav className="mb-6 flex flex-wrap items-center gap-2 type-caption">
          {crumbs.map((crumb, index) => (
            <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[var(--paper)]">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[var(--paper)]">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      ) : null}

      <div className="flex max-w-[720px] flex-col items-start gap-5">
        <SectionPill>{pill}</SectionPill>
        <h1 className="type-display text-[var(--paper)]">{title}</h1>
        <p className="type-body-large">{body}</p>
        {cta ? <PrimaryButton href={cta.href} label={cta.label} variant="primary" /> : null}
      </div>
    </section>
  );
}
