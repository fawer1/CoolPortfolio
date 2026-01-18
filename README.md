# Furkan Smail | Portfolio

A sleek, animated portfolio built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Three.js. It features a GPU-accelerated background, smooth section-based storytelling, and polished motion design.

## Overview

This app presents content in focused "sections" (About, Projects) with steps you navigate by scroll, keyboard, or touch. A custom loading sequence reveals the brand and a shimmering "Portfolio" title, while the background runs a real-time shader for subtle movement.

## Features

- Section navigation: scroll, arrow keys, PageUp/PageDown, and touch swipes.
- Animated transitions using Framer Motion with route-safe mounts/unmounts.
- Custom loading screen with timed phases and brand reveal.
- Three.js shader background (`ColorBends`) with configurable colors and motion.
- Responsive 4x4 grid layout and modern styling via Tailwind CSS v4.
- Project/image galleries via `AboutGallery` with autoplay and controls.

## Tech Stack

- React 19 + TypeScript
- Vite (rolldown-vite) with `@vitejs/plugin-react` and React Compiler
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion for transitions and animation utils
- Three.js for the background shader
- ESLint 9 for linting

## Project Structure

```text
public/
src/
  App.tsx              # App shell, loader, background, and main grid
  index.css            # Tailwind import, font faces, loader animation CSS
  main.tsx             # React root
  components/
    BackgroundLayer.tsx  # Three.js shader background (ColorBends)
    LoadingScreen.tsx    # Brand loading sequence
    GlowingText.tsx      # Shiny gradient text effect
    ScrollSection.tsx    # Section/step navigation and transitions
    TextArea.tsx         # Animated text container
    MediaArea.tsx        # Animated media container
    AboutGallery.tsx     # Simple image gallery with autoplay
  data/
    sections.ts        # Content model: sections and steps
```

## Getting Started

### Prerequisites

- Node.js 18 or 20 recommended
- npm (or pnpm/yarn if preferred)

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Customization

- Content: edit sections and steps in [src/data/sections.ts](src/data/sections.ts). Add images under `src/assets/` and reference them in `sections.ts`.
- Background: tune `ColorBends` props in [src/App.tsx](src/App.tsx) – `rotation`, `speed`, `scale`, `frequency`, `warpStrength`, `mouseInfluence`, `parallax`, `noise`, and `colors`.
- Loader: adjust timings (`durationMs`, `inMs`, `outMs`, `gapMs`, `settleMs`) in [src/components/LoadingScreen.tsx](src/components/LoadingScreen.tsx) usage.
- Typography: font faces and classes live in [src/index.css](src/index.css).

## Deployment

This is a static site. After `npm run build`, deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Troubleshooting

- Dev server fails to start:
  - Ensure Node.js ≥ 18 is installed.
  - Remove `node_modules` and reinstall: `rm -rf node_modules` then `npm install` (PowerShell: `Remove-Item -Recurse -Force node_modules`).
  - If using a lockfile, delete it and reinstall.
- Blank screen / asset errors:
  - Check image paths in [src/data/sections.ts](src/data/sections.ts) and that files exist under `src/assets/`.
- Performance tweaks:
  - Reduce `noise`, `frequency`, or `warpStrength` for the shader in [src/App.tsx](src/App.tsx).

---

Title and branding set in [index.html](index.html). Favicon is served from `public/`.
