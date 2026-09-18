---
version: alpha
name: Kelvin Leandi — Portfolio
description: A warm daylight portfolio. Paper-toned surfaces, soft corners and real photographs make the page feel like a person rather than a product. One amber accent marks what matters. Nothing shouts.
colors:
  canvas: "#FAF8F4"
  surface: "#FFFFFF"
  surface-tint: "#F3EEE5"
  line: "#E6E0D5"
  ink: "#1F1B16"
  body: "#57514A"
  muted: "#6E665C"
  primary: "#B45309"
  primary-hover: "#8F4208"
  primary-soft: "#FBEAD0"
  on-primary: "#FFFFFF"
  scrim: "#1A1512"
  on-photo: "#FFFFFF"
typography:
  display-xl:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-2px"
  display-lg:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: "-1.2px"
  display-md:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: "-0.6px"
  title:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.2px"
  lead:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: "-0.1px"
  body:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-0.1px"
  body-strong:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.50
    letterSpacing: "-0.1px"
  caption:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: "0px"
  label:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: "0.6px"
  button:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.0
    letterSpacing: "0px"
  micro:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  pill: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 96px
components:
  page-shell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
  sidebar-rail:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    width: 240px
  tab-item:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  tab-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 12px 16px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 26px
  text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  text-link-hover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.body}"
  hero-band:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: 96px
  tinted-band:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    rounded: "{rounded.none}"
    padding: 96px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: 24px
  doc-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: 20px
  badge-soft:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  tag-chip:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  skill-row:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    padding: 16px
  gallery-overlay:
    backgroundColor: "{colors.scrim}"
    textColor: "{colors.on-photo}"
    typography: "{typography.body}"
  gallery-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.display-md}"
    rounded: "{rounded.xl}"
    padding: 32px
  gallery-photo:
    backgroundColor: "{colors.scrim}"
    textColor: "{colors.on-photo}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 0px
  photo-frame:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"
    padding: 0px
  ambient-backdrop:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.micro}"
  caption-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
  divider:
    backgroundColor: "{colors.line}"
    height: 1px
  footer:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"
    padding: 64px
---

## Overview

This is the personal site of a Computer Science student applying for AI/ML internships. The reader is a recruiter or an engineer who gives a link under ten seconds. The site has to make the strongest proof visible fast, and it has to make him look like someone pleasant to work with.

The direction is **warm daylight**. Paper-toned backgrounds (`{colors.canvas}`), white cards, soft corners, and real photographs shown bright and clean. There is no dark mode, no glass, no glow. The page should read the way a friendly, organised person would hand you their work: plainly, with the good stuff on top.

The tone matters as much as the palette. This is a semester-five student. **Confident, not boastful.** Facts stated plainly beat adjectives. "Juara 3 Samsung Solve For Tomorrow 2025" is stronger than "passionate award-winning innovator", and it is the kind of line a humble person can say out loud without flinching.

**Key characteristics**
- **Warm paper, not stark white.** `{colors.canvas}` is a warm off-white; pure white is reserved for cards so they lift off the page.
- **One accent, warm.** Amber (`{colors.primary}`) marks the action, the active tab, and the emphasis half of a headline. Nothing else is coloured.
- **Soft corners, soft shadows.** `{rounded.md}` to `{rounded.xl}`, and warm-tinted shadows rather than grey ones. Hard edges and black shadows read corporate.
- **Content photographs are shown, not styled.** Bright, natural, `{rounded.lg}`, with a caption. The one exception is `{component.ambient-backdrop}`, which is blurred so hard it becomes texture.
- **The shell is a tab editor.** Five tabs (Bio, Journey, Project, Skills, Prestasi) in a persistent rail, each deep-linkable by hash.
- **Evidence lives in a gallery.** Every project, journey entry and award opens `{component.gallery-modal}` with its photographs, title, one-line description and date.
- **Plain language, and no explaining the interface.** No jargon, no superlatives, no em-dashes, and no helper text telling the reader which key to press.

## Colors

