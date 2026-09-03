/**
 * Service slugs that public/.htaccess permanently 301s onto a flat product URL,
 * mapped to the URL they land on.
 *
 * Single source for three consumers that were previously free to disagree:
 *   1. entry-server.tsx — excludes these from allRoutes(), so they are neither
 *      prerendered nor listed in sitemap.xml. A sitemap that advertises
 *      redirects erodes the trust Google places in it; ten of them were live
 *      in September 2026, counted under "Page with redirect".
 *   2. Services.tsx — links straight to the flat URL. Linking /services/<slug>
 *      instead costs Googlebot a 301 hop on each one, which is the same
 *      crawl-budget leak moved out of the sitemap and into the markup.
 *   3. src/test/redirects.test.ts — asserts this map still matches .htaccess,
 *      which no other part of the JS toolchain reads.
 *
 * Keep in sync with the "Legacy /services/<slug> → flat product URL" block in
 * public/.htaccess. The test fails if they drift.
 */
export const SERVICE_REDIRECTS: Record<string, string> = {
  "banner-printing": "/banners/",
  "bill-books": "/bill-books/",
  "brochure-printing": "/brochures/",
  catalogues: "/catalogues/",
  "id-cards": "/pvc-id-cards/",
  letterheads: "/letterheads/",
  "rubber-stamps": "/rubber-stamps/",
  "stickers-labels": "/stickers/",
  "visiting-cards": "/visiting-cards/",
  "wedding-invitations": "/wedding-cards/",
};

export const REDIRECTED_SERVICE_SLUGS = new Set(Object.keys(SERVICE_REDIRECTS));

/**
 * The canonical, non-redirecting URL for a service slug: the flat product URL
 * when one exists, otherwise the /services/ route.
 */
export function serviceUrl(slug: string): string {
  return SERVICE_REDIRECTS[slug] ?? `/services/${slug}/`;
}
