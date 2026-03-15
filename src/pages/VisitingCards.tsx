import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import StatsCounter from "@/components/shared/StatsCounter";
import { IMG } from "@/data/images";
import { BUSINESS } from "@/data/business";

const CARD_TYPES = [
  { name: "Gloss Lamination", spec: "300 GSM Art Card", img: IMG.glossCard },
  { name: "Matt Lamination", spec: "300 GSM Art Card", img: IMG.mattCard },
  { name: "Spot UV", spec: "300 GSM Art Card", img: IMG.spotUvCard },
  { name: "Velvet Lamination", spec: "400 GSM Art Card", img: IMG.velvetCard },
  { name: "Gold Foil Stamping", spec: "400 GSM + Foil", img: IMG.goldFoilCard },
  { name: "Synthetic (Non-Tear)", spec: "Non-Tearable Paper", img: IMG.syntheticCard },
];

const MATERIALS = [
  { name: "300 GSM Art Card", desc: "Standard premium card stock, smooth finish" },
  { name: "400 GSM Art Card", desc: "Extra thick for luxury feel" },
  { name: "Non-Tearable Synthetic", desc: "Waterproof, durable for outdoor use" },
  { name: "PVC Transparent", desc: "Clear frosted plastic cards" },
];

const FAQ = [
  { q: "What is the minimum order quantity?", a: "Minimum order is 100 visiting cards." },
  { q: "Can I get a sample before bulk order?", a: "Yes, we offer sample prints. WhatsApp us for details." },
  { q: "Do you offer design services?", a: "Yes, our in-house design team can create your card design. WhatsApp us for a quote." },
  { q: "What file formats do you accept?", a: "We accept PDF, CDR (CorelDRAW), AI (Illustrator), and high-resolution JPG/PNG files." },
  { q: "What is the standard card size?", a: "Standard visiting card size is 90×53mm (3.5×2 inches)." },
];

const VisitingCards = () => (
  <>
    <SEOHead
      title="Visiting Card Printing Chennai | Super Printers"
      description="Premium visiting card printing in Chennai. Gloss, Matt, Spot UV, Velvet, Gold Foil options. Super Printers Pallavaram."
      canonical="/visiting-cards"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Products", url: "/products" }, { name: "Visiting Cards", url: "/visiting-cards" }]}
    />
    <PageHero title="Visiting Card Printing" subtitle="Make a lasting first impression with premium business cards printed on 300-400 GSM art card stock." image={IMG.premiumCards} breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: "Visiting Cards", to: "/visiting-cards" }]} />

    {/* Card Types */}
    <section className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-10 text-center">Types of Visiting Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARD_TYPES.map((card, i) => (
            <div key={i} className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={card.img} alt={card.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{card.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{card.spec}</p>
                <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi! I need ${card.name} visiting cards. Please quote.`)}`} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">Get quote →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Options Table */}
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-8 text-center">Options</h2>
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-sm font-semibold text-foreground">Type</th>
                <th className="text-left p-4 text-sm font-semibold text-foreground">Spec</th>
              </tr>
            </thead>
            <tbody>
              {CARD_TYPES.map((card, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                  <td className="p-4 text-sm text-foreground font-medium">{card.name}</td>
                  <td className="p-4 text-sm text-muted-foreground">{card.spec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">Quote via WhatsApp.</p>
      </div>
    </section>

    {/* Materials */}
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-8 text-center">Material Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MATERIALS.map((m, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display font-bold text-foreground mb-2">{m.name}</h3>
              <p className="text-muted-foreground text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sample Gallery */}
    <section className="py-16 px-6 bg-accent">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-8 text-center">Sample Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[IMG.glossCard, IMG.mattCard, IMG.spotUvCard, IMG.velvetCard, IMG.goldFoilCard, IMG.syntheticCard, IMG.premiumCards, IMG.stackedCards].map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden group">
              <img src={img} alt="Visiting card sample" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-black text-3xl text-foreground mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ.map((faq, i) => (
            <details key={i} className="bg-card rounded-xl border border-border group">
              <summary className="p-5 cursor-pointer text-foreground font-semibold text-sm list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground text-sm">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>

    {/* Order CTA */}
    <section className="py-16 px-6 bg-primary/10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display font-black text-3xl text-foreground mb-4">Order Your Visiting Cards</h2>
        <p className="text-muted-foreground mb-8">Get premium visiting cards delivered in 1-2 business days. WhatsApp us or fill our quote form.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers, I need visiting cards. Quantity: Type: ")}`} className="bg-[#25D366] text-white font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">Order via WhatsApp</a>
          <Link to="/get-quote" className="bg-primary text-primary-foreground font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">Get a Quote</Link>
        </div>
      </div>
    </section>
  </>
);

export default VisitingCards;
