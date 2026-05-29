import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

/**
 * /our-press — infrastructure / capacity page (the Rathna Offset pattern).
 *
 * The Phase 5 competitor audit identified press-inventory transparency as
 * one of two things Rathna Offset uses to rank for B2B publisher queries
 * ("book printer south india", "web offset printer chennai"). Listing the
 * exact press inventory by category (sheet-fed offset / digital / screen /
 * finishing) is unique entity content Google rewards.
 *
 * Machine model names below are reasonable defaults documented in our
 * services data + business profile. **Owner should verify each entry**
 * matches actual on-floor equipment before this page goes live —
 * misrepresenting equipment is an honesty issue and a tier-1 customer
 * trust risk.
 */
const OurPressPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BUSINESS.siteUrl}/our-press#about`,
    name: "Super Printers — Press Floor & Equipment",
    description:
      "Inside the Super Printers facility at Pallavaram, Chennai — our offset, digital and screen-printing presses, plus the finishing and post-press equipment that makes our 24-48 hour turnaround possible.",
    url: `${BUSINESS.siteUrl}/our-press`,
    mainEntity: { "@id": `${BUSINESS.siteUrl}/#business` },
    isPartOf: { "@id": `${BUSINESS.siteUrl}/#website` },
    inLanguage: "en-IN",
  };

  return (
    <>
      <SEOHead
        title="Our Press Floor — Offset, Digital & Finishing | Super Printers Chennai"
        description="See the machinery at Super Printers' Pallavaram press — offset, digital and screen-printing equipment plus finishing capability that keeps our Chennai print turnaround at 24-48 hours."
        canonical="/our-press"
        schemaMarkup={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Press Floor", url: "/our-press" },
        ]}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>Our Press Floor</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Our Press Floor — 35 Years of In-House Capacity
            </h1>
            <p className="text-lg leading-relaxed lead-answer" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              Super Printers has owned and operated its own offset and digital presses since 1990. The reason we deliver
              wedding cards in 48 hours and visiting cards same-day is that the entire workflow — from plate-making to
              finishing — happens under one roof at our Pallavaram facility. Below is what's actually on our press floor.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Sheet-fed offset printing
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
              Sheet-fed offset is our largest-volume capability — used for wedding card runs (250-2,000+ pieces), corporate
              brochure catalogues, retail flyer drops, and bulk pamphlet jobs. We hold paper inventory in 70-350 GSM
              across art paper (gloss / matt), maplitho, bond and card stock so most orders don't wait on paper sourcing.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li>Multi-colour sheet-fed offset capability (4-colour CMYK process + 5th-colour spot Pantone)</li>
              <li>Sheet size: up to 20×30 inches</li>
              <li>In-house plate-making — no third-party plate dependency</li>
              <li>Pantone spot-colour matching to within ~2-3 Delta-E</li>
              <li>Paper stocks in inventory: 70 / 80 / 100 / 130 / 170 / 210 / 250 / 300 / 350 GSM</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Digital printing
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
              Digital is what powers our same-day turnaround — visiting cards, rubber stamps, small flyer runs, and
              variable-data PVC ID card batches for the IT corridor. CMYK photo-quality on stocks up to 350 GSM, no
              plate-setup cost, ideal for runs under 500 pieces.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li>Production-grade CMYK digital press (full-bleed, 300 DPI photo quality)</li>
              <li>Variable-data printing — per-piece personalisation (employee IDs, named wedding invites)</li>
              <li>Stocks supported: 70-350 GSM, art paper, card stock, textured papers, handmade paper</li>
              <li>Same-day turnaround for walk-in jobs received before 1 pm</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Screen printing
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
              Screen printing for high-opacity solid colours, metallic inks and specialty substrates — common for
              T-shirt printing, signage, brochure covers with metallic foil-emulation, and traditional wedding-card
              gold-ink overlays where digital can't reproduce the depth.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li>Manual + semi-automatic screen printing tables</li>
              <li>T-shirt printing — cotton, poly-cotton, polyester fabrics</li>
              <li>Specialty inks: gold, silver, metallic, glow-in-dark, raised-rubber</li>
              <li>Signage substrates: PVC sheet, sunboard, foam board</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Large-format & flex printing
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
              For banners, hoardings, vehicle decals and event branding — flex (PVC banner cloth), vinyl (adhesive),
              canvas and roll-up standees printed to size from a single 4×6 ft shop banner to 20×10 ft hoardings.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li>Wide-format inkjet press (up to 16 ft single-piece width)</li>
              <li>Frontlit and backlit flex, eco-solvent vinyl, canvas</li>
              <li>Roll-up standees with aluminium base, set-up ready in 48 hours</li>
              <li>Vehicle decal cast vinyl with industrial adhesive</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Finishing & post-press
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
              The single biggest reason our turnaround beats card-shop intermediaries: every finishing step happens here.
              Most Chennai print shops outsource one or two of these and add 30-60% markup. We keep them in-house.
            </p>
            <ul className="list-disc pl-6 text-base space-y-2" style={{ color: "#374151" }}>
              <li>Matt + gloss lamination (single-side or both sides)</li>
              <li>Spot UV varnishing (raised gloss on selected design elements)</li>
              <li>Gold and silver foil stamping (hot-foil)</li>
              <li>Embossing and debossing</li>
              <li>Die-cutting (cards, tags, packaging, custom shapes)</li>
              <li>Laser-cutting (premium wedding card cutwork)</li>
              <li>Perforation and scoring</li>
              <li>Saddle-stitching, perfect-binding, spiral binding</li>
              <li>NCR carbonless layering (2-part and 3-part bill books)</li>
              <li>Numbering, serialisation, variable-data overprinting</li>
              <li>Edge-painting on premium visiting cards</li>
            </ul>
          </div>
        </section>

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              The 35-year story
            </h2>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#374151" }}>
              <strong>1990</strong> — N. Baranidharan founds Super Printers in Pallavaram with a single offset press and a
              commitment to quality. Wedding cards for the Pallavaram, Pammal, Cantonment and Anakaputhur catchment
              build the early reputation.
            </p>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#374151" }}>
              <strong>2000s</strong> — Digital printing added to serve the growing corporate stationery and small-batch
              market across Chennai. Visiting cards and bill books become a daily-volume product line.
            </p>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#374151" }}>
              <strong>2010s</strong> — Premium wedding card capability expanded — foil stamping, spot UV, laser-cutting,
              handmade-paper sourcing. Recognition as one of South Chennai's go-to wedding-card presses.
            </p>
            <p className="text-base leading-relaxed mb-3" style={{ color: "#374151" }}>
              <strong>2020</strong> — WhatsApp-first ordering launched. Customers across all 30+ Chennai suburbs now order
              by sending a brief, getting a proof in 30 minutes, and receiving finished work in 24-48 hours.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#374151" }}>
              <strong>Today</strong> — 10,000+ happy customers, 4.8 / 5 Google rating across 147 reviews, customers ranging
              from family wedding-card buyers in Mylapore and T. Nagar to corporate ID-card runs for IT campuses on OMR
              and Manapakkam.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Visit our press in Pallavaram
            </h2>
            <p className="text-base mb-6" style={{ color: "#374151" }}>
              No. 8, Saraswathy Colony, Pallavaram, Chennai 600043. Walk in Mon-Sat 9am-8pm or Sun 10am-4pm. Or WhatsApp{" "}
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-primary)" }}>+91 98401 99878</a>{" "}
              for a quote in 30 minutes.
            </p>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'd like to discuss a printing job.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            >
              💬 Discuss a job on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default OurPressPage;
