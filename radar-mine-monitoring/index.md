---
layout: article
title: "Know what's happening at your mine, before anyone tells you."
description: "Monthly radar-based monitoring of a mining concession, through cloud and rain, delivered as one PDF report."
permalink: /radar-mine-monitoring/
navigation: true
current: radar
class: "page-template article-template"   # body class (layout front matter is not merged into page in Jekyll 3)
draft: true            # true = show draft banner + placeholder register; set false to publish

eyebrow: "Radar Mine Monitoring"
lede: "Monthly monitoring of your concession from satellite radar, which sees through cloud, day and night. Mining expansion, reclamation and carbon, in one PDF report each month."
cta_label: "Request a pilot for your concession"
cta_url: "mailto"
cta_subject: "Pilot: Radar mine monitoring"
cta_secondary_label: "See what's in the report"
cta_secondary_url: "#report"
cta_band_title: "See your concession through the clouds."
cta_band_text: "Share your concession boundary with us in confidence. We build its history back to 2017 and send your first monthly report."
hero_figure: F1

toc:
  - { id: questions, label: "The questions your reports can't answer" }
  - { id: optical,   label: "Chapter 1: what optical satellites could do" }
  - { id: radar,     label: "Chapter 2: radar fills the gaps" }
  - { id: report,    label: "What's in your monthly report" }
  - { id: craft,     label: "Why this is harder than it looks" }
  - { id: limits,    label: "What we won't tell you" }
  - { id: pilot,     label: "Start with one concession" }
  - { id: faq,       label: "Questions you may have" }
---

## The questions your reports can't answer {#questions}

You are responsible for a mine worth more than any report written about it. Yet some simple questions about it still don't have a straight answer.
{: .ew-intro}

<ul class="ew-qlist">
<li>How fast is the mine really expanding, year on year?</li>
<li>How much disturbed land has actually been reclaimed?</li>
<li>How much carbon has the clearing released, and how much has regrowth taken back?</li>
<li>Did work really slow down in the wet season, or did the reports just say so?</li>
</ul>

Ground surveys arrive quarterly at best. Drones need people on site and decent weather. And the figures that do reach you have passed through contractors, site teams and department heads first. Each layer summarises, rounds and, sometimes, softens.

Satellites can give you an independent second view. The question is which satellites.

## Chapter 1: what optical satellites could do {#optical}

### What we achieved

We started where most people start: Sentinel-2, the European optical satellite behind many of the maps you already know. From its images we built a land-cover map of the concession for each year, separating mining ground from vegetation, revegetation and water. For the first time the footprint and its growth were visible from outside the company's own reporting.
{: .ew-intro}

### Where it ran out

Optical satellites are cameras. They need daylight and a clear sky, and over Sulawesi and Maluku the cloud can stay for weeks.

<div class="ew-limits" markdown="1">
- **Cloud gaps.** In the wet season, months can pass without a single clear image.
- **Patchy years.** Some years have too few clear images to map with confidence.
- **Yearly at best.** With so few clear views, a monthly picture was out of reach.
- **Look-alikes.** Wet bare soil, fresh clearing and seasonal fields can look the same to a camera.
</div>

{% include ew-figure.html id="F2" %}

The optical maps answered *roughly where*. They could not reliably answer *how fast* or *since when*.

## Chapter 2: radar fills the gaps {#radar}

### Radar sees what cameras can't

Satellite radar doesn't wait for sunlight or clear skies. It sends its own microwave signal to the ground and measures what comes back, through cloud, haze, smoke and darkness. Freshly dug ground, compacted roads, water and forest each return the signal differently.
{: .ew-intro}

The European Sentinel-1 radar satellites pass over your concession several times a month, and the archive goes back years. That means no missing seasons and no missing years.

### Every year since 2017, without gaps

Using radar alongside the optical record, we map land cover for every year from 2017 to 2025. The image at the top of this page compares the two, year by year: where optical is blank or blurred by cloud, the radar map is complete.

{% include ew-table.html id="T1" %}

### Every month from now on

Because radar sees through the wet season, we can map the concession every month. Put side by side, those months show how the mine actually moves: where it grows, where it pauses and where land starts to recover.

{% include ew-figure.html id="F3" %}

