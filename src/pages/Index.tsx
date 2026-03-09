import { useState, useEffect, useCallback } from "react";

const IMG = {
  hero: "https://images.pexels.com/photos/6621000/pexels-photo-6621000.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
  pressWide: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800",
  inkRollers: "https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  pressTools: "https://images.pexels.com/photos/4140923/pexels-photo-4140923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  digital: "https://images.pexels.com/photos/17536002/pexels-photo-17536002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  delivery: "https://images.pexels.com/photos/6169002/pexels-photo-6169002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  workshop: "https://images.pexels.com/photos/3966277/pexels-photo-3966277.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  printedStack: "https://images.pexels.com/photos/6209791/pexels-photo-6209791.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  inkPress: "https://images.pexels.com/photos/300860/pexels-photo-300860.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  parcel: "https://images.pexels.com/photos/4440796/pexels-photo-4440796.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  courier: "https://images.pexels.com/photos/7843999/pexels-photo-7843999.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  // Printing-relevant replacement images
  glossCard: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=700&fit=crop",
  mattCard: "https://images.unsplash.com/photo-1572502742725-4c747170f7ca?w=900&h=700&fit=crop",
  spotUvCard: "https://images.unsplash.com/photo-1589041127168-9b1915731823?w=900&h=700&fit=crop",
  velvetCard: "https://images.unsplash.com/photo-1540224871915-bc8ffb782bdf?w=900&h=700&fit=crop",
  goldFoilCard: "https://images.unsplash.com/photo-1586075010882-3a0c2bdb4da5?w=900&h=700&fit=crop",
  syntheticCard: "https://images.unsplash.com/photo-1616628188540-925618b4c0f9?w=900&h=700&fit=crop",
  weddingInvite1: "https://images.unsplash.com/photo-1607861716497-e65ab29fc7ac?w=900&h=700&fit=crop",
  weddingInvite2: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&h=700&fit=crop",
  weddingInvite3: "https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=900&h=700&fit=crop",
  weddingCeremony: "https://images.pexels.com/photos/30171219/pexels-photo-30171219.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  letterhead: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=900&h=700&fit=crop",
  envelopes: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=900&h=700&fit=crop",
  stickerSheets: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=900&h=700&fit=crop",
  premiumCards: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?w=900&h=700&fit=crop",
  posterPrint: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=900&h=700&fit=crop",
  laminationMachine: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=900&h=700&fit=crop",
  brochures: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=900&h=700&fit=crop",
  offsetPress: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=900&h=700&fit=crop",
  printedBrochures: "https://images.unsplash.com/photo-1568667256549-094345857637?w=900&h=700&fit=crop",
  colorPrints: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=900&h=700&fit=crop",
  printShop: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=900&h=700&fit=crop",
  paperStack: "https://images.unsplash.com/photo-1586075010882-3a0c2bdb4da5?w=900&h=700&fit=crop",
  qualityCheck: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=700&fit=crop",
  stackedCards: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=700&fit=crop",
};

const C = { red: "#B71C1C", maroon: "#7B1818", gold: "#F9A825", saffron: "#E65100", teal: "#00695C", ivory: "#FFF8F0", dark: "#1A1A1A", wa: "#25D366" };
const PF = "'Playfair Display',serif";
const PP = "'Poppins',sans-serif";
const NT = "'Noto Sans Tamil',sans-serif";

const SLIDES = [
  { bg: IMG.hero, overlay: "rgba(183,28,28,0.78)", badge: "TAMIL NADU'S TRUSTED PRESS", h1a: "Premium Offset", h1b: "Printing for Every Need", body: "Business cards, wedding invitations, letterheads and more — printed with precision since 1989.", btn1: "Order Now →", btn1Action: "products", btn2: "Download Rate Card", btn2Action: "quote", rightImg: IMG.glossCard, thumbs: [IMG.glossCard, IMG.weddingInvite1, IMG.letterhead, IMG.envelopes, IMG.brochures] },
  { bg: IMG.weddingCeremony, overlay: "rgba(100,18,18,0.80)", badge: "WEDDING SEASON SPECIAL", h1a: "Beautiful Wedding", h1b: "Invitations", tamil: "திருமண அழைப்பிதழ்கள்", body: "Gloss, Matt, Spot UV & Premium finishes on 300 GSM Art Board.", btn1: "See Designs →", btn1Action: "wedding-cards", rightImg: IMG.weddingInvite1, thumbs: [] },
  { bg: IMG.offsetPress, overlay: "rgba(20,20,20,0.76)", badge: "1 TO 4 BUSINESS DAYS", h1a: "Order Online.", h1b: "Delivered Fast.", body: "We deliver across Chennai, Coimbatore, and all Tamil Nadu.", btn1: "Order Now →", btn1Action: "products", btn2: "Track Order", btn2Action: "track", rightImg: IMG.glossCard, thumbs: [] },
];

const TRUST = [
  { img: IMG.inkRollers, num: "14", label: "National Awards", sub: "Excellence in Printing" },
  { img: IMG.delivery, num: "1–4 Day", label: "Delivery", sub: "Pan Tamil Nadu" },
  { img: IMG.pressTools, num: "35 Yrs", label: "Experience", sub: "Since 1989" },
  { img: IMG.digital, num: "10-Color", label: "Offset Press", sub: "First in Tamil Nadu" },
  { img: IMG.workshop, num: "10,000+", label: "Happy Clients", sub: "Across India" },
];

const CATEGORIES = [
  { name: "Visiting Cards", sub: "Gloss • Matt • Spot UV • Velvet", color: "#B71C1C", img: IMG.glossCard, anchor: "visiting-cards" },
  { name: "Wedding Invitations", sub: "300 GSM Art Board • Premium", color: "#E65100", img: IMG.weddingInvite1, anchor: "wedding-cards" },
  { name: "Letterheads", sub: "80 GSM • 100 GSM Bond", color: "#00695C", img: IMG.letterhead, anchor: "stationery" },
  { name: "Envelopes & Covers", sub: "80 • 100 • 130 • 170 GSM", color: "#7B1818", img: IMG.envelopes, anchor: "envelopes" },
  { name: "Stickers", sub: "Mirror Coated • 20×30 inch", color: "#F9A825", img: IMG.stickerSheets, darkText: true, anchor: "stickers" },
  { name: "Special Cards", sub: "Velvet • UV • Foil • Die Cut", color: "#B71C1C", img: IMG.premiumCards, anchor: "visiting-cards" },
  { name: "Brochures & Flyers", sub: "Tri-fold • Bi-fold • A4 Flyers", color: "#00695C", img: IMG.brochures, anchor: "brochures" },
  { name: "Posters", sub: "80 GSM Maplitho • All Sizes", color: "#E65100", img: IMG.posterPrint, anchor: "posters" },
  { name: "Lamination", sub: "Gloss • Matt • A4 to Crown", color: "#7B1818", img: IMG.laminationMachine, anchor: "visiting-cards" },
];

