import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";

const TIERS = [
  {
    id: "starter",
    label: "Occasional Designer",
    price: "Standard rates",
    features: ["Same-day quotes via WhatsApp", "GST invoice provided", "PDF proof included", "Min order: 50 pcs"],
    cta: "Start Ordering →",
    ctaLink: BUSINESS.whatsapp,
    popular: false,
  },
  {
    id: "partner",
    label: "Regular Reseller",
    price: "10% bulk discount",
    features: [
      "All Starter features",
      "10% off on orders >₹5,000/month",
      "Priority 24-hr turnaround",
      "Dedicated WhatsApp account manager",
      "Monthly credit account option",
      "Free design review",
    ],
    cta: "Apply for Partner Status →",
    ctaLink: `${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I'm a designer/DTP operator and I'd like to discuss reseller pricing.")}`,
    popular: true,
  },
  {
    id: "factory",
    label: "High Volume / Print Shop",
    price: "Up to 25% off",
    features: [
      "All Partner features",
      "Up to 25% off on orders >₹25,000/month",
      "Net-30 payment terms",
      "Dedicated production slot",
      "Custom finishing options",
    ],
    cta: "Contact for Quote →",
    ctaLink: BUSINESS.whatsapp,
    popular: false,
  },
];

const STEPS = [
  { num: 1, title: "Register", body: "WhatsApp us to say you're a designer/DTP operator" },
  { num: 2, title: "Get Partner Price List", body: "Receive our confidential B2B price sheet" },
  { num: 3, title: "Place Orders", body: "Send files via WhatsApp, get 24hr turnaround" },
  { num: 4, title: "Get GST Invoice", body: "Every order comes with a clean GST invoice" },
];

const RESELLER_FAQ = [
  {
    q: "Do I need to register as a business to get reseller pricing?",
    a: "No — freelance designers and DTP operators qualify. Just place consistent orders and you'll automatically get better rates.",
  },
  {
    q: "Can I use your address to collect orders on behalf of my clients?",
    a: "Yes. Many of our partner designers collect orders directly from our Pallavaram workshop on behalf of their clients.",
  },
  {
    q: "What's the minimum for partner pricing?",
    a: "There's no minimum — just consistent orders. Most resellers spend ₹3,000–₹15,000 per month with us.",
  },
  {
    q: "Do you print white-label? (No Super Printers branding)",
    a: "Absolutely. Your client's products will have no mention of us. Completely white-label service.",
  },
];

const ResellerPage = () => (
  <div className="font-body text-foreground overflow-x-hidden bg-white" style={{ backgroundColor: "#FFFFFF" }}>
    <SEOHead
      title="DTP Operator & Print Reseller Program Chennai | Bulk Printing Factory | Super Printers"
      description="Bulk printing for DTP operators, designers and resellers in Chennai. Factory pricing, GST invoice, 24hr turnaround. Partner program with up to 25% discount. WhatsApp: +91 98401 99878."
      canonical="/reseller"
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-ui font-medium mb-4 text-gold border border-gold" style={{ color: "var(--gold)", borderColor: "var(--gold)" }}>
            FOR PROFESSIONALS
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-ink-black mb-4">
            Partner With Chennai&apos;s Most Experienced Print Factory
          </h1>
          <p className="font-ui text-lg text-gray-600 max-w-2xl mx-auto">
            35 years of printing expertise, now available to DTP operators, designers, and print resellers across Chennai and Tamil Nadu. Factory pricing. No middleman.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-6 border ${tier.popular ? "border-gold shadow-lg" : "border-border-light"} bg-white shadow-card`}
            >
              {tier.popular && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-ui font-semibold text-ink-black mb-4" style={{ backgroundColor: "var(--gold)" }}>
                  Most Popular
                </span>
              )}
              <h3 className="font-display font-semibold text-xl text-ink-black mb-1">{tier.label}</h3>
              <p className="font-ui text-gold text-lg font-medium mb-4" style={{ color: "var(--gold)" }}>{tier.price}</p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-ui text-sm text-ink-black/90">
                    <span className="text-gold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={tier.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-full font-ui font-semibold text-ink-black transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "var(--gold)" }}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="font-display font-bold text-2xl text-ink-black text-center mb-10">How Reseller Program Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <span className="inline-flex w-12 h-12 rounded-full items-center justify-center font-display font-bold text-lg mb-3 text-ink-black" style={{ backgroundColor: "var(--gold)" }}>
                  {step.num}
                </span>
                <h4 className="font-display font-semibold text-ink-black mb-2">{step.title}</h4>
                <p className="font-ui text-sm text-ink-black/70">{step.body}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="font-display font-bold text-2xl text-ink-black text-center mb-8">FAQ</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {RESELLER_FAQ.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-border-light bg-gray-50/50 p-5">
                <h3 className="font-display font-semibold text-ink-black mb-2">{faq.q}</h3>
                <p className="font-ui text-sm text-ink-black/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="text-center">
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I'm a designer/DTP operator and I'd like to discuss reseller pricing.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-ui font-semibold text-ink-black transition-all hover:scale-[1.02]"
            style={{ backgroundColor: "var(--gold)" }}
          >
            Join Our Partner Program
          </a>
        </div>

        <p className="text-center mt-6">
          <Link to="/" className="font-ui text-sm text-ink-black/70 hover:text-gold transition-colors">← Back to Home</Link>
        </p>
      </div>
    </div>
  </div>
);

export default ResellerPage;
