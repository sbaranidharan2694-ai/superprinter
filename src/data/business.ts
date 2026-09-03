// Canonical Google Business Profile share link (owner-supplied, June 2026).
// Official Google short link → resolves to KG entity /g/11s5473g7x
// ("Super Printers & Wedding Cards"). Single source of truth: used in
// sameAs, the LocalBusiness `hasMap`, and the "View reviews" button.
const GOOGLE_BUSINESS_PROFILE = "https://share.google/unVdZhHj2Hf7fywMj";

export const BUSINESS = {
  name: "Super Printers & Wedding Cards",
  googleBusinessProfile: GOOGLE_BUSINESS_PROFILE,
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
  address: "No. 8, Saraswathy Colony",
  addressFull: "No. 8, Saraswathy Colony, Pallavaram, Chennai 600043",
  addressShort: "Pallavaram, Chennai 600043",
  city: "Pallavaram",
  postalCode: "600043",
  lat: 12.9672,
  lng: 80.1482,
  areas: ["Chennai", "Tamil Nadu"],
  areasServedText: "Throughout Chennai and Tamil Nadu",
  // Local-currency notation for INR. Google's Rich Results Test accepts
  // either "$$" or a repeated local symbol; the local form is clearer to
  // Indian users who see it rendered in the local pack.
  priceRange: "₹₹",
  gstRegistered: true,
  gstNumber: "33AAGPB7462F1Z1",
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
    // Google Maps CID for the listing — the same entity as the share link
    // below, addressed the way Maps itself does. Two URLs for one entity is
    // fine in sameAs and reinforces the Knowledge Graph match on branded search.
    "https://maps.google.com/maps?cid=10250813327102828258",
    "https://www.weddingwire.in/wedding-invitations/super-printers-and-weddings-cards--e494180",
    "https://www.weddingbazaar.com/wedding-cards/chennai/super-printers-and-wedding-cards",
    // Directory listings verified June 2026 — NAP matches (Saraswathi Colony,
    // Pallavaram 600043; founder N. Baranidharan; GST 33AAGPB7462F1Z1).
    "https://www.sulekha.com/super-printers-pallavaram-chennai-4717400-contact-address",
    "https://www.indiamart.com/super-printers-chennai/aboutus.html",
    // Google Business Profile — owner-verified June 2026.
    GOOGLE_BUSINESS_PROFILE,
    // Replace placeholders once the owner verifies each profile. Dead sameAs
    // links weaken Knowledge Graph confidence.
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
