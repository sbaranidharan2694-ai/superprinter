import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { BUSINESS } from "@/data/business";
import { services } from "@/data/services";
import { trackWhatsAppClick } from "@/utils/analytics";
import { useInView } from "@/hooks/useInView";

const ACCEPT_FILES = ".pdf,.ai,.psd,.jpg,.jpeg,.png,.cdr";
const MAX_FILE_MB = 10;

const GetQuote = () => {
  const { ref, isVisible } = useInView();
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paper, setPaper] = useState("Standard");
  const [phone, setPhone] = useState("");
  const [designFile, setDesignFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");

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

  const handleGetQuote = () => {
    trackWhatsAppClick("get_quote_submit");
    let msg = `Hi, I need a quote for ${service} x ${quantity} pcs on ${paper} finish. My number is ${phone}.`;
    if (designFile) msg += " I have a design file ready to share.";
    window.open(`${BUSINESS.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const selectedService = services.find((s) => s.name === service);

  return (
    <>
      <SEOHead
        title="Get Instant Print Quote | Super Printers Chennai"
        description="Get an instant printing quote from Super Printers Pallavaram. Select your service, quantity, and finish — receive a WhatsApp quote in 30 minutes."
        canonical="/get-quote"
        keywords="print quote chennai, printing quote pallavaram, instant print quote, super printers quote"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Get Quote", url: "/get-quote" },
        ]}
      />
      <main>
        <section className="navy-gradient-hero dot-pattern py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="font-display text-3xl md:text-5xl font-black mb-4" style={{ color: "var(--color-primary)" }}>
              Get an Instant Print Quote
            </h1>
            <p className="font-body text-lg font-medium" style={{ color: "var(--color-text)" }}>
              Select your service, quantity, and finish. We'll respond on WhatsApp within 30 minutes.
            </p>
          </div>
        </section>

        <section ref={ref} className={`py-16 bg-background transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="max-w-xl mx-auto px-4">
            {/* Progress */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-body ${step >= s ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                    {s}
                  </div>
                  {s < 4 && <div className={`hidden sm:block w-12 h-0.5 ${step > s ? "bg-secondary" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-card border border-border">
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">Select Service</h2>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Choose a printing service</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>{s.emoji} {s.name}{s.startingPrice ? ` — from ${s.startingPrice}` : ""}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => service && setStep(2)}
                    disabled={!service}
                    className="gold-button w-full py-3 rounded-lg text-sm font-bold mt-4 disabled:opacity-50"
                  >
                    Next →
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">Enter Quantity</h2>
                  {selectedService?.startingPrice && (
                    <p className="text-muted-foreground text-sm font-body mb-4">Starting from {selectedService.startingPrice}</p>
                  )}
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 500"
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors">← Back</button>
                    <button onClick={() => quantity && setStep(3)} disabled={!quantity} className="flex-1 gold-button py-3 rounded-lg text-sm font-bold disabled:opacity-50">Next →</button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">Select Paper / Finish</h2>
                  <div className="space-y-2">
                    {["Standard", "Premium", "Luxury"].map((opt) => (
                      <label key={opt} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${paper === opt ? "border-secondary bg-secondary/5" : "border-border hover:bg-muted/50"}`}>
                        <input type="radio" name="paper" value={opt} checked={paper === opt} onChange={() => setPaper(opt)} className="accent-secondary" />
                        <div>
                          <div className="font-body font-semibold text-sm text-card-foreground">{opt}</div>
                          <div className="text-muted-foreground text-xs font-body">
                            {opt === "Standard" && "Basic paper and finish — most affordable"}
                            {opt === "Premium" && "Better paper stock with lamination options"}
                            {opt === "Luxury" && "Premium card stock, foil, or specialty finish"}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors">← Back</button>
                    <button onClick={() => setStep(4)} className="flex-1 gold-button py-3 rounded-lg text-sm font-bold">Next →</button>
                  </div>
                </div>
              )}

              {/* Step 4 */}
              {step === 4 && (
                <div>
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">Your WhatsApp Number</h2>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9840199878"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />

                  {/* File upload (optional) */}
                  <div className="mt-4">
                    <label className="block font-body text-sm font-medium text-foreground mb-1">Upload Your Design File (Optional)</label>
                    <input
                      type="file"
                      accept={ACCEPT_FILES}
                      onChange={handleFileChange}
                      className="w-full text-sm text-muted-foreground file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-semibold file:bg-secondary file:text-secondary-foreground"
                    />
                    <p className="text-xs text-muted-foreground mt-1">Supported: PDF, AI, PSD, JPG, PNG, CDR. Max {MAX_FILE_MB}MB.</p>
                    {designFile && <p className="text-xs text-green-600 mt-1">✓ {designFile.name} ({(designFile.size / 1024).toFixed(1)} KB)</p>}
                    {fileError && <p className="text-xs text-destructive mt-1">{fileError}</p>}
                    <p className="text-xs mt-1">
                      Don't have a design?{" "}
                      <a href={BUSINESS.whatsappWedding} target="_blank" rel="noopener noreferrer" className="underline text-secondary-foreground">We'll design it for free for wedding cards.</a>
                    </p>
                  </div>

                  {/* Summary */}
                  <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border text-sm font-body space-y-1">
                    <div className="text-muted-foreground">Service: <span className="text-foreground font-semibold">{service}</span></div>
                    <div className="text-muted-foreground">Quantity: <span className="text-foreground font-semibold">{quantity} pcs</span></div>
                    <div className="text-muted-foreground">Finish: <span className="text-foreground font-semibold">{paper}</span></div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <button onClick={() => setStep(3)} className="flex-1 py-3 rounded-lg text-sm font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors">← Back</button>
                    <button onClick={handleGetQuote} disabled={!phone} className="flex-1 wa-button py-3 rounded-lg text-sm font-bold disabled:opacity-50 flex items-center justify-center gap-2">
                      💬 Get Quote on WhatsApp
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GetQuote;
