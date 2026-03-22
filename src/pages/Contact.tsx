import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { trackWhatsAppClick, trackPhoneClick } from "@/utils/analytics";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";

const waButtons = [
  { label: "Get Visiting Card Quote", msg: "Hi, I need visiting card printing quote" },
  { label: "Get Wedding Card Quote", msg: "Hi, I need wedding invitation printing quote" },
  { label: "Get Brochure Quote", msg: "Hi, I need brochure printing quote" },
  { label: "Other Enquiry", msg: "Hi, I have a printing enquiry" },
];

const Contact = () => {
  const { ref, isVisible } = useInView();
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Super Printers | Printing Press Pallavaram Chennai"
        description="Visit Super Printers at Saraswathi Colony, Pallavaram. Open Mon–Sat 9:00AM–8:00PM, Sun 10:00AM–4:00PM. WhatsApp +91 98401 99878 for instant quotes."
        canonical="/contact"
        keywords="contact super printers, printing press pallavaram, printing shop chennai, super printers phone number"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <main>
        <section ref={ref} className={`py-16 md:py-20 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                Visit Super Printers — Pallavaram, Chennai
              </h1>
              <p className="text-muted-foreground font-body">We'd love to hear from you. Walk in, call, or WhatsApp us!</p>
            </div>

            {/* Two-column: Left = Form, Right = Map + Contact details */}
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left: Contact form */}
              <div>
                <h2 className="font-display text-xl font-bold text-foreground mb-4">Send Us a Message</h2>
                {submitted ? (
                  <div className="p-8 rounded-xl bg-card border border-border text-center">
                    <span className="text-4xl block mb-3" aria-hidden="true">✅</span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">Thank you!</h3>
                    <p className="text-muted-foreground font-body">We'll call you back within 2 hours during business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl bg-card border border-border">
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground font-body mb-1">Name *</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground font-body mb-1">Phone Number *</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Your phone number" />
                      {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground font-body mb-1">Service Required *</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="">Select a service</option>
                        {services.map((s) => (<option key={s.id} value={s.name}>{s.name}</option>))}
                        <option value="Other">Other</option>
                      </select>
                      {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground font-body mb-1">Message</label>
                      <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us about your printing needs..." />
                    </div>
                    <button type="submit" className="gold-button w-full py-3 rounded-lg text-sm font-bold">
                      Send Enquiry →
                    </button>
                  </form>
                )}
              </div>

              {/* Right: Map + Contact details */}
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-border min-h-[280px]">
                  <iframe
                    src={BUSINESS.mapEmbed}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Super Printers and Wedding Cards location on Google Maps"
                  />
                </div>
                <div className="p-5 rounded-xl bg-card border border-border space-y-4">
                  <h3 className="font-display font-bold text-foreground">Contact details</h3>
                  <a href={BUSINESS.phoneTel} onClick={() => trackPhoneClick("contact")} className="flex items-center gap-3 text-sm font-body hover:opacity-80">📞 {BUSINESS.phone}</a>
                  <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick("contact")} className="flex items-center gap-3 text-sm font-body hover:opacity-80">💬 WhatsApp: Chat Now</a>
                  <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-sm font-body hover:opacity-80">📧 {BUSINESS.email}</a>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground font-body">📍 {BUSINESS.addressFull}</p>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground font-body">🕐 Monday–Saturday: 9:00 AM – 8:00 PM</p>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground font-body">🕐 Sunday: 10:00 AM – 4:00 PM</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={BUSINESS.phoneTel} onClick={() => trackPhoneClick("contact_cta")} className="gold-button px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2">
                    📞 Call Now
                  </a>
                  <a href={BUSINESS.mapLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
                    🗺️ Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* How to Reach Us */}
            <div className="mt-12 p-6 rounded-xl bg-muted/50 border border-border">
              <h2 className="font-display text-xl font-bold text-foreground mb-3">How to Reach Us</h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                We are located right next to Pallavaram Railway Station Road. We serve throughout Chennai and Tamil Nadu.
              </p>
            </div>

            {/* WhatsApp Quick Enquiry */}
            <div className="mt-16">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">Quick Enquiry via WhatsApp</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {waButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(btn.msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick("contact_quick")}
                    className="wa-button px-4 py-3 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2"
                  >
                    💬 {btn.label}
                  </a>
                ))}
              </div>
            </div>


            {/* Delivery Information */}
            <div className="mt-16 max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-bold text-foreground text-center mb-6">Delivery Information</h2>
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <div className="flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">🚚</span>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">
                    We offer home delivery and courier dispatch throughout Chennai and Tamil Nadu. WhatsApp us to confirm delivery for your area.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
