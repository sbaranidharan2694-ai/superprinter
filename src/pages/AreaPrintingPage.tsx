import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { services } from "@/data/services";
import { AREA_PROFILES } from "@/data/areaProfiles";

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
  "printing-press-alandur": {
    name: "Alandur",
    title: "Printing Press Near Alandur | Super Printers Pallavaram",
    intro: "Alandur businesses and metro-corridor offices rely on Super Printers for visiting cards, brochures, letterheads and bulk offset jobs. Same-day proofs, 24-hour digital orders, 35 years of Chennai print expertise.",
    distance: "Just one metro stop from Pallavaram via Alandur Metro / GST Road.",
  },
  "printing-press-t-nagar": {
    name: "T. Nagar",
    title: "Printing Press Near T. Nagar, Chennai | Super Printers",
    intro: "Chennai's busiest commercial hub trusts Super Printers for visiting cards, GST bill books, wedding invitations and retail packaging. Bulk offset pricing for T. Nagar showrooms and textile traders.",
    distance: "Quick GST Road run from T. Nagar to our Pallavaram press; same-day pickup possible.",
  },
  "printing-press-anna-nagar": {
    name: "Anna Nagar",
    title: "Printing Press Near Anna Nagar, Chennai | Super Printers",
    intro: "Anna Nagar professionals, clinics and businesses choose Super Printers for premium visiting cards, brochures, letterheads and wedding cards. Free design assist + WhatsApp proof before every print run.",
    distance: "Delivered to Anna Nagar via Inner Ring Road and 100 Feet Road in 24–48 hours.",
  },
  "printing-press-porur": {
    name: "Porur",
    title: "Printing Press Near Porur, Chennai | Super Printers",
    intro: "Porur IT parks, hospitals and SMEs use Super Printers for ID cards, letterheads, brochures and visiting cards. Bulk corporate pricing with proof approval on WhatsApp.",
    distance: "Connected from Porur via Mount-Poonamallee Road and Outer Ring Road to our Pallavaram press.",
  },
  "printing-press-omr": {
    name: "OMR (Old Mahabalipuram Road)",
    title: "Printing Press Near OMR & Sholinganallur | Super Printers Chennai",
    intro: "OMR IT corridor offices — Sholinganallur, Thoraipakkam, Navalur, Siruseri — use Super Printers for employee ID cards, visiting cards, event branding and corporate brochures. Bulk pricing, fast turnaround.",
    distance: "Delivered along OMR from Pallavaram via GST Road–Medavakkam Main Road in 24–48 hours.",
  },
  "printing-press-vadapalani": {
    name: "Vadapalani",
    title: "Printing Press Near Vadapalani | Super Printers Chennai",
    intro: "Vadapalani's media houses, studios and retailers depend on Super Printers for posters, brochures, visiting cards and bulk flyers. 35 years of offset and digital printing experience.",
    distance: "Easy reach from Vadapalani via 100 Feet Road / Inner Ring Road.",
  },
  "printing-press-mylapore": {
    name: "Mylapore",
    title: "Printing Press Near Mylapore | Super Printers Chennai",
    intro: "Mylapore families choose Super Printers for traditional Hindu and Tamil wedding invitations, naming-ceremony cards, and visiting cards. Custom Tamil typography, free design proof.",
    distance: "Comfortable drive from Mylapore via Kamarajar Salai and GST Road.",
  },
  "printing-press-saidapet": {
    name: "Saidapet",
    title: "Printing Press Near Saidapet | Super Printers Chennai",
    intro: "Saidapet's traders, schools and small businesses rely on Super Printers for GST bill books, letterheads, ID cards and event banners. Affordable, fast, since 1990.",
    distance: "Short GST Road / Mount Road run from Saidapet to Pallavaram.",
  },
  "printing-press-ekkattuthangal": {
    name: "Ekkattuthangal",
    title: "Printing Press Near Ekkattuthangal | Super Printers",
    intro: "Ekkattuthangal industries and offices use Super Printers for safety stickers, employee ID cards, GST bill books, brochures and visiting cards. Direct corporate billing available.",
    distance: "10 minutes from Ekkattuthangal via Mount-Poonamallee Road to our Pallavaram press.",
  },
  "printing-press-ashok-nagar": {
    name: "Ashok Nagar",
    title: "Printing Press Near Ashok Nagar | Super Printers Chennai",
    intro: "Ashok Nagar residents and West Chennai businesses trust Super Printers for wedding invitations, visiting cards and corporate stationery. Free design help and WhatsApp proof approval.",
    distance: "Reachable from Ashok Nagar via Inner Ring Road / 100 Feet Road.",
  },
  "printing-press-egmore": {
    name: "Egmore",
    title: "Printing Press Near Egmore, Chennai | Super Printers",
    intro: "Egmore businesses, lawyers and clinics order visiting cards, letterheads, GST bill books and brochures from Super Printers. 35-year reputation, on-time delivery.",
    distance: "Short Anna Salai / GST Road run from Egmore to our Pallavaram press.",
  },
  "printing-press-anna-salai": {
    name: "Anna Salai (Mount Road)",
    title: "Printing Press Near Anna Salai / Mount Road | Super Printers",
    intro: "Mount Road's corporates and showrooms rely on Super Printers for premium brochures, presentation folders, visiting cards and corporate stationery. Pantone spot colour and offset finishing in-house.",
    distance: "Direct Anna Salai → GST Road corridor to our Pallavaram press.",
  },
  "printing-press-manapakkam": {
    name: "Manapakkam",
    title: "Printing Press Near Manapakkam | Super Printers Chennai",
    intro: "Manapakkam IT parks and DLF offices use Super Printers for employee ID cards, brochures, visiting cards and event collateral. Corporate bulk pricing with PO billing.",
    distance: "Quick Mount-Poonamallee Road link to our Pallavaram press.",
  },
  "printing-press-sholinganallur": {
    name: "Sholinganallur",
    title: "Printing Press Near Sholinganallur, OMR | Super Printers Chennai",
    intro: "Sholinganallur and OMR IT corridor offices choose Super Printers for employee ID cards, visiting cards, event branding and bulk corporate printing. Bulk pricing, PO billing.",
    distance: "Delivered along OMR from Pallavaram via GST Road–Medavakkam Main Road within 24–48 hours.",
  },
  "printing-press-thiruvanmiyur": {
    name: "Thiruvanmiyur",
    title: "Printing Press Near Thiruvanmiyur / ECR | Super Printers Chennai",
    intro: "Thiruvanmiyur and ECR residents and businesses use Super Printers for wedding cards, visiting cards, brochures and posters. Free design assistance and digital proof.",
    distance: "Reached from Thiruvanmiyur via ECR / Sardar Patel Road to our Pallavaram press.",
  },
  "printing-press-mogappair": {
    name: "Mogappair",
    title: "Printing Press Near Mogappair | Super Printers Chennai",
    intro: "Mogappair East and West businesses use Super Printers for visiting cards, wedding invitations, letterheads and brochures. 35 years of trusted Chennai printing.",
    distance: "Easily delivered from Pallavaram via Inner Ring Road and Golden Flats area.",
  },
  "printing-press-kodambakkam": {
    name: "Kodambakkam",
    title: "Printing Press Near Kodambakkam | Super Printers Chennai",
    intro: "Kodambakkam's media houses, film offices and traders use Super Printers for posters, brochures, visiting cards and wedding invitations. Premium offset and digital finishes.",
    distance: "Quick run from Kodambakkam via Arcot Road and Inner Ring Road.",
  },
  "printing-press-nungambakkam": {
    name: "Nungambakkam",
    title: "Printing Press Near Nungambakkam | Super Printers Chennai",
    intro: "Nungambakkam premium clients order luxury wedding cards, foil/spot-UV visiting cards, presentation folders and brochures from Super Printers. Concierge proof approval on WhatsApp.",
    distance: "Reached from Nungambakkam via Sterling Road / Anna Salai to our Pallavaram press.",
  },
  "printing-press-ambattur": {
    name: "Ambattur",
    title: "Printing Press Near Ambattur | Super Printers Chennai",
    intro: "Ambattur Industrial Estate companies use Super Printers for safety labels, employee ID cards, GST bill books, brochures and industrial signage. Corporate PO billing supported.",
    distance: "Delivered from Pallavaram to Ambattur via Inner Ring Road / MTH Road in 48 hours.",
  },
  "printing-press-avadi": {
    name: "Avadi",
    title: "Printing Press Near Avadi | Super Printers Chennai",
    intro: "Avadi families and businesses choose Super Printers for wedding invitations, visiting cards, ID cards and letterheads. 35-year printing reputation with delivery across West Chennai.",
    distance: "Reached from Avadi via CTH Road and Inner Ring Road to our Pallavaram press.",
  },
};

