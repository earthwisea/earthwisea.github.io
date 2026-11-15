# Context: Earthwise website (site-wide plan and decisions)

> Internal reference. Folders starting with `_` are not published by Jekyll.
> Companion to `_context/radar-mine-monitoring-article.md` (radar page specifics).
> Update this file first when direction changes, then the code.

| | |
|---|---|
| **Site** | `earthwisea.github.io`, Jekyll, custom `earthwise` layout (old Casper theme files remain but are unused by the new pages) |
| **Status** | v0.2, Nov 2026. Restyled away from the ICEYE reference; one live service (radar), four "coming soon" services |
| **Contact** | `rifsentosa+earthwisea@gmail.com`, set once as `contact_email` in `_config.yml`, used via `_includes/ew-href.html` (set `url: "mailto"` plus an optional `subject`) |

---

## 1. Positioning

- **Overarching hero** covers all services: "See what's changing on the ground, whatever the weather."
- **Everything else on the home page is about radar mine monitoring**, the only service with results. Future services appear only in the "In development" section and the footer.
- Future services pages are placeholders: hero line, "in development, coming soon", "Book a pilot call". **No internal notes** (methods, target customers, satellite limits) on public pages.

## 2. Services

| Service | Page | Status |
|---|---|---|
| Radar mine monitoring | `/radar-mine-monitoring/` | Live (draft content) |
| Regional mine monitoring | `/regional-mine-monitoring/` | Coming soon |
| Water turbidity | `/water-turbidity/` | Coming soon |
| Deforestation analysis | `/deforestation-analysis/` | Coming soon |
| Concession due diligence | `/concession-due-diligence/` | Coming soon |

Internal notes on the future services (not for publication):

- **Regional mine monitoring** (e.g. Timah): RF-based mine / non-mine openings. Buyers: local government (Pemda), large mine owners, mining consultants writing feasibility studies (EarthWise as their add-on).
- **Water turbidity**: methodology available.
- **Deforestation analysis**: e.g. for AMDAL (narrower scope). Regional embeddings + RF. Deforestation alerts every ~2 weeks (satellite limit), shown as GIF.
- **Concession due diligence**: buyers are government auctions and, mainly, companies doing due diligence. From simple map sets to advanced analysis.

## 3. Site structure

- **Menu:** Radar monitoring · About · Contact. ("How it works" removed.)
- **Footer columns:** Product (radar) · In development (4 services) · Company (About, Contact).
- **Home sections:** hero → two radar card rows → pilot banner → Latest (hand-picked list in `_data/home.yml`, currently only the radar page) → "In development" (the four future services, last section before the footer).
- **Pages:** About (`/about/`), Contact (`/contact/`, mailto buttons only; GitHub Pages cannot process forms). About, Contact and the coming-soon pages all use `_layouts/article.html` (`coming_soon: true` adds the label and hides the hero button).
- **Removed:** the MVP post.
- **Buttons:** every contact / pilot / "book a pilot call" button opens a mailto to the contact address with a subject naming the service.

## 4. Radar mine monitoring: fixed decisions

- **Concession boundary comes from the client** and is confidential. Never "from public records".
- **Deliverable is a monthly PDF report.** No dashboard, panel, real-time, app, spreadsheet or GIS-file language.
- **Promised outputs** (only these get placeholders, plus things derived from the same processes):
  1. Annual SAR land cover 2017–2025 vs annual Sentinel-2, one comparison GIF (website showcase, one-off).
  2. Chart: reclamation rate. 3. Chart: mining expansion rate. 4. Chart: carbon loss and gain.
  5. Monthly radar results as a GIF (website showcase, one-off; shows the value of comparing reports over time).
  - Derived: land-cover area by class per year (table); headline-numbers page of the PDF; optical cloud-free observations vs radar passes; raw vs corrected radar; sample PDF page.
- **Storyline:** problem → Chapter 1 optical (achievements + limits) → Chapter 2 radar (fills gaps, enables rates) → what's in the monthly report → craft → limits → pilot → FAQ.

## 5. Visual system (changed from the ICEYE reference)

| Element | Now |
|---|---|
| Accent | Laterite orange `#D9622B` (hover `#E9824F`, text links on light `#B4501F`) — CSS var `--accent` |
| Fonts | Manrope (400/500/600) + JetBrains Mono |
| Background | Cool white `#F6F8F8` |
| Hero | Dark with faint topographic contour lines (inline SVG in CSS) |
| Footer | Contour band above the columns; giant wordmark kept |
| Header | Transparent → solid on scroll, hides on scroll down; thin accent line when solid |
| Letter spacing | Body 0, headings −0.02em, mono 0 |
| Kept as before | Button shape, cards, dividers, mono kickers, hatched placeholders, text logo |
