import { BUSINESS } from "@/data/business";

const TopInfoBar = () => (
  <div className="bg-accent text-muted-foreground text-[11px] font-medium flex items-center justify-between px-6 py-2 border-b border-border">
    <span className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      Chennai, Tamil Nadu — Since 1990
    </span>
    <div className="hidden sm:flex items-center gap-4">
      <a href={BUSINESS.phoneTel} className="hover:text-foreground transition-colors">{BUSINESS.phone}</a>
      <span className="text-border">|</span>
      <a href={`mailto:${BUSINESS.email}`} className="hover:text-foreground transition-colors">{BUSINESS.email}</a>
    </div>
  </div>
);

export default TopInfoBar;
