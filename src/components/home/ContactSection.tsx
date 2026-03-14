import { motion } from "framer-motion";
import { BUSINESS } from "@/data/business";
import { V2_AREAS_SERVED } from "@/data/v2";

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-24" style={{ backgroundColor: "var(--bg-white)" }}>
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-gold font-ui text-sm font-medium mb-2 flex items-center justify-center gap-2" style={{ color: "var(--gold)" }}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current" />
          Find us
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-black">
          Visit Our Pallavaram Studio
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="rounded-3xl overflow-hidden border border-border-light shadow-card mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9!2d80.1482!3d12.9672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzAyLjAiTiA4MMKwMDgnNTMuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Super Printers Location"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border-light bg-white p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-spring hover:-translate-y-0.5"
            >
              <p className="font-display font-semibold text-ink-black mb-1">Address</p>
              <p className="font-body text-sm text-gray-600 mb-2">{BUSINESS.addressFull}</p>
              <a
                href={BUSINESS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body font-medium text-gold hover:underline"
                style={{ color: "var(--gold)" }}
              >
                Get Directions →
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border-light bg-white p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-spring hover:-translate-y-0.5"
            >
              <p className="font-display font-semibold text-ink-black mb-1">Hours</p>
              <p className="font-body text-sm text-gray-600">{BUSINESS.hours}</p>
              <p className="font-body text-xs text-gray-500 mt-1">Sunday: Closed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border-light bg-white p-5 shadow-card hover:shadow-hover transition-all duration-300 ease-spring hover:-translate-y-0.5"
            >
              <p className="font-display font-semibold text-ink-black mb-1">Contact</p>
              <a href={BUSINESS.phoneTel} className="block font-body text-sm text-gray-600 hover:text-gold">📞 {BUSINESS.phone}</a>
              <a href={`mailto:${BUSINESS.email}`} className="block font-body text-sm text-gray-600 hover:text-gold mt-1">📧 {BUSINESS.email}</a>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-xl text-ink-black mb-6"
          >
            Get in Touch
          </motion.h3>
          <div className="flex flex-col gap-4">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-full font-ui font-semibold text-white bg-whatsapp hover:opacity-95 transition-all duration-300 ease-spring"
            >
              💬 WhatsApp
            </a>
            <a
              href={BUSINESS.phoneTel}
              className="flex items-center justify-center gap-3 py-4 rounded-full font-ui font-semibold text-white hover:opacity-95 transition-all duration-300 ease-spring"
              style={{ backgroundColor: "var(--navy-deep)" }}
            >
              📞 Call Now
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center justify-center gap-3 py-4 rounded-full font-ui font-semibold border-2 border-border-light text-ink-black hover:border-gold hover:text-gold transition-all duration-300 ease-spring"
            >
              📧 Email
            </a>
          </div>
          <div className="mt-8">
            <p className="font-body font-medium text-ink-black text-sm mb-3">Areas we serve</p>
            <div className="flex flex-wrap gap-2">
              {V2_AREAS_SERVED.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-full text-xs font-body bg-gray-100 text-ink-black"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
