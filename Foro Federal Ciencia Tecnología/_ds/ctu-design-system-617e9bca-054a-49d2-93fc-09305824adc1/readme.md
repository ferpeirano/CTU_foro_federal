# CTU — Design System

CTU is a **warm editorial** system: sage on cream, serif headlines, humanist sans for interface. It is built for products where long-form reading is first-class — a magazine and the writing tool behind it. Human, considered, slightly literary. Not tech-startup sterile, not luxury-brand cold.

Mood: calm, earnest, tactile, deliberate, patient.

## Sources

The system was scaffolded from a single supplied brand brief, `uploads/claude.md` ("Claude (Anthropic) — CTU Editorial"), which defines the palette, type rules, component stylings, layout and do's/don'ts. No codebase, Figma file, deck, logo or photography was provided; everything visual here derives from that brief. Where the brief was silent (motion, iconography, empty states) the choices are documented below and flagged as additions.

> The brief names Anthropic in its title. It is used here only as a written style reference — CTU is not an Anthropic product and carries no Anthropic branding.

## Index

- `styles.css` — the single entry point. Import this and nothing else.
- `tokens/` — `fonts`, `colors`, `typography`, `spacing`, `borders`, `elevation`, `motion`, `base`.
- `guidelines/` — specimen cards: colour, type, spacing, depth, radii, states, motion, voice.
- `assets/logos/` — the supplied CTU lockup (SVG and PNG).
- `components/` — `brand/` (Logo), `core/` (Icon, Button, IconButton, Card, Badge, Tag, Divider), `forms/` (Field, Input, Textarea, Select, Checkbox, Radio, Switch), `navigation/` (NavBar, Tabs, Breadcrumbs, Pagination), `feedback/` (Callout, Dialog, Toast, Tooltip), `data/` (Table, Stat), `site/` (Container, Section, Grid, Hero, Figure, Prose, Quote, ArticleCard, Accordion, CTABand, SiteFooter, Banner, PricingCard).
- `ui_kits/marketing/` — the public website: landing, membership, contact.
- `ui_kits/editorial/` — the magazine: home, article, archive, subscribe.
- `ui_kits/studio/` — the writing app: shell, drafts, editor, settings.
- `preview-bundle.jsx` — build artifact: every component and screen concatenated into one `window.CTU` namespace so the cards and UI kits render standalone, without the design-system compiler. Regenerate it after editing any `.jsx`.
- `SKILL.md` — portable agent skill wrapper.

### Intentional additions

The palette was later replaced with a cool mist/slate/sage set supplied by the user; the brief's original terracotta-on-cream values no longer apply, though every rule about how colour is *used* still does.

The brief specified only buttons, cards, inputs, navigation and tables. The rest of the inventory (Icon, IconButton, Badge, Tag, Divider, Field, Textarea, Select, Checkbox, Radio, Switch, Tabs, Breadcrumbs, Pagination, Callout, Dialog, Toast, Tooltip, Stat) was authored to cover the product surfaces; each follows the brief's rules rather than extending them. `Icon` exists because the brief bans emoji in UI chrome and named no icon set. The whole `site/` group was added so the system can build websites, not only app screens — it encodes the brief's layout rules (680/1180 widths, 96px section breaks, flat surfaces) as components rather than leaving them to be re-typed on every page.

## Visual foundations

**Colour.** Built on five supplied anchors: #E9EEF2, #B9C6CE, #6E8594, #344552, #7E9B8B. A cool mist page (`--bg-primary` #e9eef2) with one lifted surface (`--bg-secondary` #dde5ea) and a slate inverse (`--bg-inverse` #344552). Ink #344552 for text, #55697a for secondary, #6e8594 for muted, #b9c6ce for lines. Sage #7e9b8b is the only accent — **one accent moment per viewport** — used for rules, underlines, icons and active states.

Sage at its supplied value does not carry light text, so filled controls use a darker step of the same hue: `--accent-fill` #557262 with `--on-accent` #e9eef2 (about 5:1). Use `--accent` for lines and marks, `--accent-fill` for anything with a label on top. Sage never competes with itself, and body text is never tinted with it. Success reuses the deep sage; warning (#a98a5c ochre) and danger (#a0625b brick) are the two hues outside the five anchors, retuned cool so they sit in the palette.

