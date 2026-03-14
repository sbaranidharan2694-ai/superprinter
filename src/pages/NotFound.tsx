import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-6">
    <div className="text-center max-w-md">
      <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <span className="font-display font-bold text-3xl text-primary">SP</span>
      </div>
      <h1 className="font-display font-black text-5xl text-foreground mb-4">404</h1>
      <p className="text-muted-foreground text-lg mb-8">The page you're looking for doesn't exist or has been moved.</p>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: "Services", to: "/services" },
          { label: "Contact", to: "/contact" },
        ].map(link => (
          <Link key={link.to} to={link.to} className="bg-card border border-border rounded-xl p-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-accent transition-all">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex gap-3 justify-center flex-wrap">
        <Link to="/" className="bg-primary text-primary-foreground font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
          Go Home
        </Link>
        <a href={BUSINESS.whatsapp} className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
);

export default NotFound;
