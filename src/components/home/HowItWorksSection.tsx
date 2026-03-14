import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Tell Us What You Need",
    body: "Call, WhatsApp, or fill our quote form. Share your specs — size, quantity, paper type, and design files.",
    icon: "💬",
  },
  {
    num: "02",
    title: "We Prepare Your Sample",
    body: "Our team prepares a digital proof within 24 hours. Review and approve before we print a single sheet.",
    icon: "🎨",
  },
  {
    num: "03",
    title: "Ready in 48 Hours",
    body: "Most orders are print-ready within 48 hours. Pick up from Pallavaram or we arrange delivery.",
    icon: "🚚",
  },
];

const HowItWorksSection = () => (
  <section id="process" className="py-16 md:py-24 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
          HOW TO ORDER
        </p>
        <h2 className="font-display font-semibold text-3xl md:text-[40px] text-navy">
          Simple as 1 – 2 – 3
        </h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="font-display font-bold text-[80px] text-gold/20 leading-none mb-2" style={{ color: "rgba(201,151,58,0.2)" }}>
              {step.num}
            </div>
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3 className="font-display font-semibold text-xl text-navy mb-2">{step.title}</h3>
            <p className="font-body text-gray-text text-[15px] leading-relaxed max-w-xs">
              {step.body}
            </p>
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gold/30" style={{ backgroundColor: "rgba(201,151,58,0.3)" }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
