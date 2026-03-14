import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/shared/PageHero";
import { BUSINESS } from "@/data/business";

const STATUSES = [
  { key: "processing", label: "Processing", desc: "Your order is being prepared" },
  { key: "printing", label: "Printing", desc: "Your order is on the press" },
  { key: "ready", label: "Ready for Pickup", desc: "Your order is ready" },
  { key: "completed", label: "Completed", desc: "Order delivered/picked up" },
];

const Orders = () => {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    setSearched(true);
  };

  return (
    <>
      <SEOHead
        title="Track Your Order | Super Printers Chennai"
        description="Track your printing order status at Super Printers Chennai. Enter your order ID and phone number to check progress."
        canonical="/orders"
      />
      <PageHero title="Order Tracking" subtitle="Enter your order details to check the status of your printing order." breadcrumbs={[{ label: "Home", to: "/" }, { label: "Orders", to: "/orders" }]} />

      <section className="py-16 lg:py-24 px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="font-display font-bold text-xl text-foreground mb-6">Look Up Your Order</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Order ID</label>
                <input type="text" placeholder="e.g. SP-2024-001" value={orderId} onChange={e => setOrderId(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <input type="tel" placeholder="+91 9840199878" value={phone} onChange={e => setPhone(e.target.value)} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <button onClick={handleSearch} className="w-full bg-primary text-primary-foreground font-bold text-sm py-3.5 rounded-full hover:opacity-90 transition-opacity">
                Track Order
              </button>
            </div>

            {searched && (
              <div className="mt-8 pt-6 border-t border-border">
                <div className="bg-accent rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-secondary text-xl font-bold">!</span>
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">Order Not Found</h3>
                  <p className="text-muted-foreground text-sm mb-4">We couldn't find an order with those details. For real-time tracking, please contact us via WhatsApp.</p>
                  <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi Super Printers, I want to track my order. Order ID: ${orderId}, Phone: ${phone}`)}`} className="inline-flex bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                    Track via WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Status Guide */}
          <div className="mt-10">
            <h3 className="font-display font-bold text-lg text-foreground mb-4">Order Status Guide</h3>
            <div className="space-y-3">
              {STATUSES.map((s, i) => (
                <div key={s.key} className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xs">{i + 1}</span>
                  </div>
                  <div>
                    <div className="text-foreground font-semibold text-sm">{s.label}</div>
                    <div className="text-muted-foreground text-xs">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-4">Need help? Contact us directly.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href={BUSINESS.phoneTel} className="text-primary text-sm font-semibold hover:underline">{BUSINESS.phone}</a>
              <span className="text-border">|</span>
              <a href={BUSINESS.whatsapp} className="text-[#25D366] text-sm font-semibold hover:underline">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Orders;
