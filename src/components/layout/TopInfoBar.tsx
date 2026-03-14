import { MARQUEE_ITEMS } from "@/data/v2";
import { useLang } from "@/contexts/LangContext";

const SEP = " · ✦ · ";
const isPhone = (s: string) => s.includes("+91") || (s.startsWith("📞") && s.includes("99878"));

const TopInfoBar = () => {
  const { lang, setLang } = useLang();
  const marqueeRow = (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="inline-block px-4">
          {isPhone(item) ? <strong className="font-bold">{item}</strong> : item}
          {i < MARQUEE_ITEMS.length - 1 ? SEP : ""}
        </span>
      ))}
    </>
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[102] h-11 flex items-center overflow-hidden marquee-pause rounded-b-2xl border-b border-border-light bg-white shadow-sm"
      style={{ color: "var(--navy)", backgroundColor: "#FFFFFF" }}
    >
      <div className="flex-1 min-w-0 overflow-hidden">
        <div className="flex shrink-0 animate-marquee-left whitespace-nowrap text-[14px] font-ui font-medium">
          {marqueeRow}
          <span className="inline-block" aria-hidden="true">{marqueeRow}</span>
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 pr-3" role="group" aria-label="Language">
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`px-2.5 py-1 rounded-full text-xs font-ui font-medium transition-all ${lang === "en" ? "bg-gold text-ink-black" : "text-navy hover:text-gold"}`}
          style={lang === "en" ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : undefined}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang("ta")}
          className={`px-2.5 py-1 rounded-full text-xs font-ui font-medium transition-all ${lang === "ta" ? "bg-gold text-ink-black" : "text-navy hover:text-gold"}`}
          style={lang === "ta" ? { backgroundColor: "var(--gold)", color: "var(--ink-black)" } : undefined}
        >
          தமிழ்
        </button>
      </div>
    </div>
  );
};

export default TopInfoBar;
