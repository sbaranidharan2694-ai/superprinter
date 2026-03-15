const BADGES = [
  "⭐ 4.8 Google Rating (147 Reviews)",
  "🏅 Est. 1990 — 35 Years",
  "📦 48-Hour Delivery",
  "🧾 GST Invoice Included",
  "✅ 10,000+ Happy Customers",
  "💬 WhatsApp Ordering",
];

const TrustBadgesStrip = () => (
  <section className="py-4 overflow-hidden" style={{ backgroundColor: "#f8f8f8" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex flex-nowrap sm:flex-wrap gap-3 justify-center items-center overflow-x-auto scrollbar-hide">
        {BADGES.map((label) => (
          <span
            key={label}
            className="shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 bg-white shadow-sm"
            style={{ color: "#1A1A2E", fontFamily: "var(--font-body)" }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadgesStrip;
