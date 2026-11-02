"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Props = {
  title: string;
  detail: string;
  image: string;
  href: string;
  wide?: boolean;
};

export function ScrubCard({ title, detail, image, href, wide }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    const media = mediaRef.current;
    if (!el || !media) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    media.style.setProperty("--scrub-x", `${Math.round(x * 100)}%`);
    media.style.setProperty("--scrub-scale", String(1.04 + x * 0.06));
  }

  function onLeave() {
    const media = mediaRef.current;
    if (!media) return;
    media.style.setProperty("--scrub-x", "50%");
    media.style.setProperty("--scrub-scale", "1");
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group relative overflow-hidden rounded-lg border border-[var(--border)] transition-[border-color] hover:border-[var(--accent)] ${
        wide ? "min-h-[280px] flex-[1.35]" : "min-h-[280px] flex-1"
      }`}
    >
      <div
        ref={mediaRef}
        className="absolute inset-0 [--scrub-scale:1] [--scrub-x:50%]"
      >
        <Image
          src={image}
          alt=""
          fill
          className="object-cover transition-transform duration-200 ease-out"
          style={{
            objectPosition: "var(--scrub-x) center",
            transform: "scale(var(--scrub-scale))",
          }}
          sizes="(max-width: 900px) 100vw, 560px"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(11,11,12,0.92) 0%, rgba(11,11,12,0.2) 55%, rgba(11,11,12,0.35) 100%)",
          }}
        />
      </div>

      <div className="absolute left-3 top-3 z-10 flex items-center gap-2">
        <span className="flex gap-1.5">
          <i className="block h-2 w-2 rounded-full bg-[#ec6765]" />
          <i className="block h-2 w-2 rounded-full bg-[#f2c942]" />
          <i className="block h-2 w-2 rounded-full bg-[#65c466]" />
        </span>
        <span
          className="rounded-full border px-2 py-1 type-caption text-[var(--paper)]"
          style={{
            borderColor: "var(--accent)",
            background: "rgba(11,11,12,0.5)",
          }}
        >
          Scene
        </span>
      </div>

      <div className="absolute bottom-0 left-0 z-10 flex w-full flex-col gap-1 p-5">
        <h3 className="type-h2 text-[var(--paper)]">{title}</h3>
        <p className="type-body-small">{detail}</p>
        <span className="type-caption mt-1 text-[var(--accent)]">Open →</span>
      </div>
    </Link>
  );
}
