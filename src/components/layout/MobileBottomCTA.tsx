import { BUSINESS } from "@/data/business";

const MobileBottomCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden h-14 bg-navy flex items-stretch" style={{ backgroundColor: "var(--color-navy)" }}>
    <a
      href={BUSINESS.phoneTel}
      className="flex-1 flex items-center justify-center gap-2 text-white font-body font-medium text-sm"
      aria-label="Call now"
    >
      <span className="text-lg">📞</span>
      Call
    </a>
    <div className="w-px bg-white/20" />
    <a
      href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi Super Printers! I need a printing quote.")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-2 text-white font-body font-medium text-sm bg-[#25D366]"
      aria-label="WhatsApp"
    >
      <span className="text-lg">💬</span>
      WhatsApp
    </a>
  </div>
);

export default MobileBottomCTA;
