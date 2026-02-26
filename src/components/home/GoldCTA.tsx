const GoldCTA = () => (
  <section className="bg-secondary py-10 md:py-14">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">
        📍 Visit Us in Pallavaram, Chennai
      </h2>
      <p className="text-secondary-foreground/80 font-body text-sm md:text-base mb-6">
        Free delivery for orders above ₹2,000. Serving all of South Chennai.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://wa.me/919840199878?text=Hi%20Super%20Printers%2C%20I%27d%20like%20to%20visit%20your%20shop."
          target="_blank"
          rel="noopener noreferrer"
          className="wa-button px-8 py-3 rounded-xl font-bold text-sm flex items-center gap-2"
        >
          💬 Chat Now
        </a>
        <a href="tel:9840199878" className="px-8 py-3 rounded-xl font-bold text-sm border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 transition-colors flex items-center gap-2">
          📞 9840199878
        </a>
      </div>
    </div>
  </section>
);

export default GoldCTA;
