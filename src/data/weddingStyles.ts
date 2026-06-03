/**
 * Wedding-card style/tradition landing pages.
 *
 * Each entry is a dedicated /<slug> landing page targeting a distinct
 * sub-query that Chennai competitors (King of Cards, Rayon) rank for
 * — "hindu wedding cards chennai", "muslim nikah invitation chennai", etc.
 * Content is genuinely unique per tradition (conventions, motifs, language)
 * so the cluster reads as real landing pages, not templated doorways.
 *
 * Rendered by WeddingStylePage.tsx; routed via WEDDING_STYLE_SLUGS in routes.tsx.
 */

export interface WeddingStylePage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  serviceType: string;
  /** 2 intro paragraphs of unique copy. */
  intro: string[];
  /** Tradition-specific selling points. */
  highlights: { h: string; p: string }[];
  /** Gallery image ids (from data/gallery.ts) most representative of this style. */
  galleryImageIds: string[];
  faqs: { q: string; a: string }[];
}

export const WEDDING_STYLE_PAGES: WeddingStylePage[] = [
  {
    slug: "hindu-wedding-cards-chennai",
    title: "Hindu Wedding Cards Chennai | Tamil Designs from ₹5 | Super Printers",
    metaDescription:
      "Hindu wedding invitation cards in Chennai from ₹5/card. Traditional Tamil and bilingual designs — Ganesha, kalash and muhurtham layouts. Free design proof, ready in 24–48 hours.",
    h1: "Hindu Wedding Cards in Chennai",
    heroSubtitle: "Traditional Tamil & bilingual Hindu invitations — from ₹5/card, free design, ready in 24–48 hours.",
    serviceType: "Hindu wedding invitation card printing",
    intro: [
      "Hindu weddings in Chennai carry a specific visual language, and we have printed it for three generations since 1990. From the auspicious Ganesha invocation and the kalash motif to the maroon-and-gold palette families expect, our in-house designers lay out every card the traditional way — with the muhurtham date and time, the reception details, and both families' names typeset correctly.",
      "We print single-language Tamil cards, English cards, and the side-by-side Tamil-English bilingual format that most Chennai families prefer. Whether it is a Brahmin ceremony with a long ritual sequence or a simpler register-and-reception card, you approve a free WhatsApp proof before a single card is printed.",
    ],
    highlights: [
      { h: "Tamil typesetting included free", p: "Correct Tamil fonts, names and muhurtham details — proofed on WhatsApp. No extra typesetting charge, unlike most card shops." },
      { h: "Traditional motifs & palettes", p: "Ganesha, kalash, temple-border and paisley motifs in maroon, gold and cream — or a modern minimalist take if you prefer." },
      { h: "Multi-insert sets", p: "Main invitation plus reception, mehndi/sangeet and RSVP inserts, printed as a matching suite on 300–350 GSM card." },
    ],
    galleryImageIds: ["w1", "w2", "w5"],
    faqs: [
      { q: "Do you print Hindu wedding cards in Tamil?", a: "Yes — Tamil, English, and side-by-side Tamil-English bilingual. We typeset names, muhurtham date/time and venue in Tamil at no extra cost and send a WhatsApp proof for your approval." },
      { q: "Can you include Ganesha and traditional motifs?", a: "Yes. Ganesha invocation, kalash, temple borders and paisley motifs are all standard. Share your theme on WhatsApp and our designer creates the layout free." },
      { q: "How much do Hindu wedding cards cost in Chennai?", a: "From ₹5 per card for standard matt-laminated designs. Velvet and gold-foil finishes cost a little more. WhatsApp us your quantity and finish for an exact quote in 30 minutes." },
    ],
  },
  {
    slug: "christian-wedding-cards-chennai",
    title: "Christian Wedding Cards Chennai | Church Invitations | Super Printers",
    metaDescription:
      "Christian wedding invitation cards in Chennai from ₹5/card. Cross, floral and scripture designs for church weddings and receptions, in English or bilingual. Free proof, 24–48 hour turnaround.",
    h1: "Christian Wedding Cards in Chennai",
    heroSubtitle: "Church wedding & reception invitations — cross and floral designs, from ₹5/card, ready in 24–48 hours.",
    serviceType: "Christian wedding invitation card printing",
    intro: [
      "Christian wedding invitations follow their own conventions, and we print them the way Chennai congregations expect — with a cross or dove motif, a scripture line of your choosing, and clean, elegant typography for the church ceremony and the reception that follows.",
      "We handle Catholic, CSI, Pentecostal and inter-denominational formats, in English or Tamil-English bilingual. Soft pastels and floral borders or a crisp modern monochrome — you choose, approve a free proof on WhatsApp, and collect or have the cards delivered across Chennai.",
    ],
    highlights: [
      { h: "Scripture & motif of your choice", p: "Add a Bible verse, cross, dove or floral motif. We set it cleanly alongside the ceremony and reception details." },
      { h: "Church + reception layout", p: "Separate or combined church-and-reception cards, with venue and time laid out clearly for both events." },
      { h: "English or bilingual", p: "Printed in English, or Tamil-English side by side for mixed-language family and guests." },
    ],
    galleryImageIds: ["w4", "w3", "w7"],
    faqs: [
      { q: "Can you add a Bible verse to the card?", a: "Yes — send the verse and reference and we will set it in the design free. Cross, dove and floral motifs are all available." },
      { q: "Do you print both church and reception details?", a: "Yes, on a single combined card or as separate matching inserts — whichever you prefer. We confirm the layout on a free WhatsApp proof." },
      { q: "How quickly can I get Christian wedding cards in Chennai?", a: "Standard cards are ready in 24–48 hours after you approve the proof. Premium foil or laser-cut finishes may take a little longer." },
    ],
  },
  {
    slug: "muslim-wedding-cards-chennai",
    title: "Muslim Wedding & Nikah Invitation Cards Chennai | Super Printers",
    metaDescription:
      "Muslim wedding and Nikah invitation cards in Chennai from ₹5/card. Crescent, geometric and calligraphy designs, in English, Tamil or Urdu-style typesetting. Free proof, 24–48 hour turnaround.",
    h1: "Muslim Wedding & Nikah Invitation Cards in Chennai",
    heroSubtitle: "Nikah, walima & reception invitations — crescent and calligraphy designs, from ₹5/card, ready in 24–48 hours.",
    serviceType: "Muslim Nikah wedding invitation card printing",
    intro: [
      "Muslim wedding invitations have a distinct aesthetic, and we print Nikah, walima and reception cards for families across Chennai with the right motifs — crescent and star, geometric arabesque patterns, and calligraphy-style headings — set in green-and-gold or understated modern palettes.",
      "We typeset in English, Tamil, and Urdu-style scripts on request, and lay out the Nikah and walima details, the Bismillah heading and family names exactly as you want them. You always approve a free WhatsApp proof before printing.",
    ],
    highlights: [
      { h: "Nikah & walima formats", p: "Separate or combined Nikah and walima cards, with venue and timing for each event laid out clearly." },
      { h: "Calligraphy & arabesque motifs", p: "Bismillah headings, crescent-and-star, and geometric arabesque borders in green, gold or modern neutrals." },
      { h: "English, Tamil or Urdu-style", p: "Multi-script typesetting handled in-house and proofed before print — no extra charge." },
    ],
    galleryImageIds: ["w5", "w6", "w8"],
    faqs: [
      { q: "Do you print Nikah and walima invitations separately?", a: "Yes — as separate matching cards or as one combined invitation. Tell us the events and we lay out each with its own venue and timing." },
      { q: "Can you typeset Arabic/Urdu-style headings?", a: "Yes, we add Bismillah and calligraphy-style headings and can typeset in English, Tamil or Urdu-style scripts. Everything is confirmed on a free proof." },
      { q: "What do Muslim wedding cards cost in Chennai?", a: "From ₹5 per card for standard designs; foil and premium finishes cost more. WhatsApp your quantity and design for a 30-minute quote." },
    ],
  },
  {
    slug: "tamil-wedding-cards-chennai",
    title: "Tamil Wedding Cards Chennai | Bilingual Invitations | Super Printers",
    metaDescription:
      "Tamil wedding invitation cards in Chennai from ₹5/card. Single-language Tamil or side-by-side Tamil-English, typeset free by our in-house team. Proof before print, ready in 24–48 hours.",
    h1: "Tamil Wedding Cards in Chennai",
    heroSubtitle: "Single-language Tamil or Tamil-English bilingual cards — free typesetting, from ₹5/card, ready in 24–48 hours.",
    serviceType: "Tamil wedding invitation card printing",
    intro: [
      "Getting the Tamil right is where most card shops fall down — wrong fonts, broken conjuncts, mis-set names. We have typeset Tamil wedding invitations since 1990, so muhurtham details, family names and venue read correctly, whether you want a pure-Tamil card or the side-by-side Tamil-English format Chennai families prefer.",
      "All Tamil typesetting is included free, and you approve a WhatsApp proof before printing so you can check every character. Hindu, Christian or Muslim layouts — the Tamil is set the same careful way.",
    ],
    highlights: [
      { h: "Free, correct Tamil typesetting", p: "Proper Tamil fonts and conjuncts, names and muhurtham details set right — proofed before print, at no extra cost." },
      { h: "Bilingual Tamil-English", p: "Side-by-side layout so every guest can read the invitation, set cleanly without crowding the design." },
      { h: "Any tradition", p: "Tamil set for Hindu, Christian or Muslim card formats — same careful typesetting across all of them." },
    ],
    galleryImageIds: ["w1", "w8", "w2"],
    faqs: [
      { q: "Is Tamil typesetting free?", a: "Yes. We typeset Tamil names, muhurtham details and venue at no extra cost and send a WhatsApp proof so you can verify every character before printing." },
      { q: "Can I get a side-by-side Tamil and English card?", a: "Yes — the bilingual Tamil-English layout is our most popular format. We balance both languages cleanly within the design." },
      { q: "How fast are Tamil wedding cards printed in Chennai?", a: "Standard cards are ready in 24–48 hours after proof approval; premium foil/laser-cut finishes may take a little longer." },
    ],
  },
  {
    slug: "foil-wedding-cards-chennai",
    title: "Foil Wedding Cards Chennai | Gold & Silver Foil Invitations | Super Printers",
    metaDescription:
      "Gold, silver and rose-gold foil wedding invitation cards in Chennai. Real foil-pressed names, motifs and borders on 300–350 GSM card. Free design proof — WhatsApp our Pallavaram press for a quote.",
    h1: "Foil Wedding Cards in Chennai",
    heroSubtitle: "Gold & silver foil-pressed invitations — premium metallic finishes, free design, proof before print.",
    serviceType: "Gold and silver foil wedding invitation card printing",
    intro: [
      "Foil work is what turns a good wedding card into a premium one. We use a genuine foil-stamping press — real metallic foil heat-pressed onto the card, not a printed gold ink that looks flat. The result is a crisp, reflective finish on the couple's names, the muhurtham line, motifs and borders.",
      "Choose gold, silver or rose-gold foil, on 300–350 GSM matt, velvet or art card. Foil pairs beautifully with velvet lamination and laser-cut work, and we proof the exact foil placement on WhatsApp before pressing a single card.",
    ],
    highlights: [
      { h: "Real foil press, not printed gold", p: "Heat-pressed metallic foil for a true reflective finish — sharper and more premium than gold-ink printing." },
      { h: "Gold, silver or rose-gold", p: "Pick the foil colour to match your theme; foil the names, motifs, border or all three." },
      { h: "Pairs with velvet & laser-cut", p: "Combine foil with velvet lamination or laser-cut borders for a layered premium card." },
    ],
    galleryImageIds: ["w5", "w1", "w2"],
    faqs: [
      { q: "Is the foil real or printed?", a: "Real foil — heat-pressed metallic foil, not printed gold ink. It gives a crisp reflective finish that printed gold can't match." },
      { q: "What foil colours can I choose?", a: "Gold, silver and rose-gold are standard. We can foil the names, muhurtham line, motifs and borders — tell us what to highlight on WhatsApp." },
      { q: "Do foil wedding cards cost more?", a: "Yes, a little — foil is priced per design because of the press setup. Send your quantity and design on WhatsApp for an exact rate; standard cards still start from ₹5." },
    ],
  },
  {
    slug: "budget-wedding-cards-chennai",
    title: "Budget Wedding Cards Chennai | From ₹5/card | Cheapest Printing | Super Printers",
    metaDescription:
      "Cheapest wedding cards in Chennai from ₹5 per card — direct from our Pallavaram press, no middlemen. Free design, 100-card minimum, ready in 24–48 hours. WhatsApp for the lowest rate.",
    h1: "Budget Wedding Cards in Chennai",
    heroSubtitle: "From ₹5/card, direct from press — no retail markup. Free design, 100-card minimum, ready in 24–48 hours.",
    serviceType: "Budget wedding invitation card printing",
    intro: [
      "A beautiful wedding card does not have to be expensive. Because we are the press — not a reseller — your cards come factory-direct from ₹5 each, without the retail markup card shops add. The same design, paper and finish, for less.",
      "Even at the budget end you still get free in-house design, a WhatsApp proof before printing, and a low 100-card minimum so you are not forced to over-order. Hindu, Christian, Muslim and Tamil designs all start at the same honest price.",
    ],
    highlights: [
      { h: "From ₹5 per card", p: "Factory-direct pricing — we print it ourselves, so you skip the retail markup other shops add." },
      { h: "Free design, no hidden fees", p: "In-house design and unlimited revisions at zero cost. No plate or file charges." },
      { h: "Low 100-card minimum", p: "Order only what you need — no forced 200–500 minimum like most card shops." },
    ],
    galleryImageIds: ["w3", "w7", "w4"],
    faqs: [
      { q: "What is the cheapest wedding card in Chennai?", a: "Ours start at ₹5 per card, factory-direct from our Pallavaram press. WhatsApp your quantity for the exact lowest rate." },
      { q: "How much for 100 budget wedding cards?", a: "From around ₹500 for 100 standard matt-laminated cards (₹5 each). Final price depends on size and finish — message us for a 30-minute quote." },
      { q: "Is the design still free on budget cards?", a: "Yes. Free in-house design, unlimited revisions and a WhatsApp proof are included at every price point — no extra design fee." },
    ],
  },
  {
    slug: "laser-cut-wedding-cards-chennai",
    title: "Laser-Cut Wedding Cards Chennai | Intricate Cut-Out Invitations | Super Printers",
    metaDescription:
      "Laser-cut wedding invitation cards in Chennai — intricate jali, lace and floral cut-outs, pocket-fold and gate-fold designs on premium card. Free design proof. WhatsApp our Pallavaram press.",
    h1: "Laser-Cut Wedding Cards in Chennai",
    heroSubtitle: "Intricate laser-cut patterns & pocket-folds — premium designs, free design proof, made at our Pallavaram press.",
    serviceType: "Laser-cut wedding invitation card printing",
    intro: [
      "Laser cutting lets us turn a card into something intricate — jali (lattice) panels, lace borders, floral cut-outs and delicate motifs cut cleanly into premium card stock. It is the detail guests notice the moment they open the envelope.",
      "We offer pocket-fold and gate-fold laser-cut designs, often combined with gold foil for a layered premium look. Every cut pattern is proofed on WhatsApp before production so the finished card matches exactly what you approved.",
    ],
    highlights: [
      { h: "Precision cut-work", p: "Jali, lace, floral and geometric patterns cut cleanly into 300–350 GSM card." },
      { h: "Pocket & gate folds", p: "Laser-cut pocket-fold and gate-fold formats that hold inserts and RSVP cards neatly." },
      { h: "Combine with foil", p: "Pair laser-cut panels with gold or silver foil for a premium, layered finish." },
    ],
    galleryImageIds: ["w6", "w5", "w8"],
    faqs: [
      { q: "Do you make laser-cut wedding cards in Chennai?", a: "Yes — jali, lace, floral and geometric laser-cut designs, including pocket-fold and gate-fold formats, made at our Pallavaram press." },
      { q: "Can laser-cut be combined with foil?", a: "Yes, that's a popular premium combination — laser-cut panels with gold or silver foil on the names and motifs." },
      { q: "How long do laser-cut cards take?", a: "A little longer than standard cards because of the cutting and assembly — we confirm the exact timeline when you approve the proof on WhatsApp." },
    ],
  },
];

export const WEDDING_STYLE_SLUGS = WEDDING_STYLE_PAGES.map((p) => p.slug);
