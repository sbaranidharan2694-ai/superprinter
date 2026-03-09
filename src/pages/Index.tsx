import { useState, useEffect, useRef, useCallback } from "react";

// ─── IMAGES ─────────────────────────────────────────────────────
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
  printShop: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?w=900&h=700&fit=crop",
  qualityCheck: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=700&fit=crop",
  stackedCards: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&h=700&fit=crop",
};

// ─── BRAND ──────────────────────────────────────────────────────
const C = {
  red: "#1A237E", maroon: "#0D1642", gold: "#FFD700", goldDark: "#B8860B",
  saffron: "#283593", teal: "#1565C0", ivory: "#F5F7FF", dark: "#0A0E27",
  darkAlt: "#080C1F", wa: "#25D366", cream: "#EEF1FF",
};
const PF = "'Playfair Display',serif";
const PP = "'Poppins',sans-serif";
const NT = "'Noto Sans Tamil',sans-serif";

// ─── DATA ───────────────────────────────────────────────────────
const SLIDES = [
  { bg: IMG.hero, badge: "TAMIL NADU'S TRUSTED PRESS", h1a: "Premium Offset", h1b: "Printing for Every Need", body: "Business cards, wedding invitations, letterheads and more — printed with precision since 1990.", btn1: "Order Now", btn1Action: "products", btn2: "Get Free Quote", btn2Action: "quote", rightImg: IMG.glossCard, thumbs: [IMG.glossCard, IMG.weddingInvite1, IMG.letterhead, IMG.envelopes, IMG.brochures] },
  { bg: IMG.weddingCeremony, badge: "WEDDING SEASON SPECIAL", h1a: "Beautiful Wedding", h1b: "Invitations", tamil: "திருமண அழைப்பிதழ்கள்", body: "Gloss, Matt, Spot UV & Premium finishes on 300 GSM Art Board.", btn1: "See Designs", btn1Action: "wedding-cards", rightImg: IMG.weddingInvite1, thumbs: [] },
  { bg: IMG.offsetPress, badge: "1 TO 4 BUSINESS DAYS", h1a: "Order Online.", h1b: "Delivered Fast.", body: "We deliver across Chennai, Coimbatore, and all Tamil Nadu.", btn1: "Order Now", btn1Action: "products", btn2: "Track Order", btn2Action: "track", rightImg: IMG.glossCard, thumbs: [] },
];

const TRUST = [
  { num: "35+", label: "Years Experience", sub: "Since 1990", img: IMG.pressTools },
  { num: "10,000+", label: "Happy Clients", sub: "Across India", img: IMG.workshop },
  { num: "50+", label: "Print Services", sub: "Complete Range", img: IMG.digital },
  { num: "1–4", label: "Day Delivery", sub: "Pan Tamil Nadu", img: IMG.delivery },
];

const CATEGORIES = [
  { name: "Visiting Cards", sub: "Gloss • Matt • Spot UV • Velvet", img: IMG.glossCard, anchor: "visiting-cards", badge: "Best Seller" },
  { name: "Wedding Invitations", sub: "300 GSM Art Board • Premium", img: IMG.weddingInvite1, anchor: "wedding-cards", badge: "Popular" },
  { name: "Letterheads", sub: "80 GSM • 100 GSM Bond", img: IMG.letterhead, anchor: "stationery", badge: "" },
  { name: "Envelopes & Covers", sub: "80 • 100 • 130 • 170 GSM", img: IMG.envelopes, anchor: "envelopes", badge: "" },
  { name: "Stickers", sub: "Mirror Coated • 20×30 inch", img: IMG.stickerSheets, anchor: "stickers", badge: "New" },
  { name: "Brochures & Flyers", sub: "Tri-fold • Bi-fold • A4", img: IMG.brochures, anchor: "brochures", badge: "" },
  { name: "Posters", sub: "80 GSM Maplitho • All Sizes", img: IMG.posterPrint, anchor: "posters", badge: "" },
  { name: "Lamination", sub: "Gloss • Matt • A4 to Crown", img: IMG.laminationMachine, anchor: "visiting-cards", badge: "" },
  { name: "Premium Cards", sub: "Velvet • UV • Foil • Die Cut", img: IMG.premiumCards, anchor: "visiting-cards", badge: "Premium" },
];

const PRODUCTS = [
  { name: "Gloss Visiting Card", spec: "300 GSM | 90×53mm | Gloss Lam", days: "1-2 Days", price: "₹299", img: IMG.glossCard, badge: "Best Seller" },
  { name: "Matt Visiting Card", spec: "300 GSM | 90×53mm | Matt Lam", days: "1-2 Days", price: "₹299", img: IMG.mattCard, badge: "Popular" },
  { name: "Spot UV Card", spec: "300 GSM | 90×53mm | Spot UV", days: "6-10 Days", price: "₹499", img: IMG.spotUvCard, badge: "Premium" },
  { name: "Velvet Lamination", spec: "400 GSM | 90×53mm | Velvet Lam", days: "10-15 Days", price: "₹799", img: IMG.velvetCard, badge: "Luxury" },
  { name: "Synthetic Card", spec: "Non-Tearable Paper | 90×53mm", days: "2-4 Days", price: "₹499", img: IMG.syntheticCard, badge: "" },
  { name: "Velvet + Gold Foil", spec: "400 GSM | Velvet + Foil Stamping", days: "10-15 Days", price: "₹999", img: IMG.goldFoilCard, badge: "Premium" },
];

const STEPS = [
  { img: IMG.glossCard, color: C.red, title: "Choose Product", tamil: "தயாரிப்பை தேர்ந்தெடுங்கள்", desc: "Browse visiting cards, wedding invitations, letterheads and more.", thumbs: [IMG.mattCard, IMG.weddingInvite1, IMG.letterhead], num: "01" },
  { img: IMG.printShop, color: C.saffron, title: "Upload Your Design", tamil: "டிசைனை அப்லோட் செய்யுங்கள்", desc: "Upload print-ready PDF or CDR. No design? Our team helps create one.", thumbs: [IMG.spotUvCard, IMG.weddingInvite2, IMG.brochures], num: "02" },
  { img: IMG.inkRollers, color: C.teal, title: "We Print with Precision", tamil: "துல்லியமாக அச்சிடுகிறோம்", desc: "Quality checked on offset and digital presses. Premium results guaranteed.", thumbs: [IMG.pressTools, IMG.inkPress, IMG.printedStack], num: "03" },
  { img: IMG.parcel, color: C.goldDark, title: "Delivered to You", tamil: "உங்கள் வீட்டிற்கே டெலிவரி", desc: "Pan Tamil Nadu delivery in 1–4 business days. Same-day pickup.", thumbs: [IMG.delivery, IMG.courier, IMG.parcel], num: "04" },
];

const TESTIMONIALS = [
  { img: IMG.glossCard, name: "Senthil Kumar", role: "Business Owner, T. Nagar", quote: "Super Printers-ல் visiting card-கள் print செய்தோம். Quality மிகவும் அருமை. Quick delivery. Thank you!" },
  { img: IMG.weddingInvite2, name: "Priya Krishnan", role: "Bride, Adyar, Chennai", quote: "Wedding invitation-கள் மிகவும் beautiful-ஆக வந்தது. Spot UV finish excellent!" },
  { img: IMG.letterhead, name: "Suresh & Associates", role: "Advocate, Madurai", quote: "10 years-ஆக letterhead மற்றும் envelope print செய்கிறோம். Quality consistent." },
  { img: IMG.delivery, name: "Ramesh Velayutham", role: "Event Coordinator, Coimbatore", quote: "Same-day flyers 4 மணி நேரத்தில் deliver பண்ணினார்கள். Excellent service!" },
  { img: IMG.weddingInvite1, name: "Priya Suresh", role: "Homemaker, Pallavaram", quote: "Wedding cards design மிகவும் அழகாக வந்தது. 2 days-ல் delivery கிடைத்தது!" },
  { img: IMG.printedStack, name: "Karthik Rajan", role: "Business Owner, Tambaram", quote: "Letterheads and visiting cards — excellent quality, GST bill provided, very professional." },
];

type GalCat = "All"|"Visiting Cards"|"Wedding Cards"|"Stationery"|"Envelopes"|"Stickers"|"Posters"|"Press"|"Brochures";
const GALLERY: {img:string;label:string;cat:GalCat}[] = [
  {img:IMG.glossCard,label:"Gloss Visiting Card",cat:"Visiting Cards"},{img:IMG.weddingInvite1,label:"Wedding Invitation",cat:"Wedding Cards"},
  {img:IMG.inkRollers,label:"Offset Press",cat:"Press"},{img:IMG.letterhead,label:"Letterhead Set",cat:"Stationery"},
  {img:IMG.mattCard,label:"Matt Visiting Card",cat:"Visiting Cards"},{img:IMG.envelopes,label:"Envelope / Cover",cat:"Envelopes"},
  {img:IMG.pressTools,label:"Press Tools",cat:"Press"},{img:IMG.stickerSheets,label:"Sticker Print",cat:"Stickers"},
  {img:IMG.spotUvCard,label:"Spot UV Card",cat:"Visiting Cards"},{img:IMG.weddingInvite2,label:"Wedding Matt",cat:"Wedding Cards"},
  {img:IMG.workshop,label:"Workshop Floor",cat:"Press"},{img:IMG.brochures,label:"Brochure",cat:"Brochures"},
  {img:IMG.velvetCard,label:"Velvet Foil Card",cat:"Visiting Cards"},{img:IMG.printedStack,label:"Printed Output",cat:"Press"},
  {img:IMG.posterPrint,label:"Poster Print",cat:"Posters"},{img:IMG.digital,label:"Digital Printer",cat:"Press"},
  {img:IMG.weddingInvite3,label:"Premium Wedding Card",cat:"Wedding Cards"},{img:IMG.inkPress,label:"Printing in Progress",cat:"Press"},
  {img:IMG.offsetPress,label:"Offset Press Room",cat:"Press"},{img:IMG.parcel,label:"Packaged Order",cat:"Press"},
  {img:IMG.printShop,label:"Print Shop",cat:"Press"},{img:IMG.printedBrochures,label:"Printed Brochures",cat:"Brochures"},
  {img:IMG.laminationMachine,label:"Lamination",cat:"Press"},{img:IMG.premiumCards,label:"Premium Cards",cat:"Visiting Cards"},
];

