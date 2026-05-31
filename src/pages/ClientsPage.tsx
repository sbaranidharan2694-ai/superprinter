import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { CLIENTS, type Client } from "@/data/clients";

/**
 * Initials monogram for clients whose logo file isn't on disk yet. Keeps
 * the trust grid visually consistent even before the owner drops in a real
 * brand logo at the matching public/clients/ path.
 */
function initialsOf(name: string): string {
  const words = name.replace(/[^A-Za-z. ]/g, "").split(/[\s.]+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

/**
 * Resolves the runtime logo URL with a two-step fallback:
 *   1. local file under /public/clients/<slug> (owner-supplied, highest trust)
 *   2. Brandfetch Logo Link API (https://cdn.brandfetch.io/<domain>) — only
 *      ships brand-uploaded logos so it's licensed-use, unlike scraping
 *      Google Images. Requires VITE_BRANDFETCH_CLIENT_ID (free tier).
 *   3. Initials monogram (rendered when both above fail via onError).
 */
function brandfetchUrl(domain: string): string {
  const clientId = import.meta.env.VITE_BRANDFETCH_CLIENT_ID;
  // If the client ID isn't configured, return the bare URL — Brandfetch will
  // respond with a 401 and we'll fall through to the monogram. Avoids
  // hard-failing the build when the env var is unset.
  const idParam = clientId ? `?c=${clientId}` : "";
  return `https://cdn.brandfetch.io/${domain}${idParam}`;
}

const ClientLogoTile = ({ client }: { client: Client }) => {
  // Two-stage fallback tracked as a single index:
  //   0 → local /clients/<slug>
  //   1 → Brandfetch CDN (only if brandfetchDomain set)
  //   2 → initials monogram
  // Only push stages the browser can actually hit successfully — skipping
  // undefined `logo` here keeps Lighthouse's "errors in console" audit
  // clean (a missing /clients/<slug> file previously emitted a 404 before
  // falling through to the monogram).
  const stages: string[] = [];
  if (client.logo) stages.push(client.logo);
  if (client.brandfetchDomain) stages.push(brandfetchUrl(client.brandfetchDomain));
  const [stageIdx, setStageIdx] = useState(0);
  const initials = initialsOf(client.name);
  const showMonogram = stageIdx >= stages.length;

  return (
    <li className="rounded-xl border border-gray-200 bg-white p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow">
      <div className="h-16 w-full flex items-center justify-center">
        {showMonogram ? (
          <div
            aria-hidden="true"
            className="w-16 h-16 rounded-lg flex items-center justify-center font-display font-bold text-xl"
            style={{
              background: "linear-gradient(135deg, #FFF8EC 0%, #FFFDF7 100%)",
              color: "var(--color-primary)",
              border: "1px solid rgba(201,168,76,0.35)",
            }}
          >
            {initials}
          </div>
        ) : (
          <img
            // `key` forces React to remount the <img> when we advance to the
            // next stage URL, so onError fires again for the new URL.
            key={stages[stageIdx]}
            src={stages[stageIdx]}
            alt={`${client.name} — Chennai client of Super Printers`}
            loading="lazy"
            decoding="async"
            className="max-h-16 max-w-full object-contain"
            style={{ filter: "grayscale(15%)" }}
            onError={() => setStageIdx((i) => i + 1)}
          />
        )}
      </div>
      <div className="text-center">
        <p className="font-display text-sm font-bold" style={{ color: "var(--color-primary)" }}>
          {client.name}
        </p>
        {client.tag && (
          <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
            {client.tag}
          </p>
        )}
      </div>
    </li>
  );
};

/**
 * /clients — enterprise client logo wall (Imprint Wings pattern).
 *
 * The Phase 5 competitor deep-dive identified the 29-logo client wall as
 * one of imprintwings.com's two single biggest ranking advantages — it
 * functions as the heaviest E-E-A-T signal Google has for B2B printers.
 *
 * Logo data lives in src/data/clients.ts. The page also acts as the
 * canonical answer to "what brands does Super Printers work with?" for
 * AI Overview / Perplexity citations.
 */
const ClientsPage = () => {
  const tags = Array.from(new Set(CLIENTS.map((c) => c.tag).filter((t): t is string => !!t)));

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BUSINESS.siteUrl}/clients#about`,
    name: "Super Printers — Trusted by 10,000+ Chennai Businesses",
    description: "Companies, hospitals, foundations and industrial firms across Chennai who choose Super Printers for their printing needs.",
    url: `${BUSINESS.siteUrl}/clients`,
    mainEntity: { "@id": `${BUSINESS.siteUrl}/#business` },
    isPartOf: { "@id": `${BUSINESS.siteUrl}/#website` },
    inLanguage: "en-IN",
    // ItemList of Organization references so AI engines can extract the client roster
    hasPart: {
      "@type": "ItemList",
      itemListElement: CLIENTS.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Organization",
          name: c.name,
        },
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Our Clients — Trusted by Chennai Businesses | Super Printers"
        description="Wipro, TTK Healthcare, Bharat Petroleum, Reliance, Fujitec and 10,000+ Chennai businesses choose Super Printers for visiting cards, brochures, IDs and corporate printing."
        canonical="/clients"
        schemaMarkup={orgSchema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Our Clients", url: "/clients" },
        ]}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto text-center">
            <nav className="text-sm text-gray-500 mb-6 text-left" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>Our Clients</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Trusted by Chennai Businesses for 35 Years
            </h1>
            <p className="text-lg leading-relaxed lead-answer max-w-3xl mx-auto" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              Super Printers has served 10,000+ customers since 1990 — from family wedding-card buyers to multinational
              corporates across Chennai. A small sample of the businesses, hospitals, foundations and industrial firms
              who order printing from us:
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white" aria-labelledby="clients-grid-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="clients-grid-heading" className="sr-only">Client logos</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {CLIENTS.map((c) => (
                <ClientLogoTile key={c.name} client={c} />
              ))}
            </ul>
          </div>
        </section>

        {tags.length > 0 && (
          <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                Industries we serve in Chennai
              </h2>
              <p className="text-base mb-6" style={{ color: "#374151" }}>
                Our client base spans every major Chennai industry — corporate IT, manufacturing, healthcare, oil &amp;
                energy, leather, logistics and more. Each industry has different printing needs; we have dedicated
                landing pages explaining what each sector typically orders from us:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm" style={{ color: "var(--color-primary)" }}>
                <li><Link to="/industries/pharma-printing-chennai/" className="hover:underline">Pharmaceutical printing in Chennai</Link></li>
                <li><Link to="/industries/automotive-printing-chennai/" className="hover:underline">Automotive printing in Chennai</Link></li>
                <li><Link to="/industries/hospital-printing-chennai/" className="hover:underline">Hospital &amp; healthcare printing</Link></li>
                <li><Link to="/industries/hospitality-printing-chennai/" className="hover:underline">Hotel &amp; restaurant printing</Link></li>
                <li><Link to="/industries/education-printing-chennai/" className="hover:underline">School &amp; college printing</Link></li>
                <li><Link to="/industries/it-printing-chennai/" className="hover:underline">IT corporate printing</Link></li>
              </ul>
            </div>
          </section>
        )}

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Want to be the next Super Printers customer?
            </h2>
            <p className="text-base mb-6" style={{ color: "#374151" }}>
              WhatsApp <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--color-primary)" }}>+91 98401 99878</a>.
              Quote in 30 minutes, proof in 4 hours, prints in 24-48 hours. PO billing supported for corporates with GSTIN.
            </p>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I represent a Chennai company. We're evaluating Super Printers for our printing needs — please share your corporate pricing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            >
              💬 Get corporate pricing
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ClientsPage;
