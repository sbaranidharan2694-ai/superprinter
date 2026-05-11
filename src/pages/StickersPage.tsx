import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";

const SPEC_ROWS = [
  { type: "Paper Sticker",        finish: "Matte / Glossy",      cut: "Sheet / Die-cut", minQty: "100 pcs", delivery: "24 hours" },
  { type: "Vinyl Sticker",        finish: "Glossy / Matte",      cut: "Die-cut / Kiss-cut", minQty: "50 pcs",  delivery: "24–48 hours" },
  { type: "Transparent Sticker",  finish: "Clear / Frosted",     cut: "Die-cut",         minQty: "50 pcs",  delivery: "24–48 hours" },
  { type: "Holographic Sticker",  finish: "Holographic film",    cut: "Die-cut",         minQty: "100 pcs", delivery: "2–3 days" },
  { type: "Product Label Roll",   finish: "Self-adhesive paper", cut: "Roll-cut",        minQty: "500 pcs", delivery: "3–4 days" },
];

const StickersPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Sticker Printing Chennai | Vinyl, Paper & Product Labels | Super Printers Pallavaram"
      description="Sticker printing in Pallavaram, Chennai. Vinyl, paper, transparent, holographic stickers and product labels. Die-cut and kiss-cut. From 50 pcs, ready in 24 hours. WhatsApp +91 98401 99878."
      canonical="/stickers"
      keywords="sticker printing Chennai, vinyl sticker Pallavaram, product label printing Chennai, die-cut sticker Chennai, transparent sticker printing, holographic sticker Chennai, custom sticker Chennai"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Stickers", url: "/stickers" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/stickers",
        name: "Sticker printing — Super Printers",
        serviceType: "Vinyl, paper and label sticker printing",
        description: "Custom sticker and label printing in Chennai. Vinyl, paper, transparent, holographic. Die-cut to any shape.",
      })}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-ink-black">Stickers</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Sticker &amp; Label Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Vinyl, paper, transparent and holographic stickers. Custom die-cut to any shape. From 50 pieces, ready in 24 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/get-quote?service=stickers" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
              Get Quote
            </Link>
            <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need stickers printed. Size, quantity & material:")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 transition-all" style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}>
              WhatsApp Order
            </a>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Specs &amp; Options</h2>
          <div className="overflow-x-auto rounded-3xl border border-border-light shadow-card">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--gold)" }}>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Type</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Finish</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Cut</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Min Qty</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.finish}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.cut}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.minQty}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Any shape, any size. Send artwork or describe what you need.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Popular uses</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li>&#10003; Product labels for bottles, jars, packaging boxes &mdash; food-safe inks available</li>
            <li>&#10003; Brand and logo stickers for retail packaging, gift hampers, courier covers</li>
            <li>&#10003; School / college event stickers &mdash; sports day, college day, fest passes</li>
            <li>&#10003; Bumper stickers, helmet stickers, two-wheeler tank stickers (vinyl)</li>
            <li>&#10003; Hologram and security stickers for invoices, warranty seals</li>
            <li>&#10003; Wedding favour stickers, return-gift labels with photo and name</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">FAQs</h2>
          <div className="space-y-4 font-ui text-gray-700">
            <div>
              <p className="font-semibold text-ink-black">Which sticker material should I choose?</p>
              <p>For indoor and short-term use, paper stickers are cheapest. For waterproof or outdoor use (bottles, vehicles, packaging), choose vinyl. For premium product labels, transparent or holographic vinyl gives the best look.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Can I get custom shapes?</p>
              <p>Yes. Die-cutting lets us cut any shape &mdash; logo outlines, circles, stars, anything. Share your shape on WhatsApp and we&apos;ll quote.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Do you print food-grade product labels?</p>
              <p>Yes &mdash; we offer food-safe adhesives and inks for stickers used directly on edibles, oil bottles, masala jars, etc. Mention it in your WhatsApp quote request.</p>
            </div>
          </div>
        </section>

        <ServicePageFooter currentSlug="stickers" serviceName="Sticker printing" whatsappPrompt="Hi! I need stickers printed. Size, quantity & material:" />
      </div>
    </div>
  </div>
);

export default StickersPage;