**Type.** Display is `Newsreader` at weight 500 with −1.5% tracking. Body is `Work Sans` at 400 / 1.6, measure 65–72 characters. UI labels are the same sans at 500 with +2% tracking; uppercase is reserved for eyebrows and table headers. `JetBrains Mono` carries metadata, table headers and code. All three are open-licensed Google fonts, chosen to replace the brief's licensed faces (Tiempos Headline, Styrene A, GT America Mono), which were not supplied and are not freely licensed. Modular 1.25 scale: 13 / 15 / 17 / 21 / 26 / 32 / 40 / 50 / 62. Headlines `text-wrap: balance`, body `text-wrap: pretty`. Never more than two families on a page.

**Spacing and layout.** 8px baseline with 4px half-steps. 12 columns, 24px gutters. Long-form caps at 680px, app shells at 1180px. Section break is 96px; a heading takes roughly 2× its line-height above it. Asymmetry is encouraged on editorial pages — pull-quotes float, sidenotes live in the margin.

**Backgrounds.** Flat colour only. No gradients, no glass, no blur, no noise or texture overlays. Inverse sections are solid near-black. There is no supplied photography or illustration; imagery slots in the kits are left empty rather than faked. When real imagery arrives, expect warm, film-grained, unhurried images — never cool-toned stock.

**Depth.** Flat by default. Depth comes from surface shifts, 1px `--border` lines and type-weight contrast. Exactly one shadow exists in the system — `--shadow-modal: 0 8px 24px rgba(52,69,82,.10)` — and only Dialog may use it. No inner shadows.

**Corners.** 4px small, 6px controls (buttons, inputs, selects), 8px cards, 12px large panels, pill for tags only. Nothing else is fully rounded.

**Borders.** 1px `--border` #d8d3c8 everywhere; `--border-strong` for hover rules; `--border-inverse` (18% mist) on dark surfaces. Cards carry no border at rest and reveal one on hover.

**States.** Hover darkens colour (`--accent` → `--accent-hover`) or lifts the surface — never scale, translate or shadow. Press reuses the hover colour. Focus is a 2px sage outline at 2px offset, never a glow. Disabled is 45% opacity with `not-allowed`.

**Motion.** 120ms for hover and focus, 180ms for borders and toggles, 320ms for overlays; easing `cubic-bezier(0.2, 0, 0.2, 1)`. Colour, opacity and small translations only. No bounce, no spring, no parallax.

**Transparency and blur.** Used twice only: the modal scrim (`rgba(25,24,23,.32)`) and the accent wash (`rgba(201,100,66,.08)`) behind active tags. No backdrop blur anywhere.

**Cards.** `--bg-secondary`, radius 8, padding 24, no shadow, no border at rest. Avoid pages where every element is a card — that is the trope the brief explicitly rejects.

## Building web pages

A page is a stack of full-bleed bands. Nothing outside a band sets its own page margin.

```jsx
<Banner … />                  {/* at most one, dismissible */}
<NavBar sticky … />
<Hero eyebrow title lead actions />
<Section surface="lifted" eyebrow title lead><Grid min={260}>…</Grid></Section>
<Section width="prose"><Prose>…</Prose></Section>
<CTABand … />                 {/* the closing ask, once */}
<SiteFooter … />
```

Rules:
- **Surfaces alternate, they do not accumulate.** Page → lifted → page, with at most one inverse band (usually the CTA). Two inverse bands in a row read as a different site.
- **One sage action per screenful.** The hero holds the page's primary button; later sections use secondary or ghost.
- **Widths.** `width="prose"` (680px) for anything read in sequence, `app` (1180px) for grids and dashboards, `wide` (1440px) only for full-bleed imagery.
- **Rhythm.** `--section-pad` (56→96px) and `--section-pad-lg` (72→128px) own the vertical space; never hand-set section padding.
- **Reflow, don't break.** `Grid min={…}` and `repeat(auto-fit, minmax(min(Npx, 100%), 1fr))` mean layouts adapt with no media queries. Fluid type roles (`--type-display-fluid`, `--type-h1-fluid`, `--type-lead-fluid`) scale between the mobile and desktop steps of the same modular scale, so 62px display becomes 36px on a phone without landing off-scale.
- **Imagery.** `Figure` renders an honest empty slot when no `src` is given. Do not substitute stock or generated images.
- **Long-form keeps 18px body below 640px** — handled in `tokens/base.css`, not per page.
- Motion respects `prefers-reduced-motion`; the reset is in `tokens/base.css`.