const PRODUCTS = [
  { name: "Gloss Visiting Card", spec: "300 GSM | 90×53mm | Gloss Lam", days: "1-2 Days", price: "₹299", img: IMG.glossCard },
  { name: "Matt Visiting Card", spec: "300 GSM | 90×53mm | Matt Lam", days: "1-2 Days", price: "₹299", img: IMG.mattCard },
  { name: "Spot UV Card", spec: "300 GSM | 90×53mm | Spot UV", days: "6-10 Days", price: "₹499", img: IMG.spotUvCard },
  { name: "Velvet Lamination", spec: "400 GSM | 90×53mm | Velvet Lam", days: "10-15 Days", price: "₹799", img: IMG.velvetCard },
  { name: "Synthetic Card", spec: "Non-Tearable Paper | 90×53mm", days: "2-4 Days", price: "₹499", img: IMG.syntheticCard },
  { name: "Velvet + Gold Foil", spec: "400 GSM | Velvet + Foil Stamping", days: "10-15 Days", price: "₹999", img: IMG.goldFoilCard },
];

const STEPS = [
  { img: IMG.glossCard, color: C.red, badge: "படி 1", title: "Choose Product", tamil: "தயாரிப்பை தேர்ந்தெடுங்கள்", desc: "Browse visiting cards, wedding invitations, letterheads and more.", thumbs: [IMG.mattCard, IMG.weddingInvite1, IMG.letterhead] },
  { img: IMG.printShop, color: C.saffron, badge: "படி 2", title: "Upload Your Design", tamil: "டிசைனை அப்லோட் செய்யுங்கள்", desc: "Upload print-ready PDF or CDR. No design? Our team helps create one.", thumbs: [IMG.spotUvCard, IMG.weddingInvite2, IMG.brochures] },
  { img: IMG.inkRollers, color: C.teal, badge: "படி 3", title: "We Print with Precision", tamil: "துல்லியமாக அச்சிடுகிறோம்", desc: "Quality checked on offset and digital presses. 14 national awards for excellence.", thumbs: [IMG.pressTools, IMG.inkPress, IMG.printedStack] },
  { img: IMG.parcel, color: C.gold, badge: "படி 4", title: "Delivered to You", tamil: "உங்கள் வீட்டிற்கே டெலிவரி", desc: "Pan Tamil Nadu delivery in 1–4 business days. Same-day pickup in Chennai.", thumbs: [IMG.delivery, IMG.courier, IMG.parcel], darkText: true },
];

const TESTIMONIALS = [
  { img: IMG.glossCard, border: C.red, name: "Senthil Kumar", role: "Business Owner, T. Nagar", quote: "Super Printers-ல் visiting card-கள் print செய்தோம். Quality மிகவும் அருமை. Quick delivery. Thank you Super Printers!" },
  { img: IMG.weddingInvite2, border: C.saffron, name: "Priya Krishnan", role: "Bride, Adyar, Chennai", quote: "Wedding invitation-கள் மிகவும் beautiful-ஆக வந்தது. Spot UV finish excellent! வீட்டில் எல்லாரும் appreciate பண்ணினார்கள்." },
  { img: IMG.letterhead, border: C.teal, name: "Suresh & Assoc.", role: "Advocate, Madurai", quote: "10 years-ஆக Super Printers-ல் letterhead மற்றும் envelope print செய்கிறோம். Quality consistent. Price reasonable." },
  { img: IMG.delivery, border: C.gold, name: "Ramesh Velayutham", role: "Event Coordinator, Coimbatore", quote: "Event-க்கு same-day flyers தேவைப்பட்டது. 4 மணி நேரத்தில் deliver பண்ணினார்கள். Excellent service!" },
  { img: IMG.weddingInvite1, border: C.maroon, name: "Priya Suresh", role: "Homemaker, Pallavaram", quote: "Wedding cards-ஐ Super Printers-ல் print செய்தோம். Design மிகவும் அழகாக வந்தது. 2 days-ல் delivery கிடைத்தது!" },
  { img: IMG.printedStack, border: C.teal, name: "Karthik Rajan", role: "Business Owner, Tambaram", quote: "Letterheads and visiting cards for our company — excellent quality, GST bill provided, very professional team." },
];

type GalCat = "All" | "Visiting Cards" | "Wedding Cards" | "Stationery" | "Envelopes" | "Stickers" | "Posters" | "Press" | "Brochures";
const GALLERY: { img: string; label: string; cat: GalCat }[] = [
  { img: IMG.glossCard, label: "Gloss Visiting Card", cat: "Visiting Cards" },
  { img: IMG.weddingInvite1, label: "Wedding Invitation", cat: "Wedding Cards" },
  { img: IMG.inkRollers, label: "Offset Press", cat: "Press" },
  { img: IMG.letterhead, label: "Letterhead Set", cat: "Stationery" },
  { img: IMG.mattCard, label: "Matt Visiting Card", cat: "Visiting Cards" },
  { img: IMG.envelopes, label: "Envelope / Cover", cat: "Envelopes" },
  { img: IMG.pressTools, label: "Press Tools", cat: "Press" },
  { img: IMG.stickerSheets, label: "Sticker Print", cat: "Stickers" },
  { img: IMG.spotUvCard, label: "Spot UV Card", cat: "Visiting Cards" },
  { img: IMG.weddingInvite2, label: "Wedding Matt", cat: "Wedding Cards" },
  { img: IMG.workshop, label: "Workshop Floor", cat: "Press" },
  { img: IMG.brochures, label: "Brochure", cat: "Brochures" },
  { img: IMG.velvetCard, label: "Velvet Foil Card", cat: "Visiting Cards" },
  { img: IMG.printedStack, label: "Printed Output", cat: "Press" },
  { img: IMG.posterPrint, label: "Poster Print", cat: "Posters" },
  { img: IMG.digital, label: "Digital Printer", cat: "Press" },
  { img: IMG.weddingInvite3, label: "Premium Wedding Card", cat: "Wedding Cards" },
  { img: IMG.inkPress, label: "Printing in Progress", cat: "Press" },
  { img: IMG.offsetPress, label: "Offset Press Room", cat: "Press" },
  { img: IMG.parcel, label: "Packaged Order", cat: "Press" },
  { img: IMG.printShop, label: "Print Shop", cat: "Press" },
  { img: IMG.printedBrochures, label: "Printed Brochures", cat: "Brochures" },
  { img: IMG.laminationMachine, label: "Lamination", cat: "Press" },
  { img: IMG.premiumCards, label: "Premium Cards", cat: "Visiting Cards" },
];

