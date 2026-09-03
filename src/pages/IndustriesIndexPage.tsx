import { Link } from "react-router-dom";

import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { INDUSTRY_PAGES } from "@/data/industryPages";

/**
 * Hub page for the /industries/ vertical cluster.
 *
 * Added September 2026: IndustryPage's breadcrumb linked to /industries/, but
 * no route existed, so Apache refused the bare directory and Search Console
 * logged it under "Blocked due to access forbidden (403)" — reached from our
 * own navigation. A real hub also gives the six vertical pages a single
 * internal parent instead of leaving them reachable only from each other.
 */
const IndustriesIndexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BUSINESS.siteUrl}/industries/`,
    "url": `${BUSINESS.siteUrl}/industries/`,
    "name": "Industry printing services in Chennai",
    "isPartOf": { "@id": `${BUSINESS.siteUrl}/#website` },
    "about": { "@id": `${BUSINESS.siteUrl}/#business` },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": INDUSTRY_PAGES.map((page, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": page.industry,
        "url": `${BUSINESS.siteUrl}/industries/${page.slug}/`,
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Industry Printing Services in Chennai | Super Printers"
        description="Printing built around your sector — pharma cartons and inserts, automotive manuals, hospital forms, hotel collateral, school stationery and IT corporate print. Chennai since 1990."
        canonical="/industries"
        schemaMarkup={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ]}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="font-semibold" style={{ color: "var(--color-primary)" }}>Industries</span>
        </nav>

        <h1
          className="font-display font-bold text-3xl md:text-4xl mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          Industry Printing Services in Chennai
        </h1>

        <p className="text-base mb-10 max-w-3xl" style={{ color: "#4B5563" }}>
          Every sector prints differently. Pharma needs registration tolerance and
          food-grade inks; hospitals need carbonless forms that survive a ward round;
          hotels need collateral that matches a brand book. Our Pallavaram press has
          run all of it since 1990 — pick your sector for specs, typical products and
          turnaround.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {INDUSTRY_PAGES.map((page) => (
            <li key={page.slug}>
              <Link
                to={`/industries/${page.slug}`}
                className="block h-full rounded-2xl border border-border-light bg-white p-6 hover:shadow-md transition-shadow"
              >
                <h2
                  className="font-display font-bold text-xl mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {page.industry}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#4B5563" }}>
                  {page.typicalProducts
                    .slice(0, 3)
                    .map((p) => p.product)
                    .join(" · ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm" style={{ color: "#4B5563" }}>
          Sector not listed?{" "}
          <Link to="/get-quote" className="font-semibold hover:underline" style={{ color: "var(--color-primary)" }}>
            Send us your brief
          </Link>{" "}
          — we quote in about 30 minutes.
        </p>
      </div>
    </>
  );
};

export default IndustriesIndexPage;
