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

/** HowTo schema — "How to order printing from Super Printers". Use on service landing pages. */
export const howToOrderSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Order Printing from Super Printers Chennai",
  "description": "Order visiting cards, wedding cards, brochures, or any printing from Super Printers Pallavaram via WhatsApp in 3 simple steps.",
  "totalTime": "PT30M",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Send your requirements on WhatsApp",
      "text": "WhatsApp +91 98401 99878 with your product (e.g. visiting cards), quantity, and any design files or references. Get a quote reply in 30 minutes.",
      "url": "https://superprinters.net/get-quote"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Approve the digital proof",
      "text": "We send a PDF or image proof via WhatsApp before printing a single copy. Review, request any changes, and approve when you're satisfied — unlimited revisions, no extra charge.",
      "url": "https://superprinters.net/get-quote"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Receive your order",
      "text": "Once proof is approved, most orders are printed and ready within 24 hours. Collect from our Pallavaram shop or get it delivered across Chennai and Tamil Nadu.",
      "url": "https://superprinters.net/contact"
    }
  ]
};
