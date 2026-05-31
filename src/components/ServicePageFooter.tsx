import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

/**
 * Shared trust + cross-linking footer used by every service landing page.
 * Adds AggregateRating JSON-LD (so star ratings appear in Google SERP),
 * Tamil tagline for language relevance, an internal link cluster for both
 * related services and areas served, and a repeated WhatsApp CTA.
 *
 * Props let each host page declare its own slug so we don't link a service
 * page back to itself.
 */
type ServicePageFooterProps = {
  /** Slug of the page this footer is rendered on (e.g. "banners"). Used to
   *  filter the related-services list. */
  currentSlug: string;
  /** Display name of the current service (e.g. "Banner printing"). */
  serviceName: string;
  /** WhatsApp pre-fill text. */
  whatsappPrompt?: string;
};

const ALL_SERVICES = [
  { slug: "wedding-cards",   label: "Wedding Cards",   emoji: "💒" },
  { slug: "visiting-cards",  label: "Visiting Cards",  emoji: "💳" },
  { slug: "brochures",       label: "Brochures",       emoji: "📄" },
  { slug: "bill-books",      label: "GST Bill Books",  emoji: "🧾" },
  { slug: "letterheads",     label: "Letterheads",     emoji: "📋" },
  { slug: "banners",         label: "Banners",         emoji: "🪧" },
  { slug: "stickers",        label: "Stickers",        emoji: "🏷️" },
  { slug: "rubber-stamps",   label: "Rubber Stamps",   emoji: "🖋️" },
  { slug: "catalogues",      label: "Catalogues",      emoji: "📚" },
  { slug: "pvc-id-cards",    label: "PVC ID Cards",    emoji: "🪪" },
];

const TOP_AREAS = [
  { slug: "printing-press-pallavaram",  label: "Pallavaram" },
  { slug: "printing-press-chromepet",   label: "Chromepet" },
  { slug: "printing-press-tambaram",    label: "Tambaram" },
  { slug: "printing-press-pammal",      label: "Pammal" },
  { slug: "printing-press-velachery",   label: "Velachery" },
  { slug: "printing-press-guindy",      label: "Guindy" },
];

const ServicePageFooter = ({ currentSlug, serviceName, whatsappPrompt }: ServicePageFooterProps) => {
  const related = ALL_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 6);
  const waMsg = whatsappPrompt ?? `Hi! I'm interested in ${serviceName} from Super Printers. Please share a quote.`;

  // AggregateRating per page lets Google show ⭐ in search snippets.
  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} — Super Printers`,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS.addressFull,
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS.googleRating,
      "reviewCount": String(BUSINESS.googleReviewCount),
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  return (
    <section className="mt-16 pt-12 border-t border-border-light bg-gradient-to-b from-white to-gray-50/40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />

      <div className="max-w-4xl mx-auto px-6">
        {/* Trust strip — two facts that actually matter, said once.
            GST + 24h turnaround are documented in the footer / per-page copy already. */}
        <div className="grid grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="text-center p-5 rounded-2xl bg-white border border-border-light shadow-card">
            <p className="font-display font-bold text-3xl" style={{ color: "var(--ink-black)" }}>Est. 1990</p>
            <p className="text-xs font-ui text-gray-600 mt-1">35 years in Pallavaram</p>
          </div>
          <div className="text-center p-5 rounded-2xl bg-white border border-border-light shadow-card">
            <p className="font-display font-bold text-3xl" style={{ color: "var(--ink-black)" }}>
              ★ {BUSINESS.googleRating}
            </p>
            <p className="text-xs font-ui text-gray-600 mt-1">{BUSINESS.googleReviewCount}+ Google reviews</p>
          </div>
        </div>

        {/* Tamil tagline — language relevance signal for Tamil voice / text search */}
        <div
          className="text-center mb-12 py-6 rounded-3xl"
          style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}
        >
          <p
            className="text-lg md:text-xl font-medium text-ink-black mb-1"
            style={{ fontFamily: "'Noto Sans Tamil', system-ui, sans-serif", lang: "ta" }}
            lang="ta"
          >
            பல்லாவரத்தில் சிறந்த அச்சகம் — 1990 முதல்
          </p>
          <p className="text-sm font-ui text-gray-600">
            Pallavaram&rsquo;s most trusted printing press since 1990 &mdash; visit our shop, walk-ins welcome.
          </p>
        </div>

        {/* Related services — internal link cluster */}
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">
            Other printing we do
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-border-light bg-white hover:border-gold hover:bg-gold/5 transition-colors font-ui text-sm text-ink-black"
              >
                <span aria-hidden>{s.emoji}</span>
                <span className="font-medium">{s.label}</span>
                <span className="ml-auto text-gray-400">&rsaquo;</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Areas served — local SEO cross-link */}
        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">
            We deliver across Chennai
          </h2>
          <p className="font-ui text-sm text-gray-600 mb-4">
            Free pickup from our Pallavaram press. Delivery available across these neighbourhoods:
          </p>
          <div className="flex flex-wrap gap-2">
            {TOP_AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/${a.slug}`}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-ui font-medium border border-border-light bg-white hover:border-gold hover:bg-gold/5 transition-colors text-ink-black"
              >
                {a.label}
              </Link>
            ))}
            <Link
              to="/services/"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-ui font-medium text-gold hover:underline"
            >
              All areas &rsaquo;
            </Link>
          </div>
        </section>

        {/* Final CTA block — repeats the conversion prompt below the fold */}
        <section className="mb-8 p-8 rounded-3xl text-center" style={{ backgroundColor: "var(--navy-deep)" }}>
          <h2 className="font-display font-bold text-2xl text-white mb-3">
            Get a free quote in 30 minutes
          </h2>
          <p className="font-ui text-white/80 mb-6">
            WhatsApp us with what you need &mdash; we&rsquo;ll share a price and a free design proof before you commit.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-white transition-all hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366" }}
            >
              💬 WhatsApp +91 98401 99878
            </a>
            <a
              href="tel:+919840199878"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold transition-all hover:scale-[1.03]"
              style={{ backgroundColor: "var(--gold)", color: "var(--ink-black, #1a1a2e)" }}
            >
              📞 Call now
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicePageFooter;
