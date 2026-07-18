# NYUAD — course sites & interactive teaching tools

An **Astro** site plus standalone HTML tools for the NYU Abu Dhabi courses
**Markets**, **Game Theory**, and **Microeconomics** —
[amitkumargoyal.github.io/nyuad](https://amitkumargoyal.github.io/nyuad/).
Redesigned to a typeset-handout aesthetic (STIX Two Text + IBM Plex Mono,
self-hosted; per-tool diagram glyphs) with LaTeX-enabled notes, exercises, and
interactive diagrams.

## What's here

- **Three courses**, each with its own home page, hero diagram, notes, and
  exercises. URL slugs are stable: `markets`, `game-theory`, `microeconomics`.
- **Interactive tools** — six for Markets (supply/demand shifts, competitive
  equilibrium, price controls, tax incidence, trade policy, substitutes &
  complements). Game Theory and Microeconomics are scaffolded with empty tool
  arrays ("Coming soon"); their tools are still to be built.
- **Notes and exercises** — Markdown with build-time KaTeX.

## How it works

- **Notes and exercises** are Markdown files under
  `src/content/<course>/notes/` and `src/content/<course>/exercises/`. LaTeX
  (`$...$` inline, `$$...$$` display) is rendered to HTML by KaTeX **at build
  time** — pages ship as plain HTML + CSS, no runtime maths JavaScript, and the
  KaTeX fonts are self-hosted.
- **Interactive tools** are standalone, self-contained HTML files kept verbatim
  in `public/<course>/`. Astro copies `public/` to the output unchanged, so tool
  URLs (e.g. `/nyuad/markets/trade_policy.html`) stay stable. Each typeset tool
  needs a sibling `fonts/` folder beside it (relative `@font-face` URLs).
- **Course home pages** (`src/pages/<course>/index.astro`) list the tools from a
  hard-coded `tools` array at the top of the file, and auto-list every published
  note and exercise from that course's collections.
- **Fonts are self-hosted, no CDNs**: STIX Two Text and IBM Plex Mono via
  `@fontsource` for the site, and a sibling `fonts/` folder for the standalone
  tools. (The one legacy exception is Chart.js from a CDN, used only by Tool 1.)

## Tech stack

- **Astro 7** (7.1.0 / Vite 8) with the content-layer API.
- **KaTeX** via `remark-math` + `rehype-katex`. Astro 7 no longer bundles the
  unified Markdown pipeline these plugins need, so it is opted back in through
  the explicitly installed `@astrojs/markdown-remark` package.
- **GitHub Actions** → GitHub Pages.
- `astro.config.mjs`: `site: 'https://amitkumargoyal.github.io'`, `base: '/nyuad'`.
  Internal links use `import.meta.env.BASE_URL`.

## Local development

Requires **Node ≥ 22.12** (Vite 8).

```bash
npm install        # once per machine, and again only if package.json changes
npm run dev        # → http://localhost:4321/nyuad/
```

> **Never run `npm audit fix --force`.** It permits breaking version changes. Any
> audit warnings are in build-time dependencies only and do not affect the
> deployed site, which is pure static HTML/CSS.

## Deployment

GitHub Pages source is **GitHub Actions**. Pushing to `main` triggers
`.github/workflows/deploy.yml`, which builds and deploys (CI pinned to Node 24).

```bash
git add -A && git commit -m "..." && git push
```

## Writing a note or exercise (day-to-day)

Create `src/content/<course>/notes/02-your-title.md` (or `.../exercises/`):

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
automatically. URLs: `/nyuad/<course>/notes/<file-slug>/`.

Frontmatter fields:

| Field | Required | Meaning |
|---|---|---|
| `title` | yes | Page heading and list title |
| `description` | yes | One-liner on the course page |
| `date` | yes | Shown on the list and the page (`YYYY-MM-DD`) |
| `order` | no | Explicit position in the list (lower first); date order otherwise |
| `draft` | no | `draft: true` hides it from the site entirely |

List numbering (01, 02… / PS 1, PS 2…) is positional, derived from sort order.
Linking from a note to a tool: notes live one level deeper than the tools, so
use a relative link like `[Tool 2](../../competitive_equilibrium.html)`.

## Adding a new tool

1. Drop the standalone HTML file into `public/<course>/`. If it uses the typeset
   font treatment (it should), copy `public/markets/fonts/` into
   `public/<course>/fonts/` the first time that course gets a tool.
2. Add an entry to the `tools` array at the top of
   `src/pages/<course>/index.astro`: `{ file, title, desc, glyph }`, where
   `glyph` is an inline 80×80 SVG miniature of the tool's diagram. Card voice is
   verb-led: the action, then what the student observes.
3. Commit and push.

## Adding a new course

1. Add an entry to the `courses` array in `src/pages/index.astro`.
2. Copy a course's three pages into `src/pages/<course>/` and substitute the
   collection keys, course name, slug, lede, and hero component.
3. Add two collections in `src/content.config.ts` (via the `col` helper), plus
   `.gitkeep`-carrying folders under `src/content/<course>/` and
   `public/<course>/`.
4. Optionally add a course hero component in the site's diagram language.

Layout, palette, fonts, KaTeX, and deployment are shared automatically.

## Structure

```
nyuad/
├── astro.config.mjs            base '/nyuad'; remark-math + rehype-katex
├── package.json                astro, katex, rehype-katex, remark-math,
│                               @astrojs/markdown-remark, @fontsource/*
├── .github/workflows/deploy.yml
├── public/
│   ├── markets/                six standalone tools + fonts/
│   ├── game-theory/            (tools to come; .gitkeep)
│   └── microeconomics/         (tools to come; .gitkeep)
└── src/
    ├── content.config.ts       six collections via a col(base) helper
    ├── content/
    │   ├── markets/{notes,exercises}/
    │   ├── game-theory/{notes,exercises}/
    │   └── microeconomics/{notes,exercises}/
    ├── components/
    │   ├── HeroDiagram.astro          Markets: animated S&D cross
    │   ├── HeroGameTheory.astro       2×2 prisoner's dilemma, NE cell highlighted
    │   └── HeroMicroeconomics.astro   budget line + tangent indifference curve
    ├── layouts/Course.astro    head, fonts, hero header, generic back-link, footer
    ├── styles/site.css         all design tokens and styles (single source)
    └── pages/
        ├── index.astro         root hub: three course cards
        ├── markets/            index + notes/exercises [...slug]
        ├── game-theory/        same trio (tools array empty)
        └── microeconomics/     same trio (tools array empty)
```

## Conventions (summary)

- **Tools are standalone HTML; the site is Astro. Never convert the tools to
  Astro pages.**
- **Fixed axes**: supply–demand diagrams use 0–100 on both axes; axes never
  rescale (lines move, axes stay fixed) — rescaling would hide the comparative
  statics.
- **Back-links are relative**: every tool links home with `href="./"`, never an
  absolute URL.
- **Palette**: violet `#5A1BA6`, terracotta `#A03A2C`, sage `#9CAF88`, steel
  `#2F6F8F`, cream `#FAF7F2`, ink `#221d16`.
- **British spelling** throughout.

Full architecture, every tool's geometry and formulas, and all design
decisions are documented in the project knowledge file
(`markets_nyuad_knowledge.md`), which is the authoritative source of truth.

---

Built with Claude · Amit Goyal · amit.goyal@nyu.edu