import Image from "next/image";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="shell border-t border-[var(--border)] px-[var(--pad)] py-8">
      <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <Logo height={24} />

        <div className="flex flex-col items-start gap-3 md:items-end">
          <p className="type-caption">© 2026 fylmkit. Coming soon.</p>
          <a
            href="https://13stack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 type-caption text-[var(--text-muted)] transition-colors hover:text-[var(--paper)]"
          >
            <span>Built by</span>
            <Image
              src="/brand/13stack-mark.png"
              alt=""
              width={18}
              height={18}
              className="rounded-[4px]"
            />
            <span className="text-[var(--paper)] underline-offset-2 group-hover:underline">
              13stack
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
