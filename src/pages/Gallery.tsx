import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { useInView } from "@/hooks/useInView";

const galleryItems = [
  { emoji: "📇", label: "Business Cards", desc: "Premium visiting card samples", wa: "Hi, I need visiting card printing" },
  { emoji: "💌", label: "Wedding Invitations", desc: "Traditional & modern designs", wa: "Hi, I need wedding invitation printing" },
  { emoji: "📖", label: "Brochures", desc: "Marketing collateral samples", wa: "Hi, I need brochure printing" },
  { emoji: "🧾", label: "Bill Books", desc: "GST-compliant NCR books", wa: "Hi, I need bill book printing" },
  { emoji: "📄", label: "Letterheads", desc: "Corporate stationery", wa: "Hi, I need letterhead printing" },
  { emoji: "🏗️", label: "Banners", desc: "Flex & vinyl banners", wa: "Hi, I need banner printing" },
  { emoji: "👕", label: "T-Shirts", desc: "Custom printed apparel", wa: "Hi, I need T-shirt printing" },
  { emoji: "🔏", label: "Rubber Stamps", desc: "Self-inking & wooden stamps", wa: "Hi, I need rubber stamp" },
  { emoji: "🏷️", label: "Stickers & Labels", desc: "Product labels & die-cuts", wa: "Hi, I need sticker printing" },
  { emoji: "📋", label: "Catalogues", desc: "Product & menu booklets", wa: "Hi, I need catalogue printing" },
  { emoji: "⚙️", label: "Offset Printing", desc: "Bulk commercial prints", wa: "Hi, I need offset printing" },
  { emoji: "🎨", label: "Screen Printing", desc: "Bags, banners & merchandise", wa: "Hi, I need screen printing" },
];

const corporateClients = [
  { name: "Wipro Limited", monogram: "W", desc: "Corporate stationery, ID cards & branded materials", bg: "bg-navy" },
  { name: "Reliance Smart Bazaar", monogram: "R", desc: "Retail signage, banners & promotional prints", bg: "bg-navy" },
  { name: "Fujitec", monogram: "F", desc: "Technical manuals, letterheads & visiting cards", bg: "bg-navy" },
  { name: "NK Grand Palace", monogram: "NK", desc: "Event invitations, menus & wedding stationery", bg: "bg-navy" },
];

const serviceLinks = [
  { emoji: "📇", name: "Visiting Cards", slug: "visiting-cards" },
  { emoji: "💌", name: "Wedding Invitations", slug: "wedding-invitations" },
  { emoji: "📖", name: "Brochures", slug: "brochure-printing" },
  { emoji: "🏗️", name: "Banners", slug: "banner-printing" },
  { emoji: "🧾", name: "Bill Books", slug: "bill-books" },
  { emoji: "👕", name: "T-Shirts", slug: "t-shirt-printing" },
];

const Gallery = () => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <SEOHead
        title="Printing Portfolio Chennai | Our Work | Super Printers Pallavaram"
        description="Browse Super Printers' printing portfolio — visiting cards, wedding invitations, brochures, banners and more. Serving Chennai since 1990."
        canonical="/gallery"
        keywords="printing portfolio chennai, printing samples pallavaram, super printers work"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />
      <main>
        <section ref={ref} className={`py-16 md:py-24 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Printing Portfolio — Super Printers Chennai</h1>
            <p className="text-muted-foreground font-body mb-6">A showcase of our printing excellence across Chennai.</p>

            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Browse Our Work by Category</h2>

            {/* Info box */}
            <div className="bg-muted/50 border border-border rounded-xl p-4 mb-10 text-left">
              <h2 className="font-display text-lg font-bold text-foreground mb-1">Upload Your Own Photos</h2>
              <p className="text-muted-foreground text-sm font-body">
                These are placeholder layouts. To add your real portfolio photos, replace the image slots in the code with your actual JPG/PNG files.
              </p>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div key={item.label} className="aspect-square rounded-xl navy-gradient flex items-center justify-center text-center p-6">
                  <div>
                    <div className="text-5xl mb-3" aria-hidden="true">{item.emoji}</div>
                    <h3 className="text-primary-foreground/90 text-sm font-display font-bold mb-1">{item.label}</h3>
                    <p className="text-primary-foreground/50 text-xs font-body mb-2">{item.desc}</p>
                    <p className="text-primary-foreground/30 text-[11px] font-body mb-3">Sample photos available on request — WhatsApp us</p>
                    <a
                      href={`https://wa.me/919840199878?text=${encodeURIComponent(item.wa)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-button inline-block px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                    >
                      Get Quote →
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Corporate clients work */}
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Work Done for Our Corporate Clients</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {corporateClients.map((c) => (
                  <div key={c.name} className="p-6 rounded-xl navy-gradient text-left flex items-start gap-4">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-gold/20 flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-gold-light">{c.monogram}</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-primary-foreground mb-1">{c.name}</h3>
                      <p className="text-primary-foreground/60 text-sm font-body mb-3">{c.desc}</p>
                      <a
                        href={`https://wa.me/919840199878?text=${encodeURIComponent(`Hi, I need similar printing work as done for ${c.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wa-button inline-block px-3 py-1.5 rounded-lg text-[11px] font-semibold"
                      >
                        Get Similar Work →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service links */}
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Ready to Order? Explore Our Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {serviceLinks.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="p-4 rounded-xl bg-card border border-border card-lift text-center">
                    <span className="text-2xl block mb-2" aria-hidden="true">{s.emoji}</span>
                    <span className="font-body font-semibold text-xs text-card-foreground">{s.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
