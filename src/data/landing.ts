export interface LandingServiceCard {
  id: string;
  emoji: string;
  name: string;
  description: string;
  price: string;
  isWedding?: boolean;
  isNew?: boolean;
  scrollTo: "quote-form" | "wedding-cards";
}

export const LANDING_SERVICES: LandingServiceCard[] = [
  {
    id: "business-cards",
    emoji: "🃏",
    name: "Business Cards",
    description: "Premium matte, gloss & spot-UV finish. Same-day available.",
    price: "From ₹149",
    scrollTo: "quote-form",
  },
  {
    id: "letterheads",
    emoji: "📄",
    name: "Letterheads",
    description: "Corporate letterheads with your brand, in bulk.",
    price: "From ₹299",
    scrollTo: "quote-form",
  },
  {
    id: "brochures",
    emoji: "📋",
    name: "Brochures & Leaflets",
    description: "Trifold, bifold, A4 brochures for any campaign.",
    price: "From ₹499",
    scrollTo: "quote-form",
  },
  {
    id: "bill-books",
    emoji: "📒",
    name: "Bill Books",
    description: "Carbonless GST bill books, numbered and personalised.",
    price: "From ₹250",
    scrollTo: "quote-form",
  },
  {
    id: "booklets",
    emoji: "📚",
    name: "Booklets & Catalogues",
    description: "Full-colour catalogues, product books, menus.",
    price: "From ₹799",
    scrollTo: "quote-form",
  },
  {
    id: "envelopes",
    emoji: "✉️",
    name: "Envelopes",
    description: "Branded envelopes with your logo and address.",
    price: "From ₹199",
    scrollTo: "quote-form",
  },
  {
    id: "screen-printing",
    emoji: "👕",
    name: "Screen Printing",
    description: "Fabric and paper screen printing, bulk t-shirts welcome.",
    price: "Custom quote",
    scrollTo: "quote-form",
  },
  {
    id: "wedding-cards",
    emoji: "💌",
    name: "Wedding Cards",
    description: "Customised wedding invitations in every tradition.",
    price: "From ₹8 per card",
    isWedding: true,
    isNew: true,
    scrollTo: "wedding-cards",
  },
];

export interface WeddingCategory {
  id: string;
  emoji: string;
  name: string;
  description: string;
  borderColor: string;
}

export const WEDDING_CATEGORIES: WeddingCategory[] = [
  { id: "hindu", emoji: "🪷", name: "Traditional Hindu", description: "Shubh Muhurat designs with floral motifs", borderColor: "var(--color-wedding-red)" },
  { id: "christian", emoji: "✝️", name: "Christian Wedding", description: "Elegant church & garden themes", borderColor: "rgb(30, 64, 175)" },
  { id: "muslim", emoji: "☪️", name: "Muslim Wedding", description: "Nikah & Walima cards in Arabic calligraphy", borderColor: "rgb(5, 150, 105)" },
  { id: "modern", emoji: "🌸", name: "Modern Minimalist", description: "Clean typography, no-fuss design", borderColor: "var(--color-gold)" },
  { id: "floral", emoji: "💐", name: "Floral Premium", description: "Full-bleed botanical illustration cards", borderColor: "rgb(219, 39, 119)" },
  { id: "corporate", emoji: "🎊", name: "Corporate Events", description: "Office events, product launches, conferences", borderColor: "var(--color-navy)" },
];

export interface Testimonial {
  quote: string;
  name: string;
  service: string;
  initials: string;
}

export const LANDING_TESTIMONIALS: Testimonial[] = [
  {
    quote: "We have relied on Super Printers for many years for all our printing needs. Exceptional quality and their team is always a pleasure to work with.",
    name: "Rajesh M.",
    service: "Wipro",
    initials: "RM",
  },
  {
    quote: "I was genuinely surprised by the exceptional quality. Received my business cards in just 2 days. Will order again without hesitation.",
    name: "Priya S.",
    service: "Business Cards · 2023",
    initials: "PS",
  },
  {
    quote: "The quality of my brochures exceeded all expectations. Incredible value for money. Highly recommend to any business in Chennai.",
    name: "Karthik R.",
    service: "Brochures",
    initials: "KR",
  },
  {
    quote: "Beautiful wedding cards — exactly what we wanted. The team understood our vision and the final result made our guests stop and admire.",
    name: "Meena & Vijay",
    service: "Wedding Cards",
    initials: "MV",
  },
  {
    quote: "Fast, affordable, professional. Our bill books and letterheads look more premium than what we were getting from our previous printer at double the cost.",
    name: "Suresh P.",
    service: "Bill Books",
    initials: "SP",
  },
  {
    quote: "Ordered 5,000 brochures for our product launch. Delivered on time, colours were spot on. Super Printers is our permanent printing partner now.",
    name: "Ananya T.",
    service: "Brochures",
    initials: "AT",
  },
];

