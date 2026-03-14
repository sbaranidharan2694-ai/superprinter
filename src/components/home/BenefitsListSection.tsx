import { motion } from "framer-motion";
import {
  Truck,
  Award,
  Sparkles,
  Heart,
  MapPin,
  FileCheck,
  MessageCircle,
  Building2,
  type LucideIcon,
} from "lucide-react";

const BENEFITS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Truck,
    title: "48-Hour & Same-Day Delivery",
    description: "Business cards ready in 48 hours. Same-day options when you need them fast.",
  },
  {
    icon: Award,
    title: "35 Years Experience in Pallavaram",
    description: "Trusted since 1990. Chennai's go-to print studio for quality and reliability.",
  },
  {
    icon: Sparkles,
    title: "Premium Finishes",
    description: "Spot UV, foil stamping, lamination — professional finishes that stand out.",
  },
  {
    icon: Heart,
    title: "Wedding Cards & Corporate Stationery",
    description: "Elegant wedding invitations and polished letterheads, visiting cards, and more.",
  },
  {
    icon: MapPin,
    title: "Local Pickup — No Shipping Delays",
    description: "Pallavaram-based. Collect in person and avoid courier delays or damage.",
  },
  {
    icon: FileCheck,
    title: "Quality Paper & Professional Results",
    description: "Premium stocks and precise printing for results you can be proud of.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Ordering & Easy Quotes",
    description: "Get a quote and place orders via WhatsApp. Quick replies, no hassle.",
  },
  {
    icon: Building2,
    title: "Trusted by Leading Companies",
    description: "Wipro, TTK, and many others rely on us for their print needs.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const BenefitsListSection = () => (
  <section
    id="benefits"
    className="py-20 md:py-24"
    className="border-t border-border-light"
    style={{ backgroundColor: "#FFFFFF" }}
    aria-labelledby="benefits-heading"
  >
    <div className="max-w-7xl mx-auto px-6">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-14"
      >
        <p
          className="font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2"
          style={{ color: "var(--gold)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current"
            aria-hidden
          />
          Benefits you get
        </p>
        <h2
          id="benefits-heading"
          className="font-display font-bold text-3xl md:text-4xl mb-3"
          style={{ color: "var(--navy)" }}
        >
          Why Super Printers
        </h2>
        <p
          className="font-ui text-base max-w-2xl mx-auto"
          style={{ color: "var(--gray-text)" }}
        >
          Fast delivery, premium quality, and a team that&apos;s been trusted in Pallavaram for over three decades.
        </p>
      </motion.header>

      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 list-none p-0 m-0"
      >
        {BENEFITS.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <motion.li key={benefit.title} variants={item}>
              <article
                className="h-full rounded-2xl p-6 border-l-[4px] bg-white shadow-sm transition-shadow hover:shadow-card"
                style={{
                  borderLeftColor: "var(--gold)",
                  boxShadow: "var(--shadow-sm)",
                  color: "var(--ink-black)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--gold-bg)", color: "var(--gold)" }}
                  aria-hidden
                >
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3
                  className="font-display font-semibold text-lg mb-2"
                  style={{ color: "var(--ink-black)" }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="font-ui text-[15px] leading-relaxed"
                  style={{ color: "var(--gray-text)" }}
                >
                  {benefit.description}
                </p>
              </article>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  </section>
);

export default BenefitsListSection;
