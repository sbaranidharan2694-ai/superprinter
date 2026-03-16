/**
 * Gallery page images — all from local public/images/gallery/ for fast loading.
 * File names: w1.jpg, w2.jpg, ... (see public/images/README.txt).
 */

import { IMAGE_PATHS } from "./imagePaths";

export type GalleryCategory =
  | "All"
  | "Wedding Cards"
  | "Visiting Cards"
  | "Brochures"
  | "Bill Books"
  | "Letterheads"
  | "Catalogues"
  | "Corporate"
  | "Printing";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Wedding Cards",
  "Visiting Cards",
  "Brochures",
  "Bill Books",
  "Letterheads",
  "Catalogues",
  "Corporate",
  "Printing",
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: "w1", src: IMAGE_PATHS.gallery("w1"), alt: "Wedding invitation cards", category: "Wedding Cards" },
  { id: "w2", src: IMAGE_PATHS.gallery("w2"), alt: "Wedding invitation suite", category: "Wedding Cards" },
  { id: "w3", src: IMAGE_PATHS.gallery("w3"), alt: "Floral wedding card", category: "Wedding Cards" },
  { id: "w4", src: IMAGE_PATHS.gallery("w4"), alt: "Elegant wedding invite", category: "Wedding Cards" },
  { id: "w5", src: IMAGE_PATHS.gallery("w5"), alt: "Wedding invitation design", category: "Wedding Cards" },
  { id: "w6", src: IMAGE_PATHS.gallery("w6"), alt: "Wedding stationery", category: "Wedding Cards" },
  { id: "v1", src: IMAGE_PATHS.gallery("v1"), alt: "Premium visiting cards", category: "Visiting Cards" },
  { id: "v2", src: IMAGE_PATHS.gallery("v2"), alt: "Business cards", category: "Visiting Cards" },
  { id: "v3", src: IMAGE_PATHS.gallery("v3"), alt: "Luxury business cards", category: "Visiting Cards" },
  { id: "v4", src: IMAGE_PATHS.gallery("v4"), alt: "Premium foil visiting cards", category: "Visiting Cards" },
  { id: "v5", src: IMAGE_PATHS.gallery("v5"), alt: "Corporate visiting cards", category: "Visiting Cards" },
  { id: "v6", src: IMAGE_PATHS.gallery("v6"), alt: "Minimal business cards", category: "Visiting Cards" },
  { id: "b1", src: IMAGE_PATHS.gallery("b1"), alt: "Corporate brochures", category: "Brochures" },
  { id: "b2", src: IMAGE_PATHS.gallery("b2"), alt: "Trifold brochure", category: "Brochures" },
  { id: "b3", src: IMAGE_PATHS.gallery("b3"), alt: "Pamphlet and brochure", category: "Brochures" },
  { id: "b4", src: IMAGE_PATHS.gallery("b4"), alt: "Marketing brochure", category: "Brochures" },
  { id: "b5", src: IMAGE_PATHS.gallery("b5"), alt: "Brochure design", category: "Brochures" },
  { id: "b6", src: IMAGE_PATHS.gallery("b6"), alt: "Sales brochure", category: "Brochures" },
  { id: "bb1", src: IMAGE_PATHS.gallery("bb1"), alt: "Bill books and registers", category: "Bill Books" },
  { id: "bb2", src: IMAGE_PATHS.gallery("bb2"), alt: "NCR bill book", category: "Bill Books" },
  { id: "bb3", src: IMAGE_PATHS.gallery("bb3"), alt: "Invoice and bill book", category: "Bill Books" },
  { id: "bb4", src: IMAGE_PATHS.gallery("bb4"), alt: "Carbonless bill book", category: "Bill Books" },
  { id: "l1", src: IMAGE_PATHS.gallery("l1"), alt: "Letterhead printing", category: "Letterheads" },
  { id: "l2", src: IMAGE_PATHS.gallery("l2"), alt: "Envelopes and letterheads", category: "Letterheads" },
  { id: "l3", src: IMAGE_PATHS.gallery("l3"), alt: "Corporate letterhead", category: "Letterheads" },
  { id: "l4", src: IMAGE_PATHS.gallery("l4"), alt: "Stationery set", category: "Letterheads" },
  { id: "c1", src: IMAGE_PATHS.gallery("c1"), alt: "Product catalogue", category: "Catalogues" },
  { id: "c2", src: IMAGE_PATHS.gallery("c2"), alt: "Catalogue booklet", category: "Catalogues" },
  { id: "c3", src: IMAGE_PATHS.gallery("c3"), alt: "Print catalogue", category: "Catalogues" },
  { id: "c4", src: IMAGE_PATHS.gallery("c4"), alt: "Menu and catalogue", category: "Catalogues" },
  { id: "co1", src: IMAGE_PATHS.gallery("co1"), alt: "Poster and print", category: "Corporate" },
  { id: "co2", src: IMAGE_PATHS.gallery("co2"), alt: "Print production", category: "Corporate" },
  { id: "co3", src: IMAGE_PATHS.gallery("co3"), alt: "Corporate stationery", category: "Corporate" },
  { id: "co4", src: IMAGE_PATHS.gallery("co4"), alt: "Branded materials", category: "Corporate" },
  { id: "co5", src: IMAGE_PATHS.gallery("co5"), alt: "Stickers and labels", category: "Corporate" },
  { id: "co6", src: IMAGE_PATHS.gallery("co6"), alt: "ID cards and corporate", category: "Corporate" },
  { id: "p1", src: IMAGE_PATHS.gallery("p1"), alt: "Offset printing press", category: "Printing" },
  { id: "p2", src: IMAGE_PATHS.gallery("p2"), alt: "Printing machinery", category: "Printing" },
  { id: "p3", src: IMAGE_PATHS.gallery("p3"), alt: "Screen printing", category: "Printing" },
  { id: "p4", src: IMAGE_PATHS.gallery("p4"), alt: "Digital printing", category: "Printing" },
  { id: "p5", src: IMAGE_PATHS.gallery("p5"), alt: "Print workshop", category: "Printing" },
  { id: "p6", src: IMAGE_PATHS.gallery("p6"), alt: "Printing press", category: "Printing" },
  { id: "w7", src: IMAGE_PATHS.gallery("w7"), alt: "Wedding invitation flat lay", category: "Wedding Cards" },
  { id: "w8", src: IMAGE_PATHS.gallery("w8"), alt: "Invitation cards", category: "Wedding Cards" },
  { id: "v7", src: IMAGE_PATHS.gallery("v7"), alt: "Business card design", category: "Visiting Cards" },
  { id: "b7", src: IMAGE_PATHS.gallery("b7"), alt: "Company brochure", category: "Brochures" },
  { id: "l5", src: IMAGE_PATHS.gallery("l5"), alt: "Office stationery", category: "Letterheads" },
  { id: "co7", src: IMAGE_PATHS.gallery("co7"), alt: "Corporate branding", category: "Corporate" },
  { id: "co8", src: IMAGE_PATHS.gallery("co8"), alt: "Marketing print", category: "Corporate" },
];
