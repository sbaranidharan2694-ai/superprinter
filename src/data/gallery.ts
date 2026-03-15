/**
 * Gallery page images — all from Unsplash (free for commercial use).
 * Categories: Wedding Cards, Visiting Cards, Brochures, Bill Books, Letterheads, Catalogues, Corporate, Printing.
 */

const W = "?w=600&q=85";

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
  // Wedding Cards
  { id: "w1", src: `https://images.unsplash.com/photo-1607344645866-009c320b63e0${W}`, alt: "Wedding invitation cards", category: "Wedding Cards" },
  { id: "w2", src: `https://images.unsplash.com/photo-1519741497674-611481863552${W}`, alt: "Wedding invitation suite", category: "Wedding Cards" },
  { id: "w3", src: `https://images.unsplash.com/photo-1583939003579-730e3918a45a${W}`, alt: "Floral wedding card", category: "Wedding Cards" },
  { id: "w4", src: `https://images.unsplash.com/photo-1607000975631-4bd2e12d00da${W}`, alt: "Elegant wedding invite", category: "Wedding Cards" },
  { id: "w5", src: `https://images.unsplash.com/photo-1511285560929-80b456fea0bc${W}`, alt: "Wedding invitation design", category: "Wedding Cards" },
  { id: "w6", src: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${W}`, alt: "Wedding stationery", category: "Wedding Cards" },
  // Visiting / Business Cards
  { id: "v1", src: `https://images.unsplash.com/photo-1606293926075-69a00dbfde81${W}`, alt: "Premium visiting cards", category: "Visiting Cards" },
  { id: "v2", src: `https://images.unsplash.com/photo-1589739900243-4b52cd9b104e${W}`, alt: "Business cards", category: "Visiting Cards" },
  { id: "v3", src: `https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da${W}`, alt: "Luxury business cards", category: "Visiting Cards" },
  { id: "v4", src: `https://images.unsplash.com/photo-1572044162444-ad60f128bdea${W}`, alt: "Premium foil visiting cards", category: "Visiting Cards" },
  { id: "v5", src: `https://images.unsplash.com/photo-1586953208448-b95a79798f07${W}`, alt: "Corporate visiting cards", category: "Visiting Cards" },
  { id: "v6", src: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64${W}`, alt: "Minimal business cards", category: "Visiting Cards" },
  // Brochures
  { id: "b1", src: `https://images.unsplash.com/photo-1586075010923-2dd4570fb338${W}`, alt: "Corporate brochures", category: "Brochures" },
  { id: "b2", src: `https://images.unsplash.com/photo-1541506618330-7c369fc759b5${W}`, alt: "Trifold brochure", category: "Brochures" },
  { id: "b3", src: `https://images.unsplash.com/photo-1572044162444-ad60f128bdea${W}`, alt: "Pamphlet and brochure", category: "Brochures" },
  { id: "b4", src: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${W}`, alt: "Marketing brochure", category: "Brochures" },
  { id: "b5", src: `https://images.unsplash.com/photo-1548036328-c9fa89d128fa${W}`, alt: "Brochure design", category: "Brochures" },
  { id: "b6", src: `https://images.unsplash.com/photo-1557804506-669a67965ba0${W}`, alt: "Sales brochure", category: "Brochures" },
  // Bill Books
  { id: "bb1", src: `https://images.unsplash.com/photo-1568667256549-094345857637${W}`, alt: "Bill books and registers", category: "Bill Books" },
  { id: "bb2", src: `https://images.unsplash.com/photo-1568667256549-094345857637${W}`, alt: "NCR bill book", category: "Bill Books" },
  { id: "bb3", src: `https://images.unsplash.com/photo-1586281380349-632531db7ed4${W}`, alt: "Invoice and bill book", category: "Bill Books" },
  { id: "bb4", src: `https://images.unsplash.com/photo-1586075010923-2dd4570fb338${W}`, alt: "Carbonless bill book", category: "Bill Books" },
  // Letterheads
  { id: "l1", src: `https://images.unsplash.com/photo-1586281380349-632531db7ed4${W}`, alt: "Letterhead printing", category: "Letterheads" },
  { id: "l2", src: `https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead${W}`, alt: "Envelopes and letterheads", category: "Letterheads" },
  { id: "l3", src: `https://images.unsplash.com/photo-1586075010923-2dd4570fb338${W}`, alt: "Corporate letterhead", category: "Letterheads" },
  { id: "l4", src: `https://images.unsplash.com/photo-1557804506-669a67965ba0${W}`, alt: "Stationery set", category: "Letterheads" },
  // Catalogues
  { id: "c1", src: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64${W}`, alt: "Product catalogue", category: "Catalogues" },
  { id: "c2", src: `https://images.unsplash.com/photo-1541506618330-7c369fc759b5${W}`, alt: "Catalogue booklet", category: "Catalogues" },
  { id: "c3", src: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${W}`, alt: "Print catalogue", category: "Catalogues" },
  { id: "c4", src: `https://images.unsplash.com/photo-1512820790803-83ca734da794${W}`, alt: "Menu and catalogue", category: "Catalogues" },
  // Corporate
  { id: "co1", src: `https://images.unsplash.com/photo-1634973357973-f2ed2657db3c${W}`, alt: "Poster and print", category: "Corporate" },
  { id: "co2", src: `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5${W}`, alt: "Print production", category: "Corporate" },
  { id: "co3", src: `https://images.unsplash.com/photo-1586953208448-b95a79798f07${W}`, alt: "Corporate stationery", category: "Corporate" },
  { id: "co4", src: `https://images.unsplash.com/photo-1557804506-669a67965ba0${W}`, alt: "Branded materials", category: "Corporate" },
  { id: "co5", src: `https://images.unsplash.com/photo-1607000975631-4bd2e12d00da${W}`, alt: "Stickers and labels", category: "Corporate" },
  { id: "co6", src: `https://images.unsplash.com/photo-1611532736597-de2d4265fba3${W}`, alt: "ID cards and corporate", category: "Corporate" },
  // Printing
  { id: "p1", src: `https://images.unsplash.com/photo-1504711434969-e33886168f5c${W}`, alt: "Offset printing press", category: "Printing" },
  { id: "p2", src: `https://images.unsplash.com/photo-1504270997636-07ddfbd48945${W}`, alt: "Printing machinery", category: "Printing" },
  { id: "p3", src: `https://images.unsplash.com/photo-1558618047-f4f37ee1d6d0${W}`, alt: "Screen printing", category: "Printing" },
  { id: "p4", src: `https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5${W}`, alt: "Digital printing", category: "Printing" },
  { id: "p5", src: `https://images.unsplash.com/photo-1513542789411-b6a5d4f31634${W}`, alt: "Print workshop", category: "Printing" },
  { id: "p6", src: `https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d${W}`, alt: "Printing press", category: "Printing" },
  // Extra variety (more wedding, cards, stationery)
  { id: "w7", src: `https://images.unsplash.com/photo-1519741497674-611481863552${W}`, alt: "Wedding invitation flat lay", category: "Wedding Cards" },
  { id: "w8", src: `https://images.unsplash.com/photo-1583939003579-730e3918a45a${W}`, alt: "Invitation cards", category: "Wedding Cards" },
  { id: "v7", src: `https://images.unsplash.com/photo-1589739900243-4b52cd9b104e${W}`, alt: "Business card design", category: "Visiting Cards" },
  { id: "b7", src: `https://images.unsplash.com/photo-1586281380349-632531db7ed4${W}`, alt: "Company brochure", category: "Brochures" },
  { id: "l5", src: `https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead${W}`, alt: "Office stationery", category: "Letterheads" },
  { id: "co7", src: `https://images.unsplash.com/photo-1634973357973-f2ed2657db3c${W}`, alt: "Corporate branding", category: "Corporate" },
  { id: "co8", src: `https://images.unsplash.com/photo-1557804506-669a67965ba0${W}`, alt: "Marketing print", category: "Corporate" },
];
