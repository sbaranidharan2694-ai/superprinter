import { useState, useEffect, useCallback } from "react";

const IMG = {
  hero: "https://images.pexels.com/photos/6621000/pexels-photo-6621000.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
  pressWide: "https://images.pexels.com/photos/19316517/pexels-photo-19316517.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800",
  inkRollers: "https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  pressTools: "https://images.pexels.com/photos/4140923/pexels-photo-4140923.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  digital: "https://images.pexels.com/photos/17536002/pexels-photo-17536002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  delivery: "https://images.pexels.com/photos/6169002/pexels-photo-6169002.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  workshop: "https://images.pexels.com/photos/3966277/pexels-photo-3966277.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  abstract: "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  printedStack: "https://images.pexels.com/photos/6209791/pexels-photo-6209791.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  inkPress: "https://images.pexels.com/photos/300860/pexels-photo-300860.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  vc1: "https://images.pexels.com/photos/4466176/pexels-photo-4466176.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  vc2: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  vc3: "https://images.pexels.com/photos/269843/pexels-photo-269843.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  vc4: "https://images.pexels.com/photos/4466175/pexels-photo-4466175.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  wed1: "https://images.pexels.com/photos/18748938/pexels-photo-18748938.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  wed2: "https://images.pexels.com/photos/28845664/pexels-photo-28845664.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  wed3: "https://images.pexels.com/photos/7162700/pexels-photo-7162700.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  wedCeremony: "https://images.pexels.com/photos/30171219/pexels-photo-30171219.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800",
  stationery1: "https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  stationery2: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  paperStack: "https://images.pexels.com/photos/6209791/pexels-photo-6209791.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  colorSwatches: "https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  parcel: "https://images.pexels.com/photos/4440796/pexels-photo-4440796.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  courier: "https://images.pexels.com/photos/7843999/pexels-photo-7843999.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  designer: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
  rainbow: "https://images.pexels.com/photos/1070536/pexels-photo-1070536.jpeg?auto=compress&cs=tinysrgb&w=900&h=700",
};

const C = { red: "#B71C1C", maroon: "#7B1818", gold: "#F9A825", saffron: "#E65100", teal: "#00695C", ivory: "#FFF8F0", dark: "#1A1A1A", wa: "#25D366" };
const PF = "'Playfair Display',serif";
const PP = "'Poppins',sans-serif";
const NT = "'Noto Sans Tamil',sans-serif";

const SLIDES = [
  { bg: IMG.hero, overlay: "rgba(183,28,28,0.78)", badge: "TAMIL NADU'S TRUSTED PRESS", h1a: "Premium Offset", h1b: "Printing for Every Need", body: "Business cards, wedding invitations, letterheads and more — printed with precision since 1989.", btn1: "Order Now →", btn2: "Download Rate Card", rightImg: IMG.vc1, thumbs: [IMG.vc1, IMG.wed1, IMG.stationery1, IMG.paperStack, IMG.vc3] },
  { bg: IMG.wedCeremony, overlay: "rgba(100,18,18,0.80)", badge: "WEDDING SEASON SPECIAL", h1a: "Beautiful Wedding", h1b: "Invitations", tamil: "திருமண அழைப்பிதழ்கள்", body: "Gloss, Matt, Spot UV & Premium finishes on 300 GSM Art Board.", btn1: "See Designs →", rightImg: IMG.wed1, thumbs: [] },
  { bg: IMG.pressWide, overlay: "rgba(20,20,20,0.76)", badge: "1 TO 4 BUSINESS DAYS", h1a: "Order Online.", h1b: "Delivered Fast.", body: "We deliver across Chennai, Coimbatore, and all Tamil Nadu.", btn1: "Order Now →", btn2: "Track Order", rightImg: IMG.courier, thumbs: [] },
];

const TRUST = [
  { img: IMG.inkRollers, num: "14", label: "National Awards", sub: "Excellence in Printing" },
  { img: IMG.delivery, num: "1–4 Day", label: "Delivery", sub: "Pan Tamil Nadu" },
  { img: IMG.pressTools, num: "35 Yrs", label: "Experience", sub: "Since 1989" },
  { img: IMG.digital, num: "10-Color", label: "Offset Press", sub: "First in Tamil Nadu" },
  { img: IMG.workshop, num: "10,000+", label: "Happy Clients", sub: "Across India" },
];

