import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { services } from "@/data/services";

const AREA_CONFIG: Record<string, { name: string; title: string; intro: string; distance: string }> = {
  "tambaram-printing": {
    name: "Tambaram",
    title: "Printing Press Near Tambaram | Super Printers Pallavaram",
    intro: "Super Printers serves Tambaram and surrounding areas with fast, reliable printing. From visiting cards to wedding invitations and bulk offset printing — we deliver to Tambaram in 48 hours.",
    distance: "Just minutes from Tambaram Railway Station and GST Road.",
  },
  "chromepet-printing": {
    name: "Chromepet",
    title: "Printing Press Near Chromepet | Super Printers Pallavaram",
    intro: "Chromepet businesses and residents rely on Super Printers for visiting cards, brochures, bill books, and wedding card printing. Quality printing at factory-direct prices with quick delivery to Chromepet.",
    distance: "Easily accessible from Chromepet — short drive to Pallavaram.",
  },
  "pammal-printing": {
    name: "Pammal",
    title: "Printing Press Near Pammal | Super Printers Pallavaram",
    intro: "Serving Pammal and nearby localities with professional printing since 1990. Wedding cards, business cards, letterheads, and more. We deliver to Pammal or you can pick up from our Pallavaram press.",
    distance: "Convenient for Pammal — close to Pallavaram and St. Thomas Mount.",
  },
  "perungalathur-printing": {
    name: "Perungalathur",
    title: "Printing Press Near Perungalathur | Super Printers Pallavaram",
    intro: "Perungalathur customers get the same 35-year quality and 48-hour turnaround. Visiting cards from ₹149, wedding cards from ₹8, brochures, and offset printing — all delivered to Perungalathur.",
    distance: "Well connected from Perungalathur via Grand Southern Trunk Road.",
  },
};

const TOP_SERVICES = services.slice(0, 5).filter((s) => s.startingPrice && s.startingPrice !== "Varies");

const AREA_SLUGS = ["tambaram-printing", "chromepet-printing", "pammal-printing", "perungalathur-printing"];

const AreaPrintingPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, "") || "";
  const config = AREA_SLUGS.includes(slug) ? AREA_CONFIG[slug] : null;

  if (!config) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Link to="/" className="text-secondary hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Super Printers",
    "url": BUSINESS.siteUrl,
    "areaServed": { "@type": "Place", "name": `${config.name}, Chennai` },
    "address": { "@type": "PostalAddress", "streetAddress": BUSINESS.addressFull },
  };

  return (
    <>
      <SEOHead
        title={config.title}
        description={`${config.intro} ${config.distance} Order on WhatsApp or visit our press at ${BUSINESS.addressFull}.`}
        canonical={`/${slug}`}
        schemaMarkup={schema}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>Printing near {config.name}</span>
            </nav>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Printing Services Near {config.name}, Chennai
            </h1>
            <p className="text-lg mb-2" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
              {config.intro}
            </p>
            <p className="text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-body)" }}>
              {config.distance}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Top Services & Prices
            </h2>
            <ul className="space-y-3">
              {TOP_SERVICES.map((s) => (
                <li key={s.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <Link to={`/services/${s.slug}`} className="font-medium hover:underline" style={{ color: "var(--color-primary)" }}>
                    {s.emoji} {s.name}
                  </Link>
                  <span className="text-sm font-semibold" style={{ color: "var(--gold)" }}>{s.startingPrice}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 px-4" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Delivery to {config.name}
            </h2>
            <p className="mb-6" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
              We deliver to {config.name} — orders ready in 48 hours. Place your order on WhatsApp or call us for a quote.
            </p>
            <div className="aspect-video max-w-2xl rounded-xl overflow-hidden border border-gray-200">
              <iframe
                title={`Super Printers location — delivery to ${config.name}`}
                src={BUSINESS.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I need printing and I'm from ${config.name}. Please send me a quote.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            >
              💬 Order on WhatsApp
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default AreaPrintingPage;