export interface FAQItem {
  q: string;
  a: string;
}

export const LANDING_FAQ: FAQItem[] = [
  {
    q: "How long does printing take?",
    a: "Standard orders are ready in 48–72 hours. Business cards can be done same-day for urgent requirements. Wedding cards take 3–5 working days due to customisation. We'll always confirm your timeline when you place the order.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order is 50 cards for business cards, 100 copies for brochures and letterheads, and 50 cards for wedding invitations. For bill books, the minimum is 25 sets. We welcome bulk orders with significant discounts.",
  },
  {
    q: "Do you offer design services?",
    a: "Yes! We have an in-house design team. Share your logo and preferences and we'll create a proof within 24 hours — completely free for orders over ₹1,000. Standalone design starting from ₹299.",
  },
  {
    q: "Can I see a proof before you print?",
    a: "Absolutely. We always send a digital PDF proof for approval before printing any order. Nothing goes to print without your written sign-off.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept PDF (preferred), AI, EPS, CDR, PSD, PNG, and JPEG. For best results, send PDF in CMYK colour mode at 300 DPI. Our team will check your files and flag any issues before printing.",
  },
  {
    q: "Do you deliver or only offer pickup?",
    a: "We offer pickup from our Pallavaram workshop. For bulk orders (5,000+ pieces) or orders over ₹5,000, we can arrange delivery within Chennai. Contact us for delivery charges.",
  },
  {
    q: "Can you match Pantone or specific brand colours?",
    a: "Yes. For offset printing we support Pantone matching. For digital printing we work in CMYK and can get very close to most brand colours. Share your brand guide or hex/Pantone codes with your order.",
  },
  {
    q: "Do you print wedding cards in Tamil?",
    a: "Yes — we print in Tamil, English, or bilingual (Tamil + English). We support all Indian language scripts. Bring your content or we can typeset it for you.",
  },
];

export interface PortfolioItem {
  id: string;
  img: string;
  label: string;
  category: string;
}

export const PORTFOLIO_CATEGORIES = ["All", "Business Cards", "Brochures", "Bill Books", "Wedding Cards", "Letterheads", "Catalogues"] as const;

export const LANDING_PORTFOLIO: PortfolioItem[] = [
  { id: "1", img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600", label: "Business Cards", category: "Business Cards" },
  { id: "2", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600", label: "Business Cards Luxury", category: "Business Cards" },
  { id: "3", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600", label: "Brochure Trifold", category: "Brochures" },
  { id: "4", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600", label: "Letterhead Desk", category: "Letterheads" },
  { id: "5", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600", label: "Printing Press", category: "Catalogues" },
  { id: "6", img: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600", label: "Bill Books", category: "Bill Books" },
  { id: "7", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600", label: "Wedding Card Gold", category: "Wedding Cards" },
  { id: "8", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600", label: "Wedding Invitation", category: "Wedding Cards" },
  { id: "9", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600", label: "Catalogue", category: "Catalogues" },
  { id: "10", img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600", label: "Envelope", category: "Letterheads" },
  { id: "11", img: "https://images.unsplash.com/photo-1558618047-f4f37ee1d6d0?w=600", label: "Screen Printing", category: "Brochures" },
  { id: "12", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", label: "Print Colourful", category: "Catalogues" },
];

export interface TimelineMilestone {
  year: string;
  text: string;
}

export const TIMELINE: TimelineMilestone[] = [
  { year: "1990", text: "Founded by N. Baranidharan in Pallavaram" },
  { year: "1998", text: "First offset printing press installed" },
  { year: "2005", text: "Expanded to digital printing & screen printing" },
  { year: "2015", text: "Serving 5,000+ clients across Chennai" },
  { year: "2020", text: "Online ordering launched" },
  { year: "2025", text: "35 years · 10,000+ clients · 50+ products" },
];

export const QUOTE_PRODUCT_OPTIONS = [
  "Business Cards",
  "Letterheads",
  "Brochures",
  "Bill Books",
  "Booklets",
  "Catalogues",
  "Envelopes",
  "Screen Printing",
  "Wedding Cards",
  "Other",
];

export const QUOTE_QUANTITY_OPTIONS = [
  "50–100",
  "100–500",
  "500–1000",
  "1000–5000",
  "5000+",
  "Custom",
];

export const QUOTE_FINISH_OPTIONS = [
  "Standard 90GSM",
  "Glossy",
  "Matte",
  "Premium 300GSM",
  "Spot UV",
  "Not Sure – Recommend for Me",
];
