import { audiences, facts } from "@/content/fylmkit";

function FactIcon({ index }: { index: number }) {
  const stroke = "var(--accent)";
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (index === 0) {
    return (
      <svg {...common} aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common} aria-hidden>
        <path d="M4 7h16M4 12h10M4 17h14" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common} aria-hidden>
        <rect x="4" y="5" width="10" height="14" rx="1.5" />
        <rect x="15" y="8" width="5" height="8" rx="1" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden>
      <path d="M12 3v18M5 8l7 4 7-4M5 16l7-4 7 4" />
    </svg>
  );
}

export function Facts() {
  const ticker = [...audiences, ...audiences];

  return (
    <section className="section shell !pt-0">
      <div className="flex w-full flex-col items-center gap-5">
        <p className="type-body-small text-center">
          For your brand, your products, and your marketing — when you need to
          post and have nobody to do it.
        </p>
        <div className="relative w-full overflow-hidden py-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
            style={{
              background: "linear-gradient(to right, var(--bg), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
            style={{
              background: "linear-gradient(to left, var(--bg), transparent)",
            }}
          />
          <div className="marquee-track">
            {ticker.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="card-border whitespace-nowrap px-4 py-2 type-body-small"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, index) => (
          <article
            key={fact.label}
            className="card-border flex min-h-[140px] flex-col justify-between gap-4 overflow-hidden p-4"
          >
            <div className="flex min-w-0 flex-col gap-2.5">
              <FactIcon index={index} />
              <h3 className="type-h2 break-words text-[var(--paper)]">
                {fact.label}
              </h3>
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <p className="type-body-small break-words">{fact.detail}</p>
              <div className="relative h-0.5 w-full overflow-hidden bg-[var(--border)]">
                <span
                  className="absolute left-0 top-0 h-full w-[18px] rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
