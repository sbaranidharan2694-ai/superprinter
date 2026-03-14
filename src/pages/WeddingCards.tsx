import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { IMG } from "@/data/images";
import { BUSINESS } from "@/data/business";

const STYLES = [
  { name: "Traditional Tamil", desc: "Classic South Indian designs with religious motifs and auspicious symbols", img: IMG.weddingInvite1 },
  { name: "Modern Minimalist", desc: "Clean, contemporary designs with elegant typography", img: IMG.weddingInvite2 },
  { name: "Floral & Botanical", desc: "Beautiful floral patterns with watercolor-style artwork", img: IMG.weddingInvite3 },
  { name: "Premium Boxed Sets", desc: "Luxury boxed invitations with inserts and envelopes", img: IMG.weddingCeremony },
];

const PREMIUM = [
  { name: "Gloss Lamination", price: "From ₹599/100 pcs", desc: "High-shine finish on 300 GSM art board" },
  { name: "Matt Lamination", price: "From ₹599/100 pcs", desc: "Soft-touch elegant finish" },
  { name: "Spot UV Coating", price: "From ₹999/100 pcs", desc: "Selective gloss coating for texture contrast" },
  { name: "Gold Foil Stamping", price: "From ₹1,499/100 pcs", desc: "Luxurious gold foil accents" },
  { name: "Laser-Cut Design", price: "From ₹2,999/100 pcs", desc: "Intricate die-cut patterns" },
  { name: "Embossed Finish", price: "From ₹1,299/100 pcs", desc: "Raised texture for a premium feel" },
];

const BULK_PRICING = [
  { qty: "100 cards", standard: "₹1,999", premium: "₹3,499", luxury: "₹5,999" },
  { qty: "250 cards", standard: "₹3,999", premium: "₹6,999", luxury: "₹12,999" },
  { qty: "500 cards", standard: "₹6,999", premium: "₹11,999", luxury: "₹22,999" },
  { qty: "1000 cards", standard: "₹11,999", premium: "₹19,999", luxury: "₹39,999" },
];

const WeddingCards = () => (
  <>
    <SEOHead
      title="Wedding Card Printing Chennai | From ₹1,999 | Super Printers"
      description="Beautiful wedding invitation printing in Chennai. Traditional Tamil, modern minimalist, laser-cut, foil options. From ₹1,999/100 cards. Super Printers Pallavaram."
      canonical="/wedding-cards"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Wedding Cards", url: "/wedding-cards" }]}
    />
    <PageHero title="Wedding Invitation Printing" subtitle="Beautiful invitations that set the tone for your special day. Traditional to modern designs." image={IMG.weddingCeremony} breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: "Wedding Cards", to: "/wedding-cards" }]} />

    {/* Wedding Card Styles */}
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-10 text-center">Wedding Card Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {STYLES.map((style, i) => (
            <div key={i} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/30 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img src={style.img} alt={style.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{style.name}</h3>
                <p className="text-muted-foreground text-sm">{style.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Premium Invitations */}
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-10 text-center">Premium Finish Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PREMIUM.map((p, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border hover:border-secondary/30 transition-all">
              <h3 className="font-display font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-secondary font-semibold text-sm mb-2">{p.price}</p>
              <p className="text-muted-foreground text-xs">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-8 text-center">Wedding Card Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[IMG.weddingInvite1, IMG.weddingInvite2, IMG.weddingInvite3, IMG.weddingCeremony, IMG.P20, IMG.P21, IMG.P22, IMG.P23].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden group">
              <img src={img} alt="Wedding card sample" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Customization */}
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl text-foreground mb-6">Customization Options</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Custom Designs", "Colour Matching", "Tamil/English/Hindi Text", "Photo Integration", "Matching Envelopes", "Insert Cards"].map((opt, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border">
              <span className="text-foreground text-sm font-medium">{opt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Bulk Pricing */}
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-8 text-center">Bulk Pricing</h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-sm font-semibold text-foreground">Quantity</th>
                <th className="text-right p-4 text-sm font-semibold text-foreground">Standard</th>
                <th className="text-right p-4 text-sm font-semibold text-foreground">Premium</th>
                <th className="text-right p-4 text-sm font-semibold text-secondary">Luxury</th>
              </tr>
            </thead>
            <tbody>
              {BULK_PRICING.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0">
                  <td className="p-4 text-sm text-foreground font-medium">{row.qty}</td>
                  <td className="p-4 text-sm text-muted-foreground text-right">{row.standard}</td>
                  <td className="p-4 text-sm text-foreground text-right font-medium">{row.premium}</td>
                  <td className="p-4 text-sm text-secondary text-right font-semibold">{row.luxury}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Order CTA */}
    <section className="py-16 px-6 bg-secondary/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl text-foreground mb-4">Order Wedding Invitations</h2>
        <p className="text-muted-foreground mb-8">Beautiful wedding cards delivered in 5-7 business days. Free design consultation available.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need wedding invitations. Date: Quantity: Style preference: ")}`} className="bg-[#25D366] text-white font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">Order via WhatsApp</a>
          <Link to="/get-quote" className="bg-primary text-primary-foreground font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">Get a Quote</Link>
        </div>
      </div>
    </section>
  </>
);

export default WeddingCards;
