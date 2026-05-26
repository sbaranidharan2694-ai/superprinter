import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

/**
 * Home About — condensed teaser.
 *
 * Was: 4 stats + founder card + full 35-year timeline + bottom CTA = 2105 px
 *      of vertical scroll on desktop. Stats duplicated SocialProofBar; the
 *      timeline duplicated /about. Net: dead weight on the home page.
 *
 * Now: founder quote (the strongest trust signal we have, not duplicated
 *      anywhere else) + a clear link to /about for the full story. Same
 *      WhatsApp CTA at the bottom for symmetry with other home sections.
 */
const AboutSection = () => (
  <section id="about" className="section-pad overflow-hidden" style={{ backgroundColor: "var(--bg-white)" }}>
    <div className="max-w-5xl mx-auto px-6">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: "var(--gold-dark)", fontFamily: "var(--font-body)" }}>
          OUR STORY
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4" style={{ color: "var(--color-primary)" }}>
          Pallavaram's Most Trusted<br />Printing Press Since 1990
        </h2>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--gray-text)", fontFamily: "var(--font-body)" }}>
          Three generations of Chennai families and businesses have trusted us with their most important print work — from first visiting cards to children's wedding invitations.
        </p>
      </motion.div>

      {/* Founder Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-3xl p-8 md:p-10 overflow-hidden"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "var(--gold)" }} />
        <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: "var(--gold)" }} />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 font-display font-extrabold text-2xl"
            style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}
            aria-hidden="true"
          >
            NB
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
              FOUNDER'S MESSAGE
            </p>
            <blockquote className="font-display text-xl md:text-2xl font-bold text-white leading-snug mb-3">
              "We treat every print job as if it carries our own name on it — because our reputation has been built one order at a time since 1990."
            </blockquote>
            <p className="font-bold text-white/90" style={{ fontFamily: "var(--font-body)" }}>
              {BUSINESS.founder}
              <span className="font-normal text-white/60 ml-2">— Founder, Super Printers</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer row: link to full story + WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
      >
        <Link
          to="/about"
          className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline transition-colors"
          style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
        >
          Read our full 35-year story
          <span aria-hidden="true">→</span>
        </Link>
        <span className="hidden sm:inline text-muted-foreground">·</span>
        <a
          href={BUSINESS.whatsappGeneral}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm transition-transform hover:scale-[1.03] min-h-[44px]"
          style={{ backgroundColor: "#25D366", fontFamily: "var(--font-accent)" }}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us
        </a>
      </motion.div>

    </div>
  </section>
);

export default AboutSection;
