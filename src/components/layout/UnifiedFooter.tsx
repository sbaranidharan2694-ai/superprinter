import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { trackWhatsAppClick, trackPhoneClick } from "@/utils/analytics";

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

const AREAS_LINKS = [
  { label: "Tambaram", to: "/tambaram-printing" },
  { label: "Chromepet", to: "/chromepet-printing" },
  { label: "Pammal", to: "/pammal-printing" },
  { label: "Perungalathur", to: "/perungalathur-printing" },
];

const UnifiedFooter = () => (
  <footer style={{ backgroundColor: "var(--color-dark-section)" }} className="text-white/80">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="font-display font-bold text-xl text-white mb-3">{BUSINESS.shortName}</h3>
          <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
            Chennai's trusted printing press since 1990. 35+ years of quality.
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

        {/* Areas Served */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>Areas Served</h4>
          <p className="text-sm text-white/90 mb-3" style={{ fontFamily: "var(--font-body)" }}>Throughout Chennai and Tamil Nadu</p>
          <div className="space-y-2">
            {AREAS_LINKS.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="block text-sm hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4" style={{ fontFamily: "var(--font-body)" }}>Contact</h4>
          <ul className="space-y-3 text-sm list-none p-0 m-0" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)" }}>
            <li>
              <a href={BUSINESS.phoneTel} onClick={() => trackPhoneClick("footer")} className="flex items-center gap-2 hover:text-white transition-colors">
                <span className="text-white/70" aria-hidden>📞</span>
                <span>{BUSINESS.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-white transition-colors break-all">
                <span className="text-white/70 shrink-0" aria-hidden>📧</span>
                <span>{BUSINESS.email}</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-white/70 shrink-0" aria-hidden>📍</span>
              <address className="not-italic leading-relaxed">
                {BUSINESS.addressFull}
              </address>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-white/70" aria-hidden>🕐</span>
              <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need a quote for ")}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("footer_cta")}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white mt-5 transition-transform hover:scale-[1.02] w-full sm:w-auto"
            style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
            aria-label="Chat on WhatsApp"
          >
            <span aria-hidden>💬</span>
            WhatsApp Now
          </a>
        </div>
      </div>

      {/* Area-served blurb */}
      <p className="mt-10 pt-8 border-t border-white/10 text-sm text-white/70 max-w-3xl" style={{ fontFamily: "var(--font-body)" }}>
        Serving throughout Chennai and Tamil Nadu. Walk-in welcome. Near Pallavaram Railway Station.
      </p>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
        <span>© 2026 {BUSINESS.shortName}. GST: {BUSINESS.gstNumber} | All rights reserved.</span>
        <span className="flex gap-4">
          <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Sitemap</a>
        </span>
      </div>
    </div>
  </footer>
);

export default UnifiedFooter;
