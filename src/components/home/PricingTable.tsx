import { pricingData } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const WA_BASE = "https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%27d%20like%20a%20quote%20for%20";

const PricingTable = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-3xl block mb-2">💰</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Starting Prices — Transparent. No Hidden Charges.
          </h2>
          <p className="text-muted-foreground font-body">Bulk discounts available. Contact us for exact quotes.</p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-border">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="navy-gradient text-primary-foreground">
                <th className="text-left px-6 py-4 font-semibold">Service</th>
                <th className="text-left px-6 py-4 font-semibold">Starting From</th>
                <th className="text-left px-6 py-4 font-semibold">Turnaround</th>
                <th className="text-center px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, i) => (
                <tr key={i} className="border-t border-border hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-card-foreground">{item.emoji} {item.service}</td>
                  <td className="px-6 py-4 font-bold text-secondary">{item.price}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.turnaround}</td>
                  <td className="px-6 py-4 text-center">
                    <a
                      href={`${WA_BASE}${encodeURIComponent(item.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-button inline-block px-4 py-2 rounded-lg text-xs font-semibold"
                    >
                      Get Quote
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {pricingData.map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-card border border-border flex items-center justify-between gap-3">
              <div>
                <div className="font-medium text-sm text-card-foreground">{item.emoji} {item.service}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{item.turnaround}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="font-bold text-secondary text-sm">{item.price}</div>
                <a href={`${WA_BASE}${encodeURIComponent(item.waMsg)}`} target="_blank" rel="noopener noreferrer" className="wa-button inline-block mt-1 px-3 py-1 rounded text-[11px] font-semibold">
                  Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 font-body">
          * Prices vary based on paper, finish, quantity & design. Contact us for exact quote.
        </p>
      </div>
    </section>
  );
};

export default PricingTable;
