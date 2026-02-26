const WA_BASE = "https://wa.me/919840199878?text=";

const TopBar = () =>
<div className="navy-gradient text-primary-foreground text-xs sm:text-sm py-2 px-4">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body">
      <a href="tel:+919840199878" className="hover:text-gold-light transition-colors" aria-label="Call Super Printers">
        📞 +91 9840199878
      </a>
      <span className="hidden sm:inline">|</span>
      <a className="hidden sm:inline hover:text-gold-light transition-colors" href="mailto:Superprntrs@yahoo.com">
        ✉️ Superprntrs@yahoo.com
      </a>
      <span className="hidden md:inline">|</span>
      <span className="hidden md:inline">🕐 Mon–Sat 9:30 AM–6:30 PM</span>
      <span className="hidden lg:inline">|</span>
      <span className="hidden lg:inline">📍 Pallavaram, Chennai 600043</span>
    </div>
  </div>;


export default TopBar;