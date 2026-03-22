import { BUSINESS } from "@/data/business";

const ROWS = [
  { feature: "Best For", offset: "500+ copies", digital: "Under 200 copies" },
  { feature: "Cost Per Piece", offset: "Lower at high volume", digital: "Affordable for small runs" },
  { feature: "Quality", offset: "Premium, Pantone accurate", digital: "Good for photos & colour" },
  { feature: "Turnaround", offset: "24–48 hours", digital: "Same day possible" },
  { feature: "Min. Quantity", offset: "100 pcs", digital: "1 pc" },
  { feature: "Paper Options", offset: "All types including premium", digital: "Standard stocks" },
  { feature: "Best Products", offset: "Wedding cards, letterheads, bill books", digital: "Visiting cards, flyers, posters" },
];

const ComparisonTableSection = () => (
  <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: "#ffffff" }}>
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: "var(--color-primary)" }}>
        Which Printing Method is Right for You?
      </h2>
      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
        <table className="w-full text-sm font-body">
          <thead>
            <tr style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}>
              <th className="text-left px-4 py-3 font-semibold">Feature</th>
              <th className="text-left px-4 py-3 font-semibold">Offset Printing</th>
              <th className="text-left px-4 py-3 font-semibold">Digital Printing</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.feature}
                className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                style={{ color: "#374151" }}
              >
                <td className="px-4 py-3 font-medium">{row.feature}</td>
                <td className="px-4 py-3">{row.offset}</td>
                <td className="px-4 py-3">{row.digital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-center mt-6 text-sm" style={{ color: "#6B7280", fontFamily: "var(--font-body)" }}>
        Not sure?{" "}
        <a
          href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I'm not sure which printing method is best for my job. Can you recommend?")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:opacity-80"
          style={{ color: "var(--gold)" }}
        >
          WhatsApp us and we'll recommend the best option for your job →
        </a>
      </p>
    </div>
  </section>
);

export default ComparisonTableSection;
