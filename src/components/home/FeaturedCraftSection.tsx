import { ContainerScroll } from "@/components/ui/ContainerScroll";
import { IMAGE_PATHS } from "@/data/imagePaths";

/**
 * "Featured craftsmanship" — scroll-driven reveal of a real Super Printers
 * wedding card. Reuses the AVIF/WebP hero image already optimised in
 * public/images/hero/. No new copy is introduced; the title text mirrors the
 * existing hero caption tab ("Featured work — Tamil wedding card · foil +
 * laser-cut") so this section reinforces, rather than competes with, the
 * existing content.
 */
const FeaturedCraftSection = () => (
  <section
    aria-label="Featured wedding card from Super Printers"
    className="bg-background"
  >
    <ContainerScroll
      titleComponent={
        <div className="px-4 md:px-0">
          <p
            className="text-[11px] font-bold tracking-[0.22em] uppercase mb-2"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
          >
            Featured work
          </p>
          <h2
            className="font-display font-bold text-3xl md:text-5xl"
            style={{ color: "var(--color-primary)" }}
          >
            Tamil wedding card &mdash; foil + laser-cut
          </h2>
        </div>
      }
    >
      <picture>
        <source srcSet="/images/hero/wedding.avif" type="image/avif" />
        <source srcSet="/images/hero/wedding.webp" type="image/webp" />
        <img
          src={IMAGE_PATHS.hero.wedding}
          alt="Tamil wedding card with gold foil and laser-cut detail, printed by Super Printers Pallavaram"
          width={1400}
          height={900}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </picture>
    </ContainerScroll>
  </section>
);

export default FeaturedCraftSection;
