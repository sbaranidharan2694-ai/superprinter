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
