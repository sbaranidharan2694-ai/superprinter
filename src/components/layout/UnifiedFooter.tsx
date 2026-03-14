import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

const UnifiedFooter = () => (
  <footer className="bg-[hsl(220,26%,10%)] pt-16 pb-8 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <span className="font-display font-bold text-base text-secondary-foreground">SP</span>
          </div>
          <div>
            <div className="font-display text-foreground font-bold">Super Printers</div>
            <div className="font-tamil text-muted-foreground text-[10px]">சுப்பர் பிரிண்டர்ஸ்</div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">Chennai's finest printing press since 1990. Premium quality, fast delivery.</p>
      </div>

      <div>
        <h4 className="text-foreground font-semibold text-sm mb-4">Quick Links</h4>
        {[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: "Services", to: "/services" },
          { label: "Gallery", to: "/gallery" },
          { label: "About Us", to: "/about" },
          { label: "Contact", to: "/contact" },
        ].map((l) => (
          <Link key={l.label} to={l.to} className="block text-muted-foreground text-sm py-1.5 hover:text-foreground transition-colors">
            {l.label}
          </Link>
        ))}
      </div>

      <div>
        <h4 className="text-foreground font-semibold text-sm mb-4">Our Products</h4>
        {[
          { label: "Visiting Cards", to: "/visiting-cards" },
          { label: "Wedding Invitations", to: "/wedding-cards" },
          { label: "Brochures", to: "/services" },
          { label: "Bill Books", to: "/services" },
          { label: "Letterheads", to: "/services" },
          { label: "Banners", to: "/services" },
          { label: "T-Shirts", to: "/services" },
        ].map((l) => (
          <Link key={l.label} to={l.to} className="block text-muted-foreground text-sm py-1.5 hover:text-foreground transition-colors">
            {l.label}
          </Link>
        ))}
      </div>

      <div>
        <h4 className="text-foreground font-semibold text-sm mb-4">Get in Touch</h4>
        <div className="space-y-1.5 text-muted-foreground text-sm">
          <p>{BUSINESS.address}</p>
          <p>{BUSINESS.city}, Chennai – {BUSINESS.postalCode}</p>
          <a href={BUSINESS.phoneTel} className="block hover:text-foreground transition-colors">{BUSINESS.phone}</a>
          <a href={`mailto:${BUSINESS.email}`} className="block hover:text-foreground transition-colors">{BUSINESS.email}</a>
          <p>{BUSINESS.hours}</p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground/50 text-xs">© {new Date().getFullYear()} Super Printers. All Rights Reserved.</p>
      <div className="flex items-center gap-4">
        <a href={BUSINESS.whatsapp} className="text-muted-foreground/50 hover:text-foreground transition-colors text-xs">WhatsApp</a>
        <a href={BUSINESS.phoneTel} className="text-muted-foreground/50 hover:text-foreground transition-colors text-xs">Call Us</a>
        <a href={`mailto:${BUSINESS.email}`} className="text-muted-foreground/50 hover:text-foreground transition-colors text-xs">Email</a>
      </div>
    </div>
  </footer>
);

export default UnifiedFooter;