const WHY = [
  { img: IMG.offsetPress, title: "35 Years of Excellence", tamil: "35 ஆண்டுகள் சிறப்பு", body: "Three decades of offset printing excellence. State-of-the-art presses.", extra: "Since 1990", thumb: IMG.inkRollers },
  { img: IMG.delivery, title: "Fast Pan-TN Delivery", tamil: "வேகமான டெலிவரி", body: "1–4 business days across Tamil Nadu. Same-day pickup from Chennai.", extra: "Chennai | CBE | Madurai", thumb: IMG.courier },
  { img: IMG.qualityCheck, title: "Quality Guaranteed", tamil: "தரம் உறுதி", body: "Multi-point quality checks on every job. Colour accurate, sharp.", extra: "GST Inclusive Pricing", thumb: IMG.printedStack },
  { img: IMG.stackedCards, title: "Competitive Pricing", tamil: "சிறந்த விலை", body: "Transparent pricing. Bulk discounts for DTP operators and resellers.", extra: "Rates from ₹199", thumb: IMG.glossCard },
];

const NAV_LINKS = [
  {label:"Home",anchor:"top"},{label:"Products",anchor:"products"},{label:"Visiting Cards",anchor:"visiting-cards"},
  {label:"Wedding Cards",anchor:"wedding-cards"},{label:"Gallery",anchor:"gallery"},{label:"About",anchor:"about"},{label:"Contact",anchor:"contact"},
];
const GAL_FILTERS: GalCat[] = ["All","Visiting Cards","Wedding Cards","Stationery","Envelopes","Brochures","Stickers","Posters","Press"];
const TICKER_TEXT = "•  Wedding Cards  •  Letterheads  •  Envelopes  •  Stickers  •  Brochures & Flyers  |  Fast Delivery across Tamil Nadu    |  GST Inclusive Pricing     ";

const scrollTo = (id: string) => {
  if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ─── WAVE SVG ───────────────────────────────────────────────────
const Wave = ({ color = "#FFFDF7", flip = false }: { color?: string; flip?: boolean }) => (
  <div style={{ lineHeight: 0, overflow: "hidden", transform: flip ? "rotate(180deg)" : "none", marginTop: flip ? -1 : 0, marginBottom: flip ? 0 : -1 }}>
    <svg viewBox="0 0 1440 80" style={{ width: "100%", height: 80, display: "block" }} preserveAspectRatio="none">
      <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill={color} />
    </svg>
  </div>
);

// ─── INTERSECTION OBSERVER HOOK ─────────────────────────────────
const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
};

// ─── ANIMATED COUNTER ───────────────────────────────────────────
const Counter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  const numericTarget = parseInt(target.replace(/[^0-9]/g, "")) || 0;
  useEffect(() => {
    if (!visible || numericTarget === 0) return;
    let start = 0;
    const step = Math.max(1, Math.floor(numericTarget / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericTarget) { setCount(numericTarget); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [visible, numericTarget]);
  return <span ref={ref}>{numericTarget === 0 ? target : count.toLocaleString() + suffix}</span>;
};

// ─── SECTION WRAPPER ────────────────────────────────────────────
const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
      {children}
    </div>
  );
};

