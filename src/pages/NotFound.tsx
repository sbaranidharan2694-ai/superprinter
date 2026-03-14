import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center px-6">
    <div className="text-center max-w-md">
      <div className="w-20 h-20 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "rgba(201,151,58,0.1)" }}>
        <span className="font-display font-bold text-3xl text-gold">SP</span>
      </div>
      <h1 className="font-display font-bold text-5xl text-navy mb-4">404</h1>
      <p className="text-gray-text text-lg mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link to="/" className="bg-gold text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--color-gold)" }}>
          Go Home
        </Link>
        <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
);

export default NotFound;
