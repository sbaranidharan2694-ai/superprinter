import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { useInView } from "@/hooks/useInView";

const sections = [
  {
    title: "How to Prepare Your File for Printing",
    content: `**File Format:** Always send your design as a high-resolution PDF. This ensures fonts, images, and layout are preserved exactly as intended.

**Bleed Marks:** Add 3mm bleed on all sides. This prevents white edges when the paper is trimmed.

**Color Mode:** Use CMYK color mode for print. RGB is for screens only — colors may shift if you send an RGB file. Convert your design to CMYK before exporting.

**Resolution:** Images should be at least 300 DPI (dots per inch) for sharp prints. Low-resolution images appear blurry on paper.

**Fonts:** Either outline/flatten all fonts or embed them in the PDF. This prevents font substitution errors.`,
  },
  {
    title: "Offset vs Digital Printing — Which is Right for You?",
    content: `| Feature | Offset Printing | Digital Printing |
|---------|----------------|-----------------|
| **Best For** | 500+ copies | 1–500 copies |
| **Setup Cost** | Higher (plate making) | None |
| **Per-Unit Cost** | Very low at scale | Higher per unit |
| **Quality** | Excellent, consistent | Excellent |
| **Turnaround** | 5–7 days | 1–3 days |
| **Color Matching** | Pantone spot colors | CMYK process |

**Rule of thumb:** If you need 500+ copies, offset saves money. For smaller quantities or urgent jobs, digital printing is faster and more flexible.`,
  },
  {
    title: "Paper Types Explained — GSM, Coated, Uncoated, Art Paper",
    content: `**GSM (Grams per Square Metre)** measures paper thickness:
- **70–80 GSM:** Standard copier paper (letterheads, pamphlets)
- **100–130 GSM:** Lightweight brochures, flyers
- **170–200 GSM:** Sturdy brochures, catalogue pages
- **250–350 GSM:** Visiting cards, invitation cards, covers

**Coated Paper (Art Paper):** Has a smooth, glossy or matte coating. Best for photos and vibrant colors — ideal for brochures, catalogues, and invitations.

**Uncoated Paper (Maplitho/Bond):** Natural feel, easy to write on. Best for letterheads, bill books, and forms.

**Specialty Papers:** Textured, metallic, or handmade papers for premium wedding invitations and luxury stationery.`,
  },
  {
    title: "Understanding Print Turnaround Times",
    content: `**Standard Turnaround:**
- Visiting Cards: 2–3 business days
- Brochures & Pamphlets: 3–5 business days
- Bill Books (NCR): 3–5 business days
- Wedding Invitations: 5–7 business days
- Offset Printing (bulk): 5–7 business days
- Banners: 1–3 business days
- Rubber Stamps: 1–2 business days

**Express / Urgent Jobs:** Many items can be expedited for an additional charge. Ask us when placing your order.

**Factors that affect turnaround:** Design approval delays, paper availability, quantity, and finishing (lamination, foil, die-cut).

**Tip:** Order early during wedding season (Oct–Feb) and year-end to avoid delays.`,
  },
  {
    title: "How to Order from Super Printers — Step by Step",
    content: `**Step 1: Contact Us**
WhatsApp your requirements to +91 98401 99878 or call us. Tell us what you need, the quantity, and any specific paper or finish preferences.

**Step 2: Share Your Design**
Send your print-ready file (PDF preferred). Don't have a design? We offer free basic design assistance for all orders.

**Step 3: Get a Quote**
We'll confirm the specifications and share a transparent price quote within 30 minutes during business hours.

**Step 4: Approve & Confirm**
We'll send you a digital proof for approval. Once you confirm, production begins immediately.

**Step 5: Pick Up or Delivery**
Collect your order from our Pallavaram shop, or we'll deliver across Chennai. Free delivery for orders above ₹2,000.`,
  },
];

const PrintingGuide = () => {
  const { ref, isVisible } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <SEOHead
        title="Printing Guide — How to Get Perfect Prints | Super Printers Chennai"
        description="Learn how to prepare files for printing, choose between offset and digital, understand paper types and GSM, and order from Super Printers Chennai."
        canonical="/printing-guide"
        keywords="printing guide, how to prepare print file, offset vs digital printing, paper GSM explained, printing tips chennai"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Printing Guide", url: "/printing-guide" },
        ]}
      />
      <main>
        <section className="navy-gradient-hero dot-pattern py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-black text-primary-foreground mb-4">
              Printing Guide — How to Get Perfect Prints
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg">
              Expert tips from 35 years of printing experience at Super Printers, Chennai.
            </p>
          </div>
        </section>

        <section ref={ref} className={`py-16 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-3xl mx-auto px-4 space-y-3">
            {sections.map((sec, i) => (
              <div key={i} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={openIndex === i}
                >
                  <h2 className="font-display text-base md:text-lg font-bold text-card-foreground">{sec.title}</h2>
                  <span className={`text-secondary text-xl shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[2000px] pb-6 px-6" : "max-h-0"}`}>
                  <div className="text-muted-foreground text-sm font-body leading-relaxed whitespace-pre-line">
                    {sec.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default PrintingGuide;
