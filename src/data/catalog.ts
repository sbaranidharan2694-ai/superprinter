/**
 * Catalog categories, subcategories, and products for the /products page.
 * Used with IMG from @/data/images for dynamic image resolution (imageKey).
 */

export interface CatalogCategory {
  id: string;
  label: string;
  slug: string;
  subcategories: { id: string; label: string; slug: string; badge?: "NEW" }[];
}

export interface CatalogProduct {
  id: string;
  categorySlug: string;
  subcategorySlug: string;
  name: string;
  specs: string;
  price: string;
  /** Direct image URL; takes precedence over imageKey */
  image?: string;
  /** Key into IMG from @/data/images for dynamic image */
  imageKey?: string;
  badge?: "NEW";
  waMessage: string;
}

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    id: "visiting-cards",
    label: "Visiting Cards",
    slug: "visiting-cards",
    subcategories: [
      { id: "standard", label: "Standard Cards", slug: "standard-cards" },
      { id: "special", label: "Special Cards", slug: "special-cards" },
      { id: "premium", label: "Premium Cards", slug: "premium-cards" },
      { id: "superior", label: "Superior Cards", slug: "superior-cards", badge: "NEW" },
      { id: "matt-knurling", label: "Matt Knurling Card", slug: "matt-knurling" },
    ],
  },
  {
    id: "letterheads-envelopes",
    label: "Letterheads and Envelopes",
    slug: "letterheads-envelopes",
    subcategories: [
      { id: "letterheads", label: "Letterheads", slug: "letterheads" },
      { id: "envelopes", label: "Envelopes", slug: "envelopes" },
    ],
  },
  {
    id: "marketing-material",
    label: "Marketing Material",
    slug: "marketing-material",
    subcategories: [
      { id: "flyers", label: "Flyers", slug: "flyers" },
      { id: "poster", label: "Poster", slug: "poster" },
      { id: "brochure", label: "Brochure", slug: "brochure" },
    ],
  },
  {
    id: "wedding-invitation",
    label: "Wedding Invitation",
    slug: "wedding-invitation",
    subcategories: [
      { id: "invitations", label: "Invitations", slug: "invitations" },
    ],
  },
  {
    id: "stickers",
    label: "Stickers",
    slug: "stickers",
    subcategories: [
      { id: "mirror-coated", label: "Mirror Coated Sticker", slug: "mirror-coated" },
    ],
  },
  {
    id: "calendar",
    label: "Calendar",
    slug: "calendar",
    subcategories: [
      { id: "calendar-mount", label: "Calendar Mount", slug: "calendar-mount" },
      { id: "panchangam", label: "Panchangam", slug: "panchangam" },
    ],
  },
  {
    id: "hospital-files",
    label: "Hospital Files",
    slug: "hospital-files",
    subcategories: [
      { id: "general-files", label: "General files", slug: "general-files" },
      { id: "plastic-files", label: "Plastic files", slug: "plastic-files" },
    ],
  },
  {
    id: "ready-made",
    label: "Ready made",
    slug: "ready-made",
    subcategories: [],
  },
];

