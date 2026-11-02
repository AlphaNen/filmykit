import Image from "next/image";
import { why } from "@/content/fylmkit";
import { SectionPill } from "./SectionPill";

export function Why() {
  return (
    <section id="why" className="section shell">
      <div className="section-head">
        <SectionPill>{why.pill}</SectionPill>
        <div className="flex w-full flex-col gap-2 text-left">
          <h2 className="type-h1 text-[var(--paper)]">{why.title}</h2>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:gap-[120px]">
        <div className="relative aspect-[440/470] w-full max-w-[440px] overflow-hidden rounded-[12px] border border-[var(--border)]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,107,44,0.22), transparent 55%), linear-gradient(160deg, #161618, #0b0b0c)",
            }}
          />
          <Image
            src="/brand/fylmkit-mark-color-on-dark.svg"
            alt=""
            width={220}
            height={220}
            className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="/brand/fylmkit-lockup-horizontal-color-on-dark.svg"
            alt="fylmkit"
            width={220}
            height={74}
            className="absolute bottom-8 left-8"
          />
        </div>

        <div className="flex w-full max-w-[520px] flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h3 className="type-h2 text-[var(--paper)]">
              Production out. Thinking in.
            </h3>
            <p className="type-body">{why.body}</p>
            <p className="type-body">{why.detail}</p>
            <p className="type-body-bold text-[var(--paper)]">{why.notAnEditor}</p>
          </div>

          <div className="card-border flex flex-col gap-3 p-5">
            <h4 className="type-h3 text-[var(--paper)]">Version two</h4>
            <p className="type-caption text-[var(--text-secondary)]">{why.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
