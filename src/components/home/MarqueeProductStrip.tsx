import { MARQUEE_ROW1, MARQUEE_ROW2 } from "@/data/v2";

const SEP = " · ";
const DIAMOND = " ◆ ";

const row1Content = MARQUEE_ROW1.join(SEP + DIAMOND + SEP);
const row2Content = MARQUEE_ROW2.join(SEP + DIAMOND + SEP);

const MarqueeProductStrip = () => (
  <div
    className="w-full overflow-hidden py-3.5 marquee-pause"
    style={{ backgroundColor: "var(--gold)" }}
  >
    <div className="overflow-hidden mb-1">
      <div className="flex shrink-0 animate-marquee-left whitespace-nowrap text-[15px] font-body font-semibold" style={{ color: "var(--ink-black)", width: "max-content" }}>
        <span className="inline-block px-4">{row1Content}</span>
        <span className="inline-block px-4" aria-hidden="true">{row1Content}</span>
      </div>
    </div>
    <div className="overflow-hidden">
      <div className="flex shrink-0 animate-marquee-right whitespace-nowrap text-[15px] font-body font-semibold" style={{ color: "var(--ink-black)", width: "max-content" }}>
        <span className="inline-block px-4">{row2Content}</span>
        <span className="inline-block px-4" aria-hidden="true">{row2Content}</span>
      </div>
    </div>
  </div>
);

export default MarqueeProductStrip;
