import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

const PartnerSection = () => (
  <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#1a1a2e" }}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
        Are You a DTP Operator or Print Reseller?
      </h2>
      <p className="text-white/90 text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
        35 years of factory-direct printing. Partner pricing with up to 25% discount. GST invoice. 24-hour turnaround. Dedicated WhatsApp account manager.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/get-quote?type=partner"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-white transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: "var(--color-cta)", fontFamily: "var(--font-accent)" }}
        >
          Apply for Partner Status →
        </Link>
        <a
          href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'm a DTP operator. Please send me the partner price list.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold border-2 border-white/50 text-white hover:bg-white/10 transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Get Partner Price List
        </a>
      </div>
    </div>
  </section>
);

export default PartnerSection;
