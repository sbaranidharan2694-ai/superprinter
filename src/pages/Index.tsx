import { useState, useEffect, useRef, lazy, Suspense } from "react";

const Scene3D = lazy(() => import("@/components/Scene3D"));

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

// ─── DATA ───────────────────────────────────────────────────────
const SLIDES = [
  { bg: IMG.hero, badge: "TAMIL NADU'S TRUSTED PRESS", h1a: "Premium Offset", h1b: "Printing for Every Need", body: "Business cards, wedding invitations, letterheads and more — printed with precision since 1990.", btn1: "Order Now", btn1Action: "products", btn2: "Get Free Quote", btn2Action: "quote", rightImg: IMG.glossCard },
  { bg: IMG.weddingCeremony, badge: "WEDDING SEASON SPECIAL", h1a: "Beautiful Wedding", h1b: "Invitations", tamil: "திருமண அழைப்பிதழ்கள்", body: "Gloss, Matt, Spot UV & Premium finishes on 300 GSM Art Board.", btn1: "See Designs", btn1Action: "wedding-cards", rightImg: IMG.weddingInvite1 },
  { bg: IMG.offsetPress, badge: "1 TO 4 BUSINESS DAYS", h1a: "Order Online.", h1b: "Delivered Fast.", body: "We deliver across Chennai, Coimbatore, and all Tamil Nadu.", btn1: "Order Now", btn1Action: "products", btn2: "Track Order", btn2Action: "track", rightImg: IMG.glossCard },
];

const TRUST = [
  { num: "35+", label: "Years Experience", sub: "Since 1990" },
  { num: "10,000+", label: "Happy Clients", sub: "Across India" },
  { num: "50+", label: "Print Services", sub: "Complete Range" },
  { num: "1–4", label: "Day Delivery", sub: "Pan Tamil Nadu" },
];

const CATEGORIES = [
  { name: "Visiting Cards", sub: "Gloss • Matt • Spot UV • Velvet", img: IMG.glossCard, anchor: "visiting-cards", badge: "Best Seller" },
  { name: "Wedding Invitations", sub: "300 GSM Art Board • Premium", img: IMG.weddingInvite1, anchor: "wedding-cards", badge: "Popular" },
  { name: "Letterheads", sub: "80 GSM • 100 GSM Bond", img: IMG.letterhead, anchor: "stationery" },
  { name: "Envelopes & Covers", sub: "80 • 100 • 130 • 170 GSM", img: IMG.envelopes, anchor: "envelopes" },
  { name: "Stickers", sub: "Mirror Coated • 20×30 inch", img: IMG.stickerSheets, anchor: "stickers", badge: "New" },
  { name: "Brochures & Flyers", sub: "Tri-fold • Bi-fold • A4", img: IMG.brochures, anchor: "brochures" },
];

const PRODUCTS = [
  { name: "Gloss Visiting Card", spec: "300 GSM | 90×53mm | Gloss Lam", days: "1-2 Days", price: "₹299", img: IMG.glossCard, badge: "Best Seller" },
  { name: "Matt Visiting Card", spec: "300 GSM | 90×53mm | Matt Lam", days: "1-2 Days", price: "₹299", img: IMG.mattCard, badge: "Popular" },
  { name: "Spot UV Card", spec: "300 GSM | 90×53mm | Spot UV", days: "6-10 Days", price: "₹499", img: IMG.spotUvCard, badge: "Premium" },
  { name: "Velvet Lamination", spec: "400 GSM | 90×53mm | Velvet Lam", days: "10-15 Days", price: "₹799", img: IMG.velvetCard, badge: "Luxury" },
  { name: "Synthetic Card", spec: "Non-Tearable Paper | 90×53mm", days: "2-4 Days", price: "₹499", img: IMG.syntheticCard },
  { name: "Velvet + Gold Foil", spec: "400 GSM | Velvet + Foil Stamping", days: "10-15 Days", price: "₹999", img: IMG.goldFoilCard, badge: "Premium" },
];

