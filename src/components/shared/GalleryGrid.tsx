import { useState } from "react";
import { IMG } from "@/data/images";

type GalCat = "All" | "Wedding Cards" | "Visiting Cards" | "Brochures" | "Banners" | "Stickers" | "Bill Books" | "Corporate";

const GALLERY_ITEMS: { img: string; label: string; cat: GalCat }[] = [
  { img: IMG.glossCard, label: "Gloss Visiting Card", cat: "Visiting Cards" },
  { img: IMG.mattCard, label: "Matt Visiting Card", cat: "Visiting Cards" },
  { img: IMG.spotUvCard, label: "Spot UV Card", cat: "Visiting Cards" },
  { img: IMG.velvetCard, label: "Velvet Lamination Card", cat: "Visiting Cards" },
  { img: IMG.premiumCards, label: "Premium Card Collection", cat: "Visiting Cards" },
  { img: IMG.stackedCards, label: "Stacked Business Cards", cat: "Visiting Cards" },
  { img: IMG.weddingInvite1, label: "Traditional Wedding Card", cat: "Wedding Cards" },
  { img: IMG.weddingInvite2, label: "Modern Wedding Invitation", cat: "Wedding Cards" },
  { img: IMG.weddingInvite3, label: "Premium Wedding Card", cat: "Wedding Cards" },
  { img: IMG.weddingCeremony, label: "Wedding Ceremony Suite", cat: "Wedding Cards" },
  { img: IMG.brochures, label: "Corporate Brochure", cat: "Brochures" },
  { img: IMG.P17, label: "Tri-fold Brochure", cat: "Brochures" },
  { img: IMG.P05, label: "Event Banner", cat: "Banners" },
  { img: IMG.P07, label: "Roll-Up Standee", cat: "Banners" },
  { img: IMG.stickerSheets, label: "Product Stickers", cat: "Stickers" },
  { img: IMG.P11, label: "GST Bill Book", cat: "Bill Books" },
  { img: IMG.offsetPress, label: "Offset Press Output", cat: "Corporate" },
  { img: IMG.letterhead, label: "Corporate Letterhead", cat: "Corporate" },
  { img: IMG.envelopes, label: "Branded Envelopes", cat: "Corporate" },
  { img: IMG.digitalPrint, label: "Digital Print Run", cat: "Corporate" },
];

const FILTERS: GalCat[] = ["All", "Wedding Cards", "Visiting Cards", "Brochures", "Banners", "Stickers", "Bill Books", "Corporate"];

interface GalleryGridProps {
  limit?: number;
}

const GalleryGrid = ({ limit }: GalleryGridProps) => {
  const [active, setActive] = useState<GalCat>("All");
  const filtered = active === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === active);
  const items = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-xs font-semibold px-4 py-2 rounded-full transition-all ${
              active === f
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-muted-foreground hover:bg-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="columns-2 lg:columns-3 xl:columns-4 gap-3">
        {items.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="break-inside-avoid mb-3 group rounded-xl overflow-hidden relative cursor-pointer"
          >
            <img src={item.img} alt={item.label} className="w-full block transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-primary-foreground text-sm font-semibold">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
