import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

/**
 * Pillar guide page — "The Ultimate Guide to Print Marketing in Chennai".
 * Targets broad, high-volume queries (printing in chennai, printing
 * guide chennai, chennai printing services, how to print in chennai).
 *
 * Pillar = comprehensive single-URL hub that internally links to every
 * service-specific landing page and suburb landing page. Per the Phase 2
 * competitive analysis, none of the top 5 Chennai printing competitors
 * have a pillar page — owning this content cluster is a defensible
 * differentiator.
 */
const ChennaiPrintingGuidePage = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BUSINESS.siteUrl}/chennai-printing-guide#article`,
    headline: "The Ultimate Guide to Printing Services in Chennai",
    description:
      "A complete buyer's guide to printing in Chennai — services, materials, turnaround, prices and how to choose a Chennai printing press. From 35 years on the Pallavaram press floor.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BUSINESS.siteUrl}/chennai-printing-guide`,
    },
    image: [`${BUSINESS.siteUrl}/og-image.jpg`],
    author: {
      "@type": "Person",
      "@id": `${BUSINESS.siteUrl}/#founder`,
      name: BUSINESS.founder,
      jobTitle: BUSINESS.founderTitle,
      worksFor: { "@id": `${BUSINESS.siteUrl}/#business` },
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BUSINESS.siteUrl}/#organization`,
      name: BUSINESS.shortName,
      url: BUSINESS.siteUrl,
      logo: { "@type": "ImageObject", url: `${BUSINESS.siteUrl}/super-printers-logo.png` },
    },
    datePublished: "2025-08-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-IN",
    about: [
      { "@type": "Thing", name: "Printing" },
      { "@type": "Thing", name: "Offset printing" },
      { "@type": "Thing", name: "Digital printing" },
      { "@type": "Place", name: "Chennai" },
    ],
  };

  return (
    <>
      <SEOHead
        title="Printing in Chennai — Complete Guide to Services, Prices, Turnaround"
        description="The complete guide to printing services in Chennai — what to print, when offset vs digital, paper / GSM choices, finishing options, prices, turnaround and how to pick the right Chennai printing press."
        canonical="/chennai-printing-guide"
        schemaMarkup={articleSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Printing Guide", url: "/chennai-printing-guide" },
        ]}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>Chennai Printing Guide</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              The Complete Guide to Printing Services in Chennai
            </h1>
            <p className="text-lg leading-relaxed lead-answer" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              A practical buyer's guide written from 35 years on the Pallavaram press floor. What to print, when to choose offset
              vs digital, how to read GSM and paper specs, what finishing actually costs, how long things take, and how to pick a
              Chennai printing press that won't disappoint. By N. Baranidharan, founder of Super Printers.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <section className="py-8 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-base font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              On this page
            </h2>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm list-decimal pl-5" style={{ color: "var(--color-primary)" }}>
              <li><a href="#services" className="hover:underline">Printing services available in Chennai</a></li>
              <li><a href="#offset-vs-digital" className="hover:underline">Offset vs digital — which is right?</a></li>
              <li><a href="#paper-gsm" className="hover:underline">Paper, GSM and finishes</a></li>
              <li><a href="#pricing" className="hover:underline">Indicative Chennai pricing</a></li>
              <li><a href="#turnaround" className="hover:underline">Realistic turnaround times</a></li>
              <li><a href="#file-prep" className="hover:underline">How to prepare print-ready files</a></li>
              <li><a href="#choose-printer" className="hover:underline">How to choose a printer in Chennai</a></li>
              <li><a href="#suburbs" className="hover:underline">Delivery across Chennai suburbs</a></li>
            </ol>
          </div>
        </section>

        {/* Section 1 — services */}
        <section id="services" className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              1. Printing services available in Chennai
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              Most Chennai printing presses split their work across four buckets:
            </p>
            <ul className="list-disc pl-6 text-base space-y-2 mb-4" style={{ color: "#374151" }}>
              <li>
                <strong>Life-event printing</strong> — wedding invitations, naming-ceremony cards, upanayanam, sashtiabdapoorthi
                (60th-birthday), sadhabhishekam (80th-birthday). High volume in Mylapore, Adyar, Anna Nagar, T. Nagar, Nungambakkam.
                See our <Link to="/wedding-cards" className="underline" style={{ color: "var(--color-primary)" }}>wedding card page</Link>.
              </li>
              <li>
                <strong>Business / B2B printing</strong> — visiting cards, letterheads, GST bill books, brochures, presentation
                folders, employee ID cards. Heavy demand from the Guindy / OMR / Manapakkam IT corridor and the Mount Road
                head-office belt. See our <Link to="/business-cards-chennai" className="underline" style={{ color: "var(--color-primary)" }}>business cards guide</Link>.
              </li>
              <li>
                <strong>Retail / commercial printing</strong> — flyers, pamphlets, posters, festive-sale leaflets, retail
                banners. Volume from T. Nagar showrooms (Ranganathan St / Usman Rd), Pondy Bazaar and Mount Road retail.
              </li>
              <li>
                <strong>Large-format and packaging</strong> — flex banners, vinyl signage, roll-up standees, custom mailer
                boxes, folding cartons, food-safe packaging. Demand from D2C startups, hotels, hospitals, IT events. See our
                <Link to="/large-format-signage-chennai" className="underline" style={{ color: "var(--color-primary)" }}> large-format signage</Link> and{" "}
                <Link to="/custom-packaging-printing-chennai" className="underline" style={{ color: "var(--color-primary)" }}>custom packaging</Link> pages.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2 — offset vs digital */}
        <section id="offset-vs-digital" className="py-10 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              2. Offset vs digital — which is right for your job?
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              The single biggest cost decision in any print job. Rule of thumb: <strong>500+ pieces and Pantone matching matters → offset</strong>.
              <strong> Under 500, or urgent, or per-piece variable data → digital.</strong>
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              Offset has a fixed plate-setup cost (typically ₹2,000-₹4,000 per colour) but the per-piece cost is low — at 5,000+
              pieces, full-colour A4 art paper is ₹0.60-₹1.20/piece. Digital has no setup but charges per piece — usually
              ₹4-₹8 per A4 sheet. Crossover for most jobs is around 500-1,000 pieces. For premium spot-Pantone colours (jewellery
              brand collateral, wedding card foil-base) offset is the only option — digital CMYK can only approximate.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
              Deeper details on each: <Link to="/offset-printing-press-in-chennai" className="underline" style={{ color: "var(--color-primary)" }}>offset printing press in Chennai</Link>{" "}
              and <Link to="/digital-printing-press-in-chennai" className="underline" style={{ color: "var(--color-primary)" }}>digital printing press in Chennai</Link>.
            </p>
          </div>
        </section>

        {/* Section 3 — paper / GSM */}
        <section id="paper-gsm" className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              3. Paper, GSM and finishes — what to ask for
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              GSM (grams per square metre) measures paper thickness. The shortcuts:
            </p>
            <ul className="list-disc pl-6 text-base space-y-1 mb-4" style={{ color: "#374151" }}>
              <li><strong>70-80 GSM</strong> — newsprint, cheap pamphlets, copier paper. Used for bulk leaflet drops.</li>
              <li><strong>100-130 GSM</strong> — lightweight brochures, flyers. Folds without cracking.</li>
              <li><strong>170-200 GSM</strong> — sturdy brochures, magazine covers, restaurant menu cards.</li>
              <li><strong>250-300 GSM</strong> — visiting cards (standard), wedding cards (standard), letterheads (premium).</li>
              <li><strong>350-400 GSM</strong> — premium visiting cards, gift-box cards, presentation folders.</li>
              <li><strong>600 GSM duplex cotton</strong> — luxury letterpress visiting cards (Adyar / Nungambakkam tier).</li>
            </ul>
            <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
              Finishing options layer on top: matt or gloss lamination, spot UV varnish (raised gloss on one element), gold /
              silver foil stamping, embossing / debossing, die-cutting, laser-cutting, edge-painting. Each adds 30-100%
              to the per-piece cost — but transforms how the print feels in hand.
            </p>
          </div>
        </section>

        {/* Section 4 — pricing */}
        <section id="pricing" className="py-10 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              4. Indicative Chennai pricing — what things actually cost
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              First-party pricing from our Pallavaram press, May 2026. Different presses will quote within ±20%.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li><strong>Wedding cards</strong> — from ₹5/card (basic) to ₹120-250/card (premium handmade paper + foil + letterpress).</li>
              <li><strong>Visiting cards</strong> — ₹149 for 100 (300 GSM matt); ₹399 for 500; ₹699 for 1,000. Premium tiers from ₹4-₹25/card.</li>
              <li><strong>Brochures (tri-fold A4)</strong> — from ₹6/copy at 1,000 qty; ₹3.50 at 5,000 qty.</li>
              <li><strong>GST bill books (2-part NCR)</strong> — from ₹280/book (50 sheets); ₹380 for 3-part.</li>
              <li><strong>Letterheads</strong> — from ₹3.20/sheet at 500 qty (90 GSM bond); ₹4.50 (premium cotton bond).</li>
              <li><strong>Flex banners</strong> — frontlit ₹12/sqft; backlit ₹18/sqft; vinyl ₹35/sqft.</li>
              <li><strong>Roll-up standees</strong> — ₹2,400 per 800×2000 mm standee with aluminium base.</li>
              <li><strong>Rubber stamps</strong> — ₹180 self-inking, ₹450 date stamp, ₹1,200 embossing seal.</li>
              <li><strong>PVC ID cards</strong> — ₹35 (basic PVC) to ₹95 (RFID Mifare).</li>
            </ul>
          </div>
        </section>

        {/* Section 5 — turnaround */}
        <section id="turnaround" className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              5. Realistic turnaround times
            </h2>
            <ul className="list-disc pl-6 text-base space-y-1" style={{ color: "#374151" }}>
              <li>Visiting cards — 4-6 hours (walk-in same day before 1pm); 24 hours otherwise.</li>
              <li>Rubber stamps — 4 hours same-day pickup.</li>
              <li>Wedding cards — 48-72 hours (digital); 5-7 working days (offset, 500+ pieces).</li>
              <li>Brochures — 3-5 working days.</li>
              <li>Bill books — 3-5 working days.</li>
              <li>Bulk offset (5,000+ pieces) — 5-7 working days.</li>
              <li>Flex banners — 24-48 hours; same-day rush possible.</li>
              <li>PVC ID cards (100-500) — 3-4 working days.</li>
              <li>Custom packaging — 7-10 working days (folding cartons), 10-14 days (pouches).</li>
            </ul>
            <p className="text-base leading-relaxed mt-4" style={{ color: "#374151" }}>
              Wedding-season peak (October-February) and Diwali festive (October-November) windows fill up early. Book 2-3
              weeks ahead during those windows.
            </p>
          </div>
        </section>

        {/* Section 6 — file prep */}
        <section id="file-prep" className="py-10 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              6. How to prepare a print-ready file
            </h2>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li><strong>PDF preferred</strong> — print-ready PDF with fonts embedded, 3 mm bleed on all sides, CMYK colour mode.</li>
              <li><strong>Resolution</strong> — all images at 300 DPI; anything lower will print soft / pixelated.</li>
              <li><strong>Colour mode</strong> — CMYK, not RGB. RGB blues shift toward purple in print; reds darken.</li>
              <li><strong>Fonts</strong> — outline / flatten or embed. Otherwise we may have to substitute.</li>
              <li><strong>Bleed</strong> — design extends 3 mm past the trim line on every edge so trimming doesn't leave a white sliver.</li>
              <li>For details and templates, see the <Link to="/printing-guide" className="underline" style={{ color: "var(--color-primary)" }}>file-prep printing guide</Link>.</li>
            </ul>
          </div>
        </section>

        {/* Section 7 — how to choose */}
        <section id="choose-printer" className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              7. How to pick a printing press in Chennai
            </h2>
            <ol className="list-decimal pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li><strong>Ask if they own the press or outsource.</strong> Most card shops in Chennai resell to a press like ours and mark up 30-60%. Find the press, not the middleman.</li>
              <li><strong>Ask for a digital proof before printing.</strong> Any press that won't share proof on WhatsApp before printing is a red flag.</li>
              <li><strong>Look at their Google reviews</strong> — count and read recent ones. Look for specific complaints about colour, turnaround, or hidden charges.</li>
              <li><strong>Pricing tiers should be clear</strong> — basic to premium. If a press only quotes "from ₹X" without explaining what changes at higher tiers, ask.</li>
              <li><strong>Walk in once</strong> — see the press in person before placing a large order. Look at sample work, machinery, and team.</li>
              <li><strong>Check GSTIN on quote</strong> — GST-registered presses are legit. Ours is 33AAGPB7462F1Z1.</li>
            </ol>
          </div>
        </section>

        {/* Section 8 — suburbs / delivery */}
        <section id="suburbs" className="py-10 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              8. Printing delivery across Chennai suburbs
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "#374151" }}>
              From our Pallavaram press at No. 8 Saraswathy Colony we deliver to 30+ Chennai suburbs. Each suburb has a
              dedicated page with route details, delivery times and area-specific service notes:
            </p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm" style={{ color: "var(--color-primary)" }}>
              <li><Link to="/printing-press-pallavaram" className="hover:underline">Pallavaram</Link></li>
              <li><Link to="/printing-press-tambaram" className="hover:underline">Tambaram</Link></li>
              <li><Link to="/printing-press-chromepet" className="hover:underline">Chromepet</Link></li>
              <li><Link to="/printing-press-velachery" className="hover:underline">Velachery</Link></li>
              <li><Link to="/printing-press-guindy" className="hover:underline">Guindy</Link></li>
              <li><Link to="/printing-press-adyar" className="hover:underline">Adyar</Link></li>
              <li><Link to="/printing-press-t-nagar" className="hover:underline">T. Nagar</Link></li>
              <li><Link to="/printing-press-anna-nagar" className="hover:underline">Anna Nagar</Link></li>
              <li><Link to="/printing-press-mylapore" className="hover:underline">Mylapore</Link></li>
              <li><Link to="/printing-press-nungambakkam" className="hover:underline">Nungambakkam</Link></li>
              <li><Link to="/printing-press-porur" className="hover:underline">Porur</Link></li>
              <li><Link to="/printing-press-omr" className="hover:underline">OMR</Link></li>
              <li><Link to="/printing-press-sholinganallur" className="hover:underline">Sholinganallur</Link></li>
              <li><Link to="/printing-press-vadapalani" className="hover:underline">Vadapalani</Link></li>
              <li><Link to="/printing-press-mogappair" className="hover:underline">Mogappair</Link></li>
              <li><Link to="/printing-press-ambattur" className="hover:underline">Ambattur</Link></li>
              <li><Link to="/printing-press-avadi" className="hover:underline">Avadi</Link></li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Ready to print something in Chennai?
            </h2>
            <p className="text-base mb-6" style={{ color: "#374151" }}>
              WhatsApp +91 98401 99878. Quote in 30 minutes, proof in 4 hours, prints in 24-48 hours.
            </p>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I need a printing quote in Chennai.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            >
              💬 Get a printing quote on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ChennaiPrintingGuidePage;
