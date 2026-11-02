"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/content/fylmkit";
import { Logo } from "./Logo";
import { PrimaryButton } from "./PrimaryButton";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointer(e: PointerEvent) {
      const el = menuRef.current;
      if (el && !el.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [menuOpen]);

  return (
    <header
      className="shell sticky top-0 z-50 flex items-center justify-between gap-3 px-[var(--pad)] py-3 backdrop-blur-md sm:gap-4 sm:py-4"
      style={{ background: "rgba(11,11,12,0.72)" }}
    >
      <Link href="/" aria-label="fylmkit home" className="min-w-0 shrink-0">
        <Logo height={28} className="h-7 w-auto sm:h-8" />
      </Link>

      <nav
        className="hidden items-center gap-5 md:flex md:gap-6"
        aria-label="Primary"
      >
        {nav.map((item) => {
          const active =
            item.href !== "/#faq" &&
            (pathname === item.href || pathname.startsWith(`${item.href}/`));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`type-body-small whitespace-nowrap hover:text-[var(--paper)] ${
                active ? "text-[var(--paper)]" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
        <PrimaryButton
          href="#waitlist"
          label={
            <>
              <span className="sm:hidden">Waitlist</span>
              <span className="hidden sm:inline">Join waitlist</span>
            </>
          }
          variant="primary"
          size="sm"
        />

        <div className="relative md:hidden" ref={menuRef}>
          <button
            type="button"
            className="btn btn-secondary btn-sm !p-0 !min-h-[44px] !min-w-[44px] !items-center !justify-center"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative flex h-[18px] w-[22px] items-center justify-center">
              <span
                className="absolute left-0 top-1/2 w-[22px] origin-center rounded-full bg-[var(--paper)] transition-[transform,opacity] duration-200 ease-out"
                style={{
                  height: 2,
                  marginTop: -1,
                  transform: menuOpen ? "rotate(45deg)" : "translateY(-5px)",
                  opacity: 1,
                }}
              />
              <span
                className="absolute left-0 top-1/2 w-[22px] rounded-full bg-[var(--paper)] transition-opacity duration-200 ease-out"
                style={{
                  height: 2,
                  marginTop: -1,
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 top-1/2 w-[22px] origin-center rounded-full bg-[var(--paper)] transition-[transform] duration-200 ease-out"
                style={{
                  height: 2,
                  marginTop: -1,
                  transform: menuOpen ? "rotate(-45deg)" : "translateY(5px)",
                }}
              />
            </span>
          </button>

          {menuOpen ? (
            <div
              id="site-menu"
              className="card-border absolute right-0 top-[calc(100%+8px)] z-50 flex min-w-[min(100vw-2rem,240px)] flex-col gap-1 p-2 shadow-lg"
              style={{
                background: "rgba(18, 18, 20, 0.96)",
              }}
            >
              {nav.map((item) => {
                const active =
                  item.href !== "/#faq" &&
                  (pathname === item.href ||
                    pathname.startsWith(`${item.href}/`));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-3 py-3 type-body-small ${
                      active
                        ? "bg-[var(--accent-soft)] text-[var(--paper)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--gray-800)] hover:text-[var(--paper)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
