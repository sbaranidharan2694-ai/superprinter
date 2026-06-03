/**
 * SEO blog posts — target keywords and ~400 word content.
 */

export interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  keyword?: string;
  content: string;
  /** Original publish date (ISO YYYY-MM-DD). */
  date: string;
  /**
   * Last meaningful content edit (ISO YYYY-MM-DD). Optional — when present,
   * BlogPost.tsx emits this as `dateModified` in the BlogPosting schema,
   * which feeds Google's freshness signal. Bump this when content actually
   * changes (typos and CSS tweaks don't count).
   */
  updated?: string;
  /**
   * Per-post featured image (absolute path under public/, e.g.
   * "/images/hero/wedding.jpg"). When omitted, BlogPost.tsx falls back to
   * the sitewide og-image.jpg. Per-post images unlock the Article
   * rich-result card in Google Discover and improve AI-engine extraction.
   */
  image?: string;
  readTime?: string;
  category?: string;
  /**
   * Author byline. Defaults to the founder when not specified — every post
   * needs a named expert per Google's E-E-A-T + Helpful Content guidance
   * (anonymous knowledge content is increasingly down-weighted post the
   * March 2024 + March 2026 core updates). `url` should point at the
   * author's biography (About page for the founder).
   */
  author?: {
    name: string;
    url?: string;
  };
  /** Optional FAQ block. Rendered as a section + FAQPage JSON-LD by
   *  BlogPost.tsx. 4-6 Q&As for long-form posts (on-page SEO checklist cat 5). */
  faqs?: { q: string; a: string }[];
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: "how-to-prepare-files-for-printing",
    image: "/images/hero/visiting.jpg",
    title: "How to Prepare Print Files: A Complete Guide for Chennai Designers",
    description: "A complete print file preparation guide for India: CMYK, DPI, bleed, and file formats. Get your files print-ready for visiting cards, brochures, and more.",
    keyword: "print file preparation guide India",
    date: "2026-01-10",
    content: `
      <p>Whether you're sending visiting cards, brochures, or wedding invitations to a Chennai printer, getting your files right the first time saves time, money, and reprints. Here's a concise guide to preparing print-ready files in India.</p>

      <h2>Use CMYK, Not RGB</h2>
      <p>Monitors use RGB (red, green, blue). Print uses CMYK (cyan, magenta, yellow, black). If you send RGB files, colours can shift when printed—especially blues and bright greens. In Adobe Illustrator or Photoshop, set your document to CMYK before you start. In InDesign, set the colour mode to CMYK in your swatches and document settings.</p>

      <h2>Resolution: 300 DPI Minimum</h2>
      <p>For sharp text and images, your file must be at least 300 DPI at final size. If you're designing an A4 brochure at 210×297mm, the image dimensions should be 2480×3508 pixels (at 300 DPI). Upscaling a low-resolution image will look blurry in print. When in doubt, export at 300 DPI.</p>

      <h2>Add Bleed (3mm Standard)</h2>
      <p>Bleed is the extra area beyond the trim edge. Printers need it because paper shifts slightly when cutting. Add 3mm bleed on all sides. So a visiting card that finishes at 89×52mm should be supplied at 95×58mm (3mm on each side). Extend background colours and images into the bleed so no white edges appear after trimming.</p>

      <h2>Safe Zone / Margins</h2>
      <p>Keep important text and logos at least 5mm inside the trim line so nothing gets cut off. This "safe zone" is especially important for visiting cards and wedding cards where every millimetre counts.</p>

      <h2>File Formats: PDF Preferred</h2>
      <p>PDF is the industry standard. Export as PDF/X-1a or PDF/X-4 for best compatibility with Indian print shops. Embed all fonts and use "Press Quality" or "High Quality Print" preset. If your printer accepts native files, .ai (Illustrator) and .psd (Photoshop) with layers flattened for complex artwork are also common. Avoid sending only JPG or PNG for professional print—use them only at 300 DPI and with no compression for simple jobs.</p>

      <p>Following these steps will make your files print-ready and reduce back-and-forth with your Chennai printer. At Super Printers we check files for free before printing—send yours via WhatsApp and we'll confirm everything is set.</p>
    `,
  },
  {
    slug: "gsm-paper-guide",
    image: "/images/hero/brochures.jpg",
    title: "Paper GSM Guide: Which Paper Weight for Which Print Job?",
    description: "Understand paper GSM for printing in India. When to use 90 GSM, 170 GSM, or 300 GSM for letterheads, brochures, and visiting cards.",
    keyword: "paper GSM guide printing India",
    date: "2026-01-20",
    content: `
      <p>GSM (grams per square metre) is the standard measure of paper weight. Choosing the right GSM ensures your print job looks and feels right. Here's a quick guide for common print jobs in India.</p>

      <h2>70–90 GSM: Letterheads &amp; Invoices</h2>
      <p>Lightweight bond paper in this range is ideal for letterheads, notepads, and multipage documents. It's easy to write on, feeds well through printers, and keeps postage low. Most offices use 80–90 GSM for letterheads. At Super Printers we offer 90 GSM standard and 120 GSM premium letterheads.</p>

      <h2>100–130 GSM: Flyers &amp; Leaflets</h2>
      <p>This range works for single-sided or double-sided flyers, handouts, and simple leaflets. It's sturdy enough to hold colour without feeling too heavy. Good for event promotions and quick campaigns.</p>

      <h2>130–170 GSM: Brochures &amp; Catalogues</h2>
      <p>Art paper in 130–170 GSM is the sweet spot for brochures, trifolds, and catalogue pages. It takes colour beautifully, has a slight sheen (or matt), and feels substantial without being stiff. Most Chennai printers stock 130 GSM and 170 GSM for brochures.</p>

      <h2>250–350 GSM: Visiting Cards &amp; Invitations</h2>
      <p>For visiting cards, 300 GSM is the norm. It gives a solid, professional feel and works with gloss or matt lamination. Wedding cards and premium invitations often use 300–350 GSM with options for velvet or soft-touch finishes. Heavier stocks (350–400 GSM) are used for luxury business cards with foil or spot UV.</p>

      <h2>Summary</h2>
      <p>Match GSM to use: light (70–90) for letterheads, medium (130–170) for brochures, and heavy (300+) for cards and invitations. Your printer can recommend the best option for your design and budget. In Chennai, Super Printers offers a range of GSM options for every job—ask us for a sample or quote.</p>
    `,
  },
  {
    slug: "how-to-choose-visiting-card-finish",
    image: "/images/hero/visiting.jpg",
    title: "Matte vs Glossy vs Spot UV: Which Visiting Card Finish is Best?",
    description: "Compare matte, glossy, and spot UV finishes for visiting cards in Chennai. Choose the right finish for your brand and budget.",
    keyword: "visiting card finish matte glossy spot UV Chennai",
    date: "2026-01-15",
    content: `
      <p>Choosing the right finish for your visiting card can make a big difference in how your brand is perceived. Here's a clear comparison of matte, glossy, and spot UV finishes so you can decide what's best for you.</p>
      <h2>Glossy Lamination</h2>
      <p>Glossy lamination gives a shiny, reflective surface that makes colours pop. It's durable, smudge-resistant, and works well for vibrant designs and photos. Best for: corporate cards, real estate, and anyone wanting a polished, professional look. The only downside is fingerprints show more easily under certain light.</p>
      <h2>Matte Lamination</h2>
      <p>Matte (or matt) lamination has a non-reflective, smooth finish. It feels premium and is easier to write on if you need to jot a note. Colours appear slightly softer. Best for: minimalist designs, creative professionals, and brands that want an understated, elegant look. Very popular for law, consulting, and design firms.</p>
      <h2>Spot UV</h2>
      <p>Spot UV applies a clear, glossy coating only to selected areas—your logo, a pattern, or key text. The rest of the card stays uncoated or matt. The contrast creates a premium, modern effect. Best for: standing out without going full metallic. Slightly higher cost but high impact. Ideal for tech, hospitality, and premium brands.</p>
      <h2>Which Should You Choose?</h2>
      <p>Choose <strong>glossy</strong> for maximum colour impact and a classic shiny look. Choose <strong>matte</strong> for a sophisticated, fingerprint-free card that's easy to write on. Choose <strong>spot UV</strong> when you want a premium, differentiated look without the cost of full foil. At Super Printers we offer all three—send your design via WhatsApp and we'll recommend the best finish for your card.</p>
    `,
  },
  {
    slug: "wedding-card-printing-guide-chennai",
    image: "/images/hero/wedding.jpg",
    title: "Complete Guide to Wedding Card Printing in Chennai (2026)",
    description: "Everything you need to know about wedding invitation printing in Chennai: designs, languages, pricing, and how to order from Super Printers.",
    keyword: "wedding card printing Chennai guide 2026",
    date: "2026-02-01",
    content: `
      <p>Wedding card printing in Chennai has evolved from traditional single-sheet invites to multi-panel designs, foil work, and bilingual text. Here's a complete guide to getting your wedding cards printed in Chennai.</p>
      <h2>Design Options</h2>
      <p>We print Hindu, Christian, Muslim, and modern/contemporary designs. You can choose from our catalog or send your own design. Bilingual (Tamil + English, Hindi + English) is very popular. We offer free design proof within 24 hours so you can approve before printing.</p>
      <h2>Paper and Finish</h2>
      <p>Most wedding cards use 300–350 GSM card stock with options for velvet finish, soft-touch, or standard art card. Foil (gold/silver) on key elements adds a premium touch. Envelopes can be matching or plain.</p>
      <h2>Minimum Order and Pricing</h2>
      <p>Minimum order is typically 100 cards. Price per card depends on design complexity, paper, and finish—starting from ₹8 per card for simple designs. Bulk orders get better rates. Get a custom quote via WhatsApp with your expected quantity and design reference.</p>
      <h2>Turnaround Time</h2>
      <p>Allow 24–48 hours after proof approval for standard cards (premium foil and laser-cut designs may take a little longer). Urgent same-day orders may be possible for an extra charge. Plan to order at least 2–3 weeks before your wedding to avoid last-minute stress.</p>
      <h2>How to Order</h2>
      <p>Send your design or reference images on WhatsApp. We'll send a proof for approval. Once you confirm, we'll print and deliver to your address in Chennai or you can pick up from our Pallavaram press. Serving Pallavaram, Chromepet, Tambaram, and all of South Chennai.</p>
    `,
  },
  {
    slug: "offset-vs-digital-printing",
    image: "/images/hero/brochures.jpg",
    title: "Offset vs Digital Printing: Which Should You Choose?",
    description: "Understand the difference between offset and digital printing in Chennai. Best for quantity, quality, cost, and turnaround.",
    keyword: "offset vs digital printing Chennai",
    date: "2026-02-10",
    content: `
      <p>Choosing between offset and digital printing can be confusing. Both have their place—here's when to use which for your print job in Chennai.</p>
      <h2>Offset Printing</h2>
      <p>Offset uses plates and ink transferred to a rubber blanket and then to paper. Best for: <strong>500+ copies</strong>. Cost per unit drops as quantity increases. Quality is excellent—Pantone-accurate colours, sharp text, and any paper type. Turnaround is typically 2–3 days. Minimum order is usually 100–500 pieces depending on the product.</p>
      <h2>Digital Printing</h2>
      <p>Digital prints directly from a file (like a large office printer). Best for: <strong>small runs (1–200)</strong>. No plate cost, so short runs are economical. Same-day or 24-hour turnaround is possible. Quality is very good for photos and full-colour work; paper options are usually standard stocks. Minimum can be as low as 1 piece for some products.</p>
      <h2>Quick Comparison</h2>
      <p><strong>Quantity:</strong> Offset = 500+, Digital = under 200.<br />
      <strong>Cost:</strong> Offset = lower per unit at scale; Digital = fixed per unit, good for small runs.<br />
      <strong>Turnaround:</strong> Offset = 2–3 days; Digital = same day / 24 hrs.<br />
      <strong>Quality:</strong> Offset = premium, Pantone; Digital = very good for most jobs.</p>
      <h2>Still Not Sure?</h2>
      <p>WhatsApp us with your quantity and job type. We'll recommend the best option and give you a quote. Super Printers offers both offset and digital from our Pallavaram facility—one stop for all your printing in Chennai.</p>
    `,
  },
  {
    slug: "gst-bill-book-printing-guide",
    image: "/images/hero/bill-books.jpg",
    title: "GST Bill Book Printing: What Every Business Owner Needs to Know",
    description: "GST-compliant bill book printing in Chennai. NCR sets, numbering, and formats for invoicing. Super Printers Pallavaram.",
    keyword: "GST bill book printing Chennai NCR",
    date: "2026-03-01",
    content: `
      <p>Every business that issues invoices needs proper bill books. GST-compliant bill books keep your records in order and satisfy tax requirements. Here's what you need to know about bill book printing in Chennai.</p>
      <h2>What is a GST Bill Book?</h2>
      <p>A bill book contains pre-numbered, duplicate or triplicate (NCR) invoice sheets. Each copy is for your record, the customer, and sometimes the transporter. GST invoice format typically includes: invoice number, date, your and customer details, HSN/SAC, taxable value, GST rate, and amount. We print the layout; you fill in the variable data.</p>
      <h2>Single vs Duplicate vs Triplicate</h2>
      <p><strong>Single copy</strong>: One sheet per invoice. <strong>Duplicate (2-part)</strong>: Original + one copy (carbonless NCR). <strong>Triplicate (3-part)</strong>: Original + two copies. Most businesses use duplicate or triplicate so that the customer gets a copy and you retain one. We offer all options at Super Printers.</p>
      <h2>Numbering and Customisation</h2>
      <p>Bill books are usually pre-numbered (e.g. INV-001 to INV-100). You can choose starting number and format. We can also add your logo, business name, and GSTIN on each sheet. Custom columns (e.g. for product name, quantity, rate) can be designed to match your business.</p>
      <h2>Where to Get GST Bill Books in Chennai</h2>
      <p>Super Printers in Pallavaram prints GST bill books with quick turnaround. Minimum order is typically 50–100 sets. Send your format or sample via WhatsApp and we'll quote. Delivery across Chennai or pick up from our shop. GST invoice provided with every order.</p>
    `,
  },
  {
    slug: "bulk-printing-discounts-chennai",
    image: "/images/hero/brochures.jpg",
    title: "How to Save 30% on Bulk Printing in Chennai",
    description: "Tips to get the best bulk printing rates in Chennai: quantity, paper, and timing. Partner and reseller options at Super Printers.",
    keyword: "bulk printing discounts Chennai",
    date: "2026-03-10",
    content: `
      <p>Whether you're ordering visiting cards for your entire team or brochures for a campaign, bulk printing can be much more cost-effective if you plan right. Here's how to save up to 30% on bulk printing in Chennai.</p>
      <h2>Order in the Right Quantity</h2>
      <p>Offset printing becomes cheaper per unit at 500, 1000, and 2000+ pieces. If you need 400 brochures, consider ordering 500—the extra 100 may cost very little and you'll have spares. Same for visiting cards: 500 or 1000 often has a much lower per-card rate than 200.</p>
      <h2>Choose Standard Paper and Finish</h2>
      <p>Standard 300 GSM art card with gloss or matt lamination is the most economical for visiting cards. Fancy finishes (spot UV, foil, PVC) add cost. For brochures, 130–170 GSM art paper is cost-effective. Discuss with your printer—they can suggest the best balance of look and price.</p>
      <h2>Consolidate Orders</h2>
      <p>If you need multiple items (e.g. visiting cards + letterheads + brochures), placing one combined order can sometimes get you a better deal. Printers can optimise paper and machine time. Ask for a package quote.</p>
      <h2>Partner and Reseller Programs</h2>
      <p>If you're a DTP operator, designer, or reseller who orders frequently, ask about partner pricing. Super Printers offers partner discounts (up to 25%) for regular bulk orders, with dedicated WhatsApp support and GST invoice. Apply via our Get Quote page with type=partner or message us: "I'm a DTP operator, please send partner price list."</p>
      <h2>Plan Ahead</h2>
      <p>Rush jobs cost more. Giving your printer 5–7 days for bulk offset work keeps costs down. Last-minute same-day or 24-hour jobs usually have a premium. Plan your campaigns and reorders in advance to get the best bulk printing rates in Chennai.</p>
    `,
  },
  {
    slug: "spot-uv-vs-foil",
    image: "/images/hero/visiting.jpg",
    title: "Spot UV vs Gold Foil: Which Business Card Finish is Right for You?",
    description: "Compare Spot UV and gold foil finishes for business cards in India. Pros, cons, and when to choose each for maximum impact.",
    keyword: "spot UV vs foil business cards India",
    date: "2026-02-05",
    content: `
      <p>Two of the most popular premium finishes for business cards in India are Spot UV and gold foil. Both make your card stand out, but they look and feel different. Here's how to choose.</p>

      <h2>What is Spot UV?</h2>
      <p>Spot UV is a clear, glossy coating applied only to selected areas of the card (your logo, key text, or a pattern). The rest of the card can be matt or uncoated. The result is a sharp contrast: the UV areas catch the light and "pop" against the duller background. Spot UV works on dark and light cards and doesn't add much thickness. It's modern, subtle, and very effective for minimalist or corporate designs.</p>

      <h2>What is Gold Foil?</h2>
      <p>Gold foil (hot foil stamping) uses a metallic foil—gold, silver, or other colours—pressed onto the card with heat. The foil sits on the surface and has a distinct metallic sheen. It's classic, luxurious, and works brilliantly for luxury brands, wedding-related businesses, and anyone wanting a traditional "premium" look. Foil can be combined with velvet or matt lamination for a high-end feel.</p>

      <h2>Spot UV vs Foil: Quick Comparison</h2>
      <p><strong>Look:</strong> Spot UV = clear shine, subtle. Foil = metallic, bold.<br />
      <strong>Feel:</strong> Spot UV is smooth and integrated. Foil is slightly raised and tactile.<br />
      <strong>Cost:</strong> Both are premium; foil is often slightly more due to the foil material and die.<br />
      <strong>Design:</strong> Spot UV suits fine lines and detailed logos. Foil suits bold shapes and text; very fine detail can be tricky.<br />
      <strong>Durability:</strong> Both are durable when laminated. Without lamination, foil can wear over time in wallets.</p>

      <h2>When to Choose Which?</h2>
      <p>Choose <strong>Spot UV</strong> if you want a modern, understated premium look—ideal for tech, consulting, and creative professionals. Choose <strong>gold foil</strong> if you want a classic, luxurious feel—ideal for jewellery, weddings, hospitality, and heritage brands. You can also combine both on one card: foil for the logo and spot UV for a pattern, for example.</p>

      <p>At Super Printers in Pallavaram we offer both Spot UV and foil business cards with quick turnaround. Send your design via WhatsApp and we'll recommend the best finish for your brand.</p>
    `,
  },
  {
    slug: "visiting-card-printing-guide-chennai",
    image: "/images/hero/visiting.jpg",
    title: "Complete Guide to Visiting Card Printing in Chennai (2026)",
    description: "Everything you need to know about visiting card printing in Chennai — finishes, paper, pricing, and how to order from Super Printers Pallavaram.",
    date: "2026-03-01",
    readTime: "5 min read",
    category: "Guide",
    content: `## Visiting Card Printing in Chennai\n\nVisiting cards are the first impression of your business. In Chennai, you can get 100 cards printed from as low as ₹149 at Super Printers, Pallavaram.\n\n## Paper Options\n\n**300 GSM** is the standard for visiting cards. Thicker paper feels more premium and makes a better impression. Avoid anything below 300 GSM for business cards.\n\n## Finish Options\n\n- **Gloss lamination** — Shiny, bright colours, affordable\n- **Matt lamination** — Elegant, professional, muted colours\n- **Spot UV** — Matt base with glossy design elements raised up\n- **Gold/Silver foil** — Premium, luxury feel\n- **Velvet lamination** — Soft touch, ultra premium\n\n## Pricing Guide\n\n| Finish | 100 cards | 500 cards |\n|--------|-----------|----------|\n| Gloss SS | ₹149 | ₹700 |\n| Matt SS | ₹175 | ₹800 |\n| Spot UV | ₹350 | ₹1,400 |\n| Foil | ₹500 | ₹2,000 |\n\n## How to Order\n\n1. WhatsApp your design to +91 98401 99878\n2. Get a digital proof within 24 hours\n3. Approve and collect in 24 hours\n\nSuper Printers in Pallavaram has been printing visiting cards since 1990. We serve all of Chennai with free pickup and delivery.`,
  },
  {
    slug: "banner-printing-guide-chennai",
    image: "/images/banner/bn1.jpg",
    title: "Flex Banner Printing in Chennai: Sizes, Prices & Tips (2026)",
    description: "Complete guide to flex banner printing in Chennai. Sizes, prices, materials and how to order flex banners for events, shops and promotions.",
    date: "2026-03-05",
    readTime: "4 min read",
    category: "Guide",
    content: `## Flex Banner Printing in Chennai\n\nBanners are one of the most cost-effective ways to advertise your business in Chennai. At Super Printers, flex banners start from ₹12 per square foot.\n\n## Banner Types\n\n- **Star Flex** — Standard outdoor banner, durable and affordable\n- **Premium Vinyl** — Weather resistant, vibrant colours\n- **Fabric Banner** — For exhibitions and indoor events\n- **Roll-up Standee** — Portable, reusable for events\n\n## Standard Sizes\n\n| Size | Use |\n|------|-----|\n| 2ft x 3ft | Shop counter display |\n| 3ft x 6ft | Shop front banner |\n| 4ft x 6ft | Event backdrop |\n| 6ft x 10ft | Large outdoor banner |\n\n## Pricing\n\nFlex banners are priced per square foot. Star flex starts at ₹12/sqft, premium vinyl at ₹18/sqft.\n\n## How to Order\n\nWhatsApp your design file or requirements to +91 98401 99878. We print and deliver across Chennai within 24 hours.`,
  },
  {
    slug: "rubber-stamp-printing-chennai",
    image: "/images/catalog/stamp.jpg",
    title: "Rubber Stamp Making in Chennai — Types, Prices & How to Order",
    description: "Get custom rubber stamps made in Chennai. Self-inking stamps, pre-inked stamps, traditional stamps. Fast delivery from Super Printers Pallavaram.",
    date: "2026-03-10",
    readTime: "3 min read",
    category: "Guide",
    content: `## Rubber Stamp Making in Chennai\n\nRubber stamps are essential for businesses, offices, hospitals and schools in Chennai. Super Printers makes custom rubber stamps in Pallavaram with fast same-day delivery.\n\n## Types of Rubber Stamps\n\n- **Self-inking stamps** — Built-in ink pad, no separate pad needed\n- **Pre-inked stamps** — Cleaner impression, long-lasting\n- **Traditional stamps** — Used with separate ink pad\n- **Date stamps** — Adjustable date for receipts and records\n- **Signature stamps** — For approvals and correspondence\n\n## Common Uses\n\n- Company name and address stamp\n- PAID / RECEIVED stamp\n- Hospital and clinic stamps\n- School name stamps\n- Signature stamps\n\n## How to Order\n\nWhatsApp your stamp text and size requirements to +91 98401 99878. We design, make and deliver your stamp within 24 hours anywhere in Chennai.`,
  },
  {
    slug: "wedding-card-tamil-traditional-designs",
    image: "/images/hero/wedding.jpg",
    title: "Tamil Wedding Cards in Chennai — Traditional Designs, Pricing & Customs",
    description: "Tamil wedding card printing in Chennai — Hindu, Christian and Muslim designs in Tamil and English. Traditional motifs, modern layouts, gold foil and laser-cut. From ₹5 per card at Super Printers Pallavaram.",
    keyword: "Tamil wedding cards Chennai",
    date: "2026-05-11",
    readTime: "5 min read",
    category: "Wedding",
    content: `<p>Choosing a wedding card in Chennai is more than picking a design — the right card honours family traditions, gets the kalyana muhurtham details exactly right, and arrives at every guest's door in time. Here's how to navigate Tamil wedding card design, language conventions and pricing without overthinking it.</p>

<h2>Tamil vs English vs bilingual — what works for whom</h2>
<p>Three patterns are common in Chennai weddings:</p>
<ul>
<li><strong>Tamil-only cards</strong> — for traditional families and elder guests. The kalyana azhaippithazh (கல்யாண அழைப்பிதழ்) reads in formal literary Tamil. Best when most guests are Tamil-speaking.</li>
<li><strong>Bilingual cards</strong> — Tamil on one side and English on the other, or stacked layout. The most popular choice today because it works for both elder relatives and city-based friends.</li>
<li><strong>English-only cards</strong> — for younger urban couples, NRI weddings, or destination weddings where most guests are non-Tamil.</li>
</ul>
<p>Even on an English-only card, including the bride's and groom's names in Tamil on the inside is a small touch that elders deeply appreciate.</p>

<h2>Must-have details on a Tamil wedding card</h2>
<ul>
<li><strong>Vinayagar / Lakshmi-Pillaiyaar invocation</strong> at the top — pillaiyaar suzhi (பிள்ளையார் சுழி) or a small Ganesha icon</li>
<li><strong>Parents' names</strong> with appropriate prefixes (Thiru / Thirumathi)</li>
<li><strong>Bride and groom names</strong> in Tamil and English</li>
<li><strong>Muhurtham date and time</strong> in both Tamil and Gregorian calendars</li>
<li><strong>Mandapam name and full address</strong></li>
<li><strong>Reception details</strong> if separate</li>
<li><strong>Family elders mentioned with respect</strong></li>
<li><strong>Map or QR code</strong> to the venue — a modern addition that guests love</li>
</ul>

<h2>Designs that suit different communities</h2>
<ul>
<li><strong>Iyer / Iyengar weddings</strong> — Maroon and gold, peacock and kalasam motifs, Sanskrit slokas alongside Tamil</li>
<li><strong>Tamil Christian weddings</strong> — Pastel colours, dove and cross motifs, biblical verse on the cover</li>
<li><strong>Mudaliyar / Chettiar weddings</strong> — Rich red and gold, traditional Tamil scrollwork, kolam patterns</li>
<li><strong>Modern minimalist</strong> — Off-white card stock, single-line gold foil typography, no heavy ornaments</li>
<li><strong>Laser-cut cards</strong> — Intricate mandala or peacock laser-cut covers, lined with foil paper inside</li>
</ul>

<h2>Wedding card pricing in Chennai (2026)</h2>
<p>A practical guide for ordering 200–500 cards:</p>
<ul>
<li><strong>Economy single-fold (300 GSM card)</strong> — from ₹5 per card</li>
<li><strong>Mid-range two-fold with gold foil text</strong> — ₹12 to ₹25 per card</li>
<li><strong>Premium laser-cut + foil + multi-panel</strong> — ₹35 to ₹80 per card</li>
<li><strong>Luxury hardbox with sweet box and dry fruits compartment</strong> — ₹120 upwards</li>
</ul>
<p>You usually pay extra for: spot UV finishing, embossing, wax seals, custom envelopes, return-gift stickers, and Tamil calligraphy by hand. We give a clear per-card price with every add-on before you confirm, so there are no surprises later.</p>

<h2>How many cards should you actually print?</h2>
<p>The traditional rule is "one card per family invited" — not one per person. A safe formula:</p>
<ul>
<li>Count families on the bride's side and the groom's side separately</li>
<li>Add 15–20% as spares for last-minute relatives and for the wedding album</li>
<li>Don't forget the bridal party, mandapam staff, priest, photographers and caterers</li>
</ul>

<h2>How early should you order?</h2>
<p>Order your wedding cards <strong>at least 30–45 days before the muhurtham</strong>. Design and proofing takes 3 to 7 days, offset printing takes 5 to 7 days, and distribution to relatives in villages needs another 7 to 10 days. Relatives abroad need 15+ days.</p>

<h2>Ordering Tamil wedding cards from Super Printers, Pallavaram</h2>
<p>WhatsApp +91 98401 99878 with your muhurtham details and a rough idea of budget. We send 4–6 sample designs that match your community and price band, you pick one, we share a digital proof with all your details in place, you approve, and your cards are ready in 48–72 hours. Pickup from our Pallavaram press is free; we also deliver across Chennai — Tambaram, Chromepet, Velachery, Adyar — for a small charge.</p>

<p>Visit our <a href="/wedding-cards/">wedding cards page</a> for design samples and a full price list, or our <a href="/printing-press-pallavaram/">Pallavaram printing press</a> page for directions to the shop.</p>`,
  },
  {
    slug: "commercial-printing-chennai-guide",
    image: "/images/hero/brochures.jpg",
    title: "Commercial Printing in Chennai: The Complete Guide for Businesses (2026)",
    description: "What commercial printing covers, offset vs digital at business volumes, GST invoicing, turnaround SLAs, and how to vet a Chennai commercial printer. From a 35-year Pallavaram press.",
    keyword: "commercial printing chennai",
    date: "2026-05-26",
    category: "Business",
    author: { name: "N. Baranidharan", url: "/about/" },
    content: `
      <p>Commercial printing is print produced for a business rather than a private occasion: brochures, catalogues, annual reports, corporate stationery, marketing collateral, packaging inserts and the bulk runs that keep a company's sales and operations moving. If you are sourcing it in Chennai, this guide covers what the term actually includes, when to use offset versus digital, how pricing and GST work, and how to tell a real press apart from a reseller.</p>

      <h2>What commercial printing covers</h2>
      <p>At Super Printers we group commercial work into four buckets: <strong>marketing collateral</strong> (brochures, flyers, catalogues, danglers, standees), <strong>corporate stationery</strong> (letterheads, envelopes, visiting cards, presentation folders — see our <a href="/stationery-printing-chennai/">stationery printing</a> page), <strong>operational print</strong> (GST <a href="/bill-books/">bill books</a>, invoice books, forms, labels) and <strong>packaging</strong> (cartons, inserts, stickers). One purchase order often spans all four, which is why ordering from a single press that runs offset and digital in-house keeps colour, paper and branding consistent across the lot.</p>

      <h2>Offset vs digital at commercial volumes</h2>
      <p>The deciding factor is quantity. <strong>Offset printing</strong> wins above roughly 500–1,000 copies: the plate setup costs more up front, but the per-piece cost falls sharply and Pantone spot colours match exactly across the run — essential for brand-consistent catalogues and corporate brochures. <strong>Digital printing</strong> wins under 500, for same-day jobs and for variable data (per-branch or per-employee pieces). Read the full breakdown on our <a href="/blog/offset-vs-digital-printing/">offset vs digital</a> guide (or the technical primer on <a href="https://en.wikipedia.org/wiki/Offset_printing" target="_blank" rel="noopener">offset printing</a>), or the capability pages for our <a href="/offset-printing-press-in-chennai/">offset press</a> and <a href="/digital-printing-chennai/">digital printing</a> in Chennai.</p>

      <h2>GST, invoicing and how businesses pay</h2>
      <p>Commercial buyers need clean paperwork. We are <a href="https://www.gst.gov.in/" target="_blank" rel="noopener">GST</a> registered (33AAGPB7462F1Z1) and issue proper tax invoices, so input credit and reconciliation are straightforward for your accounts team. Bulk orders can run on a purchase order with agreed payment terms; one-off jobs are quoted upfront with no hidden plate or "file handling" charges. For a detailed cost breakdown, see our <a href="/blog/commercial-printing-cost-chennai/">commercial printing costs in Chennai</a> guide.</p>

      <h2>Turnaround you can plan around</h2>
      <p>Because we print in-house at Pallavaram rather than outsourcing, digital commercial jobs are usually ready in 24 hours and offset runs in 48–72 hours after proof approval. Every job gets a digital proof on WhatsApp before printing, so a colour or a logo placement is never a surprise. We deliver across Chennai — Guindy, Mount Road, OMR, T. Nagar, Ambattur — or you collect from the press.</p>

      <h2>How to vet a commercial printer in Chennai</h2>
      <p>Most "printers" in Chennai are intermediaries who collect your order, send it to a press like ours, and add 30–60% markup. Three quick checks separate a real press from a reseller: <strong>do they quote a price</strong> (resellers stall because they have to ask their printer first), <strong>do they have reviews</strong> (we hold 4.8 stars across 147 Google reviews), and <strong>can you visit the machines</strong>. Walk into our Saraswathy Colony shop in Pallavaram and you are talking to the same team that runs the presses.</p>

      <p>Manufacturing or industrial buyer? Labels, manuals and packaging have their own requirements — see our <a href="/blog/industrial-printing-chennai/">industrial printing in Chennai</a> guide. Ready for a quote? <a href="/get-quote/">Send your brief on WhatsApp</a> and we will price it in about 30 minutes.</p>
    `,
    faqs: [
      { q: "What counts as commercial printing?", a: "Print produced for a business rather than a private occasion — brochures, catalogues, annual reports, corporate stationery, marketing collateral, packaging inserts and bulk operational print like GST bill books and forms." },
      { q: "Is offset or digital better for business printing?", a: "Digital under ~500 pieces and for same-day or variable-data jobs; offset above 500-1,000 identical pieces for the lowest per-piece cost and exact Pantone matching. A real press runs both and quotes the cheaper fit for your quantity." },
      { q: "Do you give GST tax invoices for commercial orders?", a: "Yes — we are GST registered (33AAGPB7462F1Z1) and issue proper tax invoices, so input-credit reconciliation is clean. Bulk work can run on a purchase order with agreed terms." },
      { q: "How fast is commercial printing in Chennai?", a: "Digital commercial jobs are usually ready in 24 hours and offset runs in 48-72 hours after proof approval, because we print in-house at Pallavaram rather than outsourcing." },
    ],
  },
  {
    slug: "commercial-printing-cost-chennai",
    image: "/images/hero/brochures.jpg",
    title: "Commercial Printing Costs in Chennai: A Pricing Guide for Bulk Orders",
    description: "Real commercial printing prices in Chennai — brochures, catalogues, letterheads, bill books — plus the offset break-even point and how to brief a printer for an accurate bulk quote.",
    keyword: "commercial printing cost chennai",
    date: "2026-05-28",
    category: "Business",
    author: { name: "N. Baranidharan", url: "/about/" },
    content: `
      <p>The honest answer to "what does commercial printing cost in Chennai" is: it depends on quantity, paper and finish — but you should never have to guess. Most Chennai shops hide pricing behind "request a quote" because they are reselling. We are the press, so here are real starting figures and the levers that move them.</p>

      <h2>Indicative starting prices (Pallavaram press, 2026)</h2>
      <ul>
        <li><strong>Corporate brochures</strong> — from ₹6 per piece (A4 tri-fold, 130 GSM art paper, 1,000 qty)</li>
        <li><strong>Catalogues</strong> — from ₹45 per book (saddle-stitch, depends on page count and GSM)</li>
        <li><strong>Letterheads</strong> — from ₹4 per sheet (100 GSM bond)</li>
        <li><strong>Visiting cards</strong> — ₹149/100, ₹399/500, ₹699/1,000 (300 GSM matt)</li>
        <li><strong><a href="https://www.gst.gov.in/" target="_blank" rel="noopener">GST</a> bill / invoice books</strong> — from ₹280 per 50-leaf NCR book</li>
        <li><strong>Flyers</strong> — from ₹3 each (A5, 130 GSM, 1,000 qty)</li>
      </ul>
      <p>These are starting points for standard specs; finishes like lamination, spot UV and foil add cost. For what each product involves, start with the <a href="/blog/commercial-printing-chennai-guide/">commercial printing guide</a>.</p>

      <h2>The offset break-even point</h2>
      <p>The single biggest cost lever is choosing offset or digital for your quantity. Below ~500 pieces, digital is cheaper because there is no plate setup. Above ~500–1,000, <a href="https://en.wikipedia.org/wiki/Offset_printing" target="_blank" rel="noopener">offset</a>'s per-piece cost drops below digital and keeps falling with volume. On a 5,000-brochure run, offset can be less than half the digital price. If a printer pushes you toward the pricier option for your quantity, that is a red flag — we quote both and tell you which is cheaper.</p>

      <h2>How to brief for an accurate quote</h2>
      <p>Five details get you a firm price in one message instead of a back-and-forth: <strong>product</strong> (e.g. tri-fold brochure), <strong>quantity</strong>, <strong>size</strong>, <strong>paper/GSM</strong>, and <strong>finish</strong> (matt/gloss lamination, spot UV, none). Attach artwork if you have it. Not sure on paper? Tell us the use and budget and we will recommend. See our <a href="/blog/gsm-paper-guide/">GSM paper guide</a> if you want to choose yourself.</p>

      <h2>Cost-saving levers for bulk orders</h2>
      <p>Standard sizes avoid custom die costs; gang-running multiple items on one sheet shares setup; ordering a year of letterheads or bill books in one batch unlocks tiered pricing; and supplying print-ready files removes design charges. Our <a href="/blog/bulk-printing-discounts-chennai/">bulk printing discounts</a> post goes deeper on saving 30%.</p>

      <p>Want a real number for your job? <a href="/get-quote/">WhatsApp the brief</a> — itemised quote in about 30 minutes, free design proof before you commit, GST invoice on every order.</p>
    `,
    faqs: [
      { q: "How much does commercial printing cost in Chennai?", a: "Indicative starting prices: brochures from ₹6/piece (1,000 qty), catalogues from ₹45/book, letterheads from ₹4/sheet, GST bill books from ₹280 per 50-leaf NCR book, flyers from ₹3 each. Finishes add cost; bulk lowers the per-piece price." },
      { q: "When does offset become cheaper than digital?", a: "Around 500-1,000 pieces. Below that, digital wins (no plate setup); above it, offset's per-piece cost drops and keeps falling with volume — on a 5,000 run offset can be under half the digital price." },
      { q: "What details do you need for an accurate quote?", a: "Five: product, quantity, size, paper/GSM and finish — plus artwork if you have it. That gets a firm itemised price in about 30 minutes instead of a back-and-forth." },
      { q: "How can I reduce bulk printing costs?", a: "Use standard sizes, gang-run multiple items on one sheet, batch a year's stationery or bill books in one order for tiered pricing, and supply print-ready files to avoid design charges." },
    ],
  },
  {
    slug: "industrial-printing-chennai",
    image: "/images/hero/bill-books.jpg",
    title: "Industrial Printing in Chennai: Labels, Manuals & Packaging for Manufacturers",
    description: "Industrial printing for Chennai manufacturers — product and asset labels, barcode/QR, safety labels, technical manuals, cartons and inserts. Bulk runs from a GST-registered Pallavaram press.",
    keyword: "industrial printing chennai",
    date: "2026-05-30",
    category: "Business",
    author: { name: "N. Baranidharan", url: "/about/" },
    content: `
      <p>Industrial printing is the print a factory or manufacturer runs on, not the marketing it sends out: product and asset labels, barcode and QR labels, safety and compliance markings, technical manuals and datasheets, cartons and packaging inserts. Chennai's manufacturing belts — Ambattur, Ekkattuthangal, Sriperumbudur, Guindy — order these in volume and on schedule. Here is how we handle them at Super Printers, Pallavaram.</p>

      <h2>What industrial buyers order most</h2>
      <ul>
        <li><strong>Product &amp; asset labels</strong> — durable <a href="/stickers/">stickers and labels</a> in vinyl or polyester for cartons, machines, spares and inventory</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/Barcode" target="_blank" rel="noopener">Barcode</a> / QR labels</strong> — serialized, variable-data runs for tracking and traceability</li>
        <li><strong>Safety &amp; compliance labels</strong> — hazard, handling and statutory markings (e.g. <a href="https://www.bis.gov.in/" target="_blank" rel="noopener">BIS</a> standards)</li>
        <li><strong>Technical manuals &amp; datasheets</strong> — saddle-stitch or perfect-bound, see <a href="/catalogues/">catalogue printing</a></li>
        <li><strong>Cartons &amp; inserts</strong> — printed packaging and protective inserts</li>
        <li><strong>ID &amp; access cards</strong> — employee and contractor <a href="/pvc-id-cards/">PVC ID cards</a> in batches</li>
      </ul>

      <h2>Why manufacturers print with a local press</h2>
      <p>National label vendors print in a far-off facility and add shipping days; when a batch is wrong, there is no one to walk in to. We are a GST-registered press 30–40 minutes from the Ambattur and Sriperumbudur estates, so reorders are fast, reprints are exact (we keep your artwork and specs on file), and a QA manager can collect a first-piece sample the same day. Bulk runs go on offset for the lowest per-unit price; short or variable-data runs go digital — read <a href="/blog/offset-vs-digital-printing/">offset vs digital</a> for the trade-off.</p>

      <h2>Volumes, turnaround and paperwork</h2>
      <p>Industrial orders run from a few hundred labels to tens of thousands. Standard label and manual reorders are ready in 24–48 hours after proof approval; first-time jobs with new artwork take a little longer for setup. Every order ships with a proper GST tax invoice (33AAGPB7462F1Z1) so procurement and input-credit reconciliation stay clean. Supply on a PO with agreed terms for repeat work.</p>

      <h2>Labels are their own discipline</h2>
      <p>Substrate, adhesive and compliance matter more on an industrial label than on a brochure — a label that peels in a hot warehouse or fails a regulatory check is a real cost. We cover material choice, durability and regulatory marking in detail in the <a href="/blog/industrial-label-printing-chennai/">industrial label printing buyer's guide</a>.</p>

      <p>For office-side print (brochures, stationery, reports), see the <a href="/blog/commercial-printing-chennai-guide/">commercial printing guide</a>. To price an industrial run, <a href="/get-quote/">send specs on WhatsApp</a> — quantity, substrate, size and any compliance requirement — and we will quote in about 30 minutes.</p>
    `,
    faqs: [
      { q: "What is industrial printing?", a: "Print a factory or manufacturer runs on rather than markets with — product and asset labels, barcode/QR labels, safety and compliance markings, technical manuals and datasheets, cartons and packaging inserts." },
      { q: "Do you supply manufacturers in the Ambattur and Sriperumbudur belts?", a: "Yes — we are a GST-registered press 30-40 minutes from the Ambattur and Sriperumbudur estates, so reorders are fast, reprints are exact (artwork kept on file), and a first-piece sample can be collected the same day." },
      { q: "What volumes and turnaround do you handle?", a: "From a few hundred labels to tens of thousands. Standard reorders are ready in 24-48 hours after proof approval; bulk runs go on offset for the lowest per-unit price, short or variable-data runs go digital." },
      { q: "Do industrial orders come with GST invoices?", a: "Yes — every order ships with a proper GST tax invoice (33AAGPB7462F1Z1) so procurement and input-credit reconciliation stay clean. Repeat work can run on a purchase order." },
    ],
  },
  {
    slug: "industrial-label-printing-chennai",
    image: "/images/hero/bill-books.jpg",
    title: "Industrial Label Printing & Compliance: A Buyer's Guide for Chennai Factories",
    description: "How to spec industrial labels in Chennai — substrates (vinyl, polyester, void), adhesives, durability, BIS/GHS compliance, barcode/serialized variable data, and MOQs. From a Pallavaram press.",
    keyword: "industrial label printing chennai",
    date: "2026-06-01",
    category: "Business",
    author: { name: "N. Baranidharan", url: "/about/" },
    content: `
      <p>A wrong label is more expensive than a wrong brochure: it peels off in a warehouse, fails a compliance audit, or stops a shipment. If you are procuring labels for a Chennai factory, this guide covers how to spec substrate, adhesive, durability and compliance so the batch is right the first time. It pairs with our broader <a href="/blog/industrial-printing-chennai/">industrial printing in Chennai</a> guide.</p>

      <h2>Choose the substrate for the environment</h2>
      <ul>
        <li><strong>Paper</strong> — cheapest, fine for indoor cartons and short-life inventory tags</li>
        <li><strong>Vinyl</strong> — flexible and water-resistant, good for drums, equipment and outdoor use</li>
        <li><strong>Polyester (PET)</strong> — heat, chemical and abrasion resistant, for asset tags and harsh environments</li>
        <li><strong>Void / tamper-evident</strong> — leaves a "VOID" mark when peeled, for warranty seals and security</li>
      </ul>
      <p>Match the material to where the label lives: a label on a hot machine or a chemical drum needs polyester, not paper.</p>

      <h2>Adhesive matters as much as the face stock</h2>
      <p>Permanent adhesive for assets that never move; removable for short-life inventory and returnable containers; high-tack for low-energy or curved surfaces like HDPE drums. Tell us the surface and the temperature range and we will spec the adhesive — getting this wrong is the most common reason a label fails in the field.</p>

      <h2>Compliance and statutory marking</h2>
      <p>Depending on your product, labels may need <strong><a href="https://www.bis.gov.in/" target="_blank" rel="noopener">BIS</a></strong> marking, <strong><a href="https://unece.org/transport/dangerous-goods/ghs-rev10-2023" target="_blank" rel="noopener">GHS</a></strong> hazard pictograms for chemicals, MRP/statutory declarations for consumer goods, or batch and expiry data. We print these to your approved artwork and keep the file on record so every reorder is identical — important when an auditor compares batches.</p>

      <h2>Barcodes, QR and serialized variable data</h2>
      <p>Tracking and traceability need each label to carry a different code. Our digital press handles variable-data runs — sequential barcodes, unique QR codes, batch numbers — across a single job, so 5,000 labels can each be unique without 5,000 setups. See <a href="/digital-printing-chennai/">digital printing</a> for how variable data works.</p>

      <h2>MOQs, lead time and reorders</h2>
      <p>Short digital label runs start small (a few hundred); bulk moves to roll or sheet offset for a lower per-unit price. First-time jobs need proof approval and setup; reorders from a held file are typically ready in 24–48 hours. Every order ships with a GST tax invoice for clean procurement.</p>

      <p>Send your label spec — substrate, size, surface, environment and any compliance requirement — to <a href="/get-quote/">our team on WhatsApp</a> and we will recommend the material and quote it. Browse <a href="/stickers/">sticker and label printing</a> for standard options.</p>
    `,
    faqs: [
      { q: "Which label material should I choose?", a: "Match it to the environment: paper for indoor cartons and short-life tags, vinyl for water-resistant and outdoor use, polyester (PET) for heat/chemical/abrasion resistance, and void/tamper-evident for warranty and security seals." },
      { q: "Do you print BIS and GHS compliant labels?", a: "Yes — we print to your approved artwork for BIS marking, GHS hazard pictograms, MRP/statutory declarations and batch/expiry data, and keep the file on record so every reorder is identical for audits." },
      { q: "Can you do serialized barcode or QR labels?", a: "Yes — our digital press handles variable-data runs where each label carries a unique sequential barcode, QR code or batch number, across a single job without per-label setup." },
      { q: "What is the minimum order for industrial labels?", a: "Short digital runs start at a few hundred; bulk moves to roll or sheet offset for a lower per-unit price. First-time jobs need proof approval and setup; reorders from a held file are ready in 24-48 hours." },
    ],
  },
  {
    slug: "how-to-choose-printing-press-chennai",
    image: "/images/hero/brochures.jpg",
    title: "How to Choose a Printing Press in Chennai (2026): Offset vs Digital, Pricing & Turnaround",
    description: "A buyer's guide to choosing a printing press in Chennai — press vs reseller, offset vs digital, real price ranges, turnaround norms, a file-prep checklist, and red flags to avoid.",
    keyword: "printing press in chennai",
    date: "2026-06-02",
    category: "Guide",
    author: { name: "N. Baranidharan", url: "/about/" },
    content: `
      <p>Choosing a printing press in Chennai comes down to five things: are you talking to a real press or a middleman, does the job suit offset or digital, what should it actually cost, how fast can it ship, and are your files ready. This guide answers each so you can brief any printer with confidence — not just us.</p>

      <h2>1. Press vs reseller — the question that saves you 30-60%</h2>
      <p>Most "printers" advertising in Chennai are intermediaries. They take your order, send it to a press, and add 30-60% markup. You pay more and lose a day in the handoff. A real press owns the machines. Three quick tests: <strong>do they quote a price on the spot</strong> (resellers stall — they have to ask their printer first), <strong>do they have public reviews</strong>, and <strong>can you visit and see the machines running</strong>. If the answer to all three is no, you are likely paying a middleman. We are the press — walk into our Saraswathy Colony shop in <a href="/printing-press-pallavaram/">Pallavaram</a> and you are talking to the team running the offset and digital lines.</p>

      <h2>2. Offset vs digital — match the method to the quantity</h2>
      <p>This is the single biggest cost decision. The rule of thumb:</p>
      <ul>
        <li><strong>Digital</strong> — best under 500 pieces, same-day jobs, photo-quality, and variable data (each piece different). No plate setup, so small runs stay cheap. See <a href="/digital-printing-chennai/">digital printing in Chennai</a>.</li>
        <li><strong><a href="https://en.wikipedia.org/wiki/Offset_printing" target="_blank" rel="noopener">Offset</a></strong> — best at 500-1,000+ identical pieces, exact Pantone spot-colour matching, and the lowest per-piece cost at volume. See <a href="/offset-printing-press-in-chennai/">offset printing press in Chennai</a>.</li>
      </ul>
      <p>The crossover sits around 500-1,000 pieces. A good press runs both and tells you which is cheaper for your quantity; a one-method shop pushes you toward what it owns. Our <a href="/blog/offset-vs-digital-printing/">offset vs digital guide</a> has the full breakdown.</p>

      <h2>3. What printing should cost in Chennai (2026)</h2>
      <p>Pricing should never be a secret. These are real factory-direct "from" figures for standard specs — use them to sanity-check any quote you receive:</p>
      <table>
        <thead><tr><th>Product</th><th>From</th></tr></thead>
        <tbody>
          <tr><td>Visiting cards (300 GSM matt)</td><td>₹149 / 100</td></tr>
          <tr><td>Wedding cards</td><td>₹5 / card</td></tr>
          <tr><td>A4 tri-fold brochures (130 GSM, 1,000 qty)</td><td>₹6 / piece</td></tr>
          <tr><td>GST bill books (50-leaf NCR)</td><td>₹280 / book</td></tr>
          <tr><td>Letterheads (100 GSM bond)</td><td>₹4 / sheet</td></tr>
          <tr><td>Flex banners</td><td>₹12 / sq ft</td></tr>
          <tr><td>PVC ID cards</td><td>₹35 / card</td></tr>
        </tbody>
      </table>
      <p>Finishes (lamination, spot UV, foil) add cost; bulk runs lower the per-piece price. For business and bulk orders, see the <a href="/blog/commercial-printing-cost-chennai/">commercial printing cost guide</a>.</p>

      <h2>4. Turnaround — what is normal</h2>
      <p>For a press printing in-house (not outsourcing), expect: digital jobs ready in <strong>24 hours</strong>, offset runs in <strong>48-72 hours</strong>, and wedding cards in <strong>48-72 hours</strong> after proof approval. A printer quoting a week for 500 digital business cards is almost certainly reselling. Always confirm whether the quoted time starts at order or at proof approval.</p>

      <h2>5. File-prep checklist (avoid reprints)</h2>
      <ul>
        <li><strong><a href="https://en.wikipedia.org/wiki/CMYK_color_model" target="_blank" rel="noopener">CMYK</a></strong>, not RGB, so colours do not shift</li>
        <li><strong>300 DPI</strong> at final size for sharp output</li>
        <li><strong>3mm bleed</strong> on all sides, with backgrounds extended into it</li>
        <li>Important text <strong>5mm inside</strong> the trim line</li>
        <li>Supply a <strong>print-ready PDF</strong> (PDF/X-1a or X-4), fonts embedded</li>
      </ul>
      <p>Full detail in our <a href="/blog/how-to-prepare-files-for-printing/">print file preparation guide</a>. No print-ready file? A real press has an in-house design team and shares a free proof before printing.</p>

      <h2>6. Red flags to walk away from</h2>
      <ul>
        <li>Will not quote a price without "checking" (likely a reseller)</li>
        <li>No reviews, no shop you can visit, no machines to see</li>
        <li>Prints without sending a proof first (you only see mistakes after they are printed)</li>
        <li>One-method shop steering you to offset or digital regardless of your quantity</li>
        <li>Vague turnaround that starts "after design" with no committed date</li>
      </ul>

      <h2>Briefing a printer (including us)</h2>
      <p>Send five things and you get a firm quote in one message: product, quantity, size, paper/GSM, and finish. At Super Printers — a 35-year <a href="/printing-press-chennai/">printing press in Chennai</a> rated 4.8 across 147 Google reviews — <a href="/get-quote/">WhatsApp the brief</a> and we reply with an itemised price in about 30 minutes, a free design proof before printing, and a GST invoice on every order. Pickup in Pallavaram or delivery across 30+ Chennai suburbs.</p>
    `,
    faqs: [
      { q: "How do I tell a real printing press from a reseller in Chennai?", a: "Three tests: do they quote a price on the spot, do they have public reviews, and can you visit and see the machines. Resellers stall on price because they have to ask their printer first and add 30-60% markup." },
      { q: "Should I use offset or digital printing?", a: "Digital under ~500 pieces, for same-day jobs, photo-quality and variable data. Offset at 500-1,000+ identical pieces for Pantone matching and the lowest per-piece cost. A good press runs both and recommends the cheaper fit." },
      { q: "What should printing cost in Chennai?", a: "From-prices for standard specs: visiting cards ₹149/100, wedding cards ₹5/card, tri-fold brochures ₹6/piece, GST bill books ₹280/book, letterheads ₹4/sheet, flex banners ₹12/sq ft, PVC ID cards ₹35/card. Finishes add cost; bulk lowers it." },
      { q: "How long should printing take?", a: "From an in-house press: digital in 24 hours, offset in 48-72 hours, wedding cards in 48-72 hours after proof approval. A week for 500 digital business cards usually signals a reseller. Confirm whether the clock starts at order or at proof approval." },
      { q: "What makes files print-ready?", a: "CMYK (not RGB), 300 DPI at final size, 3mm bleed on all sides, important text 5mm inside the trim line, and a print-ready PDF (PDF/X-1a or X-4) with fonts embedded. No file? A real press has an in-house design team and proofs before printing." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPostData | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
