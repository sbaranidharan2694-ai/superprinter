import { useInView } from "@/hooks/useInView";
import { BUSINESS } from "@/data/business";

const Hero = () => {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section ref={ref} className="relative navy-gradient-hero dot-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 mb-6">
              <span className="text-sm">🏆</span>
              <span className="text-xs font-semibold text-gold-light font-body">Trusted Since 1990 · Pallavaram, Chennai</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground leading-tight mb-6">
              Best <span className="gold-text">Printing Press</span> in Chennai | Super Printers Since 1989
            </h1>

            <p className="text-primary-foreground/80 text-base md:text-lg font-body mb-4 max-w-2xl">
              Visiting Cards • Wedding Invitations • Banners • Brochures • Bill Books • T-Shirts • Rubber Stamps • Commercial Printing
            </p>
            <p className="text-primary-foreground/60 text-sm md:text-base font-body mb-8 max-w-xl">
              {BUSINESS.years} years of excellence. Serving individuals, businesses and families across Chennai with high-quality, affordable printing.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <a href={BUSINESS.whatsappQuote} target="_blank" rel="noopener noreferrer" className="wa-button px-8 py-4 rounded-xl text-base font-bold flex items-center gap-2 shadow-lg" aria-label="Get instant quote on WhatsApp">
                💬 Get Instant Quote on WhatsApp →
              </a>
              <a href={BUSINESS.phoneTel} className="px-8 py-4 rounded-xl text-base font-semibold border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors flex items-center gap-2" aria-label="Call Super Printers">
                📞 Call Now: {BUSINESS.phone}
              </a>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
              { num: BUSINESS.years, label: "Years of Excellence" },
              { num: "1000+", label: "Happy Customers" },
              { num: "14+", label: "Services" },
              { num: "Est.", label: BUSINESS.founded }].
              map((stat) =>
              <div key={stat.label} className="text-center px-3 py-2 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                  <div className="text-gold-light font-display text-xl font-bold">{stat.num}</div>
                  <div className="text-primary-foreground/60 text-xs font-body">{stat.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Floating side card */}
          <div className={`animate-float hidden lg:block transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="w-72 p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 shadow-2xl">
              <div className="text-4xl mb-3">💌</div>
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Wedding Invitations</h3>
              <p className="text-primary-foreground/70 text-sm font-body mb-4">Starting ₹1,999 for 100 cards</p>
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need wedding invitations. Date: Quantity: ")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button w-full py-2.5 rounded-lg text-sm flex items-center justify-center gap-2">

                Get Quote →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;