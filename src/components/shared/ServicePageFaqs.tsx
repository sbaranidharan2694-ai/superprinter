import { getServiceFaqs, type ServiceFaqItem } from "@/data/serviceFaqs";

/**
 * Visible FAQ block for service landing pages, paired with the FAQPage
 * schema emitted via the page's <SEOHead>. Google's 2026 rule: schema
 * content must be visible on the page — so the schema and this block both
 * pull from the same source-of-truth (`serviceFaqs.ts`) and stay in sync.
 *
 * Uses native <details>/<summary> so it's:
 *  - keyboard-accessible by default (Enter/Space toggles)
 *  - announced as a disclosure widget by screen readers
 *  - zero JavaScript needed
 *  - works perfectly in SSR-prerendered HTML
 */
type Props = {
  serviceSlug: string;
  /** Heading rendered above the FAQ list — page-specific framing. */
  heading?: string;
};

const ServicePageFaqs = ({ serviceSlug, heading = "Frequently asked questions" }: Props) => {
  const faqs: ServiceFaqItem[] = getServiceFaqs(serviceSlug);
  if (!faqs.length) return null;

  return (
    <section
      aria-labelledby={`faq-heading-${serviceSlug}`}
      className="py-12 md:py-16 bg-background"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id={`faq-heading-${serviceSlug}`}
          className="font-display text-2xl md:text-3xl font-bold mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          {heading}
        </h2>
        <p className="text-sm text-muted-foreground mb-6 font-body">
          Quick answers about this service. WhatsApp <a href="tel:+919840199878" className="text-gold hover:underline">+91 98401 99878</a> for anything else.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-xl border border-border bg-card overflow-hidden"
            >
              <summary
                className="flex items-start justify-between gap-4 cursor-pointer list-none px-5 py-4 font-display font-semibold text-base text-foreground hover:bg-muted/50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              >
                <span>{faq.name}</span>
                <span
                  className="shrink-0 mt-1 text-gold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-5 pb-4 -mt-1 text-sm leading-relaxed text-muted-foreground font-body">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePageFaqs;
