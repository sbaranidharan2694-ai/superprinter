/**
 * SEO blog posts — target keywords and ~400 word content.
 */

export interface BlogPostData {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  content: string;
  date: string;
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    slug: "how-to-prepare-files-for-printing",
    title: "How to Prepare Print Files: A Complete Guide for Chennai Designers",
    description: "A complete print file preparation guide for India: CMYK, DPI, bleed, and file formats. Get your files print-ready for visiting cards, brochures, and more.",
    keyword: "print file preparation guide India",
    date: "2025-03-01",
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
    title: "Paper GSM Guide: Which Paper Weight for Which Print Job?",
    description: "Understand paper GSM for printing in India. When to use 90 GSM, 170 GSM, or 300 GSM for letterheads, brochures, and visiting cards.",
    keyword: "paper GSM guide printing India",
    date: "2025-03-05",
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
      <p>Allow 3–5 working days after proof approval. Rush orders may be possible for an extra charge. Plan to order at least 2–3 weeks before your wedding to avoid last-minute stress.</p>
      <h2>How to Order</h2>
      <p>Send your design or reference images on WhatsApp. We'll send a proof for approval. Once you confirm, we'll print and deliver to your address in Chennai or you can pick up from our Pallavaram press. Serving Pallavaram, Chromepet, Tambaram, and all of South Chennai.</p>
    `,
  },
  {
    slug: "offset-vs-digital-printing",
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
    title: "Spot UV vs Gold Foil: Which Business Card Finish is Right for You?",
    description: "Compare Spot UV and gold foil finishes for business cards in India. Pros, cons, and when to choose each for maximum impact.",
    keyword: "spot UV vs foil business cards India",
    date: "2025-03-10",
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
];

export function getPostBySlug(slug: string): BlogPostData | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
