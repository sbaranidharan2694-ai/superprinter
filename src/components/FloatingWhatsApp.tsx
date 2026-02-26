const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%27d%20like%20a%20quote%20for%20"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    aria-label="Get instant quote on WhatsApp"
  >
    <span className="hidden sm:block bg-card text-card-foreground text-xs font-semibold font-body px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
      💬 Get Instant Quote!
    </span>
    <div className="w-14 h-14 rounded-full wa-button flex items-center justify-center text-2xl shadow-xl animate-pulse-glow">
      💬
    </div>
  </a>
);

export default FloatingWhatsApp;
