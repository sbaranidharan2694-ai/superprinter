import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

const SERVICES_LINKS = [
  { label: "Wedding Cards", to: "/wedding-cards" },
  { label: "Visiting Cards", to: "/visiting-cards" },
  { label: "Brochures", to: "/brochures" },
  { label: "Bill Books", to: "/bill-books" },
  { label: "Letterheads", to: "/letterheads" },
  { label: "All Services", to: "/services" },
  { label: "Get a Quote", to: "/get-quote" },
  { label: "Gallery", to: "/gallery" },
];

const UnifiedFooter = () => (
  <footer style={{ backgroundColor: "var(--color-dark-section)" }} className="text-white/80">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display font-bold text-xl text-white mb-3">{BUSINESS.name}</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Pallavaram's most trusted printing press since 1990.
          </p>
          <p className="text-xs mb-2" style={{ color: "var(--gold)" }}>✅ GST Registered · {BUSINESS.gstNumber}</p>
          <p className="text-xs" style={{ color: "var(--gold)" }}>⭐ {BUSINESS.googleRating} Google Rating · {BUSINESS.googleReviewCount} Reviews</p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>Services</h4>
          <div className="space-y-2">
            {SERVICES_LINKS.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="block text-sm hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>Contact</h4>
          <div className="space-y-3 text-sm" style={{ fontFamily: "var(--font-body)" }}>
            <p>📍 {BUSINESS.addressFull}</p>
            <a href={BUSINESS.phoneTel} className="block hover:text-white transition-colors">
              📞 {BUSINESS.phone}
            </a>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need a quote")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition-colors"
            >
              💬 WhatsApp: {BUSINESS.phone}
            </a>
            <p>⏰ {BUSINESS.hours}</p>
            <p>⏰ {BUSINESS.hoursSunday}</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>Get a Quote</h4>
          <p className="text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Send us your requirements on WhatsApp and receive a quote in 30 minutes.
          </p>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need a quote for ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "var(--color-cta)", fontFamily: "var(--font-accent)" }}
          >
            💬 WhatsApp Now
          </a>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 py-5">
      <p
        className="text-center text-xs"
        style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
      >
        © 2026 {BUSINESS.name}, Pallavaram, Chennai. Best Printing Press in Chennai Since 1990.
      </p>
    </div>
  </footer>
);

export default UnifiedFooter;
