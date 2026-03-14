import { BUSINESS } from "@/data/business";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-cream">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <iframe
            src={BUSINESS.googleMapsEmbed}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 16 }}
            allowFullScreen
            loading="lazy"
            title="Super Printers Location"
          />
          <div className="mt-6 space-y-3 font-body text-charcoal text-[15px]">
            <p>
              📍 {BUSINESS.addressFull}
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gold hover:underline"
                style={{ color: "var(--color-gold)" }}
              >
                Get Directions →
              </a>
            </p>
            <p>
              <a href={BUSINESS.phoneTel} className="hover:text-gold transition-colors">📞 {BUSINESS.phone}</a>
            </p>
            <p>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                💬 WhatsApp: {BUSINESS.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-gold transition-colors">📧 {BUSINESS.email}</a>
            </p>
            <p>🕐 {BUSINESS.hours}</p>
            <p className="text-sm text-gray-text">Sunday: Closed</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers! I need a printing quote.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-3 bg-[#25D366] text-white font-body font-medium text-lg px-8 py-6 rounded-2xl hover:opacity-95 transition-opacity shadow-lg"
          >
            <span className="text-3xl">💬</span>
            Message us on WhatsApp
            <span className="text-sm opacity-90">Average response time: under 30 minutes</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
