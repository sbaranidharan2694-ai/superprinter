import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

const SPEC_ROWS = [
  { type: "Matt 300GSM", paper: "300 GSM", finish: "Matt", minQty: "50 pcs", delivery: "24 hours" },
  { type: "Velvet Lam", paper: "300 GSM", finish: "Velvet Lam", minQty: "50 pcs", delivery: "24 hours" },
  { type: "Foil Accent", paper: "300 GSM", finish: "Foil", minQty: "50 pcs", delivery: "24 hours" },
];

const WeddingCardsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Wedding Card Printing Chennai | Hindu, Christian, Muslim | Tamil & English | Super Printers Since 1990"
      description="Wedding invitation printing in Chennai. Hindu, Christian, Muslim & modern designs. Tamil & English. 35 years experience. WhatsApp: +91 98401 99878."
      canonical="/wedding-cards"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Wedding Cards", url: "/wedding-cards" }]}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-ink-black">Wedding Cards</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Wedding Card Printing in Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Hindu, Christian, Muslim &amp; modern designs. Tamil, English &amp; bilingual. Free proof.
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
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need wedding card printing. Please quote.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 border-navy text-navy hover:border-gold hover:text-gold transition-all"
              style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}
            >
              WhatsApp Order
            </a>
          </div>
        </header>

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
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Quote via WhatsApp. Free proof.</p>
          </div>
        </section>

      </div>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">What&apos;s Included</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li className="flex items-center gap-2">✓ Hindu, Christian, Muslim &amp; modern designs</li>
            <li className="flex items-center gap-2">✓ Tamil, English &amp; bilingual</li>
            <li className="flex items-center gap-2">✓ 300 GSM with matt / velvet / foil options</li>
            <li className="flex items-center gap-2">✓ Free digital proof</li>
            <li className="flex items-center gap-2">✓ GST invoice included</li>
            <li className="flex items-center gap-2">✓ Min order 50 pcs</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-border-light bg-white p-6 shadow-card">
          <h2 className="font-display font-semibold text-lg text-ink-black mb-2">Need a designer?</h2>
          <p className="font-ui text-sm text-gray-700 mb-4">
            We can design your wedding card. Custom designs and reprints. Quote on request.
          </p>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-ui font-semibold text-ink-black"
            style={{ backgroundColor: "var(--gold)" }}
          >
            WhatsApp for design
          </a>
        </section>
      </div>
    </div>
  </div>
);

export default WeddingCardsPage;
