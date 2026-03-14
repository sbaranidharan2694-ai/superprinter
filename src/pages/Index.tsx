import { useState, useEffect, lazy, Suspense, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMG } from "@/data/images";
import SEOHead from "@/components/SEOHead";
import StatsCounter from "@/components/shared/StatsCounter";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryGrid from "@/components/shared/GalleryGrid";
import ContactForm from "@/components/shared/ContactForm";
import { BUSINESS } from "@/data/business";

const Scene3D = lazy(() => import("@/components/Scene3D"));

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const fadeInLeft = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
const fadeInRight = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };

const SLIDES = [
  { bg: IMG.hero, badge: "TAMIL NADU'S TRUSTED PRESS", h1a: "Premium Offset", h1b: "Printing for Every Need", body: "Business cards, wedding invitations, letterheads and more — printed with precision since 1990.", btn1: "Our Products", btn1To: "/products", btn2: "Get Free Quote", btn2To: "/get-quote", rightImg: IMG.glossCard },
  { bg: IMG.weddingCeremony, badge: "WEDDING SEASON SPECIAL", h1a: "Beautiful Wedding", h1b: "Invitations", tamil: "திருமண அழைப்பிதழ்கள்", body: "Gloss, Matt, Spot UV & Premium finishes on 300 GSM Art Board.", btn1: "See Designs", btn1To: "/wedding-cards", rightImg: IMG.weddingInvite1 },
  { bg: IMG.offsetPress, badge: "1 TO 4 BUSINESS DAYS", h1a: "Order Online.", h1b: "Delivered Fast.", body: "We deliver across Chennai, Coimbatore, and all Tamil Nadu.", btn1: "Order Now", btn1To: "/products", btn2: "Track Order", btn2To: "/orders", rightImg: IMG.parcel },
];

const CATEGORIES = [
  { name: "Visiting Cards", sub: "Gloss • Matt • Spot UV • Velvet", img: IMG.glossCard, to: "/visiting-cards", badge: "Best Seller" },
  { name: "Wedding Invitations", sub: "300 GSM Art Board • Premium", img: IMG.weddingInvite1, to: "/wedding-cards", badge: "Popular" },
  { name: "Letterheads", sub: "80 GSM • 100 GSM Bond", img: IMG.letterhead, to: "/services" },
  { name: "Envelopes & Covers", sub: "80 • 100 • 130 • 170 GSM", img: IMG.envelopes, to: "/services" },
  { name: "Stickers", sub: "Mirror Coated • 20×30 inch", img: IMG.stickerSheets, to: "/services", badge: "New" },
  { name: "Brochures & Flyers", sub: "Tri-fold • Bi-fold • A4", img: IMG.brochures, to: "/services" },
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
  { img: IMG.premiumCards, title: "Choose Product", tamil: "தயாரிப்பை தேர்ந்தெடுங்கள்", desc: "Browse visiting cards, wedding invitations, letterheads and more.", num: "01" },
  { img: IMG.digitalPrint, title: "Upload Your Design", tamil: "டிசைனை அப்லோட் செய்யுங்கள்", desc: "Upload print-ready PDF or CDR. No design? Our team helps create one.", num: "02" },
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

const Counter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const num = parseInt(target.replace(/[^0-9]/g, "")) || 0;
  const [count, setCount] = useState(num);
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const animated = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!visible || num === 0 || animated.current) return;
    animated.current = true;
    setCount(0);
    let s = 0;
    const step = Math.max(1, Math.floor(num / 60));
    const t = setInterval(() => { s += step; if (s >= num) { setCount(num); clearInterval(t); } else setCount(s); }, 30);
    return () => clearInterval(t);
  }, [visible, num]);
  return <span ref={ref}>{num === 0 ? target : count.toLocaleString() + suffix}</span>;
};

