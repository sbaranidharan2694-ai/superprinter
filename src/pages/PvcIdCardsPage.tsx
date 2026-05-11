import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { serviceLandingSchema } from "@/data/seoSchemas";

const SPEC_ROWS = [
  { type: "Standard PVC",           thickness: "0.76 mm",  finish: "Glossy",                                  features: "Single / double side print", minQty: "10" },
  { type: "Metallic PVC",           thickness: "0.76 mm",  finish: "Gold / silver / brushed",                features: "Premium visiting & VIP cards",  minQty: "25" },
  { type: "Transparent PVC",        thickness: "0.5–0.76 mm", finish: "Frosted / clear",                     features: "Modern visiting cards",         minQty: "50" },
  { type: "Smart RFID / NFC Card",  thickness: "0.76 mm",  finish: "Glossy",                                  features: "Mifare / NFC chip embedded",     minQty: "50" },
  { type: "Photo ID Card",          thickness: "0.76 mm",  finish: "Glossy, with lanyard hole",              features: "Employee, student, visitor IDs", minQty: "10" },
];

const PvcIdCardsPage = () => (
  <div className="font-body text-foreground bg-background overflow-x-hidden">
    <SEOHead
      title="PVC ID Card Printing Chennai | Employee, Student & Smart Cards | Super Printers Pallavaram"
      description="PVC ID card printing in Pallavaram, Chennai. Employee, student, visitor and RFID / NFC smart cards. Photo ID, metallic and transparent PVC. From 10 cards, ready in 24–48 hours. WhatsApp +91 98401 99878."
      canonical="/pvc-id-cards"
      keywords="PVC ID card printing Chennai, employee ID card Pallavaram, student ID card Chennai, RFID card printing Chennai, NFC card Chennai, photo ID card Chennai, metallic PVC card Chennai, smart card printing"
      breadcrumbs={[{ name: "Home", url: "/" }, { name: "PVC ID Cards", url: "/pvc-id-cards" }]}
      schemaMarkup={serviceLandingSchema({
        path: "/pvc-id-cards",
        name: "PVC ID card printing — Super Printers",
        serviceType: "PVC ID, smart card and photo ID card printing",
        description: "PVC ID card printing in Chennai. Employee, student, visitor IDs plus RFID / NFC smart cards. Metallic and transparent finishes.",
      })}
    />

    <div className="pt-[116px] pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm font-ui text-gray-500 mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">&rsaquo;</span>
          <span className="text-ink-black">PVC ID Cards</span>
        </nav>

        <header className="mb-12">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-ink-black mb-3">
            PVC &amp; Smart ID Card Printing in Pallavaram, Chennai
          </h1>
          <p className="font-ui text-lg text-gray-600 mb-6">
            Employee, student, visitor and member ID cards on premium PVC. Photo printing, metallic finishes, RFID / NFC smart cards. From 10 cards, ready in 24&ndash;48 hours.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/get-quote?service=pvc-id-cards" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-semibold text-ink-black transition-all duration-300 hover:scale-[1.02]" style={{ backgroundColor: "var(--gold)" }}>
              Get Quote
            </Link>
            <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi! I need PVC ID cards. Quantity & type:")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-ui font-medium border-2 transition-all" style={{ borderColor: "var(--navy-deep)", color: "var(--navy-deep)" }}>
              WhatsApp Order
            </a>
          </div>
        </header>

        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Card types &amp; options</h2>
          <div className="overflow-x-auto rounded-3xl border border-border-light shadow-card">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr style={{ backgroundColor: "var(--gold)" }}>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Type</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Thickness</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Finish</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Features</th>
                  <th className="px-4 py-3 font-ui font-semibold text-ink-black text-sm">Min Qty</th>
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                    <td className="px-4 py-3 font-ui text-sm text-ink-black">{row.type}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.thickness}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.finish}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.features}</td>
                    <td className="px-4 py-3 font-ui text-sm text-gray-700">{row.minQty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs font-ui text-gray-500 border-t border-border-light">Standard CR80 (85.6 &times; 54 mm). Lanyards, holders and reels available.</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Most-ordered ID cards</h2>
          <ul className="space-y-2 font-ui text-gray-700">
            <li>&#10003; <strong>Employee ID cards</strong> with photo, name, designation, blood group, emergency contact</li>
            <li>&#10003; <strong>Student ID cards</strong> for schools and colleges &mdash; with photo, roll no., class, academic year</li>
            <li>&#10003; <strong>Visitor / contractor passes</strong> &mdash; with QR code or barcode</li>
            <li>&#10003; <strong>Society &amp; gym membership cards</strong> &mdash; with RFID for gate / equipment access</li>
            <li>&#10003; <strong>Loyalty &amp; gift cards</strong> &mdash; with embossed numbering or barcode</li>
            <li>&#10003; <strong>NFC business cards</strong> &mdash; tap-to-share contact details with embedded chip</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">Bulk ID card data &mdash; how it works</h2>
          <p className="font-ui text-gray-700 mb-4">
            For employee or student batches, send us an Excel sheet with name, photo file name, ID number and other fields you want printed. Attach the photo folder and we&apos;ll variable-data-print each card with the correct details. Most batches of 100&ndash;500 cards are done within 2 working days.
          </p>
          <p className="font-ui text-gray-700">
            Photos should be passport-style, &gt;300 DPI, plain background preferred. If your photos are low quality or different sizes, our design team will straighten and standardise them before printing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display font-semibold text-xl text-ink-black mb-4">FAQs</h2>
          <div className="space-y-4 font-ui text-gray-700">
            <div>
              <p className="font-semibold text-ink-black">Are these the standard credit-card thickness?</p>
              <p>Yes &mdash; we print on 0.76 mm CR80 PVC, the same thickness as credit cards and ATM cards. Thinner 0.5 mm cards are available for short-term visitor / event passes.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Can you add a QR code or barcode?</p>
              <p>Yes. Send the data and we&apos;ll generate scannable QR / Code 128 / EAN-13 barcodes on each card.</p>
            </div>
            <div>
              <p className="font-semibold text-ink-black">Do you supply lanyards and ID-card holders?</p>
              <p>Yes &mdash; printed lanyards (with your logo), plain lanyards, retractable reels and clear ID-card holders are all available. Bundle pricing if you order cards + lanyards together.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default PvcIdCardsPage;
