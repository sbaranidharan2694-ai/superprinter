import { useState } from "react";
import { services } from "@/data/services";
import { useInView } from "@/hooks/useInView";
import { BUSINESS } from "@/data/business";

const steps = [
  { icon: "☁️", title: "Upload Your File", desc: "WhatsApp your print-ready file or upload it below" },
  { icon: "💬", title: "Get Instant Quote", desc: "We confirm quantity, paper & price within 30 minutes" },
  { icon: "🚚", title: "Receive Your Prints", desc: "Pick up in store or get delivery across Chennai" },
];

const OrderFlow = () => {
  const { ref, isVisible } = useInView();
  const [service, setService] = useState("");
  const [phone, setPhone] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const handleSendWA = () => {
    const msg = `Hi, I've uploaded my file and need a print quote for ${service || "printing"}. My number is ${phone}`;
    window.open(`https://wa.me/919840199878?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section ref={ref} className={`py-16 md:py-20 bg-muted/50 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Order Online in 3 Steps
          </h2>
          <p className="text-muted-foreground font-body">Getting your prints has never been easier.</p>
        </div>

        {/* 3-step flow */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-14 h-14 rounded-full navy-gradient flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">{s.icon}</span>
              </div>
              <div className="text-secondary font-bold text-sm font-body mb-1">Step {i + 1}</div>
              <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm font-body">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* File upload card */}
        <div className="max-w-xl mx-auto p-6 md:p-8 rounded-2xl navy-gradient border border-primary-foreground/20">
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">Upload Your Design File</h3>
          <p className="text-primary-foreground/60 text-sm font-body mb-6">Accepted formats: PDF, JPG, PNG, AI, CDR (Max 25MB)</p>

          {/* Drop zone */}
          <div
            onClick={() => setUploaded(true)}
            className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors mb-4 ${uploaded ? "border-whatsapp bg-whatsapp/10" : "border-primary-foreground/30 hover:border-gold/50"}`}
          >
            {uploaded ? (
              <div>
                <span className="text-3xl block mb-2" aria-hidden="true">✅</span>
                <p className="text-primary-foreground font-semibold font-body text-sm">File ready! Fill details below and send via WhatsApp.</p>
              </div>
            ) : (
              <div>
                <span className="text-3xl block mb-2" aria-hidden="true">📁</span>
                <p className="text-primary-foreground/70 font-body text-sm">Click to select file or drag & drop here</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="" className="text-foreground">Select Service</option>
              {services.map((s) => (
                <option key={s.id} value={s.name} className="text-foreground">{s.name}</option>
              ))}
            </select>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your WhatsApp Number"
              className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button onClick={handleSendWA} className="wa-button w-full py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
              💬 Send via WhatsApp →
            </button>
          </div>
          <p className="text-primary-foreground/40 text-xs font-body mt-3 text-center">
            Or simply WhatsApp your file directly to {BUSINESS.phone}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderFlow;
