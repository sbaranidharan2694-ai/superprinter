import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { INDUSTRY_PAGES } from "@/data/industryPages";

/**
 * Renders /industries/<slug> vertical pages. Industry-vertical positioning
 * lets us compete on B2B intent queries (pharma printing chennai,
 * automotive printing chennai, hospital printing chennai) — a pattern
 * the May-2026 competitive audit identified as a major imprintwings
 * advantage.
 */
const IndustryPage = () => {
  const location = useLocation();
  // Path arrives as /industries/<slug>
  const slug = location.pathname.replace(/^\/+|\/+$/g, "").replace(/^industries\//, "");
  const page = INDUSTRY_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Link to="/" className="text-secondary hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS.siteUrl}/industries/${page.slug}#service`,
    name: page.h1,
    serviceType: `${page.industry} printing`,
    description: page.intro,
    url: `${BUSINESS.siteUrl}/industries/${page.slug}`,
    provider: { "@id": `${BUSINESS.siteUrl}/#business` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: `${page.industry} sector`,
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Tamil Nadu",
        containedInPlace: { "@type": "Country", name: "India" },
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BUSINESS.siteUrl}/industries/${page.slug}#faq`,
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={`/industries/${page.slug}`}
        schemaMarkup={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: page.industry, url: `/industries/${page.slug}` },
        ]}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/industries/" className="hover:underline">Industries</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>{page.industry}</span>
            </nav>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              {page.h1}
            </h1>
            <p className="text-lg leading-relaxed lead-answer" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              {page.intro}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white" aria-labelledby="products-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="products-heading" className="font-display text-xl md:text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              What {page.industry.toLowerCase()} companies in Chennai order from us
            </h2>
            <ul className="space-y-5">
              {page.typicalProducts.map((p) => (
                <li key={p.product} className="border-l-4 pl-4" style={{ borderColor: "var(--gold)" }}>
                  <h3 className="font-display text-base font-bold mb-1" style={{ color: "var(--color-primary)" }}>
                    {p.product}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
                    {p.useCase}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-10 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Specs & finishing options
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              {page.specs}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white" aria-labelledby="industry-faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="industry-faq-heading" className="font-display text-xl md:text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              {page.industry} printing — common questions
            </h2>
            <dl className="space-y-6">
              {page.faqs.map((faq) => (
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

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto text-center">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I'd like a quote for ${page.industry.toLowerCase()}-sector printing in Chennai.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            >
              💬 Get a {page.industry.toLowerCase()} printing quote
            </a>
          </div>
        </section>

        <ServicePageFooter
          currentSlug={`industries/${page.slug}`}
          serviceName={`${page.industry} printing`}
          whatsappPrompt={`Hi, I'd like a quote for ${page.industry.toLowerCase()} printing in Chennai.`}
        />
      </main>
    </>
  );
};

export default IndustryPage;

/** Source-of-truth slug list for App router + sitemap. */
export const INDUSTRY_PAGE_SLUGS = INDUSTRY_PAGES.map((p) => p.slug);