const Index = () => {
  const [slide, setSlide] = useState(0);
  const [testIdx, setTestIdx] = useState(0);

  useEffect(() => {
    const si = setInterval(() => setSlide(p => (p + 1) % 3), 5000);
    const ti = setInterval(() => setTestIdx(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => { clearInterval(si); clearInterval(ti); };
  }, []);

  return (
    <div className="font-body text-foreground bg-background overflow-x-hidden">
      <SEOHead
        title="Super Printers Chennai | Best Printing Press in Pallavaram Since 1990"
        description="Premium offset printing, visiting cards, wedding invitations, brochures, banners & more. 35+ years of printing excellence in Chennai. Fast delivery across Tamil Nadu."
        canonical="/"
      />

      {/* HERO */}
      <div className="relative min-h-[92vh] flex items-center overflow-hidden">
        {SLIDES.map((s, i) => (
          <img key={i} src={s.bg} alt="Super Printers" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${slide === i ? "opacity-100" : "opacity-0"}`} style={{ filter: "brightness(0.25)" }} loading={i === 0 ? "eager" : "lazy"} />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div key={slide} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white/70 text-xs font-semibold tracking-[0.15em] uppercase">{SLIDES[slide].badge}</span>
              </div>
              <h1 className="font-display font-black text-4xl md:text-5xl lg:text-[64px] text-white leading-[1.05] mb-5">
                {SLIDES[slide].h1a}<br />
                <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">{SLIDES[slide].h1b}</span>
              </h1>
              {SLIDES[slide].tamil && <p className="font-tamil text-secondary/60 text-lg mb-4">{SLIDES[slide].tamil}</p>}
              <p className="text-white/60 text-base lg:text-lg leading-relaxed mb-10 max-w-lg">{SLIDES[slide].body}</p>
              <div className="flex flex-wrap gap-4">
                <Link to={SLIDES[slide].btn1To} className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-bold text-sm px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-primary/30 transition-all">
                  {SLIDES[slide].btn1}
                </Link>
                {SLIDES[slide].btn2 && (
                  <Link to={SLIDES[slide].btn2To!} className="border border-white/20 text-white/90 font-medium text-sm px-10 py-4 rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
                    {SLIDES[slide].btn2}
                  </Link>
                )}
              </div>
              <div className="flex items-center gap-6 mt-12">
                {[{ n: "35+", l: "Years" }, { n: "10K+", l: "Clients" }, { n: "50+", l: "Services" }].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display font-black text-xl text-white">{s.n}</div>
                    <div className="text-white/40 text-[10px] font-medium tracking-wider uppercase">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="hidden lg:block h-[500px] relative">
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><div className="w-16 h-16 border-2 border-primary/30 border-t-primary rounded-full animate-spin" /></div>}>
                <Scene3D />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[0, 1, 2].map(i => (
            <button key={i} onClick={() => setSlide(i)} className={`h-2 rounded-full transition-all duration-500 ${slide === i ? "w-10 bg-gradient-to-r from-primary to-secondary" : "w-2 bg-white/20 hover:bg-white/40"}`} />
          ))}
        </div>
      </div>

      {/* TRUST BAR */}
      <StatsCounter />

      {/* TRUSTED CLIENTS */}
      <motion.section className="py-16 lg:py-20 px-6 bg-accent/50" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/70 mb-2 block">Trusted by Industry Leaders</span>
            <h2 className="font-display font-black text-2xl lg:text-3xl text-foreground">Our Esteemed Clients</h2>
            <p className="text-muted-foreground text-sm mt-2">Serving 50+ businesses across Tamil Nadu and India</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { name: "Wipro Engineering", short: "WIP", color: "from-blue-600 to-blue-800" },
              { name: "Fujitec", short: "FUJ", color: "from-red-600 to-red-800" },
              { name: "URANUS OIL CORP", short: "UOC", color: "from-purple-600 to-purple-800" },
              { name: "Jaganathan Hospital", short: "JH", color: "from-teal-600 to-teal-800" },
              { name: "HP Oil Corporation", short: "HP", color: "from-orange-600 to-orange-800" },
              { name: "State Bank of India", short: "SBI", color: "from-blue-700 to-blue-900" },
            ].map((client, i) => (
              <motion.div key={i} variants={scaleIn} className="group bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center min-h-[120px]">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${client.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-white font-display font-bold text-xs">{client.short}</span>
                </div>
                <span className="text-foreground font-semibold text-xs text-center leading-tight">{client.name}</span>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeInUp} className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {["TVS Motors", "Ashok Leyland", "TCS", "Infosys", "HCL Technologies", "L&T Construction", "Sundaram Finance", "Indian Bank", "Canara Bank", "HDFC Bank", "Apollo Hospitals", "Fortis Healthcare", "Hyundai Motors", "Saint Gobain", "Dalmia Cement", "Ultratech", "Ramco Systems"].map((name, i) => (
                <span key={i} className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors cursor-default">{name}</span>
              ))}
              <span className="text-primary font-bold text-sm">& 50+ more...</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* PRODUCT CATEGORIES */}
      <motion.section className="py-20 lg:py-28 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Our Products" tamil="எங்கள் தயாரிப்புகள்" title="Premium Printing Solutions" subtitle="From visiting cards to large format posters — everything printed to perfection." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Link to={cat.to} className="group relative h-64 rounded-2xl overflow-hidden block">
                  <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-primary/80 group-hover:via-primary/30 transition-all duration-500" />
                  {cat.badge && <span className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full z-10">{cat.badge}</span>}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="font-display font-bold text-xl text-white mb-1">{cat.name}</h3>
                    <p className="text-white/70 text-xs">{cat.sub}</p>
                    <span className="inline-block mt-3 text-xs font-semibold text-white/90 border-b border-white/30 pb-0.5 group-hover:border-white transition-colors">Explore →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA BAND */}
      <div className="relative py-20 px-6 overflow-hidden">
        <img src={IMG.pressWide} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.2)" }} loading="lazy" />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl lg:text-4xl text-white mb-4">Ready to Print?</h2>
          <p className="text-white/80 mb-8 leading-relaxed">From visiting cards to wedding invitations — get premium quality printing delivered to your doorstep.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/get-quote" className="bg-white text-[hsl(220,26%,14%)] font-bold text-sm px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors shadow-lg">Get Free Quote</Link>
            <a href={BUSINESS.whatsapp} className="border border-white/30 text-white font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">WhatsApp Us</a>
          </div>
        </div>
      </div>

      {/* VISITING CARDS */}
      <motion.section className="py-20 lg:py-28 px-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <SectionHeading label="Visiting Cards" tamil="விசிட்டிங் கார்டு" title="Our Card Collection" center={false} />
            </div>
            <Link to="/visiting-cards" className="text-primary font-semibold text-sm border border-primary px-5 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all self-start sm:self-auto">View All →</Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <motion.div key={i} variants={scaleIn} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  {p.badge && <span className="absolute top-3 left-3 bg-secondary text-secondary-foreground text-[10px] font-bold px-3 py-1 rounded-full">{p.badge}</span>}
                </div>
                <div className="p-5">
                  <h4 className="font-display font-bold text-lg mb-1.5 text-foreground">{p.name}</h4>
                  <p className="text-muted-foreground text-xs mb-3 leading-relaxed">{p.spec}</p>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-primary/10 text-primary text-[10px] font-semibold px-3 py-1 rounded-full">{p.days}</span>
                    <span className="bg-secondary/10 text-secondary text-[10px] font-semibold px-3 py-1 rounded-full">GST Incl.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-xl text-primary">{p.price}</span>
                    <Link to="/get-quote" className="bg-foreground text-background text-xs font-semibold px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity">Order</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* WEDDING INVITATIONS */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-2 gap-1 min-h-[300px]">
            {[IMG.weddingInvite1, IMG.weddingInvite2, IMG.weddingInvite3, IMG.weddingCeremony].map((src, i) => (
              <img key={i} src={src} alt="Wedding invitation" className="w-full h-full object-cover min-h-[150px]" loading="lazy" />
            ))}
          </div>
          <div className="bg-[hsl(220,26%,10%)] p-10 lg:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 mb-5 self-start">
              <span className="text-secondary text-xs font-semibold tracking-widest uppercase">Wedding Special</span>
            </div>
            <p className="font-tamil text-secondary/70 text-base mb-2">திருமண சீசன் ஆஃபர்</p>
            <h2 className="font-display font-black text-2xl lg:text-3xl text-foreground mb-4 leading-tight">Beautiful Wedding Invitations</h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">Traditional Tamil-style to modern minimalist — Gloss, Matt, Spot UV and Embossed finishes on 300 GSM premium art board.</p>
            {[{ name: "Gloss Lamination", price: "From ₹599" }, { name: "Matt Lamination", price: "From ₹599" }, { name: "Premium Spot UV", price: "From ₹999" }].map((w, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <span className="text-foreground text-sm font-medium">{w.name}</span>
                <span className="text-secondary text-sm font-semibold">{w.price}</span>
              </div>
            ))}
            <Link to="/wedding-cards" className="mt-6 bg-secondary text-secondary-foreground font-bold text-sm px-8 py-3.5 rounded-full self-start hover:opacity-90 transition-opacity">
              Order Wedding Cards
            </Link>
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <motion.section className="py-20 lg:py-28 px-6 bg-accent" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="How to Order" tamil="ஆர்டர் எப்படி செய்வது?" title="Simple 4-Step Process" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div key={i} variants={scaleIn} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
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
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PARALLAX DIVIDER */}
      <div className="relative py-24 lg:py-32 overflow-hidden">
        <img src={IMG.pressWide} alt="Printing press" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "brightness(0.15)" }} loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center px-6">
          <p className="font-tamil text-muted-foreground text-lg mb-3">தரம் • வேகம் • நம்பகத்தன்மை</p>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-foreground mb-4">Quality. Speed. <span className="text-secondary">Trust.</span></h2>
          <p className="text-muted-foreground max-w-md mx-auto">Serving Chennai's businesses, designers and families for over 35 years.</p>
        </div>
      </div>

      {/* ABOUT */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-4">
            <img src={IMG.hero} alt="Super Printers workshop" className="w-full h-80 object-cover rounded-2xl shadow-lg" loading="lazy" />
            <div className="grid grid-cols-2 gap-4">
              <img src={IMG.workshop} alt="Workshop" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
              <img src={IMG.inkPress} alt="Ink press" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
            </div>
          </div>
          <div>
            <SectionHeading label="About Us" tamil="எங்களைப் பற்றி" title="Chennai's Printing Legacy — Since 1990" center={false} />
            <p className="text-muted-foreground leading-relaxed mb-4">Super Printers was founded in 1990 as a small family printing press in Chennai. Over 35 years we have grown into a full-service printing house — but we have never lost the personal care and craftsmanship of a family business.</p>
            <p className="text-muted-foreground leading-relaxed mb-8">From a single offset press to a complete facility offering digital printing, large format, lamination and binding — we have grown with Chennai's businesses and families.</p>
            <div className="space-y-3">
              {["State-of-the-art offset and digital presses", "35+ years of printing excellence in Chennai", "10,000+ satisfied clients across Tamil Nadu", "Fast delivery — 1 to 4 business days"].map((t, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-28 px-6 bg-accent">
        <div className="max-w-4xl mx-auto">
          <SectionHeading label="Testimonials" tamil="வாடிக்கையாளர் கருத்துக்கள்" title="What Our Clients Say" />
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-sm border border-border relative">
            <div className="text-secondary text-5xl font-display absolute top-6 left-8 opacity-30">"</div>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`transition-opacity duration-500 ${testIdx === i ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
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
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => setTestIdx(i)} className={`h-2 rounded-full transition-all duration-400 ${testIdx === i ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/30"}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="Gallery" tamil="எங்கள் படைப்புகள்" title="Our Print Gallery" />
          <GalleryGrid limit={12} />
          <div className="text-center mt-10">
            <Link to="/gallery" className="bg-primary text-primary-foreground font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 lg:py-28 px-6 bg-[hsl(220,26%,10%)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-3xl lg:text-4xl text-foreground mb-3">Why Choose <span className="text-secondary">Super Printers</span></h2>
            <p className="font-tamil text-muted-foreground text-sm">ஏன் சுப்பர் பிரிண்டர்ஸ்?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY.map((w, i) => (
              <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-border transition-all group hover:border-secondary/50">
                <div className="relative h-44 overflow-hidden">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,26%,10%)] to-transparent" />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-bold text-foreground text-base mb-2">{w.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <div className="bg-secondary py-16 px-6 text-center">
        <h2 className="font-display font-black text-2xl lg:text-3xl text-secondary-foreground mb-3">Start Your Printing Journey Today</h2>
        <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">Get premium quality prints delivered to your doorstep. Free quotes within 2 hours.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/get-quote" className="bg-[hsl(220,26%,14%)] text-foreground font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">Get Free Quote</Link>
          <a href={BUSINESS.whatsapp} className="bg-[#25D366] text-white font-bold text-sm px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg">WhatsApp Order</a>
        </div>
      </div>

      {/* CONTACT */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-border">
          <div className="bg-[hsl(220,26%,10%)] p-10 lg:p-14 flex flex-col justify-center">
            <p className="font-tamil text-muted-foreground text-sm mb-2">எங்களை தொடர்பு கொள்ளுங்கள்</p>
            <h2 className="font-display font-black text-2xl lg:text-3xl text-foreground mb-8 leading-tight">Get in Touch with <span className="text-secondary">Super Printers</span></h2>
            {[
              { label: "Address", text: `${BUSINESS.address}, ${BUSINESS.city}, Chennai – ${BUSINESS.postalCode}` },
              { label: "Phone", text: BUSINESS.phone },
              { label: "Email", text: BUSINESS.email },
              { label: "Hours", text: BUSINESS.hours },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-secondary text-[10px] font-bold">{r.label.slice(0, 3).toUpperCase()}</span>
                </div>
                <span className="text-foreground/80 text-sm leading-relaxed">{r.text}</span>
              </div>
            ))}
            <a href={BUSINESS.whatsapp} className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full self-start hover:opacity-90 transition-opacity">WhatsApp Us</a>
            <div className="mt-6 rounded-xl overflow-hidden border border-border">
              <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d${BUSINESS.lng}!3d${BUSINESS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fcc22e3457d%3A0x8e423468eccddee2!2sSuper%20Printers%20-%20Wedding%20Cards%20%26%20Printing!5e0!3m2!1sen!2sin!4v1`} width="100%" height="180" style={{ border: 0 }} loading="lazy" title="Super Printers Location" allowFullScreen />
            </div>
          </div>
          <div className="bg-card p-10 lg:p-14 flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
