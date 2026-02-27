import SEOHead from "@/components/SEOHead";
import { useInView } from "@/hooks/useInView";

const galleryItems = [
  { emoji: "📇", label: "Business Cards", desc: "Premium visiting card samples" },
  { emoji: "💌", label: "Wedding Invitations", desc: "Traditional & modern designs" },
  { emoji: "📖", label: "Brochures", desc: "Marketing collateral samples" },
  { emoji: "🧾", label: "Bill Books", desc: "GST-compliant NCR books" },
  { emoji: "📄", label: "Letterheads", desc: "Corporate stationery" },
  { emoji: "🏗️", label: "Banners", desc: "Flex & vinyl banners" },
  { emoji: "👕", label: "T-Shirts", desc: "Custom printed apparel" },
  { emoji: "🔏", label: "Rubber Stamps", desc: "Self-inking & wooden stamps" },
  { emoji: "🏷️", label: "Stickers & Labels", desc: "Product labels & die-cuts" },
  { emoji: "📋", label: "Catalogues", desc: "Product & menu booklets" },
  { emoji: "⚙️", label: "Offset Printing", desc: "Bulk commercial prints" },
  { emoji: "🎨", label: "Screen Printing", desc: "Bags, banners & merchandise" },
];

const Gallery = () => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <SEOHead
        title="Our Printing Work | Super Printers Chennai Portfolio"
        description="See printing samples from Super Printers Chennai — visiting cards, brochures, banners, invitations and more."
        canonical="/gallery"
        keywords="printing portfolio chennai, printing samples pallavaram, super printers work"
      />
      <main>
        <section ref={ref} className={`py-16 md:py-24 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">Our Printing Portfolio</h1>
            <p className="text-muted-foreground font-body mb-10">A showcase of our printing excellence across Chennai.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div key={item.label} className="aspect-square rounded-xl navy-gradient flex items-center justify-center text-center p-6">
                  <div>
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <div className="text-primary-foreground/80 text-sm font-body font-semibold">{item.label}</div>
                    <p className="text-primary-foreground/50 text-xs font-body mt-1">{item.desc}</p>
                    <p className="text-primary-foreground/30 text-xs font-body mt-2">Photos coming soon</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
