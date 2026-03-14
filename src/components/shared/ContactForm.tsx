import { useState } from "react";
import { BUSINESS } from "@/data/business";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    const text = `Hi Super Printers! I'd like a quote.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nDetails: ${msg}`;
    window.open(`https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-primary text-2xl font-bold">✓</span>
        </div>
        <h3 className="font-display font-bold text-xl text-foreground mb-2">Enquiry Sent!</h3>
        <p className="text-muted-foreground text-sm mb-4">We'll respond within 2 hours during business hours.</p>
        <button onClick={() => setSent(false)} className="text-primary text-sm font-semibold hover:underline">Send Another Enquiry</button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-display font-bold text-xl text-foreground mb-2">Get a Free Quote</h3>
      <p className="text-muted-foreground text-sm mb-6">We respond within 2 hours during business hours</p>
      <div className="space-y-3">
        <input type="text" placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        <input type="tel" placeholder="Phone (+91)" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
        <select value={service} onChange={e => setService(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
          <option value="">Select Service</option>
          {["Visiting Cards", "Wedding Invitations", "Letterheads", "Envelopes", "Stickers", "Brochures", "Bill Books", "Banners", "T-Shirts", "Rubber Stamps", "Other"].map(s => <option key={s}>{s}</option>)}
        </select>
        <textarea rows={3} placeholder="Describe your requirements" value={msg} onChange={e => setMsg(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-vertical" />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-5 w-full bg-[#25D366] text-white font-bold text-sm py-3.5 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20"
      >
        Send Enquiry via WhatsApp
      </button>
    </div>
  );
};

export default ContactForm;
