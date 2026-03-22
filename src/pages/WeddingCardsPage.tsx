import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";
import PageHero from "@/components/shared/PageHero";

const SPEC_ROWS = [
  { type: "Matt 300GSM", paper: "300 GSM", finish: "Matt Lamination", minQty: "100 pcs", price: "From ₹5/card", delivery: "24–48 hrs" },
  { type: "Velvet Lam", paper: "300 GSM", finish: "Velvet Lamination", minQty: "100 pcs", price: "From ₹7/card", delivery: "24–48 hrs" },
  { type: "Foil Accent", paper: "300 GSM", finish: "Gold/Silver Foil", minQty: "100 pcs", price: "From ₹9/card", delivery: "48–72 hrs" },
  { type: "Premium Gloss", paper: "350 GSM", finish: "Gloss Lamination", minQty: "100 pcs", price: "From ₹6/card", delivery: "24–48 hrs" },
];

const WHY_US = [
  { icon: "💰", title: "Lowest Price in Chennai", desc: "Direct from press — no middlemen, no retail markup. We print it ourselves so you pay factory price. Cheaper than Menaka Cards, Olympic Cards, Lovely Cards & Kothari Cards." },
  { icon: "🎨", title: "Free Design Included", desc: "Our in-house designer creates your card at zero extra cost. Unlimited revisions until you love it. Others charge ₹500–₹1,500 for design alone." },
  { icon: "✅", title: "Proof Before Every Print", desc: "We send a WhatsApp proof for your approval before a single card is printed. No surprises, no wasted money, no regrets." },
  { icon: "⚡", title: "Ready in 24–48 Hours", desc: "Once proof approved, your cards are printed and packed. Urgent same-day orders accepted. Faster than Menaka, Lovely Cards and most shops in Chennai." },
  { icon: "🚚", title: "Pickup or Delivery", desc: "Free pickup from our Pallavaram press. Home delivery across Chennai, Tambaram, Chromepet, Velachery and all areas at courier rates." },
  { icon: "🏆", title: "35 Years of Trust", desc: "Since 1990, three generations of Chennai families have printed their wedding cards with us. We have printed over 10,000 weddings — Hindu, Christian, Muslim, Tamil, English and bilingual." },
];

const COMPARE = [
  { feature: "Price per card", us: "From ₹5", others: "₹12–₹30" },
  { feature: "Minimum order", us: "100 cards", others: "200–500 cards" },
  { feature: "Free design", us: "✅ Always free", others: "❌ ₹500–₹1,500 extra" },
  { feature: "Proof before print", us: "✅ Every order", others: "❌ Rarely offered" },
  { feature: "Turnaround", us: "24–48 hours", others: "3–7 days" },
  { feature: "Tamil & bilingual", us: "✅ Specialised", others: "Basic only" },
  { feature: "WhatsApp ordering", us: "✅ Quote in 30 mins", others: "❌ Visit shop required" },
  { feature: "Urgent same-day", us: "✅ Available", others: "❌ Not available" },
  { feature: "Experience", us: "35 years since 1990", others: "Varies" },
];

const WeddingCardsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="Cheapest Wedding Card Printing Chennai | From ₹5 per Card | Free Design | Super Printers Pallavaram"
      description="Wedding card printing in Chennai from ₹5 per card. Free design proof, ready in 24–48 hours. Hindu, Christian, Muslim cards in Tamil & English. Cheaper than Menaka Cards & Olympic Cards. Call +91 98401 99878."
      canonical="/wedding-cards"
      keywords="cheapest wedding card printing Chennai, wedding cards from 5 rupees Chennai, wedding invitation printing Pallavaram, Tamil wedding cards Chennai, Hindu wedding cards Chennai, Christian wedding cards Chennai, Muslim nikah invitation Chennai, wedding card printing near me, budget wedding cards Chennai, wedding cards cheaper than Menaka Cards, wedding invitation 24 hours Chennai"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "Wedding Cards", url: "/wedding-cards" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/wedding-cards",
        name: "Cheapest Wedding Card Printing Chennai — Super Printers",
        serviceType: "Wedding invitation design and printing",
        description: "Cheapest wedding card printing in Chennai from ₹5 per card. Free design, proof before print, 24-hour turnaround. Hindu, Christian, Muslim cards in Tamil and English.",
      })}
    />

    <PageHero
      title="Wedding Card Printing Chennai"
      subtitle="Chennai's lowest price — from ₹5 per card. Free design. Proof before print. Ready in 24 hours."
      breadcrumbs={[{ label: "Home", to: "/" }, { label: "Wedding Cards", to: "/wedding-cards" }]}
    />

    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Price Shock Banner */}
      <div
        className="rounded-3xl p-8 mb-14 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #252545 100%)" }}
      >
        <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: "#C9A84C" }} />
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C9A84C" }}>
          DIRECT FROM PRESS — NO MIDDLEMEN
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white mb-2">
          From <span style={{ color: "#C9A84C" }}>₹5</span> per card
        </h2>
        <p className="text-white/70 text-lg mb-6">
          Priced lower than Menaka Cards, Olympic Cards, Lovely Cards & Kothari Cards — direct from press, no retail markup.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers! I need wedding card printing. Please send your cheapest rates.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "#25D366" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Get Cheapest Rate on WhatsApp
          </a>
          <Link
            to="/get-quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-base border-2 transition-transform hover:scale-[1.02]"
            style={{ borderColor: "#C9A84C", color: "#C9A84C" }}
          >
            Get Instant Quote
          </Link>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "var(--gold)" }}>WHY SUPER PRINTERS</p>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-center mb-10" style={{ color: "var(--color-primary)" }}>
          6 Reasons We Beat Every Shop in Chennai
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border"
              style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "#FFFDF7" }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-display font-bold text-lg mb-2" style={{ color: "var(--color-primary)" }}>{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "var(--gold)" }}>PRICE COMPARISON</p>
        <h2 className="font-display font-extrabold text-3xl text-center mb-8" style={{ color: "var(--color-primary)" }}>
          Super Printers vs Other Shops
        </h2>
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
          <table className="w-full text-left">
            <thead>
              <tr style={{ backgroundColor: "var(--color-primary)" }}>
                <th className="px-5 py-4 text-sm font-bold text-white">Feature</th>
                <th className="px-5 py-4 text-sm font-bold" style={{ color: "#C9A84C" }}>Super Printers ✓</th>
                <th className="px-5 py-4 text-sm font-bold text-white/60">Menaka / Olympic / Lovely Cards</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                  <td className="px-5 py-3.5 text-sm font-medium" style={{ color: "var(--color-primary)" }}>{row.feature}</td>
                  <td className="px-5 py-3.5 text-sm font-bold" style={{ color: "#15803d" }}>{row.us}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-500">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-center mt-3 text-gray-400">* Based on published rates and market research. Prices subject to change.</p>
      </div>

      {/* Specs Table */}
      <div className="mb-16">
        <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "var(--gold)" }}>PRICING & SPECS</p>
        <h2 className="font-display font-extrabold text-3xl text-center mb-8" style={{ color: "var(--color-primary)" }}>
          Wedding Card Options
        </h2>
        <div className="overflow-x-auto rounded-2xl border" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr style={{ backgroundColor: "#C9A84C" }}>
                <th className="px-5 py-3.5 text-sm font-bold text-white">Type</th>
                <th className="px-5 py-3.5 text-sm font-bold text-white">Paper</th>
                <th className="px-5 py-3.5 text-sm font-bold text-white">Finish</th>
                <th className="px-5 py-3.5 text-sm font-bold text-white">Min Qty</th>
                <th className="px-5 py-3.5 text-sm font-bold text-white">Price</th>
                <th className="px-5 py-3.5 text-sm font-bold text-white">Delivery</th>
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row, i) => (
                <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-amber-50/30"}>
                  <td className="px-5 py-3.5 text-sm font-semibold" style={{ color: "var(--color-primary)" }}>{row.type}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-600">{row.paper}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-600">{row.finish}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-600">{row.minQty}</td>
                  <td className="px-5 py-3.5 text-sm font-bold" style={{ color: "#15803d" }}>{row.price}</td>
                  <td className="px-5 py-3.5 text-sm text-gray-600">{row.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-5 py-3 text-xs text-gray-400 border-t" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
            Final price depends on quantity, size, and finish. WhatsApp us for exact quote in 30 minutes.
          </p>
        </div>
      </div>

      {/* Included Section */}
      <div className="mb-16 grid md:grid-cols-2 gap-6">
        <div className="p-7 rounded-2xl border" style={{ borderColor: "rgba(201,168,76,0.2)", backgroundColor: "#FFFDF7" }}>
          <h3 className="font-display font-bold text-xl mb-4" style={{ color: "var(--color-primary)" }}>✅ What's Included — Free</h3>
          <ul className="space-y-2 text-sm" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> Hindu, Christian, Muslim & modern designs</li>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> Tamil, English & bilingual printing</li>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> Free in-house design service</li>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> Digital proof on WhatsApp before print</li>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> Unlimited design revisions</li>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> GST invoice for every order</li>
            <li className="flex gap-2"><span style={{ color: "#15803d" }}>✓</span> Quality check before dispatch</li>
          </ul>
        </div>
        <div className="p-7 rounded-2xl" style={{ backgroundColor: "var(--color-primary)" }}>
          <h3 className="font-display font-bold text-xl mb-4 text-white">How to Order in 3 Steps</h3>
          <ol className="space-y-4">
            {[
              { step: "1", title: "WhatsApp Us", desc: "Send your requirements — quantity, size, language, and any design ideas." },
              { step: "2", title: "Get Free Proof", desc: "Our designer creates your card. We send proof via WhatsApp within 24 hours." },
              { step: "3", title: "Approve & Print", desc: "Confirm the proof and we print. Cards ready in 24–48 hours for pickup or delivery." },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#C9A84C", color: "var(--color-primary)" }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="font-bold text-white text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Final CTA */}
      <div
        className="rounded-3xl p-8 text-center"
        style={{ background: "linear-gradient(135deg, #FFFDF7 0%, #FFF3DC 100%)", border: "2px solid rgba(201,168,76,0.3)" }}
      >
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>READY TO ORDER?</p>
        <h3 className="font-display font-extrabold text-3xl mb-3" style={{ color: "var(--color-primary)" }}>
          Get Your Wedding Cards<br />at Chennai's Lowest Price
        </h3>
        <p className="text-gray-600 mb-6" style={{ fontFamily: "var(--font-body)" }}>
          WhatsApp us now — get a quote in 30 minutes, proof in 24 hours, cards in 48 hours.
        </p>
        <a
          href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers! I need wedding card printing. Please send your cheapest rates and available designs.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-white text-base transition-transform hover:scale-[1.03]"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
          WhatsApp for Cheapest Rate
        </a>
      </div>

    </div>
  </div>
);

export default WeddingCardsPage;
