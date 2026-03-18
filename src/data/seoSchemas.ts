/**
 * Structured data for SEO (rich results). Homepage FAQ must match visible FAQ on the page.
 */
import { BUSINESS } from "./business";
import { services } from "./services";
import { FAQ_ITEMS } from "./v2";

export const HOMEPAGE_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const PROVIDER_SNIPPET = {
  "@type": "LocalBusiness" as const,
  name: BUSINESS.name,
  telephone: "+919840199878",
  url: BUSINESS.siteUrl,
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: BUSINESS.address,
    addressLocality: "Pallavaram",
    addressRegion: "Tamil Nadu",
    postalCode: "600043",
    addressCountry: "IN",
  },
};

/** Service schema for dedicated landing pages (Google + AI search). */
export function serviceLandingSchema(opts: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${BUSINESS.siteUrl}${opts.path}`,
    provider: PROVIDER_SNIPPET,
    areaServed: [
      { "@type": "City", name: "Chennai" },
      { "@type": "Place", name: "Pallavaram" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    ],
  };
}

export function servicesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Printing services in Chennai — Super Printers",
    description:
      "Offset printing, visiting cards, wedding cards, banners, brochures, bill books, letterheads, rubber stamps, T-shirts, and more in Pallavaram, Chennai.",
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${BUSINESS.siteUrl}/services/${s.slug}`,
    })),
  };
}
