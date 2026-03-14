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
      { id: "packaging", label: "Packaging Material", slug: "packaging" },
    ],
  },
  {
    id: "wedding-invitation",
    label: "Wedding Invitation",
    slug: "wedding-invitation",
    subcategories: [
      { id: "invitations", label: "Invitations", slug: "invitations" },
      { id: "invitation-covers", label: "Invitation Covers", slug: "invitation-covers" },
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
  { id: "vc-gloss-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Gloss Single Side 1000", specs: "Gloss 1000", price: "₹2,100.00", imageKey: "glossCard", waMessage: "Hi! I need Gloss Single Side 1000 visiting cards." },
  { id: "vc-gloss-fb-500", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Gloss Front & Back 500", specs: "Gloss 500", price: "₹1,500.00", imageKey: "glossCard", waMessage: "Hi! I need Gloss Front & Back 500 visiting cards." },
  { id: "vc-gloss-fb-1000", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Gloss Front & Back 1000", specs: "Gloss 1000", price: "₹2,600.00", imageKey: "glossCard", waMessage: "Hi! I need Gloss Front & Back 1000 visiting cards." },
  { id: "vc-matt-ss-500", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Matt Single Side 500", specs: "Matt 500", price: "₹1,350.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Single Side 500 visiting cards." },
  { id: "vc-matt-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Matt Single Side 1000", specs: "Matt 1000", price: "₹2,400.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Single Side 1000 visiting cards." },
  { id: "vc-matt-fb-500", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Matt Front & Back 500", specs: "Matt 500", price: "₹1,650.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Front & Back 500 visiting cards." },
  { id: "vc-matt-fb-1000", categorySlug: "visiting-cards", subcategorySlug: "standard-cards", name: "Matt Front & Back 1000", specs: "Matt 1000", price: "₹2,900.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Front & Back 1000 visiting cards." },
  // Visiting Cards - Special (Spot UV, Synthetic, etc.)
  { id: "vc-spotuv-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "special-cards", name: "Matt with Spot UV Single Side 1000", specs: "Spot UV 1000", price: "₹4,200.00", imageKey: "spotUvCard", waMessage: "Hi! I need Matt with Spot UV Single Side 1000 visiting cards." },
  { id: "vc-spotuv-fb-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "special-cards", name: "Matt Front & Back with Single Side Spot UV 1000", specs: "Spot UV 1000", price: "₹4,800.00", imageKey: "spotUvCard", waMessage: "Hi! I need Matt Front & Back with Single Side Spot UV 1000." },
  { id: "vc-synthetic-ss-500", categorySlug: "visiting-cards", subcategorySlug: "special-cards", name: "Synthetic Single Side 500", specs: "Synthetic 500", price: "₹2,100.00", imageKey: "syntheticCard", waMessage: "Hi! I need Synthetic Single Side 500 visiting cards." },
  { id: "vc-synthetic-fb-1000", categorySlug: "visiting-cards", subcategorySlug: "special-cards", name: "Synthetic Front & Back 1000", specs: "Synthetic 1000", price: "₹4,500.00", imageKey: "syntheticCard", waMessage: "Hi! I need Synthetic Front & Back 1000 visiting cards." },
  // Visiting Cards - Premium
  { id: "vc-premium-spotuv-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "premium-cards", name: "Premium Spot UV Single Side 1000", specs: "Premium Spot UV 1000", price: "₹5,500.00", imageKey: "premiumCards", waMessage: "Hi! I need Premium Spot UV Single Side 1000 visiting cards." },
  { id: "vc-premium-spotuv-fb-1000", categorySlug: "visiting-cards", subcategorySlug: "premium-cards", name: "Premium Spot UV Front & Back 1000", specs: "Premium Spot UV 1000", price: "₹6,200.00", imageKey: "premiumCards", waMessage: "Hi! I need Premium Spot UV Front & Back 1000 visiting cards." },
  // Visiting Cards - Superior (NEW)
  { id: "vc-superior-uv", categorySlug: "visiting-cards", subcategorySlug: "superior-cards", name: "Superior UV cards", specs: "Superior UV", price: "₹7,500.00", imageKey: "spotUvCard", badge: "NEW", waMessage: "Hi! I need Superior UV visiting cards." },
  { id: "vc-superior-foil", categorySlug: "visiting-cards", subcategorySlug: "superior-cards", name: "Superior Foil cards", specs: "Superior Foil", price: "₹8,200.00", imageKey: "goldFoilCard", badge: "NEW", waMessage: "Hi! I need Superior Foil visiting cards." },
  // Visiting Cards - Matt Knurling
  { id: "vc-matt-knurl-ss-1000", categorySlug: "visiting-cards", subcategorySlug: "matt-knurling", name: "Matt Single Side with Knurling 1000", specs: "Matt Knurling 1000", price: "₹3,800.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Single Side with Knurling 1000 visiting cards." },
  { id: "vc-matt-knurl-fb-1000", categorySlug: "visiting-cards", subcategorySlug: "matt-knurling", name: "Matt Front & Back with Front & Back Knurling 1000", specs: "Matt Knurling 1000", price: "₹4,500.00", imageKey: "mattCard", waMessage: "Hi! I need Matt Front & Back with Knurling 1000 visiting cards." },
  // Letterheads
  { id: "lh-80-pad-a4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "80 GSM Bond A4 - 210 x 280 mm Pad Making 500", specs: "Pad Making 500", price: "₹1,315.00", imageKey: "letterhead", waMessage: "Hi! I need 80 GSM Bond A4 Pad Making 500 letterheads." },
  { id: "lh-80-pad-a4-1000", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "80 GSM Bond A4 - 210 x 280 mm Pad Making 1000", specs: "Pad Making 1000", price: "₹1,800.00", imageKey: "letterhead", waMessage: "Hi! I need 80 GSM Bond A4 Pad Making 1000 letterheads." },
  { id: "lh-80-dnc-a4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "80 GSM Bond A4 - 210 x 280 mm Dont Cut and Dont Finish 500", specs: "Dont Cut and Dont Finish 500", price: "₹1,235.00", imageKey: "letterhead", waMessage: "Hi! I need 80 GSM Bond A4 Dont Cut and Dont Finish 500 letterheads." },
  { id: "lh-80-dnc-a4-1000", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "80 GSM Bond A4 - 210 x 280 mm Dont Cut and Dont Finish 1000", specs: "Dont Cut and Dont Finish 1000", price: "₹1,600.00", imageKey: "letterhead", waMessage: "Hi! I need 80 GSM Bond A4 Dont Cut and Dont Finish 1000 letterheads." },
  { id: "lh-80-finish-a4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "80 GSM Bond A4 - 210 x 280 mm Loose sheet - Finish 500", specs: "Loose sheet Finish 500", price: "₹1,280.00", imageKey: "letterhead", waMessage: "Hi! I need 80 GSM Bond A4 Loose sheet Finish 500 letterheads." },
  { id: "lh-100-pad-a4-1000", categorySlug: "letterheads-envelopes", subcategorySlug: "letterheads", name: "100 GSM Bond A4 - 210 x 280 mm Pad Making 1000", specs: "100 GSM Pad Making 1000", price: "₹2,100.00", imageKey: "letterhead", waMessage: "Hi! I need 100 GSM Bond A4 Pad Making 1000 letterheads." },
  // Envelopes
  { id: "env-bond-6x4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "envelopes", name: "80 GSM Bond 6 x 4 - Office / Money Cover Plain Cover 500", specs: "6 x 4 Plain 500", price: "₹1,235.00", imageKey: "envelopes", waMessage: "Hi! I need 80 GSM Bond 6 x 4 envelopes 500." },
  { id: "env-bond-6x4-1000", categorySlug: "letterheads-envelopes", subcategorySlug: "envelopes", name: "80 GSM Bond 6 x 4 - Office / Money Cover Plain Cover 1000", specs: "6 x 4 Plain 1000", price: "₹1,820.00", imageKey: "envelopes", waMessage: "Hi! I need 80 GSM Bond 6 x 4 envelopes 1000." },
  { id: "env-bond-7x4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "envelopes", name: "80 GSM Bond 7 x 4 - Office / Money Cover Plain Cover 500", specs: "7 x 4 Plain 500", price: "₹1,450.00", imageKey: "envelopes", waMessage: "Hi! I need 80 GSM Bond 7 x 4 envelopes 500." },
  { id: "env-bond-9x4-500", categorySlug: "letterheads-envelopes", subcategorySlug: "envelopes", name: "80 GSM Bond 9 x 4 - Office / Money Cover Plain Cover 500", specs: "9 x 4 Plain 500", price: "₹1,680.00", imageKey: "envelopes", waMessage: "Hi! I need 80 GSM Bond 9 x 4 envelopes 500." },
  // Stickers - Mirror Coated
  { id: "sticker-mirror-8.25x11-gloss", categorySlug: "stickers", subcategorySlug: "mirror-coated", name: "Mirror Coated Sticker 8.25\" x 11\"", specs: "(210 mm x 280 mm) Gloss 1000", price: "₹5,500.00", imageKey: "mirrorSticker", waMessage: "Hi! I need Mirror Coated Sticker 8.25 x 11 Gloss 1000." },
  { id: "sticker-mirror-8.25x11-matt", categorySlug: "stickers", subcategorySlug: "mirror-coated", name: "Mirror Coated Sticker 8.25\" x 11\"", specs: "(210 mm x 280 mm) Matt 1000", price: "₹6,600.00", imageKey: "mirrorSticker", waMessage: "Hi! I need Mirror Coated Sticker 8.25 x 11 Matt 1000." },
  { id: "sticker-mirror-11x17", categorySlug: "stickers", subcategorySlug: "mirror-coated", name: "Mirror Coated Sticker 11\" x 17\"", specs: "(280 mm x 430 mm) Gloss 1000", price: "₹9,000.00", imageKey: "mirrorSticker", waMessage: "Hi! I need Mirror Coated Sticker 11 x 17." },
  // Calendar - Panchangam
  { id: "cal-panch-50", categorySlug: "calendar", subcategorySlug: "panchangam", name: "90 GSM Art-paper 50", specs: "Panchangam 50", price: "₹65.00", imageKey: "panchangam", waMessage: "Hi! I need 90 GSM Art-paper Panchangam 50." },
  { id: "cal-panch-100", categorySlug: "calendar", subcategorySlug: "panchangam", name: "90 GSM Art-paper 100", specs: "Panchangam 100", price: "₹130.00", imageKey: "panchangam", waMessage: "Hi! I need 90 GSM Art-paper Panchangam 100." },
  { id: "cal-panch-150", categorySlug: "calendar", subcategorySlug: "panchangam", name: "90 GSM Art-paper 150", specs: "Panchangam 150", price: "₹195.00", imageKey: "panchangam", waMessage: "Hi! I need 90 GSM Art-paper Panchangam 150." },
  { id: "cal-panch-200", categorySlug: "calendar", subcategorySlug: "panchangam", name: "90 GSM Art-paper 200", specs: "Panchangam 200", price: "₹260.00", imageKey: "panchangam", waMessage: "Hi! I need 90 GSM Art-paper Panchangam 200." },
  { id: "cal-panch-250", categorySlug: "calendar", subcategorySlug: "panchangam", name: "90 GSM Art-paper 250", specs: "Panchangam 250", price: "₹325.00", imageKey: "panchangam", waMessage: "Hi! I need 90 GSM Art-paper Panchangam 250." },
  // Calendar - Calendar Mount
  { id: "cal-mount-10x15-300", categorySlug: "calendar", subcategorySlug: "calendar-mount", name: "100 GSM Art-paper 10 x 15 Gloss 300", specs: "Paper size 11 x 17 inch", price: "₹2,600.00", imageKey: "calendarMount", waMessage: "Hi! I need 100 GSM Art-paper 10 x 15 Calendar Mount 300." },
  { id: "cal-mount-10x15-500", categorySlug: "calendar", subcategorySlug: "calendar-mount", name: "100 GSM Art-paper 10 x 15 Gloss 500", specs: "Paper size 11 x 17 inch", price: "₹3,250.00", imageKey: "calendarMount", waMessage: "Hi! I need 100 GSM Art-paper 10 x 15 Calendar Mount 500." },
  { id: "cal-mount-12x18-1000", categorySlug: "calendar", subcategorySlug: "calendar-mount", name: "100 GSM Art-paper 12 x 18 Gloss 1000", specs: "Paper size 14 x 19.25 inch", price: "₹4,800.00", imageKey: "calendarMount", waMessage: "Hi! I need 100 GSM Art-paper 12 x 18 Calendar Mount 1000." },
  // Hospital Files - Plastic
  { id: "hf-plastic-500", categorySlug: "hospital-files", subcategorySlug: "plastic-files", name: "Plastic Sheet 19.25 x 12.20 inch - File upload size 490 x 310 mm", specs: "Left Side 500", price: "₹17,500.00", imageKey: "hospitalPlastic", waMessage: "Hi! I need Plastic File Left Side 500." },
  { id: "hf-plastic-1000", categorySlug: "hospital-files", subcategorySlug: "plastic-files", name: "Plastic Sheet 19.25 x 12.20 inch - File upload size 490 x 310 mm", specs: "Left Side 1000", price: "₹28,500.00", imageKey: "hospitalPlastic", waMessage: "Hi! I need Plastic File Left Side 1000." },
  { id: "hf-plastic-2000", categorySlug: "hospital-files", subcategorySlug: "plastic-files", name: "Plastic Sheet 19.25 x 12.20 inch - File upload size 490 x 310 mm", specs: "Left Side 2000", price: "₹56,500.00", imageKey: "hospitalPlastic", waMessage: "Hi! I need Plastic File Left Side 2000." },
  { id: "hf-plastic-3000", categorySlug: "hospital-files", subcategorySlug: "plastic-files", name: "Plastic Sheet 19.25 x 12.20 inch - File upload size 490 x 310 mm", specs: "Left Side 3000", price: "₹84,000.00", imageKey: "hospitalPlastic", waMessage: "Hi! I need Plastic File Left Side 3000." },
  { id: "hf-plastic-4000", categorySlug: "hospital-files", subcategorySlug: "plastic-files", name: "Plastic Sheet 19.25 x 12.20 inch - File upload size 490 x 310 mm", specs: "Left Side 4000", price: "₹111,000.00", imageKey: "hospitalPlastic", waMessage: "Hi! I need Plastic File Left Side 4000." },
  // Hospital Files - General
  { id: "hf-general-art", categorySlug: "hospital-files", subcategorySlug: "general-files", name: "Art Board Hospital File", specs: "General file", price: "Quote", imageKey: "hospitalGeneral", waMessage: "Hi! I need Art Board Hospital File." },
  { id: "hf-general-grey", categorySlug: "hospital-files", subcategorySlug: "general-files", name: "Grey / White Back Hospital File", specs: "General file", price: "Quote", imageKey: "hospitalGeneral", waMessage: "Hi! I need Grey / White Back Hospital File." },
  // Wedding Invitations
  { id: "wed-art-8.25x5.5-500", categorySlug: "wedding-invitation", subcategorySlug: "invitations", name: "Art Board - 300 GSM Double Side Gloss 8.25\" x 5.5\" (210 mm x 140 mm) 500", specs: "500", price: "₹2,600.00", imageKey: "weddingInvite1", waMessage: "Hi! I need Art Board 300 GSM 8.25 x 5.5 wedding invitations 500." },
  { id: "wed-art-8.25x22.5-gloss-500", categorySlug: "wedding-invitation", subcategorySlug: "invitations", name: "Art Board - 300 GSM Double Side Gloss 8.25\" x 22.5\" (210 mm x 572 mm) 500", specs: "500", price: "₹6,630.00", imageKey: "weddingInvite1", waMessage: "Hi! I need Art Board 300 GSM 8.25 x 22.5 Gloss wedding invitations 500." },
  { id: "wed-art-8.25x22.5-matt-500", categorySlug: "wedding-invitation", subcategorySlug: "invitations", name: "Art Board - 300 GSM Double Side Matt 8.25\" x 22.5\" (210 mm x 572 mm) 500", specs: "500", price: "₹7,150.00", imageKey: "weddingInvite2", waMessage: "Hi! I need Art Board 300 GSM 8.25 x 22.5 Matt wedding invitations 500." },
  { id: "wed-art-11x8.25-500", categorySlug: "wedding-invitation", subcategorySlug: "invitations", name: "Art Board - 300 GSM Double Side Gloss 11\" x 8.25\" 500", specs: "500", price: "₹3,120.00", imageKey: "weddingInvite1", waMessage: "Hi! I need Art Board 300 GSM 11 x 8.25 wedding invitations 500." },
  // Marketing - Flyers / Poster / Brochure (sample)
  { id: "mkt-flyer-80", categorySlug: "marketing-material", subcategorySlug: "flyers", name: "Flyers 80 Maplitho", specs: "80 Maplitho", price: "Quote", imageKey: "brochures", waMessage: "Hi! I need Flyers 80 Maplitho." },
  { id: "mkt-flyer-100", categorySlug: "marketing-material", subcategorySlug: "flyers", name: "Flyers 100 Art-paper", specs: "100 Art-paper", price: "Quote", imageKey: "brochures", waMessage: "Hi! I need Flyers 100 Art-paper." },
  { id: "mkt-poster-80", categorySlug: "marketing-material", subcategorySlug: "poster", name: "Poster 80 Maplitho / 100 Art-paper", specs: "80 Maplitho / 100 Art-paper", price: "Quote", imageKey: "brochures", waMessage: "Hi! I need Poster 80 Maplitho / 100 Art-paper." },
  { id: "mkt-brochure-220", categorySlug: "marketing-material", subcategorySlug: "brochure", name: "Brochure 220 Art-board", specs: "220 Art-board", price: "Quote", imageKey: "brochures", waMessage: "Hi! I need Brochure 220 Art-board." },
  { id: "mkt-brochure-300-ds", categorySlug: "marketing-material", subcategorySlug: "brochure", name: "Brochure 300 Art-board-DS", specs: "300 Art-board-DS", price: "Quote", imageKey: "brochures", waMessage: "Hi! I need Brochure 300 Art-board-DS." },
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
