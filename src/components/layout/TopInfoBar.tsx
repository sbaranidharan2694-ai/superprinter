import { MARQUEE_ITEMS } from "@/data/v2";

const SEP = " · ✦ · ";
const marqueeContent = MARQUEE_ITEMS.join(SEP);

const TopInfoBar = () => (
  <div
    className="fixed top-0 left-0 right-0 z-[102] h-11 flex items-center overflow-hidden marquee-pause"
    style={{ backgroundColor: "var(--gold)", color: "var(--ink-black)" }}
  >
    <div className="flex shrink-0 animate-marquee-left whitespace-nowrap text-[13px] font-body font-medium">
      <span className="inline-block px-4">{marqueeContent}</span>
      <span className="inline-block px-4" aria-hidden="true">{marqueeContent}</span>
    </div>
  </div>
);

export default TopInfoBar;
