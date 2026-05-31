import { MARQUEE_ITEMS } from "@/data/v2";
import { useLang } from "@/contexts/LangContext";

const SEP = " · ✦ · ";

const TopInfoBar = () => {
  const { lang, setLang } = useLang();
  const marqueeRow = (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="inline-block px-4">
          {item}
          {i < MARQUEE_ITEMS.length - 1 ? SEP : ""}
        </span>
      ))}
    </>
  );

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[102] h-11 flex items-center overflow-hidden marquee-pause"
      style={{ backgroundColor: "var(--gold)", color: "var(--color-primary)" }}
    >
      <div className="flex-1 min-w-0 overflow-hidden">
        <div
          className="flex shrink-0 animate-marquee-left whitespace-nowrap text-[14px] font-bold"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {marqueeRow}
          <span className="inline-block" aria-hidden="true">{marqueeRow}</span>
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 pr-3" role="group" aria-label="Language">
        {/* Language pills. WCAG 2.5.3 (Label in Name) requires the
            accessible name to contain the visible label text — so we let
            the button text itself ("EN" / "தமிழ்") be the accessible
            name and use the parent group's aria-label="Language" for
            context. aria-pressed conveys the selected state. No more
            `opacity-70` on the unselected state: that dropped contrast
            below 4.5:1 against the gold background. Instead the
            unselected state uses the full primary navy at 100% opacity. */}
        <button
          type="button"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          className="px-2.5 py-1.5 rounded-full text-xs font-bold transition-all"
          style={lang === "en"
            ? { backgroundColor: "var(--color-primary)", color: "#fff" }
            : { color: "var(--color-primary)" }}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLang("ta")}
          aria-pressed={lang === "ta"}
          className="px-2.5 py-1.5 rounded-full text-xs font-bold transition-all"
          style={lang === "ta"
            ? { backgroundColor: "var(--color-primary)", color: "#fff" }
            : { color: "var(--color-primary)" }}
        >
          தமிழ்
        </button>
      </div>
    </div>
  );
};

export default TopInfoBar;
