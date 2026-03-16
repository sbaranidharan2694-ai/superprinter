/**
 * Single source for all site image URLs.
 * Uses Unsplash CDN so images load without local files. To use local files instead,
 * add images to public/images/ (see public/images/README.txt) and set USE_LOCAL_IMAGES = true.
 */

const USE_LOCAL_IMAGES = true;
const LOCAL_BASE = "/images";
const U = (id: string, w = 600, q = 85) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=${q}`;

// Unsplash photo IDs for gallery (id -> photo-id)
const GALLERY_PHOTOS: Record<string, string> = {
  w1: "1607344645866-009c320b63e0", w2: "1519741497674-611481863552", w3: "1583939003579-730e3918a45a",
  w4: "1607000975631-4bd2e12d00da", w5: "1511285560929-80b456fea0bc", w6: "1586528116311-ad8dd3c8310d",
  v1: "1606293926075-69a00dbfde81", v2: "1589739900243-4b52cd9b104e", v3: "1607082348824-0a96f2a4b9da",
  v4: "1572044162444-ad60f128bdea", v5: "1586953208448-b95a79798f07", v6: "1558618666-fcd25c85cd64",
  b1: "1586075010923-2dd4570fb338", b2: "1541506618330-7c369fc759b5", b3: "1572044162444-ad60f128bdea",
  b4: "1586528116311-ad8dd3c8310d", b5: "1548036328-c9fa89d128fa", b6: "1557804506-669a67965ba0",
  bb1: "1568667256549-094345857637", bb2: "1568667256549-094345857637", bb3: "1586281380349-632531db7ed4", bb4: "1586075010923-2dd4570fb338",
  l1: "1586281380349-632531db7ed4", l2: "1618005198919-d3d4b5a92ead", l3: "1586075010923-2dd4570fb338", l4: "1557804506-669a67965ba0", l5: "1618005198919-d3d4b5a92ead",
  c1: "1558618666-fcd25c85cd64", c2: "1541506618330-7c369fc759b5", c3: "1586528116311-ad8dd3c8310d", c4: "1512820790803-83ca734da794",
  co1: "1634973357973-f2ed2657db3c", co2: "1526374965328-7f61d4dc18c5", co3: "1586953208448-b95a79798f07", co4: "1557804506-669a67965ba0",
  co5: "1607000975631-4bd2e12d00da", co6: "1611532736597-de2d4265fba3", co7: "1634973357973-f2ed2657db3c", co8: "1557804506-669a67965ba0",
  p1: "1504711434969-e33886168f5c", p2: "1504270997636-07ddfbd48945", p3: "1558618047-f4f37ee1d6d0", p4: "1526374965328-7f61d4dc18c5",
  p5: "1513542789411-b6a5d4f31634", p6: "1586528116311-ad8dd3c8310d", w7: "1519741497674-611481863552", w8: "1583939003579-730e3918a45a",
  v7: "1589739900243-4b52cd9b104e", b7: "1586281380349-632531db7ed4",
};

const AVATAR_PHOTOS = [
  "1580471260026-2a8acbc7c7a7", "1712425718137-491250cfde88", "1605284909169-5e93b375cd4d",
  "1705513054794-d18a8eb0af6c", "1596633816484-10da10b748e4", "1659451335972-c3f976f4e567",
];

function local(path: string) {
  return `${LOCAL_BASE}/${path}`;
}

export const IMAGE_PATHS = {
  placeholder: USE_LOCAL_IMAGES ? local("placeholder.jpg") : U("1606293926075-69a00dbfde81", 600, 80),

  hero: {
    wedding: USE_LOCAL_IMAGES ? local("hero/wedding.jpg") : U("1607344645866-009c320b63e0", 400),
    visiting: USE_LOCAL_IMAGES ? local("hero/visiting.jpg") : U("1606293926075-69a00dbfde81", 400),
    brochures: USE_LOCAL_IMAGES ? local("hero/brochures.jpg") : U("1586075010923-2dd4570fb338", 400),
    billBooks: USE_LOCAL_IMAGES ? local("hero/bill-books.jpg") : U("1568667256549-094345857637", 400),
    visitingCards: USE_LOCAL_IMAGES ? local("hero-visiting-cards.png") : U("1606293926075-69a00dbfde81", 400),
  },

  gallery: (id: string) =>
    USE_LOCAL_IMAGES ? local(`gallery/${id}.jpg`) : U(GALLERY_PHOTOS[id] || "1606293926075-69a00dbfde81"),

  avatar: (index: number) =>
    USE_LOCAL_IMAGES
      ? local(`avatars/${String(index).padStart(2, "0")}.jpg`)
      : `https://images.unsplash.com/photo-${AVATAR_PHOTOS[index - 1] || AVATAR_PHOTOS[0]}?w=160&h=160&fit=crop&crop=face&q=80`,

  about: USE_LOCAL_IMAGES ? local("about.jpg") : U("1504711434969-e33886168f5c", 800),
  offsetPress: USE_LOCAL_IMAGES ? local("offset-press.jpg") : U("1504711434969-e33886168f5c"),
  workshop: USE_LOCAL_IMAGES ? local("workshop.jpg") : U("1504270997636-07ddfbd48945"),
  letterhead: USE_LOCAL_IMAGES ? local("letterhead.jpg") : U("1586281380349-632531db7ed4"),
  brochures: USE_LOCAL_IMAGES ? local("brochures.jpg") : U("1586075010923-2dd4570fb338"),
  billBook: USE_LOCAL_IMAGES ? local("bill-book.jpg") : U("1568667256549-094345857637"),
  visitingCard: USE_LOCAL_IMAGES ? local("visiting-card.jpg") : U("1606293926075-69a00dbfde81"),
  weddingInvite: USE_LOCAL_IMAGES ? local("wedding-invite.jpg") : U("1607344645866-009c320b63e0"),
  envelope: USE_LOCAL_IMAGES ? local("envelope.jpg") : U("1618005198919-d3d4b5a92ead"),
  stickerSheet: USE_LOCAL_IMAGES ? local("sticker-sheet.jpg") : U("1607000975631-4bd2e12d00da"),
  glossCard: USE_LOCAL_IMAGES ? local("gloss-card.jpg") : U("1606293926075-69a00dbfde81"),
  mattCard: USE_LOCAL_IMAGES ? local("matt-card.jpg") : U("1607082348824-0a96f2a4b9da"),
  spotUvCard: USE_LOCAL_IMAGES ? local("spot-uv-card.jpg") : U("1572044162444-ad60f128bdea"),
  velvetCard: USE_LOCAL_IMAGES ? local("velvet-card.jpg") : U("1589739900243-4b52cd9b104e"),
  premiumCards: USE_LOCAL_IMAGES ? local("premium-cards.jpg") : U("1558618666-fcd25c85cd64"),
  stackedCards: USE_LOCAL_IMAGES ? local("stacked-cards.jpg") : U("1586953208448-b95a79798f07"),
  digitalPrint: USE_LOCAL_IMAGES ? local("digital-print.jpg") : U("1526374965328-7f61d4dc18c5"),
  catalog: (id: string) =>
    USE_LOCAL_IMAGES ? local(`catalog/${id}.jpg`) : U("1513542789411-b6a5d4f31634"),
} as const;
