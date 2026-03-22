/* V2 — central data for Super Printers site */
import { IMAGE_PATHS } from "./imagePaths";

export const MARQUEE_ITEMS = [
  "📞 +91 98401 99878",
  "Est. 1990 — 35 Years of Quality",
  "🎨 Free Design Proof on Every Order",
  "Wedding Cards from ₹5/card",
  "⭐ 4.8 on Google — 147 Reviews",
  "Visiting Cards · Brochures · Banners",
  "T-Shirt Printing · Rubber Stamps · Stickers",
  "⚡ Orders Ready in 24 Hours",
  "🚚 Pickup or Delivery Across Chennai",
  "10,000+ Happy Customers",
];

export const HERO = {
  microLabel: "PALLAVARAM'S MOST TRUSTED SINCE 1990",
  h1: "Professional Printing\nin Chennai.",
  accent: "Wedding Cards · Business Cards · Brochures · More",
  body: "Proof shared before every print run — no surprises, no reprints.\nOrders ready within 24 hours of approval, with pickup or delivery across Chennai.\nWhatsApp us during business hours for a quote in 30 minutes.",
  ctaPrimary: "Get Instant Quote",
  ctaSecondary: "Chat on WhatsApp",
  badges: [
    { icon: "⭐", label: "4.8 Google Rating" },
    { icon: "✅", label: "GST Registered" },
    { icon: "🏆", label: "35 Years Experience" },
  ],
};

export const HERO_PRODUCTS = [
  { name: "Wedding Cards", img: IMAGE_PATHS.hero.wedding },
  { name: "Visiting Cards", img: IMAGE_PATHS.hero.visitingCards },
  { name: "Brochures", img: IMAGE_PATHS.hero.brochures },
  { name: "Bill Books", img: IMAGE_PATHS.hero.billBooks },
];

export const SOCIAL_PROOF_STATS = [
  { value: "35+", label: "Years in Business" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "4.8 ⭐", label: "Google Rating" },
  { value: "147", label: "Reviews" },
  { value: "Fast", label: "Delivery" },
];

export const PRODUCT_TABS = ["All", "Corporate", "Personal", "Events"] as const;

export const PRODUCTS = [
  { name: "Visiting Cards", category: "Corporate", img: IMAGE_PATHS.visitingCard, delivery: "24hr" },
  { name: "Letterheads", category: "Corporate", img: IMAGE_PATHS.letterhead, delivery: "24hr" },
  { name: "Brochures", category: "Corporate", img: IMAGE_PATHS.brochures, delivery: "24hr" },
  { name: "Bill Books", category: "Corporate", img: IMAGE_PATHS.billBook, delivery: "24hr" },
  { name: "Wedding Cards", category: "Events", img: IMAGE_PATHS.hero.wedding, delivery: "24hr" },
  { name: "Pamphlets", category: "Corporate", img: IMAGE_PATHS.pamphlet, delivery: "24hr" },
  { name: "Banners", category: "Events", img: IMAGE_PATHS.banner, delivery: "24hr" },
  { name: "Stickers", category: "Personal", img: IMAGE_PATHS.stickerSheet, delivery: "24hr" },
  { name: "Catalogues", category: "Corporate", img: IMAGE_PATHS.gallery("c1"), delivery: "24hr" },
  { name: "T-Shirts", category: "Personal", img: IMAGE_PATHS.tshirt, delivery: "24hr" },
  { name: "Rubber Stamps", category: "Corporate", img: IMAGE_PATHS.rubberStamp, delivery: "24hr" },
  { name: "PVC ID Cards", category: "Corporate", img: IMAGE_PATHS.gallery("co6"), delivery: "24hr" },
  { name: "Screen Printing", category: "Personal", img: IMAGE_PATHS.gallery("p3"), delivery: "24hr" },
  { name: "Offset Printing", category: "Corporate", img: IMAGE_PATHS.offsetPress, delivery: "24hr" },
];

