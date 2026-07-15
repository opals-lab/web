# Content to fill in before launch

The site is fully built and functional, but the following spots still use
placeholder content. Search for `EDIT ME` in `src/pages/` to find each one in
context.

## `src/pages/our-team.astro`
- The "Lab Members" section is built from the `memberGroups` array at the top of the
  file. Postdoctoral Researchers is currently commented out (no postdocs yet) —
  uncomment that block when one joins. Graduate Students and Undergraduate Students
  are live, each with an empty `members` array (shows a placeholder line instead) on
  purpose. Add real people as `{ name: '...', role: '...' }` — no bio needed, just a
  name and a short line like a program/year or research focus. Optional fields:
  `photo: '/images/team/file.jpg'` (drop the file in `public/images/team/`; without
  one, a teal initials badge is shown and the photo is grayscaled automatically) and
  `link: 'https://...'` (personal site, LinkedIn, etc — makes their name clickable).

## `src/pages/research-products.astro`
- All citations are templates — replace with real publications/talks/tools, or
  remove array entries/whole groups you don't need yet

## Everywhere
- Contact addresses: `klboles@opalslab.org` is used for direct outreach (the PI
  contact button on Our Team, and the "Contact Dr. Boles" button on Work With Us).
  `info@opalslab.org` is used for general inquiries (site footer). Update either if
  you'd rather route them differently.
- Favicon/logo images are already wired up from `Logos/PNG/` — replace files in
  `public/images/` if the logo changes later
