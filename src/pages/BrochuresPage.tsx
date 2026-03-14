import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

const SPEC_ROWS = [
  { type: "Gloss Lam", paper: "130–170 GSM", finish: "Gloss Lam", minQty: "100 pcs", price: "₹499", delivery: "2-3 days" },
  { type: "Matt Lam", paper: "130–170 GSM", finish: "Matt Lam", minQty: "100 pcs", price: "₹549", delivery: "2-3 days" },
  { type: "No Lam", paper: "130 GSM", finish: "No Lam", minQty: "100 pcs", price: "₹399", delivery: "2-3 days" },
];

const BrochuresPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Brochure Printing Chennai Pallavaram | Trifold, Bifold | From ₹499 | Super Printers"
      description="Brochure printing in Pallavaram, Chennai. Trifold & bifold, gloss or matt lamination. From ₹499 per 100. 2-3 day delivery. GST invoice. WhatsApp: +91 98401 99878."
      canonical="/brochures"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Brochures", url: "/brochures" }]}
    />

    <div className="pt-[108px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-ink-black">Brochures</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Brochure Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Trifold & bifold brochures from ₹499 per 100. Gloss or matt lamination. Full colour, 2-3 day delivery.
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
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need brochure printing. Please quote.")}`}
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
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Specs &amp; Pricing</h2>
          <div className="overflow-x-auto rounded-3xl border border-border-light shadow-card">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--gold)" }}>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Type</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Paper</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Finish</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Min Qty</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Price/100</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.paper}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.finish}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.minQty}</td>
                    <td className="px-4 py-3 font-ui text-sm font-medium text-ink-black">{row.price}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Prices incl. GST. Final quote via WhatsApp.</p>
          </div>
        </section>

      </div>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">What&apos;s Included</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li className="flex items-center gap-2">✓ Full colour both sides</li>
            <li className="flex items-center gap-2">✓ Trifold / bifold / single sheet</li>
            <li className="flex items-center gap-2">✓ 130–170 GSM art paper</li>
            <li className="flex items-center gap-2">✓ GST invoice included</li>
            <li className="flex items-center gap-2">✓ Free digital proof</li>
            <li className="flex items-center gap-2">✓ Any size (A4, A5, custom)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">File Specs</h2>
          <p className="font-ui text-sm text-gray-700 mb-2">Required:</p>
          <ul className="list-disc list-inside font-ui text-sm text-gray-700 space-y-1 mb-4">
            <li>99×210mm per panel (trifold) or full flat size with 3mm bleed</li>
            <li>Resolution: 300 DPI minimum</li>
            <li>Colour mode: CMYK</li>
            <li>Format: PDF preferred, or AI, PSD</li>
          </ul>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I'd like the trifold brochure print template. Please send.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold font-ui font-medium hover:underline"
            style={{ color: "var(--gold)" }}
          >
            Download Template via WhatsApp →
          </a>
        </section>

        <section className="rounded-3xl border border-border-light bg-white p-6 shadow-card">
          <h2 className="font-display font-semibold text-lg text-ink-black mb-2">Need design help?</h2>
          <p className="font-ui text-sm text-gray-700 mb-4">
            We can design your brochure. Quote on request. Free proof before print.
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

export default BrochuresPage;