export const WEDDING_IMAGES = [
  IMAGE_PATHS.gallery("w1"),
  IMAGE_PATHS.gallery("w2"),
  IMAGE_PATHS.gallery("w3"),
];

export const WEDDING_FEATURES = [
  "Hindu · Christian · Muslim · Modern designs",
  "Tamil, English & Bilingual available",
  "Free design proof within 24 hours",
  "Fast turnaround",
  "Minimum order: 100 cards",
  "Customised envelopes available",
];

export const WHY_ITEMS = [
  { icon: "🏆", title: "35 Years of Craft", desc: "Founded in 1990 by N. Baranidharan. Every order is quality-checked personally. Three generations of Chennai families trust us." },
  { icon: "⚡", title: "24-Hour Turnaround", desc: "Visiting cards, brochures and bill books ready within 24 hours of proof approval. Same-day printing available for urgent orders." },
  { icon: "🎨", title: "Free Design & Proof", desc: "Our in-house designer creates your artwork free of cost. We share a WhatsApp proof before printing a single sheet." },
  { icon: "💰", title: "Factory-Direct Pricing", desc: "No middlemen, no retail markup. You pay press price directly. Cheaper than most card shops in Chennai." },
  { icon: "🏢", title: "Trusted by Corporates", desc: "Wipro, TTK Healthcare, Reliance Fujitec and 10,000+ clients trust us for their regular print needs." },
  { icon: "💬", title: "WhatsApp Ordering", desc: "Send your requirements on WhatsApp. Get a quote in 30 minutes, approve the proof, and your order is ready. No shop visit needed." },
];

export const PROCESS_STEPS = [
  { step: 1, title: "💬 WhatsApp Us", time: "2 minutes", desc: "Send your requirements on WhatsApp. Include quantity, size, and any design files." },
  { step: 2, title: "🎨 Free Design Proof", time: "Within 24 hours", desc: "Our designer creates your proof. Free revisions until you're 100% satisfied." },
  { step: 3, title: "✅ You Approve", time: "Same day", desc: "Review the digital proof and give us the green light to start printing." },
  { step: 4, title: "📦 Print & Deliver", time: "24 hours", desc: "Your order is printed, quality-checked, and ready for pickup or delivery within 24 hours." },
];

// Avatar images: local public/images/avatars/01.jpg … 06.jpg (gender-matched to testimonials).
export const TESTIMONIALS = [
  { name: "Priya Rajan", location: "Tambaram", product: "Wedding Cards", rating: 5, text: "Absolutely beautiful wedding cards. The gold foil finish was stunning and all 500 cards were delivered on time. Highly recommended!", avatar: IMAGE_PATHS.avatar(1) },
  { name: "Karthik S.", location: "Chromepet", product: "Visiting Cards", rating: 5, text: "Best visiting cards I've ever had printed. The spot UV finish looks premium. Got 500 cards in just 2 days!", avatar: IMAGE_PATHS.avatar(2) },
  { name: "Lakshmi Devi", location: "Pallavaram", product: "Brochures", rating: 5, text: "We've been using Super Printers for our company brochures for 10 years. Consistent quality every single time.", avatar: IMAGE_PATHS.avatar(3) },
  { name: "Mohammed Farooq", location: "Tambaram", product: "Wedding Cards", rating: 5, text: "Printed 1000 nikah invitation cards. Beautiful design, on-time delivery, and very reasonable pricing.", avatar: IMAGE_PATHS.avatar(4) },
  { name: "Anand Kumar", location: "Perungalathur", product: "Bill Books", rating: 5, text: "Quick turnaround on bill books. Quality paper and clear printing. Our go-to printer for all business needs.", avatar: IMAGE_PATHS.avatar(5) },
  { name: "Deepa M.", location: "Chrompet", product: "Letterheads", rating: 5, text: "Professional letterheads with perfect colour matching. The team is very helpful and responsive on WhatsApp.", avatar: IMAGE_PATHS.avatar(6) },
];