/** Single source of truth for static area routes (consumed by App router, prerender, sitemap). */
export const AREA_PAGE_SLUGS = Object.keys(AREA_CONFIG);

const TOP_SERVICES = services.slice(0, 5).filter((s) => s.startingPrice && s.startingPrice !== "Varies");

const AREA_SLUGS = Object.keys(AREA_CONFIG);

const AreaPrintingPage = () => {
  const location = useLocation();
  // Strip both leading AND trailing slash. Apache strips trailing slashes via
  // .htaccess in production, but in dev/preview (and on any client navigation
  // that lands with a slash) we still need the slug to match.
  const slug = location.pathname.replace(/^\/+|\/+$/g, "") || "";
  const config = AREA_SLUGS.includes(slug) ? AREA_CONFIG[slug] : null;
  const profile = AREA_PROFILES[slug] ?? null;

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
      // Nest Place → City → AdministrativeArea so AI engines can resolve
      // "printing near {City}" queries via entity hierarchy. Previously
      // the suburb was a flat string under City Chennai which lost the
      // Tamil Nadu admin-region anchor.
      "containedInPlace": {
        "@type": "City",
        "name": "Chennai",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Tamil Nadu",
          "containedInPlace": { "@type": "Country", "name": "India" },
        },
      },
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
    // aggregateRating intentionally NOT duplicated on per-area sub-entities.
    // The 147-review rating belongs to the canonical #business node referenced
    // via parentOrganization above. Duplicating it across 20+ suburb URLs is
    // flagged as inflated review markup under Google's 2025 structured-data
    // guidelines and risks rich-result suppression.
  };

  // Per-area FAQPage schema, built from profile.areaFaqs. Each suburb gets
  // 3 questions whose answers contain area-specific facts (road names,
  // landmarks, business types), so the FAQ on each page is genuinely
  // unique rather than templated. This is the structured-data complement
  // to the visible FAQ section we render below — Google's spec says
  // structured FAQ data must match visible content.
  const areaFaqSchema = profile
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${BUSINESS.siteUrl}/${slug}#faq`,
        mainEntity: profile.areaFaqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

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
            schemaMarkup={areaFaqSchema ? [schema, areaFaqSchema] : schema}
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

        {profile && (
          <section className="py-12 px-4 bg-white" aria-labelledby="local-context-heading">
            <div className="max-w-4xl mx-auto">
              <h2 id="local-context-heading" className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Why we serve {config.name}
              </h2>
              <p className="text-base leading-relaxed lead-answer" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
                {profile.localContext}
              </p>
            </div>
          </section>
        )}

        {profile && (
          <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }} aria-labelledby="popular-services-heading">
            <div className="max-w-4xl mx-auto">
              <h2 id="popular-services-heading" className="font-display text-xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
                What {config.name} customers order most
              </h2>
              <ul className="space-y-5">
                {profile.popularServices.map((p) => (
                  <li key={p.service} className="border-l-4 pl-4" style={{ borderColor: "var(--gold)" }}>
                    <h3 className="font-display text-base font-bold mb-1" style={{ color: "var(--color-primary)" }}>
                      {p.service}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
                      {p.reason}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

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
            {profile && (
              <p className="mb-3 text-sm" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
                <strong>Route from our Pallavaram press:</strong> {profile.routeKm} km · {profile.routeMins} min · {profile.routeRoad}
              </p>
            )}
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

        {profile && (
          <section className="py-12 px-4 bg-white" aria-labelledby="area-faq-heading">
            <div className="max-w-4xl mx-auto">
              <h2 id="area-faq-heading" className="font-display text-xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
                {config.name} customer questions
              </h2>
              <dl className="space-y-6">
                {profile.areaFaqs.map((faq) => (
                  <div key={faq.q}>
                    <dt className="font-display text-base font-bold mb-2" style={{ color: "var(--color-primary)" }}>
                      {faq.q}
                    </dt>
                    <dd className="text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
                      {faq.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
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