const WHY = [
  { img: IMG.offsetPress, color: C.red, title: "35 Years of Excellence", tamil: "35 ஆண்டுகள் சிறப்பு", body: "Three decades of offset printing excellence. State-of-the-art presses.", extra: "14 National Awards", thumb: IMG.inkRollers },
  { img: IMG.delivery, color: C.saffron, title: "Fast Pan-TN Delivery", tamil: "வேகமான டெலிவரி", body: "1–4 business days across Tamil Nadu. Same-day pickup from Chennai press.", extra: "Chennai | CBE | Madurai", thumb: IMG.courier },
  { img: IMG.qualityCheck, color: C.teal, title: "Quality Guaranteed", tamil: "தரம் உறுதி", body: "Multi-point quality checks on every job. Colour accurate, sharp registration.", extra: "GST Inclusive Pricing", thumb: IMG.printedStack },
  { img: IMG.stackedCards, color: C.gold, title: "Competitive Pricing", tamil: "சிறந்த விலை", body: "Transparent pricing. Bulk discounts for DTP operators and resellers.", extra: "Rates from ₹199", thumb: IMG.glossCard, darkText: true },
];

const NAV_LINKS = [
  { label: "Home", anchor: "top" },
  { label: "Visiting Cards", anchor: "visiting-cards" },
  { label: "Wedding Cards", anchor: "wedding-cards" },
  { label: "Stationery", anchor: "stationery" },
  { label: "Envelopes", anchor: "envelopes" },
  { label: "Brochures", anchor: "brochures" },
  { label: "Stickers", anchor: "stickers" },
  { label: "Posters", anchor: "posters" },
  { label: "About", anchor: "about" },
  { label: "Contact", anchor: "contact" },
];

const GAL_FILTERS: GalCat[] = ["All", "Visiting Cards", "Wedding Cards", "Stationery", "Envelopes", "Brochures", "Stickers", "Posters", "Press"];

const TICKER_TEXT = "விசிட்டிங் கார்டு  •  Wedding Cards  •  Letterheads  •  Envelopes  •  Stickers  •  Brochures & Flyers  |  Fast Delivery across Tamil Nadu  |  14 National Awards for Excellence  |  GST Inclusive Pricing     ";

