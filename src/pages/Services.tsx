import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { services, type ServiceData } from "@/data/services";
import { SERVICE_IMAGES } from "@/data/images";

type FilterCat = "All" | "Corporate" | "Personal" | "Events";

const SERVICE_CATEGORIES: Record<string, FilterCat[]> = {
  "offset-printing": ["Corporate"],
  "visiting-cards": ["Corporate", "Personal"],
  "banner-printing": ["Events", "Corporate"],
  "brochure-printing": ["Corporate"],
  "bill-books": ["Corporate"],
  "wedding-invitations": ["Personal", "Events"],
  "t-shirt-printing": ["Events", "Personal"],
  "rubber-stamps": ["Corporate"],
  "stickers-labels": ["Corporate", "Personal"],
  "letterheads": ["Corporate"],
  "catalogues": ["Corporate"],
  "pamphlet-printing": ["Corporate", "Events"],
  "screen-printing": ["Events", "Corporate"],
  "id-cards": ["Corporate"],
};

const FILTERS: FilterCat[] = ["All", "Corporate", "Personal", "Events"];

const Services = () => {
  const [active, setActive] = useState<FilterCat>("All");

  const filtered = active === "All"
    ? services
    : services.filter(s => SERVICE_CATEGORIES[s.slug]?.includes(active));

  return (
    <>
      <SEOHead
        title="Printing Services in Chennai | Super Printers Pallavaram"
        description="Offset printing, visiting cards, banners, brochures, letterheads, bill books, rubber stamps, T-shirt printing and more in Chennai."
        canonical="/services"
      />
      <PageHero title="Printing Services" subtitle={`${services.length}+ professional printing services for businesses, events, and personal needs.`} breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }]} />

      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`text-xs font-semibold px-5 py-2.5 rounded-full transition-all ${active === f ? "bg-primary text-primary-foreground" : "bg-accent text-muted-foreground hover:bg-border"}`}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <Link key={s.id} to={`/services/${s.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={SERVICE_IMAGES[s.slug] || ""} alt={s.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  {s.isNew && <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full">NEW</span>}
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">{s.name}</h2>
                  <p className="text-muted-foreground text-sm mb-3">{s.shortDesc}</p>
                  <p className="text-secondary font-semibold text-sm mb-2">{s.shortDesc}</p>
                  <span className="text-primary text-sm font-semibold group-hover:underline">View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
