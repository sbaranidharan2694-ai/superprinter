/**
 * Per-route WhatsApp prefilled message.
 *
 * Visitors who tap "WhatsApp" from a service-specific page should land in
 * chat already saying what they need — not a generic "I want a quote". Shared
 * between MobileBottomCTA and DesktopStickyCTA so the messaging stays
 * consistent across viewports.
 */

const EXACT_MESSAGES: Record<string, string> = {
  "/wedding-cards": "Hi! I need a quote for wedding card printing.",
  "/visiting-cards": "Hi! I need a quote for visiting cards.",
  "/brochures": "Hi! I need a quote for brochure printing.",
  "/bill-books": "Hi! I need a quote for bill book printing.",
  "/letterheads": "Hi! I need a quote for letterhead printing.",
  "/banners": "Hi! I need a quote for banner printing.",
  "/stickers": "Hi! I need a quote for sticker printing.",
  "/rubber-stamps": "Hi! I need a rubber stamp.",
  "/catalogues": "Hi! I need a quote for catalogue printing.",
  "/pvc-id-cards": "Hi! I need a quote for PVC ID card printing.",
  "/printing-guide": "Hi! I have a question about printing.",
  "/reseller": "Hi! I'd like to learn about the reseller program.",
};

export function whatsappTextFor(pathname: string): string {
  if (EXACT_MESSAGES[pathname]) return EXACT_MESSAGES[pathname];
  if (pathname.startsWith("/printing-press-")) {
    const area = pathname
      .replace("/printing-press-", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return `Hi! I need printing services in ${area}.`;
  }
  if (pathname.startsWith("/services/")) return "Hi! I'd like a quote for printing services.";
  if (pathname.startsWith("/products/")) return "Hi! I'd like a quote for one of your products.";
  if (pathname.startsWith("/blog/")) return "Hi! I have a question after reading your printing guide.";
  return "Hi! I'd like a printing quote from Super Printers.";
}

/** Build a wa.me URL with the page-context message pre-encoded. */
export function whatsappUrlFor(pathname: string, base: string): string {
  return `${base}?text=${encodeURIComponent(whatsappTextFor(pathname))}`;
}
