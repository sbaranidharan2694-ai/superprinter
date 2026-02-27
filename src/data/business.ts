export const BUSINESS = {
  name: "Super Printers",
  tagline: "Best Printing Press in Pallavaram, Chennai Since 1989",
  phone: "+91 9840199878",
  phoneRaw: "919840199878",
  phoneTel: "tel:+919840199878",
  email: "superprntrs@yahoo.com",
  whatsapp: "https://wa.me/919840199878",
  whatsappQuote: "https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%27d%20like%20a%20quote%20for%20",
  address: "Old No.12, New No.8, Saraswathi Colony, Near Pallavaram Railway Station Road",
  city: "Pallavaram",
  region: "Chennai, Tamil Nadu",
  postalCode: "600043",
  country: "IN",
  founded: "1989",
  years: "36+",
  lat: "12.9675",
  lng: "80.1491",
  hours: "Mon–Sat 9:30 AM – 6:30 PM",
  siteUrl: "https://superprinter.lovable.app",
  sameAs: [
    "https://superprinters.net",
    "https://www.justdial.com/Chennai/Super-Printers-Near-Pallavaram-Railway-Station-Road-Pallavaram/044PXX44-XX44-121116100915-F7I8_BZDET",
    "https://www.indiamart.com/super-printers-chennai/"
  ],
  areas: [
    "Pallavaram", "Chromepet", "Tambaram", "Pammal", "Anakaputhur",
    "Alandur", "St. Thomas Mount", "Guindy", "Adambakkam", "Velachery",
    "Saidapet", "T. Nagar", "Perungalathur", "Medavakkam", "Vandalur", "Selaiyur"
  ],
} as const;

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BUSINESS.siteUrl}/#business`,
  "name": BUSINESS.name,
  "alternateName": "Super Printers Chennai",
  "description": "Super Printers is a leading printing press in Pallavaram, Chennai established in 1989. We offer offset printing, digital printing, visiting cards, banners, brochures, bill books, rubber stamps, T-shirt printing, invitation cards, stickers, letterheads and all commercial printing services.",
  "url": BUSINESS.siteUrl,
  "telephone": BUSINESS.phone,
  "email": BUSINESS.email,
  "image": `${BUSINESS.siteUrl}/og-image.jpg`,
  "logo": `${BUSINESS.siteUrl}/logo-horizontal.png`,
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "foundingDate": BUSINESS.founded,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS.address,
    "addressLocality": BUSINESS.city,
    "addressRegion": "Tamil Nadu",
    "postalCode": BUSINESS.postalCode,
    "addressCountry": BUSINESS.country,
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": BUSINESS.lat,
    "longitude": BUSINESS.lng,
  },
  "areaServed": [
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Pallavaram" },
    { "@type": "City", "name": "Chromepet" },
    { "@type": "City", "name": "Tambaram" },
    { "@type": "City", "name": "Pammal" },
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "18:30",
    },
  ],
  "sameAs": BUSINESS.sameAs,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Printing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Offset Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Visiting Card Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Banner Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brochure Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bill Book Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Invitation Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "T-Shirt Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rubber Stamp Making" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sticker and Label Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Letterhead Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Catalogue Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screen Printing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Spiral Binding" } },
    ],
  },
};

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What printing services does Super Printers offer in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Super Printers offers offset printing, digital printing, visiting card printing, banner printing, brochure printing, bill book printing, wedding invitation printing, T-shirt printing, rubber stamps, sticker and label printing, screen printing, letterhead printing, catalogue printing, and spiral binding services in Chennai.",
      },
    },
    {
      "@type": "Question",
      "name": "Where is Super Printers located in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Super Printers is located at ${BUSINESS.address}, ${BUSINESS.city}, Chennai ${BUSINESS.postalCode}, Tamil Nadu, India.`,
      },
    },
    {
      "@type": "Question",
      "name": "What are Super Printers' working hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Super Printers is open Monday to Saturday from 9:30 AM to 6:30 PM, and closed on Sundays.",
      },
    },
    {
      "@type": "Question",
      "name": "Does Super Printers offer bulk printing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Super Printers specializes in bulk printing for businesses including brochures, bill books, visiting cards, letterheads, and catalogues at affordable rates in Chennai.",
      },
    },
    {
      "@type": "Question",
      "name": "How can I contact Super Printers Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `You can call Super Printers at ${BUSINESS.phone} or visit us at Saraswathi Colony, ${BUSINESS.city}, Chennai ${BUSINESS.postalCode}. You can also reach us through our website or WhatsApp.`,
      },
    },
    {
      "@type": "Question",
      "name": "Is Super Printers the best printing press in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Super Printers has been a trusted printing press in Chennai since 1989, serving customers in Pallavaram, Chromepet, Tambaram and across Chennai with high-quality printing at competitive prices.",
      },
    },
  ],
};
