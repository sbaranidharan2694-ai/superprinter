/** Google Analytics 4 event tracking. Replace G-XXXXXXXXXX in index.html with your GA4 ID. */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(label?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: label ?? "whatsapp_cta",
    });
  }
}

export function trackPhoneClick(label?: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "phone_click", {
      event_category: "engagement",
      event_label: label ?? "call_cta",
    });
  }
}
