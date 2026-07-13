# Affiliate Layer — Integration Notes

Branch: `feat/affiliate-layer`. Everything in this layer is **additive** — the
only pre-existing file touched is `package.json` (dropped a POSIX-only env-var
prefix from the `dev`/`build`/`start` scripts so they run on Windows cmd.exe;
see the build note below). All routes bring their own styling (one shared CSS
module), their own metadata, and their own header/footer shell, so merging into
the Codex-built site cannot conflict with `app/page.tsx`, `app/layout.tsx`, or
`app/globals.css`.

## Routes added (8)

| Route | Lang | Purpose |
|---|---|---|
| `/rooms` | EN | Poker Room Reviews 2026 (GGPoker, 888poker, WPT Global) + Article JSON-LD |
| `/salas` | ES | Native-Spanish equivalent (targets "mejores salas de poker online 2026") |
| `/best-poker-sites-chile` | EN | AEO money page: direct answer, comparison, deposits, Chile legality FAQ + FAQPage JSON-LD |
| `/mejores-salas-poker-chile` | ES | Spanish AEO money page, same structure |
| `/responsible-gambling` | EN | 18+, bankroll limits, warning signs, self-exclusion, help resources |
| `/juego-responsable` | ES | Spanish responsible-gambling page (adds jugarbien.es) |
| `/affiliate-disclosure` | EN | Plain-language affiliate disclosure |
| `/divulgacion-afiliados` | ES | Spanish affiliate disclosure (ES footers/notes link here) |

EN and ES pages cross-link each other and declare `hreflang` alternates
(including `x-default` pointing at the EN version) in their metadata.
Canonicals point at `https://entrepoker.com/<route>`.

## Files

```
lib/affiliates.ts                      ← single source of truth for room data + links
components/affiliate/
  affiliate.module.css                 ← all styling (dark felt greens + gold)
  AffiliateShell.tsx                   ← page shell: header, nav, lang switch, footer, 18+ strip
  RoomCard.tsx                         ← full review card with pros/cons + CTA
  BonusTable.tsx                       ← comparison table
  CtaLink.tsx                          ← affiliate CTA (handles the PENDING state)
  PlayResponsibly.tsx                  ← 18+ / responsible-gambling strip
  AffiliateDisclosureNote.tsx          ← one-line disclosure linking /affiliate-disclosure
app/rooms/page.tsx
app/salas/page.tsx
app/best-poker-sites-chile/page.tsx
app/mejores-salas-poker-chile/page.tsx
app/responsible-gambling/page.tsx
app/juego-responsable/page.tsx
app/affiliate-disclosure/page.tsx
```

## Swapping in real affiliate links (the only step that matters for revenue)

Open `lib/affiliates.ts`. Each room record has:

```ts
url: "PENDING",
```

Replace `"PENDING"` with the real tracking URL, e.g.:

```ts
url: "https://track.example.com/visit/?bta=XXXX&brand=ggpoker",
```

That's it. Every CTA on every page reads through `roomUrl()` / `isPending()`:

- While `url === "PENDING"` → CTAs render a non-clickable **"Coming soon — link
  pending"** chip (ES: "Muy pronto — enlace pendiente").
- Once a real URL is set → CTAs become live links with
  `rel="sponsored noopener nofollow"` and `target="_blank"`.
- Every CTA (pending or live) already carries an adjacent **"18+ | T&Cs apply"**
  line (ES: "18+ | Se aplican términos"), so age wording sits next to the offer
  when links go live — no extra step needed.

No other file needs editing when links arrive.

## Nav links to add in the Codex-built site

When wiring the main site navigation, add:

- **EN nav:** `Rooms` → `/rooms`, `Best Sites Chile` → `/best-poker-sites-chile`
- **ES nav:** `Salas` → `/salas`, `Mejores Salas Chile` → `/mejores-salas-poker-chile`
- **Footer (both langs):** `Responsible Gambling` → `/responsible-gambling`,
  `Juego Responsable` → `/juego-responsable`, `Affiliate Disclosure` →
  `/affiliate-disclosure`, `Divulgación de afiliados` → `/divulgacion-afiliados`

The affiliate pages already carry their own internal header/nav (scoped to this
layer), so they work standalone before the main nav is updated.

## Content ground rules baked into these pages

- All bonus/rakeback/legal facts verified July 2026 (GGPoker "Ocean Rewards"
  replaced Fish Buffet Jan 30, 2026; 888poker $8 free + Welcome100 up to $1,000;
  WPT Global up to $3,348; Chile unregulated, bill in Senate with urgency
  May 2026, players not prosecuted).
- Where a detail changes often (888poker/WPT Global cashback), copy says
  "check current terms on the room's site" — **do not add numbers without a
  source**.
- No "risk-free"/"guaranteed" language, no testimonials, no traffic claims.
  Keep it that way in future edits.
- Every money page renders the 18+ responsible-gambling strip and the affiliate
  disclosure note automatically via `AffiliateShell`.

## Build note (Windows)

`npm run build` / `npm run dev` / `npm run start` work on Windows (cmd.exe) —
the scripts no longer use a POSIX env-var prefix. `WRANGLER_LOG_PATH` is
defaulted project-locally inside `vite.config.ts` (`process.env.WRANGLER_LOG_PATH
??= ".wrangler/logs"`), which runs before the Cloudflare plugin is imported, so
no shell-level env var is needed on any platform.
