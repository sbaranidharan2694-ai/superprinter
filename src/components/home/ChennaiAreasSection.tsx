import { Link } from "react-router-dom";
import { AREA_PAGE_SLUGS } from "@/pages/AreaPrintingPage";

const AREA_LABELS: Record<string, string> = {
  "printing-press-pallavaram": "Pallavaram",
  "printing-press-tambaram": "Tambaram",
  "printing-press-chromepet": "Chromepet",
  "printing-press-pammal": "Pammal",
  "printing-press-perungalathur": "Perungalathur",
  "printing-press-velachery": "Velachery",
  "printing-press-nanganallur": "Nanganallur",
  "printing-press-medavakkam": "Medavakkam",
  "printing-press-guindy": "Guindy",
  "printing-press-adyar": "Adyar",
  "printing-press-alandur": "Alandur",
  "printing-press-t-nagar": "T. Nagar",
  "printing-press-anna-nagar": "Anna Nagar",
  "printing-press-porur": "Porur",
  "printing-press-omr": "OMR",
  "printing-press-sholinganallur": "Sholinganallur",
  "printing-press-vadapalani": "Vadapalani",
  "printing-press-mylapore": "Mylapore",
  "printing-press-saidapet": "Saidapet",
  "printing-press-ekkattuthangal": "Ekkattuthangal",
  "printing-press-ashok-nagar": "Ashok Nagar",
  "printing-press-egmore": "Egmore",
  "printing-press-anna-salai": "Anna Salai",
  "printing-press-manapakkam": "Manapakkam",
  "printing-press-thiruvanmiyur": "Thiruvanmiyur",
  "printing-press-mogappair": "Mogappair",
  "printing-press-kodambakkam": "Kodambakkam",
  "printing-press-nungambakkam": "Nungambakkam",
  "printing-press-ambattur": "Ambattur",
  "printing-press-avadi": "Avadi",
};

const ChennaiAreasSection = () => (
  <section className="py-12 px-4 bg-white border-t border-gray-100" aria-labelledby="chennai-areas-heading">
    <div className="max-w-5xl mx-auto">
      <h2 id="chennai-areas-heading" className="font-display text-xl md:text-2xl font-bold mb-2" style={{ color: "var(--color-primary)" }}>
        Printing press serving across Chennai
      </h2>
      <p className="text-sm md:text-base mb-6" style={{ color: "#4B5563", fontFamily: "var(--font-body)" }}>
        Our Pallavaram press delivers visiting cards, wedding cards, brochures, banners and bulk offset printing to every major Chennai suburb. Pick your area for delivery details and local turnaround.
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm">
        {AREA_PAGE_SLUGS.map((slug) => (
          <li key={slug}>
            <Link
              to={`/${slug}`}
              className="hover:underline"
              style={{ color: "var(--color-primary)", fontFamily: "var(--font-body)" }}
            >
              Printing press in {AREA_LABELS[slug] ?? slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default ChennaiAreasSection;
