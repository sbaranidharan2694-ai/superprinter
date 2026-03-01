import { Helmet } from "react-helmet-async";
import { BUSINESS, LOCAL_BUSINESS_SCHEMA } from "@/data/business";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
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
  schemaMarkup,
  breadcrumbs,
}: SEOHeadProps) => {
  const fullCanonical = canonical
    ? `${BUSINESS.siteUrl}${canonical}`
    : BUSINESS.siteUrl;

  const schemas: object[] = [LOCAL_BUSINESS_SCHEMA];

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
      <meta name="keywords" content={keywords} />
      <meta name="author" content={BUSINESS.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />

      {/* Geo meta tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
      <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />

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
    </Helmet>
  );
};

export default SEOHead;
