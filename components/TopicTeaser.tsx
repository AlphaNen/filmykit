import Image from "next/image";
import Link from "next/link";
import { SectionPill } from "./SectionPill";
import { PrimaryButton } from "./PrimaryButton";

type Props = {
  pill: string;
  title: string;
  body: string;
  href: string;
  cta?: string;
  image?: string;
  reverse?: boolean;
};

export function TopicTeaser({
  pill,
  title,
  body,
  href,
  cta = "Read more",
  image,
  reverse,
}: Props) {
  return (
    <section className="section shell !gap-8">
      <div
        className={`flex w-full flex-col items-stretch gap-8 lg:items-center lg:gap-12 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        <div className="flex flex-1 flex-col items-start gap-5">
          <SectionPill>{pill}</SectionPill>
          <h2 className="type-h1 text-[var(--paper)]">{title}</h2>
          <p className="type-body max-w-[520px]">{body}</p>
          <PrimaryButton href={href} label={cta} variant="secondary" />
        </div>
        {image ? (
          <Link
            href={href}
            className="relative min-h-[220px] flex-1 overflow-hidden rounded-[16px] border border-[var(--border)]"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover transition-transform duration-300 hover:scale-[1.03]"
              sizes="(max-width: 900px) 100vw, 560px"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(11,11,12,0.55), transparent 50%)",
              }}
            />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
