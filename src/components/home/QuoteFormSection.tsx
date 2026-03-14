import { useState } from "react";
import { BUSINESS } from "@/data/business";
import { QUOTE_PRODUCT_OPTIONS, QUOTE_QUANTITY_OPTIONS, QUOTE_FINISH_OPTIONS } from "@/data/landing";

const QuoteFormSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [finish, setFinish] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    const message = `Hi Super Printers! I need a quote:\nName: ${name}\nPhone: ${phone}\nProduct: ${product || "—"}\nQuantity: ${quantity || "—"}\nFinish: ${finish || "—"}\nNotes: ${notes || "—"}`;
    window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="quote-form" className="py-16 md:py-24 bg-navy" style={{ backgroundColor: "var(--color-navy)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-gold text-xs font-body font-medium uppercase tracking-widest mb-2" style={{ color: "var(--color-gold)" }}>
              GET A QUOTE
            </p>
            <h2 className="font-display font-bold text-3xl md:text-[40px] text-white mb-4">
              Your Quote in 30 Minutes
            </h2>
            <p className="text-white/70 font-body text-base mb-8">
              Fill in your requirements and we&apos;ll WhatsApp you a quote within 30 minutes during business hours. No commitment required.
            </p>
            <div className="space-y-3 text-white font-body text-[15px]">
              <p>📞 {BUSINESS.phone}</p>
              <p>💬 WhatsApp: {BUSINESS.phone}</p>
              <p>📧 {BUSINESS.email}</p>
              <p>📍 {BUSINESS.addressFull}</p>
              <p>🕐 {BUSINESS.hours}</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] p-8 md:p-10 shadow-xl"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="quote-name" className="block text-charcoal font-body text-sm font-medium mb-1">Full Name *</label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className="block text-charcoal font-body text-sm font-medium mb-1">Phone / WhatsApp *</label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                  placeholder="+91"
                />
              </div>
              <div>
                <label htmlFor="quote-product" className="block text-charcoal font-body text-sm font-medium mb-1">Product Type</label>
                <select
                  id="quote-product"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                >
                  <option value="">Select</option>
                  {QUOTE_PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quote-quantity" className="block text-charcoal font-body text-sm font-medium mb-1">Quantity</label>
                <select
                  id="quote-quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                >
                  <option value="">Select</option>
                  {QUOTE_QUANTITY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quote-finish" className="block text-charcoal font-body text-sm font-medium mb-1">Paper / Finish</label>
                <select
                  id="quote-finish"
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold"
                >
                  <option value="">Select</option>
                  {QUOTE_FINISH_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="quote-notes" className="block text-charcoal font-body text-sm font-medium mb-1">Additional Notes</label>
                <textarea
                  id="quote-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base font-body focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold resize-y"
                  placeholder="Any specific requirements, dimensions, colours, or design details..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-gold text-white font-body font-medium text-base py-4 rounded-lg hover:bg-gold-light transition-colors"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              Send My Quote Request →
            </button>
            <p className="mt-4 text-gray-text text-[13px] font-body">
              🔒 We never share your details. Quotes via WhatsApp only.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteFormSection;
