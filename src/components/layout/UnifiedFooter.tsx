import { BUSINESS } from "@/data/business";
import { scrollToSection } from "@/utils/scroll";
import SuperPrintersLogo from "@/components/SuperPrintersLogo";

const QUICK_LINKS = [
  { label: "Home", id: "" },
  { label: "Products", id: "products" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Wedding Cards", id: "wedding-cards" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Paper & Finishes", id: "finishes" },
  { label: "Get a Quote", id: "quote-form" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const PRODUCT_LINKS = [
  "Visiting Cards",
  "Letterheads",
  "Brochures",
  "Bill Books",
  "Catalogues",
  "Envelopes",
  "Posters & Flyers",
  "Wedding Cards",
  "Screen Printing",
];

const UnifiedFooter = () => (
  <footer
    className="relative pt-16 pb-6 px-6 font-ui text-sm"
    style={{ backgroundColor: "var(--navy)" }}
  >
    <div
      className="absolute top-0 left-0 right-0 h-[2px]"
      style={{ background: "linear-gradient(90deg, transparent 0%, #D4A843 30%, #F0C660 50%, #D4A843 70%, transparent 100%)" }}
      aria-hidden
    />
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div className="flex items-center gap-4 mb-3">
          <SuperPrintersLogo variant="footer" size="lg" />
          <div>
            <span className="font-display font-semibold text-2xl text-white block">Super Printers</span>
            <span className="font-ui text-[13px] font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
              Est. 1990, Pallavaram, Chennai
            </span>
          </div>
        </div>
        <p className="text-white/60 text-sm mb-2">Chennai&apos;s Premier Printing Studio Since 1990</p>
        <div className="font-display italic text-base mb-4" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Playfair Display', serif", marginTop: "8px" }}>
          Quality printing since 1990.
        </div>
        <div className="flex gap-3 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-ink-black transition-colors" style={{ color: "var(--gold)" }} aria-label="Facebook">f</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-ink-black transition-colors" style={{ color: "var(--gold)" }} aria-label="Instagram">i</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gold hover:bg-gold hover:text-ink-black transition-colors" style={{ color: "var(--gold)" }} aria-label="YouTube">y</a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-whatsapp hover:text-white transition-colors" aria-label="WhatsApp">💬</a>
        </div>
        <a href={BUSINESS.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 text-xs hover:text-gold transition-colors">
          ⭐ 4.8 on Google Reviews
        </a>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
        <div className="space-y-2">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id || "home"}
              onClick={() => (link.id ? scrollToSection(link.id) : window.scrollTo({ top: 0, behavior: "smooth" }))}
              className="block text-left font-light text-[14px] transition-colors hover:text-gold"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Products</h4>
        <div className="space-y-2">
          {PRODUCT_LINKS.map((name) => (
            <button
              key={name}
              onClick={() => scrollToSection(name === "Wedding Cards" ? "wedding-cards" : "products")}
              className="block text-left font-light text-[14px] transition-colors hover:text-gold"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
        <div className="space-y-3 text-white/60 text-sm">
          <p>No. 6, Saraswathy Colony<br />Pallavaram, Chennai – 600043</p>
          <a href={BUSINESS.phoneTel} className="block hover:text-gold transition-colors">📞 +91 98401 99878</a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">💬 WhatsApp</a>
          <a href={`mailto:${BUSINESS.email}`} className="block hover:text-gold transition-colors">📧 {BUSINESS.email}</a>
        </div>
        <div className="mt-4">
          <p className="text-white/70 text-xs mb-2">Opening hours</p>
          <div className="flex flex-wrap gap-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <span key={d} className="px-2 py-1 rounded text-[10px] font-medium" style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}>{d}</span>
            ))}
            <span className="px-2 py-1 rounded text-[10px] text-white/50 bg-white/10">Sun</span>
          </div>
          <p className="text-white/50 text-xs mt-1">Mon–Sat: 9AM – 7PM · Sun: Closed</p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
      <p className="text-white/50 text-xs">© 2025 Super Printers</p>
      <p className="font-display italic text-white/60 text-sm">Quality printing since 1990</p>
      <p className="text-white/50 text-xs">Made in Pallavaram ♥</p>
    </div>
  </footer>
);

export default UnifiedFooter;
