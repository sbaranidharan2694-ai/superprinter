import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import { trackPhoneClick, trackWhatsAppClick } from "@/utils/analytics";
import { whatsappTextFor } from "@/utils/whatsapp";

/**
 * Mobile-only sticky conversion bar.
 *
 * Three actions: Call / WhatsApp / Get Quote. WhatsApp's prefilled message
 * adapts to the current route so a visitor on /wedding-cards opens a chat
 * about wedding cards, not a generic "I need a quote".
 *
 * Hidden on /get-quote (already on the form), any /orders route (internal
 * tracker), and whenever the on-screen keyboard is open (otherwise the bar
 * covers the form field the user is typing into — measurable conversion
 * leak on /contact and /get-quote).
 *
 * Bottom padding honours `env(safe-area-inset-bottom)` so iPhone X+ users
 * don't have the icons clipped by the home-indicator bar.
 */

/**
 * Detect whether the on-screen keyboard is open. Uses visualViewport when
 * available (iOS 13+, Android Chrome), falls back to no-op on older browsers
 * where the bar stays visible (acceptable — the original behaviour).
 */
function useKeyboardOpen() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;
    const vv = window.visualViewport;
    const check = () => {
      // 100px tolerance: address bar collapse alone isn't a keyboard.
      setOpen(window.innerHeight - vv.height > 100);
    };
    check();
    vv.addEventListener("resize", check);
    return () => vv.removeEventListener("resize", check);
  }, []);
  return open;
}

const MobileBottomCTA = () => {
  const { pathname } = useLocation();
  const keyboardOpen = useKeyboardOpen();

  if (pathname === "/get-quote" || pathname.startsWith("/orders")) return null;
  if (keyboardOpen) return null;

  const waText = whatsappTextFor(pathname);

  return (
    <nav
      // Slide-up entry + safe-area inset for iPhone home bar.
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden border-t border-border-light bg-white/95 backdrop-blur shadow-[0_-6px_20px_-6px_rgba(26,26,46,0.15)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3">
        <a
          href="tel:+919840199878"
          onClick={() => trackPhoneClick?.("mobile_sticky_bar")}
          className="flex flex-col items-center justify-center py-2.5 active:bg-gray-100 active:scale-95 transition-transform duration-100"
          aria-label={`Call Super Printers at ${BUSINESS.phone}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mb-0.5" style={{ color: "var(--ink-black)" }}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-[11px] font-medium font-ui leading-tight" style={{ color: "var(--ink-black)" }}>Call</span>
        </a>
        <a
          href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(waText)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick?.("mobile_sticky_bar")}
          className="flex flex-col items-center justify-center py-2.5 active:bg-green-50 active:scale-95 transition-transform duration-100 border-x border-border-light"
          aria-label="WhatsApp Super Printers"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5 mb-0.5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
          <span className="text-[11px] font-medium font-ui leading-tight" style={{ color: "var(--ink-black)" }}>WhatsApp</span>
        </a>
        <Link
          to="/get-quote/"
          className="flex flex-col items-center justify-center py-2.5 active:opacity-90 active:scale-95 transition-transform duration-100"
          style={{ backgroundColor: "var(--gold)" }}
          aria-label="Get Quote for printing"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mb-0.5" style={{ color: "var(--ink-black)" }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
          </svg>
          <span className="text-[11px] font-semibold font-ui leading-tight" style={{ color: "var(--ink-black)" }}>Get Quote</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomCTA;
