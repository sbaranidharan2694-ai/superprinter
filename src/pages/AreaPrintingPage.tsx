import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { services } from "@/data/services";

const AREA_CONFIG: Record<string, { name: string; title: string; intro: string; distance: string }> = {
  "printing-press-pallavaram": {
    name: "Pallavaram",
    title: "Printing Press in Pallavaram, Chennai | Super Printers Since 1990",
    intro: "Super Printers has been Pallavaram's neighbourhood printing press since 1990. Our own offset and digital press is at No. 8, Saraswathy Colony — walking distance from Pallavaram bus stand and railway station. Visiting cards, wedding invitations, bill books, brochures, banners and rubber stamps, all printed in-house.",
    distance: "Located at No. 8, Saraswathy Colony, Pallavaram — beside Pallavaram Market, opposite Pallavaram police station road.",
  },
  "printing-press-tambaram": {
    name: "Tambaram",
    title: "Printing Press Near Tambaram | Super Printers Pallavaram",
    intro: "Super Printers serves Tambaram and surrounding areas with fast, reliable printing. From visiting cards to wedding invitations and bulk offset printing — we deliver to Tambaram in 48 hours.",
    distance: "Just minutes from Tambaram Railway Station and GST Road.",
  },
  "printing-press-chromepet": {
    name: "Chromepet",
    title: "Printing Press Near Chromepet | Super Printers Pallavaram",
    intro: "Chromepet businesses and residents rely on Super Printers for visiting cards, brochures, bill books, and wedding card printing. Quality printing at factory-direct prices with quick delivery to Chromepet.",
    distance: "Easily accessible from Chromepet — short drive to Pallavaram.",
  },
  "printing-press-pammal": {
    name: "Pammal",
    title: "Printing Press Near Pammal | Super Printers Pallavaram",
    intro: "Serving Pammal and nearby localities with professional printing since 1990. Wedding cards, business cards, letterheads, and more. We deliver to Pammal or you can pick up from our Pallavaram press.",
    distance: "Convenient for Pammal — close to Pallavaram and St. Thomas Mount.",
  },
  "printing-press-perungalathur": {
    name: "Perungalathur",
    title: "Printing Press Near Perungalathur | Super Printers Pallavaram",
    intro: "Perungalathur customers get the same 35-year quality and 48-hour turnaround. Visiting cards from ₹149, wedding cards from ₹8, brochures, and offset printing — all delivered to Perungalathur.",
    distance: "Well connected from Perungalathur via Grand Southern Trunk Road.",
  },
  "printing-press-velachery": {
    name: "Velachery",
    title: "Printing Press Near Velachery | Super Printers Pallavaram",
    intro: "Super Printers delivers quality printing to Velachery — visiting cards, wedding invitations, brochures, banners, and bill books. 35 years of trusted printing with 24-hour turnaround.",
    distance: "Easily accessible from Velachery via Velachery Main Road and GST Road.",
  },
  "printing-press-nanganallur": {
    name: "Nanganallur",
    title: "Printing Press Near Nanganallur | Super Printers Pallavaram",
    intro: "Nanganallur businesses and families trust Super Printers for all printing needs. Professional visiting cards, wedding cards, letterheads, and brochures delivered to Nanganallur.",
    distance: "Conveniently located near Nanganallur — quick drive via Shankar Nagar Road.",
  },
  "printing-press-medavakkam": {
    name: "Medavakkam",
    title: "Printing Press Near Medavakkam | Super Printers Pallavaram",
    intro: "From Medavakkam to Pallavaram in minutes — Super Printers offers fast, affordable printing. Visiting cards from ₹149, wedding cards, banners, brochures, and bulk corporate printing.",
    distance: "Well connected from Medavakkam via Medavakkam Main Road.",
  },
  "printing-press-guindy": {
    name: "Guindy",
    title: "Printing Press Near Guindy | Super Printers Pallavaram",
    intro: "Guindy's corporate offices and businesses rely on Super Printers for visiting cards, letterheads, brochures, and bulk printing. Fast delivery with proof approval before every print run.",
    distance: "Short drive from Guindy Industrial Estate and Guindy station via GST Road.",
  },
  "printing-press-adyar": {
    name: "Adyar",
    title: "Printing Press Near Adyar | Super Printers Pallavaram",
    intro: "Adyar residents and businesses get premium printing from Super Printers — wedding cards, visiting cards, brochures, and more. Quality printing since 1990 with delivery across Chennai.",
    distance: "Accessible from Adyar via Inner Ring Road connecting to Pallavaram.",
  },
};

