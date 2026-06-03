import { useLocation, Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";
import { WEDDING_STYLE_PAGES } from "@/data/weddingStyles";
import { IMAGE_PATHS } from "@/data/imagePaths";

/**
 * Renders the tradition-specific wedding-card landing pages
 * (/hindu-wedding-cards-chennai, /christian-…, /muslim-…, /tamil-…).
 * Exact-match URL + H1 per sub-query, driven by data/weddingStyles.ts.
 */
const WeddingStylePage = () => {
  const slug = useLocation().pathname.replace(/^\/+|\/+$/g, "");
  const page = WEDDING_STYLE_PAGES.find((p) => p.slug === slug);

  if (!page) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
        <Link to="/" className="text-secondary hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const canonical = `/${page.slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BUSINESS.siteUrl}${canonical}#faq`,
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const others = WEDDING_STYLE_PAGES.filter((p) => p.slug !== page.slug);

  return (
    <div className="font-body text-foreground bg-background overflow-x-hidden">
      <SEOHead
        title={page.title}
        description={page.metaDescription}
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Wedding Cards", url: "/wedding-cards" },
          { name: page.h1, url: canonical },
        ]}
        schemaMarkup={[
          serviceLandingSchema({
            path: canonical,
            name: page.h1,
            serviceType: page.serviceType,
            description: page.metaDescription,
          }),
          faqSchema,
        ]}
      />

      <PageHero
        title={page.h1}
        subtitle={page.heroSubtitle}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Wedding Cards", to: "/wedding-cards" },
          { label: page.h1, to: canonical },
        ]}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Intro */}
        <div className="prose max-w-none mb-12">
          {page.intro.map((p, i) => (
            <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>{p}</p>
          ))}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {page.galleryImageIds.map((id) => (
            <img
              key={id}
              src={IMAGE_PATHS.gallery(id)}
              alt={`${page.h1} sample design printed in Chennai by Super Printers`}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full aspect-square object-cover rounded-2xl border"
              style={{ borderColor: "rgba(201,168,76,0.2)" }}
            />
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {page.highlights.map((h) => (
            <div key={h.h} className="p-6 rounded-2xl border" style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "#FFFDF7" }}>
              <h2 className="font-display font-bold text-lg mb-2" style={{ color: "var(--color-primary)" }}>{h.h}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>{h.p}</p>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mb-14">
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi Super Printers! I need ${page.serviceType.toLowerCase()}. Please share designs and your cheapest rate.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#25D366" }}
          >
            💬 Get Designs & Cheapest Rate on WhatsApp
          </a>
        </div>

        {/* FAQs */}
        <div className="mb-14">
          <h2 className="font-display font-extrabold text-2xl mb-6" style={{ color: "var(--color-primary)" }}>Common questions</h2>
          <div className="space-y-4">
            {page.faqs.map((f) => (
              <div key={f.q} className="p-5 rounded-2xl border" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
                <h3 className="font-bold text-base mb-1.5" style={{ color: "var(--color-primary)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Internal links */}
        <div className="text-center">
          <h2 className="font-display font-bold text-lg mb-4" style={{ color: "var(--color-primary)" }}>More wedding card styles</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <Link to="/wedding-cards" className="px-4 py-2 rounded-full border transition-transform hover:scale-[1.02]" style={{ borderColor: "rgba(201,168,76,0.4)", color: "var(--color-primary)" }}>All Wedding Cards</Link>
            {others.map((o) => (
              <Link key={o.slug} to={`/${o.slug}`} className="px-4 py-2 rounded-full border transition-transform hover:scale-[1.02]" style={{ borderColor: "rgba(201,168,76,0.4)", color: "var(--color-primary)" }}>
                {o.h1.replace(" in Chennai", "").replace(" & Nikah Invitation Cards", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingStylePage;
