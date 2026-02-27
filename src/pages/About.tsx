import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { useInView } from "@/hooks/useInView";

const About = () => {
  const { ref, isVisible } = useInView();

  return (
    <>
      <SEOHead
        title="About Super Printers | Trusted Printing Press in Chennai"
        description="Since 1989, Super Printers has served Chennai with quality offset, digital and screen printing for businesses, events and individuals."
        canonical="/about"
        keywords="about super printers, printing press pallavaram, printing company chennai, trusted printers chennai"
      />
      <main>
        <section ref={ref} className={`py-16 md:py-24 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-6">
              About Super Printers — Chennai's Trusted Printing Press Since 1989
            </h1>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Founded in 1989, Super Printers is one of Pallavaram's oldest and most trusted printing presses. For over {BUSINESS.years} years, we have been serving individuals, families, and businesses across Chennai with high-quality, affordable printing solutions.
              </p>
              <p>
                Our facility at {BUSINESS.address}, {BUSINESS.city} handles everything from single-copy digital prints to large-scale offset runs. Whether you need visiting cards for your startup, wedding invitations for your family celebration, or GST-compliant bill books for your business — we deliver excellence every time.
              </p>
              <p>
                We proudly serve customers across {BUSINESS.areas.slice(0, 10).join(", ")} and all of Greater Chennai with fast turnaround and doorstep delivery for bulk orders.
              </p>

              <h2 className="font-display text-2xl font-bold text-foreground pt-6">Why Choose Super Printers in Chennai?</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Established 1989 — {BUSINESS.years} years of printing excellence</li>
                <li>Affordable pricing with no hidden charges</li>
                <li>Fast 1–7 day turnaround on all services</li>
                <li>Premium quality offset, digital, and screen printing</li>
                <li>Conveniently located near Pallavaram Railway Station</li>
                <li>Serving all of Chennai — Pallavaram, Chromepet, Tambaram & beyond</li>
                <li>Free design assistance for all printing orders</li>
                <li>1000+ happy customers across South Chennai</li>
              </ul>
            </div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { num: BUSINESS.years, label: "Years in Business" },
                { num: "1000+", label: "Happy Customers" },
                { num: "14+", label: "Print Services" },
                { num: BUSINESS.founded, label: "Established" },
              ].map((s) => (
                <div key={s.label} className="navy-gradient p-5 rounded-xl text-center">
                  <div className="font-display text-2xl font-black text-gold-light">{s.num}</div>
                  <div className="text-primary-foreground/70 text-xs font-body mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
