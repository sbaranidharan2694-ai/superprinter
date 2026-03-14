/* V2 Ultimate Redesign — data */

export const MARQUEE_ITEMS = [
  "📞 +91 98401 99878",
  "⚡ 48-Hour Business Card Delivery",
  "🏆 Quality Printing Since 1990",
  "📍 Pallavaram, Chennai",
  "💬 WhatsApp Orders Welcome",
  "🎊 Wedding Cards from ₹8 per card",
  "✓ Trusted by Wipro & TTK Healthcare",
];

export const MARQUEE_ROW1 = [
  "Business Cards",
  "Letterheads",
  "Brochures",
  "Bill Books",
  "Catalogues",
  "Envelopes",
  "Stickers",
  "Posters",
];

export const MARQUEE_ROW2 = [
  "Screen Printing",
  "Spot UV Cards",
  "Foil Cards",
  "Wedding Cards",
  "Die-cut Cards",
  "Calendars",
  "Booklets",
  "Lamination",
];

export type ProductCategory = "Visiting Cards" | "Stationery" | "Wedding & Events" | "Posters & Promo" | "Special Finishes";

export interface V2Product {
  id: string;
  name: string;
  image: string;
  specs: string[];
  price: string;
  category: ProductCategory;
  waMessage: string;
  badge?: "Most Popular" | "Premium";
  priceFrom?: string;
  qty?: string;
}

export const V2_PRODUCTS: V2Product[] = [
  {
    id: "gloss-cards",
    name: "Gloss Visiting Cards",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=85",
    specs: ["300 GSM", "Front & Back", "Gloss Lam"],
    price: "₹299 / 100 pcs · ₹499 / 250 pcs · ₹699 / 500 pcs",
    priceFrom: "299",
    qty: "100 pcs",
    category: "Visiting Cards",
    waMessage: "Hi! I need Gloss Visiting Cards — can I get a quote?",
  },
  {
    id: "matt-cards",
    name: "Matt Visiting Cards",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&q=85",
    specs: ["300 GSM", "Front & Back", "Matt Lam"],
    price: "₹349 / 100 pcs · ₹549 / 250 pcs · ₹799 / 500 pcs",
    priceFrom: "349",
    qty: "100 pcs",
    category: "Visiting Cards",
    waMessage: "Hi! I need Matt Lamination Visiting Cards — can I get a quote?",
  },
  {
    id: "spot-uv",
    name: "Spot UV Cards",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&q=85",
    specs: ["300 GSM", "Spot UV Front", "Premium Finish"],
    price: "₹599 / 100 pcs · ₹999 / 250 pcs",
    priceFrom: "599",
    qty: "100 pcs",
    category: "Visiting Cards",
    waMessage: "Hi! I need Spot UV Business Cards — can I get a quote?",
    badge: "Most Popular",
  },
  {
    id: "foil-cards",
    name: "Foil Stamping Cards",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&q=85",
    specs: ["400 GSM", "Gold/Silver Foil", "Velvet Lam"],
    price: "₹799 / 100 pcs",
    priceFrom: "799",
    qty: "100 pcs",
    category: "Visiting Cards",
    waMessage: "Hi! I need Foil Stamping Business Cards — can I get a quote?",
    badge: "Premium",
  },
  {
    id: "diecut-cards",
    name: "Die-cut Shaped Cards",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=85",
    specs: ["300 GSM", "Custom Shape", "16 Die Patterns"],
    price: "₹699 / 100 pcs",
    priceFrom: "699",
    qty: "100 pcs",
    category: "Visiting Cards",
    waMessage: "Hi! I need Die-cut Shaped Cards — can I get a quote?",
  },
  {
    id: "letterheads",
    name: "Letterheads",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=85",
    specs: ["90 GSM Bond", "Full Colour", "A4 Size"],
    price: "₹299 / 100 pcs · ₹499 / 250 pcs",
    priceFrom: "299",
    qty: "100 pcs",
    category: "Stationery",
    waMessage: "Hi! I need Letterheads — can I get a quote?",
  },
  {
    id: "brochures",
    name: "Brochures (Trifold / Bifold)",
    image: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?w=500&q=85",
    specs: ["130 GSM Art Paper", "4-Colour", "A4 Trifold"],
    price: "₹499 / 100 pcs · ₹899 / 250 pcs",
    priceFrom: "499",
    qty: "100 pcs",
    category: "Stationery",
    waMessage: "Hi! I need Brochures — can I get a quote?",
  },
  {
    id: "bill-books",
    name: "Bill Books (Carbonless GST)",
    image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=500&q=85",
    specs: ["Carbonless NCR", "2-Part / 3-Part", "Serial Numbered"],
    price: "₹250 / 25 sets · ₹450 / 50 sets",
    priceFrom: "250",
    qty: "25 sets",
    category: "Stationery",
    waMessage: "Hi! I need Bill Books — can I get a quote?",
  },
  {
    id: "catalogues",
    name: "Catalogues",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85",
    specs: ["170 GSM Art Paper", "Full Colour", "Any Page Count"],
    price: "Custom Quote",
    priceFrom: "Quote",
    qty: "on request",
    category: "Stationery",
    waMessage: "Hi! I need Catalogues — can I get a quote?",
  },
  {
    id: "envelopes",
    name: "Envelopes",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&q=85",
    specs: ["Branded", "DL / C4 / C5", "Offset Printed"],
    price: "₹199 / 100 pcs · ₹349 / 250 pcs",
    priceFrom: "199",
    qty: "100 pcs",
    category: "Stationery",
    waMessage: "Hi! I need Envelopes — can I get a quote?",
  },
  {
    id: "posters",
    name: "Posters & Flyers",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=500&q=85",
    specs: ["130–170 GSM", "A4 / A3 / A2", "Single/Double Side"],
    price: "₹199 / 50 pcs",
    priceFrom: "199",
    qty: "50 pcs",
    category: "Posters & Promo",
    waMessage: "Hi! I need Posters/Flyers — can I get a quote?",
  },
  {
    id: "screen-printing",
    name: "Screen Printing (Fabric/Paper)",
    image: "https://images.unsplash.com/photo-1558618047-f4f37ee1d6d0?w=500&q=85",
    specs: ["Fabric & Paper", "Spot Colours", "Bulk Welcome"],
    price: "Custom Quote",
    priceFrom: "Quote",
    qty: "on request",
    category: "Special Finishes",
    waMessage: "Hi! I need Screen Printing — can I get a quote?",
  },
];

