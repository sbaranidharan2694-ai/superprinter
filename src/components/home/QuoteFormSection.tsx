import { useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { SERVICE_OPTIONS } from "@/data/v2";

const QuoteFormSection = () => {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Super Printers! I'd like a quote.\n\nName: ${name}\nWhatsApp: ${whatsapp}\nService: ${service}\nQuantity: ${quantity}\nNeeded by: ${date}\nDetails: ${msg}`;
    window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <section id="quote-form" className="section-pad" style={{ backgroundColor: "var(--color-dark-section)" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="font-display font-bold text-2xl text-white mb-3">Quote Request Sent!</h3>
          <p className="text-white/70 mb-6" style={{ fontFamily: "var(--font-body)" }}>
            We'll respond on WhatsApp within 30 minutes during business hours.
          </p>
          <button
            onClick={() => setSent(false)}
            className="btn-gold px-6 py-3 rounded-full text-sm font-semibold"
          >
            Send Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="section-pad" style={{ backgroundColor: "var(--color-dark-section)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
              GET A QUOTE
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
              Request a Free Quote
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Tell us what you need and we'll get back to you with a quote within 30 minutes on WhatsApp.
            </p>
            <div className="space-y-4 text-white/60 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <a href={BUSINESS.phoneTel} className="block hover:text-white transition-colors">📞 {BUSINESS.phone}</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">💬 WhatsApp</a>
              <p>📍 {BUSINESS.addressFull}</p>
              <p>🕐 {BUSINESS.hours}</p>
              <p>🕐 {BUSINESS.hoursSunday}</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="quote-form-card"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <input
                type="tel"
                placeholder="WhatsApp Number *"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <option value="">Select Service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <input
                  type="date"
                  placeholder="When do you need it?"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <textarea
                placeholder="Additional details (size, design, finish, etc.)"
                rows={3}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none"
                style={{ fontFamily: "var(--font-body)" }}
              />
              <p className="text-xs text-gray-400" style={{ fontFamily: "var(--font-body)" }}>
                Attach your design file (.pdf .ai .jpg .png) via WhatsApp after submitting.
              </p>
            </div>
            <button type="submit" className="quote-submit-btn mt-6">
              Send My Quote Request →
            </button>
            <p className="text-xs text-center text-gray-400 mt-3" style={{ fontFamily: "var(--font-body)" }}>
              We respond within 30 minutes on WhatsApp. Mon–Sat, 9AM–8PM.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
