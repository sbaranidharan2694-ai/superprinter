/**
 * Structured data for SEO (rich results). Homepage FAQ must match visible FAQ on the page.
 */
import { BUSINESS } from "./business";
import { services, type ServiceData } from "./services";
import { FAQ_ITEMS } from "./v2";

/**
 * SpeakableSpecification — tells Google Assistant / voice search / AI
 * Overview extractors which CSS selectors hold the most "speakable" parts
 * of the page. Targets the H1, every H2 (section headings), and any element
 * tagged with `data-speakable` (so the dedicated summary line in the hero
 * gets read aloud first). Wrapped as a WebPage so Google links it to the
 * URL, not just the document.
 */
export const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BUSINESS.siteUrl}/#webpage`,
  url: BUSINESS.siteUrl,
  name: BUSINESS.name,
  inLanguage: "en-IN",
  // Graph linking — declares this WebPage as part of the WebSite and the
  // primary topic as the LocalBusiness entity. AI engines that build
  // entity graphs from JSON-LD will now traverse from page → business →
  // founder cleanly instead of treating WebPage as an orphan node.
  isPartOf: { "@id": `${BUSINESS.siteUrl}/#website` },
  about: { "@id": `${BUSINESS.siteUrl}/#business` },
  mainEntity: { "@id": `${BUSINESS.siteUrl}/#business` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${BUSINESS.siteUrl}/og-image.jpg`,
  },
  // Speakable selector narrowed: H2s are section headers (Pricing, FAQ,
  // Reviews) — having voice assistants read every heading is noisy.
  // Restrict to H1 + explicitly-tagged speakable sentences + lead-answer
  // paragraphs.
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "[data-speakable]", ".lead-answer"],
  },
};

/**
 * FAQPage schema for the homepage FAQ section.
 *
 * **2026 status:** Google dropped FAQ rich results from Search on May 7 2026
 * and removed FAQ from the Rich Results Test in June 2026. Per the March
 * 2026 core update, FAQ schema on pages whose PRIMARY content isn't a FAQ
 * can trigger rich-result suppression. We therefore no longer attach this
 * to the homepage `<SEOHead>` schemaMarkup array (see src/pages/Index.tsx).
 *
 * The export is retained because:
 *   - LLM citation engines (ChatGPT, Claude, Perplexity, Google AI
 *     Overviews) still parse FAQPage as a high-signal source — FAQ schema
 *     has one of the highest cite rates in AI-generated answers (2026
 *     Stackmatix research).
 *   - A future dedicated `/faq` page (where FAQ IS the primary content)
 *     can opt back in safely.
 */
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

// HOMEPAGE_REVIEWS_SCHEMA removed (2026-06): Google prohibits self-serving
// first-party Review markup — reviews about your own business, hosted on your
// own pages. They produce no rich results and risk a structured-data manual
// action. The testimonials still render visibly in SocialProofSection; the
// 4.8/147 rating belongs to the Google Business Profile, not on-site markup.

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

/**
 * Product schema with Offer + Brand + AggregateRating, intended for
 * dedicated product landing pages like /wedding-cards or /visiting-cards.
 *
 * In 2026 Google rewards Product schema with rich-result eligibility:
 * SERPs can render price + star rating + brand alongside the result.
 * Offer.price uses the numeric stem of services[].startingPrice (e.g. "₹5"
 * → "5") so it's machine-readable. The visible page still shows ₹.
 */
export function productSchema(opts: {
  service: ServiceData;
  path: string;
  description: string;
  imageUrl?: string;
}) {
  const { service, path, description, imageUrl } = opts;
  const numericPrice = service.startingPrice?.replace(/[^\d.]/g, "") || undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BUSINESS.siteUrl}${path}#product`,
    name: service.name,
    description,
    brand: { "@type": "Brand", name: BUSINESS.shortName },
    category: "Printing services",
    image: imageUrl ? [imageUrl] : undefined,
    ...(numericPrice && {
      offers: {
        "@type": "Offer",
        priceCurrency: "INR",
        price: numericPrice,
        availability: "https://schema.org/InStock",
        url: `${BUSINESS.siteUrl}${path}`,
        seller: { "@id": `${BUSINESS.siteUrl}/#business` },
        // "Starting from" anchor — useful for AI extraction.
        priceSpecification: {
          "@type": "PriceSpecification",
          price: numericPrice,
          priceCurrency: "INR",
          valueAddedTaxIncluded: false,
        },
        // Required for Product merchant rich results since the 2024 update
        // and still enforced under the March 2026 core guidance. Without
        // these, Google strips the result back to a plain blue link.
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "IN",
          // Custom printed goods are non-returnable once produced — we
          // honour proof-approval reprints instead, which doesn't map to a
          // standard return policy category. Declaring this explicitly
          // satisfies the rich-result requirement without misrepresenting
          // the actual policy.
          returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "IN",
          },
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "0",
            currency: "INR",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
            transitTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
          },
        },
      },
    }),
    // aggregateRating intentionally omitted: reusing the business's 147 Google
    // reviews as a per-product rating is self-serving and misleading (those
    // reviews aren't about "wedding card printing" specifically). Google's
    // review-snippet policy bars self-serving ratings; product star ratings
    // should come from genuine, product-level third-party reviews only.
  };
}

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

/**
 * HowTo schema — "How to order printing from Super Printers".
 *
 * **2026 usage rule:** Use ONLY on a page whose PRIMARY content is a
 * step-by-step ordering tutorial. The March 2026 core update penalises
 * HowTo schema on pages whose primary purpose is product/service marketing
 * (not tutorial). Suitable for a future dedicated /how-to-order page; do
 * NOT inject onto product or service landing pages.
 */
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