export interface MegaMenuItem {
  title: string;
  items: { name: string; scrollTo: string }[];
}

export const V2_MEGA_MENU: MegaMenuItem[] = [
  {
    title: "Visiting Cards",
    items: [
      { name: "Gloss / Matt Cards", scrollTo: "products" },
      { name: "Spot UV Cards", scrollTo: "products" },
      { name: "Foil Stamping", scrollTo: "products" },
      { name: "Die-cut Shaped", scrollTo: "products" },
    ],
  },
  {
    title: "Print & Stationery",
    items: [
      { name: "Letterheads", scrollTo: "products" },
      { name: "Brochures", scrollTo: "products" },
      { name: "Bill Books", scrollTo: "products" },
      { name: "Catalogues", scrollTo: "products" },
      { name: "Envelopes", scrollTo: "products" },
    ],
  },
  {
    title: "Packaging & Promo",
    items: [
      { name: "Posters & Flyers", scrollTo: "products" },
      { name: "Stickers", scrollTo: "products" },
      { name: "Calendars", scrollTo: "products" },
    ],
  },
  {
    title: "Special",
    items: [
      { name: "Wedding Cards", scrollTo: "wedding-cards" },
      { name: "Screen Printing", scrollTo: "products" },
    ],
  },
];

export const V2_PRODUCT_TABS: { id: string; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Visiting Cards", label: "Visiting Cards" },
  { id: "Stationery", label: "Stationery" },
  { id: "Wedding & Events", label: "Wedding & Events" },
  { id: "Posters & Promo", label: "Posters & Promo" },
  { id: "Special Finishes", label: "Special Finishes" },
];

export const V2_FINISHES_STRIP = [
  "Gloss Lamination",
  "Matt Lamination",
  "Spot UV",
  "Gold Foil",
  "Silver Foil",
  "Die-cut",
  "Velvet Lamination",
  "Embossing",
  "Screen Printing",
];

