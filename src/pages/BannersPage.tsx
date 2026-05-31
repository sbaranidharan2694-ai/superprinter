import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema, productSchema } from "@/data/seoSchemas";
import { getFaqPageSchema } from "@/data/serviceFaqs";
import { services } from "@/data/services";
import ServicePageFaqs from "@/components/shared/ServicePageFaqs";

const BANNER_SVC = services.find((s) => s.slug === "banner-printing")!;

const SPEC_ROWS = [
  { type: "Flex Banner",      material: "Frontlit / Backlit Flex", finish: "Matte / Glossy", minQty: "1 sq ft", delivery: "Same / next day" },
  { type: "Vinyl Banner",     material: "Star / Cast Vinyl",       finish: "Outdoor weather-proof", minQty: "1 sq ft", delivery: "1–2 days" },
  { type: "Canvas Banner",    material: "Photographic canvas",     finish: "Premium fabric", minQty: "1 sq ft", delivery: "2–3 days" },
  { type: "Roll-up Standee",  material: "Stand + flex print",      finish: "6 ft × 3 ft standard", minQty: "1 unit",  delivery: "2–3 days" },
];

const BannersPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Banner Printing Chennai | Flex, Vinyl, Roll-up Standees"
      description="Banner printing in Pallavaram, Chennai — flex, vinyl, canvas and roll-up standees. Indoor and outdoor, most orders ready same day."
      canonical="/banners"
      keywords="banner printing Chennai, flex banner printing Pallavaram, vinyl banner Chennai, roll-up standee Chennai, outdoor banner printing Pallavaram, shop banner Chennai, wedding banner Chennai"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Banners", url: "/banners" }]}
      schemaMarkup={[
        serviceLandingSchema({
          path: "/banners",
          name: "Banner printing — Super Printers",
          serviceType: "Flex, vinyl and roll-up banner printing",
          description: "Flex, vinyl, canvas and roll-up banner printing in Chennai. Same-day delivery for most sizes.",
        }),
        productSchema({
          service: BANNER_SVC,
          path: "/banners",
          description: "Flex, vinyl, canvas and roll-up banner printing in Chennai. Most standard sizes delivered the same day from our Pallavaram press.",
        }),
        getFaqPageSchema("banner-printing"),
      ]}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-ink-black">Banners</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            Banner Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Flex, vinyl, canvas and roll-up standees. Indoor and outdoor finishes. Most sizes ready the same day.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/get-quote?service=banners" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
              Get Quote
            </Link>
            <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need a banner printed. Size & material:")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 transition-all" style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}>
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
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Material</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Finish</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Min Qty</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.material}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.finish}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.minQty}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Custom sizes printed per square foot. Eyelets and rope provided for outdoor banners.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">What you can print</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li>&#10003; Shop and showroom hoardings &mdash; flex with eyelets, ready to tie up</li>
            <li>&#10003; Wedding and event backdrops &mdash; photo-realistic flex or canvas</li>
            <li>&#10003; Political and campaign banners &mdash; outdoor vinyl, weather-proof inks</li>
            <li>&#10003; Roll-up standees for trade shows, retail and entrance branding</li>
            <li>&#10003; School and college event banners, school day, sports day</li>
            <li>&#10003; Birthday and baby shower customised banners with photos</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Banner pricing &amp; how it works</h2>
          <p className="font-ui text-gray-700 mb-4">
            Banners are priced per square foot. We share a digital proof on WhatsApp before printing &mdash; you approve, we print. Same-day pickup from our Pallavaram press for most sizes; delivery available across Chennai.
          </p>
          <p className="font-ui text-gray-700">
            Send your design as JPG, PNG or PDF on WhatsApp at <a href={BUSINESS.whatsapp} className="text-gold hover:underline">+91 98401 99878</a>. No design? Share your photos and copy &mdash; our in-house team will lay it out for you free of charge.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Frequently asked questions</h2>
          <div className="space-y-4 font-ui text-gray-700">
            <div>
              <p className="font-semibold text-ink-black">How fast can I get a banner printed?</p>
              <p>Most sizes up to 8 &times; 6 ft are ready within 2&ndash;4 hours of proof approval. Larger jumbo banners take 1 working day.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Will the colours look like my screen?</p>
              <p>We share a digital proof for sign-off and use CMYK-calibrated flex printers, so colours stay accurate. Pantone matching available for brand banners.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Do you deliver to Tambaram / Chromepet / Velachery?</p>
              <p>Yes &mdash; we deliver across Chennai. See our <Link to="/printing-press-pallavaram/" className="text-gold hover:underline">Pallavaram</Link>, <Link to="/printing-press-tambaram/" className="text-gold hover:underline">Tambaram</Link> and <Link to="/printing-press-chromepet/" className="text-gold hover:underline">Chromepet</Link> pages for delivery details.</p>
            </div>
          </div>
        </section>

        <ServicePageFooter currentSlug="banners" serviceName="Banner printing" whatsappPrompt="Hi! I need a banner printed. Size & material:" />
      </div>
    </div>
    <ServicePageFaqs serviceSlug="banner-printing" heading="Banner printing — common questions" />
  </div>
);

export default BannersPage;
