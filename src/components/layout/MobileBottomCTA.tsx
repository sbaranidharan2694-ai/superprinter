import { BUSINESS } from "@/data/business";

const MobileBottomCTA = () => (
  <div
    className="fixed bottom-0 left-0 right-0 z-[100] md:hidden h-16 flex items-stretch border-t border-border-light bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
    style={{ backgroundColor: "#FFFFFF" }}
  >
    <a
      href={BUSINESS.phoneTel}
      className="flex-1 flex items-center justify-center gap-2 text-ink-black font-ui font-semibold text-sm hover:bg-gray-50 transition-colors"
      aria-label="Call now"
    >
      <span className="text-lg">📞</span>
      Call Now
    </a>
    <div className="w-px bg-border-light" style={{ backgroundColor: "var(--border-light)" }} />
    <a
      href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers! I need a printing quote.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 text-white font-ui font-semibold text-sm bg-whatsapp"
      aria-label="WhatsApp"
    >
      <span className="text-lg">💬</span>
      WhatsApp
    </a>
  </div>
);

export default MobileBottomCTA;