/** All catalog products. Filter by categorySlug and/or subcategorySlug in the UI. */
export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // Visiting Cards - Standard (Gloss / Matt)
  { id: "vc-gloss-ss-500", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Gloss Single Side 500", specs: "Gloss 500", price: "₹1,200.00", imageKey: "glossCard", waMessage: "Hi! I need Gloss Single Side 500 visiting cards." },
  { id: "vc-matt-ss-500", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Matt Single Side 500", specs: "Matt 500", price: "₹1,350.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Single Side 500 visiting cards." },
  // Visiting Cards - Special (Spot UV, Synthetic, etc.)
  { id: "vc-spotuv-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "special-cards", name: "Matt with Spot UV Single Side 1000", specs: "Spot UV 1000", price: "₹4,200.00", imageKey: "spotUvCard", waMessage: "Hi! I need Matt with Spot UV Single Side 1000 visiting cards." },
  { id: "vc-synthetic-ss-500", categorySlug: "visiting-cards", subcategorySlug: "special-cards", name: "Synthetic Single Side 500", specs: "Synthetic 500", price: "₹2,100.00", imageKey: "syntheticCard", waMessage: "Hi! I need Synthetic Single Side 500 visiting cards." },
  // Visiting Cards - Premium
  { id: "vc-premium-spotuv-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "premium-cards", name: "Premium Spot UV Single Side 1000", specs: "Premium Spot UV 1000", price: "₹5,500.00", imageKey: "premiumCards", waMessage: "Hi! I need Premium Spot UV Single Side 1000 visiting cards." },
  // Visiting Cards - Superior (NEW)
  { id: "vc-superior-foil", categorySlug: "visiting-cards", subcategorySlug: "superior-cards", name: "Superior Foil cards", specs: "Superior Foil", price: "₹8,200.00", imageKey: "goldFoilCard", badge: "NEW", waMessage: "Hi! I need Superior Foil visiting cards." },
  // Visiting Cards - Matt Knurling
  // Letterheads
  { id: "lh-80-pad-a4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "80 GSM Bond A4 - 210 x 280 mm Pad Making 500", specs: "Pad Making 500", price: "₹1,315.00", imageKey: "letterhead", waMessage: "Hi! I need 80 GSM Bond A4 Pad Making 500 letterheads." },
  // Envelopes
  { id: "env-bond-6x4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "envelopes", name: "80 GSM Bond 6 x 4 - Office / Money Cover Plain Cover 500", specs: "6 x 4 Plain 500", price: "₹1,235.00", imageKey: "envelopes", waMessage: "Hi! I need 80 GSM Bond 6 x 4 envelopes 500." },
  // Stickers - Mirror Coated
  { id: "sticker-mirror-8.25x11-gloss", categorySlug: "stickers", subcategorySlug: "mirror-coated", name: "Mirror Coated Sticker 8.25\" x 11\"", specs: "(210 mm x 280 mm) Gloss 1000", price: "₹5,500.00", imageKey: "mirrorSticker", waMessage: "Hi! I need Mirror Coated Sticker 8.25 x 11 Gloss 1000." },
  // Calendar - Panchangam
  { id: "cal-panch-50", categorySlug: "calendar", subcategorySlug: "panchangam", name: "90 GSM Art-paper 50", specs: "Panchangam 50", price: "₹65.00", imageKey: "panchangam", waMessage: "Hi! I need 90 GSM Art-paper Panchangam 50." },
  // Calendar - Calendar Mount
  { id: "cal-mount-10x15-300", categorySlug: "calendar", subcategorySlug: "calendar-mount", name: "100 GSM Art-paper 10 x 15 Gloss 300", specs: "Paper size 11 x 17 inch", price: "₹2,600.00", imageKey: "calendarMount", waMessage: "Hi! I need 100 GSM Art-paper 10 x 15 Calendar Mount 300." },
  // Hospital Files - Plastic
  { id: "hf-plastic-500", categorySlug: "hospital-files", subcategorySlug: "plastic-files", name: "Plastic Sheet 19.25 x 12.20 inch - File upload size 490 x 310 mm", specs: "Left Side 500", price: "₹17,500.00", imageKey: "hospitalPlastic", waMessage: "Hi! I need Plastic File Left Side 500." },
  // Hospital Files - General
  { id: "hf-general-art", categorySlug: "hospital-files", subcategorySlug: "general-files", name: "Art Board Hospital File", specs: "General file", price: "Quote", imageKey: "hospitalGeneral", waMessage: "Hi! I need Art Board Hospital File." },
  // Wedding Invitations
  { id: "wed-art-8.25x5.5-500", categorySlug: "wedding-invitation", subcategorySlug: "invitations", name: "Art Board - 300 GSM Double Side Gloss 8.25\" x 5.5\" (210 mm x 140 mm) 500", specs: "500", price: "₹2,600.00", imageKey: "weddingInvite1", waMessage: "Hi! I need Art Board 300 GSM 8.25 x 5.5 wedding invitations 500." },
  { id: "wed-art-8.25x22.5-matt-500", categorySlug: "wedding-invitation", subcategorySlug: "invitations", name: "Art Board - 300 GSM Double Side Matt 8.25\" x 22.5\" (210 mm x 572 mm) 500", specs: "500", price: "₹7,150.00", imageKey: "weddingInvite2", waMessage: "Hi! I need Art Board 300 GSM 8.25 x 22.5 Matt wedding invitations 500." },
  // Marketing - Flyers / Poster / Brochure (sample)
  { id: "mkt-flyer-80", categorySlug: "marketing-material", subcategorySlug: "flyers", name: "Flyers 80 Maplitho", specs: "80 Maplitho", price: "Quote", imageKey: "pamphlet", waMessage: "Hi! I need Flyers 80 Maplitho." },
  { id: "mkt-poster-c4", categorySlug: "marketing-material", subcategorySlug: "poster", name: "Poster Printing", specs: "Custom sizes", price: "Quote", imageKey: "poster", waMessage: "Hi! I need poster printing." },
  { id: "mkt-brochure", categorySlug: "marketing-material", subcategorySlug: "brochure", name: "Brochure Printing", specs: "Tri-fold / Bi-fold", price: "Quote", imageKey: "brochures", waMessage: "Hi! I need brochure printing." },
];

/** Resolve category + subcategory label for display (e.g. section title). */
export function getCatalogSectionTitle(
  categorySlug: string,
  subcategorySlug: string
): string {
  const cat = CATALOG_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat) return "Products";
  const sub = cat.subcategories.find((s) => s.slug === subcategorySlug);
  if (sub) return sub.label;
  return cat.label;
}
