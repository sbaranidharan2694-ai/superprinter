import { BUSINESS } from "@/data/business";

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const QUICK_LINKS = [
  { label: "Home", id: "" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Wedding Cards", id: "wedding-cards" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
  { label: "Get a Quote", id: "quote-form" },
];

const SERVICE_LINKS = [
  "Business Cards",
  "Letterheads",
  "Brochures",
  "Bill Books",
  "Booklets",
  "Catalogues",
  "Envelopes",
  "Screen Printing",
  "Wedding Cards",
];

const UnifiedFooter = () => (
  <footer
    className="bg-navy-dark pt-16 pb-8 px-6 text-white/70 font-body text-sm"
    style={{ backgroundColor: "var(--color-navy-dark)" }}
  >
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div className="font-display font-bold text-2xl text-white mb-1">Super Printers</div>
        <p className="text-white/60 text-sm mb-4">Quality Printing Since 1990</p>
        <div className="flex gap-3 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="Facebook">
            f
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="Instagram">
            i
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors" aria-label="YouTube">
            y
          </a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors" aria-label="WhatsApp">
            💬
          </a>
        </div>
        <p className="text-white/60 text-xs">⭐ 4.8 on Google Reviews</p>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
        <div className="space-y-2">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.id || "home"}
              onClick={() => (link.id ? scrollToSection(link.id) : window.scrollTo({ top: 0, behavior: "smooth" }))}
              className="block text-left text-white/60 hover:text-gold transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Our Services</h4>
        <div className="space-y-2">
          {SERVICE_LINKS.map((name) => (
            <button
              key={name}
              onClick={() => scrollToSection(name === "Wedding Cards" ? "wedding-cards" : "services")}
              className="block text-left text-white/60 hover:text-gold transition-colors text-sm"
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Reach Us</h4>
        <div className="space-y-2 text-white/60">
          <p>No. 6, Saraswathy Colony<br />Pallavaram, Chennai – 600043</p>
          <a href={BUSINESS.phoneTel} className="block hover:text-gold transition-colors">📞 +91 98401 99878</a>
          <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">💬 WhatsApp: +91 98401 99878</a>
          <a href={`mailto:${BUSINESS.email}`} className="block hover:text-gold transition-colors">📧 {BUSINESS.email}</a>
          <p>🕐 {BUSINESS.hoursShort}</p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-white/50 text-xs">© 2025 Super Printers. All rights reserved.</p>
      <p className="text-white/50 text-xs">Serving Pallavaram & Chennai since 1990</p>
    </div>
  </footer>
);

export default UnifiedFooter;
