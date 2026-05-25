/** FAQ items for FAQPage schema and optional UI on service pages */

export interface ServiceFaqItem {
  name: string;
  acceptedAnswer: { text: string };
}

const DEFAULT_FAQS: ServiceFaqItem[] = [
  {
    name: "What is the minimum order quantity?",
    acceptedAnswer: { text: "Minimum order varies by product. Visiting cards and letterheads can start from 100 pcs; wedding cards from 100; brochures and offset printing from 500. Contact us on WhatsApp for exact minimums." },
  },
  {
    name: "How long does printing take?",
    acceptedAnswer: { text: "We deliver within 24 hours. WhatsApp us your requirements and we'll confirm the timeline." },
  },
  {
    name: "Do you provide design support?",
    acceptedAnswer: { text: "Yes. We offer free design assistance for wedding cards and can help with layout and file preparation. Send your ideas or reference via WhatsApp and we'll send a proof." },
  },
  {
    name: "Do you deliver across Chennai and Tamil Nadu?",
    acceptedAnswer: { text: "Yes. We deliver throughout Chennai and Tamil Nadu. You can also pick up from our press at No. 8, Saraswathy Colony, Pallavaram." },
  },
];

/** Per-service FAQ overrides (optional). Keys are service slugs. */
const BY_SERVICE: Record<string, ServiceFaqItem[]> = {
  "visiting-cards": [
    { name: "What finishes do you offer for visiting cards?", acceptedAnswer: { text: "We offer gloss lamination, matt lamination, spot UV, gold/silver foil, and PVC cards. Standard 300 GSM art card with gloss or matt is our most popular." } },
    { name: "What is the minimum order for visiting cards?", acceptedAnswer: { text: "Minimum order is 100 cards. We offer bulk discounts for 500+ and 1000+ pieces." } },
    { name: "Can I get same-day visiting cards?", acceptedAnswer: { text: "Yes, for standard designs ordered before 12 PM we can deliver same day. Contact us on WhatsApp to confirm." } },
  ],
  "wedding-invitations": [
    { name: "Do you print wedding cards in Tamil?", acceptedAnswer: { text: "Yes. We print in Tamil, English, Hindi, and bilingual. Send your text and we'll typeset it." } },
    { name: "What is the minimum order for wedding cards?", acceptedAnswer: { text: "Minimum 100 cards. We offer various designs—Hindu, Christian, Muslim, and modern—with free design proof." } },
    { name: "How long do wedding cards take?", acceptedAnswer: { text: "Typically 3–5 working days after proof approval. Rush orders may be possible—ask on WhatsApp." } },
  ],
  "bill-books": [
    { name: "Are your bill books GST compliant?", acceptedAnswer: { text: "Yes. We supply GST-ready bill books with carbonless (NCR) sets, numbered pages, and formats suitable for invoicing." } },
    { name: "What sizes do you offer?", acceptedAnswer: { text: "We offer standard sizes including single copy and duplicate (2-part) and triplicate (3-part) NCR sets. Custom sizes can be quoted." } },
    { name: "What is the minimum order for bill books?", acceptedAnswer: { text: "Minimum order is 25 NCR sets. Larger runs unlock per-book discounts — WhatsApp us your quantity for a quote." } },
  ],
  "brochure-printing": [
    { name: "What brochure formats do you print?", acceptedAnswer: { text: "Tri-fold and bi-fold brochures are most common. We also print A4 and A5 single-sheet flyers, multi-page company brochures, and accordion folds. Paper from 130–170 GSM." } },
    { name: "What is the minimum brochure order?", acceptedAnswer: { text: "Minimum 100 pieces. Brochures are typically printed in batches of 500 or 1,000 for the best per-piece price." } },
    { name: "How long does brochure printing take?", acceptedAnswer: { text: "Standard turnaround is 24 hours after proof approval for runs up to a few thousand. Larger jobs may take 2–3 days." } },
  ],
  "banner-printing": [
    { name: "What banner materials do you offer?", acceptedAnswer: { text: "Frontlit and backlit flex (standard for outdoor signs), star/cast vinyl (weather-proof outdoor), photographic canvas (premium), and roll-up standees (events). All printed in-house." } },
    { name: "How is banner pricing calculated?", acceptedAnswer: { text: "Banners are priced per square foot. Flex starts at the lowest rate; vinyl and canvas cost more. WhatsApp us the size in feet and the material and we'll quote in 30 minutes." } },
    { name: "Can I get a banner the same day?", acceptedAnswer: { text: "Yes, for most flex banners ordered before midday we can deliver the same day. Vinyl and canvas usually need 1–2 days. Roll-up standees need 2–3 days." } },
  ],
};

export function getServiceFaqs(serviceSlug: string): ServiceFaqItem[] {
  return BY_SERVICE[serviceSlug] ?? DEFAULT_FAQS;
}

export function getFaqPageSchema(serviceSlug: string) {
  const faqs = getServiceFaqs(serviceSlug);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.name,
      acceptedAnswer: { "@type": "Answer", text: q.acceptedAnswer.text },
    })),
  };
}
