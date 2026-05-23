import { useEffect, useRef, useState } from "react";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { services } from "@/data/services";
import { trackWhatsAppClick } from "@/utils/analytics";
import { useInView } from "@/hooks/useInView";

const ACCEPT_FILES = ".pdf,.ai,.psd,.jpg,.jpeg,.png,.cdr";
const MAX_FILE_MB = 10;
const STEP_LABELS = ["Service", "Quantity", "Finish", "WhatsApp"];

const GetQuote = () => {
  const { ref, isVisible } = useInView();
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paper, setPaper] = useState("Standard");
  const [phone, setPhone] = useState("");
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

  // Ref to the current step's <h2>. On step change we focus it so screen
  // reader users hear the new step heading announced; sighted users get
  // the visible scroll position too.
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    // Skip the very first render — the page-level <h1> is the natural
    // entry point. Only act on subsequent step changes.
    if (step === 1) return;
    stepHeadingRef.current?.focus();
  }, [step]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const f = e.target.files?.[0];
    if (!f) { setDesignFile(null); return; }
    if (f.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File must be under ${MAX_FILE_MB}MB.`);
      setDesignFile(null);
      e.target.value = "";
      return;
    }
    setDesignFile(f);
  };

  const phoneValid = /^[0-9+\-\s]{10,}$/.test(phone.trim());

  const handleGetQuote = () => {
    if (!phoneValid) return;
    trackWhatsAppClick("get_quote_submit");
    let msg = `Hi, I need a quote for ${service} x ${quantity} pcs on ${paper} finish. My number is ${phone}.`;
    if (designFile) msg += " I have a design file ready to share.";
    window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const selectedService = services.find((s) => s.name === service);
  const quantityNum = Number(quantity);
  const quantityValid = quantityNum > 0;

  // Shared classes
  const inputCls = "w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-transparent";
  const primaryBtn = "flex-1 gold-button py-3 rounded-lg text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";
  const backBtn = "flex-1 py-3 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2";

  return (
    <>
      <SEOHead
        title="Get a Print Quote | Super Printers Pallavaram Chennai"
        description="Tell us what you need to print and we'll send a quote on WhatsApp in 30 minutes — wedding cards, visiting cards, brochures, bill books, banners, stickers and more."
        canonical="/get-quote"
        keywords="print quote chennai, printing quote pallavaram, super printers quote, wedding card quote, visiting card quote"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Get Quote", url: "/get-quote" },
        ]}
        schemaMarkup={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Get a Print Quote",
          "url": "https://superprinters.net/get-quote",
          "potentialAction": {
            "@type": "RequestQuoteAction",
            "name": "Request a printing quote",
            "target": "https://wa.me/919840199878",
            "expectsAcceptanceOf": { "@type": "Offer", "priceCurrency": "INR" }
          },
          "about": { "@type": "LocalBusiness", "name": "Super Printers & Wedding Cards", "telephone": "+919840199878" }
        }}
      />
      <main>
        <section className="navy-gradient-hero py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-3 font-ui" style={{ color: "var(--gold-dark)" }}>
              4 quick steps &middot; quote in 30 min
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "var(--ink-black)" }}>
              Get a print quote
            </h1>
            <p className="font-body text-lg max-w-xl mx-auto" style={{ color: "var(--gray-text)" }}>
              Tell us what you need. We&rsquo;ll reply on WhatsApp within 30 minutes during business hours.
            </p>
          </div>
        </section>

        <section ref={ref} className={`py-16 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-xl mx-auto px-4">
            {/* Progress, also serving as the polite live region. Each step
                change updates this text → screen reader announces
                "Step 2 of 4: How many?" without interrupting other speech. */}
            <div className="mb-6" role="status" aria-live="polite" aria-atomic="true">
              <p className="text-xs font-ui font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--gray-text)" }}>
                Step {step} of 4 &middot; {STEP_LABELS[step - 1]}
              </p>
              <div
                className="flex items-center gap-2"
                role="progressbar"
                aria-valuenow={step}
                aria-valuemin={1}
                aria-valuemax={4}
                aria-label={`Quote progress: step ${step} of 4`}
              >
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${step >= s ? "bg-gold" : "bg-border"}`}
                    aria-hidden
                  />
                ))}
              </div>
            </div>

            {/* Wrapped in a <form> so Enter inside any input advances the
                step. Each step's primary button keeps onClick + type guard
                so the same handler fires from both pointer and keyboard. */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (step === 1 && service) setStep(2);
                else if (step === 2 && quantityValid) setStep(3);
                else if (step === 3) setStep(4);
                else if (step === 4 && phoneValid) handleGetQuote();
              }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              {/* Step 1 — Service */}
              {step === 1 && (
                <div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className="font-display text-xl font-semibold text-foreground mb-1 focus:outline-none">What do you need printed?</h2>
                  <p className="text-sm text-muted-foreground font-body mb-4">Pick one. You can mention extras in the WhatsApp message.</p>
                  <label htmlFor="gq-service" className="sr-only">Service</label>
                  <select
                    id="gq-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Choose a printing service…</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>{s.emoji} {s.name}{s.startingPrice ? ` — from ${s.startingPrice}` : ""}</option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={() => service && setStep(2)}
                    disabled={!service}
                    className={`${primaryBtn} w-full mt-4`}
                  >
                    Next &rarr;
                  </button>
                </div>
              )}

              {/* Step 2 — Quantity */}
              {step === 2 && (
                <div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className="font-display text-xl font-semibold text-foreground mb-1 focus:outline-none">How many?</h2>
                  <p className="text-sm text-muted-foreground font-body mb-4">
                    {selectedService?.startingPrice ? `Starting from ${selectedService.startingPrice}.` : "Quantities below 100 may use digital print."}
                  </p>
                  <label htmlFor="gq-quantity" className="sr-only">Quantity</label>
                  <input
                    id="gq-quantity"
                    name="quantity"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 500"
                    className={inputCls}
                  />
                  {/* Quick-pick chips for common runs */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {[100, 250, 500, 1000].map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuantity(String(q))}
                        className="px-3 py-1.5 rounded-full text-xs font-medium font-ui border border-border hover:border-gold hover:bg-gold/5 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button type="button" onClick={() => setStep(1)} className={backBtn}>&larr; Back</button>
                    <button type="button" onClick={() => quantityValid && setStep(3)} disabled={!quantityValid} className={primaryBtn}>Next &rarr;</button>
                  </div>
                </div>
              )}

              {/* Step 3 — Finish */}
              {step === 3 && (
                <div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} id="gq-finish-label" className="font-display text-xl font-semibold text-foreground mb-1 focus:outline-none">Pick a finish</h2>
                  <p className="text-sm text-muted-foreground font-body mb-4">Not sure? Pick Standard &mdash; we&rsquo;ll suggest options based on your job.</p>
                  <div className="space-y-2" role="radiogroup" aria-labelledby="gq-finish-label">
                    {["Standard", "Premium", "Luxury"].map((opt) => (
                      <label key={opt} className={`flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${paper === opt ? "border-gold bg-gold/5" : "border-border hover:bg-muted/50"}`}>
                        <input
                          type="radio"
                          name="paper"
                          value={opt}
                          checked={paper === opt}
                          onChange={() => setPaper(opt)}
                          className="accent-gold mt-1"
                        />
                        <div>
                          <div className="font-body font-semibold text-sm text-card-foreground">{opt}</div>
                          <div className="text-muted-foreground text-xs font-body">
                            {opt === "Standard" && "Basic paper and finish — most affordable"}
                            {opt === "Premium" && "Heavier card stock with lamination options"}
                            {opt === "Luxury" && "Foil, embossing, or specialty finish"}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button type="button" onClick={() => setStep(2)} className={backBtn}>&larr; Back</button>
                    <button type="button" onClick={() => setStep(4)} className={primaryBtn}>Next &rarr;</button>
                  </div>
                </div>
              )}

              {/* Step 4 — WhatsApp + file + send */}
              {step === 4 && (
                <div>
                  <h2 ref={stepHeadingRef} tabIndex={-1} className="font-display text-xl font-semibold text-foreground mb-1 focus:outline-none">Where do we send the quote?</h2>
                  <p className="text-sm text-muted-foreground font-body mb-4">Your WhatsApp number. We reply within 30 minutes during business hours.</p>

                  <label htmlFor="gq-phone" className="sr-only">WhatsApp number</label>
                  <input
                    id="gq-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[0-9+\-\s]{10,}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9840199878"
                    aria-invalid={phone.length > 0 && !phoneValid}
                    aria-describedby={phone.length > 0 && !phoneValid ? "gq-phone-err" : undefined}
                    className={inputCls}
                  />
                  {phone.length > 0 && !phoneValid && (
                    <p id="gq-phone-err" role="alert" className="text-xs text-destructive mt-1.5 font-ui">Enter a valid 10-digit phone number.</p>
                  )}

                  {/* File upload */}
                  <div className="mt-5">
                    <label htmlFor="gq-file" className="block font-ui text-sm font-semibold text-foreground mb-2">
                      Upload design file <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      id="gq-file"
                      name="design"
                      type="file"
                      accept={ACCEPT_FILES}
                      onChange={handleFileChange}
                      className="w-full text-sm text-muted-foreground file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-ink-black file:text-white hover:file:bg-ink-black/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    />
                    <p className="text-xs text-muted-foreground mt-1.5">Accepted: PDF, AI, PSD, JPG, PNG, CDR. Max {MAX_FILE_MB} MB.</p>
                    {designFile && (
                      <p className="text-xs mt-1.5 inline-flex items-center gap-1.5" style={{ color: "var(--color-success)" }}>
                        <span aria-hidden>&#10003;</span>
                        {designFile.name} &middot; {(designFile.size / 1024).toFixed(1)} KB
                      </p>
                    )}
                    {fileError && <p className="text-xs text-destructive mt-1.5" role="alert">{fileError}</p>}
                    <p className="text-xs mt-2 text-muted-foreground">
                      Don&rsquo;t have a design?{" "}
                      <a href={BUSINESS.whatsappWedding} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                        WhatsApp us
                      </a>
                      {" "}&mdash; free design help for wedding cards.
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="mt-5 p-4 rounded-lg bg-muted/40 border border-border text-sm font-body space-y-1.5">
                    <p className="text-xs font-ui font-semibold uppercase tracking-wider text-muted-foreground mb-2">Your quote request</p>
                    <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span className="text-foreground font-semibold">{service}</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Quantity</span><span className="text-foreground font-semibold">{quantity} pcs</span></div>
                    <div className="flex justify-between"><span className="text-muted-foreground">Finish</span><span className="text-foreground font-semibold">{paper}</span></div>
                    {designFile && <div className="flex justify-between"><span className="text-muted-foreground">Design file</span><span className="text-foreground font-semibold">attached</span></div>}
                  </div>

                  <div className="flex gap-3 mt-5">
                    <button type="button" onClick={() => setStep(3)} className={backBtn}>&larr; Back</button>
                    <button
                      type="button"
                      onClick={handleGetQuote}
                      disabled={!phoneValid}
                      className="flex-1 wa-button py-3 rounded-lg text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
                      </svg>
                      Send on WhatsApp
                    </button>
                  </div>

                  {/* Fallback alternative paths — replenish the goodwill reservoir */}
                  <p className="text-xs text-center mt-4 text-muted-foreground font-ui">
                    Prefer to talk?{" "}
                    <a href="tel:+919840199878" className="underline hover:text-gold">Call +91 98401 99878</a>
                    {" "}&middot;{" "}
                    <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="underline hover:text-gold">
                      Chat directly
                    </a>
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default GetQuote;
