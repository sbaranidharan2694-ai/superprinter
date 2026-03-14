import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PriceCalculatorSection from "@/components/home/PriceCalculatorSection";
import { BUSINESS } from "@/data/business";

const SPEC_ROWS = [
  { type: "Standard 90GSM", paper: "90 GSM Bond", finish: "Standard", minQty: "100 pcs", price: "₹299", delivery: "2-3 days" },
  { type: "Premium 120GSM", paper: "120 GSM Bond", finish: "Premium", minQty: "100 pcs", price: "₹399", delivery: "2-3 days" },
];

const LetterheadsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Letterhead Printing Chennai Pallavaram | A4 Letterheads | From ₹299 | Super Printers"
      description="Letterhead printing in Pallavaram, Chennai. 90 GSM & 120 GSM bond. From ₹299 per 100. 2-3 day delivery. GST invoice. Call +91 98401 99878."
      canonical="/letterheads"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Letterheads", url: "/letterheads" }]}
    />

    <div className="pt-[108px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-ink-black">Letterheads</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Letterhead Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            A4 letterheads from ₹299 per 100. 90 GSM and 120 GSM bond. Full colour. 2-3 day delivery.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#price-calculator"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 ease-spring hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Get Instant Price
            </a>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need letterhead printing. Please quote.")}`}
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

        <PriceCalculatorSection showSectionTitle={false} defaultProduct="letterheads" />
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">What&apos;s Included</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li className="flex items-center gap-2">✓ A4 size (210×297mm)</li>
            <li className="flex items-center gap-2">✓ Full colour printing</li>
            <li className="flex items-center gap-2">✓ 90 GSM or 120 GSM bond</li>
            <li className="flex items-center gap-2">✓ GST invoice included</li>
            <li className="flex items-center gap-2">✓ Free digital proof</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">File Specs</h2>
          <p className="font-ui text-sm text-gray-700 mb-2">Required:</p>
          <ul className="list-disc list-inside font-ui text-sm text-gray-700 space-y-1 mb-4">
            <li>Size: 210×297mm (A4)</li>
            <li>Resolution: 300 DPI minimum</li>
            <li>Colour mode: CMYK</li>
            <li>Format: PDF preferred, or AI, PSD</li>
          </ul>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I'd like the letterhead A4 print template. Please send.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold font-ui font-medium hover:underline"
            style={{ color: "var(--gold)" }}
          >
            Download Template (PDF / AI) via WhatsApp →
          </a>
        </section>

        <section className="rounded-3xl border border-border-light bg-white p-6 shadow-card">
          <h2 className="font-display font-semibold text-lg text-ink-black mb-2">Don&apos;t have a design?</h2>
          <p className="font-ui text-sm text-gray-700 mb-4">
            We can create letterhead with your logo. Quote on request.
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

export default LetterheadsPage;
