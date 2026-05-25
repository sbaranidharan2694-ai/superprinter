import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";

const SPEC_ROWS = [
  { type: "Saddle Stitched",  paper: "Art paper 130–170 GSM", pages: "8–48 pages", binding: "Centre-stapled", minQty: "100" },
  { type: "Perfect Bound",    paper: "Art paper / matte 130–250 GSM", pages: "32–200 pages", binding: "Glue-bound spine", minQty: "100" },
  { type: "Spiral Bound",     paper: "Art / bond paper", pages: "Up to 300 pages", binding: "Spiral", minQty: "25" },
  { type: "Wiro Bound",       paper: "Art / bond paper", pages: "Up to 300 pages", binding: "Metal wire-o", minQty: "25" },
];

const CataloguesPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Catalogue Printing Chennai | Saddle, Perfect, Spiral Bound"
      description="Catalogue printing in Pallavaram, Chennai — saddle, perfect, spiral bound for products, jewellery, fabric. From 25 copies, ready in 3–5 days."
      canonical="/catalogues"
      keywords="catalogue printing Chennai, product catalogue printing Pallavaram, jewellery catalogue Chennai, fabric catalogue Chennai, real estate brochure book, saddle stitched catalogue, perfect bound catalogue Chennai"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Catalogues", url: "/catalogues" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/catalogues",
        name: "Catalogue printing — Super Printers",
        serviceType: "Product, jewellery and fabric catalogue printing",
        description: "Catalogue printing in Chennai — saddle-stitched, perfect-bound, spiral or wiro. Product, jewellery, fabric, real estate.",
      })}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-ink-black">Catalogues</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Catalogue Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Saddle-stitched, perfect-bound, spiral and wiro catalogues for product, jewellery, fabric and real estate businesses. From 25 copies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/get-quote?service=catalogues" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
              Get Quote
            </Link>
            <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need a catalogue printed. Pages, size & quantity:")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 transition-all" style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}>
              WhatsApp Order
            </a>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Binding &amp; paper options</h2>
          <div className="overflow-x-auto rounded-3xl border border-border-light shadow-card">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--gold)" }}>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Style</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Paper</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Page range</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Binding</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Min Qty</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.paper}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.pages}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.binding}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.minQty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">A4, A5, square and custom sizes. Lamination, spot-UV and embossed covers available.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Catalogues we print regularly</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li>&#10003; <strong>Jewellery catalogues</strong> with high-resolution gold and silver product photography &mdash; matte art paper recommended</li>
            <li>&#10003; <strong>Fabric / textile catalogues</strong> with shade card and product references for wholesalers</li>
            <li>&#10003; <strong>Product catalogues</strong> for industrial parts, hardware, electrical, electronics</li>
            <li>&#10003; <strong>Real estate brochures &amp; project books</strong> with floor plans, amenities, location maps</li>
            <li>&#10003; <strong>School &amp; college prospectus</strong>, course catalogues, alumni books</li>
            <li>&#10003; <strong>Restaurant &amp; cloud kitchen menus</strong> &mdash; laminated, water-resistant finish</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">How to send your file</h2>
          <p className="font-ui text-gray-700 mb-4">
            We accept print-ready PDFs, InDesign INDD packages, CorelDRAW files and high-resolution JPGs. Single-page PDF spreads are fine &mdash; we&apos;ll impose them for printing. If you don&apos;t have a designer, share product photos and copy on WhatsApp and our in-house design team can lay out the catalogue for you.
          </p>
          <p className="font-ui text-gray-700">
            Typical turnaround is 3&ndash;5 working days after proof approval. Rush jobs (under 48 hours) possible for smaller saddle-stitched runs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">FAQs</h2>
          <div className="space-y-4 font-ui text-gray-700">
            <div>
              <p className="font-semibold text-ink-black">What&apos;s the difference between saddle-stitched and perfect-bound?</p>
              <p>Saddle-stitched uses two staples in the centre fold &mdash; works for thin catalogues up to 48 pages. Perfect-bound has a glued spine like a paperback book &mdash; suits 32 pages or more and looks more premium.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Can I print just 25 catalogues?</p>
              <p>Yes &mdash; spiral and wiro-bound styles work from 25 copies. Saddle-stitched and perfect-bound need 100 minimum to be cost-effective on offset; for smaller runs we print digitally.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Do you offer cover lamination?</p>
              <p>Yes &mdash; matte, glossy, soft-touch and spot-UV finishes are all available. We&apos;ll suggest the best option for your design when we quote.</p>
            </div>
          </div>
        </section>

        <ServicePageFooter currentSlug="catalogues" serviceName="Catalogue printing" whatsappPrompt="Hi! I need a catalogue printed. Pages, size & quantity:" />
      </div>
    </div>
  </div>
);

export default CataloguesPage;
