import { Helmet } from "react-helmet-async";
import { BUSINESS } from "@/data/business";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  robots?: string;
  schemaMarkup?: object | object[];
  breadcrumbs?: { name: string; url: string }[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = `${BUSINESS.siteUrl}/og-image.jpg`,
  ogType = "website",
  keywords = "printers in chennai, printing press chennai, printing services chennai, super printers pallavaram",
  // Includes the modern SERP-appearance directives Google honours since 2018
  // (max-snippet, max-image-preview, max-video-preview). Per-page overrides
  // (e.g. /orders sends "noindex, nofollow") replace this default entirely.
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  schemaMarkup,
  breadcrumbs,
}: SEOHeadProps) => {
  const fullCanonical = canonical
    ? `${BUSINESS.siteUrl}${canonical}`
    : BUSINESS.siteUrl;

  const schemas: object[] = [];

  if (Array.isArray(schemaMarkup)) {
    schemas.push(...schemaMarkup);
  } else if (schemaMarkup) {
    schemas.push(schemaMarkup);
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((bc, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": bc.name,
        "item": `${BUSINESS.siteUrl}${bc.url}`,
      })),
    });
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* `keywords` meta is intentionally not emitted: Google has ignored it
          since 2009 and Bing treats it as a spam signal. We still accept the
          prop so existing call sites compile; it's just a no-op. */}
      <meta name="author" content={BUSINESS.name} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={fullCanonical} />

      {/* en-IN locale hint for Google India localized SERPs. Single-language
          site today — x-default points at the same canonical so the cluster
          is explicit without forking translated URLs. */}
      <link rel="alternate" hrefLang="en-IN" href={fullCanonical} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonical} />

      {/* geo.* and ICBM meta tags removed — Google has not supported them
          since ~2014. Geographic data flows from JSON-LD GeoCoordinates
          on the LocalBusiness node (see index.html). */}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BUSINESS.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema Markup */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      {/* AI search and citation signals. `author` is already emitted above
          (line 59) — Helmet de-dupes by tag identity so listing it twice
          previously triggered Search Console "duplicate meta" lint. */}
      <meta name="copyright" content="Super Printers & Wedding Cards" />
      {/* `language` + `revisit-after` removed — `language` duplicates the
          <html lang> attribute, and `revisit-after` is explicitly listed
          as unsupported in Google's special-tags doc. */}
      <link rel="me" href="https://wa.me/919840199878" />
    </Helmet>
  );
};

export default SEOHead;
