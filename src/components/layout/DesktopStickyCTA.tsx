import { Link, useLocation } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { trackWhatsAppClick } from "@/utils/analytics";
import { whatsappTextFor } from "@/utils/whatsapp";

/**
 * Floating right-edge conversion CTA, desktop-only.
 *
 * Two pill buttons stacked bottom-right: WhatsApp (primary, green) and Get
 * Quote (secondary, gold). Visible on every public page except `/get-quote`
 * (already there) and `/orders` (internal). Hidden on mobile because the
 * sticky bottom bar (MobileBottomCTA) handles that viewport.
 *
 * Icons-only by default; the label slides in from the left on hover via a
 * width transition — keeps the bar tight at rest, immediately readable on
 * intent. Both buttons share the same per-route WhatsApp prefill helper as
 * the mobile bar.
 */
const DesktopStickyCTA = () => {
  const { pathname } = useLocation();
  if (pathname === "/get-quote" || pathname.startsWith("/orders")) return null;

  const waText = whatsappTextFor(pathname);
  const waUrl = `${BUSINESS.whatsapp}?text=${encodeURIComponent(waText)}`;

  return (
    <div
      className="hidden md:flex fixed bottom-8 right-6 z-[90] flex-col gap-3 items-end pointer-events-none"
      aria-label="Quick contact"
    >
      {/* WhatsApp — primary. Slight pulse halo via box-shadow keyframe-less
          animation (re-uses Tailwind's animate-pulse-ring keyframe). */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick?.("desktop_sticky_cta")}
        className="group pointer-events-auto flex items-center gap-2 bg-[#25D366] text-white pl-3 pr-3 py-3 rounded-full shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] hover:shadow-[0_12px_32px_-6px_rgba(37,211,102,0.7)] hover:pr-5 transition-all duration-200"
        aria-label={`WhatsApp Super Printers at ${BUSINESS.phone}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
        <span className="font-semibold text-sm whitespace-nowrap max-w-0 group-hover:max-w-[140px] overflow-hidden transition-[max-width] duration-200">
          Chat on WhatsApp
        </span>
      </a>

      {/* Get Quote — secondary. Same expand-on-hover pattern. */}
      <Link
        to="/get-quote"
        className="group pointer-events-auto flex items-center gap-2 pl-3 pr-3 py-3 rounded-full shadow-[0_8px_24px_-6px_rgba(197,168,128,0.55)] hover:shadow-[0_12px_32px_-6px_rgba(197,168,128,0.75)] hover:pr-5 transition-all duration-200"
        style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
        aria-label="Get a printing quote"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
        <span className="font-semibold text-sm whitespace-nowrap max-w-0 group-hover:max-w-[100px] overflow-hidden transition-[max-width] duration-200">
          Get Quote
        </span>
      </Link>
    </div>
  );
};

export default DesktopStickyCTA;
