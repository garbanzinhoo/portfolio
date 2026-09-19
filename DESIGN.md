# Design

<!-- impeccable:design-schema 1 -->

## World

"Sprint board" — the portfolio is Aitor's own Kanban/agile board. Skills and
projects are ticket-cards inside real workflow columns (Backlog / En curso /
Hecho·Desplegado). Ticket panels (Sobre mí, Contacto) borrow the same
grammar: an ID, a status pill, labelled fields. Chosen over the terminal/
hacker cliché most DAW-student portfolios default to. See
`.impeccable/surfaces/index-html.md` for the full direction contract and how
it was picked (concept-seed key `767f5e8f`, mode persuade).

Light is the primary scene (a whiteboard/paper-ticket board read in daytime,
office-hours review); a full dark variant ships via `prefers-color-scheme`
using the same grammar, not a different world.

## Palette

Named roles, not scattered accents:

| Role | Light | Dark |
|---|---|---|
| Board background | `#F5F3EE` | `#12131A` |
| Card background | `#FFFFFF` | `#1E2029` |
| Ink (body text) | `#17181C` | `#F3F2ED` |
| Ink soft | `#4B4D57` | `#C7C7D1` |
| Ink faint (labels) | `#606164` | `#8B8C97` |
| Accent (text/links, active states) | `#3A46E8` | `#7C88FF` |
| Accent solid (button/skip-link fill under white text) | `#3A46E8` | `#4A55E0` |
| State — Backlog | text `#5A5D68` / soft `#EDEEF1` | text `#9A9CA8` / soft `#23252E` |
| State — En curso | text `#965F0A` / soft `#FBF0DA` | text `#E3A83E` / soft `#2B2416` |
| State — Hecho | text `#156E42` / soft `#E1F3E9` | text `#3FBE84` / soft `#16261F` |

`--accent` and `--accent-solid-bg` are split deliberately: dark mode needs a
*light* accent for text read against a dark board, but a *darker* accent
under white button text — one token can't satisfy both directions, so
`css/styles.css` (`:root`) carries both.

## Type

- Display: **Archivo** (700/800) — headlines, ticket titles.
- Body/UI: **Public Sans** (400/500/600) — everything else.
- Data/metadata: **JetBrains Mono** (400/500/600) — ticket IDs, dates,
  skill-level tags, tab labels. Reserved for data and measurement, never used
  as a "technical" costume.

Chosen to avoid the overused-face list (Inter as a body voice, Space
Grotesk/Mono, IBM Plex, Fraunces/Playfair-family) the `impeccable detect`
scan and the skill's own calibration both flag.

## Section order

Inicio → Proyectos (board) → Stack → Sobre mí → Contacto. Proof-of-work
comes right after the hero, before the personal narrative — a 2026-09-19
review pushed this: recruiters were hitting a wall of biographical text
before reaching anything that demonstrates skill.

## Components

- **`.card--case-study`** (the `done` project cards, aizlo/Chunkiflunki) —
  `.card__preview` (a real screenshot, `object-fit: cover`, bleeds to the
  card's rounded top corners via `overflow: hidden` on `.card`) then
  `.card__body` with three labelled `.card__meta-field`s (Objetivo / Qué
  construí / Reto técnico) before the usual tags and links. `doing`/`backlog`
  tickets keep the older plain `.card__desc` — they're not shipped work, so
  they don't earn the full case-study treatment.
- **`.tech-row`** — a flat row of `.tag`s (no groups, no levels) for
  technologies actually used in shipped projects, shown above the full
  DAW/ASIX breakdown in Stack so "proven in production" outranks "studied."
- **`.timeline`** — a compact chronological list (accent dot + bold role +
  mono date + description), reused for three different things: Formación,
  Experiencia (both static content in `index.html`), and live GitHub
  activity (`js/main.js` → `initGithubActivity`, fetched client-side from
  the public GitHub API, no backend). Formación's dots switch to
  `--state-done` / `--state-doing` to reuse the same honesty color code as
  the rest of the site; Experiencia and GitHub activity keep the neutral
  accent dot since they're not "status" in that sense.

- **`.ticket`** — the detail-panel form (Sobre mí, Contacto): id + status
  pill header, `<dl>` fields, italic note.
- **`.board` / `.card`** — the projects Kanban: three `.board__col`s
  (Backlog / En curso / Hecho·Desplegado), each holding `.card` tickets
  rendered from `js/content.js`. `.card--featured` (aizlo) gets an accent
  border + `--shadow-lift`.
- **`.pill` / `.dot`** — the shared status vocabulary (backlog/doing/done),
  used identically for skills and projects so the color code means one thing
  everywhere on the page.
- **`.tabbar`** — anchor nav styled as board tabs, scroll-spied via
  `IntersectionObserver` in `js/main.js`.
- **Sticky topbar** — `backdrop-filter: blur(10px)` frosted glass, a
  functional effect (depth-on-scroll for an app-like chrome), not decoration.

## Motion

One authored family: `.reveal` (opacity 0 → 1, translateY 14px → 0,
`cubic-bezier(0.16,1,0.3,1)`, staggered by `IntersectionObserver`), plus a
card hover lift (`translateY(-3px)` + shadow swap). Fully disabled under
`prefers-reduced-motion: reduce`.

## Known intentional exception

`impeccable detect` flags `.ticket`/`.card`'s 1px border + soft wide shadow
as the "hairline border + wide shadow" generated-UI tell (advisory). Kept
deliberately: the world is a physical paper ticket lifted off a board, which
in reality has both a crisp paper edge and a cast shadow — the combination is
the metaphor, not a lazy default. Revisit if the world itself changes.

## i18n

Spanish is the base language, written directly as element content; English
lives in each element's `data-en` attribute. `js/main.js` toggles between
them and remembers the choice in `localStorage`. Content rendered by
`js/content.js` (skills, project tickets) follows the same `es`/`en` field
pattern in its data objects.