const CATEGORIES = [
  { name: "Visiting Cards", sub: "Gloss • Matt • Spot UV • Velvet", color: "#B71C1C", img: IMG.vc1 },
  { name: "Wedding Invitations", sub: "300 GSM Art Board • Premium", color: "#E65100", img: IMG.wed1 },
  { name: "Letterheads", sub: "80 GSM • 100 GSM Bond", color: "#00695C", img: IMG.stationery1 },
  { name: "Envelopes & Covers", sub: "80 • 100 • 130 • 170 GSM", color: "#7B1818", img: IMG.paperStack },
  { name: "Stickers", sub: "Mirror Coated • 20×30 inch", color: "#F9A825", img: IMG.colorSwatches, darkText: true },
  { name: "Special Cards", sub: "Velvet • UV • Foil • Die Cut", color: "#B71C1C", img: IMG.vc2 },
  { name: "Posters", sub: "80 GSM Maplitho • All Sizes", color: "#E65100", img: IMG.stationery2 },
  { name: "Lamination", sub: "Gloss • Matt • A4 to Crown", color: "#00695C", img: IMG.rainbow },
];

const PRODUCTS = [
  { name: "Gloss Visiting Card", spec: "300 GSM | 90×53mm | Gloss Lam", days: "1-2 Days", price: "₹299", img: IMG.vc1 },
  { name: "Matt Visiting Card", spec: "300 GSM | 90×53mm | Matt Lam", days: "1-2 Days", price: "₹299", img: IMG.vc2 },
  { name: "Spot UV Card", spec: "300 GSM | 90×53mm | Spot UV", days: "6-10 Days", price: "₹499", img: IMG.vc3 },
  { name: "Velvet Lamination", spec: "400 GSM | 90×53mm | Velvet Lam", days: "10-15 Days", price: "₹799", img: IMG.vc4 },
  { name: "Synthetic Card", spec: "Non-Tearable Paper | 90×53mm", days: "2-4 Days", price: "₹499", img: IMG.vc1 },
  { name: "Velvet + Gold Foil", spec: "400 GSM | Velvet + Foil Stamping", days: "10-15 Days", price: "₹999", img: IMG.vc2 },
];

const STEPS = [
  { img: IMG.vc1, color: C.red, badge: "படி 1", title: "Choose Product", tamil: "தயாரிப்பை தேர்ந்தெடுங்கள்", desc: "Browse visiting cards, wedding invitations, letterheads and more.", thumbs: [IMG.vc2, IMG.wed1, IMG.stationery1] },
  { img: IMG.designer, color: C.saffron, badge: "படி 2", title: "Upload Your Design", tamil: "டிசைனை அப்லோட் செய்யுங்கள்", desc: "Upload print-ready PDF or CDR. No design? Our team helps create one.", thumbs: [IMG.vc3, IMG.wed2, IMG.colorSwatches] },
  { img: IMG.inkRollers, color: C.teal, badge: "படி 3", title: "We Print with Precision", tamil: "துல்லியமாக அச்சிடுகிறோம்", desc: "Quality checked on offset and digital presses. 14 national awards for excellence.", thumbs: [IMG.pressTools, IMG.inkPress, IMG.printedStack] },
  { img: IMG.parcel, color: C.gold, badge: "படி 4", title: "Delivered to You", tamil: "உங்கள் வீட்டிற்கே டெலிவரி", desc: "Pan Tamil Nadu delivery in 1–4 business days. Same-day pickup in Chennai.", thumbs: [IMG.delivery, IMG.courier, IMG.parcel], darkText: true },
];