### From maps to rates

A complete, gap-free record is what makes rates possible. Instead of "the mine looks bigger", you get how many hectares were opened each year, how many were reclaimed, and what that means for carbon.

<div class="ew-techbox" markdown="1">
**For your technical team.** Land-cover classification combining Sentinel-1 radar, Sentinel-2 optical and terrain data with machine learning, mapped yearly from 2017 and monthly going forward. Sentinel-1 time series kept to consistent orbits, with terrain correction and speckle filtering. Method notes come with every report.
</div>

## What's in your monthly report {#report}

Every month you receive one PDF report on your concession, written for people who decide. Each report builds on the last, so you can compare month by month and year by year.
{: .ew-intro}

### The headline numbers

The report opens with a single page of numbers, each compared with last month and with 2017.

{% include ew-table.html id="T2" %}

### How fast the mine is expanding

{% include ew-figure.html id="F4" %}

### How much land is being reclaimed

{% include ew-figure.html id="F5" %}

### Carbon lost and regained

Clearing releases the carbon stored in forest and soil; revegetation slowly takes some of it back. The report estimates both, from the same land-cover record.

{% include ew-figure.html id="F6" %}

### Delivered privately, as a PDF

{% include ew-table.html id="T3" %}

{% include ew-figure.html id="F8" %}

## Why this is harder than it looks {#craft}

### Free data is not free answers

The satellite data we use is public. Anyone can download it. Very few teams can turn it into a number a mine manager will put in front of a board. Raw radar is grainy with "speckle", hillsides look brighter or darker purely because of the viewing angle, and wet bare soil can look like fresh digging. Read naively, it produces confident-looking maps that are wrong.

{% include ew-figure.html id="F7" %}

### The craft behind each number

Every figure rests on a chain of decisions: correcting for terrain and orbit geometry, filtering speckle without blurring pit edges, keeping each time series to a consistent viewing angle, and combining radar with optical and terrain data so that look-alikes are told apart. Skip one step and the numbers drift.

### Built for Indonesian mining

Our methods are tuned for nickel laterite on steep ridges and for the cloud seasons of Sulawesi and Maluku. This is not a generic global product with your coordinates typed in.

## What we won't tell you {#limits}

<div class="ew-limits" markdown="1">
- We don't estimate tonnage, production or ore grade.
- We don't make legal, permitting or compliance judgements.
- Carbon figures are estimates from land cover, not field measurements.
- Where a finding needs checking on the ground or in the records, we say so plainly: **flagged for verification**.
</div>

Clear limits are what make the rest of the numbers worth trusting.

## Start with one concession {#pilot}

A pilot covers one concession, from its history to this month.

1. **You share your concession boundary.** A shapefile or KML is ideal. It stays confidential and is used only for your analysis.
2. **We build its history.** Yearly land cover from 2017 to today, from radar and optical data.
3. **You receive your first monthly PDF report**, with a walkthrough of what we found and what each number can and can't support.

<p><a class="ew-btn ew-btn--solid" href="{% include ew-href.html url='mailto' subject='Pilot: Radar mine monitoring' %}">Request a pilot<i></i></a></p>

## Questions you may have {#faq}

<div class="ew-faq">
<details><summary>Do I need GIS staff to use this?</summary><p>No. The report is a PDF written for decision-makers. Your technical team can read the method notes at the back.</p></details>
<details><summary>Why do you need our concession boundary?</summary><p>It tells us exactly which land to analyse. We treat it as confidential: it is used only for your analysis and never shared.</p></details>
<details><summary>Why a PDF, not a dashboard?</summary><p>A short monthly report is easier to read before a meeting, forward to the board and keep on file. Each report builds on the last, so comparisons over time are already done for you.</p></details>
<details><summary>How often do reports arrive?</summary><p>Once a month. The first report also includes the full history from 2017.</p></details>
<details><summary>Is it confidential?</summary><p>Yes. Your boundary and your reports go only to the people you name.</p></details>
<details><summary>How is this different from drone surveys?</summary><p>A drone gives a detailed snapshot whenever someone flies it in good weather. Radar gives a continuous record, back to 2017, with nobody on site. The two work well together.</p></details>
</div>
