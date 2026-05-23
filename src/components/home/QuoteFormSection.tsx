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
      <section id="quote-form" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h3 className="font-display font-bold text-2xl mb-3" style={{ color: "var(--color-primary)" }}>Quote Request Sent!</h3>
          <p className="mb-6" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
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
    <section id="quote-form" className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4" style={{ color: "var(--color-primary)" }}>
              Request a Free Quote
            </h2>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              Tell us what you need and we'll get back to you with a quote within 30 minutes on WhatsApp.
            </p>
            <div className="space-y-4 text-sm font-medium" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              <a href={BUSINESS.phoneTel} className="block hover:opacity-80 transition-opacity" style={{ color: "var(--color-primary)" }}>📞 {BUSINESS.phone}</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity" style={{ color: "var(--color-primary)" }}>💬 WhatsApp</a>
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
              {/* Visible labels (not sr-only): the original placeholder-only
                  pattern fails for users who clear the placeholder while
                  typing — they lose the field context. Small uppercase
                  micro-labels keep the visual rhythm tight while satisfying
                  WCAG 3.3.2 Labels or Instructions. */}
              <div>
                <label htmlFor="quote-name" className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                  Your name <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <input
                  id="quote-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Priya Ramesh"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
                />
              </div>
              <div>
                <label htmlFor="quote-whatsapp" className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                  WhatsApp number <span className="text-destructive" aria-hidden="true">*</span>
                </label>
                <input
                  id="quote-whatsapp"
                  name="whatsapp"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9+\-\s]{10,}"
                  placeholder="e.g. 9840199878"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
                />
              </div>
              <div>
                <label htmlFor="quote-service" className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                  Service required
                </label>
                <select
                  id="quote-service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
                >
                  <option value="">Select a printing service</option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-quantity" className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                    Quantity
                  </label>
                  <input
                    id="quote-quantity"
                    name="quantity"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    placeholder="e.g. 500"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
                  />
                </div>
                <div>
                  <label htmlFor="quote-date" className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                    Needed by
                  </label>
                  <input
                    id="quote-date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                    style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="quote-message" className="block text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                  Additional details
                </label>
                <textarea
                  id="quote-message"
                  name="message"
                  placeholder="Size, design, finish, anything specific."
                  rows={3}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none"
                  style={{ fontFamily: "var(--font-body)", color: "var(--color-text)" }}
                />
              </div>
              <p className="text-xs" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
                Attach your design file (.pdf .ai .jpg .png) via WhatsApp after submitting.
              </p>
            </div>
            <button type="submit" className="quote-submit-btn mt-6">
              Get Quote →
            </button>
            <p className="text-xs text-center mt-3" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
              Mon–Sat, 9AM–8PM.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
