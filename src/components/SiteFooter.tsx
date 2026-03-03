import { Link } from "react-router-dom";
import { IMG } from "@/data/images";

const SiteFooter = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="gradient-bar" />
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1 - Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-gold mb-2">Super Printers</h3>
            <p className="text-white/70 font-body text-sm mb-4">Chennai's printing press since 1990.</p>
            <div className="grid grid-cols-3 gap-1">
              {[IMG.P01, IMG.P02, IMG.P06, IMG.P09, IMG.P13, IMG.P14].map((src, i) => (
                <img key={i} src={src} alt="Print work sample" className="w-full h-[65px] rounded-lg object-cover" loading="lazy" width="90" height="65" />
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4 className="font-body text-[15px] font-bold mb-4">Quick Links</h4>
            {[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: "Gallery", to: "/gallery" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link key={l.label} to={l.to} className="block text-white/70 hover:text-white text-sm py-1 font-body transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4 className="font-body text-[15px] font-bold mb-4">Our Services</h4>
            {[
              "Offset Printing", "Wedding Cards", "Visiting Cards",
              "Digital Printing", "Brochures", "Stationery", "Posters",
            ].map((s) => (
              <span key={s} className="block text-white/70 text-sm py-1 font-body">{s}</span>
            ))}
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4 className="font-body text-[15px] font-bold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-white/70 text-sm font-body">
              <p>Chennai, Tamil Nadu, India</p>
              <p>Call for an instant quote</p>
              <p>Mon-Sat: 9AM - 7PM | Sun: Closed</p>
            </div>
            <img src={IMG.P24} alt="Delivery service" className="w-full h-[120px] rounded-xl object-cover mt-4" loading="lazy" width="300" height="120" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#111111] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <span className="text-white/50 text-[13px] font-body">&copy; 2025 Super Printers, Chennai. All Rights Reserved.</span>
          <div className="flex gap-2">
            {[IMG.P01, IMG.P06, IMG.P09, IMG.P13].map((src, i) => (
              <img key={i} src={src} alt="Print sample" className="w-10 h-10 rounded-full object-cover border border-white/20" loading="lazy" width="40" height="40" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;