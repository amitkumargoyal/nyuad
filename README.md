# Markets — NYUAD course site

Astro site (redesigned: STIX Two Text + IBM Plex Mono, self-hosted; diagram glyphs) for https://amitkumargoyal.github.io/nyuad/ — interactive tools,
LaTeX-enabled notes, and exercises for the Markets course.

## How it works

- **Notes and exercises** are Markdown files in `src/content/notes/` and
  `src/content/exercises/`. LaTeX (`$...$` inline, `$$...$$` display) is
  rendered to HTML by KaTeX **at build time** — pages ship as plain HTML + CSS,
  no JavaScript maths at runtime, and the KaTeX fonts are self-hosted.
- **Interactive tools** are the existing standalone HTML files, kept verbatim
  in `public/markets/`. Astro copies them to the output unchanged, so all
  current URLs (e.g. `/nyuad/markets/trade_policy.html`) keep working.
- The course homepage (`src/pages/markets/index.astro`) lists the tools
  (hard-coded array at the top of the file) and auto-lists every published
  note and exercise.

## One-time migration (do this once)

1. Copy this scaffold into the `nyuad` repo, replacing the old contents
   (keep `.git/`).
2. Move the six tool files into `public/markets/`:
   `supply_demand_shifts.html`, `competitive_equilibrium.html`,
   `price_controls.html`, `tax_incidence.html`, `trade_policy.html`,
   `substitutes_complements.html`.
   The old hand-written `index.html` (root) and `markets/index.html` are
   replaced by Astro pages — delete them.
3. On GitHub: **Settings → Pages → Build and deployment → Source →
   GitHub Actions** (instead of "Deploy from a branch").
4. `git add -A && git commit -m "Convert to Astro course site" && git push`
   — the included workflow (`.github/workflows/deploy.yml`) builds and
   deploys automatically.

To preview locally first: `npm install`, then `npm run dev` and open
`http://localhost:4321/nyuad/`.

## Writing a new note (day-to-day workflow)

Create `src/content/notes/02-your-title.md`:

```markdown
---
title: "Tax incidence"
description: "Why the statutory side of a tax does not matter, and what does."
date: 2026-06-17
order: 2
---

Body in Markdown. Inline maths $P = a - bQ$ and display maths:

$$
Q^* = \frac{a - c}{b + d}
$$
```

Then `git add`, `commit`, `push`. The note appears on the course page
automatically. Exercises work identically in `src/content/exercises/`.

Frontmatter fields:

| Field | Required | Meaning |
|---|---|---|
| `title` | yes | Page heading and card title |
| `description` | yes | Card description on the course page |
| `date` | yes | Shown on the card and the page (`YYYY-MM-DD`) |
| `order` | no | Explicit position in the list (lower first); date order otherwise |
| `draft` | no | `draft: true` hides it from the site entirely |

Linking from a note to a tool: notes live at `/markets/notes/<slug>/`, so use
a relative link like `[Tool 2](../../competitive_equilibrium.html)`.

## Adding a new tool

1. Drop the standalone HTML file into `public/markets/`.
2. Add an entry to the `tools` array at the top of
   `src/pages/markets/index.astro` (same card voice as the existing ones).
3. Commit and push.

## Structure

```
nyuad/
├── astro.config.mjs            base: '/nyuad'; remark-math + rehype-katex
├── .github/workflows/deploy.yml
├── public/markets/             the six standalone tools (verbatim)
└── src/
    ├── content.config.ts       collection schemas (notes, exercises)
    ├── content/{notes,exercises}/   your Markdown
    ├── layouts/Course.astro    header, footer, back-link conventions
    ├── styles/site.css         palette + card styles (matches the old pages)
    └── pages/
        ├── index.astro         root hub
        └── markets/
            ├── index.astro     course home: Tools · Notes · Exercises
            ├── notes/[...slug].astro
            └── exercises/[...slug].astro
```
