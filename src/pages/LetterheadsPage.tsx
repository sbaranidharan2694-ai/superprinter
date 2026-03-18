import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";

const SPEC_ROWS = [
  { type: "Standard 90GSM", paper: "90 GSM Bond", finish: "Standard", minQty: "100 pcs", delivery: "24 hours" },
  { type: "Premium 120GSM", paper: "120 GSM Bond", finish: "Premium", minQty: "100 pcs", delivery: "24 hours" },
];

const LetterheadsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Letterhead Printing Chennai | A4 Bond Letterheads Corporate | Super Printers"
      description="Letterhead printing Chennai: 90 & 120 GSM bond, full colour, corporate stationery. Pallavaram. GST invoice. +91 98401 99878."
      canonical="/letterheads"
      keywords="letterhead printing Chennai, corporate letterhead Pallavaram, A4 letterhead printing, company stationery"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Letterheads", url: "/letterheads" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/letterheads",
        name: "Letterhead printing — Super Printers",
        serviceType: "Corporate letterhead printing",
        description: "A4 bond letterheads, 90–120 GSM, full colour, business stationery, Chennai Pallavaram.",
      })}
    />

    <div className="pt-[116px] pb-20">
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
            A4 letterheads. 90 GSM and 120 GSM bond. Full colour.
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
            <li className="flex items-center gap-2">✓ A4 size (210×297mm)</li>
            <li className="flex items-center gap-2">✓ Full colour printing</li>
            <li className="flex items-center gap-2">✓ 90 GSM or 120 GSM bond</li>
            <li className="flex items-center gap-2">✓ GST invoice included</li>
            <li className="flex items-center gap-2">✓ Free digital proof</li>
          </ul>
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
