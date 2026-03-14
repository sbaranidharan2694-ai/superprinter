import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

const SPEC_ROWS = [
  { type: "Standard Gloss", paper: "300 GSM", finish: "Gloss Lam", minQty: "100 pcs", price: "₹299", delivery: "48 hrs" },
  { type: "Matt", paper: "300 GSM", finish: "Matt Lam", minQty: "100 pcs", price: "₹349", delivery: "48 hrs" },
  { type: "Spot UV", paper: "300 GSM", finish: "Spot UV", minQty: "100 pcs", price: "₹599", delivery: "3-4 days" },
  { type: "Foil", paper: "400 GSM", finish: "Velvet+Foil", minQty: "100 pcs", price: "₹799", delivery: "4-5 days" },
  { type: "No Lam", paper: "300 GSM", finish: "No Lam", minQty: "100 pcs", price: "₹249", delivery: "48 hrs" },
];

const VisitingCardsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Visiting Card Printing Pallavaram Chennai | Gloss, Matt, Spot UV | From ₹149 | Super Printers"
      description="Best visiting card printing in Pallavaram, Chennai. Gloss, Matt, Spot UV, Foil cards from ₹149 per 100 pcs. 48-hour delivery. GST invoice. Call +91 98401 99878."
      canonical="/visiting-cards"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Visiting Cards", url: "/visiting-cards" }]}
    />

    <div className="pt-[108px] pb-20">
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
            Premium visiting cards from ₹149 per 100 pcs. Gloss, Matt, Spot UV, Foil — delivered in 48 hours.
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
            We can create one for you. ₹299 for visiting card design. Free for orders over ₹1,000.
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
  </div>
);

export default VisitingCardsPage;
