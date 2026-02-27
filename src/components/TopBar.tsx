import { BUSINESS } from "@/data/business";

const TopBar = () => (
  <div className="navy-gradient text-primary-foreground text-xs sm:text-sm py-2 px-4">
    <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-body">
      <a href={BUSINESS.phoneTel} className="hover:text-gold-light transition-colors" aria-label="Call Super Printers">
        📞 {BUSINESS.phone}
      </a>
      <span className="hidden sm:inline">|</span>
      <a className="hidden sm:inline hover:text-gold-light transition-colors" href={`mailto:${BUSINESS.email}`}>
        ✉️ {BUSINESS.email}
      </a>
      <span className="hidden md:inline">|</span>
      <span className="hidden md:inline">🕐 {BUSINESS.hours}</span>
      <span className="hidden lg:inline">|</span>
      <span className="hidden lg:inline">📍 {BUSINESS.city}, Chennai {BUSINESS.postalCode}</span>
    </div>
  </div>
);

export default TopBar;
