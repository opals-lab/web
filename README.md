# OPALS Lab Website

Built with [Astro](https://astro.build). Design follows `../Logos/OPALS Lab Brand Style Guide.md` — color-block layout inspired by the OPALS logo, brand fonts self-hosted in `public/fonts/`.

## Pages

- `/` — Home
- `/our-mission` — Our Mission
- `/our-team` — Our Team
- `/current-projects` — Current Projects
- `/research-products` — Research Products
- `/work-with-us` — Want to Work With Us? (student recruitment)

Several pages have **placeholder content marked `EDIT ME`** in the source (team bio, current projects, publications) — search the `src/pages/` files for that string before you go live. See `CONTENT-TODO.md` for the full list.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # preview the production build locally
```

## Pushing to GitHub or Bitbucket

This folder is already a standalone git repo (see the parent directory's notes on how it was set up). To push it to a new remote:

```bash
# GitHub (using the gh CLI)
gh repo create opals-lab-website --public --source=. --remote=origin --push

# — or manually, after creating an empty repo on GitHub/Bitbucket —
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## Deploying

Two ready-made options — pick one (or set up both and just use whichever you prefer):

### Option A — GitHub Pages (free, no external account needed)

1. Push this repo to GitHub (see above).
2. In the repo settings → **Pages**, set the source to **GitHub Actions**. The workflow at `.github/workflows/deploy.yml` will build and deploy automatically on every push to `main`.
3. **Important:** if this is a *project* page (i.e. your repo isn't named `<your-github-username>.github.io`), open `astro.config.mjs` and set:
   ```js
   base: '/your-repo-name',
   ```
   before pushing, or internal links and asset paths will 404. If you use a custom domain or a `<username>.github.io` repo, leave `base: '/'` as-is.
4. Your site will be live at `https://<username>.github.io/<repo-name>/` (or your custom domain, once configured in repo Settings → Pages).

### Option B — Netlify

1. Push this repo to GitHub or Bitbucket.
2. In Netlify: **Add new site → Import an existing project**, pick this repo. `netlify.toml` already sets the build command (`npm run build`) and publish directory (`dist`) — Netlify should auto-detect everything.
3. Netlify deploys automatically on every push once connected. Add a custom domain under Site settings → Domain management, if wanted.

Netlify is generally the lower-friction option (no `base` path gotcha, free custom-domain HTTPS, deploy previews on every PR). GitHub Pages is a good option if you'd rather not create a Netlify account.

## Updating brand assets

- Logos: `public/images/`
- Fonts: `public/fonts/` (already converted to `.woff2`; source `.ttf` files live in `../../Lab Policies/.../OPALS Lab IDP Forms/_source/fonts/` if you ever need to re-derive a weight)
- Colors/type scale: `src/styles/global.css` (`:root` custom properties at the top)

If the brand changes, update the style guide first, then bring this file in line with it.
