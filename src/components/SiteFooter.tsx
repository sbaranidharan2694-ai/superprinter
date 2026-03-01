import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

// TODO: Update social media URLs with actual profile links before publishing
const SiteFooter = () => {
  return (
    <footer className="bg-footer-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1: Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="Super Printers" className="h-8 w-auto brightness-200" width="128" height="32" />
            </Link>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed mb-2">
              {BUSINESS.tagline}
            </p>
            <p className="text-primary-foreground/60 text-sm font-body leading-relaxed mb-4">
              Serving Chennai since 1990 with high-quality, affordable printing solutions for businesses and families.
            </p>
            <div className="flex gap-3 text-xl">
              <a href="https://www.facebook.com/superprinterpallavaram" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:scale-110 transition-transform">📘</a>
              <a href="https://www.instagram.com/superprinters_pallavaram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transition-transform">📸</a>
              <a href="https://www.youtube.com/@superprinters" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:scale-110 transition-transform">▶️</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:scale-110 transition-transform">💬</a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4 text-gold-light">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "All Printing Services", to: "/services" },
                { label: "Our Portfolio", to: "/gallery" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-primary-foreground/60 hover:text-gold-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4 text-gold-light">Our Services</h4>
            <ul className="space-y-2 text-sm font-body">
              {[
                { label: "Offset Printing in Chennai", to: "/services/offset-printing" },
                { label: "Visiting Card Printing", to: "/services/visiting-cards" },
                { label: "Wedding Invitations", to: "/services/wedding-invitations" },
                { label: "Banner Printing Chennai", to: "/services/banner-printing" },
                { label: "Brochure Printing", to: "/services/brochure-printing" },
                { label: "Bill Book Printing", to: "/services/bill-books" },
                { label: "T-Shirt Printing Chennai", to: "/services/t-shirt-printing" },
                { label: "Rubber Stamps", to: "/services/rubber-stamps" },
                { label: "Pamphlet Printing", to: "/services/pamphlet-printing" },
                { label: "Screen Printing", to: "/services/screen-printing" },
                { label: "PVC ID Cards", to: "/services/id-cards" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-primary-foreground/60 hover:text-gold-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display text-sm font-bold mb-4 text-gold-light">Contact Us</h4>
            <div className="space-y-3 text-sm font-body text-primary-foreground/60">
              <p>📍 {BUSINESS.address}, {BUSINESS.city}, Chennai {BUSINESS.postalCode}</p>
              <p><a href={BUSINESS.phoneTel} className="hover:text-gold-light transition-colors">📞 {BUSINESS.phone}</a></p>
              <p><a href={`mailto:${BUSINESS.email}`} className="hover:text-gold-light transition-colors">✉️ {BUSINESS.email}</a></p>
              <p>🕐 {BUSINESS.hours}</p>
            </div>
            <a
              href={`${BUSINESS.whatsappQuote}Hi%20Super%20Printers!`}
              target="_blank"
              rel="noopener noreferrer"
              className="wa-button mt-4 inline-block px-5 py-2 rounded-lg text-xs font-semibold"
              aria-label="WhatsApp Super Printers"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-body text-primary-foreground/40">
          <span>© 2026 Super Printers. All Rights Reserved.</span>
          <span>🏆 Trusted Since 1990</span>
          <span>📍 Pallavaram, Chennai</span>
          <span>⭐ 1000+ Happy Customers</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
