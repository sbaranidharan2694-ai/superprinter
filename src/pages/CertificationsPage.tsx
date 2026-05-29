import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { CERTIFICATIONS, type Certification } from "@/data/certifications";

/**
 * /certifications — credibility hub for industry certifications,
 * memberships, and statutory registrations. Mirrors the /clients
 * trust-signal pattern but for institutional rather than individual
 * client proof.
 */

function initialsOf(name: string): string {
  const words = name.replace(/[^A-Za-z. ]/g, "").split(/[\s.]+/).filter(Boolean);
  if (words.length === 0) return "?";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

const scopeLabel = (s: Certification["scope"]) =>
  ({ press: "Held by our press", supplier: "Held by our suppliers", membership: "Membership", compliance: "Statutory" }[s]);

const CertificationTile = ({ cert }: { cert: Certification }) => {
  const [loadFailed, setLoadFailed] = useState(false);
  const initials = initialsOf(cert.name);
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-5">
        <div className="shrink-0 h-16 w-16 flex items-center justify-center">
          {loadFailed ? (
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
              src={cert.logo}
              alt={`${cert.name} — ${cert.issuingBody}`}
              loading="lazy"
              decoding="async"
              className="max-h-16 max-w-16 object-contain"
              onError={() => setLoadFailed(true)}
            />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-3 mb-1 flex-wrap">
            <h3 className="font-display text-lg font-bold" style={{ color: "var(--color-primary)" }}>
              {cert.name}
            </h3>
            <span
              className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded"
              style={{ background: "rgba(201,168,76,0.15)", color: "var(--gold-dark)" }}
            >
              {scopeLabel(cert.scope)}
            </span>
          </div>
          <p className="text-xs mb-2" style={{ color: "#6B7280" }}>
            Issued by {cert.issuingBody}
            {cert.sinceYear ? ` · Since ${cert.sinceYear}` : ""}
          </p>
          <p className="text-sm leading-relaxed mb-2" style={{ color: "#374151" }}>
            {cert.description}
          </p>
          {cert.bodyUrl && (
            <a
              href={cert.bodyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
              style={{ color: "var(--color-primary)" }}
            >
              About {cert.issuingBody} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const CertificationsPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BUSINESS.siteUrl}/certifications#about`,
    name: "Certifications & Memberships — Super Printers Chennai",
    description: "Industry certifications, sustainability standards and statutory registrations that Super Printers and its supply chain hold.",
    url: `${BUSINESS.siteUrl}/certifications`,
    mainEntity: { "@id": `${BUSINESS.siteUrl}/#business` },
    isPartOf: { "@id": `${BUSINESS.siteUrl}/#website` },
    inLanguage: "en-IN",
  };

  return (
    <>
      <SEOHead
        title="Certifications & Memberships — Super Printers Chennai"
        description="Industry certifications and statutory registrations Super Printers holds — GST, Leather Working Group supply-chain coverage, and more."
        canonical="/certifications"
        schemaMarkup={schema}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Certifications", url: "/certifications" },
        ]}
      />
      <main className="min-h-screen">
        <section className="py-16 md:py-20 px-4" style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF8EC 100%)" }}>
          <div className="max-w-4xl mx-auto">
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span style={{ color: "var(--color-primary)" }}>Certifications</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
              Certifications & Compliance
            </h1>
            <p className="text-lg leading-relaxed lead-answer" style={{ color: "#374151", fontFamily: "var(--font-body)" }}>
              Industry certifications, sustainability standards and statutory registrations that govern how Super Printers and
              its supply chain operate. We work with B2B customers who need a paper trail of compliance — and a clean trail
              is what we deliver.
            </p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {CERTIFICATIONS.map((c) => (
                <CertificationTile key={c.name} cert={c} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4" style={{ backgroundColor: "#FFFDF7" }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
              Need printing for a regulated industry?
            </h2>
            <p className="text-base mb-6" style={{ color: "#374151" }}>
              Pharma, healthcare, food, automotive — every regulated sector has documentation requirements we already meet.
              Share your spec on WhatsApp and we'll confirm scope on the same call.
            </p>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, our procurement requires certified printing — please share Super Printers' compliance scope.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-lg transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            >
              💬 Request compliance details
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default CertificationsPage;
