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
    acceptedAnswer: { text: "Standard turnaround is 48 hours for visiting cards and brochures. Wedding cards and bulk offset jobs take 3–7 days. Urgent same-day printing is available for select products—ask us on WhatsApp." },
  },
  {
    name: "Do you provide design support?",
    acceptedAnswer: { text: "Yes. We offer free design assistance for wedding cards and can help with layout and file preparation. Send your ideas or reference via WhatsApp and we'll send a proof." },
  },
  {
    name: "Do you deliver across Chennai and Tamil Nadu?",
    acceptedAnswer: { text: "Yes. We deliver throughout Chennai and Tamil Nadu. You can also pick up from our press at No. 6, Saraswathy Colony, Pallavaram." },
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
