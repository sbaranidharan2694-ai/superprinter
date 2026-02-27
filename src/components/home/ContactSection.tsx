import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { BUSINESS } from "@/data/business";

const ContactSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section ref={ref} id="contact" className={`py-16 md:py-20 bg-muted/50 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Visit Super Printers — Pallavaram, Chennai</h2>
          <p className="text-muted-foreground font-body">We'd love to hear from you. Walk in, call, or WhatsApp us!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="font-bold text-card-foreground font-body">Address</h3>
                <p className="text-muted-foreground text-sm font-body">{BUSINESS.address}, {BUSINESS.city}, Chennai – {BUSINESS.postalCode}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-bold text-card-foreground font-body">Phone</h3>
                <a href={BUSINESS.phoneTel} className="text-secondary text-sm font-body hover:underline">{BUSINESS.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="font-bold text-card-foreground font-body">Email</h3>
                <a href={`mailto:${BUSINESS.email}`} className="text-secondary text-sm font-body hover:underline">{BUSINESS.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🕐</span>
              <div>
                <h3 className="font-bold text-card-foreground font-body">Hours</h3>
                <p className="text-muted-foreground text-sm font-body">Monday–Saturday: 9:30 AM – 6:30 PM</p>
                <p className="text-muted-foreground text-sm font-body">Sunday: Closed</p>
              </div>
            </div>
            <p className="text-muted-foreground text-xs font-body mt-4">
              Near Pallavaram Railway Station. Serving {BUSINESS.areas.slice(0, 10).join(", ")} and all of South Chennai.
            </p>
            <Link to="/contact" className="inline-block gold-button px-6 py-2.5 rounded-lg text-sm mt-2">
              View Full Contact Page →
            </Link>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border min-h-[300px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4!2d${BUSINESS.lng}!3d${BUSINESS.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzAzLjAiTiA4MMKwMDgnNTYuOCJF!5e0!3m2!1sen!2sin!4v1700000000000`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Super Printers location in Pallavaram Chennai"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
