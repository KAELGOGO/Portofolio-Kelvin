# Kelvin Leandi - portfolio

Personal site: a single-page React app with five tabs (Bio, Journey, Projects, Skills,
Achievements), a photo gallery per entry, and a written design system.

Live: https://kelvin-leandi.vercel.app/

## Run it

```bash
npm install
npm run dev      # vite dev server
npm run lint     # eslint, must stay clean
npm run build    # production build into dist/
npm run preview  # serve the built output
```

## Layout

- `src/App.jsx` - the shell: tab routing by hash, gallery state, backdrop.
- `src/components/` - the shell pieces (rail, backdrop, gallery modal, music dock) and
  `panels/`, one file per tab.
- `src/data/` - all copy and content. Text edits happen here, not in the components.
- `src/assets/` - photographs. `assets/backdrop/` holds the downscaled copies used
  behind the shell; keep new entries there at 640px wide.
- `DESIGN.md` - the design system: tokens, component specs, and the copy rules.
  Change the system there first, then the code.

## Deploy

Vercel, root directory `portofolio-gw`, default Vite build. Pushing to `main` deploys.