const TOP_SERVICES = services.slice(0, 5).filter((s) => s.startingPrice && s.startingPrice !== "Varies");

const AREA_SLUGS = Object.keys(AREA_CONFIG);

const AreaPrintingPage = () => {
  const location = useLocation();
  // Strip both leading AND trailing slash. Apache strips trailing slashes via
  // .htaccess in production, but in dev/preview (and on any client navigation
  // that lands with a slash) we still need the slug to match.
  const slug = location.pathname.replace(/^\/+|\/+$/g, "") || "";
  const config = AREA_SLUGS.includes(slug) ? AREA_CONFIG[slug] : null;

  if (!config) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Link to="/" className="text-secondary hover:underline">← Back to Home</Link>
      </div>
    );
  }

  // Per-area LocalBusiness sub-entity. The sitewide LocalBusiness lives at
  // #business (see index.html); this page-specific entity links back to it
  // via parentOrganization @id and scopes its areaServed to a single
  // suburb. This pattern earns local-pack relevance for "[service] in
  // [area]" queries without diluting the canonical business entity.
  const schema = {
    "@context": "https://schema.org",
    "@type": ["PrintShop", "LocalBusiness", "ProfessionalService"],
    "@id": `${BUSINESS.siteUrl}/${slug}#business`,
    "name": `Super Printers — Printing services near ${config.name}, Chennai`,
    "description": `${config.intro} ${config.distance}`,
    "url": `${BUSINESS.siteUrl}/${slug}`,
    "telephone": "+919840199878",
    "email": BUSINESS.email,
    "image": `${BUSINESS.siteUrl}/super-printers-logo.png`,
    "priceRange": "$",
    "currenciesAccepted": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS.address,
      "addressLocality": "Pallavaram",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600043",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS.lat,
      "longitude": BUSINESS.lng,
    },
    "areaServed": {
      "@type": "Place",
      "name": `${config.name}, Chennai, Tamil Nadu`,
      "containedInPlace": { "@type": "City", "name": "Chennai" },
    },
    "parentOrganization": { "@id": `${BUSINESS.siteUrl}/#business` },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00",
      },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "10:00", "closes": "16:00" },
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS.googleRating,
      "reviewCount": String(BUSINESS.googleReviewCount),
      "bestRating": "5",
    },
  };

  return (
    <>
      {(() => {
        // Build a tight meta description (target 120-160 chars). The original
        // template ran 200+ chars because it concatenated intro + distance +
        // CTA — Google would truncate. Now we lead with the area name + a
        // condensed pitch, keeping the keyword stack but staying in spec.
        const description = `Printing press near ${config.name}, Chennai — wedding cards, visiting cards, brochures and more from Super Printers Pallavaram. WhatsApp +91 98401 99878.`;
        return (
          <SEOHead
            title={config.title}
            description={description}
            canonical={`/${slug}`}
            schemaMarkup={schema}
            breadcrumbs={[
              { name: "Home", url: "/" },
              { name: "Areas served", url: "/services" },
              { name: `Printing press near ${config.name}`, url: `/${slug}` },
            ]}
          />
        );
      })()}
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
            <p className="text-sm" style={{ color: "var(--gray-text-light)", fontFamily: "var(--font-body)" }}>
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

        <ServicePageFooter
          currentSlug={slug}
          serviceName={`Printing in ${config.name}`}
          whatsappPrompt={`Hi, I need printing and I'm from ${config.name}. Please send me a quote.`}
        />
      </main>
    </>
  );
};

export default AreaPrintingPage;
