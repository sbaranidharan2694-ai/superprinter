# Super Printers & Wedding Cards — superprinters.net

Marketing site for Super Printers, a printing press in Pallavaram, Chennai
operating since 1990. Wedding cards, visiting cards, brochures, banners,
bill books, offset and digital printing.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router (client) + custom SSG prerender (`scripts/prerender.mjs`)
- React Helmet Async for per-page head tags
- GA4 (deferred to first interaction)

## Local development

```sh
npm install
npm run dev
```

## Build + prerender

```sh
npm run build       # vite build (client + server bundles)
npm run prerender   # emits static HTML per route from STATIC_ROUTES + dynamic
```

The list of prerendered routes lives in `src/entry-server.tsx`. Suburb
landing pages (`/printing-press-*`) are derived from `AREA_PAGE_SLUGS`
exported by `src/pages/AreaPrintingPage.tsx`, so adding a new suburb
requires only one edit (the slug + intro block).

## SEO architecture

- `index.html` — sitewide `LocalBusiness`, `Organization`, `WebSite` JSON-LD
- `src/components/SEOHead.tsx` — per-page title/description/canonical/OG/Twitter, hreflang en-IN + x-default, BreadcrumbList helper
- `src/data/seoSchemas.ts` — Product, Service, FAQ, HowTo, Review, Speakable schema builders
- `public/sitemap.xml` — primary + product + suburb + blog URLs with image sitemap entries for hero pages
- `public/robots.txt` — explicit allow-list for major AI training/search bots
- `public/llms.txt` — authoritative summary for LLM grounding

## Deployment

The built `dist/` is published to the static host. Apache `.htaccess` strips
trailing slashes; `AreaPrintingPage` strips both leading and trailing
slashes defensively so client-side navigation matches either form.
