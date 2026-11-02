import Image from "next/image";
import { hero } from "@/content/fylmkit";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
  return (
    <section
      id="top"
      className="shell relative flex min-h-[min(820px,100svh)] items-center overflow-hidden px-[var(--pad)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          className="object-cover object-[70%_center] sm:object-right"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div
          className="absolute inset-0 md:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,11,12,0.97) 0%, rgba(11,11,12,0.9) 28%, rgba(11,11,12,0.45) 48%, rgba(11,11,12,0.08) 68%, rgba(11,11,12,0) 82%)",
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,11,12,0.96) 0%, rgba(11,11,12,0.88) 38%, rgba(11,11,12,0.55) 58%, rgba(11,11,12,0.2) 78%, rgba(11,11,12,0) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background: "linear-gradient(to top, var(--bg), transparent)",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[640px] flex-col items-start gap-8 py-14 sm:gap-10 sm:py-16 md:py-24">
        <div className="flex flex-col gap-4">
          <span className="pill w-fit">{hero.eyebrow}</span>
          <p className="m-0 font-[family-name:var(--font-display)] text-[clamp(40px,6vw,72px)] font-semibold leading-[0.95] tracking-[-0.04em] text-[var(--paper)]">
            fylmkit
          </p>
          <h1 className="type-display text-[var(--paper)]">{hero.headline}</h1>
          <p className="type-body-bold max-w-[591px] text-[var(--text-secondary)]">
            {hero.body}
          </p>
        </div>
        <div className="flex w-full max-w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center">
          <PrimaryButton
            href={hero.primaryCta.href}
            label={hero.primaryCta.label}
            variant="primary"
            size="lg"
            className="w-full min-[420px]:w-auto min-[420px]:min-w-[168px]"
          />
          <PrimaryButton
            href={hero.secondaryCta.href}
            label={hero.secondaryCta.label}
            variant="secondary"
            size="lg"
            className="w-full min-[420px]:w-auto min-[420px]:min-w-[168px]"
          />
        </div>
      </div>
    </section>
  );
}
