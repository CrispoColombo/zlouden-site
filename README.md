# zlouden.com

Personal portfolio for Zach Louden. Built with [Astro](https://astro.build) + Tailwind CSS, deployed as a static site on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # preview the built site
```

## Structure

```
src/
├── data/projects.ts          # Project list (edit here to add/reorder)
├── layouts/
│   ├── Layout.astro          # Global shell (head, header, footer)
│   └── CaseStudyLayout.astro # Wrapper for project detail pages
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── ProjectCard.astro
│   └── CaseStudyNav.astro    # "Next project" link at bottom of case studies
├── pages/
│   ├── index.astro           # Work (homepage)
│   ├── about.astro
│   ├── resume.astro
│   ├── contact.astro
│   └── projects/
│       ├── sscloud.astro
│       ├── richmond.astro
│       ├── fedex.astro
│       └── nuna.astro
└── styles/global.css         # Tailwind + theme tokens

public/
├── _headers                  # Cloudflare Pages cache + security headers
└── images/
    ├── thumbs/               # Homepage thumbnails
    ├── sscloud/
    ├── richmond/
    ├── fedex/
    └── nuna/
```

## Adding a new project

1. Drop images into `public/images/thumbs/` (and a new detail folder if needed).
2. Add an entry to `src/data/projects.ts`. Set `href` and `status: "live"` if you have a case study, otherwise leave both off.
3. If live: create `src/pages/projects/<slug>.astro` using `CaseStudyLayout` as a template.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Cloudflare gives you a `*.pages.dev` preview URL automatically.

## Moving the domain from Squarespace

1. In the Cloudflare dashboard: **Add a site → `zlouden.com`**. Cloudflare will auto-detect existing DNS records.
2. Cloudflare gives you two nameservers — copy them.
3. In Squarespace: **Settings → Domains → zlouden.com → DNS / Nameservers → Use custom nameservers**. Paste the Cloudflare ones. Save.
4. Wait for propagation (usually <1 hr, up to 24).
5. In Cloudflare Pages: **Custom domains → Set up → zlouden.com**. Cloudflare adds the CNAME automatically.
6. (Optional later) Transfer the domain registration from Squarespace to Cloudflare to drop the Squarespace bill entirely — ~$10/year at Cloudflare, no markup.

## Theme

Edit CSS custom properties in `src/styles/global.css`:

- `--color-ink` — primary text
- `--color-paper` — background
- `--color-muted` — secondary text
- `--color-line` — borders and dividers
- `--color-accent` — hover state
- `--font-serif` — headings (Fraunces)
- `--font-sans` — body (Inter)
