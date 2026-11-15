# Context: "Radar Mine Monitoring" website article

> Internal reference. Jekyll ignores folders that start with `_` unless they are configured, so this file is **not published**.
> Edit it whenever the article's direction changes, and keep it in sync with
> `radar-mine-monitoring/index.md` and `_data/radar_article.yml`.
> Site-wide decisions live in `_context/site-plan.md`.

| | |
|---|---|
| **Purpose** | Semi-technical, semi-marketing "what we do" article for the EarthWise website |
| **Service** | Mine Monitoring (RF + radar), standalone |
| **Audience** | Senior manager / mine leadership (one concession per article) |
| **Language** | English first (Bahasa Indonesia later) |
| **Page** | `radar-mine-monitoring/index.md` → `/radar-mine-monitoring/` |
| **Status** | Draft v0.2 (Nov 2026). Restructured around the promised outputs and the optical → radar storyline. Dummy data and placeholders. |
| **Technical owner of visuals and data** | Nasir (radar / RF outputs O1–O10) |

---

## 1. What the article must do

1. **Make the reader feel the problem.** Name the questions the manager already has and can't get straight answers to: how much is really being worked, when a pit really opened, whether anything was cleared outside the boundary, whether survey numbers hold up.
2. **Make the reader feel ahead of others.** They walk into meetings with numbers and questions nobody else has, and the numbers survive pushback from technical staff.
3. **Show the moat without jargon overload.** The satellite data is free; turning radar into defensible numbers is the hard part, and EarthWise has that expertise.
4. **Earn trust.** Confidence on every number, plus explicit limits on what we do *not* claim.
5. **Drive one action:** request a pilot for one concession.

### Fixed constraints (v0.2)

- **The concession boundary comes from the client** (shapefile/KML) and is confidential. Never say it comes from public records.
- **The deliverable is a monthly PDF report.** No dashboard, panel, app, real-time, spreadsheet or GIS-file language.
- **Only promised outputs get placeholders** (see section 4), plus items derived from the same processes.
- **The two GIFs are website showcase material**, one-off, illustrating the value of comparing reports over time.

### Persona constraints we design around

| Persona reality | What the article does about it |
|---|---|
| Not a remote-sensing specialist | Plain language first; technical detail in short, skippable blocks |
| Little time | Hero + section 1 + section 4 must work on their own (skim path) |
| Relies on filtered internal reporting | Positions EarthWise as an *independent second view* from satellite data |
| Risk-averse about being wrong in front of others | Confidence levels, validation, "what we won't tell you" |
| Wants to look expert | "Questions to put to your team" and "numbers you can defend" |

### Moat pillars (use consistently)

1. **Sees through cloud.** Radar works through the wet season, day and night.
2. **Gap-free history.** Yearly land cover from 2017 with no missing years, monthly from now on.
3. **The craft.** Terrain correction, speckle filtering, orbit-consistent time series, combining radar with optical and terrain data.
4. **Built for Indonesian mining.** Nickel laterite terrain, Sulawesi and Maluku cloud seasons.
5. **Honest.** Explicit limits; carbon stated as an estimate; findings needing checks labelled "flagged for verification".

---

## 2. Tone and copy decisions

Defaults chosen for draft v0.1. Change them here first, then in the page.

| Decision | Current default | Alternatives |
|---|---|---|
| Tone | Bold but credible ("reports are filtered", never "your team lies") | Calm and consultative |
| Length | Long-form (~1,800–2,200 words) with a skim path | Short landing page (sections 0, 1, 4, 6, 9) |
| Persona naming | "Mine leadership" / "you", role-neutral enough for owners and investors | Explicitly "senior managers" |
| Example vignette | Fully fictional, labelled *illustrative* | Anonymized pilot example once results exist |
| Discretion angle | Boundary shared in confidence; reports only to people you name | Explicit ("order it privately") |
| Sensitive findings | Always worded "flagged for verification", never "breach" or "illegal" | — |

**Words to avoid:** "illegal", "violation", "proof", "guarantee", "real-time", "AI magic", exact accuracy claims before validation exists.

---

## 3. Article outline (v0.2)

