export const BUSINESS = {
  name: "Super Printers & Wedding Cards",
  shortName: "Super Printers",
  tagline: "Professional Printing in Chennai Since 1990",
  founder: "N. Baranidharan",
  founderTitle: "Founder — Super Printers, Pallavaram",
  founderBio:
    "Super Printers was founded in Pallavaram in 1990 with a single offset press. Over 35 years, it has grown to serve 10,000+ customers across Chennai — from first-time business owners printing their first visiting cards to families celebrating weddings across generations.",
  founded: 1990,
  years: 35,
  phone: "+91 98401 99878",
  phoneRaw: "919840199878",
  phoneTel: "tel:+919840199878",
  whatsapp: "https://wa.me/919840199878",
  whatsappQuote:
    "https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%20need%20a%20quote%20for%20",
  whatsappGeneral:
    "https://wa.me/919840199878?text=Hi%2C%20I%20need%20a%20quote",
  whatsappWedding:
    "https://wa.me/919840199878?text=Hi%2C%20I%20need%20wedding%20card%20printing",
  email: "SuperPrntrs@yahoo.com",
  address: "No. 6, Saraswathy Colony",
  addressFull: "No. 6, Saraswathy Colony, Pallavaram, Chennai 600043",
  addressShort: "Pallavaram, Chennai 600043",
  city: "Pallavaram",
  postalCode: "600043",
  lat: 12.9672,
  lng: 80.1482,
  areas: ["Chennai", "Tamil Nadu"],
  areasServedText: "Throughout Chennai and Tamil Nadu",
  gstRegistered: true,
  gstNumber: "33AAGPB7462F1Z1",
  googleRating: "4.8",
  googleReviewCount: 147,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Super+printers+and+wedding+cards",
  siteUrl: "https://superprinters.net",
  hours: "Mon–Sat: 9:00 AM – 8:00 PM",
  hoursSunday: "Sunday: 10:00 AM – 4:00 PM",
  yearsExperience: 35,
  happyClients: "10,000+",
  mapEmbed: "https://www.google.com/maps?q=Super+printers+and+wedding+cards&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Super+printers+and+wedding+cards",
  // Profile URLs published in LocalBusiness/Organization JSON-LD `sameAs`.
  // Replace each placeholder once the corresponding profile is created and
  // verified. Keeping placeholders out of `sameAs` until then prevents
  // Google's Knowledge Graph from picking up a dead link.
  sameAs: [
    "https://wa.me/919840199878",
    // "https://www.google.com/maps/place/?q=place_id:REPLACE_WITH_GBP_PLACE_ID",
    // "https://www.instagram.com/superprinters",
    // "https://www.facebook.com/superprinters",
    // "https://www.youtube.com/@superprinters",
  ],
};

/**
 * LocalBusiness JSON-LD — mirror of the script in index.html (no-JS crawlers).
 * If you change NAP or hours, update both this object and index.html ld+json.
 */
/**
 * Person schema for the founder. Referenced by LocalBusiness (founder) +
 * homepage (additional schema) so AI engines (ChatGPT/Perplexity/Gemini)
 * have a named, schema-tagged expert to cite when answering printing-press
 * questions about this business. 2026 GEO research shows named experts
 * with rich schema get cited ~3x more often than anonymous business entries.
 */
export const FOUNDER_PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BUSINESS.siteUrl}/#founder`,
  name: BUSINESS.founder,
  jobTitle: "Founder & Master Printer",
  description: BUSINESS.founderBio,
  worksFor: { "@id": `${BUSINESS.siteUrl}/#business` },
  knowsAbout: [
    "Offset printing",
    "Digital printing",
    "Wedding card printing",
    "Visiting card printing",
    "Brochure printing",
    "Pre-press file preparation",
    "Spot UV finishing",
    "Foil stamping",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pallavaram",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  // PrintShop is a specific Schema.org subtype released for the printing
  // industry — 2026 best practice is to use the most specific LocalBusiness
  // subtype available. PrintShop + ProfessionalService gives crawlers two
  // taxonomic anchors. Google supports PrintShop in Local Business panel.
  "@type": ["PrintShop", "LocalBusiness", "ProfessionalService"],
  "@id": `${BUSINESS.siteUrl}/#business`,
  name: BUSINESS.name,
  description:
    "Professional printing press in Pallavaram, Chennai — wedding cards, visiting cards, brochures, offset and digital printing since 1990.",
  url: BUSINESS.siteUrl,
  telephone: "+919840199878",
  email: BUSINESS.email,
  foundingDate: "1990",
  founder: { "@id": `${BUSINESS.siteUrl}/#founder` },
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: "Pallavaram",
    addressRegion: "Tamil Nadu",
    postalCode: "600043",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.lat,
    longitude: BUSINESS.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
  ],
  // Schema.org's priceRange vocabulary is $/$$/$$$/$$$$ — "₹" is rejected by
  // Google's Rich Results Test. "$" reflects entry-level pricing; the
  // currency itself is declared via currenciesAccepted.
  priceRange: "$",
  currenciesAccepted: "INR",
  taxID: BUSINESS.gstNumber,
  areaServed: [
    "Chennai",
    "Pallavaram",
    "Chromepet",
    "Tambaram",
    "Pammal",
    "Perungalathur",
    "Velachery",
    "Nanganallur",
    "Medavakkam",
    "Guindy",
    "Adyar",
    "Alandur",
  ],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "147", bestRating: "5" },
  sameAs: BUSINESS.sameAs,
  hasMap: BUSINESS.googleMapsUrl,
  // image as an array satisfies Google's preferred-image guidance; the first
  // entry is the logo (1:1), second is the OG share image (16:9).
  image: [
    `${BUSINESS.siteUrl}/super-printers-logo.png`,
    `${BUSINESS.siteUrl}/og-image.jpg`,
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visiting Cards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Cards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brochures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Letterheads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bill Books" } },
    ],
  },
};