export interface WhyChooseCard {
  id: string;
  title: string;
  body: string;
  icon: string;
  highlight: "gold" | "navy" | "wedding" | "white";
}

export const V2_WHY_CHOOSE: WhyChooseCard[] = [
  {
    id: "heritage",
    title: "35 Years of Craft",
    body: "Founded in 1990 by N. Baranidharan — when quality meant hand-checking every sheet. That standard hasn't changed.",
    icon: "🏛️",
    highlight: "gold",
  },
  {
    id: "speed",
    title: "48-Hour Delivery",
    body: "Business cards ready in 48 hours. Same-day available for urgent jobs. WhatsApp us before noon for same-day at Pallavaram.",
    icon: "⚡",
    highlight: "white",
  },
  {
    id: "trust",
    title: "Trusted by Corporates",
    body: "Wipro, TTK Healthcare, Reckitt Benckiser — and 10,000+ small businesses across Chennai rely on us every month.",
    icon: "🤝",
    highlight: "white",
  },
  {
    id: "technical",
    title: "Spot UV. Foil. Die-cut.",
    body: "We match the technical specs of any offset printer in Tamil Nadu — at Pallavaram prices, with local pickup and fast turnaround.",
    icon: "✨",
    highlight: "white",
  },
  {
    id: "whatsapp",
    title: "Order in 60 Seconds",
    body: "No complicated website forms. WhatsApp your file + specs and get a quote in 30 minutes — or call directly.",
    icon: "💬",
    highlight: "navy",
  },
  {
    id: "wedding",
    title: "Chennai's Wedding Card Specialist",
    body: "Hindu, Christian, Muslim, Tamil & English — wedding invitations crafted with care since 1990.",
    icon: "💍",
    highlight: "wedding",
  },
];

export const V2_COMPARISON_ROWS: { feature: string; super: string; others: string }[] = [
  { feature: "Years in Business", super: "✅ 35 Years", others: "❌ 5–20 Years" },
  { feature: "WhatsApp Ordering", super: "✅ Yes", others: "❌ Rarely" },
  { feature: "Wedding Card Focus", super: "✅ Yes", others: "❌ Rarely" },
  { feature: "Special Finishes", super: "✅ Yes", others: "❌ Limited" },
  { feature: "Pallavaram Pickup", super: "✅ Yes", others: "❌ No" },
  { feature: "Same-Day Available", super: "✅ Yes", others: "❌ Rarely" },
];

/** V3: Awards / credibility strip badges */
export const V3_CREDIBILITY_BADGES = [
  "🏆 Est. 1990",
  "✓ GST Registered",
  "⭐ 4.8 Google Rating",
  "💼 Trusted by Wipro",
  "📋 14+ Years Digital Printing",
  "🚀 48-Hour Delivery Guarantee",
  "📱 WhatsApp Orders Welcome",
];

export interface WeddingCollectionCard {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  badge?: string;
}

export const V2_WEDDING_COLLECTIONS: WeddingCollectionCard[] = [
  {
    id: "hindu",
    name: "Traditional Hindu",
    description: "Shubh Muhurat designs. Lord Ganesha motifs. Red & gold. Tamil / English / Bilingual.",
    image: "https://images.unsplash.com/photo-1607000975631-4bd2e12d00da?w=500&q=80",
    price: "From ₹8 per card",
  },
  {
    id: "christian",
    name: "Christian Wedding",
    description: "Church & garden themes. Cross motifs. Elegant typography. English / Tamil.",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=500&q=80",
    price: "From ₹8 per card",
  },
  {
    id: "muslim",
    name: "Muslim / Nikah",
    description: "Arabic calligraphy accents. Crescent & star motifs. Urdu / English / Tamil.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=85",
    price: "From ₹8 per card",
  },
  {
    id: "modern",
    name: "Modern Minimalist",
    description: "Clean typography. Muted tones. No-fuss design. Perfect for intimate weddings.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=500&q=80",
    price: "From ₹10 per card",
  },
  {
    id: "floral",
    name: "Premium Floral",
    description: "Full-bleed botanical illustration. Velvet lamination available. Luxury feel.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80",
    price: "From ₹15 per card",
    badge: "Premium",
  },
  {
    id: "events",
    name: "Events & Occasions",
    description: "Birthdays, housewarming, baby showers, product launches, and office events.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&q=80",
    price: "Get Custom Quote",
  },
];

