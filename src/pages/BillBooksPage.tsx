import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

const SPEC_ROWS = [
  { type: "2-Part NCR", paper: "Carbonless", finish: "2-Part", minQty: "25 sets", price: "₹250", delivery: "3-4 days" },
  { type: "3-Part NCR", paper: "Carbonless", finish: "3-Part", minQty: "25 sets", price: "₹320", delivery: "3-4 days" },
];

const BillBooksPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="GST Bill Book Printing Chennai Tambaram | Carbonless NCR | From ₹250 | Super Printers"
      description="Carbonless GST bill book printing in Chennai. 2-part and 3-part NCR bill books, serial numbered. From ₹250 for 25 sets. Pallavaram, Tambaram. Call +91 98401 99878."
      canonical="/bill-books"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Bill Books", url: "/bill-books" }]}
    />

    <div className="pt-[108px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-ink-black">Bill Books</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            GST Bill Book Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Carbonless NCR bill books from ₹250 for 25 sets. 2-part and 3-part, serial numbered. GST-ready. 3-4 day delivery.
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
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need bill book printing. Please quote.")}`}
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
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Price</th>
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
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Prices incl. GST. 5×8 inch (127×203mm). Serial numbering available.</p>
          </div>
        </section>

      </div>

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">What&apos;s Included</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li className="flex items-center gap-2">✓ Carbonless NCR (2-part or 3-part)</li>
            <li className="flex items-center gap-2">✓ Serial numbering</li>
            <li className="flex items-center gap-2">✓ Standard 5×8 inch (127×203mm)</li>
            <li className="flex items-center gap-2">✓ GST invoice included</li>
            <li className="flex items-center gap-2">✓ Custom format on request</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-border-light bg-white p-6 shadow-card">
          <h2 className="font-display font-semibold text-lg text-ink-black mb-2">Custom bill format?</h2>
          <p className="font-ui text-sm text-gray-700 mb-4">
            We can set up your company format with logo and fields. Quote on request.
          </p>
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-ui font-semibold text-ink-black"
            style={{ backgroundColor: "var(--gold)" }}
          >
            WhatsApp for quote
          </a>
        </section>
      </div>
    </div>
  </div>
);

export default BillBooksPage;
