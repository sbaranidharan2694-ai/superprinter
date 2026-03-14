import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { IMG } from "@/data/images";

const PRODUCT_CATEGORIES = [
  { name: "Visiting Cards", desc: "Gloss, Matt, Spot UV, Velvet, Gold Foil — from ₹299/100 pcs", img: IMG.glossCard, to: "/visiting-cards", badge: "Best Seller" },
  { name: "Wedding Invitations", desc: "Traditional to modern styles on 300 GSM art board", img: IMG.weddingInvite1, to: "/wedding-cards", badge: "Popular" },
  { name: "Brochures & Flyers", desc: "Tri-fold, Bi-fold, Z-fold — from ₹1,500/500 pcs", img: IMG.brochures, to: "/services" },
  { name: "Bill Books (NCR)", desc: "GST-compliant duplicate/triplicate — from ₹699/5 books", img: IMG.P11, to: "/services" },
  { name: "Banners & Standees", desc: "Flex, vinyl, roll-up — from ₹15/sq ft", img: IMG.P05, to: "/services" },
  { name: "Letterheads", desc: "80 GSM / 100 GSM bond paper — from ₹499/100 sheets", img: IMG.letterhead, to: "/services" },
  { name: "T-Shirt Printing", desc: "Screen print & heat transfer — from ₹199/piece", img: IMG.P16, to: "/services" },
  { name: "Stickers & Labels", desc: "Paper, vinyl, die-cut — from ₹499/500 pcs", img: IMG.stickerSheets, to: "/services" },
  { name: "Rubber Stamps", desc: "Self-inking, wooden — from ₹199", img: IMG.P19, to: "/services" },
  { name: "Catalogues & Menus", desc: "Saddle-stitched, perfect bound — from ₹2,499", img: IMG.P12, to: "/services" },
  { name: "PVC ID Cards", desc: "Laminated & PVC — from ₹25/card", img: IMG.P13, to: "/services" },
  { name: "Envelopes", desc: "80 – 170 GSM in all sizes", img: IMG.envelopes, to: "/services" },
];

const Products = () => (
  <>
    <SEOHead
      title="Printing Products | Super Printers Chennai"
      description="Browse our complete range of printing products — visiting cards, wedding invitations, brochures, banners, bill books and more from Super Printers Chennai."
      canonical="/products"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }]}
    />
    <PageHero
      title="Our Printing Products"
      subtitle="Browse our complete catalogue of premium printing products. Order online, get delivered across Tamil Nadu."
      image={IMG.pressWide}
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }]}
    />
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCT_CATEGORIES.map((cat, i) => (
          <Link key={i} to={cat.to} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all">
            <div className="relative h-48 overflow-hidden">
              <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              {cat.badge && <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full">{cat.badge}</span>}
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{cat.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{cat.desc}</p>
              <span className="text-primary text-sm font-semibold group-hover:underline">View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  </>
);

export default Products;
