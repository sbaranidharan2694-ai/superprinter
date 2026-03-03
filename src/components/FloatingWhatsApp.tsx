import { useState, useEffect } from "react";
import { IMG } from "@/data/images";

const FloatingWhatsApp = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/919840199878?text=Hi%20Super%20Printers!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full bg-[#25D366] shadow-lg wa-pulse hover:scale-110 transition-transform overflow-hidden"
        aria-label="Chat on WhatsApp"
      >
        <img src={IMG.P24} alt="Chat with us" className="w-[56px] h-[56px] rounded-full object-cover m-[2px]" loading="lazy" width="56" height="56" />
      </a>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 left-6 z-50 w-[50px] h-[50px] rounded-full border-2 border-brand-red overflow-hidden hover:scale-110 transition-transform shadow-lg"
          aria-label="Scroll to top"
        >
          <img src={IMG.P18} alt="Back to top" className="w-[46px] h-[46px] rounded-full object-cover m-[2px]" loading="lazy" width="46" height="46" />
        </button>
      )}
    </>
  );
};

export default FloatingWhatsApp;