import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utils/scroll";
import { BUSINESS } from "@/data/business";
import {
  CALC_PRODUCTS,
  CALC_FINISHES,
  getDeliveryDays,
  calculatePrice,
  type ProductKey,
} from "@/data/calculator";

const SLIDER_SNAPS = [50, 100, 250, 500, 1000, 2500, 5000, 10000];
const DEFAULT_QUANTITY = 500;

const productLabels: Record<ProductKey, string> = {
  visitingCards: "Visiting Cards",
  brochures: "Brochures",
  letterheads: "Letterheads",
  billBooks: "Bill Books",
  envelopes: "Envelopes",
  weddingCards: "Wedding Cards",
  posters: "Posters",
};

interface PriceCalculatorSectionProps {
  showSectionTitle?: boolean;
  defaultProduct?: ProductKey;
}

const PriceCalculatorSection = ({ showSectionTitle = true, defaultProduct = "visitingCards" }: PriceCalculatorSectionProps) => {
  const initialFinish = CALC_FINISHES[defaultProduct]?.[0]?.id ?? "gloss";
  const [product, setProduct] = useState<ProductKey>(defaultProduct);
  const [finish, setFinish] = useState<string>(initialFinish);
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);

  const finishes = CALC_FINISHES[product];
  const firstFinishId = finishes?.[0]?.id ?? "";
  const effectiveFinish = finish && finishes?.some((f) => f.id === finish) ? finish : firstFinishId;

  const quantityMin = product === "billBooks" ? 25 : 50;
  const quantityMax = product === "billBooks" ? 500 : 10000;
  const quantityStep = product === "billBooks" ? 25 : 50;
  const clampedQty = Math.min(quantityMax, Math.max(quantityMin, quantity));

  const result = useMemo(
    () => calculatePrice(product, effectiveFinish, clampedQty),
    [product, effectiveFinish, clampedQty]
  );

  const delivery = getDeliveryDays(product, effectiveFinish);

  const handleProductChange = (p: ProductKey) => {
    setProduct(p);
    const next = CALC_FINISHES[p]?.[0]?.id ?? "";
    setFinish(next);
    const maxQ = p === "billBooks" ? 500 : 10000;
    const minQ = p === "billBooks" ? 25 : 50;
    setQuantity((prev) => Math.min(maxQ, Math.max(minQ, prev)));
  };

  const whatsappMessage = result
    ? `Hi! I need ${clampedQty} ${productLabels[product]} (${finishes?.find((f) => f.id === effectiveFinish)?.label ?? effectiveFinish}). Your calculator shows ₹${result.total.toLocaleString()}. Please confirm.`
    : "";

  return (
    <section
      id="price-calculator"
      className={showSectionTitle ? "py-20 md:py-24 scroll-mt-[108px]" : "py-10 scroll-mt-[108px]"}
      style={{ backgroundColor: "var(--bg-cream)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {showSectionTitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
              Instant Price Calculator
            </p>
            <h2 className="font-display font-bold text-ink-black text-3xl md:text-4xl mb-2">
              No forms, no waiting. Get your price in seconds.
            </h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-border-light shadow-card p-6 md:p-10 max-w-[800px] mx-auto"
        >
          {/* Row 1: Product */}
          <div className="mb-6">
            <p className="font-ui text-sm font-medium text-ink-black mb-3">Product</p>
            <div className="flex flex-wrap gap-2">
              {CALC_PRODUCTS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleProductChange(p.id)}
                  className={`px-4 py-2.5 rounded-full text-sm font-ui font-medium transition-all duration-300 ${
                    product === p.id
                      ? "bg-gold text-ink-black"
                      : "bg-white border border-navy text-navy hover:border-gold"
                  }`}
                  style={product === p.id ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : { borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Finish */}
          <div className="mb-6">
            <p className="font-ui text-sm font-medium text-ink-black mb-3">Finish</p>
            <div className="flex flex-wrap gap-2">
              {finishes?.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFinish(f.id)}
                  className={`px-3 py-2 rounded-full text-xs font-ui font-medium transition-all ${
                    effectiveFinish === f.id ? "bg-gold text-ink-black" : "bg-white border border-border-light text-gray-700 hover:border-gold"
                  }`}
                  style={effectiveFinish === f.id ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : undefined}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 3: Quantity slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="font-ui text-sm font-medium text-ink-black">Quantity</label>
              <span className="font-display font-semibold text-ink-black text-lg">
                {clampedQty} {product === "billBooks" ? "sets" : "pcs"}
              </span>
            </div>
            <input
              type="range"
              min={quantityMin}
              max={quantityMax}
              step={quantityStep}
              value={clampedQty}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--gold) 0%, var(--gold) ${((clampedQty - quantityMin) / (quantityMax - quantityMin)) * 100}%, var(--border-light) ${((clampedQty - quantityMin) / (quantityMax - quantityMin)) * 100}%, var(--border-light) 100%)`,
              }}
            />
            <div className="flex justify-between mt-1 text-[10px] font-ui text-gray-500">
              {SLIDER_SNAPS.filter((s) => s >= quantityMin && s <= quantityMax).map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          {/* Price display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-border-light mb-6">
            <div>
              <p className="text-[13px] font-ui text-gray-500 mb-1">Estimated Price</p>
              <p className="font-display font-bold text-4xl md:text-5xl" style={{ color: "var(--gold)" }}>
                {result ? `₹${result.total.toLocaleString()}` : "—"}
              </p>
              <p className="text-xs font-ui text-gray-500 mt-1">incl. GST 18%</p>
            </div>
            <div className="flex flex-col justify-center gap-1">
              {result && (
                <>
                  <p className="font-ui text-base font-medium text-navy">Per piece: ₹{result.perPiece.toFixed(2)}</p>
                  <p className="font-ui text-sm text-gray-500">Delivery: {delivery} business days</p>
                  <span className="inline-flex w-fit px-3 py-1 rounded-full text-xs font-ui font-medium text-white bg-green-600 mt-1">
                    GST Invoice available
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <a
              href={result ? `${BUSINESS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 ease-spring hover:scale-[1.02]"
              style={{ backgroundColor: "var(--gold)" }}
            >
              Order via WhatsApp →
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 border-navy text-navy hover:border-gold hover:text-gold transition-all"
              style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}
            >
              Talk to us for bulk pricing
            </button>
          </div>

          <p className="text-xs font-ui text-gray-500 mt-4">Prices are indicative. Final quote via WhatsApp.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PriceCalculatorSection;