const TESTIMONIALS = [
  { img: IMG.vc1, border: C.red, name: "Senthil Kumar", role: "Business Owner, T. Nagar", quote: "Super Printers-ல் visiting card-கள் print செய்தோம். Quality மிகவும் அருமை. Quick delivery. Thank you Super Printers!" },
  { img: IMG.wed2, border: C.saffron, name: "Priya Krishnan", role: "Bride, Adyar, Chennai", quote: "Wedding invitation-கள் மிகவும் beautiful-ஆக வந்தது. Spot UV finish excellent! வீட்டில் எல்லாரும் appreciate பண்ணினார்கள்." },
  { img: IMG.stationery1, border: C.teal, name: "Suresh & Assoc.", role: "Advocate, Madurai", quote: "10 years-ஆக Super Printers-ல் letterhead மற்றும் envelope print செய்கிறோம். Quality consistent. Price reasonable." },
  { img: IMG.delivery, border: C.gold, name: "Ramesh Velayutham", role: "Event Coordinator, Coimbatore", quote: "Event-க்கு same-day flyers தேவைப்பட்டது. 4 மணி நேரத்தில் deliver பண்ணினார்கள். Excellent service!" },
];

type GalCat = "All" | "Visiting Cards" | "Wedding Cards" | "Stationery" | "Envelopes" | "Stickers" | "Posters" | "Press";
const GALLERY: { img: string; label: string; cat: GalCat }[] = [
  { img: IMG.vc1, label: "Gloss Visiting Card", cat: "Visiting Cards" },
  { img: IMG.wed1, label: "Wedding Invitation", cat: "Wedding Cards" },
  { img: IMG.inkRollers, label: "Offset Press", cat: "Press" },
  { img: IMG.stationery1, label: "Letterhead Set", cat: "Stationery" },
  { img: IMG.vc2, label: "Matt Visiting Card", cat: "Visiting Cards" },
  { img: IMG.paperStack, label: "Envelope / Cover", cat: "Envelopes" },
  { img: IMG.pressTools, label: "Press Tools", cat: "Press" },
  { img: IMG.colorSwatches, label: "Sticker Print", cat: "Stickers" },
  { img: IMG.vc3, label: "Spot UV Card", cat: "Visiting Cards" },
  { img: IMG.wed2, label: "Wedding Matt", cat: "Wedding Cards" },
  { img: IMG.workshop, label: "Workshop Floor", cat: "Press" },
  { img: IMG.stationery2, label: "Brochure", cat: "Posters" },
  { img: IMG.vc4, label: "Velvet Foil Card", cat: "Visiting Cards" },
  { img: IMG.printedStack, label: "Printed Output", cat: "Envelopes" },
  { img: IMG.rainbow, label: "Color Print", cat: "Stickers" },
  { img: IMG.digital, label: "Digital Printer", cat: "Press" },
  { img: IMG.wed3, label: "Premium Wedding Card", cat: "Wedding Cards" },
  { img: IMG.inkPress, label: "Printing in Progress", cat: "Press" },
  { img: IMG.abstract, label: "Creative Print Art", cat: "Press" },
  { img: IMG.parcel, label: "Packaged Order", cat: "Press" },
  { img: IMG.designer, label: "Design Studio", cat: "Press" },
  { img: IMG.courier, label: "Fast Delivery", cat: "Press" },
];

const WHY = [
  { img: IMG.pressTools, color: C.red, title: "35 Years of Excellence", tamil: "35 ஆண்டுகள் சிறப்பு", body: "Three decades of offset printing excellence. State-of-the-art presses.", extra: "14 National Awards", thumb: IMG.abstract },
  { img: IMG.delivery, color: C.saffron, title: "Fast Pan-TN Delivery", tamil: "வேகமான டெலிவரி", body: "1–4 business days across Tamil Nadu. Same-day pickup from Chennai press.", extra: "Chennai | CBE | Madurai", thumb: IMG.courier },
  { img: IMG.inkRollers, color: C.teal, title: "Quality Guaranteed", tamil: "தரம் உறுதி", body: "Multi-point quality checks on every job. Colour accurate, sharp registration.", extra: "GST Inclusive Pricing", thumb: IMG.colorSwatches },
  { img: IMG.workshop, color: C.gold, title: "Competitive Pricing", tamil: "சிறந்த விலை", body: "Transparent pricing. Bulk discounts for DTP operators and resellers.", extra: "Rates from ₹199", thumb: IMG.printedStack, darkText: true },
];

const NAV_LINKS = ["Home", "Visiting Cards", "Wedding Cards", "Stationery", "Envelopes", "Stickers", "Posters", "About", "Contact"];
const GAL_FILTERS: GalCat[] = ["All", "Visiting Cards", "Wedding Cards", "Stationery", "Envelopes", "Stickers", "Posters", "Press"];