export const V2_WEDDING_PROCESS = [
  { step: 1, title: "Share Your Details", body: "WhatsApp us your date, names, language preference, and quantity" },
  { step: 2, title: "Get a Free Design Proof", body: "We create a digital proof within 24 hours at no cost" },
  { step: 3, title: "Print & Collect", body: "Cards ready in 3–5 working days from approval. Free pickup in Pallavaram." },
];

export const V2_PAPER_WEIGHTS: { gsm: string; feel: string; bestFor: string }[] = [
  { gsm: "90", feel: "Standard", bestFor: "Letterheads, photocopier paper" },
  { gsm: "130", feel: "Medium", bestFor: "Leaflets, small brochures" },
  { gsm: "170", feel: "Thick", bestFor: "Brochures, posters, flyers" },
  { gsm: "220", feel: "Very Thick", bestFor: "Premium brochures, card inserts" },
  { gsm: "300", feel: "Card", bestFor: "Standard visiting cards" },
  { gsm: "400", feel: "Premium", bestFor: "Luxury visiting cards, menus" },
];

export interface FinishCard {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const V2_FINISHES: FinishCard[] = [
  { id: "gloss", name: "Gloss Lamination", description: "Vibrant shine. Protects print. Best for photos.", icon: "🌟" },
  { id: "matt", name: "Matt Lamination", description: "Soft, no-glare finish. Professional look.", icon: "🤍" },
  { id: "velvet", name: "Velvet Lamination", description: "Luxury soft-touch. Premium feel.", icon: "🖤" },
  { id: "spotuv", name: "Spot UV", description: "Selective high-gloss over matt base. Standout effect.", icon: "✨" },
  { id: "goldfoil", name: "Gold Foil", description: "Metallic gold stamping. For logos and text.", icon: "🥇" },
  { id: "diecut", name: "Die-cut Shaping", description: "Custom shapes: rounded, scalloped, arch.", icon: "✂️" },
];

export interface V2FAQItem {
  q: string;
  a: string;
}

export const V2_FAQ: V2FAQItem[] = [
  {
    q: "How quickly can you print business cards?",
    a: "Standard orders are ready in 48–72 hours. Same-day printing is available for urgent jobs (order before 11AM). WhatsApp us for same-day availability.",
  },
  {
    q: "What's the minimum order quantity?",
    a: "50 pcs for visiting cards, 100 for brochures and letterheads, 50 sets for bill books, and 50 cards for wedding invitations. We also accept higher volumes with bulk pricing.",
  },
  {
    q: "What file format should I send?",
    a: "PDF in CMYK, 300 DPI is ideal. We also accept AI, PSD, EPS, and PNG. Send via WhatsApp or email. Our team checks every file before printing and flags any issues.",
  },
  {
    q: "Can I see a proof before you print?",
    a: "Always. We send a digital PDF proof for approval — no sheet is printed without your written sign-off. Free proofing for all orders.",
  },
  {
    q: "Do you offer design services?",
    a: "Yes! Share your logo and preferences and we'll design a proof within 24 hours. Free for orders over ₹1,000, otherwise from ₹299.",
  },
  {
    q: "Do you print wedding cards in Tamil?",
    a: "Yes — Tamil, English, or bilingual. We support all Indian language scripts. Bring your content or our team can typeset it for you. Available in Hindu, Christian, Muslim and modern designs.",
  },
  {
    q: "Can you match Pantone or specific brand colours?",
    a: "For offset printing we support Pantone colour matching. For digital printing we work in CMYK and come very close to most brand guidelines. Share your hex codes or Pantone references.",
  },
  {
    q: "Do you deliver outside Pallavaram?",
    a: "Pickup is free from Pallavaram. For bulk orders (5,000+ pcs) or orders over ₹3,000, we can arrange courier delivery within Chennai. Contact us for rates.",
  },
];

export interface V2Review {
  initials: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export const V2_REVIEWS: V2Review[] = [
  { initials: "RM", name: "Rajesh M.", role: "Wipro · Business Cards", quote: "We have counted on Super Printers for many years for all our printing needs. Exceptional quality and their team is always professional and reliable.", stars: 5 },
  { initials: "PS", name: "Priya S.", role: "Business Cards · Chennai", quote: "I was genuinely surprised by the quality — received my business cards in just 2 days. Will be ordering again for sure.", stars: 5 },
  { initials: "KR", name: "Karthik R.", role: "Brochures · Adyar", quote: "The quality exceeded all expectations. I got incredible value for money on my brochures. Highly recommended.", stars: 5 },
  { initials: "MV", name: "Meena & Vijay", role: "Wedding Cards · Pallavaram", quote: "Beautiful wedding cards — exactly what we dreamed of. Our guests kept admiring them. Perfect Tamil and English layout.", stars: 5 },
  { initials: "SP", name: "Suresh P.", role: "Bill Books · Tambaram", quote: "Fast, professional, and more affordable than any other printer I'd tried. Our GST bill books are excellent quality.", stars: 5 },
  { initials: "AT", name: "Ananya T.", role: "Catalogues · T. Nagar", quote: "Ordered 5,000 brochures for our product launch. Delivered on time, perfect colour. Now our permanent print partner.", stars: 5 },
];

export const V2_FEATURED_QUOTE = {
  quote: "35 years in Pallavaram and their quality has never once let us down.",
  author: "Rajesh M., Wipro Chennai",
};

export const V2_TIMELINE: { year: string; text: string }[] = [
  { year: "1990", text: "Founded by N. Baranidharan, Pallavaram" },
  { year: "2000", text: "Expanded to offset printing" },
  { year: "2010", text: "Digital printing and screen printing added" },
  { year: "2020", text: "Online & WhatsApp ordering launched" },
  { year: "2025", text: "35 years · 10,000+ clients · 50+ products" },
];

export const V2_AREAS_SERVED = [
  "Pallavaram",
  "Tambaram",
  "Chromepet",
  "Medavakkam",
  "Perungudi",
  "Guindy",
  "Adyar",
  "Velachery",
  "Thoraipakkam",
  "Sholinganallur",
];

export const V2_QUOTE_PRODUCTS: { value: string; label: string; emoji: string }[] = [
  { value: "", label: "Select Product", emoji: "" },
  { value: "Visiting Cards (Gloss / Matt / Spot UV / Foil / Die-cut)", label: "Visiting Cards (Gloss / Matt / Spot UV / Foil / Die-cut)", emoji: "🃏" },
  { value: "Letterheads", label: "Letterheads", emoji: "📄" },
  { value: "Brochures & Leaflets", label: "Brochures & Leaflets", emoji: "📋" },
  { value: "Bill Books (Carbonless)", label: "Bill Books (Carbonless)", emoji: "📒" },
  { value: "Booklets & Catalogues", label: "Booklets & Catalogues", emoji: "📚" },
  { value: "Envelopes", label: "Envelopes", emoji: "✉️" },
  { value: "Posters & Flyers", label: "Posters & Flyers", emoji: "📌" },
  { value: "Screen Printing (Fabric / Paper)", label: "Screen Printing (Fabric / Paper)", emoji: "👕" },
  { value: "Wedding & Event Cards", label: "Wedding & Event Cards", emoji: "💌" },
  { value: "Other / Custom Job", label: "Other / Custom Job", emoji: "🎁" },
];

export const V2_QUOTE_QUANTITY = [
  "50 – 100 pcs",
  "100 – 500 pcs",
  "500 – 1,000 pcs",
  "1,000 – 5,000 pcs",
  "5,000+ pcs (bulk)",
  "Not sure yet",
];

export const V2_QUOTE_FINISH = [
  "Standard (90–130 GSM)",
  "Medium (170 GSM Art Paper)",
  "Premium Card (300 GSM)",
  "Luxury (400 GSM + Velvet Lam)",
  "Special Finish (Spot UV / Foil / Die-cut)",
  "Not sure – please recommend",
];
