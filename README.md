# SPA Base Template

A production-ready single page app foundation built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Fork it, swap the content, and ship.

## Features

- **Hero** section with full-width image, headline, and CTA
- **Description** section with animated cards
- **Gallery** grid with hover effects
- **Contact** section with Facebook, WhatsApp, email, and phone links
- **12 color themes** — popular modern palettes with live switching
- **5 free Google fonts** — Inter, Roboto, Open Sans, Poppins, Lato
- **3 text sizes** — small, medium, large
- **Scroll animations** — subtle reveal on scroll (respects `prefers-reduced-motion`)
- **SEO optimized** — metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt
- **Fully responsive** — mobile-first layout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

Edit `src/lib/site-config.ts` to update brand name, copy, contact links, and images.

Theme, font, and text size preferences are saved in the browser via `localStorage`.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages & SEO routes
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Hero, Description, Gallery, Contact
│   ├── seo/          # Structured data
│   └── ui/           # Customization panel, scroll animations
├── context/          # Theme/font/size state
└── lib/              # Themes, fonts, site config
```

## License

MIT — use freely for personal and commercial projects.