// ─── MAIN COMPONENT ─────────────────────────────────────────────
const Index = () => {
  const [slide, setSlide] = useState(0);
  const [testIdx, setTestIdx] = useState(0);
  const [galFilter, setGalFilter] = useState<GalCat>("All");
  const [scrolled, setScrolled] = useState(false);
  const [hoverCat, setHoverCat] = useState<number|null>(null);
  const [hoverProd, setHoverProd] = useState<number|null>(null);
  const [hoverGal, setHoverGal] = useState<number|null>(null);
  const [hoverNav, setHoverNav] = useState<number|null>(null);
  const [hoverWhy, setHoverWhy] = useState<number|null>(null);
  const [modal, setModal] = useState<string|null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("Select Service");
  const [formMsg, setFormMsg] = useState("");
  const [particles] = useState(() => Array.from({length:30}, (_,i) => ({
    x: Math.random()*100, y: Math.random()*100, size: 2+Math.random()*4, dur: 3+Math.random()*5, delay: Math.random()*5
  })));

  useEffect(() => {
    const si = setInterval(() => setSlide(p => (p+1)%3), 5000);
    const ti = setInterval(() => setTestIdx(p => (p+1)%TESTIMONIALS.length), 4500);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => { clearInterval(si); clearInterval(ti); window.removeEventListener("scroll", onScroll); };
  }, []);

  const filtered = galFilter === "All" ? GALLERY : GALLERY.filter(g => g.cat === galFilter);

  const handleSlideBtn = (action?: string) => {
    if (!action) return;
    if (action === "track") { setModal("track"); return; }
    if (action === "quote") { scrollTo("contact"); return; }
    scrollTo(action);
  };

  return (
    <div id="top" style={{ fontFamily: PP, color: C.dark, margin: 0, padding: 0, background: C.ivory, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Poppins:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@400;600;700&display=swap');
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes waPulse{0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,.6)}70%{box-shadow:0 0 0 18px rgba(37,211,102,0)}}
        @keyframes float{0%,100%{transform:translateY(0) rotate(2deg)}50%{transform:translateY(-12px) rotate(-1deg)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes glow{0%,100%{text-shadow:0 0 20px rgba(255,215,0,0.3),0 0 40px rgba(255,215,0,0.1)}50%{text-shadow:0 0 30px rgba(255,215,0,0.6),0 0 60px rgba(255,215,0,0.2)}}
        @keyframes particleFloat{0%{transform:translateY(0) scale(1);opacity:0.6}50%{opacity:1}100%{transform:translateY(-100vh) scale(0);opacity:0}}
        @keyframes pulseBtn{0%,100%{box-shadow:0 0 0 0 rgba(255,215,0,0.5)}50%{box-shadow:0 0 0 12px rgba(255,215,0,0)}}
        @keyframes borderGlow{0%,100%{box-shadow:0 0 5px rgba(255,215,0,0.3)}50%{box-shadow:0 0 20px rgba(255,215,0,0.6),0 0 40px rgba(26,35,126,0.2)}}
        @keyframes slideUnderline{from{transform:scaleX(0)}to{transform:scaleX(1)}}
        .hero-anim{animation:fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both}
        .glow-text{animation:glow 3s ease-in-out infinite}
        *{box-sizing:border-box;margin:0;padding:0}
        a{text-decoration:none;color:inherit}
        input,select,textarea{font-family:'Poppins',sans-serif}
        ::selection{background:rgba(26,35,126,0.3);color:#fff}
        html{scroll-behavior:smooth}
        @media(max-width:768px){
          .hero-flex{flex-direction:column!important;text-align:center!important;padding:0 20px!important}
          .hero-right{display:none!important}
          .hero-h1{font-size:36px!important}
          .grid-2col{grid-template-columns:1fr!important}
          .grid-3col{grid-template-columns:1fr 1fr!important}
          .grid-4col{grid-template-columns:1fr 1fr!important}
          .grid-5col{grid-template-columns:1fr 1fr!important}
          .trust-bar{flex-direction:column!important}
          .trust-item{min-width:100%!important;border-right:none!important;border-bottom:1px solid #2a2a2a}
          .nav-links{display:none!important}
          .hero-thumbs{justify-content:center!important}
          .footer-grid{grid-template-columns:1fr 1fr!important}
          .contact-grid{grid-template-columns:1fr!important}
          .about-grid{grid-template-columns:1fr!important}
          .test-grid{grid-template-columns:1fr!important}
          .wedding-grid{grid-template-columns:1fr!important}
        }
        @media(max-width:480px){
          .grid-3col{grid-template-columns:1fr!important}
          .grid-4col{grid-template-columns:1fr!important}
          .footer-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ═══ MODAL ═══ */}
      {modal && (
        <div style={{ position:"fixed",inset:0,zIndex:10000,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center" }} onClick={()=>setModal(null)}>
          <div onClick={e=>e.stopPropagation()} style={{ background:"linear-gradient(145deg,#fff,#FFF8F0)",borderRadius:20,padding:"40px 36px",maxWidth:440,width:"90%",textAlign:"center",boxShadow:"0 30px 80px rgba(0,0,0,0.3),0 0 0 1px rgba(255,215,0,0.2)" }}>
            <div style={{ width:60,height:60,borderRadius:"50%",background:`linear-gradient(135deg,${C.red},${C.gold})`,margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center" }}>
              <span style={{color:"#fff",fontSize:24,fontWeight:900,fontFamily:PF}}>SP</span>
            </div>
            <div style={{ fontFamily:PF,fontWeight:700,fontSize:24,color:C.red,marginBottom:12 }}>
              {modal==="orders"&&"Order Tracking"}{modal==="track"&&"Track Your Order"}{modal==="cart"&&"Place Your Order"}
            </div>
            <p style={{ fontFamily:PP,fontSize:14,color:"#666",lineHeight:1.7,marginBottom:24 }}>
              {modal==="orders"&&"Order tracking coming soon. Please WhatsApp us at +91 9840199878 for order status."}
              {modal==="track"&&"Track your order via WhatsApp: +91 9840199878"}
              {modal==="cart"&&"To place an order, please WhatsApp us or fill the quote form below."}
            </p>
            <div style={{ display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap" }}>
              <a href="https://wa.me/919840199878" style={{ background:C.wa,color:"#fff",fontFamily:PP,fontWeight:700,fontSize:13,padding:"12px 24px",borderRadius:30 }}>WhatsApp Us</a>
              {modal==="cart"&&<button onClick={()=>{setModal(null);scrollTo("contact")}} style={{ background:`linear-gradient(135deg,${C.red},${C.maroon})`,color:"#fff",fontFamily:PP,fontWeight:700,fontSize:13,padding:"12px 24px",borderRadius:30,border:"none",cursor:"pointer" }}>Fill Quote Form</button>}
              <button onClick={()=>setModal(null)} style={{ background:"transparent",color:"#888",fontFamily:PP,fontWeight:600,fontSize:13,padding:"12px 24px",borderRadius:30,border:"1.5px solid #ddd",cursor:"pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ TOP TICKER BAR ═══ */}
      <div style={{ height:36,background:`linear-gradient(90deg,${C.dark},${C.maroon})`,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 24px",overflow:"hidden" }}>
        <span style={{ color:"rgba(255,255,255,0.7)",fontSize:11,whiteSpace:"nowrap",fontFamily:PP,letterSpacing:"0.05em" }}>Chennai, Tamil Nadu | Since 1990</span>
        <div style={{ flex:1,overflow:"hidden",margin:"0 20px" }}>
          <div style={{ display:"flex",width:"200%",animation:"ticker 30s linear infinite" }}>
            {[0,1].map(k=><span key={k} style={{ color:C.gold,fontSize:11,whiteSpace:"nowrap",fontFamily:NT,minWidth:"50%" }}>{TICKER_TEXT}</span>)}
          </div>
        </div>
        <span style={{ color:"rgba(255,255,255,0.7)",fontSize:11,whiteSpace:"nowrap",fontFamily:PP }}>+91 9840199878</span>
      </div>

      {/* ═══ GLASSMORPHISM NAVBAR ═══ */}
      <nav style={{
        position:"sticky",top:0,zIndex:100,
        background: scrolled ? "rgba(10,14,39,0.92)" : "rgba(26,35,126,0.92)",
        backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
        padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between",
        borderBottom:"1px solid rgba(255,215,0,0.1)"
      }}>
        <div style={{ display:"flex",alignItems:"center",gap:12,padding:"10px 0",cursor:"pointer" }} onClick={()=>scrollTo("top")}>
          <div style={{ width:42,height:42,borderRadius:10,background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 20px rgba(255,215,0,0.3)" }}>
            <span style={{ fontFamily:PF,fontWeight:900,fontSize:18,color:C.dark }}>SP</span>
          </div>
          <div>
            <div style={{ fontFamily:PF,fontWeight:700,fontSize:18,color:"#fff",textShadow:"0 0 20px rgba(255,215,0,0.2)" }}>Super Printers</div>
            <div style={{ fontFamily:NT,fontSize:9,color:C.gold,letterSpacing:"0.1em" }}>சுப்பர் பிரிண்டர்ஸ்</div>
          </div>
        </div>
        <div className="nav-links" style={{ display:"flex",gap:0 }}>
          {NAV_LINKS.map((l,i)=>(
            <button key={l.label} onClick={()=>scrollTo(l.anchor)} onMouseEnter={()=>setHoverNav(i)} onMouseLeave={()=>setHoverNav(null)}
              style={{ color:hoverNav===i?C.gold:"rgba(255,255,255,0.85)",fontFamily:PP,fontSize:12,fontWeight:500,padding:"16px 14px",background:"transparent",border:"none",cursor:"pointer",transition:"all 0.3s",position:"relative",letterSpacing:"0.02em" }}>
              {l.label}
              <span style={{ position:"absolute",bottom:8,left:"50%",transform:`translateX(-50%) scaleX(${hoverNav===i?1:0})`,width:"70%",height:2,background:C.gold,borderRadius:1,transition:"transform 0.3s cubic-bezier(0.16,1,0.3,1)",transformOrigin:"center" }}/>
            </button>
          ))}
        </div>
        <div style={{ display:"flex",gap:10,alignItems:"center" }}>
          <button onClick={()=>setModal("orders")} style={{ background:"transparent",border:`1.5px solid rgba(255,215,0,0.5)`,color:C.gold,padding:"8px 18px",borderRadius:30,cursor:"pointer",fontFamily:PP,fontWeight:600,fontSize:11,transition:"all 0.3s",letterSpacing:"0.05em" }}>My Orders</button>
          <button onClick={()=>scrollTo("contact")} style={{ background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,color:C.dark,border:"none",padding:"9px 22px",borderRadius:30,cursor:"pointer",fontFamily:PP,fontWeight:700,fontSize:11,boxShadow:"0 4px 15px rgba(255,215,0,0.3)",transition:"all 0.3s",letterSpacing:"0.05em" }}>Get Quote</button>
        </div>
      </nav>

      {/* ═══ HERO — FULL SCREEN ═══ */}
      <div style={{ position:"relative",minHeight:"100vh",overflow:"hidden",background:C.dark }}>
        {/* Animated gradient overlay */}
        <div style={{ position:"absolute",inset:0,background:"linear-gradient(135deg,rgba(26,35,126,0.92) 0%,rgba(13,22,66,0.85) 30%,rgba(10,14,39,0.7) 60%,rgba(0,0,0,0.3) 100%)",zIndex:2 }}/>
        {/* Background image */}
        {SLIDES.map((s,i)=>(
          <img key={i} src={s.bg} alt="Super Printers" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:slide===i?1:0,transition:"opacity 1.2s ease",filter:"brightness(0.7)" }} loading={i===0?"eager":"lazy"} />
        ))}
        {/* Floating particles */}
        <div style={{ position:"absolute",inset:0,zIndex:3,pointerEvents:"none" }}>
          {particles.map((p,i)=>(
            <div key={i} style={{ position:"absolute",left:`${p.x}%`,bottom:"-5%",width:p.size,height:p.size,borderRadius:"50%",background:`radial-gradient(circle,rgba(255,215,0,0.8),rgba(255,215,0,0))`,animation:`particleFloat ${p.dur}s ease-in-out ${p.delay}s infinite` }}/>
          ))}
        </div>
        {/* Content */}
        <div className="hero-flex" style={{ position:"relative",zIndex:4,display:"flex",alignItems:"center",minHeight:"100vh",padding:"0 60px",maxWidth:1400,margin:"0 auto" }}>
          <div style={{ flex:"0 0 55%" }}>
            {slide===0 || slide===1 || slide===2 ? (
              <div className="hero-anim" key={slide}>
                <div style={{ display:"inline-block",padding:"6px 20px",borderRadius:30,background:"rgba(255,215,0,0.15)",border:"1px solid rgba(255,215,0,0.3)",marginBottom:20 }}>
                  <span style={{ color:C.gold,fontFamily:PP,fontSize:11,fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase" }}>{SLIDES[slide].badge}</span>
                </div>
                <h1 className="hero-h1 glow-text" style={{ fontFamily:PF,fontWeight:900,fontSize:60,color:"#fff",lineHeight:1.1,margin:"0 0 12px" }}>
                  {SLIDES[slide].h1a}<br/>
                  <span style={{ color:C.gold }}>{SLIDES[slide].h1b}</span>
                </h1>
                {SLIDES[slide].tamil && <div style={{ fontFamily:NT,color:C.gold,fontSize:20,marginBottom:12,opacity:0.9 }}>{SLIDES[slide].tamil}</div>}
                <p style={{ color:"rgba(255,255,255,0.8)",fontSize:16,lineHeight:1.7,marginBottom:28,maxWidth:460,fontFamily:PP,fontWeight:300 }}>{SLIDES[slide].body}</p>
                <div style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:24 }}>
                  <button onClick={()=>handleSlideBtn(SLIDES[slide].btn1Action)} style={{ background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,color:C.dark,fontFamily:PP,fontWeight:700,fontSize:14,padding:"14px 36px",borderRadius:30,border:"none",cursor:"pointer",animation:"pulseBtn 2s infinite",letterSpacing:"0.05em",boxShadow:"0 8px 30px rgba(255,215,0,0.3)" }}>{SLIDES[slide].btn1}</button>
                  {SLIDES[slide].btn2 && <button onClick={()=>handleSlideBtn(SLIDES[slide].btn2Action)} style={{ border:"2px solid rgba(255,255,255,0.4)",color:"#fff",fontFamily:PP,fontWeight:500,fontSize:14,padding:"12px 32px",borderRadius:30,background:"rgba(255,255,255,0.05)",cursor:"pointer",backdropFilter:"blur(4px)",transition:"all 0.3s" }}>{SLIDES[slide].btn2}</button>}
                </div>
                {SLIDES[slide].thumbs.length > 0 && (
                  <div className="hero-thumbs" style={{ display:"flex",gap:8 }}>
                    {SLIDES[slide].thumbs.map((t,ti)=><img key={ti} src={t} alt="Product" style={{ width:70,height:50,borderRadius:8,border:"2px solid rgba(255,215,0,0.3)",objectFit:"cover",display:"block",transition:"transform 0.3s",cursor:"pointer" }} loading="lazy"/>)}
                  </div>
                )}
              </div>
            ):null}
          </div>
          <div className="hero-right" style={{ flex:"0 0 45%",display:"flex",justifyContent:"center",alignItems:"center" }}>
            <div style={{ position:"relative",animation:"float 6s ease-in-out infinite" }}>
              <img src={SLIDES[slide].rightImg} alt="Product showcase" style={{ width:340,height:440,borderRadius:20,border:"3px solid rgba(255,215,0,0.3)",objectFit:"cover",boxShadow:"0 40px 80px rgba(0,0,0,0.5),0 0 40px rgba(255,215,0,0.1)",display:"block" }} loading="lazy"/>
              <div style={{ position:"absolute",top:-10,right:-10,width:90,height:90,borderRadius:"50%",background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 8px 25px rgba(255,215,0,0.4)" }}>
                <span style={{ fontFamily:PF,fontWeight:900,fontSize:18,color:C.dark }}>35+</span>
                <span style={{ fontFamily:PP,fontSize:8,fontWeight:600,color:C.dark,letterSpacing:"0.1em" }}>YEARS</span>
              </div>
            </div>
          </div>
        </div>
        {/* Slide dots */}
        <div style={{ position:"absolute",bottom:30,left:"50%",transform:"translateX(-50%)",display:"flex",gap:10,zIndex:10 }}>
          {[0,1,2].map(i=>(
            <button key={i} onClick={()=>setSlide(i)} style={{ width:slide===i?36:12,height:12,borderRadius:6,background:slide===i?`linear-gradient(90deg,${C.gold},${C.goldDark})`:"rgba(255,255,255,0.3)",border:"none",cursor:"pointer",transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",boxShadow:slide===i?"0 0 15px rgba(255,215,0,0.4)":"none" }}/>
          ))}
        </div>
        {/* Bottom wave */}
        <div style={{ position:"absolute",bottom:0,left:0,right:0,zIndex:5 }}>
          <Wave color={C.dark} />
        </div>
      </div>

      {/* ═══ TRUST/STATS BAR ═══ */}
      <Section>
        <div style={{ background:`linear-gradient(135deg,${C.dark},${C.maroon})`,padding:"60px 40px" }}>
          <div className="trust-bar" style={{ display:"flex",justifyContent:"center",gap:0,maxWidth:1200,margin:"0 auto",flexWrap:"wrap" }}>
            {TRUST.map((t,i)=>(
              <div key={i} className="trust-item" style={{ flex:"1 1 25%",minWidth:220,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"30px 20px",borderRight:i<3?"1px solid rgba(255,215,0,0.1)":"none",position:"relative" }}>
                <img src={t.img} alt={t.label} style={{ width:56,height:56,borderRadius:"50%",objectFit:"cover",border:`3px solid ${C.gold}`,display:"block",marginBottom:14,boxShadow:"0 0 20px rgba(255,215,0,0.2)" }} loading="lazy"/>
                <div style={{ fontFamily:PF,color:C.gold,fontSize:36,fontWeight:900,marginBottom:4,textShadow:"0 0 20px rgba(255,215,0,0.2)" }}>
                  <Counter target={t.num} suffix={t.num.includes("+")?"+":""} />
                </div>
                <div style={{ fontFamily:PP,color:"#fff",fontSize:13,fontWeight:600,marginBottom:4,letterSpacing:"0.05em" }}>{t.label}</div>
                <div style={{ color:"rgba(255,255,255,0.4)",fontSize:11,fontFamily:PP }}>{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Wave color={C.ivory} />

      {/* ═══ PRODUCT CATEGORIES ═══ */}
      <Section>
        <div id="products" style={{ background:C.ivory,padding:"80px 40px" }}>
          <div style={{ textAlign:"center",marginBottom:50,maxWidth:600,margin:"0 auto 50px" }}>
            <div style={{ fontFamily:NT,color:C.red,fontSize:16,marginBottom:6 }}>எங்கள் தயாரிப்புகள்</div>
            <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:42,color:C.dark,margin:"0 0 14px",lineHeight:1.2 }}>Our Products</h2>
            <div style={{ width:60,height:4,borderRadius:2,background:`linear-gradient(90deg,${C.red},${C.gold})`,margin:"0 auto 14px" }}/>
            <p style={{ fontFamily:PP,fontSize:15,color:"#888",lineHeight:1.6 }}>Premium printing solutions for every need — from visiting cards to large format posters.</p>
          </div>
          <div className="grid-3col" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,maxWidth:1200,margin:"0 auto" }}>
            {CATEGORIES.map((cat,i)=>(
              <div key={i} style={{
                height:300,borderRadius:16,overflow:"hidden",position:"relative",cursor:"pointer",
                transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)",
                transform:hoverCat===i?"translateY(-8px) scale(1.02)":"translateY(0)",
                boxShadow:hoverCat===i?"0 20px 50px rgba(0,0,0,0.2),0 0 0 2px rgba(255,215,0,0.3)":"0 4px 20px rgba(0,0,0,0.08)"
              }} onMouseEnter={()=>setHoverCat(i)} onMouseLeave={()=>setHoverCat(null)}>
                <img src={cat.img} alt={cat.name} style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.6s cubic-bezier(0.16,1,0.3,1)",transform:hoverCat===i?"scale(1.12)":"scale(1)" }} loading="lazy"/>
                <div style={{ position:"absolute",inset:0,background:hoverCat===i?`linear-gradient(135deg,rgba(26,35,126,0.9),rgba(13,22,66,0.85))`:"linear-gradient(0deg,rgba(0,0,0,0.7) 0%,rgba(0,0,0,0) 60%)",transition:"all 0.4s" }}/>
                {cat.badge && <div style={{ position:"absolute",top:14,right:14,background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,color:C.dark,fontFamily:PP,fontSize:10,fontWeight:700,padding:"4px 12px",borderRadius:20,zIndex:2,letterSpacing:"0.05em" }}>{cat.badge}</div>}
                <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"24px 20px",zIndex:2,transition:"transform 0.4s",transform:hoverCat===i?"translateY(-20px)":"translateY(0)" }}>
                  <div style={{ fontFamily:PF,fontWeight:700,fontSize:20,color:"#fff",marginBottom:6,textShadow:"0 2px 10px rgba(0,0,0,0.3)" }}>{cat.name}</div>
                  <div style={{ fontFamily:PP,fontSize:12,color:"rgba(255,255,255,0.7)",marginBottom:hoverCat===i?14:0,transition:"margin 0.3s" }}>{cat.sub}</div>
                  {hoverCat===i && (
                    <button onClick={()=>scrollTo(cat.anchor)} style={{ fontFamily:PP,fontWeight:600,fontSize:12,color:C.dark,background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,padding:"8px 22px",borderRadius:30,border:"none",cursor:"pointer",boxShadow:"0 4px 15px rgba(255,215,0,0.3)" }}>Explore →</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ CTA BAND ═══ */}
      <div style={{ background:`linear-gradient(135deg,${C.red},${C.maroon},${C.dark})`,padding:"60px 40px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,opacity:0.08 }}>
          <img src={IMG.pressWide} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy"/>
        </div>
        <div style={{ position:"relative",zIndex:2,maxWidth:900,margin:"0 auto",textAlign:"center" }}>
          <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:38,color:"#fff",marginBottom:12,lineHeight:1.3 }}>Ready to Print? <span style={{color:C.gold}}>Let's Create Together.</span></h2>
          <p style={{ fontFamily:PP,color:"rgba(255,255,255,0.7)",fontSize:16,marginBottom:28,maxWidth:500,margin:"0 auto 28px" }}>From visiting cards to wedding invitations — get premium quality printing delivered to your doorstep.</p>
          <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap" }}>
            <button onClick={()=>scrollTo("contact")} style={{ background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,color:C.dark,fontFamily:PP,fontWeight:700,fontSize:14,padding:"14px 36px",borderRadius:30,border:"none",cursor:"pointer",boxShadow:"0 8px 30px rgba(255,215,0,0.3)" }}>Get Free Quote</button>
            <a href="https://wa.me/919840199878" style={{ background:"rgba(255,255,255,0.1)",color:"#fff",fontFamily:PP,fontWeight:600,fontSize:14,padding:"14px 36px",borderRadius:30,border:"1.5px solid rgba(255,255,255,0.3)",backdropFilter:"blur(4px)" }}>WhatsApp Us</a>
          </div>
        </div>
      </div>

      <Wave color={C.ivory} />

      {/* ═══ VISITING CARDS SPOTLIGHT ═══ */}
      <Section>
        <div id="visiting-cards" style={{ background:C.ivory,padding:"80px 40px" }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:36,maxWidth:1200,margin:"0 auto 36px" }}>
            <div>
              <div style={{ fontFamily:NT,color:"#aaa",fontSize:13,marginBottom:4 }}>விசிட்டிங் கார்டு</div>
              <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:36,color:C.dark,margin:0 }}>Visiting Cards</h2>
              <div style={{ width:40,height:3,borderRadius:2,background:C.red,marginTop:10 }}/>
            </div>
            <button onClick={()=>setModal("cart")} style={{ color:C.red,fontFamily:PP,fontSize:13,fontWeight:700,background:"transparent",border:`1.5px solid ${C.red}`,padding:"8px 20px",borderRadius:30,cursor:"pointer" }}>View All →</button>
          </div>
          <div className="grid-3col" style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,maxWidth:1200,margin:"0 auto" }}>
            {PRODUCTS.map((p,i)=>(
              <div key={i} style={{
                borderRadius:16,overflow:"hidden",background:"#fff",
                transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
                transform:hoverProd===i?"translateY(-8px)":"none",
                boxShadow:hoverProd===i?"0 20px 50px rgba(0,0,0,0.12)":"0 2px 15px rgba(0,0,0,0.06)"
              }} onMouseEnter={()=>setHoverProd(i)} onMouseLeave={()=>setHoverProd(null)}>
                <div style={{ position:"relative",height:200,overflow:"hidden" }}>
                  <img src={p.img} alt={p.name} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s",transform:hoverProd===i?"scale(1.08)":"scale(1)" }} loading="lazy"/>
                  <div style={{ position:"absolute",inset:0,background:hoverProd===i?"linear-gradient(0deg,rgba(26,35,126,0.4),transparent)":"none",transition:"all 0.3s" }}/>
                  {p.badge && <div style={{ position:"absolute",top:12,left:12,background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,color:C.dark,fontFamily:PP,fontSize:10,fontWeight:700,padding:"4px 12px",borderRadius:20 }}>{p.badge}</div>}
                </div>
                <div style={{ padding:20 }}>
                  <div style={{ fontFamily:PF,fontWeight:700,fontSize:17,marginBottom:6,color:C.dark }}>{p.name}</div>
                  <div style={{ color:"#999",fontSize:12,lineHeight:1.5,marginBottom:10,fontFamily:PP }}>{p.spec}</div>
                  <div style={{ display:"flex",gap:6,marginBottom:14 }}>
                    <span style={{ background:"rgba(0,105,92,0.1)",color:C.teal,fontSize:10,fontWeight:600,padding:"4px 10px",borderRadius:20,fontFamily:PP }}>{p.days}</span>
                    <span style={{ background:"rgba(255,215,0,0.1)",color:C.goldDark,fontSize:10,fontWeight:600,padding:"4px 10px",borderRadius:20,fontFamily:PP }}>GST Incl.</span>
                  </div>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                    <span style={{ fontFamily:PF,color:C.red,fontSize:22,fontWeight:700 }}>{p.price}</span>
                    <button onClick={()=>setModal("cart")} style={{ background:`linear-gradient(135deg,${C.red},${C.maroon})`,color:"#fff",border:"none",padding:"9px 20px",borderRadius:30,cursor:"pointer",fontFamily:PP,fontSize:12,fontWeight:600,boxShadow:"0 4px 15px rgba(26,35,126,0.3)" }}>Order Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ WEDDING INVITATIONS ═══ */}
      <Section>
        <div id="wedding-cards" className="wedding-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:500 }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:4 }}>
            {[IMG.weddingInvite1,IMG.weddingInvite2,IMG.weddingInvite3,IMG.weddingCeremony].map((src,i)=>(
              <img key={i} src={src} alt="Wedding invitation" style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",minHeight:240 }} loading="lazy"/>
            ))}
          </div>
          <div style={{ background:`linear-gradient(145deg,${C.maroon},${C.red})`,padding:"60px 50px",display:"flex",flexDirection:"column",justifyContent:"center" }}>
            <div style={{ display:"inline-block",padding:"5px 16px",borderRadius:20,background:"rgba(255,215,0,0.15)",border:"1px solid rgba(255,215,0,0.3)",marginBottom:16,alignSelf:"flex-start" }}>
              <span style={{ color:C.gold,fontFamily:PP,fontSize:11,fontWeight:600,letterSpacing:"0.15em" }}>WEDDING SEASON SPECIAL</span>
            </div>
            <div style={{ fontFamily:NT,color:C.gold,fontSize:20,marginBottom:12 }}>திருமண சீசன் ஆஃபர்</div>
            <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:30,color:"#fff",lineHeight:1.25,marginBottom:16 }}>Beautiful Wedding Invitations</h2>
            <p style={{ color:"rgba(255,255,255,0.75)",fontSize:14,lineHeight:1.7,marginBottom:24,fontFamily:PP }}>Traditional Tamil-style to modern minimalist — Gloss, Matt, Spot UV and Embossed finishes on 300 GSM premium art board.</p>
            {[{img:IMG.weddingInvite1,name:"Gloss Lamination",price:"From ₹599"},{img:IMG.weddingInvite2,name:"Matt Lamination",price:"From ₹599"},{img:IMG.weddingInvite3,name:"Premium Spot UV",price:"From ₹999"}].map((w,i)=>(
              <div key={i} style={{ display:"flex",alignItems:"center",gap:14,marginBottom:12,padding:"8px 12px",background:"rgba(255,255,255,0.05)",borderRadius:10 }}>
                <img src={w.img} alt={w.name} style={{ width:56,height:42,borderRadius:8,border:"2px solid rgba(255,215,0,0.3)",objectFit:"cover",display:"block" }} loading="lazy"/>
                <div><div style={{ color:"#fff",fontFamily:PP,fontWeight:600,fontSize:13 }}>{w.name}</div><div style={{ color:C.gold,fontFamily:PP,fontSize:12 }}>{w.price}</div></div>
              </div>
            ))}
            <button onClick={()=>setModal("cart")} style={{ marginTop:16,background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,color:C.dark,fontFamily:PP,fontWeight:700,fontSize:13,padding:"14px 32px",borderRadius:30,alignSelf:"flex-start",border:"none",cursor:"pointer",boxShadow:"0 8px 25px rgba(255,215,0,0.3)" }}>Order Wedding Cards</button>
          </div>
        </div>
      </Section>

      <div id="stationery"/><div id="envelopes"/><div id="brochures"/><div id="stickers"/><div id="posters"/>

      <Wave color="#fff" flip />

      {/* ═══ HOW TO ORDER ═══ */}
      <Section>
        <div style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ textAlign:"center",marginBottom:50,maxWidth:500,margin:"0 auto 50px" }}>
            <div style={{ fontFamily:NT,color:C.red,fontSize:16,marginBottom:6 }}>ஆர்டர் எப்படி செய்வது?</div>
            <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:38,color:C.dark,margin:"0 0 14px" }}>Simple 4-Step Process</h2>
            <div style={{ width:60,height:4,borderRadius:2,background:`linear-gradient(90deg,${C.red},${C.gold})`,margin:"0 auto" }}/>
          </div>
          <div className="grid-4col" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,maxWidth:1200,margin:"0 auto" }}>
            {STEPS.map((s,i)=>(
              <div key={i} style={{ background:C.ivory,borderRadius:16,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.06)",transition:"transform 0.3s,box-shadow 0.3s" }}>
                <div style={{ position:"relative",height:180,overflow:"hidden" }}>
                  <img src={s.img} alt={s.title} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block" }} loading="lazy"/>
                  <div style={{ position:"absolute",inset:0,background:`linear-gradient(0deg,${s.color}cc,transparent)` }}/>
                  <div style={{ position:"absolute",top:14,left:14,width:40,height:40,borderRadius:"50%",background:C.gold,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 15px rgba(255,215,0,0.3)" }}>
                    <span style={{ fontFamily:PF,fontWeight:900,fontSize:16,color:C.dark }}>{s.num}</span>
                  </div>
                </div>
                <div style={{ padding:20 }}>
                  <h4 style={{ fontFamily:PF,fontSize:18,fontWeight:700,marginBottom:6,color:C.dark }}>{s.title}</h4>
                  <div style={{ fontFamily:NT,fontSize:11,color:"#aaa",marginBottom:8 }}>{s.tamil}</div>
                  <p style={{ fontFamily:PP,fontSize:13,color:"#666",lineHeight:1.6,marginBottom:12 }}>{s.desc}</p>
                  <div style={{ display:"flex",gap:5 }}>
                    {s.thumbs.map((t,ti)=><img key={ti} src={t} alt="" style={{ width:44,height:32,borderRadius:5,objectFit:"cover",display:"block",border:"1px solid #eee" }} loading="lazy"/>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Wave color={C.dark} />

      {/* ═══ PARALLAX / QUOTE DIVIDER ═══ */}
      <div style={{ height:420,overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" }}>
        <img src={IMG.pressWide} alt="Printing press" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block",filter:"brightness(0.3)" }} loading="lazy"/>
        <div style={{ position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(26,35,126,0.88),rgba(13,22,66,0.75),rgba(10,14,39,0.65))` }}/>
        <div style={{ position:"relative",zIndex:2,textAlign:"center",padding:"0 24px" }}>
          <div style={{ fontFamily:NT,color:"rgba(255,255,255,0.8)",fontSize:24,marginBottom:10 }}>தரம் • வேகம் • நம்பகத்தன்மை</div>
          <h2 className="glow-text" style={{ fontFamily:PF,fontWeight:900,fontSize:50,color:"#fff",lineHeight:1.2,marginBottom:14 }}>Quality. Speed. <span style={{color:C.gold}}>Trust.</span></h2>
          <p style={{ fontFamily:PP,color:"rgba(255,255,255,0.7)",fontSize:16,maxWidth:520,margin:"0 auto 28px" }}>Serving Chennai's businesses, designers and families for over 35 years.</p>
          <div style={{ display:"flex",justifyContent:"center",gap:16 }}>
            {[{src:IMG.glossCard,label:"Visiting Cards"},{src:IMG.weddingInvite1,label:"Wedding Cards"},{src:IMG.letterhead,label:"Stationery"}].map((t,i)=>(
              <div key={i} style={{ textAlign:"center" }}>
                <img src={t.src} alt={t.label} style={{ width:140,height:90,borderRadius:12,border:"2px solid rgba(255,215,0,0.3)",objectFit:"cover",display:"block",boxShadow:"0 8px 25px rgba(0,0,0,0.3)" }} loading="lazy"/>
                <div style={{ color:"rgba(255,255,255,0.8)",fontFamily:PP,fontSize:11,marginTop:8,fontWeight:500 }}>{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Wave color="#fff" />

      {/* ═══ ABOUT US ═══ */}
      <Section>
        <div id="about" style={{ background:"#fff",padding:"80px 40px" }}>
          <div className="about-grid" style={{ display:"grid",gridTemplateColumns:"44% 56%",gap:48,maxWidth:1200,margin:"0 auto",alignItems:"start" }}>
            <div>
              <img src={IMG.hero} alt="Super Printers workshop" style={{ width:"100%",height:400,objectFit:"cover",borderRadius:20,display:"block",boxShadow:`0 0 0 4px ${C.red},0 0 0 8px ${C.gold},0 20px 60px rgba(0,0,0,0.15)` }} loading="lazy"/>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:14 }}>
                <img src={IMG.workshop} alt="Workshop" style={{ width:"100%",height:180,objectFit:"cover",borderRadius:14,display:"block",boxShadow:"0 8px 25px rgba(0,0,0,0.1)" }} loading="lazy"/>
                <img src={IMG.inkPress} alt="Ink press" style={{ width:"100%",height:180,objectFit:"cover",borderRadius:14,display:"block",boxShadow:"0 8px 25px rgba(0,0,0,0.1)" }} loading="lazy"/>
              </div>
            </div>
            <div>
              <div style={{ color:C.gold,fontFamily:PP,fontSize:12,textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:10 }}>எங்களைப் பற்றி • OUR STORY</div>
              <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:36,color:C.dark,marginBottom:20,lineHeight:1.3 }}>Chennai's Printing Legacy — <span style={{color:C.red}}>Since 1990</span></h2>
              <div style={{ overflow:"hidden",marginBottom:18 }}>
                <img src={IMG.printedStack} alt="Printed materials" style={{ float:"right",width:140,height:100,borderRadius:10,objectFit:"cover",margin:"0 0 12px 16px",display:"block",boxShadow:"0 4px 15px rgba(0,0,0,0.1)" }} loading="lazy"/>
                <p style={{ fontFamily:PP,fontSize:14,color:"#555",lineHeight:1.8 }}>Super Printers was founded in 1990 as a small family printing press in Chennai. Over 35 years we have grown into a full-service printing house — but we have never lost the personal care and craftsmanship of a family business that knows every client by name.</p>
              </div>
              <div style={{ overflow:"hidden",marginBottom:18 }}>
                <img src={IMG.brochures} alt="Brochures" style={{ float:"left",width:130,height:90,borderRadius:10,objectFit:"cover",margin:"0 16px 12px 0",display:"block",boxShadow:"0 4px 15px rgba(0,0,0,0.1)" }} loading="lazy"/>
                <p style={{ fontFamily:PP,fontSize:14,color:"#555",lineHeight:1.8 }}>From a single offset press to a complete facility offering digital printing, large format, lamination and binding — we have grown with Chennai's businesses, wedding families and creative professionals for three decades.</p>
              </div>
              <div style={{ clear:"both" }}/>
              {[{c:C.red,t:"State-of-the-art offset and digital presses"},{c:C.gold,t:"35+ years of printing excellence in Chennai"},{c:C.teal,t:"10,000+ satisfied clients across Tamil Nadu"},{c:C.saffron,t:"Fast delivery — 1 to 4 business days"}].map((f,i)=>(
                <div key={i} style={{ display:"flex",alignItems:"center",gap:12,marginBottom:10 }}>
                  <div style={{ width:5,height:30,borderRadius:3,background:f.c,flexShrink:0 }}/>
                  <span style={{ fontFamily:PP,fontSize:14,color:"#555" }}>{f.t}</span>
                </div>
              ))}
              <button onClick={()=>scrollTo("contact")} style={{ marginTop:18,border:`2px solid ${C.red}`,color:C.red,fontFamily:PP,fontWeight:600,fontSize:13,padding:"12px 28px",borderRadius:30,background:"transparent",cursor:"pointer",transition:"all 0.3s" }}>Learn More →</button>
            </div>
          </div>
          {/* About image strip */}
          <div className="grid-5col" style={{ display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6,marginTop:48,borderRadius:14,overflow:"hidden",maxWidth:1200,margin:"48px auto 0" }}>
            {[{src:IMG.inkRollers,label:"Offset Press"},{src:IMG.glossCard,label:"Visiting Cards"},{src:IMG.weddingInvite1,label:"Wedding Cards"},{src:IMG.letterhead,label:"Stationery"},{src:IMG.delivery,label:"Fast Delivery"}].map((ai,i)=>(
              <div key={i} style={{ position:"relative",height:180,overflow:"hidden" }}>
                <img src={ai.src} alt={ai.label} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.4s" }} loading="lazy"/>
                <div style={{ position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(0,0,0,0.7),transparent 50%)" }}/>
                <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"10px 14px" }}>
                  <span style={{ color:"#fff",fontFamily:PP,fontSize:12,fontWeight:600 }}>{ai.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Wave color={C.dark} />

      {/* ═══ TESTIMONIALS ═══ */}
      <Section>
        <div style={{ background:`linear-gradient(135deg,${C.dark},#0D1642)`,padding:"80px 40px" }}>
          <div style={{ textAlign:"center",marginBottom:50 }}>
            <div style={{ fontFamily:NT,color:C.gold,fontSize:16,marginBottom:6 }}>வாடிக்கையாளர் கருத்துக்கள்</div>
            <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:38,color:"#fff",marginBottom:8 }}>What Our Clients Say</h2>
            <div style={{ width:60,height:4,borderRadius:2,background:`linear-gradient(90deg,${C.gold},${C.red})`,margin:"0 auto" }}/>
          </div>
          <div className="test-grid" style={{ display:"grid",gridTemplateColumns:"38% 62%",gap:0,maxWidth:1100,margin:"0 auto",borderRadius:20,overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
            <div style={{ position:"relative",overflow:"hidden",minHeight:400 }}>
              <img src={IMG.hero} alt="Super Printers" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block" }} loading="lazy"/>
              <div style={{ position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(26,35,126,0.92),rgba(13,22,66,0.88))` }}/>
              <div style={{ position:"relative",zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:36 }}>
                <div style={{ width:80,height:80,borderRadius:"50%",background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,boxShadow:"0 0 30px rgba(255,215,0,0.3)" }}>
                  <span style={{ fontFamily:PF,fontWeight:900,fontSize:28,color:C.dark }}>★</span>
                </div>
                <h3 style={{ fontFamily:PF,fontWeight:700,fontStyle:"italic",fontSize:28,color:"#fff",textAlign:"center",marginBottom:10 }}>Trusted by Thousands</h3>
                <p style={{ fontFamily:PP,fontSize:14,color:"rgba(255,255,255,0.6)",textAlign:"center" }}>10,000+ happy clients across Tamil Nadu</p>
              </div>
            </div>
            <div style={{ background:C.ivory,padding:"44px 48px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" }}>
              {TESTIMONIALS.map((t,i)=>(
                <div key={i} style={{ display:testIdx===i?"block":"none",background:"#fff",borderRadius:16,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.06)",borderLeft:`4px solid ${C.gold}`,maxWidth:440,width:"100%" }}>
                  <div style={{ display:"flex",gap:14,padding:22,alignItems:"center",borderBottom:"1px solid #f0f0f0" }}>
                    <img src={t.img} alt={t.name} style={{ width:50,height:50,borderRadius:"50%",objectFit:"cover",display:"block",border:`2px solid ${C.gold}` }} loading="lazy"/>
                    <div><div style={{ fontFamily:PP,fontWeight:700,fontSize:15,color:C.dark }}>{t.name}</div><div style={{ fontFamily:PP,fontSize:12,color:"#999" }}>{t.role}</div></div>
                  </div>
                  <div style={{ padding:22 }}>
                    <div style={{ color:C.gold,fontSize:22,marginBottom:10,letterSpacing:2 }}>★★★★★</div>
                    <p style={{ fontFamily:PP,fontSize:14,fontStyle:"italic",color:"#555",lineHeight:1.7 }}>"{t.quote}"</p>
                  </div>
                </div>
              ))}
              <div style={{ display:"flex",justifyContent:"center",gap:8,marginTop:20 }}>
                {TESTIMONIALS.map((_,i)=>(
                  <button key={i} onClick={()=>setTestIdx(i)} style={{ width:testIdx===i?28:10,height:10,borderRadius:5,background:testIdx===i?`linear-gradient(90deg,${C.red},${C.gold})`:"#ddd",border:"none",cursor:"pointer",transition:"all 0.4s" }}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Wave color="#fff" />

      {/* ═══ GALLERY ═══ */}
      <Section>
        <div id="gallery" style={{ background:"#fff",padding:"80px 40px" }}>
          <div style={{ textAlign:"center",marginBottom:36 }}>
            <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:38,color:C.dark,marginBottom:6 }}>Our Print Gallery</h2>
            <div style={{ fontFamily:NT,color:"#aaa",fontSize:13 }}>எங்கள் படைப்புகள் | Every product printed at Super Printers</div>
          </div>
          <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8,marginBottom:30 }}>
            {GAL_FILTERS.map(f=>(
              <button key={f} onClick={()=>setGalFilter(f)} style={{ background:galFilter===f?`linear-gradient(135deg,${C.red},${C.maroon})`:"#f5f5f5",color:galFilter===f?"#fff":"#666",border:"none",padding:"8px 20px",borderRadius:30,cursor:"pointer",fontFamily:PP,fontSize:12,fontWeight:600,transition:"all 0.3s",boxShadow:galFilter===f?"0 4px 15px rgba(26,35,126,0.3)":"none" }}>{f}</button>
            ))}
          </div>
          <div style={{ columnCount:4,columnGap:10,maxWidth:1200,margin:"0 auto" }}>
            {filtered.map((item,i)=>(
              <div key={`${item.label}-${i}`} style={{ breakInside:"avoid",marginBottom:10,borderRadius:12,overflow:"hidden",position:"relative",cursor:"pointer",transition:"transform 0.3s",transform:hoverGal===i?"scale(1.02)":"scale(1)" }}
                onMouseEnter={()=>setHoverGal(i)} onMouseLeave={()=>setHoverGal(null)}>
                <img src={item.img} alt={item.label} style={{ width:"100%",display:"block",objectFit:"cover" }} loading="lazy"/>
                <div style={{ position:"absolute",inset:0,background:`linear-gradient(0deg,rgba(26,35,126,0.85),rgba(0,0,0,0.3),transparent)`,opacity:hoverGal===i?1:0,transition:"opacity 0.3s",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",padding:20 }}>
                  <div style={{ color:"#fff",fontFamily:PP,fontWeight:700,fontSize:14,marginBottom:4 }}>{item.label}</div>
                  <span style={{ color:C.gold,fontFamily:PP,fontSize:12,fontWeight:500 }}>View →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Wave color={C.dark} />

      {/* ═══ WHY CHOOSE US ═══ */}
      <Section>
        <div style={{ background:`linear-gradient(135deg,${C.dark},#0D1642)`,padding:"80px 40px" }}>
          <div style={{ textAlign:"center",marginBottom:50 }}>
            <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:38,color:"#fff",marginBottom:6 }}>Why Choose <span style={{color:C.gold}}>Super Printers</span></h2>
            <div style={{ fontFamily:NT,color:"rgba(255,215,0,0.7)",fontSize:14 }}>ஏன் சுப்பர் பிரிண்டர்ஸ்?</div>
          </div>
          <div className="grid-4col" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20,maxWidth:1200,margin:"0 auto" }}>
            {WHY.map((w,i)=>(
              <div key={i} style={{
                background:"rgba(255,255,255,0.03)",borderRadius:16,overflow:"hidden",
                border:"1px solid rgba(255,215,0,0.1)",
                transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)",
                transform:hoverWhy===i?"translateY(-8px)":"none",
                boxShadow:hoverWhy===i?"0 20px 50px rgba(0,0,0,0.3),0 0 30px rgba(255,215,0,0.1)":"0 4px 20px rgba(0,0,0,0.2)"
              }} onMouseEnter={()=>setHoverWhy(i)} onMouseLeave={()=>setHoverWhy(null)}>
                <div style={{ position:"relative",height:180,overflow:"hidden" }}>
                  <img src={w.img} alt={w.title} style={{ width:"100%",height:"100%",objectFit:"cover",display:"block",transition:"transform 0.5s",transform:hoverWhy===i?"scale(1.1)":"scale(1)" }} loading="lazy"/>
                  <div style={{ position:"absolute",inset:0,background:`linear-gradient(0deg,${C.dark},transparent)` }}/>
                </div>
                <div style={{ padding:20 }}>
                  <div style={{ fontFamily:PF,fontWeight:700,fontSize:18,color:"#fff",marginBottom:4 }}>{w.title}</div>
                  <div style={{ fontFamily:NT,fontSize:11,color:C.gold,marginBottom:10 }}>{w.tamil}</div>
                  <p style={{ fontFamily:PP,fontSize:13,color:"rgba(255,255,255,0.5)",lineHeight:1.6,marginBottom:14 }}>{w.body}</p>
                  <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
                    <span style={{ fontFamily:PP,fontSize:11,fontWeight:700,color:C.gold }}>{w.extra}</span>
                    <img src={w.thumb} alt="" style={{ width:46,height:33,borderRadius:6,objectFit:"cover",display:"block",border:"1px solid rgba(255,215,0,0.2)" }} loading="lazy"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ CTA BAND 2 ═══ */}
      <div style={{ background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,padding:"50px 40px",textAlign:"center" }}>
        <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:34,color:C.dark,marginBottom:12 }}>Start Your Printing Journey Today</h2>
        <p style={{ fontFamily:PP,color:"rgba(26,26,26,0.7)",fontSize:15,marginBottom:24,maxWidth:500,margin:"0 auto 24px" }}>Get premium quality prints delivered to your doorstep. Free quotes within 2 hours.</p>
        <div style={{ display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap" }}>
          <button onClick={()=>scrollTo("contact")} style={{ background:`linear-gradient(135deg,${C.red},${C.maroon})`,color:"#fff",fontFamily:PP,fontWeight:700,fontSize:14,padding:"14px 36px",borderRadius:30,border:"none",cursor:"pointer",boxShadow:"0 8px 25px rgba(26,35,126,0.3)" }}>Get Free Quote</button>
          <a href="https://wa.me/919840199878" style={{ background:C.wa,color:"#fff",fontFamily:PP,fontWeight:700,fontSize:14,padding:"14px 36px",borderRadius:30,boxShadow:"0 8px 25px rgba(37,211,102,0.3)" }}>WhatsApp Order</a>
        </div>
      </div>

      <Wave color="#fff" />

      {/* ═══ CONTACT ═══ */}
      <Section>
        <div id="contact" className="contact-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",minHeight:600,maxWidth:1400,margin:"0 auto" }}>
          <div style={{ position:"relative",overflow:"hidden",borderRadius:"20px 0 0 20px" }}>
            <img src={IMG.workshop} alt="Super Printers workshop" style={{ position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",display:"block" }} loading="lazy"/>
            <div style={{ position:"absolute",inset:0,background:`linear-gradient(135deg,rgba(26,35,126,0.92),rgba(13,22,66,0.88))` }}/>
            <div style={{ position:"relative",zIndex:2,padding:"56px 48px",display:"flex",flexDirection:"column",justifyContent:"center",height:"100%" }}>
              <div style={{ fontFamily:NT,color:"rgba(255,255,255,0.6)",fontSize:14,marginBottom:8 }}>எங்களை தொடர்பு கொள்ளுங்கள்</div>
              <h2 style={{ fontFamily:PF,fontWeight:900,fontSize:32,color:"#fff",marginBottom:24,lineHeight:1.3 }}>Get in Touch with <span style={{color:C.gold}}>Super Printers</span></h2>
              {[{text:"No 8 Saraswathy Colony, Pallavaram, Chennai – 600 043",label:"Address"},{text:"+91 9840199878",label:"Phone"},{text:"Superprntrs@yahoo.com",label:"Email"},{text:"Mon–Sat: 9AM–7PM | Sunday: Closed",label:"Hours"}].map((r,i)=>(
                <div key={i} style={{ display:"flex",alignItems:"center",gap:14,marginBottom:14 }}>
                  <div style={{ width:48,height:48,borderRadius:12,background:"rgba(255,215,0,0.1)",border:"1px solid rgba(255,215,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                    <span style={{ color:C.gold,fontFamily:PP,fontSize:10,fontWeight:700 }}>{r.label}</span>
                  </div>
                  <span style={{ color:"rgba(255,255,255,0.85)",fontFamily:PP,fontSize:14 }}>{r.text}</span>
                </div>
              ))}
              <a href="https://wa.me/919840199878" style={{ display:"inline-block",marginTop:20,background:C.wa,color:"#fff",fontFamily:PP,fontWeight:700,fontSize:13,padding:"12px 28px",borderRadius:30,alignSelf:"flex-start",boxShadow:"0 8px 25px rgba(37,211,102,0.3)" }}>WhatsApp Order</a>
              <div style={{ marginTop:20,borderRadius:14,overflow:"hidden",border:"2px solid rgba(255,215,0,0.2)" }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.1478823!3d12.9666825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fcc22e3457d%3A0x8e423468eccddee2!2sSuper%20Printers%20-%20Wedding%20Cards%20%26%20Printing!5e0!3m2!1sen!2sin!4v1" width="100%" height="200" style={{ border:0,display:"block" }} loading="lazy" title="Super Printers Location" allowFullScreen/>
              </div>
            </div>
          </div>
          <div style={{ background:C.ivory,padding:"56px 48px",display:"flex",flexDirection:"column",justifyContent:"center",borderRadius:"0 20px 20px 0" }}>
            <h2 style={{ fontFamily:PF,fontSize:28,color:C.red,marginBottom:6 }}>Get a Free Quote</h2>
            <p style={{ fontFamily:PP,fontSize:14,color:"#999",marginBottom:20 }}>We respond within 2 hours during business hours</p>
            <img src={IMG.printedBrochures} alt="Prints" style={{ width:"100%",height:90,borderRadius:12,objectFit:"cover",display:"block",marginBottom:20 }} loading="lazy"/>
            <input type="text" placeholder="Full Name" value={formName} onChange={e=>setFormName(e.target.value)} style={{ border:"2px solid #eee",borderRadius:10,padding:"12px 16px",marginBottom:12,fontSize:14,fontFamily:PP,width:"100%",outline:"none",background:"#fff",transition:"border 0.3s" }}/>
            <input type="tel" placeholder="Phone (+91)" value={formPhone} onChange={e=>setFormPhone(e.target.value)} style={{ border:"2px solid #eee",borderRadius:10,padding:"12px 16px",marginBottom:12,fontSize:14,fontFamily:PP,width:"100%",outline:"none",background:"#fff",transition:"border 0.3s" }}/>
            <input type="email" placeholder="Email Address" value={formEmail} onChange={e=>setFormEmail(e.target.value)} style={{ border:"2px solid #eee",borderRadius:10,padding:"12px 16px",marginBottom:12,fontSize:14,fontFamily:PP,width:"100%",outline:"none",background:"#fff",transition:"border 0.3s" }}/>
            <select value={formService} onChange={e=>setFormService(e.target.value)} style={{ border:"2px solid #eee",borderRadius:10,padding:"12px 16px",marginBottom:12,fontSize:14,fontFamily:PP,width:"100%",background:"#fff" }}>
              <option>Select Service</option>
              {["Visiting Cards","Wedding Invitations","Letterheads","Envelopes","Stickers","Brochures","Posters","Lamination","Other"].map(s=><option key={s}>{s}</option>)}
            </select>
            <textarea rows={3} placeholder="Describe your requirements" value={formMsg} onChange={e=>setFormMsg(e.target.value)} style={{ border:"2px solid #eee",borderRadius:10,padding:"12px 16px",marginBottom:16,fontSize:14,fontFamily:PP,width:"100%",resize:"vertical",outline:"none",background:"#fff" }}/>
            <button onClick={()=>{const msg=`Hi Super Printers! I'd like a quote.\n\nName: ${formName}\nPhone: ${formPhone}\nEmail: ${formEmail}\nService: ${formService}\nDetails: ${formMsg}`;window.open(`https://wa.me/919840199878?text=${encodeURIComponent(msg)}`,"_blank")}} style={{ width:"100%",padding:"14px",background:`linear-gradient(135deg,${C.wa},#128C7E)`,color:"#fff",border:"none",borderRadius:30,fontFamily:PP,fontWeight:700,fontSize:15,cursor:"pointer",boxShadow:"0 8px 25px rgba(37,211,102,0.3)",transition:"all 0.3s",display:"flex",alignItems:"center",justifyContent:"center",gap:10 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Send Enquiry via WhatsApp
            </button>
          </div>
        </div>
      </Section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ background:C.dark,marginTop:80 }}>
        <div style={{ height:5,background:`linear-gradient(90deg,${C.red},${C.saffron},${C.gold},${C.teal},${C.red})` }}/>
        <div className="footer-grid" style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:32,padding:"56px 40px 32px",maxWidth:1200,margin:"0 auto" }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:10,marginBottom:14 }}>
              <div style={{ width:40,height:40,borderRadius:10,background:`linear-gradient(135deg,${C.gold},${C.goldDark})`,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontFamily:PF,fontWeight:900,fontSize:16,color:C.dark }}>SP</span>
              </div>
              <div><div style={{ fontFamily:PF,color:C.gold,fontSize:18,fontWeight:700 }}>Super Printers</div><div style={{ fontFamily:NT,color:"rgba(255,215,0,0.5)",fontSize:10 }}>சுப்பர் பிரிண்டர்ஸ்</div></div>
            </div>
            <p style={{ color:"rgba(255,255,255,0.4)",fontSize:13,fontFamily:PP,marginBottom:14,lineHeight:1.6 }}>Chennai's finest printing press since 1990. Premium quality, fast delivery.</p>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4 }}>
              {[IMG.glossCard,IMG.mattCard,IMG.weddingInvite1,IMG.weddingInvite2,IMG.letterhead,IMG.envelopes].map((src,i)=>(
                <img key={i} src={src} alt="Product" style={{ width:"100%",height:50,borderRadius:6,objectFit:"cover",display:"block" }} loading="lazy"/>
              ))}
            </div>
          </div>
          <div>
            <div style={{ color:C.gold,fontFamily:PP,fontWeight:700,fontSize:14,marginBottom:14 }}>Quick Links</div>
            {[{label:"Home",anchor:"top"},{label:"Products",anchor:"products"},{label:"Gallery",anchor:"gallery"},{label:"About Us",anchor:"about"},{label:"Contact",anchor:"contact"}].map(l=>(
              <button key={l.label} onClick={()=>scrollTo(l.anchor)} style={{ display:"block",color:"rgba(255,255,255,0.45)",fontFamily:PP,fontSize:13,padding:"5px 0",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",transition:"color 0.3s" }}>{l.label}</button>
            ))}
          </div>
          <div>
            <div style={{ color:C.gold,fontFamily:PP,fontWeight:700,fontSize:14,marginBottom:14 }}>Our Products</div>
            {["Visiting Cards","Wedding Invitations","Letterheads","Envelopes","Stickers","Brochures","Posters","Lamination"].map(l=>(
              <span key={l} style={{ display:"block",color:"rgba(255,255,255,0.45)",fontFamily:PP,fontSize:13,padding:"5px 0" }}>{l}</span>
            ))}
          </div>
          <div>
            <div style={{ color:C.gold,fontFamily:PP,fontWeight:700,fontSize:14,marginBottom:14 }}>Get in Touch</div>
            {["No 8 Saraswathy Colony, Pallavaram","Chennai – 600 043","+91 9840199878","Superprntrs@yahoo.com","Mon–Sat: 9AM–7PM"].map((t,i)=>(
              <p key={i} style={{ color:"rgba(255,255,255,0.45)",fontFamily:PP,fontSize:13,margin:"5px 0" }}>{t}</p>
            ))}
            <div style={{ marginTop:16,display:"flex",gap:10 }}>
              <a href="https://wa.me/919840199878" target="_blank" rel="noopener noreferrer" style={{ width:40,height:40,borderRadius:"50%",background:C.wa,display:"flex",alignItems:"center",justifyContent:"center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
              <a href="#" style={{ width:40,height:40,borderRadius:"50%",background:"#1877F2",display:"flex",alignItems:"center",justifyContent:"center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="#" style={{ width:40,height:40,borderRadius:"50%",background:"linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",display:"flex",alignItems:"center",justifyContent:"center" }}><svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid rgba(255,215,0,0.1)",padding:"16px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",maxWidth:1200,margin:"0 auto" }}>
          <span style={{ color:"rgba(255,255,255,0.3)",fontFamily:PP,fontSize:12 }}>© 2026 Super Printers, Chennai. All Rights Reserved.</span>
          <div style={{ display:"flex",gap:8 }}>
            {[IMG.inkRollers,IMG.glossCard,IMG.delivery,IMG.pressTools].map((src,i)=>(
              <img key={i} src={src} alt="" style={{ width:34,height:34,borderRadius:"50%",objectFit:"cover",border:"2px solid rgba(255,215,0,0.15)",display:"block" }} loading="lazy"/>
            ))}
          </div>
        </div>
      </footer>

      {/* ═══ FLOATING BUTTONS ═══ */}
      <a href="https://wa.me/919840199878" target="_blank" rel="noopener noreferrer" style={{ position:"fixed",bottom:28,right:28,width:58,height:58,borderRadius:"50%",background:C.wa,display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,animation:"waPulse 2s infinite",textDecoration:"none",boxShadow:"0 8px 25px rgba(37,211,102,0.4)" }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      {scrolled && (
        <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} style={{ position:"fixed",bottom:28,left:28,width:48,height:48,borderRadius:"50%",background:`linear-gradient(135deg,${C.red},${C.maroon})`,border:"none",cursor:"pointer",zIndex:9999,boxShadow:"0 8px 25px rgba(26,35,126,0.4)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s" }}>
          <span style={{ color:"#fff",fontSize:18,fontWeight:700 }}>↑</span>
        </button>
      )}
    </div>
  );
};

export default Index;
