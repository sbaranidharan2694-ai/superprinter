import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";

/**
 * Single canonical product / service card. Used in ProductsSection grids and
 * anywhere else we need to show a product tile. Replaces hand-rolled inline
 * cards that drifted in spacing, copy and CTAs across the codebase.
 *
 * Two actions per card:
 *  - Primary: navigate to the dedicated landing page for that service
 *  - Secondary: WhatsApp pre-fill for that specific product
 *
 * Visual stance: editorial print-shop. Restrained gold accent on price, no
 * gradient overlays, no aggressive hover transforms, no SaaS shadows.
 */
type ServiceCardProps = {
  name: string;
  price: string;
  delivery?: string;
  img: string;
  /** Optional explicit href override (defaults to the route inferred from name). */
  href?: string;
};

const NAME_TO_HREF: Record<string, string> = {
  "Wedding Cards":  "/wedding-cards",
  "Visiting Cards": "/visiting-cards",
  "Brochures":      "/brochures",
  "Bill Books":     "/bill-books",
  "Letterheads":    "/letterheads",
  "Banners":        "/banners",
  "Stickers":       "/stickers",
  "Catalogues":     "/catalogues",
  "Rubber Stamps":  "/rubber-stamps",
  "PVC ID Cards":   "/pvc-id-cards",
  "Pamphlets":      "/services/pamphlet-printing",
  "T-Shirts":       "/services/t-shirt-printing",
};

const ServiceCard = ({ name, price, delivery, img, href }: ServiceCardProps) => {
  const target = href ?? NAME_TO_HREF[name] ?? "/services";
  const waMsg = `Hi! I'd like a quote for ${name} from Super Printers.`;

  return (
    <article className="group flex flex-col h-full bg-white border border-border-light rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-card">
      <Link to={target} className="block aspect-[4/3] overflow-hidden bg-gray-50" aria-label={`View ${name}`}>
        <img
          src={img}
          alt={`${name} printed by Super Printers, Pallavaram Chennai`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-display font-semibold text-base leading-snug" style={{ color: "var(--ink-black)" }}>
            <Link to={target} className="hover:text-gold transition-colors">{name}</Link>
          </h3>
          {delivery && (
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full font-ui" style={{ backgroundColor: "var(--gold-bg)", color: "var(--gold-dark)" }}>
              {delivery}
            </span>
          )}
        </div>
        <p className="text-sm font-medium font-ui mb-4" style={{ color: "var(--gold-dark)" }}>{price}</p>

        <div className="mt-auto flex items-center gap-2">
          <Link
            to={target}
            className="flex-1 text-center px-3 py-2 rounded-full text-xs font-semibold font-ui transition-colors hover:bg-ink-black/90"
            style={{ backgroundColor: "var(--ink-black)", color: "white" }}
          >
            View details
          </Link>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors"
            style={{ backgroundColor: "#25D366" }}
            aria-label={`WhatsApp for ${name} quote`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