const STEPS = [
  { img: IMG.glossCard, title: "Choose Product", tamil: "தயாரிப்பை தேர்ந்தெடுங்கள்", desc: "Browse visiting cards, wedding invitations, letterheads and more.", num: "01" },
  { img: IMG.printShop, title: "Upload Your Design", tamil: "டிசைனை அப்லோட் செய்யுங்கள்", desc: "Upload print-ready PDF or CDR. No design? Our team helps create one.", num: "02" },
  { img: IMG.inkRollers, title: "We Print with Precision", tamil: "துல்லியமாக அச்சிடுகிறோம்", desc: "Quality checked on offset and digital presses.", num: "03" },
  { img: IMG.parcel, title: "Delivered to You", tamil: "உங்கள் வீட்டிற்கே டெலிவரி", desc: "Pan Tamil Nadu delivery in 1–4 business days.", num: "04" },
];

const TESTIMONIALS = [
  { name: "Senthil Kumar", role: "Business Owner, T. Nagar", quote: "Super Printers-ல் visiting card-கள் print செய்தோம். Quality மிகவும் அருமை. Quick delivery!" },
  { name: "Priya Krishnan", role: "Bride, Adyar, Chennai", quote: "Wedding invitation-கள் மிகவும் beautiful-ஆக வந்தது. Spot UV finish excellent!" },
  { name: "Suresh & Associates", role: "Advocate, Madurai", quote: "10 years-ஆக letterhead மற்றும் envelope print செய்கிறோம். Quality consistent." },
  { name: "Ramesh Velayutham", role: "Event Coordinator, Coimbatore", quote: "Same-day flyers 4 மணி நேரத்தில் deliver பண்ணினார்கள். Excellent service!" },
];

const WHY = [
  { img: IMG.offsetPress, title: "35 Years of Excellence", body: "Three decades of offset printing excellence with state-of-the-art presses." },
  { img: IMG.delivery, title: "Fast Pan-TN Delivery", body: "1–4 business days across Tamil Nadu. Same-day pickup from Chennai." },
  { img: IMG.qualityCheck, title: "Quality Guaranteed", body: "Multi-point quality checks on every job. Colour accurate, sharp results." },
  { img: IMG.stackedCards, title: "Competitive Pricing", body: "Transparent pricing. Bulk discounts for DTP operators and resellers." },
];

const NAV_LINKS = [
  {label:"Home",anchor:"top"},{label:"Products",anchor:"products"},{label:"Visiting Cards",anchor:"visiting-cards"},
  {label:"Wedding Cards",anchor:"wedding-cards"},{label:"Gallery",anchor:"gallery"},{label:"About",anchor:"about"},{label:"Contact",anchor:"contact"},
];

type GalCat = "All"|"Visiting Cards"|"Wedding Cards"|"Stationery"|"Brochures"|"Press";
const GALLERY: {img:string;label:string;cat:GalCat}[] = [
  {img:IMG.glossCard,label:"Gloss Visiting Card",cat:"Visiting Cards"},{img:IMG.weddingInvite1,label:"Wedding Invitation",cat:"Wedding Cards"},
  {img:IMG.inkRollers,label:"Offset Press",cat:"Press"},{img:IMG.letterhead,label:"Letterhead Set",cat:"Stationery"},
  {img:IMG.mattCard,label:"Matt Visiting Card",cat:"Visiting Cards"},{img:IMG.envelopes,label:"Envelope / Cover",cat:"Stationery"},
  {img:IMG.stickerSheets,label:"Sticker Print",cat:"Stationery"},{img:IMG.weddingInvite2,label:"Wedding Matt",cat:"Wedding Cards"},
  {img:IMG.brochures,label:"Brochure",cat:"Brochures"},{img:IMG.velvetCard,label:"Velvet Card",cat:"Visiting Cards"},
  {img:IMG.weddingInvite3,label:"Premium Wedding Card",cat:"Wedding Cards"},{img:IMG.premiumCards,label:"Premium Cards",cat:"Visiting Cards"},
];
const GAL_FILTERS: GalCat[] = ["All","Visiting Cards","Wedding Cards","Stationery","Brochures","Press"];

