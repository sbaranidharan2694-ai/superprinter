import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ta";

const STORAGE_KEY = "superprinters_lang";

const translations: Record<string, { en: string; ta: string }> = {
  "Get Instant Quote": { en: "Get Instant Quote", ta: "உடனடி விலைப்பட்டியல் பெறுக" },
  "WhatsApp Order": { en: "WhatsApp Order", ta: "WhatsApp ஆர்டர்" },
  "Business Cards": { en: "Business Cards", ta: "வணிக அட்டைகள்" },
  "Wedding Cards": { en: "Wedding Cards", ta: "திருமண அழைப்பிதழ்கள்" },
  "48-Hour Delivery": { en: "48-Hour Delivery", ta: "48 மணி நேர டெலிவரி" },
  "Call Us": { en: "Call Us", ta: "அழைக்கவும்" },
  "Our Services": { en: "Our Services", ta: "எங்கள் சேவைகள்" },
  "35+ Years": { en: "35+ Years", ta: "35+ ஆண்டுகள்" },
  "Contact Us": { en: "Contact Us", ta: "தொடர்பு கொள்ளுங்கள்" },
  "View Our Products": { en: "View Our Products", ta: "எங்கள் தயாரிப்புகள்" },
  "48Hr Delivery": { en: "48Hr Delivery", ta: "48 மணி நேர டெலிவரி" },
  "All Products": { en: "All Products", ta: "அனைத்து தயாரிப்புகள்" },
  "Home": { en: "Home", ta: "முகப்பு" },
  "Products": { en: "Products", ta: "தயாரிப்புகள்" },
  "Portfolio": { en: "Portfolio", ta: "போர்ட்ஃபோலியோ" },
  "About": { en: "About", ta: "எங்களைப் பற்றி" },
  "Contact": { en: "Contact", ta: "தொடர்பு" },
};

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "en" || stored === "ta") setLangState(stored);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (key: string) => {
      const pair = translations[key];
      if (!pair) return key;
      return pair[lang];
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
