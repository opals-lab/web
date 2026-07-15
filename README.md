# OPALS Lab Website

The website for OPALS Lab (Opportunity, Place, and Learning in STEM), led by
Dr. Kelly L. Boles at the University of Tennessee, Knoxville.

Live at [opalslab.org](https://opalslab.org).

## Pages

- `/` — Home
- `/our-mission` — Our Mission
- `/our-team` — Our Team
- `/current-projects` — Current Projects
- `/research-products` — Research Products
- `/work-with-us` — Want to Work With Us? (prospective student info)

## Built with

[Astro](https://astro.build) — a static site, no backend or database. Deployed
via Netlify, which rebuilds and redeploys automatically on every push to `main`.

Design follows the OPALS Lab brand style guide — color-block layout inspired by
the logo, brand fonts self-hosted in `public/fonts/`.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # preview the production build locally
```

## Content

Most page content lives directly in the `.astro` files under `src/pages/`.
See `CONTENT-TODO.md` for a list of sections still waiting on real content
(e.g. the lab roster, publications).

## Updating brand assets

- Logos: `public/images/`
- Fonts: `public/fonts/` (`.woff2`)
- Colors/type scale: `src/styles/global.css` (`:root` custom properties)

## Contact

General inquiries: info@opalslab.org
