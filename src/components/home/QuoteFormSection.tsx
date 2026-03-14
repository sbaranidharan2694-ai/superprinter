import { useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { V2_QUOTE_PRODUCTS, V2_QUOTE_QUANTITY, V2_QUOTE_FINISH } from "@/data/v2";

const QuoteFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [finish, setFinish] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  const validate = () => {
    const e: { name?: string; phone?: string } = {};
    if (!name.trim()) e.name = "Please enter your name";
    if (!phone.trim()) e.phone = "Please enter your phone number";
    else if (!/^[\d\s+\-()]{7,}$/.test(phone.trim())) e.phone = "Please enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const message = `Hi Super Printers! I need a quote:\n\nName: ${name}\nPhone: ${phone}\nProduct: ${product || "—"}\nQuantity: ${quantity || "—"}\nPaper/Finish: ${finish || "—"}\nNotes: ${notes || "—"}`;
    window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="quote-form" className="py-20 md:py-24 bg-white border-t border-border-light" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left 40% */}
          <div className="lg:col-span-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold font-ui text-sm font-medium mb-2 flex items-center gap-2"
              style={{ color: "var(--gold)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
              Get a quote
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-4"
            >
              Your Quote in 30 Minutes.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gray-600 font-body text-base mb-6"
            >
              Share your requirements and we&apos;ll WhatsApp you a quote within 30 minutes during business hours. No commitment.
            </motion.p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Free proof", "48H delivery", "No obligation"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-2xl text-xs font-body font-medium bg-gold/20 text-ink-black" style={{ backgroundColor: "rgba(212,168,67,0.2)" }}>
                  {badge}
                </span>
              ))}
            </div>
            <p className="text-gray-600 font-body text-sm mb-3">Or reach us directly:</p>
            <div className="space-y-2 text-gray-700 font-body text-sm">
              <a href={BUSINESS.phoneTel} className="block hover:text-gold transition-colors">📞 {BUSINESS.phone}</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">💬 WhatsApp</a>
              <p>📍 {BUSINESS.addressFull}</p>
              <p>🕐 {BUSINESS.hours}</p>
            </div>
          </div>

          {/* Right 60% - form card */}
          <div className="lg:col-span-3">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="quote-form-card rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
              style={{ background: "#FFFFFF", boxShadow: "0 24px 64px rgba(0,0,0,0.12)", border: "1px solid var(--border-light)" }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-ink-black font-body text-lg mb-2">Request sent! We&apos;ll reply on WhatsApp shortly.</p>
                  <p className="text-gray-text text-sm">You can close this and check WhatsApp.</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="quote-name" className="block text-ink-black font-body text-sm font-medium mb-1">Full Name *</label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })); }}
                        className={`w-full border rounded-xl px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold ${errors.name ? "border-red-400 bg-red-50" : "border-border-light"}`}
                        placeholder="Your name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="block text-ink-black font-body text-sm font-medium mb-1">Phone / WhatsApp *</label>
                      <input
                        id="quote-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors((p) => ({ ...p, phone: undefined })); }}
                        className={`w-full border rounded-xl px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold ${errors.phone ? "border-red-400 bg-red-50" : "border-border-light"}`}
                        placeholder="+91"
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                      />
                      {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="quote-product" className="block text-ink-black font-body text-sm font-medium mb-1">Product Type</label>
                      <select
                        id="quote-product"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-full border border-border-light rounded-xl px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      >
                        {V2_QUOTE_PRODUCTS.map((opt) => (
                          <option key={opt.value || "select"} value={opt.value}>{opt.emoji ? `${opt.emoji} ` : ""}{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-quantity" className="block text-ink-black font-body text-sm font-medium mb-1">Quantity</label>
                      <select
                        id="quote-quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="w-full border border-border-light rounded-xl px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      >
                        <option value="">Select</option>
                        {V2_QUOTE_QUANTITY.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-finish" className="block text-ink-black font-body text-sm font-medium mb-1">Paper / Finish (optional)</label>
                      <select
                        id="quote-finish"
                        value={finish}
                        onChange={(e) => setFinish(e.target.value)}
                        className="w-full border border-border-light rounded-xl px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold"
                      >
                        <option value="">Select</option>
                        {V2_QUOTE_FINISH.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quote-notes" className="block text-ink-black font-body text-sm font-medium mb-1">Additional Notes</label>
                      <textarea
                        id="quote-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full border border-border-light rounded-xl px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold resize-y"
                        placeholder="Dimensions, colours, design details..."
                      />
                    </div>
                    <div className="rounded-2xl bg-gray-100 p-4 text-sm font-body text-gray-600">
                      💡 You can attach your design file when we reply on WhatsApp.
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="quote-submit-btn mt-6 w-full py-4 rounded-xl font-ui font-semibold text-base text-ink-black border-none cursor-pointer transition-all duration-250"
                    style={{ backgroundColor: "#D4A843", boxShadow: "0 4px 16px rgba(212,168,67,0.4)" }}
                  >
                    Send Quote Request →
                  </button>
                  <p className="mt-4 text-gray-500 text-[13px] font-body">
                    We never share your details. Quote sent via WhatsApp only.
                  </p>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