export const FAQ_ITEMS = [
  { q: "What is the minimum order for visiting cards?", a: "We print visiting cards from just 100 cards. Available in Gloss, Matt, Spot UV, Velvet, Gold Foil and more. WhatsApp us for pricing." },
  { q: "How long does printing take?", a: "Most orders are ready within 24 hours of proof approval. Wedding cards take 48–72 hours. Urgent same-day printing is available — just ask." },
  { q: "Do you offer free design?", a: "Yes! Wedding card design is always free. For visiting cards and other products we offer design at a small fee, or you can send your own print-ready file." },
  { q: "Can I see a proof before printing?", a: "Absolutely — we share a digital WhatsApp proof before printing every single order. Unlimited revisions until you are 100% happy. No extra charge." },
  { q: "Do you deliver outside Pallavaram?", a: "Yes. We deliver across all of Chennai — Tambaram, Chromepet, Velachery, Adyar, Guindy and more. Pickup from our Pallavaram shop is always free." },
  { q: "How do I order from outside Chennai?", a: "Simply WhatsApp us your requirements and design files. We send a digital proof, you approve it, and we courier your order anywhere in Tamil Nadu." },
  { q: "Do you offer bulk discounts?", a: "Yes! The more you print, the lower the cost per card. WhatsApp us your quantity for an instant custom quote." },
  { q: "Can you print in Tamil?", a: "Absolutely. We specialise in Tamil, English, Hindi, Telugu and bilingual formats. We are the go-to printer for Tamil wedding invitations in South Chennai." },
  { q: "How is Super Printers cheaper than other shops?", a: "We own our press and print everything in-house — no outsourcing, no middlemen. You pay factory-direct price. That is why we are cheaper than most card shops in Chennai." },
  { q: "What areas do you serve?", a: "We serve all of Chennai and Tamil Nadu. Our shop is in Pallavaram — easily accessible from Tambaram, Chromepet, Velachery, Guindy, Adyar, Nanganallur and Medavakkam." },
];

export const PORTFOLIO_IMAGES = [
  { src: IMAGE_PATHS.gallery("w1"), alt: "Wedding invitation cards", cat: "Wedding" },
  { src: IMAGE_PATHS.gallery("v1"), alt: "Premium visiting cards", cat: "Visiting Cards" },
  { src: IMAGE_PATHS.gallery("b1"), alt: "Corporate brochures", cat: "Brochures" },
  { src: IMAGE_PATHS.gallery("p1"), alt: "Offset printing press", cat: "Printing" },
  { src: IMAGE_PATHS.gallery("w2"), alt: "Wedding invitation suite", cat: "Wedding" },
  { src: IMAGE_PATHS.gallery("w3"), alt: "Floral wedding card", cat: "Wedding" },
  { src: IMAGE_PATHS.gallery("b3"), alt: "Pamphlet design", cat: "Brochures" },
  { src: IMAGE_PATHS.gallery("bb1"), alt: "Bill books and registers", cat: "Corporate" },
];

export const TIMELINE = [
  { year: "1990", title: "Founded", desc: "N. Baranidharan opens Super Printers in Pallavaram with a single offset press and a commitment to quality." },
  { year: "2000", title: "Digital Expansion", desc: "Added digital printing to serve the growing corporate stationery demand across Chennai." },
  { year: "2010", title: "Wedding Specialist", desc: "Became Pallavaram's most trusted wedding card printer. Introduced premium foil, velvet, and spot UV finishes." },
  { year: "2020", title: "WhatsApp Ordering", desc: "Launched WhatsApp-first ordering for faster quotes, digital proofs, and contactless delivery." },
  { year: "2026", title: "10,000+ Clients", desc: "Proudly serving 10,000+ happy customers. Trusted by Wipro, TTK, Reliance and hundreds of Chennai businesses." },
];

export const SERVICE_OPTIONS = [
  "Wedding Cards", "Visiting Cards", "Brochures", "Pamphlets",
  "Bill Books", "Letterheads", "Catalogues", "Other",
];
