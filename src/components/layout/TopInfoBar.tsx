import { useState, useEffect } from "react";
import { BUSINESS } from "@/data/business";

const ANNOUNCEMENTS = [
  { type: "phone", content: "📞 +91 98401 99878", href: BUSINESS.phoneTel },
  { type: "whatsapp", content: "WhatsApp Orders: wa.me/919840199878", href: `${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I need a printing quote")}` },
  { type: "hours", content: "Mon–Sat: 9AM – 7PM, Pallavaram", href: null },
];

const TopInfoBar = () => {
  const [mobileIndex, setMobileIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMobileIndex((i) => (i + 1) % ANNOUNCEMENTS.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[101] h-10 bg-navy flex items-center justify-center text-white text-[13px] font-body"
      style={{ backgroundColor: "var(--color-navy)" }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between md:justify-center md:gap-8">
        {/* Desktop: show all three */}
        <a href={BUSINESS.phoneTel} className="hidden md:inline hover:opacity-90 transition-opacity">
          📞 +91 98401 99878
        </a>
        <a
          href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hi, I need a printing quote")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline hover:opacity-90 transition-opacity"
        >
          WhatsApp Orders: wa.me/919840199878
        </a>
        <span className="hidden md:inline text-white/80">Mon–Sat: 9AM – 7PM, Pallavaram</span>

        {/* Mobile: cycle marquee-style */}
        <div className="md:hidden flex-1 text-center overflow-hidden">
          {ANNOUNCEMENTS[mobileIndex].href ? (
            <a
              href={ANNOUNCEMENTS[mobileIndex].href!}
              target={ANNOUNCEMENTS[mobileIndex].type === "whatsapp" ? "_blank" : undefined}
              rel={ANNOUNCEMENTS[mobileIndex].type === "whatsapp" ? "noopener noreferrer" : undefined}
              className="block truncate hover:opacity-90"
            >
              {ANNOUNCEMENTS[mobileIndex].content}
            </a>
          ) : (
            <span className="block truncate text-white/90">{ANNOUNCEMENTS[mobileIndex].content}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
