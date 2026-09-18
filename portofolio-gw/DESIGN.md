---
version: alpha
name: Kelvin Leandi - Portfolio
description: A warm daylight portfolio. Paper-toned surfaces, soft corners and real photographs make the page feel like a person rather than a product. One amber accent marks what matters. Nothing shouts. Light mode only, on purpose.
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
  micro:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: "0px"
rounded:
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
  block: 56px
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
    padding: 12px 14px
  tab-item-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.caption}"
    rounded: "{rounded.md}"
    padding: 12px 14px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: 14px 24px
  text-link:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.body}"
  text-link-hover:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.body}"
  doc-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: 20px
  row-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.lg}"
    padding: 20px
  tag-chip:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.body}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  skill-row:
    backgroundColor: "{colors.surface-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    padding: 14px 16px
  badge-soft:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-hover}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
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
  ambient-backdrop:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.micro}"
  caption-text:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
  hairline:
    backgroundColor: "{colors.line}"
    height: 1px
  music-dock:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.micro}"
    rounded: "{rounded.lg}"
    padding: 16px
---

## Overview

This is the personal site of a Computer Science student applying for AI/ML internships. The reader is a recruiter or an engineer who gives a link under ten seconds. The site has to make the strongest proof visible fast, and it has to make him look like someone pleasant to work with.

The direction is **warm daylight**. Paper-toned backgrounds (`{colors.canvas}`), white cards, soft corners, and real photographs shown bright and clean. There is no dark mode, no glass, no glow. The page should read the way a friendly, organised person would hand you their work: plainly, with the good stuff on top.

The tone matters as much as the palette. This is a student. **Confident, not boastful.** Facts stated plainly beat adjectives. "3rd place, Samsung Solve For Tomorrow 2025" is stronger than "passionate award-winning innovator", and it is the kind of line a humble person can say out loud without flinching.

**Key characteristics**

- **Warm paper, not stark white.** `{colors.canvas}` is a warm off-white; pure white is reserved for cards so they lift off the page.
- **One accent, warm.** Amber (`{colors.primary}`) marks the action, the active tab, and the emphasis half of a headline. Nothing else is coloured.
- **Soft corners, soft shadows.** `{rounded.md}` to `{rounded.xl}`, and warm-tinted shadows rather than grey ones. Hard edges and black shadows read corporate.
- **Content photographs are shown, not styled.** Bright, natural, `{rounded.lg}`, with a caption. The one exception is `{component.ambient-backdrop}`, which is blurred so hard it becomes texture.
- **The shell is a tab editor.** Five tabs (Bio, Journey, Projects, Skills, Achievements) in a persistent rail, each deep-linkable by hash.
- **Evidence lives in a gallery.** Every project, journey entry and award opens `{component.gallery-modal}` with its photographs, title, one-line description and date.
- **Plain language, and no explaining the interface.** No jargon, no superlatives, no em-dashes, and no helper text telling the reader which key to press.
- **Light mode only.** This is a deliberate decision, not an omission: the photographs are the colour on this page and a dark shell would fight them.

## Colors

