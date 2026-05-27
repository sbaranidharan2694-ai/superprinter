import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import ServicePageFooter from "@/components/ServicePageFooter";
import { BUSINESS } from "@/data/business";
import { HEAD_KEYWORD_PAGES } from "@/data/headKeywordPages";

/**
 * Renders /printing-press-chennai, /offset-printing-press-in-chennai,
 * /digital-printing-press-in-chennai. Exact-match URL + H1 strategy
 * driven by the May-2026 competitive analysis vs imprintwings.com.
 */
const HeadKeywordPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\/+|\/+$/g, "");
  const page = HEAD_KEYWORD_PAGES.find((p) => p.slug === slug);

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
    "@id": `${BUSINESS.siteUrl}/${page.slug}#service`,
    name: page.h1,
    serviceType: page.serviceType,
    description: page.intro,
    url: `${BUSINESS.siteUrl}/${page.slug}`,
    provider: { "@id": `${BUSINESS.siteUrl}/#business` },
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
    "@id": `${BUSINESS.siteUrl}/${page.slug}#faq`,
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
        canonical={`/${page.slug}`}
        schemaMarkup={[serviceSchema, faqSchema]}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: page.h1, url: `/${page.slug}` },
        ]}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>{page.h1}</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              {page.h1}
            </h1>
            <p className="text-lg leading-relaxed lead-answer" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              {page.intro}
            </p>
          </div>
        </section>

        {page.sections.map((sec) => (
          <section key={sec.heading} className="py-10 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                {sec.heading}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
                {sec.body}
              </p>
            </div>
          </section>
        ))}

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }} aria-labelledby="head-faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="head-faq-heading" className="font-display text-xl md:text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Frequently asked questions
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

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I'd like a quote for ${page.serviceType.toLowerCase()} in Chennai.`)}`}
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
          currentSlug={page.slug}
          serviceName={page.serviceType}
          whatsappPrompt={`Hi, I'd like a quote for ${page.serviceType.toLowerCase()} in Chennai.`}
        />
      </main>
    </>
  );
};

export default HeadKeywordPage;

/** Source-of-truth slug list for App router + sitemap. */
export const HEAD_KEYWORD_SLUGS = HEAD_KEYWORD_PAGES.map((p) => p.slug);