const scrollTo = (id: string) => {
  if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Index = () => {
  const [slide, setSlide] = useState(0);
  const [testIdx, setTestIdx] = useState(0);
  const [galFilter, setGalFilter] = useState<GalCat>("All");
  const [scrolled, setScrolled] = useState(false);
  const [hoverCat, setHoverCat] = useState<number | null>(null);
  const [hoverProd, setHoverProd] = useState<number | null>(null);
  const [hoverGal, setHoverGal] = useState<number | null>(null);
  const [hoverNav, setHoverNav] = useState<number | null>(null);
  const [modal, setModal] = useState<string | null>(null);

  useEffect(() => {
    const si = setInterval(() => setSlide(p => (p + 1) % 3), 5000);
    const ti = setInterval(() => setTestIdx(p => (p + 1) % TESTIMONIALS.length), 4500);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => { clearInterval(si); clearInterval(ti); window.removeEventListener("scroll", onScroll); };
  }, []);

  const filtered = galFilter === "All" ? GALLERY : GALLERY.filter(g => g.cat === galFilter);

  const aboutImages = [
    { src: IMG.inkRollers, label: "Offset Press" },
    { src: IMG.glossCard, label: "Visiting Cards" },
    { src: IMG.weddingInvite1, label: "Wedding Cards" },
    { src: IMG.letterhead, label: "Stationery" },
    { src: IMG.delivery, label: "Fast Delivery" },
  ];

  const handleSlideBtn = (action?: string) => {
    if (!action) return;
    if (action === "track") { setModal("track"); return; }
    if (action === "quote") { scrollTo("contact"); return; }
    scrollTo(action);
  };

  return (
    <div id="top" style={{ fontFamily: PP, color: C.dark, margin: 0, padding: 0 }}>
      <style>{`
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes waPulse{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}}
        .hero-anim{animation:fadeUp 0.65s ease both}
        *{box-sizing:border-box;margin:0;padding:0}
        a{text-decoration:none;color:inherit}
        input,select,textarea{font-family:'Poppins',sans-serif}
      `}</style>

      {/* MODAL */}
      {modal && (
        <div style={{ position: "fixed", inset: 0, zIndex: 10000, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setModal(null)}>
          <div onClick={e => e.stopPropagation()} style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", maxWidth: 420, width: "90%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 22, color: C.red, marginBottom: 12 }}>
              {modal === "orders" && "Order Tracking"}
              {modal === "track" && "Track Your Order"}
              {modal === "cart" && "Place Your Order"}
            </div>
            <p style={{ fontFamily: PP, fontSize: 14, color: "#555", lineHeight: 1.6, marginBottom: 20 }}>
              {modal === "orders" && "Order tracking coming soon. Please WhatsApp us at +91-44-22480847 for order status."}
              {modal === "track" && "Track your order via WhatsApp: +91-44-22480847"}
              {modal === "cart" && "To place an order, please WhatsApp us or fill the quote form below."}
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <a href="https://wa.me/914422480847" style={{ background: C.wa, color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "10px 22px", borderRadius: 30, display: "inline-block" }}>WhatsApp Us</a>
              {modal === "cart" && <button onClick={() => { setModal(null); scrollTo("contact"); }} style={{ background: C.red, color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "10px 22px", borderRadius: 30, border: "none", cursor: "pointer" }}>Fill Quote Form</button>}
              <button onClick={() => setModal(null)} style={{ background: "#eee", color: "#555", fontFamily: PP, fontWeight: 600, fontSize: 13, padding: "10px 22px", borderRadius: 30, border: "none", cursor: "pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* S1 — TOP INFO BAR */}
      <div style={{ height: 34, background: C.dark, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", overflow: "hidden" }}>
        <span style={{ color: "#fff", fontSize: 11, whiteSpace: "nowrap", fontFamily: PP }}>Chennai, Tamil Nadu | Since 1989</span>
        <div style={{ flex: 1, overflow: "hidden", margin: "0 16px" }}>
          <div style={{ display: "flex", width: "200%", animation: "ticker 30s linear infinite" }}>
            {[0, 1].map(k => (
              <span key={k} style={{ color: C.gold, fontSize: 11, whiteSpace: "nowrap", fontFamily: NT, minWidth: "50%" }}>{TICKER_TEXT}</span>
            ))}
          </div>
        </div>
        <span style={{ color: "#fff", fontSize: 11, whiteSpace: "nowrap", fontFamily: PP }}>+91-44-22480847 | Mon–Sat 9AM–7PM</span>
      </div>

      {/* S2 — BRAND BAR */}
      <div style={{ background: C.ivory, padding: "10px 28px", display: "flex", alignItems: "center", gap: 16, borderBottom: "1px solid #e8d5c4", flexWrap: "wrap" }}>
        <div style={{ minWidth: 240, display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => scrollTo("top")}>
          <div style={{ width: 50, height: 50, borderRadius: 9, background: C.red, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: PF, fontWeight: 900, fontSize: 21, color: "#fff" }}>SP</span>
          </div>
          <div>
            <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 21, color: C.red }}>Super Printers</div>
            <div style={{ fontFamily: NT, fontSize: 11, color: "#777" }}>சுப்பர் பிரிண்டர்ஸ் | Chennai's Finest Since 1989</div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", border: `2px solid ${C.red}`, borderRadius: 5, overflow: "hidden", minWidth: 200 }}>
          <input style={{ flex: 1, border: "none", padding: "9px 14px", outline: "none", fontSize: 13, fontFamily: PP }} placeholder="Search: visiting cards, wedding cards, letterheads…" />
          <button style={{ background: C.red, color: "#fff", border: "none", padding: "0 20px", cursor: "pointer", fontFamily: PP, fontWeight: 600, fontSize: 13 }}>Search</button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setModal("orders")} style={{ background: "transparent", border: `1.5px solid ${C.red}`, color: C.red, padding: "8px 16px", borderRadius: 5, cursor: "pointer", fontFamily: PP, fontWeight: 600, fontSize: 12 }}>My Orders</button>
          <button onClick={() => scrollTo("contact")} style={{ background: C.red, color: "#fff", border: "none", padding: "8px 16px", borderRadius: 5, cursor: "pointer", fontFamily: PP, fontWeight: 600, fontSize: 12 }}>Get Quote</button>
        </div>
      </div>

      {/* S3 — STICKY NAV */}
      <nav style={{ background: C.red, position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {NAV_LINKS.map((l, i) => (
            <button key={l.label} onClick={() => scrollTo(l.anchor)} onMouseEnter={() => setHoverNav(i)} onMouseLeave={() => setHoverNav(null)}
              style={{ color: "#fff", fontFamily: PP, fontSize: 12, fontWeight: 500, padding: "13px 12px", background: hoverNav === i ? C.maroon : "transparent", transition: "background 0.2s", border: "none", cursor: "pointer" }}>{l.label}</button>
          ))}
        </div>
        <a href="https://wa.me/914422480847" style={{ background: C.wa, color: "#fff", fontFamily: PP, fontSize: 12, fontWeight: 700, padding: "8px 15px", borderRadius: 20, whiteSpace: "nowrap" }}>WhatsApp</a>
      </nav>

      {/* S4 — HERO SLIDER */}
      <div style={{ position: "relative", height: 560, overflow: "hidden", background: "#111" }}>
        {SLIDES.map((s, i) => (
          <div key={i} style={{ position: "absolute", inset: 0, opacity: slide === i ? 1 : 0, transition: "opacity 0.9s ease", pointerEvents: slide === i ? "auto" : "none" }}>
            <img src={s.bg} alt="Super Printers printing press" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading={i === 0 ? "eager" : "lazy"} />
            <div style={{ position: "absolute", inset: 0, background: s.overlay }} />
            {slide === i && (
              <div className="hero-anim" style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", height: "100%", padding: "0 48px", maxWidth: 1300, margin: "0 auto" }}>
                <div style={{ flex: "0 0 55%" }}>
                  <div style={{ background: "rgba(0,0,0,0.3)", display: "inline-block", padding: "5px 14px", borderRadius: 3, marginBottom: 14 }}>
                    <span style={{ color: C.gold, fontFamily: PP, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.badge}</span>
                  </div>
                  <h1 style={{ fontFamily: PF, fontWeight: 900, fontSize: 46, color: "#fff", lineHeight: 1.15, margin: "0 0 8px" }}>{s.h1a}<br />{s.h1b}</h1>
                  {s.tamil && <div style={{ fontFamily: NT, color: C.gold, fontSize: 19, marginBottom: 8 }}>{s.tamil}</div>}
                  <p style={{ color: "rgba(255,255,255,0.86)", fontSize: 15, lineHeight: 1.6, marginBottom: 20, maxWidth: 420, fontFamily: PP }}>{s.body}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
                    <button onClick={() => handleSlideBtn(s.btn1Action)} style={{ background: C.gold, color: C.dark, fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "12px 28px", borderRadius: 30, border: "none", cursor: "pointer" }}>{s.btn1}</button>
                    {s.btn2 && <button onClick={() => handleSlideBtn(s.btn2Action)} style={{ border: "2px solid #fff", color: "#fff", fontFamily: PP, fontWeight: 500, fontSize: 13, padding: "10px 24px", borderRadius: 30, background: "transparent", cursor: "pointer" }}>{s.btn2}</button>}
                  </div>
                  {s.thumbs.length > 0 && (
                    <div style={{ display: "flex", gap: 6 }}>
                      {s.thumbs.map((t, ti) => <img key={ti} src={t} alt="Product preview" style={{ width: 66, height: 46, borderRadius: 5, border: "2px solid rgba(255,255,255,0.5)", objectFit: "cover", display: "block" }} loading="lazy" />)}
                    </div>
                  )}
                </div>
                <div style={{ flex: "0 0 45%", display: "flex", justifyContent: "center" }}>
                  <img src={s.rightImg} alt="Product showcase" style={{ width: 300, height: 400, borderRadius: 14, border: "4px solid rgba(255,255,255,0.3)", objectFit: "cover", transform: "rotate(2deg)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", display: "block" }} loading="lazy" />
                </div>
              </div>
            )}
          </div>
        ))}
        <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 7, zIndex: 10 }}>
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setSlide(i)} style={{ width: slide === i ? 26 : 10, height: 10, borderRadius: 5, background: slide === i ? C.gold : "rgba(255,255,255,0.5)", border: "none", cursor: "pointer", transition: "width 0.3s" }} />
          ))}
        </div>
      </div>

      {/* S5 — TRUST BAR */}
      <div style={{ background: C.dark, display: "flex", flexWrap: "wrap" }}>
        {TRUST.map((t, i) => (
          <div key={i} style={{ flex: "1 1 20%", minWidth: 180, display: "flex", alignItems: "center", gap: 11, padding: "14px 18px", borderRight: i < 4 ? "1px solid #2a2a2a" : "none" }}>
            <img src={t.img} alt={t.label} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.gold}`, display: "block" }} loading="lazy" />
            <div>
              <div style={{ fontFamily: PF, color: C.gold, fontSize: 14, fontWeight: 700 }}>{t.num} {t.label}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontFamily: PP }}>{t.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* S6 — PRODUCT CATEGORY GRID */}
      <div id="products" style={{ background: C.ivory, padding: "56px 36px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontFamily: NT, color: C.red, fontSize: 16 }}>எங்கள் தயாரிப்புகள்</div>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 34, color: C.dark, margin: "4px 0 10px" }}>Our Products</h2>
          <div style={{ width: 50, height: 4, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})`, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 13, maxWidth: 1200, margin: "0 auto" }}>
          {CATEGORIES.map((cat, i) => (
            <div key={i} style={{ height: 268, borderRadius: 9, overflow: "hidden", position: "relative", cursor: "pointer" }}
              onMouseEnter={() => setHoverCat(i)} onMouseLeave={() => setHoverCat(null)}>
              <img src={cat.img} alt={cat.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s", transform: hoverCat === i ? "scale(1.07)" : "scale(1)" }} loading="lazy" />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 16px", background: "linear-gradient(transparent,rgba(0,0,0,0.75))", opacity: hoverCat === i ? 0 : 1, transition: "opacity 0.3s" }}>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 17, color: "#fff" }}>{cat.name}</div>
                <div style={{ fontFamily: PP, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{cat.sub}</div>
              </div>
              <div style={{ position: "absolute", inset: 0, background: cat.color, opacity: hoverCat === i ? 0.92 : 0, transition: "opacity 0.3s", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 20, color: cat.darkText ? C.dark : "#fff", marginBottom: 6 }}>{cat.name}</div>
                <div style={{ fontFamily: PP, fontSize: 12, color: cat.darkText ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.8)", marginBottom: 14 }}>{cat.sub}</div>
                <button onClick={() => scrollTo(cat.anchor)} style={{ fontFamily: PP, fontWeight: 600, fontSize: 13, color: cat.darkText ? C.dark : "#fff", border: `2px solid ${cat.darkText ? C.dark : "#fff"}`, padding: "6px 18px", borderRadius: 20, background: "transparent", cursor: "pointer" }}>Shop Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S7 — VISITING CARDS SPOTLIGHT */}
      <div id="visiting-cards" style={{ background: "#fff", padding: "56px 36px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26, borderLeft: `5px solid ${C.red}`, paddingLeft: 16 }}>
          <div>
            <div style={{ fontFamily: NT, color: "#888", fontSize: 13 }}>விசிட்டிங் கார்டு</div>
            <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 26, color: C.dark, margin: 0 }}>Visiting Cards — Most Popular</h2>
          </div>
          <button onClick={() => setModal("cart")} style={{ color: C.red, fontFamily: PP, fontSize: 13, fontWeight: 700, background: "transparent", border: "none", cursor: "pointer" }}>View All →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 17, maxWidth: 1200, margin: "0 auto" }}>
          {PRODUCTS.map((p, i) => (
            <div key={i} style={{ border: "1px solid #eee", borderRadius: 9, overflow: "hidden", background: "#fff", transition: "transform 0.3s, box-shadow 0.3s", transform: hoverProd === i ? "translateY(-5px)" : "none", boxShadow: hoverProd === i ? "0 12px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.06)" }}
              onMouseEnter={() => setHoverProd(i)} onMouseLeave={() => setHoverProd(null)}>
              <div style={{ position: "relative", height: 178, overflow: "hidden" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s", transform: hoverProd === i ? "scale(1.06)" : "scale(1)" }} loading="lazy" />
                <span style={{ position: "absolute", top: 9, right: 9, background: C.gold, color: C.dark, fontFamily: PP, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>POPULAR</span>
              </div>
              <div style={{ padding: 15 }}>
                <div style={{ fontFamily: PP, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.name}</div>
                <div style={{ color: "#888", fontSize: 11, lineHeight: 1.5, marginBottom: 8, fontFamily: PP }}>{p.spec}</div>
                <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                  <span style={{ background: "#E8F5E9", color: "#2E7D32", fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 3, fontFamily: PP }}>{p.days}</span>
                  <span style={{ background: "#FFF3E0", color: C.saffron, fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 3, fontFamily: PP }}>GST Incl.</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: PF, color: C.red, fontSize: 18, fontWeight: 700 }}>From {p.price}</span>
                  <button onClick={() => setModal("cart")} style={{ background: C.red, color: "#fff", border: "none", padding: "7px 16px", borderRadius: 5, cursor: "pointer", fontFamily: PP, fontSize: 12, fontWeight: 600 }}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S8 — WEDDING INVITATIONS */}
      <div id="wedding-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 460 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {[IMG.weddingInvite1, IMG.weddingInvite2, IMG.weddingInvite3, IMG.weddingCeremony].map((src, i) => (
            <img key={i} src={src} alt="Wedding invitation" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          ))}
        </div>
        <div style={{ background: C.maroon, padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ color: C.gold, fontFamily: PP, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 8 }}>WEDDING SEASON SPECIAL</div>
          <div style={{ fontFamily: NT, color: C.gold, fontSize: 18, marginBottom: 10 }}>திருமண சீசன் ஆஃபர்</div>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 26, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>Beautiful Wedding Invitations — For Tamil Nadu Families</h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 13, lineHeight: 1.6, marginBottom: 20, fontFamily: PP }}>From traditional Tamil-style shaadi invitations to modern minimalist cards — Gloss, Matt, Spot UV and Embossed finishes on 300 GSM premium art board.</p>
          {[{ img: IMG.weddingInvite1, name: "Gloss Lamination", price: "From ₹599" }, { img: IMG.weddingInvite2, name: "Matt Lamination", price: "From ₹599" }, { img: IMG.weddingInvite3, name: "Premium Spot UV", price: "From ₹999" }].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 10 }}>
              <img src={w.img} alt={w.name} style={{ width: 56, height: 40, borderRadius: 5, border: "2px solid rgba(255,255,255,0.4)", objectFit: "cover", display: "block" }} loading="lazy" />
              <div>
                <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13 }}>{w.name}</div>
                <div style={{ color: C.gold, fontFamily: PP, fontSize: 12 }}>{w.price}</div>
              </div>
            </div>
          ))}
          <button onClick={() => setModal("cart")} style={{ display: "inline-block", marginTop: 12, background: C.gold, color: C.dark, fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "12px 28px", borderRadius: 30, alignSelf: "flex-start", border: "none", cursor: "pointer" }}>Order Wedding Cards →</button>
        </div>
      </div>

      {/* Stationery / Envelopes / Brochures / Stickers / Posters anchor points */}
      <div id="stationery" />
      <div id="envelopes" />
      <div id="brochures" />
      <div id="stickers" />
      <div id="posters" />

      {/* S9 — HOW TO ORDER */}
      <div style={{ background: C.ivory, padding: "56px 36px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ fontFamily: NT, color: C.red, fontSize: 16 }}>ஆர்டர் எப்படி செய்வது?</div>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 30, color: C.dark, margin: "4px 0 10px" }}>Simple 4-Step Process</h2>
          <div style={{ width: 50, height: 4, borderRadius: 2, background: `linear-gradient(90deg,${C.red},${C.gold})`, margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 13, maxWidth: 1200, margin: "0 auto" }}>
          {STEPS.map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              <img src={s.img} alt={s.title} style={{ width: "100%", height: 165, objectFit: "cover", display: "block" }} loading="lazy" />
              <div style={{ background: s.color, padding: "8px 12px", textAlign: "center" }}>
                <span style={{ fontFamily: NT, fontSize: 11, color: s.darkText ? C.dark : "#fff", marginRight: 6 }}>{s.badge}</span>
                <span style={{ fontFamily: PP, fontSize: 12, fontWeight: 700, color: s.darkText ? C.dark : "#fff" }}>{s.title}</span>
              </div>
              <div style={{ padding: 14 }}>
                <h4 style={{ fontFamily: PF, fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{s.title}</h4>
                <div style={{ fontFamily: NT, fontSize: 11, color: "#888", marginBottom: 6 }}>{s.tamil}</div>
                <p style={{ fontFamily: PP, fontSize: 12, color: "#555", lineHeight: 1.5, marginBottom: 10 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 4 }}>
                  {s.thumbs.map((t, ti) => <img key={ti} src={t} alt="Step detail" style={{ width: 40, height: 28, borderRadius: 3, objectFit: "cover", display: "block" }} loading="lazy" />)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderRadius: 10, overflow: "hidden", height: 155, marginTop: 26, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={IMG.pressWide} alt="Printing factory" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ fontFamily: PF, color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Ready to print? Get your quote today.</div>
            <button onClick={() => scrollTo("contact")} style={{ background: C.gold, color: C.dark, fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "10px 28px", borderRadius: 30, border: "none", cursor: "pointer" }}>Start Your Order Now</button>
          </div>
        </div>
      </div>

      {/* S10 — PARALLAX DIVIDER */}
      <div style={{ height: 370, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <img src={IMG.pressWide} alt="Printing press factory" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,rgba(183,28,28,0.88),rgba(249,168,37,0.72))` }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px" }}>
          <div style={{ fontFamily: NT, color: "rgba(255,255,255,0.9)", fontSize: 22, marginBottom: 8 }}>தரம் • வேகம் • நம்பகத்தன்மை</div>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 42, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>Quality. Speed. Trust.</h2>
          <p style={{ fontFamily: PP, color: "rgba(255,255,255,0.85)", fontSize: 15, marginBottom: 22, maxWidth: 500, margin: "0 auto 22px" }}>Super Printers — serving Chennai's businesses, designers and families for over 35 years.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {[{ src: IMG.glossCard, label: "Visiting Cards" }, { src: IMG.weddingInvite1, label: "Wedding Cards" }, { src: IMG.letterhead, label: "Stationery" }].map((t, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img src={t.src} alt={t.label} style={{ width: 130, height: 85, borderRadius: 10, border: "2px solid rgba(255,255,255,0.5)", objectFit: "cover", display: "block" }} loading="lazy" />
                <div style={{ color: "#fff", fontFamily: PP, fontSize: 11, marginTop: 5 }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* S11 — ABOUT US */}
      <div id="about" style={{ background: "#fff", padding: "56px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "44% 56%", gap: 38, maxWidth: 1200, margin: "0 auto", alignItems: "start" }}>
          <div>
            <img src={IMG.hero} alt="Super Printers workshop" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 16, display: "block", boxShadow: `0 0 0 6px ${C.red}, 0 0 0 12px ${C.gold}` }} loading="lazy" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
              <img src={IMG.workshop} alt="Workshop view" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, display: "block" }} loading="lazy" />
              <img src={IMG.inkPress} alt="Ink and press" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, display: "block" }} loading="lazy" />
            </div>
          </div>
          <div>
            <div style={{ color: C.gold, fontFamily: PP, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>எங்களைப் பற்றி • OUR STORY</div>
            <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 30, color: C.dark, marginBottom: 16 }}>Chennai's Printing Legacy — Since 1989</h2>
            <div style={{ overflow: "hidden", marginBottom: 14 }}>
              <img src={IMG.printedStack} alt="Printed materials" style={{ float: "right", width: 130, height: 90, borderRadius: 7, objectFit: "cover", margin: "0 0 10px 13px", display: "block" }} loading="lazy" />
              <p style={{ fontFamily: PP, fontSize: 13, color: "#444", lineHeight: 1.7 }}>Super Printers was founded in 1989 as a small family printing press in Chennai. Over 35 years we have grown into a full-service printing house — but we have never lost the personal care and craftsmanship of a family business that knows every client by name.</p>
            </div>
            <div style={{ overflow: "hidden", marginBottom: 14 }}>
              <img src={IMG.brochures} alt="Printed brochures" style={{ float: "left", width: 120, height: 84, borderRadius: 7, objectFit: "cover", margin: "0 13px 10px 0", display: "block" }} loading="lazy" />
              <p style={{ fontFamily: PP, fontSize: 13, color: "#444", lineHeight: 1.7 }}>From a single offset press to a complete facility offering digital printing, large format, lamination and binding — we have grown with Chennai's businesses, wedding families and creative professionals for three decades.</p>
            </div>
            <div style={{ clear: "both" }} />
            {[
              { c: C.red, t: "State-of-the-art offset and digital presses" },
              { c: C.gold, t: "35+ years of printing excellence in Chennai" },
              { c: C.teal, t: "10,000+ satisfied clients across Tamil Nadu" },
              { c: C.saffron, t: "Fast delivery — 1 to 4 business days" },
            ].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{ width: 4, height: 26, borderRadius: 2, background: f.c, flexShrink: 0 }} />
                <span style={{ fontFamily: PP, fontSize: 13, color: "#444" }}>{f.t}</span>
              </div>
            ))}
            <button onClick={() => scrollTo("contact")} style={{ display: "inline-block", marginTop: 14, border: `2px solid ${C.red}`, color: C.red, fontFamily: PP, fontWeight: 600, fontSize: 13, padding: "10px 24px", borderRadius: 30, background: "transparent", cursor: "pointer" }}>Learn More About Us →</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4, marginTop: 36, borderRadius: 9, overflow: "hidden", maxWidth: 1200, margin: "36px auto 0" }}>
          {aboutImages.map((ai, i) => (
            <div key={i} style={{ position: "relative", height: 160 }}>
              <img src={ai.src} alt={ai.label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(0,0,0,0.62)", padding: "7px 11px" }}>
                <span style={{ color: "#fff", fontFamily: PP, fontSize: 12, fontWeight: 700 }}>{ai.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S12 — TESTIMONIALS */}
      <div style={{ display: "grid", gridTemplateColumns: "38% 62%", minHeight: 400 }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={IMG.hero} alt="Super Printers press" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(183,28,28,0.82)" }} />
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", padding: 30 }}>
            <h2 style={{ fontFamily: PF, fontWeight: 700, fontStyle: "italic", fontSize: 34, color: "#fff", textAlign: "center", marginBottom: 8 }}>What Our Clients Say</h2>
            <div style={{ fontFamily: NT, color: "rgba(255,255,255,0.7)", fontSize: 14 }}>வாடிக்கையாளர் கருத்துக்கள்</div>
          </div>
        </div>
        <div style={{ background: C.ivory, padding: "38px 42px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ display: testIdx === i ? "block" : "none", background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.08)", borderTop: `4px solid ${t.border}`, maxWidth: 440, width: "100%" }}>
              <img src={t.img} alt={t.name} style={{ width: "100%", height: 128, objectFit: "cover", display: "block" }} loading="lazy" />
              <div style={{ padding: 18 }}>
                <div style={{ color: C.gold, fontSize: 18, marginBottom: 8 }}>★★★★★</div>
                <p style={{ fontFamily: PP, fontSize: 13, fontStyle: "italic", color: "#444", lineHeight: 1.6, marginBottom: 12 }}>{t.quote}</p>
                <div style={{ fontFamily: PP, fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontFamily: PP, fontSize: 12, color: "#888" }}>{t.role}</div>
              </div>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 16 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setTestIdx(i)} style={{ width: testIdx === i ? 20 : 10, height: 10, borderRadius: 5, background: testIdx === i ? C.red : "#ccc", border: "none", cursor: "pointer", transition: "width 0.3s" }} />
            ))}
          </div>
        </div>
      </div>

      {/* S13 — PRINT GALLERY */}
      <div style={{ background: "#fff", padding: "56px 36px" }}>
        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 30, color: C.dark, marginBottom: 4 }}>Our Print Gallery</h2>
          <div style={{ fontFamily: NT, color: "#888", fontSize: 13 }}>எங்கள் படைப்புகள் | Every product printed at Super Printers, Chennai</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 6, marginBottom: 22 }}>
          {GAL_FILTERS.map(f => (
            <button key={f} onClick={() => setGalFilter(f)} style={{ background: galFilter === f ? C.red : "#f0f0f0", color: galFilter === f ? "#fff" : "#555", border: "none", padding: "7px 16px", borderRadius: 20, cursor: "pointer", fontFamily: PP, fontSize: 12, fontWeight: 600, transition: "all 0.2s" }}>{f}</button>
          ))}
        </div>
        <div style={{ columnCount: 4, columnGap: 7, maxWidth: 1200, margin: "0 auto" }}>
          {filtered.map((item, i) => (
            <div key={`${item.label}-${i}`} style={{ breakInside: "avoid", marginBottom: 7, borderRadius: 8, overflow: "hidden", position: "relative", cursor: "pointer" }}
              onMouseEnter={() => setHoverGal(i)} onMouseLeave={() => setHoverGal(null)}>
              <img src={item.img} alt={item.label} style={{ width: "100%", display: "block", objectFit: "cover" }} loading="lazy" />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)", opacity: hoverGal === i ? 1 : 0, transition: "opacity 0.3s", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
                <span style={{ color: C.gold, fontFamily: PP, fontSize: 12 }}>View →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S14 — WHY CHOOSE US */}
      <div style={{ background: C.dark, padding: "56px 36px" }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 30, color: "#fff", marginBottom: 4 }}>Why Tamil Nadu Chooses Super Printers</h2>
          <div style={{ fontFamily: NT, color: C.gold, fontSize: 14 }}>ஏன் சுப்பர் பிரிண்டர்ஸ்?</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 16, maxWidth: 1200, margin: "0 auto" }}>
          {WHY.map((w, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 4px 22px rgba(0,0,0,0.22)" }}>
              <img src={w.img} alt={w.title} style={{ width: "100%", height: 168, objectFit: "cover", display: "block" }} loading="lazy" />
              <div style={{ background: w.color, padding: "10px 14px" }}>
                <div style={{ fontFamily: PP, fontWeight: 700, fontSize: 13, color: w.darkText ? C.dark : "#fff" }}>{w.title}</div>
                <div style={{ fontFamily: NT, fontSize: 11, color: w.darkText ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)" }}>{w.tamil}</div>
              </div>
              <div style={{ padding: 13 }}>
                <p style={{ fontFamily: PP, fontSize: 12, color: "#666", lineHeight: 1.5, marginBottom: 10 }}>{w.body}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: PP, fontSize: 11, fontWeight: 700, color: C.red }}>{w.extra}</span>
                  <img src={w.thumb} alt={w.title} style={{ width: 46, height: 33, borderRadius: 4, objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S15 — CONTACT */}
      <div id="contact" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 520 }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={IMG.workshop} alt="Super Printers workshop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(183,28,28,0.82)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <div style={{ fontFamily: NT, color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 6 }}>எங்களை தொடர்பு கொள்ளுங்கள்</div>
            <h2 style={{ fontFamily: PF, fontWeight: 700, fontSize: 28, color: "#fff", marginBottom: 18 }}>Get in Touch with Super Printers</h2>
            {[
              { text: "98/4 Chavadi Street, Pallavaram, Chennai – 600 043", label: "Address" },
              { text: "+91-44-22480847", label: "Phone" },
              { text: "info@superprinters.in", label: "Email" },
              { text: "Mon–Sat: 9AM–7PM | Sunday: Closed", label: "Hours" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 8, background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#fff", fontFamily: PP, fontSize: 11, fontWeight: 700, textAlign: "center" }}>{r.label}</span>
                </div>
                <span style={{ color: "rgba(255,255,255,0.88)", fontFamily: PP, fontSize: 13 }}>{r.text}</span>
              </div>
            ))}
            <a href="https://wa.me/914422480847" style={{ display: "inline-block", marginTop: 14, background: C.wa, color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "10px 22px", borderRadius: 30, alignSelf: "flex-start" }}>WhatsApp மூலம் ஆர்டர் செய்யுங்கள்</a>
            {/* Google Maps */}
            <div style={{ marginTop: 16, borderRadius: 10, overflow: "hidden", border: "2px solid rgba(255,255,255,0.3)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.1491!3d12.9675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzAzLjAiTiA4MMKwMDgnNTYuOCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="150" style={{ border: 0, display: "block" }} loading="lazy" title="Super Printers Location"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div style={{ background: C.ivory, padding: "46px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: PF, fontSize: 23, color: C.red, marginBottom: 4 }}>விலைப்பட்டியல் பெறுங்கள்</h2>
          <p style={{ fontFamily: PP, fontSize: 13, color: "#888", marginBottom: 12 }}>Get a Free Quote — We respond within 2 hours</p>
          <img src={IMG.printedBrochures} alt="Colorful printed brochures" style={{ width: "100%", height: 80, borderRadius: 7, objectFit: "cover", display: "block", marginBottom: 16 }} loading="lazy" />
          {["பெயர் (Name)", "Phone (+91)", "Email"].map(ph => (
            <input key={ph} type="text" placeholder={ph} style={{ border: "1.5px solid #ddd", borderRadius: 5, padding: "10px 12px", marginBottom: 9, fontSize: 13, fontFamily: PP, width: "100%", outline: "none" }} />
          ))}
          <select style={{ border: "1.5px solid #ddd", borderRadius: 5, padding: "10px 12px", marginBottom: 9, fontSize: 13, fontFamily: PP, width: "100%", background: "#fff" }}>
            <option>Select Service</option>
            {["Visiting Cards", "Wedding Invitations", "Letterheads", "Envelopes", "Stickers", "Brochures & Flyers", "Posters", "Lamination", "Other"].map(s => <option key={s}>{s}</option>)}
          </select>
          <div style={{ display: "flex", gap: 6, marginBottom: 9 }}>
            {[IMG.glossCard, IMG.weddingInvite1, IMG.letterhead].map((src, i) => (
              <img key={i} src={src} alt="Service preview" style={{ flex: 1, height: 42, borderRadius: 5, objectFit: "cover", display: "block" }} loading="lazy" />
            ))}
          </div>
          <textarea rows={3} placeholder="உங்கள் தேவைகளை விவரிக்கவும் (Describe your requirements)" style={{ border: "1.5px solid #ddd", borderRadius: 5, padding: "10px 12px", marginBottom: 12, fontSize: 13, fontFamily: PP, width: "100%", resize: "vertical", outline: "none" }} />
          <button style={{ width: "100%", padding: "12px", background: `linear-gradient(90deg,${C.red},${C.saffron})`, color: "#fff", border: "none", borderRadius: 7, fontFamily: PP, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>ஆர்டர் செய்யுங்கள் | Send Enquiry</button>
        </div>
      </div>

      {/* S16 — FOOTER */}
      <footer style={{ background: C.dark }}>
        <div style={{ height: 5, background: `linear-gradient(90deg,${C.red},${C.saffron},${C.gold},${C.teal},${C.red})` }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 26, padding: "42px 36px 22px", maxWidth: 1200, margin: "0 auto" }}>
          <div>
            <div style={{ fontFamily: PF, color: C.gold, fontSize: 20, fontWeight: 700 }}>Super Printers</div>
            <div style={{ fontFamily: NT, color: C.gold, fontSize: 12 }}>சுப்பர் பிரிண்டர்ஸ்</div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: PP, marginTop: 6, marginBottom: 10 }}>Chennai's printing press since 1989.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
              {[IMG.glossCard, IMG.mattCard, IMG.weddingInvite1, IMG.weddingInvite2, IMG.letterhead, IMG.envelopes].map((src, i) => (
                <img key={i} src={src} alt="Product sample" style={{ width: "100%", height: 52, borderRadius: 4, objectFit: "cover", display: "block" }} loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Quick Links</div>
            {[{ label: "Home", anchor: "top" }, { label: "Products", anchor: "products" }, { label: "How to Order", anchor: "top" }, { label: "About Us", anchor: "about" }, { label: "Contact", anchor: "contact" }].map(l => (
              <button key={l.label} onClick={() => scrollTo(l.anchor)} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontFamily: PP, fontSize: 12, padding: "4px 0", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>{l.label}</button>
            ))}
          </div>
          <div>
            <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Our Products</div>
            {["Visiting Cards", "Wedding Invitations", "Letterheads", "Envelopes", "Stickers", "Brochures & Flyers", "Posters", "Lamination"].map(l => (
              <span key={l} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontFamily: PP, fontSize: 12, padding: "4px 0" }}>{l}</span>
            ))}
          </div>
          <div>
            <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Get in Touch</div>
            {["98/4 Chavadi Street, Pallavaram, Chennai – 600 043", "+91-44-22480847", "info@superprinters.in", "Mon–Sat: 9AM–7PM"].map((t, i) => (
              <p key={i} style={{ color: "rgba(255,255,255,0.5)", fontFamily: PP, fontSize: 12, margin: "4px 0" }}>{t}</p>
            ))}
            <img src={IMG.delivery} alt="Delivery service" style={{ width: "100%", height: 90, borderRadius: 7, objectFit: "cover", display: "block", marginTop: 10 }} loading="lazy" />
          </div>
        </div>
        <div style={{ borderTop: "1px solid #2a2a2a", padding: "12px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", maxWidth: 1200, margin: "0 auto" }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: PP, fontSize: 12 }}>© 2026 Super Printers, Chennai. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: 6 }}>
            {[IMG.inkRollers, IMG.glossCard, IMG.delivery, IMG.pressTools].map((src, i) => (
              <img key={i} src={src} alt="Product" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "1px solid rgba(255,255,255,0.15)", display: "block" }} loading="lazy" />
            ))}
          </div>
        </div>
      </footer>

      {/* FLOATING — WhatsApp */}
      <a href="https://wa.me/914422480847" style={{ position: "fixed", bottom: 24, right: 24, width: 54, height: 54, borderRadius: "50%", background: C.wa, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, overflow: "hidden", animation: "waPulse 2s infinite", textDecoration: "none" }}>
        <img src={IMG.delivery} alt="WhatsApp" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.55)", display: "block" }} loading="lazy" />
        <span style={{ position: "relative", color: "#fff", fontSize: 20, zIndex: 1 }}>WA</span>
      </a>

      {/* FLOATING — Scroll to top */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ position: "fixed", bottom: 24, left: 24, width: 44, height: 44, borderRadius: "50%", background: C.red, border: "none", overflow: "hidden", cursor: "pointer", zIndex: 9999, boxShadow: "0 4px 14px rgba(183,28,28,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={IMG.pressTools} alt="Scroll to top" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4)", display: "block" }} loading="lazy" />
          <span style={{ color: "#fff", fontSize: 15, fontWeight: 700, position: "relative", zIndex: 1 }}>↑</span>
        </button>
      )}
    </div>
  );
};

export default Index;