- **Canvas** (`{colors.canvas}` - #FAF8F4): Warm paper. The page background everywhere.
- **Surface** (`{colors.surface}` - #FFFFFF): Cards, the gallery panel, the active tab. Pure white so cards read as raised without needing a heavy border.
- **Surface Tint** (`{colors.surface-tint}` - #F3EEE5): The soft sand used for the rail, skill rows and chips. Warmer and quieter than the canvas.
- **Line** (`{colors.line}` - #E6E0D5): The single border tone. 1px, on cards and chips.
- **Ink** (`{colors.ink}` - #1F1B16): Headings and primary labels. A warm near-black, never `#000`.
- **Body** (`{colors.body}` - #57514A): Paragraphs, descriptions, tab labels. 7.4:1 on canvas, comfortable at 17px.
- **Muted** (`{colors.muted}` - #6E665C): Captions, timestamps, photo counts. 5.3:1 on canvas, above WCAG AA.
- **Primary** (`{colors.primary}` - #B45309): The single accent. The CV button, links, the active tab, the emphasis phrase in a headline. 4.7:1 on canvas, so it is safe as link text at body size.
- **Primary Hover** (`{colors.primary-hover}` - #8F4208): One step deeper for hover, and the text tone inside a `{component.badge-soft}`.
- **Primary Soft** (`{colors.primary-soft}` - #FBEAD0): The warm tint behind the quiet amber moments (gallery close control hover, and the one `{component.badge-soft}` per panel). Never used as a section background.
- **On Primary** (`{colors.on-primary}` - #FFFFFF): Text on amber fills. 5.0:1, passes AA.
- **Scrim** (`{colors.scrim}` - #1A1512): The warm dark used only inside `{component.gallery-overlay}`.
- **On Photo** (`{colors.on-photo}` - #FFFFFF): Text on a photographic scrim.

## Typography

One family, four weights. **Plus Jakarta Sans** is friendly, slightly rounded, and made by an Indonesian foundry, which suits a portfolio that is proud of where it comes from without making a speech about it. It is loaded from Google Fonts in `index.html`.

| Token | Size | Weight | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 72px | 700 | 1.05 | -2px | The greeting on the Bio tab, from `lg` up |
| `{typography.display-lg}` | 44px | 700 | 1.10 | -1.2px | Tab panel headlines, from `sm` up |
| `{typography.display-md}` | 30px | 600 | 1.20 | -0.6px | Gallery modal titles, the lead achievement title |
| `{typography.title}` | 20px | 600 | 1.35 | -0.2px | Card and row titles |
| `{typography.lead}` | 20px | 400 | 1.60 | -0.1px | The one supporting line under the greeting |
| `{typography.body}` | 17px | 400 | 1.65 | -0.1px | Default paragraph |
| `{typography.caption}` | 14px | 400 | 1.50 | 0px | Descriptions, tab labels |
| `{typography.label}` | 12px | 600 | 1.20 | 0.6px | Small uppercase labels |
| `{typography.micro}` | 12px | 400 | 1.40 | 0px | Photo captions, photo counts, fine print |

**Rules**

- Body is 17px. It stays 17px on mobile; do not shrink it to fit.
- Weight 700 is for headlines only. Body emphasis uses 600. There is no 800 or 900 in this system.
- Line height on body is generous (1.65). Tight leading plus a warm background starts to feel cramped.
- Sentence case for headlines. All-caps is limited to `{typography.label}` and `{typography.micro}` labels, and no more than one per panel.
- These nine tokens are the whole scale (they are defined in `tailwind.config.js`). If a size is needed that is not here, the system changes first and the code follows.

## Layout

- **Base unit:** Tailwind's default 4px scale. Structure snaps to 4 / 8 / 12 / 16 / 24 / 40 / 64, and `{spacing.block}` (56px) is the gap above a new block inside a panel.
- **Shell and tabs.** Desktop (>=1024px): a 240px rail on the left holding the wordmark, the five tab buttons and the social icons; the panel fills the rest. Below 1024px: a 56px top bar with the wordmark and socials, plus a fixed bottom tab bar. The panel scrolls; the shell does not.
- **The five tabs, in this order:** Bio, Journey, Projects, Skills, Achievements. Bio opens by default.
- **Bio is the front door.** It holds the portrait, the greeting, one positioning line, the CV action, and **three highlight rows** (GestiTalk, the Samsung award, the tutoring role) that jump to the tab that owns the detail. The proof must be visible without leaving the first tab.
- **Tabs are routed.** Each tab owns a hash (`#bio`, `#journey`, `#projects`, `#skills`, `#achievements`). Loading a URL with a hash lands on that tab, and the hash updates on every switch, so any tab can be pasted into a chat.
- **Content width:** prose locks at 56 characters; panel content locks at 1080px; the shell at 1440px.
- **Viewport:** the shell uses `min-h-[100dvh]` and, on desktop, `h-[calc(100dvh-2.5rem)]`, never `100vh`, so mobile browser chrome cannot jump the layout.
- **Mobile:** one column, bottom tab bar with icon plus label. Nothing important may live only in a hover state. The music dock is desktop only.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow, 1px `{colors.line}` | cards and rows at rest, skill rows, chips |
| Lift | `0 1px 2px rgba(31,27,22,0.04)`, `0 6px 16px rgba(31,27,22,0.06)` | card, row and doc-item hover, the active tab |
| Float | `0 2px 6px rgba(31,27,22,0.06)`, `0 20px 48px rgba(31,27,22,0.12)` | gallery panel, music dock |

**Shadow philosophy.** Shadows are **warm-tinted** (`rgba(31,27,22,...)`), never neutral grey or black; a grey shadow on a warm page reads as dirt. Depth is mostly carried by the surface change (canvas to white) and the 1px line. Shadow is reserved for hover and for the two genuinely floating elements: the gallery panel and the music dock.

## Shapes

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `{rounded.md}` | 12px | `rounded-[12px]` | tab items, skill rows, gallery thumbnails |
| `{rounded.lg}` | 18px | `rounded-[18px]` | cards, rows, photographs, music dock |
| `{rounded.xl}` | 24px | `rounded-[24px]` | gallery panel, the desktop shell |
| `{rounded.pill}` | 9999px | `rounded-full` | buttons, chips, the play control |

**Image geometry.** Portrait at the top of Bio, `{rounded.lg}`. Card and gallery imagery at 16:10 and 16:9, `{rounded.lg}` and `{rounded.md}`. There is no shared image component: every image sits in a fixed-aspect wrapper with `object-cover`, `loading="lazy"` and `decoding="async"`, except the portrait and the backdrop, which load eagerly because they are above the fold. No component applies its own filter.

## Motion

| Token | Duration | Easing | Use |
|---|---|---|---|
| `motion.enter` | 400ms | `cubic-bezier(0.16, 1, 0.3, 1)` | panel switch, gallery entry |
| `motion.hover` | 180ms | `ease-out` | hover, focus, tab changes |
| `motion.photo` | 300ms | `ease-out` | image hover scale, thumbnail promote |

- Panel switches crossfade with a 12px rise, once per switch. No slide, no horizontal push.
- The Bio greeting and its supporting line fade up 10px in 500ms on mount. They are **plain text in the first paint**: no typewriter, so the name is in the DOM and in the page title immediately.
- Hover lift is 2px at most, and image scale is 1.03 at most. Playful overshoot is off-brand here; this page is calm.
- The gallery fades in and rises 16px. It never scales open.
- **The ambient backdrop rotates every 5 seconds** on a 1200ms crossfade. It pauses when the document is hidden (`visibilitychange`) and, under `prefers-reduced-motion`, it never starts and the first photograph stays as a still frame.
- **The shell never becomes translucent.** The rail and the panel sit at 100% opacity above the backdrop. That single rule is what lets the rotation run without ever costing readability.
- No photograph is ever placed behind text *inside* the panel. The backdrop is texture; content imagery lives in cards and galleries.
- Respect `prefers-reduced-motion`: `MotionConfig reducedMotion="user"` plus the global block in `index.css` make every transition instant and stop the backdrop.

## Components

**`ambient-backdrop`** - the rotating photograph behind the whole shell, and the only piece of continuous motion on the site. Sixteen photographs, crossfading every 5 seconds.

- Full viewport, `position: fixed`, `z-index: 0`, never scrolls, `aria-hidden`, `pointer-events-none`.
- Treatment: `blur(18px) saturate(0.9)`, then a `{colors.canvas}` wash at 55%. Blurred this hard it reads as warm texture rather than as a picture competing for attention, which is the entire point.
- **Serve a downscaled copy.** `src/assets/backdrop/` holds 640px copies; at this blur radius they are indistinguishable from the originals at a fraction of the weight. Keep new entries at 640px wide.
- Only the current frame and the outgoing one are mounted. There is no preload-ahead: the next photograph is fetched when the crossfade starts, and the frame fades in on its own `onLoad`.
- Pauses on `visibilitychange`; never starts under `prefers-reduced-motion`.
- The shell sits above it at 100% opacity. See Elevation & Depth: no glass.

**`sidebar-rail` / `tab-bar`** - the shell's navigation. Desktop: a 240px rail on `{colors.surface-tint}` with a 1px line on its right edge; wordmark at the top, five `{component.tab-item}` buttons in the middle, social icons and the music dock pinned to the bottom. Mobile: a 56px top bar with the wordmark and socials, plus a fixed bottom bar with the same five tabs at icon plus label, padded for `env(safe-area-inset-bottom)`. Active tab is `{component.tab-item-active}`: white fill, amber label, subtle lift, `aria-current="page"`. Panel switches crossfade in 400ms. The wordmark is plain text: `KELVIN.` No dot, no badge.

**`button-primary`** - the only high-emphasis action in a viewport. Amber fill, white label, pill radius. On this site that is Download CV, and nothing else. Hover steps to `{component.button-primary-hover}`.

**`text-link`** - amber, underlined on hover, using `{component.text-link-hover}` for the hover tone. Used for LinkedIn, GitHub, project live links and the music credit.

**`doc-item`** - the clickable documentation entry, used for projects and the secondary achievements. White fill, `{rounded.lg}`, 1px line, a treated image at the top, title at `{typography.title}`, one line at `{typography.caption}`, optional `{component.tag-chip}` stack labels, and a photo-count indicator ("4 photos") in `{colors.muted}`. Hover lifts it 2px with the lift shadow and brightens the indicator to `{colors.primary}`. **The whole card is one button**, never a card containing a small separate link. Focus ring: 2px `{colors.primary}` outline at 2px offset.

**`row-item`** - the same idea as `doc-item` without the photograph: used for the Bio highlight rows and the Journey timeline. Image thumbnail at 74px on `sm` and up, label at `{typography.micro}`, title at `{typography.title}`, one line at `{typography.caption}`, and a photo count or an arrow at the end. The whole row is one button. A row never carries two actions.

**`gallery-modal`** - the documentation popup, opened by activating any `{component.doc-item}` or `{component.row-item}`. This is where a claim becomes evidence, so it carries the most polish on the site.

- **Overlay:** `{component.gallery-overlay}` at 55% opacity with `backdrop-filter: blur(6px)`. Light enough that the reader keeps their place in the tab behind it.
- **Panel:** `{component.gallery-panel}`, centred, max-width 1040px, max-height 88vh, 32px padding, `{rounded.xl}`, float shadow. White, because the photographs are the only colourful thing in it.
- **Header:** date or event at `{typography.label}` in `{colors.primary}`, title at `{typography.display-md}`, one line of description at `{typography.body}` in `{colors.body}`, close control pinned top-right.
- **Body:** one hero photograph at 16:9, then a three-column grid of all photographs, each `{rounded.md}`. Selecting a thumbnail promotes it to hero and marks it with a 2px amber border. The hero caption sits under the image at `{typography.micro}`.
- **Entry:** 400ms fade plus a 16px rise on `motion.enter`. Exit is a 200ms fade with no movement.
- **Behaviour:** `Esc` closes. Clicking the overlay closes; clicking the panel does not. `Left` and `Right` move between photographs. Focus is trapped in the panel while open and returns to the triggering element on close. Body scroll is locked while open.
- **Mobile:** a full-screen sheet (`h-full w-full`, no radius) with the same close control, the same thumbnail grid, and no swipe gesture. Nothing is hidden behind a gesture the reader cannot see.
- **No helper text anywhere in here.** A control is either found, or it is the wrong control.

**`badge-soft`** - the amber-tinted label used for a single quiet highlight per panel. `{colors.primary-soft}` fill, `{colors.primary-hover}` text. Never more than one per panel. (On the shipped tabs the amber moment is carried by the active tab and the CV button; the tint itself is used behind the gallery close control on hover.)

**`tag-chip`** - surface-tint fill, `{rounded.pill}`, `{typography.micro}` in `{colors.body}`. For a project's stack, rendered from `tech` in `src/data/projects.js`. Not amber; amber is for action and proof.

**`skill-row`** - surface-tint fill at `{rounded.md}`, skill name at `{typography.title}` on the left, level label at `{typography.caption}` in `{colors.body}` on the right, description below at `{typography.micro}`. Grouped under a `{typography.label}` heading. **No progress bars, no percentages.** The whole app uses one ordered scale: Familiar, Intermediate, Proficient, Advanced.

**`caption-text`** - `{typography.micro}` in `{colors.muted}`, under an image or a list row. A caption names what is in the photograph; it is never a decoration.

**`hairline`** - the 1px `{colors.line}` rule that separates the rail from the panel and the mobile bars from the content. Structure only: it never decorates, and it is never stacked (no rule above *and* below a row).

**`music-dock`** - desktop only, at the foot of the rail. Play/pause, track title, credit link, a seek bar and a volume bar (both real `input[type=range]`, both keyboard reachable). The player state is driven by the audio element's own events, so the button can never claim to be playing something that is silent.

## Do's and Don'ts

**Do**

- Write like you would talk to the person reading it. Plain sentences, no superlatives.
- Lead with proof on the Bio tab. GestiTalk and the Samsung placement must be reachable without leaving the first tab.
- Show photographs bright and natural. The work is the interesting part, not the filter.
- Keep one amber action per viewport.
- Use warm-tinted shadows. `rgba(31,27,22,...)`, never grey.
- Write real numbers and real names: "3rd place, Samsung Solve For Tomorrow 2025", not "award-winning innovator".
- Put a live link on every project that has one, and a stack chip row on every project.
- Keep the hash in sync with the active tab so `#achievements` can be pasted into a chat.
- Keep the copy in the data files (`src/data/`) and the layout in the components.
- Run `npm run lint` and `npm run build` before calling a change done. Both must be clean.

**Don't**

- Don't bring back the blue-to-indigo gradients, the blurred colour blobs behind the portrait, or the white glass panels. That combination is the visual signature of a generated page.
- Don't let the shell go translucent. The rail and the panel stay at 100% opacity above the ambient backdrop; a glass card floating on a rotating photograph is exactly what made the previous version tiring to read.
- Don't let the backdrop become legible. If you can tell what is happening in the photograph behind the shell, the blur or the wash is too weak.
- Don't use pure black text or grey shadows. Both look wrong on warm paper.
- Don't hide proof behind a second click when it can sit on the surface.
- Don't use em-dashes or en-dashes in visible copy. Date ranges are written as "Since 2024" or "2021-2024".
- Don't write copy that explains the interface. No "Esc to close", no "click to view", no "swipe to see more". A control is either found, or it is the wrong control.
- Don't write copy about the design instead of the person. "Honest labels, no percentages." told the reader nothing and was removed; a subtitle may only restate scope or carry a fact.
- Don't rewrite the intro line into a job-title summary. It stays as he says it: "A human who learns and works to enjoy life."
- Don't use percentage skill bars, and don't mix two rating scales in one list.
- Don't let a gallery become a photo dump. Three to eight captioned photographs; thirty reads as an album, not as evidence.
- Don't use words like passionate, ninja, guru, or rockstar. Say what you did.
- Don't hand-roll SVG icons. The icon set is `lucide-react`, at 16-19px with the default stroke width. One family only.
- Don't add dark mode by accident. Light only is a decision; if it ever changes, it changes here first.
