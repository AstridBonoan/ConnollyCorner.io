# Connolly's Corner — Website Demo

A premium, mobile-first restaurant website demo for **Connolly's Corner**, an Irish pub & restaurant in Maspeth, Queens.

## Live Demo

Once deployed via GitHub Pages: [https://astridbonoan.github.io/ConnollyCorner.io/](https://astridbonoan.github.io/ConnollyCorner.io/)

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- GitHub Actions → GitHub Pages

## Features

- Full-screen hero with CTAs
- About section with Irish pub story
- Menu preview grid (5 categories)
- Masonry-style atmosphere gallery
- Reservation form (demo UI, no backend)
- Location, hours, and embedded Google Map
- Sticky blur navbar with mobile hamburger menu
- Scroll-triggered fade/slide animations
- Accessibility-friendly contrast and skip link

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys to GitHub Pages.

**GitHub Pages settings required:**
1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `gh-pages` / `/ (root)`
4. Pushes to `main` trigger the GitHub Actions workflow, which builds and publishes to `gh-pages`

> This is a demo redesign only — not connected to any backend or production systems.
