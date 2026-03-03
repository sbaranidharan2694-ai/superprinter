import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { IMG } from "@/data/images";

type Category = "All" | "Wedding" | "Cards" | "Digital" | "Stationery" | "Press";

const IMAGES: { src: string; cat: Category; label: string }[] = [
  { src: IMG.P01, cat: "Press", label: "Vintage press workshop" },
  { src: IMG.P02, cat: "Press", label: "Offset press rollers" },
  { src: IMG.P03, cat: "Press", label: "Printing tools flat lay" },
  { src: IMG.P04, cat: "Press", label: "Industrial printing factory" },
  { src: IMG.P05, cat: "Press", label: "Factory worker with machinery" },
  { src: IMG.P06, cat: "Wedding", label: "Wedding invitations with rings" },
  { src: IMG.P07, cat: "Wedding", label: "Wedding invitation flat lay" },
  { src: IMG.P08, cat: "Wedding", label: "Wedding card with bridal shoes" },
  { src: IMG.P09, cat: "Cards", label: "Stacks of visiting cards" },
  { src: IMG.P10, cat: "Cards", label: "Business card mockup" },
  { src: IMG.P11, cat: "Cards", label: "Business cards display" },
  { src: IMG.P12, cat: "Digital", label: "Digital printer machine" },
  { src: IMG.P13, cat: "Stationery", label: "Colorful brochures" },
  { src: IMG.P14, cat: "Stationery", label: "Stationery flat lay" },
  { src: IMG.P15, cat: "Digital", label: "Person using copier" },
  { src: IMG.P16, cat: "Press", label: "Man in print workshop" },
  { src: IMG.P17, cat: "Press", label: "Stack of printed papers" },
  { src: IMG.P18, cat: "Press", label: "Rainbow colored abstract" },
  { src: IMG.P19, cat: "Press", label: "Colorful printing ink" },
  { src: IMG.P20, cat: "Press", label: "Vibrant rainbow art" },
  { src: IMG.P21, cat: "Stationery", label: "Parcel delivery" },
  { src: IMG.P22, cat: "Stationery", label: "Delivery team" },
  { src: IMG.P23, cat: "Press", label: "Vibrant color swirls" },
  { src: IMG.P24, cat: "Stationery", label: "Courier with boxes" },
  { src: IMG.P25, cat: "Press", label: "Screen printing workshop" },
  { src: IMG.P26, cat: "Digital", label: "Graphic design workspace" },
  { src: IMG.P27, cat: "Digital", label: "Creative laptop workspace" },
  { src: IMG.P28, cat: "Press", label: "T-shirt heat press" },
  { src: IMG.P29, cat: "Cards", label: "Business cards with flowers" },
  { src: IMG.P30, cat: "Press", label: "Multicolored painting" },
  { src: IMG.P31, cat: "Stationery", label: "Paper leaflets" },
  { src: IMG.P32, cat: "Press", label: "Color swatches" },
  { src: IMG.P33, cat: "Stationery", label: "Fabric paint swatches" },
  { src: IMG.P34, cat: "Wedding", label: "Indian wedding ceremony" },
];

const FILTERS: { label: string; cat: Category; bg: string }[] = [
  { label: "All", cat: "All", bg: "bg-brand-red" },
  { label: "Wedding", cat: "Wedding", bg: "bg-brand-maroon" },
  { label: "Cards", cat: "Cards", bg: "bg-brand-teal" },
  { label: "Digital", cat: "Digital", bg: "bg-brand-dark" },
  { label: "Stationery", cat: "Stationery", bg: "bg-brand-gold text-brand-dark" },
  { label: "Press", cat: "Press", bg: "bg-brand-orange" },
];

const GallerySection = () => {
  const [active, setActive] = useState<Category>("All");
  const { ref, isVisible } = useInView(0.1);
  const filtered = active === "All" ? IMAGES : IMAGES.filter((img) => img.cat === active);

  return (
    <section ref={ref} className={`bg-white py-16 md:py-24 px-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="text-center mb-8">
        <h2 className="font-display text-4xl md:text-[46px] text-brand-dark font-bold mb-3">Our Work Speaks for Itself</h2>
        <p className="font-body text-lg text-muted-foreground">A glimpse of what comes off our press every day.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f.cat}
            onClick={() => setActive(f.cat)}
            className={`font-body text-sm font-medium px-5 py-2 rounded-full transition-opacity ${
              active === f.cat ? `${f.bg} text-white opacity-100` : `${f.bg} text-white opacity-50 hover:opacity-80`
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="masonry max-w-7xl mx-auto">
        {filtered.map((img, i) => (
          <div key={`${img.src}-${i}`} className="masonry-item relative group overflow-hidden rounded-lg">
            <img src={img.src} alt={img.label} className="w-full block object-cover" loading="lazy" width="400" height="300" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-body text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;