const TICKER_TEXT = "விசிட்டிங் கார்டு  •  Wedding Cards  •  Letterheads  •  Envelopes  •  Stickers  •  Brochures  |  Fast Delivery across Tamil Nadu  |  14 National Awards for Excellence  |  GST Inclusive Pricing     ";

const Index = () => {
  const [slide, setSlide] = useState(0);
  const [testIdx, setTestIdx] = useState(0);
  const [galFilter, setGalFilter] = useState<GalCat>("All");
  const [scrolled, setScrolled] = useState(false);
  const [hoverCat, setHoverCat] = useState<number | null>(null);
  const [hoverProd, setHoverProd] = useState<number | null>(null);
  const [hoverGal, setHoverGal] = useState<number | null>(null);
  const [hoverNav, setHoverNav] = useState<number | null>(null);

  useEffect(() => {
    const si = setInterval(() => setSlide(p => (p + 1) % 3), 5000);
    const ti = setInterval(() => setTestIdx(p => (p + 1) % 4), 4500);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => { clearInterval(si); clearInterval(ti); window.removeEventListener("scroll", onScroll); };
  }, []);

  const filtered = galFilter === "All" ? GALLERY : GALLERY.filter(g => g.cat === galFilter);

  const aboutImages = [
    { src: IMG.inkRollers, label: "Offset Press" },
    { src: IMG.vc1, label: "Visiting Cards" },
    { src: IMG.wed1, label: "Wedding Cards" },
    { src: IMG.stationery1, label: "Stationery" },
    { src: IMG.delivery, label: "Fast Delivery" },
  ];

  return (
    <div style={{ fontFamily: PP, color: C.dark, margin: 0, padding: 0 }}>
      <style>{`
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes waPulse{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}70%{box-shadow:0 0 0 14px rgba(37,211,102,0)}}
        .hero-anim{animation:fadeUp 0.65s ease both}
        *{box-sizing:border-box;margin:0;padding:0}
        a{text-decoration:none;color:inherit}
        input,select,textarea{font-family:'Poppins',sans-serif}
      `}</style>

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
        <div style={{ minWidth: 240, display: "flex", alignItems: "center", gap: 12 }}>
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
          <button style={{ background: "transparent", border: `1.5px solid ${C.red}`, color: C.red, padding: "8px 16px", borderRadius: 5, cursor: "pointer", fontFamily: PP, fontWeight: 600, fontSize: 12 }}>My Orders</button>
          <button style={{ background: C.red, color: "#fff", border: "none", padding: "8px 16px", borderRadius: 5, cursor: "pointer", fontFamily: PP, fontWeight: 600, fontSize: 12 }}>Get Quote</button>
        </div>
      </div>

      {/* S3 — STICKY NAV */}
      <nav style={{ background: C.red, position: "sticky", top: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px" }}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {NAV_LINKS.map((l, i) => (
            <a key={l} href="#" onMouseEnter={() => setHoverNav(i)} onMouseLeave={() => setHoverNav(null)}
              style={{ color: "#fff", fontFamily: PP, fontSize: 12, fontWeight: 500, padding: "13px 12px", background: hoverNav === i ? C.maroon : "transparent", transition: "background 0.2s" }}>{l}</a>
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
                    <a href="#" style={{ background: C.gold, color: C.dark, fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "12px 28px", borderRadius: 30 }}>{s.btn1}</a>
                    {s.btn2 && <a href="#" style={{ border: "2px solid #fff", color: "#fff", fontFamily: PP, fontWeight: 500, fontSize: 13, padding: "10px 24px", borderRadius: 30 }}>{s.btn2}</a>}
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
      <div style={{ background: C.ivory, padding: "56px 36px" }}>
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
              {/* Static label */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "18px 16px", background: "linear-gradient(transparent,rgba(0,0,0,0.75))", opacity: hoverCat === i ? 0 : 1, transition: "opacity 0.3s" }}>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 17, color: "#fff" }}>{cat.name}</div>
                <div style={{ fontFamily: PP, fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{cat.sub}</div>
              </div>
              {/* Hover overlay */}
              <div style={{ position: "absolute", inset: 0, background: cat.color, opacity: hoverCat === i ? 0.92 : 0, transition: "opacity 0.3s", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <div style={{ fontFamily: PF, fontWeight: 700, fontSize: 20, color: cat.darkText ? C.dark : "#fff", marginBottom: 6 }}>{cat.name}</div>
                <div style={{ fontFamily: PP, fontSize: 12, color: cat.darkText ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.8)", marginBottom: 14 }}>{cat.sub}</div>
                <span style={{ fontFamily: PP, fontWeight: 600, fontSize: 13, color: cat.darkText ? C.dark : "#fff", border: `2px solid ${cat.darkText ? C.dark : "#fff"}`, padding: "6px 18px", borderRadius: 20 }}>Shop Now →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S7 — VISITING CARDS SPOTLIGHT */}
      <div style={{ background: "#fff", padding: "56px 36px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 26, borderLeft: `5px solid ${C.red}`, paddingLeft: 16 }}>
          <div>
            <div style={{ fontFamily: NT, color: "#888", fontSize: 13 }}>விசிட்டிங் கார்டு</div>
            <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 26, color: C.dark, margin: 0 }}>Visiting Cards — Most Popular</h2>
          </div>
          <a href="#" style={{ color: C.red, fontFamily: PP, fontSize: 13, fontWeight: 700 }}>View All →</a>
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
                  <button style={{ background: C.red, color: "#fff", border: "none", padding: "7px 16px", borderRadius: 5, cursor: "pointer", fontFamily: PP, fontSize: 12, fontWeight: 600 }}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* S8 — WEDDING INVITATIONS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 460 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {[IMG.wed1, IMG.wed2, IMG.wed3, IMG.wedCeremony].map((src, i) => (
            <img key={i} src={src} alt="Wedding invitation" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          ))}
        </div>
        <div style={{ background: C.maroon, padding: "48px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ color: C.gold, fontFamily: PP, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 8 }}>WEDDING SEASON SPECIAL</div>
          <div style={{ fontFamily: NT, color: C.gold, fontSize: 18, marginBottom: 10 }}>திருமண சீசன் ஆஃபர்</div>
          <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 26, color: "#fff", lineHeight: 1.25, marginBottom: 14 }}>Beautiful Wedding Invitations — For Tamil Nadu Families</h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 13, lineHeight: 1.6, marginBottom: 20, fontFamily: PP }}>From traditional Tamil-style shaadi invitations to modern minimalist cards — Gloss, Matt, Spot UV and Embossed finishes on 300 GSM premium art board.</p>
          {[{ img: IMG.wed1, name: "Gloss Lamination", price: "From ₹599" }, { img: IMG.wed2, name: "Matt Lamination", price: "From ₹599" }, { img: IMG.wed3, name: "Premium Spot UV", price: "From ₹999" }].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 10 }}>
              <img src={w.img} alt={w.name} style={{ width: 56, height: 40, borderRadius: 5, border: "2px solid rgba(255,255,255,0.4)", objectFit: "cover", display: "block" }} loading="lazy" />
              <div>
                <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13 }}>{w.name}</div>
                <div style={{ color: C.gold, fontFamily: PP, fontSize: 12 }}>{w.price}</div>
              </div>
            </div>
          ))}
          <a href="#" style={{ display: "inline-block", marginTop: 12, background: C.gold, color: C.dark, fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "12px 28px", borderRadius: 30, alignSelf: "flex-start" }}>Order Wedding Cards →</a>
        </div>
      </div>

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
        {/* CTA Banner */}
        <div style={{ borderRadius: 10, overflow: "hidden", height: 155, marginTop: 26, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img src={IMG.pressWide} alt="Printing factory" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
          <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ fontFamily: PF, color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Ready to print? Get your quote today.</div>
            <a href="#" style={{ background: C.gold, color: C.dark, fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "10px 28px", borderRadius: 30 }}>Start Your Order Now</a>
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
            {[{ src: IMG.vc1, label: "Visiting Cards" }, { src: IMG.wed1, label: "Wedding Cards" }, { src: IMG.stationery1, label: "Stationery" }].map((t, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img src={t.src} alt={t.label} style={{ width: 130, height: 85, borderRadius: 10, border: "2px solid rgba(255,255,255,0.5)", objectFit: "cover", display: "block" }} loading="lazy" />
                <div style={{ color: "#fff", fontFamily: PP, fontSize: 11, marginTop: 5 }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* S11 — ABOUT US */}
      <div style={{ background: "#fff", padding: "56px 36px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "44% 56%", gap: 38, maxWidth: 1200, margin: "0 auto", alignItems: "start" }}>
          {/* Left images */}
          <div>
            <img src={IMG.hero} alt="Super Printers workshop" style={{ width: "100%", height: 400, objectFit: "cover", borderRadius: 16, display: "block", boxShadow: `0 0 0 6px ${C.red}, 0 0 0 12px ${C.gold}` }} loading="lazy" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
              <img src={IMG.workshop} alt="Workshop view" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, display: "block" }} loading="lazy" />
              <img src={IMG.inkPress} alt="Ink and press" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 12, display: "block" }} loading="lazy" />
            </div>
          </div>
          {/* Right text */}
          <div>
            <div style={{ color: C.gold, fontFamily: PP, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 8 }}>எங்களைப் பற்றி • OUR STORY</div>
            <h2 style={{ fontFamily: PF, fontWeight: 900, fontSize: 30, color: C.dark, marginBottom: 16 }}>Chennai's Printing Legacy — Since 1989</h2>
            <div style={{ overflow: "hidden", marginBottom: 14 }}>
              <img src={IMG.printedStack} alt="Printed materials" style={{ float: "right", width: 130, height: 90, borderRadius: 7, objectFit: "cover", margin: "0 0 10px 13px", display: "block" }} loading="lazy" />
              <p style={{ fontFamily: PP, fontSize: 13, color: "#444", lineHeight: 1.7 }}>Super Printers was founded in 1989 as a small family printing press in Chennai. Over 35 years we have grown into a full-service printing house — but we have never lost the personal care and craftsmanship of a family business that knows every client by name.</p>
            </div>
            <div style={{ overflow: "hidden", marginBottom: 14 }}>
              <img src={IMG.colorSwatches} alt="Color options" style={{ float: "left", width: 120, height: 84, borderRadius: 7, objectFit: "cover", margin: "0 13px 10px 0", display: "block" }} loading="lazy" />
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
            <a href="#" style={{ display: "inline-block", marginTop: 14, border: `2px solid ${C.red}`, color: C.red, fontFamily: PP, fontWeight: 600, fontSize: 13, padding: "10px 24px", borderRadius: 30 }}>Learn More About Us →</a>
          </div>
        </div>
        {/* 5-image bottom strip */}
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
            {[0, 1, 2, 3].map(i => (
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 520 }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img src={IMG.workshop} alt="Super Printers workshop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
          <div style={{ position: "absolute", inset: 0, background: "rgba(183,28,28,0.82)" }} />
          <div style={{ position: "relative", zIndex: 2, padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <div style={{ fontFamily: NT, color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 6 }}>எங்களை தொடர்பு கொள்ளுங்கள்</div>
            <h2 style={{ fontFamily: PF, fontWeight: 700, fontSize: 28, color: "#fff", marginBottom: 18 }}>Get in Touch with Super Printers</h2>
            {[
              { img: IMG.delivery, text: "98/4 Chavadi Street, Pallavaram, Chennai – 600 043" },
              { img: IMG.courier, text: "+91-44-22480847 / +91-98412 XXXXX" },
              { img: IMG.digital, text: "info@superprinters.in" },
              { img: IMG.workshop, text: "Mon–Sat: 9AM–7PM | Sunday: Closed" },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <img src={r.img} alt="Contact" style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", display: "block", border: "2px solid rgba(255,255,255,0.3)" }} loading="lazy" />
                <span style={{ color: "rgba(255,255,255,0.88)", fontFamily: PP, fontSize: 13 }}>{r.text}</span>
              </div>
            ))}
            <a href="https://wa.me/914422480847" style={{ display: "inline-block", marginTop: 14, background: C.wa, color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, padding: "10px 22px", borderRadius: 30, alignSelf: "flex-start" }}>WhatsApp மூலம் ஆர்டர் செய்யுங்கள்</a>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              {[IMG.vc1, IMG.wed1, IMG.stationery1, IMG.paperStack].map((src, i) => (
                <img key={i} src={src} alt="Product preview" style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.5)", display: "block" }} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: C.ivory, padding: "46px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: PF, fontSize: 23, color: C.red, marginBottom: 4 }}>விலைப்பட்டியல் பெறுங்கள்</h2>
          <p style={{ fontFamily: PP, fontSize: 13, color: "#888", marginBottom: 12 }}>Get a Free Quote — We respond within 2 hours</p>
          <img src={IMG.abstract} alt="Colorful prints" style={{ width: "100%", height: 80, borderRadius: 7, objectFit: "cover", display: "block", marginBottom: 16 }} loading="lazy" />
          {["பெயர் (Name)", "Phone (+91)", "Email"].map(ph => (
            <input key={ph} type="text" placeholder={ph} style={{ border: "1.5px solid #ddd", borderRadius: 5, padding: "10px 12px", marginBottom: 9, fontSize: 13, fontFamily: PP, width: "100%", outline: "none" }} />
          ))}
          <select style={{ border: "1.5px solid #ddd", borderRadius: 5, padding: "10px 12px", marginBottom: 9, fontSize: 13, fontFamily: PP, width: "100%", background: "#fff" }}>
            <option>Select Service</option>
            {["Visiting Cards", "Wedding Invitations", "Letterheads", "Envelopes", "Stickers", "Posters", "Lamination", "Other"].map(s => <option key={s}>{s}</option>)}
          </select>
          <div style={{ display: "flex", gap: 6, marginBottom: 9 }}>
            {[IMG.vc1, IMG.wed1, IMG.stationery1].map((src, i) => (
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
          {/* Col 1 */}
          <div>
            <div style={{ fontFamily: PF, color: C.gold, fontSize: 20, fontWeight: 700 }}>Super Printers</div>
            <div style={{ fontFamily: NT, color: C.gold, fontSize: 12 }}>சுப்பர் பிரிண்டர்ஸ்</div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, fontFamily: PP, marginTop: 6, marginBottom: 10 }}>Chennai's printing press since 1989.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
              {[IMG.vc1, IMG.vc2, IMG.wed1, IMG.wed2, IMG.stationery1, IMG.paperStack].map((src, i) => (
                <img key={i} src={src} alt="Product sample" style={{ width: "100%", height: 52, borderRadius: 4, objectFit: "cover", display: "block" }} loading="lazy" />
              ))}
            </div>
          </div>
          {/* Col 2 */}
          <div>
            <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Quick Links</div>
            {["Home", "Products", "How to Order", "About Us", "Contact"].map(l => (
              <a key={l} href="#" style={{ display: "block", color: "rgba(255,255,255,0.5)", fontFamily: PP, fontSize: 12, padding: "4px 0" }}>{l}</a>
            ))}
          </div>
          {/* Col 3 */}
          <div>
            <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Our Products</div>
            {["Visiting Cards", "Wedding Invitations", "Letterheads", "Envelopes", "Stickers", "Posters", "Lamination"].map(l => (
              <span key={l} style={{ display: "block", color: "rgba(255,255,255,0.5)", fontFamily: PP, fontSize: 12, padding: "4px 0" }}>{l}</span>
            ))}
          </div>
          {/* Col 4 */}
          <div>
            <div style={{ color: "#fff", fontFamily: PP, fontWeight: 700, fontSize: 13, marginBottom: 10 }}>Get in Touch</div>
            {["98/4 Chavadi Street, Pallavaram, Chennai – 600 043", "+91-44-22480847", "info@superprinters.in", "Mon–Sat: 9AM–7PM"].map((t, i) => (
              <p key={i} style={{ color: "rgba(255,255,255,0.5)", fontFamily: PP, fontSize: 12, margin: "4px 0" }}>{t}</p>
            ))}
            <img src={IMG.delivery} alt="Delivery service" style={{ width: "100%", height: 90, borderRadius: 7, objectFit: "cover", display: "block", marginTop: 10 }} loading="lazy" />
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #2a2a2a", padding: "12px 36px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", maxWidth: 1200, margin: "0 auto" }}>
          <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: PP, fontSize: 12 }}>© 2025 Super Printers, Chennai. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: 6 }}>
            {[IMG.inkRollers, IMG.vc1, IMG.delivery, IMG.pressTools].map((src, i) => (
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