| # | Section (id) | What it contains | Job |
|---|---|---|---|
| 0 | **Hero** | "Know what's happening at your mine, before anyone tells you." Monthly radar monitoring, one PDF report. CTA: request a pilot (mailto). Hero figure F1. | Emotion |
| 1 | **The questions your reports can't answer** (`questions`) | Four questions tied to the outputs: expansion, reclamation, carbon, wet-season slowdown. Why internal figures stay vague. | Emotion |
| 2 | **Chapter 1: what optical satellites could do** (`optical`) | Achievement: yearly Sentinel-2 land cover showed footprint and growth. Limits: cloud gaps, patchy years, yearly at best, look-alikes. F2. | Story / Moat |
| 3 | **Chapter 2: radar fills the gaps** (`radar`) | Radar through cloud; yearly land cover 2017–2025 without gaps (T1); monthly results (F3); maps become rates. Tech box. | Story / Moat |
| 4 | **What's in your monthly report** (`report`) | Headline numbers (T2), expansion (F4), reclamation (F5), carbon (F6), deliverables (T3), sample page (F8). | Emotion / Action |
| 5 | **Why this is harder than it looks** (`craft`) | Free data is not free answers (F7); the craft; built for Indonesia. | Moat |
| 6 | **What we won't tell you** (`limits`) | No tonnage, grade, legal judgements; carbon is an estimate; flagged for verification. | Trust |
| 7 | **Start with one concession** (`pilot`) | Share boundary in confidence → we build history from 2017 → first monthly PDF + walkthrough. | Action |
| 8 | **FAQ** (`faq`) | GIS staff, why the boundary, why a PDF, how often, confidentiality, vs drones. | Trust |

Removed in v0.2: "How it works" four-step section, activity status per opening, start dates vs permits, disturbance outside the boundary, seasonal activity, ponds, KPI panel, openings table, questions table, confidence/accuracy table, the fictional "month in the life" vignette.

---

## 4. Placeholder register

The **single source of truth** is `_data/radar_article.yml`. The page references elements by ID only:

```
include ew-figure.html id="F4"
include ew-table.html id="T2"
```

To replace a placeholder with a real image or GIF, set `image:` (path under `assets/images/radar/`) and `status: final`.

| ID | Type | Element | Promise | Section |
|---|---|---|---|---|
| F1 | GIF | Yearly land cover 2017–2025: SAR land cover vs Sentinel-2, side by side | Promised | Hero |
| F2 | Chart | Clear optical images vs radar passes per year | Derived | Chapter 1 |
| F3 | GIF | Monthly radar results | Promised | Chapter 2 |
| F4 | Chart | Mining expansion rate | Promised | Report |
| F5 | Chart | Reclamation rate | Promised | Report |
| F6 | Chart | Carbon loss and gain | Promised | Report |
| F7 | Image | Raw vs corrected radar | Derived | Craft |
| F8 | Image | A page from the monthly PDF | Derived | Report |
| T1 | Table | Land cover by class per year | Derived | Chapter 2 |
| T2 | Table | Headline numbers (first page of the PDF) | Derived | Report |
| T3 | Table | What you receive | Static | Report |

**Dummy-data rule:** all numbers are fictional and every rendered placeholder says so. Set `draft: false` on the page to hide the internal register before publishing.

---

## 5. Files in this repo

| File | Role |
|---|---|
| `radar-mine-monitoring/index.md` | Article copy (markdown + includes) |
| `_layouts/article.html` | Article layout (also used by About, Contact and the coming-soon service pages) |
| `_includes/ew-figure.html` | Figure placeholder, or the real image once `image:` is set |
| `_includes/ew-table.html` | Data-driven table |
| `_includes/ew-register.html` | Internal placeholder register (draft mode only) |
| `_includes/ew-href.html` | Builds mailto links to `site.contact_email` |
| `_data/radar_article.yml` | Placeholder definitions + dummy data |
| `assets/css/earthwise-article.css` | Article styles |
| `_context/radar-mine-monitoring-article.md` | This file |

---

## 6. Open decisions

1. Final carbon method and units (t CO2e assumed).
2. Whether the yearly land-cover classes match T1's columns.
3. Real reply time and team profiles (About / Contact placeholders).

---

## 7. Known site issues (review of 2026-11-15)

Not fixed yet. The article does not depend on them.

1. **Theme leftovers.** The menu (`_includes/navigation.html`) still links to the Jasper demo tags and authors (Fables, Speeches, Casper, Edgar…); `_data/authors.yml`, demo images and the Ghost logo are still present; the home page title is "Finding The Way Home".
2. **`site.url` is not set** in `_config.yml`, so canonical links and social-share (Open Graph) URLs are relative and break when shared. Set `url: "https://earthwisea.github.io"`.
3. **Outdated build stack.** Jekyll 3.9 with `github-pages` 214, and the workflow uses `actions/checkout@v2` and `helaili/jekyll-action@v2`. Consider moving to GitHub's official Pages workflow.
4. **Old front-end dependencies** loaded from protocol-relative CDN URLs: jQuery 1.12, highlight.js 9.3; the share buttons include Google+.
5. ~~The home page is a blog index.~~ Fixed: custom landing page.
6. ~~No contact mechanism.~~ Fixed: all CTAs mailto `site.contact_email`.

### Preview without Ruby

The article was checked with an approximate preview (Liquid templates translated to Jinja, Python-Markdown in place of kramdown). Always confirm with a real build before publishing: `bundle exec jekyll serve`, then open `/radar-mine-monitoring/`.
