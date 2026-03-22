import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";

/** Sample design gallery: 10 visiting card images. Place files in public/visiting-cards/ as visiting-card-01.png … visiting-card-10.png */
const VISITING_CARD_DESIGNS = [
  { src: "/visiting-cards/visiting-card-01.png", label: "Black & Gold Luxury" },
  { src: "/visiting-cards/visiting-card-02.png", label: "Modern Green & Teal" },
  { src: "/visiting-cards/visiting-card-03.png", label: "Blue & Purple Waves" },
  { src: "/visiting-cards/visiting-card-04.png", label: "Diagonal Blue Layout" },
  { src: "/visiting-cards/visiting-card-05.png", label: "Yellow & Orange Geometric" },
  { src: "/visiting-cards/visiting-card-06.png", label: "Minimal Red & Black" },
  { src: "/visiting-cards/visiting-card-07.png", label: "Black Hexagon & Red Accent" },
  { src: "/visiting-cards/visiting-card-08.png", label: "Watercolor Brush Strokes" },
  { src: "/visiting-cards/visiting-card-09.png", label: "Monochrome Geometric" },
  { src: "/visiting-cards/visiting-card-10.png", label: "Lime Green & Dark" },
];

const SPEC_ROWS = [
  { type: "Standard Gloss", paper: "300 GSM", finish: "Gloss Lam", minQty: "100 pcs" },
  { type: "Matt", paper: "300 GSM", finish: "Matt Lam", minQty: "100 pcs" },
  { type: "Spot UV", paper: "300 GSM", finish: "Spot UV", minQty: "100 pcs" },
  { type: "Foil", paper: "400 GSM", finish: "Velvet+Foil", minQty: "100 pcs" },
  { type: "No Lam", paper: "300 GSM", finish: "No Lam", minQty: "100 pcs" },
];

function VisitingCardGalleryItem({
  design,
  index,
  onClick,
}: {
  design: { src: string; label: string };
  index: number;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl overflow-hidden border border-border-light bg-white shadow-sm hover:shadow-md transition-shadow text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      aria-label={`View ${design.label} design`}
    >
      <div className="aspect-[3.5/2] bg-gray-100 relative overflow-hidden">
        {!error ? (
          <img
            src={design.src}
            alt={design.label}
            className={`w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        ) : null}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-ui text-sm">
            Sample {index + 1}
          </div>
        )}
      </div>
      <p className="px-3 py-2 font-ui text-sm text-ink-black truncate" title={design.label}>
        {design.label}
      </p>
    </button>
  );
}

const VisitingCardsPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxDesign = lightboxIndex != null ? VISITING_CARD_DESIGNS[lightboxIndex] : null;

  return (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Visiting Card Printing Chennai | From ₹149 for 100 Cards | Gloss, Matt, Spot UV | Super Printers"
      description="Best visiting card printing in Chennai from ₹149. Gloss, Matt, Spot UV, Velvet, Gold Foil finishes. Free proof before print. Ready in 24 hours. Pickup Pallavaram or delivery across Chennai. WhatsApp +91 98401 99878."
      canonical="/visiting-cards"
      keywords="visiting card printing Chennai, business card printing Pallavaram, visiting cards 100 pcs Chennai, spot UV visiting cards Chennai, matt visiting cards, gloss business cards Chennai, cheap visiting cards Chennai, fast visiting card printing, visiting card near me Chennai"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Visiting Cards", url: "/visiting-cards" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/visiting-cards",
        name: "Visiting card printing — Super Printers",
        serviceType: "Business and visiting card printing",
        description:
          "Premium visiting cards: gloss, matt, Spot UV, foil; 300–400 GSM; minimum quantities; design support; Pallavaram, Chennai.",
      })}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-ink-black">Visiting Cards</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Visiting Card Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Premium visiting cards. Gloss, Matt, Spot UV, Foil.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/#quote-form"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 ease-spring hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Get Quote
            </Link>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need visiting card printing. Please quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 border-navy text-navy hover:border-gold hover:text-gold transition-all"
              style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}
            >
              WhatsApp Order
            </a>
          </div>
        </header>

        <section className="mb-14" aria-labelledby="design-gallery-heading">
          <h2 id="design-gallery-heading" className="font-display font-semibold text-xl text-ink-black mb-2">
            Sample designs
          </h2>
          <p className="font-ui text-gray-600 mb-6">
            Get inspired — we print all styles: luxury black &amp; gold, modern colour blocks, minimal, and more.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {VISITING_CARD_DESIGNS.map((design, i) => (
              <VisitingCardGalleryItem
                key={design.src}
                design={design}
                index={i}
                onClick={() => setLightboxIndex(i)}
              />
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Specs &amp; Options</h2>
          <div className="overflow-x-auto rounded-3xl border border-border-light shadow-card">
            <table className="w-full min-w-[500px] text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--gold)" }}>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Type</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Paper</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Finish</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Min Qty</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.paper}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.finish}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.minQty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Quote via WhatsApp.</p>
          </div>
        </section>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">What&apos;s Included</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li className="flex items-center gap-2">✓ Double-sided printing (front &amp; back)</li>
            <li className="flex items-center gap-2">✓ Full colour (4C + 4C)</li>
            <li className="flex items-center gap-2">✓ Standard size: 89mm × 52mm</li>
            <li className="flex items-center gap-2">✓ GST invoice included</li>
            <li className="flex items-center gap-2">✓ Free digital proof before printing</li>
            <li className="flex items-center gap-2">✓ Free design review service</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-border-light bg-white p-6 shadow-card">
          <h2 className="font-display font-semibold text-lg text-ink-black mb-2">Don&apos;t have a design?</h2>
          <p className="font-ui text-sm text-gray-700 mb-4">
            We can create one for you. WhatsApp us for design and quote.
          </p>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-ui font-semibold text-ink-black"
            style={{ backgroundColor: "var(--gold)" }}
          >
            WhatsApp for design service
          </a>
        </section>
      </div>
    </div>

      {/* Lightbox for sample design */}
      {lightboxDesign && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="View design"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/90 hover:text-white text-2xl font-bold w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxDesign.src}
              alt={lightboxDesign.label}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
            <p className="absolute bottom-0 left-0 right-0 py-2 text-center font-ui text-sm text-white bg-black/50 rounded-b-lg">
              {lightboxDesign.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisitingCardsPage;
