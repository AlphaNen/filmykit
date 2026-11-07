# fylmkit — V1.0

**V1.0** is a static-first marketing and waitlist site for fylmkit: homepage with hero, product facts, teasers linking to deeper pages, FAQ, and a client-side waitlist form backed by a minimal API route.

Stack: **Next.js 16** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4** (via `@tailwindcss/turbopack`), **ESLint** (`eslint-config-next`).

## Requirements

- **Node.js** 20+ (aligned with `@types/node` in the project)
- **npm** (lockfile: `package-lock.json`)

## Quick start

```bash
npm install
npm run dev
```

Default URL: [http://localhost:3000](http://localhost:3000) (or the port shown in the terminal).

## Scripts

| Command        | Purpose                          |
| -------------- | -------------------------------- |
| `npm run dev`  | Development server (Turbopack)   |
| `npm run build`| Production build                 |
| `npm start`    | Serve production build locally   |
| `npm run lint` | ESLint (Next core-web-vitals + TS)|

## V1.0 — What ships

- **Landing** (`/`): Hero, facts strip, “Version one” scene cards (teaser), “How it works” teaser, features teaser, FAQ. Global chrome: header, footer, waitlist block (from `PageShell`).
- **Version one hub** (`/version-one`): Product positioning and capability list; links into per-scene pages.
- **Scene detail pages** (static segments under `version-one`):

  | Path | Slug (content) |
  | ---- | -------------- |
  | `/version-one/hooks` | `hooks` |
  | `/version-one/statements-stats` | `statements-stats` |
  | `/version-one/product-shots` | `product-shots` |
  | `/version-one/code-diagrams` | `code-diagrams` |

- **How it works** (`/how-it-works`): Full narrative from `content/fylmkit.ts`.
- **Features** (`/features`): Full feature list from `content/fylmkit.ts`.
- **Waitlist API** (`POST /api/waitlist`): Validates email + optional industry; appends one JSON line per signup to `data/waitlist.jsonl` (see below).

There is no auth, CMS, or database in V1.0.

## Project layout

| Path | Role |
| ---- | ---- |
| `app/` | App Router: `layout.tsx`, `globals.css`, pages, `api/waitlist/route.ts` |
| `components/` | UI: `PageShell`, `Hero`, `Header`, `Footer`, section teasers, `Waitlist`, etc. |
| `content/fylmkit.ts` | Single source of marketing copy, nav, scene data, FAQ, waitlist strings |
| `public/brand/` | In-use logos: horizontal lockup + mark (SVG), 13stack mark (PNG) |
| `public/scenes/` | Marketing photography for hero and scene pages |
| `public/` | `favicon.svg`, `favicon-16.png` / `favicon-32.png` / `favicon-48.png` (PNG fallbacks), `apple-touch-icon.png`, `og.png` |
| `next.config.ts` | `cacheComponents`, `partialPrefetching`, Tailwind v4 Turbopack rule |
| `_internal/` | Optional local-only design assets (gitignored; see `_internal/README.md`) |

Path alias: `@/*` → project root (`tsconfig.json`).

## Configuration

### Environment

| Variable | When to set | Purpose |
| -------- | ----------- | ------- |
| `NEXT_PUBLIC_SITE_URL` | Production | Canonical site origin for **`metadataBase`** (Open Graph / absolute image URLs), e.g. `https://yourdomain.com` |
| `VERCEL_URL` | Vercel builds | Used as fallback for `metadataBase` if `NEXT_PUBLIC_SITE_URL` is unset (HTTPS assumed) |
| `NEXT_PUBLIC_SUPABASE_URL` | Always (local + prod) | Same Supabase project URL as 13Stack |
| `SUPABASE_SERVICE_ROLE_KEY` | Always (server only) | Service role key — never expose to the browser |
| `SUPABASE_DB_SCHEMA` | Optional | Defaults to `thirteenstack` (same schema as 13Stack) |

Copy values from the 13Stack `.env.local` / Vercel project into fylmkit’s `.env.local` and Vercel env. See `.env.example`.

**Supabase API schema:** In the shared project, expose **`thirteenstack`** under **Dashboard → Project Settings → API → Exposed schemas**. Until that is set, the JS client cannot read/write `newsletter_subscribers` (error `PGRST106`), even with valid env vars. The 13Stack migrate script documents the same step.

Local `metadataBase` falls back to `http://localhost:3000` in `app/layout.tsx`.

### Next.js (`next.config.ts`)

- **`cacheComponents`** / **`partialPrefetching`**: Framework caching and prefetch behaviour (Next 16 defaults you’ve opted into).
- **`turbopack.root`**: Set to the package root so tooling resolves correctly when the lockfile lives here.
- **`turbopack.rules`**: Pipes `*.css` through `@tailwindcss/turbopack` for Tailwind v4.

## Waitlist (`POST /api/waitlist`)

- **Request body (JSON):** `{ "email": string, "industry"?: string, "website"?: string }`
- **`website`** is a honeypot field (hidden in the UI); filled values are treated as bots and return `{ ok: true }` without writing.
- **Response:** `{ "ok": true }` or `{ "ok": false, "error": string }` with appropriate HTTP status.
- **Persistence:** Upserts into the shared Supabase table **`thirteenstack.newsletter_subscribers`** (same project and schema as 13Stack newsletter / contact opt-ins), using the service-role admin client in `lib/supabase/`.
  - `source`: `fylmkit` (kept if the email already exists from 13Stack)
  - `lists`: merges existing lists and adds `fylmkit_waitlist`; optional industry is stored as `industry:<label>`
  - Existing `opt_in_studio` / `opt_in_skedvio` flags are preserved on merge

Server helpers mirror 13Stack: `lib/supabase/env.ts` + `lib/supabase/admin.ts`.

## Metadata & SEO

- Title, description, **`viewport`** (mobile scaling + theme colour), icons, and **`openGraph.images`** are set in `app/layout.tsx`. Tab icons use the **fylmkit mark** (PNG sizes + SVG).
- **`metadataBase`** is derived from `NEXT_PUBLIC_SITE_URL` → `VERCEL_URL` → localhost so `/og.png` resolves to absolute URLs in production.

## Content changes

Edit **`content/fylmkit.ts`** for copy, navigation labels, scene slugs, and image paths. Scene pages resolve data via `getScene(slug)` and the static routes under `app/version-one/`.

## Production build

```bash
npm run build
npm start
```

Run **`npm run lint`** before deploy. There are no automated tests in V1.0.

## Brand assets

Only assets under **`public/`** are served. Full logo kits or copy briefs can live in **`_internal/`** (gitignored); see `_internal/README.md` if present.

---

**Version:** V1.0 — marketing + waitlist (Supabase `newsletter_subscribers`), no product app UI.