## Content fundamentals

Copy is written in full sentences with periods, including hints, errors and toasts. Plain words over product-marketing verbs. Sentence case everywhere except eyebrow labels and table headers, which are uppercase mono.

Address the reader as *you*; the publication is *we*. State facts and let the reader draw the conclusion — no hype, no exclamation marks, no emoji anywhere in UI chrome.

Examples in use:
- Hint: "We only write once a month."
- Error: "This slug is already taken."
- Toast: "Draft saved." / "Check your inbox to confirm."
- Empty-ish state: "Five pieces in flight for Issue Eleven."
- Marketing: "One essay, once a month. We do not send round-ups, launch announcements, or news."

Avoid: "Oops! Something went wrong 😬", "Supercharge your workflow", "SAVED!!", any sentence built on "not X, but Y".

## Iconography

No icon set was supplied. CTU uses **Lucide** (stroke, 1.5–2px, rounded caps) as the closest match to the brief's calm line drawing — *flagged substitution*. Icons load from `unpkg.com/lucide-static` and are tinted with `currentColor` through a CSS mask by the `Icon` component, so they inherit text colour and never need per-colour copies.

Rules: 16px beside label text, 20px standalone, 24px only in headers. Icons are decorative — every icon-only control carries a `label`. Emoji are never used in UI chrome. Unicode glyphs appear in exactly two places: the select caret (▾) and the tag remove (×).

## Logo

The CTU lockup was supplied as `assets/logos/ctu-foro-federal.png` (2000×1414, transparent) and `ctu-foro-federal.svg`: the **CTU** monogram drawn as circuit traces, **FORO FEDERAL**, and the expanded line **Ciencia Tecnología Universidad**. It is used as delivered — never redrawn, recoloured or re-typeset.

The `Logo` component exposes three crops of that one file, because the lower lines stop being legible as the mark shrinks:

| Variant | Contains | Use from |
| --- | --- | --- |
| `full` | All three lines | 72px tall |
| `compact` | Monogram + FORO FEDERAL | 56px tall |
| `mark` | Monogram only | any size — mastheads, sidebars, favicons |

Clear space is half the mark's height on every side. On near-black surfaces pass `tone="inverse"`. Never set it on the sage accent, never outline it, and never invent a fourth crop. Pages outside the project root set `window.__CTU_LOGO_SRC__` to the correct relative path.

The mark's own grey is slightly warmer than `--text-primary`; that is the supplied artwork and is left alone rather than tinted to match.

**The PNG is the working file.** The supplied SVG contains only the solid letterforms — the circuit-trace filaments rising out of the monogram are missing from it. Everything here loads the PNG so the traces are present. A corrected vector would be worth having: send one and the component switches with a one-line change.

## Responsive behaviour

Single column below 900px; navigation shows 2–3 primary links rather than collapsing entirely to a hamburger. Display headlines scale 62 → 36. Tables stack into cards below 640px. Long-form keeps 18px body on mobile, not 16. Margin sidenotes move inline.

## Known substitutions

| Brief specifies | Shipped here | Why |
| --- | --- | --- |
| Tiempos Headline | Newsreader | Not freely licensed; replaced outright |
| Styrene A | Work Sans | Not freely licensed; replaced outright |
| GT America Mono | JetBrains Mono | Not freely licensed; replaced outright |
| (no icon set named) | Lucide | Closest calm line set available |
| Palette of five hex values | Five anchors + interpolated steps | Surfaces, hovers and lines need in-between values; every added step is an interpolation between two anchors, listed at the top of `tokens/colors.css` |
| (no semantic colours given) | Ochre #a98a5c, brick #a0625b | Warning and danger have no equivalent in the five |

The font tokens now name the open faces directly, so nothing depends on licensed binaries.
