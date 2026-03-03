import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

const SERVICES_OPTIONS = [
  "Offset Printing", "Wedding Cards", "Visiting Cards", "Digital Printing",
  "Brochures", "Stationery", "Posters", "Other",
];

const ContactSection = () => {
  const { ref, isVisible } = useInView(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* Left */}
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img src={IMG.P05} alt="Printing workshop" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width="960" height="700" />
          <div className="absolute inset-0" style={{ background: "rgba(192,57,43,0.82)" }} />
          <div className="relative z-10 p-8 md:p-12 flex flex-col justify-center h-full">
            <h2 className="font-display text-3xl md:text-[38px] text-white font-bold mb-4 leading-tight">
              Let's Create Something Beautiful Together.
            </h2>
            <p className="font-body text-base text-white/80 mb-8">
              Visit our press or send your requirements — we respond within 2 hours.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { img: IMG.P24, text: "Chennai, Tamil Nadu, India" },
                { img: IMG.P22, text: "Call us for an instant quote" },
                { img: IMG.P21, text: "Email your requirements" },
                { img: IMG.P15, text: "Mon-Sat: 9AM - 7PM | Sun: Closed" },
              ].map((r) => (
                <div key={r.text} className="flex items-center gap-3">
                  <img src={r.img} alt="" className="w-[52px] h-[52px] rounded-lg object-cover" loading="lazy" width="52" height="52" />
                  <span className="text-white font-body text-[15px]">{r.text}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919840199878"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-[#25D366] text-white font-body text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity mb-6"
            >
              Chat on WhatsApp
            </a>

            <div className="flex gap-2">
              {[IMG.P06, IMG.P09, IMG.P13, IMG.P14].map((src, i) => (
                <img key={i} src={src} alt="Sample work" className="w-[60px] h-[60px] rounded-full border-2 border-white object-cover" loading="lazy" width="60" height="60" />
              ))}
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:w-1/2 bg-white p-8 md:p-[60px] flex flex-col justify-center">
          <h2 className="font-display text-3xl text-brand-red font-bold mb-2">Get a Free Quote</h2>
          <p className="font-body text-base text-muted-foreground mb-6">We respond within 2 hours.</p>

          <img src={IMG.P03} alt="Printing tools" className="w-full h-[110px] rounded-xl object-cover mb-6" loading="lazy" width="600" height="110" />

          {submitted ? (
            <div className="text-center py-12">
              <h3 className="font-display text-2xl text-brand-teal font-bold mb-2">Thank you!</h3>
              <p className="font-body text-muted-foreground">We'll get back to you within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text" required placeholder="Full Name"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full h-12 px-4 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-l-4 focus:border-l-brand-red"
              />
              <input
                type="tel" required placeholder="Phone Number"
                value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full h-12 px-4 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-l-4 focus:border-l-brand-red"
              />
              <input
                type="email" placeholder="Email Address"
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full h-12 px-4 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-l-4 focus:border-l-brand-red"
              />
              <select
                required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full h-12 px-4 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
              >
                <option value="">Select Service</option>
                {SERVICES_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <div className="flex gap-2">
                {[IMG.P06, IMG.P09, IMG.P02].map((src, i) => (
                  <img key={i} src={src} alt="Sample" className="w-[80px] h-[55px] rounded-lg object-cover" loading="lazy" width="80" height="55" />
                ))}
              </div>

              <textarea
                rows={4} placeholder="Message"
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
              />
              <button
                type="submit"
                className="w-full h-[52px] rounded-xl text-white font-body text-base font-bold hover:opacity-90 transition-opacity"
                style={{ background: "linear-gradient(90deg, #C0392B, #E67E22)" }}
              >
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;