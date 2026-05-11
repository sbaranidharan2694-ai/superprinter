import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";

const SPEC_ROWS = [
  { type: "Self-Inking (Trodat-style)", size: "Small / Medium / Large", refillable: "Yes", delivery: "Same / next day" },
  { type: "Pre-Inked (Flash)",          size: "Round / Rectangle",     refillable: "Yes (special refill ink)", delivery: "Same / next day" },
  { type: "Wooden Handle Stamp",        size: "Custom",                refillable: "Use stamp pad",            delivery: "Same day" },
  { type: "Date Stamp",                 size: "With adjustable date",  refillable: "Yes",                       delivery: "1 day" },
  { type: "GST / Round Office Seal",    size: "Standard 38mm / 42mm",  refillable: "Yes",                       delivery: "Same / next day" },
];

const RubberStampsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Rubber Stamp Maker Chennai | Self-Inking, Pre-Inked & Wooden | Super Printers Pallavaram"
      description="Rubber stamp maker in Pallavaram, Chennai. Self-inking, pre-inked, wooden handle, date and GST stamps. Most stamps ready same day. Call +91 98401 99878 or WhatsApp for instant quote."
      canonical="/rubber-stamps"
      keywords="rubber stamp maker Chennai, rubber stamp Pallavaram, self inking stamp Chennai, pre inked stamp Chennai, wooden handle stamp, GST stamp Chennai, office seal Chennai, date stamp Chennai"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Rubber Stamps", url: "/rubber-stamps" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/rubber-stamps",
        name: "Rubber stamp maker — Super Printers",
        serviceType: "Self-inking, pre-inked and wooden rubber stamp manufacturing",
        description: "Rubber stamp making in Chennai. Self-inking, pre-inked, wooden handle, date stamps, GST seals. Same-day delivery.",
      })}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-ink-black">Rubber Stamps</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Rubber Stamp Maker in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Self-inking, pre-inked, wooden handle, date and GST office seals. Most stamps ready the same day.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/get-quote?service=rubber-stamps" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
              Get Quote
            </Link>
            <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need a rubber stamp. Text to include:")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 transition-all" style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}>
              WhatsApp Order
            </a>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Stamp Types &amp; Options</h2>
          <div className="overflow-x-auto rounded-3xl border border-border-light shadow-card">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--gold)" }}>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Type</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Size</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Refillable</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.size}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.refillable}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Ink colours: black, blue, red, green, violet. Multi-colour stamps available.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Most-ordered stamps in Chennai</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li>&#10003; <strong>GST stamp</strong> &mdash; with GSTIN, business name &amp; address for invoices</li>
            <li>&#10003; <strong>Round office seal</strong> &mdash; logo + company name, used on letterheads &amp; cheques</li>
            <li>&#10003; <strong>Authorised signatory stamp</strong> &mdash; name, designation, company</li>
            <li>&#10003; <strong>Doctor / clinic stamp</strong> &mdash; doctor name, qualification, registration no.</li>
            <li>&#10003; <strong>Bank endorsement stamp</strong> &mdash; account holder name, account number</li>
            <li>&#10003; <strong>Address stamp</strong> &mdash; for envelopes, packaging, courier covers</li>
            <li>&#10003; <strong>Date stamp</strong> &mdash; for accounts and dispatch use, adjustable date wheel</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">How to order</h2>
          <ol className="space-y-3 font-ui text-gray-700 list-decimal pl-5">
            <li>WhatsApp the text you want on the stamp to <a href={BUSINESS.whatsapp} className="text-gold hover:underline">+91 98401 99878</a>, or send a photo of an existing stamp.</li>
            <li>Tell us the stamp type (self-inking / pre-inked / wooden) and ink colour.</li>
            <li>We share a preview within an hour. You approve, we make.</li>
            <li>Most stamps are ready within 4&ndash;6 working hours. Pickup from our Pallavaram press or we deliver across Chennai.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">FAQs</h2>
          <div className="space-y-4 font-ui text-gray-700">
            <div>
              <p className="font-semibold text-ink-black">Which is better &mdash; self-inking or pre-inked?</p>
              <p>Self-inking stamps (Trodat-style) are cheaper and use a refillable ink pad inside; great for daily use. Pre-inked (flash) stamps give a sharper, photo-quality impression and last much longer between refills &mdash; better for office seals you use heavily.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Can I get a stamp with my logo?</p>
              <p>Yes &mdash; send your logo as a clear PNG, JPG or PDF on WhatsApp. We engrave it into the stamp die so it prints crisply.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Do you refill old stamps?</p>
              <p>Yes, we sell refill ink bottles for all standard self-inking and pre-inked stamps. Walk in or WhatsApp us.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default RubberStampsPage;
