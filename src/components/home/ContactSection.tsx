import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";

const ContactSection = () => (
  <section id="contact" className="section-pad" style={{ backgroundColor: "var(--bg-white)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-2" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          FIND US
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "var(--color-primary)" }}>
          Visit Our Printing Press
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Map */}
        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "var(--border-light)" }}>
          <iframe
            src={BUSINESS.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            title="Super Printers Pallavaram location"
          />
        </div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-5"
        >
          <div>
            <h3 className="font-display font-bold text-lg mb-1" style={{ color: "var(--color-primary)" }}>Address</h3>
            <p className="text-sm" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
              {BUSINESS.addressFull}
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-1" style={{ color: "var(--color-primary)" }}>Phone</h3>
            <a href={BUSINESS.phoneTel} className="text-sm font-semibold" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
              {BUSINESS.phone}
            </a>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-1" style={{ color: "var(--color-primary)" }}>Email</h3>
            <a href={`mailto:${BUSINESS.email}`} className="text-sm" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
              {BUSINESS.email}
            </a>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-1" style={{ color: "var(--color-primary)" }}>Business Hours</h3>
            <p className="text-sm" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
              {BUSINESS.hours}
            </p>
            <p className="text-sm" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
              {BUSINESS.hoursSunday}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={BUSINESS.phoneTel}
              className="btn-gold px-6 py-3 rounded-full text-sm font-semibold text-center"
            >
              📞 Call Now
            </a>
            <a
              href={BUSINESS.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold text-center border-2 transition-colors hover:bg-gray-50"
              style={{ borderColor: "var(--border-light)", color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
            >
              🗺️ Get Directions
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
