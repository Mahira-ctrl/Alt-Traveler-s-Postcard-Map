# Wayfarer's Passport — React + Node.js

A vintage-parchment travel atlas built with **React 18**, **Vite**, **vanilla CSS**,
**React Router**, and an **Express (Node.js)** server for production hosting.

## Stack
- **HTML** — `index.html` (Vite entry)
- **CSS** — `src/styles/styles.css` (single design-system stylesheet, no Tailwind)
- **JavaScript / React** — `src/**/*.jsx` (React 18 + React Router v6)
- **Node.js** — `server/server.js` (Express, serves `dist/` + SPA fallback + `/api/health`)

## Project structure
```
wayfarer-passport-react/
├── index.html
├── package.json
├── vite.config.js
├── server/
│   └── server.js              # Node.js Express server
├── src/
│   ├── main.jsx               # React entry
│   ├── App.jsx                # Routes
│   ├── assets/                # Images
│   ├── components/            # SiteHeader, SiteFooter, DestinationCard, PolaroidCard
│   ├── data/destinations.js   # All destination data
│   ├── pages/                 # Home, Destinations, Detail, Login, Signup
│   └── styles/styles.css      # Full design system
```

## Getting started

```bash
# 1. Install
npm install

# 2. Dev mode (Vite, hot reload, http://localhost:5173)
npm run dev

# 3. Production build
npm run build

# 4. Run the Node.js server (serves dist/ on http://localhost:3000)
npm start

# Or do both in one command:
npm run serve
```

## Pages
- `/` — Hero + featured polaroids (click to flip!)
- `/destinations` — Filterable atlas
- `/destinations/:slug` — Detail page with lore and wayfarer notes
- `/login` — Sign in (vintage two-column)
- `/signup` — Create passport

## Notes
- Polaroid cards use a 3D CSS `rotateY` flip — click any of them on the home page.
- The Express server has a `/api/health` endpoint as a starting point for adding
  a real backend later.
