import { defineConfig } from 'astro/config';

// If you deploy to GitHub Pages on a *project* repo (e.g. github.com/you/opals-lab-website),
// GitHub serves the site at https://you.github.io/opals-lab-website/ — set `base` below to
// '/opals-lab-website' (your repo name) so internal links and assets resolve correctly.
// If you deploy to Netlify, a custom domain, or a GitHub *user/org* page repo
// (named you.github.io), leave base as '/'.
export default defineConfig({
  site: 'https://opalslab.org',
  base: '/',
  trailingSlash: 'never',
});
