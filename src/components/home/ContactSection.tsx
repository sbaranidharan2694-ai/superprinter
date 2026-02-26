import { useInView } from "@/hooks/useInView";

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
                <p className="text-muted-foreground text-sm font-body">No:6, Saraswathy Colony, Pallavaram, Chennai – 600043</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="font-bold text-card-foreground font-body">Phone</h3>
                <a href="tel:+919840199878" className="text-secondary text-sm font-body hover:underline">+91 9840199878</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="font-bold text-card-foreground font-body">Email</h3>
                <a href="mailto:superprinters.net@gmail.com" className="text-secondary text-sm font-body hover:underline">superprinters.net@gmail.com</a>
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
              Near Pallavaram Railway Station. Serving Pallavaram, Tambaram, Chromepet, Perungalathur, Pammal, Anakaputhur, Chitlapakkam, Medavakkam, Vandalur, Selaiyur, and all of South Chennai.
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="rounded-xl border-2 border-dashed border-navy/30 bg-card flex flex-col items-center justify-center p-10 min-h-[300px]">
            <span className="text-5xl mb-4">🗺️</span>
            <p className="text-muted-foreground font-body text-sm mb-4">Google Maps — Pallavaram, Chennai</p>
            <a
              href="https://www.google.com/maps/search/Super+Printers+Pallavaram+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-button px-6 py-2.5 rounded-lg text-sm"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