- **Canvas** (`{colors.canvas}` — #FAF8F4): Warm paper. The page background everywhere.
- **Surface** (`{colors.surface}` — #FFFFFF): Cards, the gallery panel, the active tab. Pure white so cards read as raised without needing a heavy border.
- **Surface Tint** (`{colors.surface-tint}` — #F3EEE5): The soft sand used for the rail, alternating bands, skill rows and chips. Warmer and quieter than the canvas.
- **Line** (`{colors.line}` — #E6E0D5): The single border tone. 1px, on cards, dividers and inputs.
- **Ink** (`{colors.ink}` — #1F1B16): Headings and primary labels. A warm near-black, never `#000`.
- **Body** (`{colors.body}` — #57514A): Paragraphs, descriptions, tab labels. 7.4:1 on canvas, comfortable at 17px.
- **Muted** (`{colors.muted}` — #6E665C): Captions, timestamps, photo counts. 5.3:1 on canvas, above WCAG AA.
- **Primary** (`{colors.primary}` — #B45309): The single accent. Buttons, links, active tab, the emphasis phrase in a headline. 4.7:1 on canvas, so it is safe as link text at body size.
- **Primary Hover** (`{colors.primary-hover}` — #8F4208): One step deeper for hover, and the text tone inside a `{component.badge-soft}`.
- **Primary Soft** (`{colors.primary-soft}` — #FBEAD0): The warm tint behind badges and quiet highlights. Never used as a section background.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): Text on amber fills. 5.0:1, passes AA.
- **Scrim** (`{colors.scrim}` — #1A1512): The warm dark used only inside `{component.gallery-overlay}` and behind text that sits directly on a photograph.
- **On Photo** (`{colors.on-photo}` — #FFFFFF): Text on a photographic scrim.

## Typography

One family, four weights. **Plus Jakarta Sans** is friendly, slightly rounded, and made by an Indonesian foundry, which suits a portfolio that is proud of where it comes from without making a speech about it.

| Token | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 1.05 | -2px | The greeting on the Bio tab |
| `{typography.display-lg}` | 44px | 700 | 1.10 | -1.2px | Tab panel headlines |
| `{typography.display-md}` | 30px | 600 | 1.20 | -0.6px | Gallery modal titles, feature titles |
| `{typography.title}` | 20px | 600 | 1.35 | -0.2px | Card titles, timeline entries |
| `{typography.lead}` | 20px | 400 | 1.60 | -0.1px | The one supporting line under a headline |
| `{typography.body}` | 17px | 400 | 1.65 | -0.1px | Default paragraph |
| `{typography.body-strong}` | 17px | 600 | 1.50 | -0.1px | Skill names, inline emphasis |
| `{typography.caption}` | 14px | 400 | 1.50 | 0px | Descriptions, chips, tab labels |
| `{typography.label}` | 12px | 600 | 1.20 | 0.6px | Badges and small uppercase labels |
| `{typography.button}` | 16px | 600 | 1.00 | 0px | Button labels |
| `{typography.micro}` | 12px | 400 | 1.40 | 0px | Photo captions, timestamps, fine print |

**Rules**
- Body is 17px. It stays 17px on mobile; do not shrink it to fit.
- Weight 700 is for headlines only. Body emphasis uses 600. There is no 800 or 900 in this system.
- Line height on body is generous (1.65). Tight leading plus a warm background starts to feel cramped.
- One headline per panel, maximum three lines at desktop.
- Sentence case for headlines. All-caps is limited to `{typography.label}` badges, and no more than one per panel.

## Layout

- **Base unit:** 8px. Structure snaps to 8 / 16 / 24 / 40 / 64 / 96.
- **Section padding:** `{spacing.section}` (96px) vertical at desktop, 56px on mobile.
- **Content width:** prose locks at 65 characters; panel content locks at 1120px; photographs may run up to 1280px.
- **Gutters:** 24px between cards, 16px on mobile.
- **Shell and tabs.** Desktop (≥1024px): a 240px rail on the left holding the wordmark, the five tab buttons and the social icons; the panel fills the rest. Below 1024px: a 56px top bar with the wordmark and socials, plus a fixed bottom tab bar. The panel scrolls; the shell does not.
- **The five tabs, in this order:** Bio · Journey · Project · Skills · Prestasi. Bio opens by default.
- **Bio is the front door.** It holds the portrait, the greeting, one positioning line, the CV action, and **two or three highlight cards** (GestiTalk, the Samsung award, the tutoring role) that jump to the tab that owns the detail. The proof must be visible without leaving the first tab.
- **Tabs are routed.** Each tab owns a hash (`#bio`, `#journey`, `#project`, `#skills`, `#prestasi`). Loading a URL with a hash lands on that tab, and the hash updates on every switch, so any tab can be pasted into a chat.
- **Alternating bands.** Panels alternate `{component.hero-band}` on canvas and `{component.tinted-band}` on surface tint to separate subjects without rules.
- **Mobile:** one column, 24px gutters, bottom tab bar with icon plus label. Nothing important may live only in a hover state.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow, 1px `{colors.line}` | cards at rest, skill rows, chips |
| Lift | `0 1px 2px rgba(31,27,22,0.04)`, `0 6px 16px rgba(31,27,22,0.06)` | card and doc-item hover |
| Float | `0 2px 6px rgba(31,27,22,0.06)`, `0 20px 48px rgba(31,27,22,0.12)` | gallery panel, music dock |

**Shadow philosophy.** Shadows are **warm-tinted** (`rgba(31,27,22,…)`), never neutral grey or black; a grey shadow on a warm page reads as dirt. Depth is mostly carried by the surface change (canvas to white) and the 1px line. Shadow is reserved for hover and for the two genuinely floating elements: the gallery panel and the music dock.

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | full-bleed bands |
| `{rounded.sm}` | 8px | small tags, thumbnails |
| `{rounded.md}` | 12px | tab items, skill rows, inputs |
| `{rounded.lg}` | 18px | cards, photographs, doc-items |
| `{rounded.xl}` | 24px | gallery panel, feature blocks |
| `{rounded.pill}` | 9999px | buttons, badges, chips |

**Photography geometry.** Portrait at the top of Bio, `{rounded.lg}`. Card and gallery imagery at 16:10 and 16:9, `{rounded.lg}` and `{rounded.md}`. Photographs are shown bright and natural: `saturate(1.02) contrast(1.02)` at most. No heavy filters. Text that must sit on a photograph gets a `{colors.scrim}` gradient at the edge it sits on, and nothing else.

## Motion

| Token | Duration | Easing | Use |
|---|---|---|---|
| `motion.enter` | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | panel switch, gallery entry, scroll reveal |
| `motion.hover` | 180ms | `ease-out` | hover, focus, tab changes |
| `motion.photo` | 300ms | `ease-out` | image hover scale, thumbnail promote |

- Panel switches crossfade with a 12px rise, once per switch. No slide, no horizontal push.
- Hover lift is 2px at most, and image scale is 1.03 at most. Playful overshoot is off-brand here; this page is calm.
- The gallery fades in and rises 16px. It never scales open.
- **The ambient backdrop rotates every 5 seconds** on a 1200ms crossfade. It pauses when the document is hidden (`visibilitychange`) and when the browser is busy, and under `prefers-reduced-motion` it settles on a single still frame.
- **The shell never becomes translucent.** The rail and the panel sit at 100% opacity above the backdrop. That single rule is what lets the rotation run without ever costing readability.
- No photograph is ever placed behind text *inside* the panel. The backdrop is texture; content imagery lives in cards and galleries.
- Respect `prefers-reduced-motion`: every transition becomes instant.

## Components

**`ambient-backdrop`** — the rotating photograph behind the whole shell, and the only piece of continuous motion on the site. Nineteen photographs, crossfading every 5 seconds.

- Full viewport, `position: fixed`, `z-index: 0`, never scrolls.
- Treatment: `blur(18px) saturate(0.9)`, then a `{colors.canvas}` wash at 55%. Blurred this hard it reads as warm texture rather than as a picture competing for attention, which is the entire point.
- **Serve a downscaled copy.** At this blur radius a 1280px JPEG is indistinguishable from the original, which is the difference between a 4 MB page and a 400 KB one.
- Only the current and the next frame live in the DOM. The next image is preloaded 300ms before the switch, never all nineteen at once.
- Pauses on `visibilitychange`; a single still frame under `prefers-reduced-motion`.
- The shell sits above it at 100% opacity. See Elevation & Depth: no glass.

**`sidebar-rail` / `tab-bar`** — the shell's navigation. Desktop: a 240px rail on `{colors.surface-tint}` with a 1px line on its right edge; wordmark at the top, five `{component.tab-item}` buttons in the middle, social icons pinned to the bottom. Mobile: a 56px top bar with the wordmark and socials, plus a fixed bottom bar with the same five tabs at icon plus label. Active tab is `{component.tab-item-active}`: white fill, amber label, subtle lift. Panel switches crossfade in 400ms.

**`button-primary`** — the only high-emphasis action in a viewport. Amber fill, white label, pill radius. Used for Download CV, Hubungi saya, and a project's live link. Hover steps to `{component.button-primary-hover}`.

**`button-secondary`** — white fill, ink label, 1px line, pill radius. For the second action in a pair.

**`text-link`** — amber, underlined on hover, using `{component.text-link-hover}` for the hover tone. Used for LinkedIn, GitHub and inline "lihat project" links.

**`hero-band`** — the top of the Bio tab. Greeting at `{typography.display-xl}` with the name in `{colors.primary}`, one line at `{typography.lead}`, one amber action, one text link, and a row of three plain facts (location, focus, availability) in `{typography.caption}`. No eyebrow chip, no statistic cards, no photo behind the text.

The greeting is time-aware (Selamat Pagi / Siang / Sore / Malam), and the name types itself in at 150ms per character with the supporting line following at 50ms. **The supporting line is his own sentence, not a job-title summary:**

> Seorang manusia yang belajar dan bekerja untuk menikmati hidup.

Never rewrite it into "Computer Science student at BINUS specialising in...". The plain sentence is the brand, and it is the reason the page reads as a person rather than a CV.

**`doc-item`** — the clickable documentation entry, used for projects, journey entries and awards. White fill, `{rounded.lg}`, 1px line, a treated image at the top, title at `{typography.title}`, one line at `{typography.caption}`, and a photo-count indicator ("4 foto") in `{colors.muted}`. Hover lifts it 2px with the lift shadow and brightens the indicator to `{colors.primary}`. **The whole card is one button**, never a card containing a small separate link. Focus ring: 2px `{colors.primary}` outline at 2px offset.

**`gallery-modal`** — the documentation popup, opened by activating any `{component.doc-item}`. This is where a claim becomes evidence, so it carries the most polish on the site.

- **Overlay:** `{component.gallery-overlay}` at 55% opacity with `backdrop-filter: blur(6px)`. Light enough that the reader keeps their place in the tab behind it.
- **Panel:** `{component.gallery-panel}`, centred, max-width 1040px, max-height 90vh, 32px padding, `{rounded.xl}`, float shadow. White, because the photographs are the only colourful thing in it.
- **Header:** date or event at `{typography.label}` in `{colors.primary}`, title at `{typography.display-md}`, one line of description at `{typography.body}` in `{colors.body}`, close control pinned top-right.
- **Body:** one hero photograph at 16:9, then a three-column grid of the remaining photographs, each `{rounded.md}` with a caption at `{typography.micro}` in `{colors.muted}`. Selecting a thumbnail promotes it to hero.
- **Entry:** 400ms fade plus a 16px rise on `motion.enter`. Exit is a 200ms fade with no movement.
- **Behaviour:** `Esc` closes. Clicking the overlay closes; clicking the panel does not. `←` and `→` move between photographs. Focus is trapped in the panel while open and returns to the triggering `{component.doc-item}` on close. Body scroll is locked.
- **Mobile:** a full-screen sheet, close control fixed top-right, photographs swipeable with a dot indicator, description clamped to two lines.

**`badge-soft`** — the amber-tinted label used for a single quiet highlight per panel (a level, a category, or "live"). `{colors.primary-soft}` fill, `{colors.primary-hover}` text. Never more than one per panel.

**`tag-chip`** — surface-tint fill, `{rounded.pill}`, `{typography.caption}` in `{colors.body}`. For tech stacks. Not amber; amber is for action and proof.

**`skill-row`** — surface-tint fill at `{rounded.md}`, skill name at `{typography.body-strong}` on the left, level label at `{typography.caption}` in `{colors.body}` on the right, description below. Grouped under a `{typography.label}` heading. **No progress bars, no percentages.**

**`photo-frame`** — the reusable image wrapper. Every photograph on the page goes through it, so the treatment stays identical. No component may apply its own filter.

**`divider`** — a 1px `{colors.line}` rule between list rows and above the footer. Never between panels.

**`footer`** — surface tint, 64px padding, contact links and the fine print at `{typography.micro}` in `{colors.muted}`.

## Do's and Don'ts

**Do**
- Write like you would talk to the person reading it. Plain sentences, no superlatives.
- Give every `{component.doc-item}` at least three real photographs and open them in `{component.gallery-modal}`. A project with no documentation does not get a gallery.
- Lead with proof on the Bio tab. GestiTalk and the Samsung placement must be reachable without leaving the first tab.
- Show photographs bright and natural. The work is the interesting part, not the filter.
- Keep one amber action per viewport.
- Use warm-tinted shadows. `rgba(31,27,22,…)`, never grey.
- Write real numbers and real names: "Juara 3 Samsung Solve For Tomorrow 2025", not "award-winning innovator".
- Put a live link on every project that has one.
- Keep the hash in sync with the active tab so `#prestasi` can be pasted into a chat.

**Don't**
- Don't bring back the blue-to-indigo gradients, the blurred colour blobs behind the portrait, or the white glass panels. That combination is the visual signature of a generated page.
- Don't let the shell go translucent. The rail and the panel stay at 100% opacity above the ambient backdrop; a glass card floating on a rotating photograph is exactly what made the previous version tiring to read.
- Don't let the backdrop become legible. If you can tell what is happening in the photograph behind the shell, the blur or the wash is too weak.
- Don't use pure black text or grey shadows. Both look wrong on warm paper.
- Don't stack more than two tinted bands in a row.
- Don't hide proof behind a second click when it can sit on the surface.
- Don't use em-dashes in visible copy.
- Don't write copy that explains the interface. No "Esc untuk menutup", no "klik untuk melihat", no "geser untuk lihat semua". A control is either found, or it is the wrong control.
- Don't rewrite the intro line into a job-title summary. It stays as he says it.
- Don't use percentage skill bars. They are unfalsifiable and every reader knows it.
- Don't let a gallery become a photo dump. Three to eight captioned photographs; thirty reads as an album, not as evidence.
- Don't use words like passionate, ninja, guru, atau rockstar. Say what you did.
