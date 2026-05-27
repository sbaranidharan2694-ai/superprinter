/**
 * Head-keyword landing pages — built specifically to compete on exact-match
 * commercial queries. Competitor analysis (May 2026) showed
 * imprintwings.com ranked #1 for "printing press in chennai" largely on
 * exact-match URL slugs (/printing-press-in-chennai.php etc.) plus an
 * aged .php domain.
 *
 * Our equivalent: dedicated SSG pages with exact-match URLs, H1 leading
 * with the head term, full LocalBusiness + Service schema, and a
 * Chennai-wide service description that lists every suburb we cover.
 *
 * Each entry produces a /printing-press-chennai-style page rendered by
 * HeadKeywordPage.tsx.
 */

export interface HeadKeywordPage {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** 3–5 paragraphs of unique long-form content (~400–600 words total). */
  sections: { heading: string; body: string }[];
  /** Service emphasis for the structured-data Service schema. */
  serviceType: string;
  /** 5–8 area-specific FAQs for FAQPage schema. */
  faqs: { q: string; a: string }[];
}

export const HEAD_KEYWORD_PAGES: HeadKeywordPage[] = [
  {
    slug: "printing-press-chennai",
    title: "Printing Press in Chennai | Offset & Digital | Super Printers",
    metaDescription:
      "Chennai's full-service printing press since 1990. Offset, digital, screen printing — wedding cards, visiting cards, brochures, bill books, banners. Free design proof, ready in 24 hours.",
    h1: "Printing Press in Chennai — Offset & Digital, Since 1990",
    intro:
      "Super Printers is a 35-year-old printing press in Chennai, headquartered at No. 8 Saraswathy Colony, Pallavaram. We run our own offset, digital and screen presses in-house — no outsourcing, no middlemen, factory-direct pricing. Across Chennai we serve trader strips like T. Nagar and Ranganathan Street, IT corridors at OMR and Manapakkam, hospital belts at Porur and Adyar, wedding-card families in Mylapore and Anna Nagar, and the industrial estates of Ambattur and Ekkattuthangal — 30+ Chennai suburbs covered with 24-48 hour delivery from our Pallavaram press.",
    serviceType: "Printing press",
    sections: [
      {
        heading: "What a full-service Chennai printing press looks like",
        body:
          "Super Printers handles every step under one roof: design (free for wedding cards, low-cost for visiting cards and brochures), pre-press file prep, offset plate making, digital direct-to-press, finishing (lamination, spot UV, foil stamping, die-cut), binding (saddle-stitch, perfect-bound, spiral) and delivery across Chennai. This single-roof model is why our turnaround averages 24 hours for digital orders and 48–72 hours for wedding cards — even when most Chennai print shops are reselling jobs to a different press.",
      },
      {
        heading: "Offset printing vs digital printing — which fits your job?",
        body:
          "Offset printing is the right choice for runs above 500–1000 copies: plate setup costs are higher but per-piece cost drops dramatically and Pantone spot-colour matching is exact. We run 4-colour and 5-colour offset machines for wedding-card runs, corporate brochure catalogues, GST bill books and bulk pamphlets. Digital printing wins for runs under 500, urgent same-day jobs, and variable-data work (per-employee ID cards, personalised invitations). Our digital press handles photo-quality CMYK on 300 GSM card stock with same-day turnaround.",
      },
      {
        heading: "Specialty services Chennai businesses ask us for most",
        body:
          "Spot UV finishing on visiting cards (lifts the logo or one element in glossy raised varnish over a matt base — premium professional look). Gold and silver foil stamping for wedding cards — including traditional Tamil-Brahmin, Tamil-Iyer, Hindu, Christian and Muslim invitations with bilingual mantra blocks. Die-cut and laser-cut card layers for premium wedding invitations. Embossed letterheads and presentation folders for Mount Road and Guindy corporate offices. Numbered NCR bill books (2-part, 3-part) with shop logo, GSTIN and serial numbering — the staple of every Chennai trader strip.",
      },
      {
        heading: "Why we cost less than most card shops in Chennai",
        body:
          "Most Chennai card shops are intermediaries — they collect the order, outsource the printing to a press like ours, and add 30-60% markup. We are the press. When you walk into our Saraswathy Colony shop in Pallavaram, you're talking to the same team that runs the offset machines. Direct-to-press pricing means visiting cards from ₹149 for 100 pieces (300 GSM matt), wedding cards from ₹5 per piece, bill books from ₹280 per 50-leaf book. Bulk orders unlock tiered offset pricing.",
      },
    ],
    faqs: [
      {
        q: "Where is your printing press located in Chennai?",
        a: "No. 8, Saraswathy Colony, Pallavaram, Chennai 600043 — beside Pallavaram Market, walking distance from Pallavaram Railway Station and the GST Road bus stand. Open Mon-Sat 9am-8pm, Sun 10am-4pm.",
      },
      {
        q: "Do you deliver printing across Chennai?",
        a: "Yes. We deliver to all 30+ Chennai suburbs — Pallavaram, Tambaram, Chromepet, Velachery, Guindy, Adyar, T. Nagar, Anna Nagar, Mylapore, Porur, OMR, Sholinganallur, Mogappair, Ambattur, Avadi and more. Free delivery within 5km of our shop for orders above ₹1,500; courier delivery for the rest of Chennai.",
      },
      {
        q: "How long does printing take in Chennai with you?",
        a: "Most digital orders are ready in 24 hours after proof approval. Wedding cards take 48-72 hours. Bulk offset jobs (5,000+ pieces) take 5-7 working days. Same-day rush printing is available — call us before 11am for same-day pickup on visiting cards, rubber stamps and small digital jobs.",
      },
      {
        q: "What's the minimum order for a Chennai printing press?",
        a: "Visiting cards: 100 pieces. Wedding cards: 100 cards. Bill books: 25 books (50-sheet pads). Rubber stamps: 1 piece. Brochures: 100 copies. We don't have setup minimums for digital jobs — small runs are welcome.",
      },
      {
        q: "Do you accept GSTIN bills and PO billing for Chennai companies?",
        a: "Yes. GSTIN 33AAGPB7462F1Z1 on every invoice. We accept Purchase Orders from corporate customers (Guindy, OMR, Mount Road, Ekkattuthangal) and offer 30-day net invoice terms for repeat business.",
      },
      {
        q: "Which printing services do you offer in Chennai?",
        a: "Offset printing (4/5-colour), digital printing (CMYK), screen printing, wedding card printing (Hindu/Christian/Muslim/Tamil), visiting cards (gloss/matt/spot-UV/foil), brochures (tri-fold/bi-fold), banners (flex/vinyl/canvas), GST bill books (NCR), letterheads, envelopes, rubber stamps, PVC ID cards, stickers/labels, catalogues, calendars and T-shirt printing.",
      },
      {
        q: "Can I see proof before printing in Chennai?",
        a: "Yes — a digital WhatsApp proof is shared before every print run. Unlimited revisions are included; we print only after you approve the final proof. For wedding cards we also offer a physical sample card on request before bulk printing begins.",
      },
    ],
  },
  {
    slug: "offset-printing-press-in-chennai",
    title: "Offset Printing Press in Chennai | Super Printers Pallavaram",
    metaDescription:
      "Best offset printing press in Chennai since 1990. Wedding cards from ₹5, GST bill books, brochures, catalogues — 4 & 5-colour offset, Pantone spot matching. Pallavaram, Chennai.",
    h1: "Offset Printing Press in Chennai — Since 1990",
    intro:
      "Super Printers operates one of Chennai's longest-running offset presses — 35 years of plate-making, 4-colour and 5-colour offset printing, Pantone spot-colour matching, and finishing services from our Pallavaram facility. Offset is what we built the business on in 1990 and it's still where we are most competitive for runs above 500 pieces.",
    serviceType: "Offset printing",
    sections: [
      {
        heading: "When offset printing is the right choice",
        body:
          "Offset wins on per-piece cost above 500-1000 units. Plate-making and setup adds a fixed cost, but every additional copy thereafter is cheap — typically ₹0.60–₹1.20 per piece for full-colour A4 art-paper jobs at 5,000+ qty. Offset also wins on colour fidelity: Pantone spot inks are matched exactly, while digital CMYK approximates. For wedding card runs of 250-500, GST bill books in lots of 50-100, corporate brochure catalogues in 2,000-piece runs, and any bulk pamphlet drop above 5,000 pieces, offset is overwhelmingly the cheaper and higher-quality choice.",
      },
      {
        heading: "Our Chennai offset press capability",
        body:
          "We run multi-colour Heidelberg-style offset machines at our Saraswathy Colony press. Sheet sizes up to 20×30 inches. Paper stocks from 70 GSM newsprint to 350 GSM card. In-house plate-making means we control the entire production timeline — your job doesn't sit in another printer's queue. We hold paper inventory in popular GSMs so most orders don't wait on paper sourcing.",
      },
      {
        heading: "Offset finishing under one roof",
        body:
          "After printing we finish in-house: gloss and matt lamination, spot UV varnishing, gold and silver foil stamping, die-cutting (cards, tags, packaging), laser-cutting (premium wedding cards), embossing and debossing, perforation, scoring, folding, saddle-stitching, perfect-binding and spiral binding. Most Chennai print shops outsource one or two of these steps; we keep them in-house so the per-piece cost stays low.",
      },
      {
        heading: "Typical offset jobs from Chennai customers",
        body:
          "Wedding card runs (250-500 cards) for families across T. Nagar, Mylapore, Anna Nagar and Velachery. Corporate brochure catalogues (1,000-3,000 copies) for Mount Road, Guindy and OMR offices. GST bill books in 25-100 book lots for trader strips in T. Nagar, Saidapet, Pallavaram Market and Ambattur. Festive flyer drops (10,000-20,000 pieces) for retail showrooms on Ranganathan Street and Usman Road during Diwali and Aadi-perukku.",
      },
    ],
    faqs: [
      {
        q: "What's the minimum order for offset printing in Chennai?",
        a: "Cost-effective offset starts at 500-1000 pieces. Below that, plate-setup makes per-piece cost higher than digital. We'll honestly tell you when digital is the better fit — usually for orders under 500.",
      },
      {
        q: "Can you match Pantone spot colours in offset?",
        a: "Yes. We hold standard Pantone inks and mix custom spot colours for brand-critical jobs (logo prints, ribbon-colour matches on wedding cards). Provide your Pantone reference number; we match to within 2-3 Delta-E.",
      },
      {
        q: "How long does an offset job take in Chennai?",
        a: "Standard offset turnaround is 5-7 working days for runs of 1,000-10,000 copies. Wedding cards on offset typically take 3-4 working days for 500-card runs. Faster turnaround is possible with priority scheduling — call us to discuss.",
      },
      {
        q: "What paper stocks do you keep for offset printing?",
        a: "Common stocks in inventory: 70/80/100/130/170/210/250/300/350 GSM in art paper (gloss & matt) and maplitho/bond. Specialty papers (handmade, textured, metallic) are sourced per order with 2-3 day lead time.",
      },
      {
        q: "Can I do small runs (under 500) on your offset press?",
        a: "Technically yes, but for runs under 500 we usually recommend digital printing for better economics. Setup-heavy offset on small runs is rarely the cheapest option.",
      },
    ],
  },
  {
    slug: "digital-printing-press-in-chennai",
    title: "Digital Printing Press in Chennai | Super Printers Pallavaram",
    metaDescription:
      "Fast digital printing press in Chennai — visiting cards in 24 hours, wedding cards from ₹5, PVC ID cards, brochures, signage. Walk in to our Pallavaram press or order on WhatsApp.",
    h1: "Digital Printing Press in Chennai — Same-Day for Small Runs",
    intro:
      "Super Printers runs a high-throughput digital press alongside our offset facility at Pallavaram, Chennai. Digital is built for speed — same-day for visiting cards and rubber stamps, 24 hours for brochures and ID cards, 48 hours for small wedding card runs. CMYK photo-quality on stocks up to 350 GSM, variable-data jobs (per-employee ID cards), and no plate-setup means small runs are cheap.",
    serviceType: "Digital printing",
    sections: [
      {
        heading: "When digital printing beats offset for Chennai customers",
        body:
          "Three scenarios: (1) run size under 500 — no plate setup means digital is cheaper per piece for short runs; (2) urgent jobs — same-day or 24-hour turnaround that offset's setup time cannot match; (3) variable-data jobs — per-employee ID cards, personalised wedding invitations with each guest's name. For Chennai's IT corridor (OMR, Manapakkam, Porur) employee onboarding waves, our digital press is what makes 100-500 PVC ID batches possible in 3-4 working days.",
      },
      {
        heading: "Same-day digital printing in Chennai",
        body:
          "Walk-in jobs we routinely complete same-day: visiting cards (digital print + cut to size, ₹149 for 100, ready in 4-6 hours); rubber stamps (₹180 self-inking, ready in 4 hours); small flyer runs (100-500 A4/A5 copies); single-page CV printing; passport-size and stamp-size photo printing. Drop your file off before 1pm and most small jobs are ready by 5pm the same day at our Pallavaram press.",
      },
      {
        heading: "Variable-data digital — what only digital can do",
        body:
          "Each piece in the run can carry different data. We print PVC ID cards for OMR and Manapakkam IT campuses with each employee's photo, name, role, blood group and access ID — 100-1000 piece batches with zero setup. Personalised wedding invitations with each guest's name in Tamil + English script. Numbered raffle tickets, event passes, conference badges with delegate names. Offset cannot do this economically; digital does it natively.",
      },
      {
        heading: "Photo-quality digital on premium stocks",
        body:
          "Our digital press handles 70-350 GSM stocks — art paper (gloss/matt), card paper, textured stocks, even handmade paper for premium wedding cards. Photographic prints, full-bleed designs, soft gradients, gloss/matt lamination, spot UV (in-house finishing), foil stamping (handled offline). Velachery and Adyar customers ordering premium spot-UV visiting cards usually choose digital because the photographic gradients on the back panel print better than offset for short runs.",
      },
    ],
    faqs: [
      {
        q: "Can I walk in and get visiting cards same-day in Chennai?",
        a: "Yes — drop your design (PDF, PNG, AI) at our Pallavaram shop before 1pm and 100/200 visiting cards on 300 GSM matt are ready by 5pm. Walk-in pricing: ₹149 for 100 cards, ₹299 for 250, ₹399 for 500.",
      },
      {
        q: "How fast can you print PVC ID cards in Chennai?",
        a: "100-500 PVC ID cards take 3-4 working days end-to-end (design + print + cut + lamination + lanyards). Urgent rush is 48 hours with a small expedite fee. We coordinate with HR/admin teams at OMR, Manapakkam and Porur campuses for batch handover.",
      },
      {
        q: "What file format should I send for digital printing?",
        a: "PDF is preferred (print-ready, fonts embedded, CMYK colour mode, 3mm bleed, 300 DPI images). PNG and JPG also acceptable for simple jobs. AI / PSD source files welcome if you want our design team to make small tweaks.",
      },
      {
        q: "Is digital printing in Chennai cheaper than offset?",
        a: "For small runs (under 500), yes. Above 500-1000 pieces, offset becomes cheaper per piece because the per-piece cost drops while digital stays roughly flat. We'll always tell you honestly which method costs less for your specific job size.",
      },
      {
        q: "Can you do photo printing and large posters digitally?",
        a: "Yes. Photo prints (4×6, 6×8, A4, A3) on 200 GSM glossy photo paper, posters up to A1 (60×84 cm) on 130 GSM art paper. Larger formats (flex banners, vinyl) handled separately at our banner section.",
      },
    ],
  },
];