const scrollTo = (id: string) => {
  if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ─── HOOKS ──────────────────────────────────────────────────────
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

const Counter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView(0.3);
  const num = parseInt(target.replace(/[^0-9]/g, "")) || 0;
  useEffect(() => {
    if (!visible || num === 0) return;
    let s = 0;
    const step = Math.max(1, Math.floor(num / 60));
    const t = setInterval(() => { s += step; if (s >= num) { setCount(num); clearInterval(t); } else setCount(s); }, 30);
    return () => clearInterval(t);
  }, [visible, num]);
  return <span ref={ref}>{num === 0 ? target : count.toLocaleString() + suffix}</span>;
};

const FadeIn = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, visible } = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(32px)", transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
      {children}
    </div>
  );
};

// ─── SECTION LABEL ──────────────────────────────────────────────
const SectionLabel = ({ label, tamil }: { label: string; tamil?: string }) => (
  <div className="flex items-center gap-3 mb-3">
    <div className="h-px flex-1 max-w-[40px] bg-primary" />
    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary font-body">{label}</span>
    {tamil && <span className="text-xs text-muted-foreground font-tamil">{tamil}</span>}
  </div>
);

// ─── MAIN COMPONENT ─────────────────────────────────────────────
const Index = () => {
  const [slide, setSlide] = useState(0);
  const [testIdx, setTestIdx] = useState(0);
  const [galFilter, setGalFilter] = useState<GalCat>("All");
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState<string|null>(null);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formService, setFormService] = useState("");
  const [formMsg, setFormMsg] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const si = setInterval(() => setSlide(p => (p+1)%3), 5000);
    const ti = setInterval(() => setTestIdx(p => (p+1)%TESTIMONIALS.length), 5000);
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
    <div id="top" className="font-body text-foreground bg-background overflow-x-hidden">

      {/* ═══ MODAL ═══ */}
      {modal && (
        <div className="fixed inset-0 z-[10000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={()=>setModal(null)}>
          <div onClick={e=>e.stopPropagation()} className="bg-background rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
              <span className="text-primary-foreground font-display font-bold text-xl">SP</span>
            </div>
            <h3 className="font-display font-bold text-xl text-center mb-2">
              {modal==="orders"&&"Order Tracking"}{modal==="track"&&"Track Your Order"}{modal==="cart"&&"Place Your Order"}
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
              {modal==="orders"&&"Order tracking coming soon. Please WhatsApp us at +91 9840199878 for order status."}
              {modal==="track"&&"Track your order via WhatsApp: +91 9840199878"}
              {modal==="cart"&&"To place an order, please WhatsApp us or fill the quote form below."}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://wa.me/919840199878" className="bg-[#25D366] text-white font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">WhatsApp Us</a>
              {modal==="cart"&&<button onClick={()=>{setModal(null);scrollTo("contact")}} className="bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">Fill Quote Form</button>}
              <button onClick={()=>setModal(null)} className="text-muted-foreground font-medium text-sm px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ TOP BAR ═══ */}
      <div className="bg-foreground text-white/70 text-[11px] font-medium flex items-center justify-between px-6 py-2 border-b border-white/10">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Chennai, Tamil Nadu — Since 1990
        </span>
        <div className="hidden sm:flex items-center gap-4">
          <a href="tel:+919840199878" className="hover:text-white transition-colors">+91 9840199878</a>
          <span className="text-white/20">|</span>
          <a href="mailto:superprntrs@yahoo.com" className="hover:text-white transition-colors">superprntrs@yahoo.com</a>
        </div>
      </div>

      {/* ═══ NAVBAR ═══ */}
      <nav className={`sticky top-0 z-[100] transition-all duration-500 ${scrolled ? "bg-background/98 backdrop-blur-xl shadow-lg border-b border-border" : "bg-foreground border-b border-white/10"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[68px]">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={()=>scrollTo("top")}>
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <span className="font-display font-bold text-lg text-primary-foreground">SP</span>
            </div>
            <div>
              <div className={`font-display font-bold text-lg transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>Super Printers</div>
              <div className={`font-tamil text-[10px] transition-colors ${scrolled ? "text-muted-foreground" : "text-white/50"}`}>சுப்பர் பிரிண்டர்ஸ் • Est. 1990</div>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <button key={l.label} onClick={()=>scrollTo(l.anchor)}
                className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all ${scrolled ? "text-muted-foreground hover:text-foreground hover:bg-accent" : "text-white/70 hover:text-white hover:bg-white/10"}`}>
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button onClick={()=>setModal("orders")} className={`hidden sm:block text-xs font-semibold px-4 py-2 rounded-full transition-all ${scrolled ? "text-foreground border border-border hover:bg-accent" : "text-white/80 border border-white/20 hover:bg-white/10"}`}>
              My Orders
            </button>
            <button onClick={()=>scrollTo("contact")} className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-xs px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
              Get Quote
            </button>
            <button onClick={()=>setMobileMenu(!mobileMenu)} className={`lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-colors ${scrolled?"hover:bg-accent":"hover:bg-white/10"}`}>
              <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled?"bg-foreground":"bg-white"} ${mobileMenu?"rotate-45 translate-y-[4px]":""}`}/>
              <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled?"bg-foreground":"bg-white"} ${mobileMenu?"opacity-0":""}`}/>
              <span className={`w-5 h-0.5 rounded-full transition-all duration-300 ${scrolled?"bg-foreground":"bg-white"} ${mobileMenu?"-rotate-45 -translate-y-[4px]":""}`}/>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenu && (
          <div className={`lg:hidden border-t shadow-xl ${scrolled ? "bg-background border-border" : "bg-foreground border-white/10"}`}>
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map(l => (
                <button key={l.label} onClick={()=>{scrollTo(l.anchor);setMobileMenu(false)}} className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors ${scrolled ? "text-foreground hover:bg-accent" : "text-white/80 hover:bg-white/10"}`}>
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* ═══ HERO WITH 3D ═══ */}
      <div className="relative min-h-[92vh] flex items-center overflow-hidden bg-foreground">
        {SLIDES.map((s, i) => (
          <img key={i} src={s.bg} alt="Super Printers" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide===i?"opacity-100":"opacity-0"}`} style={{filter:"brightness(0.25)"}} loading={i===0?"eager":"lazy"} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div key={slide} className="animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase">{SLIDES[slide].badge}</span>
              </div>

              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] text-white leading-[1.05] mb-5">
                {SLIDES[slide].h1a}<br/>
                <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">{SLIDES[slide].h1b}</span>
              </h1>

              {SLIDES[slide].tamil && <p className="font-tamil text-secondary/60 text-lg mb-4">{SLIDES[slide].tamil}</p>}

              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">{SLIDES[slide].body}</p>

              <div className="flex flex-wrap gap-4">
                <button onClick={()=>handleSlideBtn(SLIDES[slide].btn1Action)} className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-sm px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                  {SLIDES[slide].btn1}
                </button>
                {SLIDES[slide].btn2 && (
                  <button onClick={()=>handleSlideBtn(SLIDES[slide].btn2Action)} className="border border-white/20 text-white/90 font-medium text-sm px-10 py-4 rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
                    {SLIDES[slide].btn2}
                  </button>
                )}
              </div>

              {/* Mini trust bar in hero */}
              <div className="flex items-center gap-6 mt-12">
                {[{n:"35+",l:"Years"},{n:"10K+",l:"Clients"},{n:"50+",l:"Services"}].map((s,i) => (
                  <div key={i} className="text-center">
                    <div className="font-display font-black text-xl text-white">{s.n}</div>
                    <div className="text-white/40 text-[10px] font-medium tracking-wider uppercase">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3D Scene */}
            <div className="hidden lg:block h-[500px] relative">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              }>
                <Scene3D />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[0,1,2].map(i => (
            <button key={i} onClick={()=>setSlide(i)} className={`h-2 rounded-full transition-all duration-500 ${slide===i ? "w-10 bg-gradient-to-r from-primary to-secondary" : "w-2 bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>
      </div>

      {/* ═══ TRUST BAR ═══ */}
      <FadeIn>
        <div className="bg-foreground">
          <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t, i) => (
              <div key={i} className={`text-center py-10 px-6 ${i < 3 ? "lg:border-r border-white/10" : ""}`}>
                <div className="font-display text-secondary font-black text-3xl lg:text-4xl mb-1">
                  <Counter target={t.num} suffix={t.num.includes("+") ? "+" : ""} />
                </div>
                <div className="text-white font-semibold text-sm mb-0.5">{t.label}</div>
                <div className="text-white/40 text-xs">{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ═══ PRODUCT CATEGORIES ═══ */}
      <FadeIn>
        <section id="products" className="py-20 lg:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel label="Our Products" tamil="எங்கள் தயாரிப்புகள்" />
              <h2 className="font-display font-black text-3xl lg:text-4xl text-foreground mb-4">Premium Printing Solutions</h2>
              <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">From visiting cards to large format posters — everything printed to perfection.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CATEGORIES.map((cat, i) => (
                <button key={i} onClick={()=>scrollTo(cat.anchor)} className="group relative h-64 rounded-2xl overflow-hidden text-left">
                  <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 group-hover:via-primary/30 transition-all duration-500" />
                  {cat.badge && <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full z-10">{cat.badge}</span>}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display font-bold text-xl text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-xs">{cat.sub}</p>
                    <span className="inline-block mt-3 text-xs font-semibold text-white/90 border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">Explore →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ CTA BAND ═══ */}
      <div className="relative py-20 px-6 overflow-hidden">
        <img src={IMG.pressWide} alt="" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.2)"}} loading="lazy" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl lg:text-4xl text-white mb-4">Ready to Print?</h2>
          <p className="text-white/80 mb-8 leading-relaxed">From visiting cards to wedding invitations — get premium quality printing delivered to your doorstep.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={()=>scrollTo("contact")} className="bg-white text-foreground font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors shadow-lg">Get Free Quote</button>
            <a href="https://wa.me/919840199878" className="border border-white/30 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </div>

      {/* ═══ VISITING CARDS ═══ */}
      <FadeIn>
        <section id="visiting-cards" className="py-20 lg:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
              <div>
                <SectionLabel label="Visiting Cards" tamil="விசிட்டிங் கார்டு" />
                <h2 className="font-display font-black text-3xl text-foreground">Our Card Collection</h2>
              </div>
              <button onClick={()=>setModal("cart")} className="text-primary font-semibold text-sm border border-primary px-5 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all self-start sm:self-auto">View All →</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PRODUCTS.map((p, i) => (
                <div key={i} className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-400">
                  <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    {p.badge && <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full">{p.badge}</span>}
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-lg mb-1.5 text-foreground">{p.name}</h4>
                    <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{p.spec}</p>
                    <div className="flex gap-2 mb-4">
                      <span className="bg-primary/10 text-primary text-[10px] font-semibold px-3 py-1 rounded-full">{p.days}</span>
                      <span className="bg-secondary/10 text-secondary-foreground text-[10px] font-semibold px-3 py-1 rounded-full">GST Incl.</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-xl text-primary">{p.price}</span>
                      <button onClick={()=>setModal("cart")} className="bg-foreground text-background text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity">Order</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ WEDDING INVITATIONS ═══ */}
      <FadeIn>
        <section id="wedding-cards" className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-2 gap-1 min-h-[300px]">
              {[IMG.weddingInvite1,IMG.weddingInvite2,IMG.weddingInvite3,IMG.weddingCeremony].map((src,i)=>(
                <img key={i} src={src} alt="Wedding invitation" className="w-full h-full object-cover min-h-[150px]" loading="lazy" />
              ))}
            </div>
            <div className="bg-foreground p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 mb-5 self-start">
                <span className="text-secondary text-xs font-semibold tracking-widest uppercase">Wedding Special</span>
              </div>
              <p className="font-tamil text-secondary/70 text-base mb-2">திருமண சீசன் ஆஃபர்</p>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-white mb-4 leading-tight">Beautiful Wedding Invitations</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">Traditional Tamil-style to modern minimalist — Gloss, Matt, Spot UV and Embossed finishes on 300 GSM premium art board.</p>
              {[{name:"Gloss Lamination",price:"From ₹599"},{name:"Matt Lamination",price:"From ₹599"},{name:"Premium Spot UV",price:"From ₹999"}].map((w,i)=>(
                <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <span className="text-white text-sm font-medium">{w.name}</span>
                  <span className="text-secondary text-sm font-semibold">{w.price}</span>
                </div>
              ))}
              <button onClick={()=>setModal("cart")} className="mt-6 bg-secondary text-secondary-foreground font-bold text-sm px-8 py-3.5 rounded-full self-start hover:opacity-90 transition-opacity">
                Order Wedding Cards
              </button>
            </div>
          </div>
        </section>
      </FadeIn>

      <div id="stationery"/><div id="envelopes"/><div id="brochures"/><div id="stickers"/><div id="posters"/>

      {/* ═══ HOW TO ORDER ═══ */}
      <FadeIn>
        <section className="py-20 lg:py-28 px-6 bg-accent">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel label="How to Order" tamil="ஆர்டர் எப்படி செய்வது?" />
              <h2 className="font-display font-black text-3xl lg:text-4xl text-foreground mb-4">Simple 4-Step Process</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s, i) => (
                <div key={i} className="bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                      <span className="font-display font-bold text-sm text-primary-foreground">{s.num}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-base mb-1 text-foreground">{s.title}</h4>
                    <p className="font-tamil text-[11px] text-muted-foreground mb-2">{s.tamil}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ PARALLAX DIVIDER ═══ */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <img src={IMG.pressWide} alt="Printing press" className="absolute inset-0 w-full h-full object-cover" style={{filter:"brightness(0.15)"}} loading="lazy"/>
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 text-center px-6">
          <p className="font-tamil text-white/60 text-lg mb-3">தரம் • வேகம் • நம்பகத்தன்மை</p>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-white mb-4">Quality. Speed. <span className="text-secondary">Trust.</span></h2>
          <p className="text-white/50 max-w-md mx-auto">Serving Chennai's businesses, designers and families for over 35 years.</p>
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <FadeIn>
        <section id="about" className="py-20 lg:py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-4">
              <img src={IMG.hero} alt="Super Printers workshop" className="w-full h-80 object-cover rounded-2xl shadow-lg" loading="lazy" />
              <div className="grid grid-cols-2 gap-4">
                <img src={IMG.workshop} alt="Workshop" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
                <img src={IMG.inkPress} alt="Ink press" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
              </div>
            </div>
            <div>
              <SectionLabel label="About Us" tamil="எங்களைப் பற்றி" />
              <h2 className="font-display font-black text-3xl text-foreground mb-6 leading-snug">
                Chennai's Printing Legacy — <span className="text-primary">Since 1990</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Super Printers was founded in 1990 as a small family printing press in Chennai. Over 35 years we have grown into a full-service printing house — but we have never lost the personal care and craftsmanship of a family business.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From a single offset press to a complete facility offering digital printing, large format, lamination and binding — we have grown with Chennai's businesses and families.
              </p>
              <div className="space-y-3">
                {["State-of-the-art offset and digital presses","35+ years of printing excellence in Chennai","10,000+ satisfied clients across Tamil Nadu","Fast delivery — 1 to 4 business days"].map((t,i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ TESTIMONIALS ═══ */}
      <FadeIn>
        <section className="py-20 lg:py-28 px-6 bg-accent">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <SectionLabel label="Testimonials" tamil="வாடிக்கையாளர் கருத்துக்கள்" />
              <h2 className="font-display font-black text-3xl lg:text-4xl text-foreground mb-4">What Our Clients Say</h2>
            </div>

            <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-sm border border-border relative">
              <div className="text-secondary text-5xl font-display absolute top-6 left-8 opacity-30">"</div>
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className={`transition-opacity duration-500 ${testIdx===i?"opacity-100":"opacity-0 absolute inset-0 pointer-events-none"}`}>
                  {testIdx === i && (
                    <div className="text-center">
                      <p className="text-lg lg:text-xl text-foreground italic leading-relaxed mb-8 max-w-2xl mx-auto">"{t.quote}"</p>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <span className="font-display font-bold text-primary text-lg">{t.name[0]}</span>
                      </div>
                      <div className="font-semibold text-foreground">{t.name}</div>
                      <div className="text-muted-foreground text-sm">{t.role}</div>
                      <div className="text-secondary mt-2 tracking-widest">★★★★★</div>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_,i) => (
                  <button key={i} onClick={()=>setTestIdx(i)} className={`h-2 rounded-full transition-all duration-400 ${testIdx===i?"w-6 bg-primary":"w-2 bg-border hover:bg-muted-foreground/30"}`} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ GALLERY ═══ */}
      <FadeIn>
        <section id="gallery" className="py-20 lg:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <SectionLabel label="Gallery" tamil="எங்கள் படைப்புகள்" />
              <h2 className="font-display font-black text-3xl lg:text-4xl text-foreground mb-6">Our Print Gallery</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {GAL_FILTERS.map(f => (
                  <button key={f} onClick={()=>setGalFilter(f)} className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${galFilter===f ? "bg-foreground text-background" : "bg-accent text-muted-foreground hover:bg-border"}`}>{f}</button>
                ))}
              </div>
            </div>

            <div className="columns-2 lg:columns-3 xl:columns-4 gap-3">
              {filtered.map((item, i) => (
                <div key={`${item.label}-${i}`} className="break-inside-avoid mb-3 group rounded-xl overflow-hidden relative cursor-pointer">
                  <img src={item.img} alt={item.label} className="w-full block transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ WHY CHOOSE US ═══ */}
      <FadeIn>
        <section className="py-20 lg:py-28 px-6 bg-foreground">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display font-black text-3xl lg:text-4xl text-white mb-3">Why Choose <span className="text-secondary">Super Printers</span></h2>
              <p className="font-tamil text-white/40 text-sm">ஏன் சுப்பர் பிரிண்டர்ஸ்?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {WHY.map((w, i) => (
                <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/30 transition-all group">
                  <div className="relative h-44 overflow-hidden">
                    <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,26%,14%)] to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="font-display font-bold text-white text-base mb-2">{w.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ CTA 2 ═══ */}
      <div className="bg-secondary py-16 px-6 text-center">
        <h2 className="font-display font-black text-2xl lg:text-3xl text-secondary-foreground mb-3">Start Your Printing Journey Today</h2>
        <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">Get premium quality prints delivered to your doorstep. Free quotes within 2 hours.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button onClick={()=>scrollTo("contact")} className="bg-foreground text-background font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">Get Free Quote</button>
          <a href="https://wa.me/919840199878" className="bg-[#25D366] text-white font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg">WhatsApp Order</a>
        </div>
      </div>

      {/* ═══ CONTACT ═══ */}
      <FadeIn>
        <section id="contact" className="py-20 lg:py-28 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-border">
            {/* Left — info */}
            <div className="relative overflow-hidden bg-foreground p-10 lg:p-14 flex flex-col justify-center">
              <p className="font-tamil text-white/50 text-sm mb-2">எங்களை தொடர்பு கொள்ளுங்கள்</p>
              <h2 className="font-display font-black text-2xl lg:text-3xl text-white mb-8 leading-tight">Get in Touch with <span className="text-secondary">Super Printers</span></h2>

              {[
                {label:"Address",text:"No 8 Saraswathy Colony, Pallavaram, Chennai – 600 043"},
                {label:"Phone",text:"+91 9840199878"},
                {label:"Email",text:"Superprntrs@yahoo.com"},
                {label:"Hours",text:"Mon–Sat: 9AM–7PM | Sunday: Closed"},
              ].map((r,i) => (
                <div key={i} className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-secondary text-[10px] font-bold">{r.label.slice(0,3).toUpperCase()}</span>
                  </div>
                  <span className="text-white/80 text-sm leading-relaxed">{r.text}</span>
                </div>
              ))}

              <a href="https://wa.me/919840199878" className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full self-start hover:opacity-90 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>

              <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d80.1478823!3d12.9666825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fcc22e3457d%3A0x8e423468eccddee2!2sSuper%20Printers%20-%20Wedding%20Cards%20%26%20Printing!5e0!3m2!1sen!2sin!4v1" width="100%" height="180" style={{ border:0 }} loading="lazy" title="Super Printers Location" allowFullScreen/>
              </div>
            </div>

            {/* Right — form */}
            <div className="bg-background p-10 lg:p-14 flex flex-col justify-center">
              <h3 className="font-display font-bold text-xl text-foreground mb-2">Get a Free Quote</h3>
              <p className="text-muted-foreground text-sm mb-6">We respond within 2 hours during business hours</p>

              <div className="space-y-3">
                <input type="text" placeholder="Full Name" value={formName} onChange={e=>setFormName(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <input type="tel" placeholder="Phone (+91)" value={formPhone} onChange={e=>setFormPhone(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <input type="email" placeholder="Email Address" value={formEmail} onChange={e=>setFormEmail(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                <select value={formService} onChange={e=>setFormService(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option value="">Select Service</option>
                  {["Visiting Cards","Wedding Invitations","Letterheads","Envelopes","Stickers","Brochures","Posters","Lamination","Other"].map(s=><option key={s}>{s}</option>)}
                </select>
                <textarea rows={3} placeholder="Describe your requirements" value={formMsg} onChange={e=>setFormMsg(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-vertical" />
              </div>

              <button
                onClick={()=>{
                  const msg=`Hi Super Printers! I'd like a quote.\n\nName: ${formName}\nPhone: ${formPhone}\nEmail: ${formEmail}\nService: ${formService}\nDetails: ${formMsg}`;
                  window.open(`https://wa.me/919840199878?text=${encodeURIComponent(msg)}`,"_blank");
                }}
                className="mt-5 w-full bg-[#25D366] text-white font-bold text-sm py-3.5 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Send Enquiry via WhatsApp
              </button>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-foreground pt-16 pb-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <span className="font-display font-bold text-base text-secondary-foreground">SP</span>
              </div>
              <div>
                <div className="font-display text-white font-bold">Super Printers</div>
                <div className="font-tamil text-white/40 text-[10px]">சுப்பர் பிரிண்டர்ஸ்</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">Chennai's finest printing press since 1990. Premium quality, fast delivery.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            {["Home","Products","Gallery","About Us","Contact"].map((l,i) => (
              <button key={l} onClick={()=>scrollTo(["top","products","gallery","about","contact"][i])} className="block text-white/40 text-sm py-1.5 hover:text-white/70 transition-colors">
                {l}
              </button>
            ))}
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Our Products</h4>
            {["Visiting Cards","Wedding Invitations","Letterheads","Envelopes","Stickers","Brochures","Posters"].map(l => (
              <span key={l} className="block text-white/40 text-sm py-1.5">{l}</span>
            ))}
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            {["No 8 Saraswathy Colony, Pallavaram","Chennai – 600 043","+91 9840199878","Superprntrs@yahoo.com","Mon–Sat: 9AM–7PM"].map((t,i)=>(
              <p key={i} className="text-white/40 text-sm py-1">{t}</p>
            ))}
            <div className="flex gap-3 mt-4">
              <a href="https://wa.me/919840199878" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-white/30 text-xs">© 2026 Super Printers, Chennai. All Rights Reserved.</span>
          <span className="text-white/20 text-xs">Crafted with care since 1990</span>
        </div>
      </footer>

      {/* ═══ FLOATING BUTTONS ═══ */}
      <a href="https://wa.me/919840199878" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center z-[9999] shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform wa-pulse">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {scrolled && (
        <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="fixed bottom-6 left-6 w-11 h-11 rounded-full bg-foreground text-background flex items-center justify-center z-[9999] shadow-lg hover:scale-110 transition-transform">
          <span className="text-base font-bold">↑</span>
        </button>
      )}

      {/* Animation keyframe */}
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn{animation:fadeIn 0.8s cubic-bezier(0.16,1,0.3,1) both}`}</style>
    </div>
  );
};

export default Index;
