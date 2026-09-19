# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML5 + CSS (custom properties) + vanilla JavaScript. No framework, no build
step, no bundler. *Inferred, not asked directly*: every prior site the user built
(gimnasio-web, salud, the previous portfolio) used this same stack, and the user's
standing instruction for this session is "sin Artifact, cada cosa con su fichero" —
separate `index.html` / `styles.css` / `script.js`, which only makes sense unbundled.
Vanilla is also clearly sufficient for a personal portfolio (rule: "si vanilla es
suficiente, utiliza vanilla").

## Users

Recruiters, tech leads, and HR staff at web/software studios deciding whether to
contact Aitor for a DAW internship placement now and a junior developer role next.
They arrive from a LinkedIn profile, a job application, or a shared link, spend a
short time, and need to judge real skill fast: what he can build, what he is
studying, and how to reach him.

## Product Purpose

A personal portfolio, bilingual ES/EN, for Aitor Zoilo Burgos, a DAW (Desarrollo de
Aplicaciones Web) student in Malgrat de Mar. It exists to turn a brief visit into
contact for an internship, and later a junior developer job. Success is a recruiter
finishing the page with a clear read on his level and then reaching out (email or
LinkedIn) or opening a project or his GitHub.

## Positioning

A student who already ships. Real projects live in production, each built and
deployed by him — led by "aizlo", his own showcase that bundles real client sites
inside it — shown next to a stack mapped to what he is currently studying. The
argument is demonstrated delivery plus an honest "en formación / in training"
framing — never a claim of seniority.

DAW stays the primary framing (hero, role line). Two more FP cycles (SMX,
2018-2020; ASIX, 2021-2023) and a real job (helpdesk at Ricoh, Inditex project,
2024-2026, now ended) came before DAW — surfaced as credentials/experience in
the "Sobre mí" bio and its own labelled stack block, not in the hero. Aitor
confirmed (2026-09-18) he no longer works at Ricoh and is now full-time on DAW,
first year — the site must say "ya no trabajo ahí" / not currently employed
there, not imply an ongoing job.

## Operating Context

- Read on phones as often as on desktop (LinkedIn and messaging link shares); must
  hold up at every width.
- Bilingual ES/EN from launch, with a visible language switch; content authored in
  both languages from the start (not a later add-on).
- Intended to deploy as a static site with no build step (Netlify or equivalent).
- Contact form intended to post through Web3Forms (no backend); direct email,
  LinkedIn, and GitHub links also present.
- This is a rebuild from scratch: content, structure, and visual direction are new
  and independent of the older `portfolio/` project in this Drive, which stays
  untouched as a separate, already-deployed site.

## Capabilities and Constraints

- Plain HTML5 + CSS (custom properties) + vanilla JS. No frameworks, no build
  tooling, no external CSS/JS to load — shows fundamentals and keeps the site
  deployable anywhere as static files.
- No backend. Contact handled by Web3Forms (free tier) once the user generates an
  Access Key. No blog, no CMS.
- Content language: bilingual ES/EN from day one, user-toggleable.
- The "Sobre mí / About" narrative is a first draft written by Claude from known
  facts (DAW student, interest in front-end/full-stack web dev and AI applied to
  real web projects); the user will review and correct it, it is not final copy.

## Brand Commitments

- Name: Aitor Zoilo Burgos. Short handle: "aitor". GitHub: @garbanzinhoo.
  Email: zoiloburgosaitor@gmail.com — Aitor's explicit instruction
  (2026-09-18); an earlier pass had switched it to `azoiloburgos@gmail.com`
  (matching his CV and this session's own userEmail context) but he asked to
  use `zoiloburgosaitor@gmail.com` on the site instead. Use that one here
  unless he says otherwise again — don't re-"fix" it back.
  LinkedIn: /in/aitor-zoilo-burgos-a5080728b.
- Role line: "Estudiante de DAW" / "Desarrollador web en formación" (ES) —
  "DAW student" / "Web developer in training" (EN). Lives in Malgrat de Mar;
  studies DAW in **Blanes** (confirmed 2026-09-18) — keep these distinct,
  don't collapse to one town.
- Education fact: SMX (2018-2020) and ASIX (2021-2023) — both full cycles
  completed and passed before DAW. Confirmed by Aitor directly (2026-09-18).
- Work history: helpdesk at Ricoh (Inditex project), 2024-2026, **ended** —
  Aitor no longer works there and is now full-time on DAW. Plus two earlier
  internships (SMX practicum, Malgrat de Mar, 2019; ASIX practicum/Erasmus,
  PCILAB Lisbon, 2023). Source: his CV (`assets/cv-aitor-zoilo-burgos.pdf`).
- Phone: +34 711 714 594 — Aitor approved publishing this on the site
  (2026-09-18). His CV photo was explicitly declined for the site; PDF only.

## Evidence on Hand

- Projects to show, real and live, both built and deployed by Aitor, both
  built with AI as a development tool (confirmed by Aitor, 2026-09-19: frame
  it as "ideado, dirigido, desplegado y refinado por mí con IA como
  herramienta", never "vibe coding" — that phrasing reads to recruiters as
  "didn't understand what he built"). Real screenshots taken live
  (`assets/preview-aizlo.png`, `assets/preview-chunkiflunki.png`) and real,
  verified technical facts used in each project's case-study copy (checked
  in-browser, not invented): aizlo embeds 11 real client sites as iframes;
  Chunkiflunki's mini-games are separate pages sharing one `shared.js`.
  - aizlo — https://aizlo.netlify.app/ — his own showcase: a marketplace-style
    display of browsable example sites by sector, bundling real client sites as
    "puestos" (stalls). Featured project.
  - Chunkiflunki — https://chunkiflunki.netlify.app/ — hub of party mini-games.
- GitHub profile (@garbanzinhoo) and LinkedIn profile, both to be linked from the
  site.
- No testimonials, client quotes, metrics, ratings, awards, or press exist — must
  not be invented.
- **Live at https://portfolioaitorzoilo.netlify.app** (deployed 2026-09-19,
  replacing the old portfolio that previously lived at that same Netlify
  site/URL, per Aitor's explicit choice to keep the memorable URL). Source
  at https://github.com/garbanzinhoo/portfolio (force-pushed over the old
  portfolio repo, same reasoning). No custom domain beyond that.

## Product Principles

1. Show, don't claim: real shipped projects carry the argument; language stays
   honest about being a student in training.
2. Fast to judge: level, work, and how to make contact should land within roughly
   one screen and one scroll.
3. Bilingual by design: ES/EN is a launch requirement, not a later toggle bolted on.
4. Lightweight and portable: no build, no dependencies, no backend beyond the
   contact form — must deploy as plain static files.
5. The design itself should read as evidence of DAW training — technical craft is
   part of the pitch, not just the content.

## Accessibility & Inclusion

Semantic HTML5, a skip-to-content link, visible focus states, full
`prefers-reduced-motion` support, and full usability at mobile widths.
