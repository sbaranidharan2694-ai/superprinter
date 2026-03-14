const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&dpr=1`;

export const IMG = {
  // Redesign: Unsplash hero & about
  heroUnsplash: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1600",
  aboutUnsplash: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
  // Hero & Background (legacy)
  hero: px(3825586, 1920, 1080),
  pressWide: px(4481326, 1920, 800),
  
  // Offset Press & Workshop
  offsetPress: px(4481323),
  inkRollers: px(4481258),
  workshop: px(4481259),
  printShop: px(7034467, 900, 700),
  
  // Visiting Cards
  glossCard: px(6177618, 900, 700),
  mattCard: px(5632386, 900, 700),
  spotUvCard: px(6177608, 900, 700),
  velvetCard: px(4792506, 900, 700),
  goldFoilCard: px(6801647, 900, 700),
  syntheticCard: px(6801648, 900, 700),
  premiumCards: px(6802042, 900, 700),
  stackedCards: px(5632388, 900, 700),
  
  // Wedding Invitations
  weddingInvite1: px(2253870, 900, 700),
  weddingInvite2: px(1616113, 900, 700),
  weddingInvite3: px(1043902, 900, 700),
  weddingCeremony: px(1024993),
  
  // Stationery
  letterhead: px(5632397, 900, 700),
  envelopes: px(4226896, 900, 700),
  stickerSheets: px(4792285, 900, 700),
  brochures: px(6177670, 900, 700),

  // Catalog: stickers, calendar, hospital files
  mirrorSticker: px(4792285, 900, 700),
  panchangam: px(28806603, 900, 700),
  calendarMount: px(28806603, 900, 700),
  hospitalPlastic: px(7034466, 900, 700),
  hospitalGeneral: px(7034466, 900, 700),
  
  // Delivery
  delivery: px(4391470),
  parcel: px(4246120, 900, 700),
  
  // Quality & Process
  qualityCheck: px(7034466, 900, 700),
  inkPress: px(4481324, 900, 700),
  digitalPrint: px(7034465, 900, 700),

  // Additional from old images.ts
  P01: px(6621000),
  P02: px(6620992),
  P03: px(4140923),
  P04: px(19316517),
  P05: px(28806603),
  P06: px(18748938),
  P07: px(28845664),
  P08: px(7162700),
  P09: px(4466176),
  P10: px(5632397),
  P11: px(269843),
  P12: px(17536002),
  P13: px(6208086),
  P14: px(3894378),
  P15: px(3201783),
  P16: px(19905870),
  P17: px(6209791),
  P18: px(1070536),
  P19: px(300860),
  P20: px(2881262),
  P21: px(4440796),
  P22: px(6169002),
  P23: px(8276914),
  P24: px(7843999),
  P25: px(3966277),
  P26: px(4348404),
  P27: px(3194518),
  P28: px(33650428),
  P29: px(4466175),
  P30: px(1266808),
  P31: px(8293714),
  P32: px(1573825),
  P33: px(276267),
  P34: px(30171219),
  P01_HERO: px(6621000, 1920, 1080),
  P04_WIDE: px(19316517, 1920, 800),
} as const;

// Service images mapped to service slugs
export const SERVICE_IMAGES: Record<string, string> = {
  "offset-printing": IMG.offsetPress,
  "visiting-cards": IMG.glossCard,
  "banner-printing": IMG.P05,
  "brochure-printing": IMG.brochures,
  "bill-books": IMG.P11,
  "wedding-invitations": IMG.weddingInvite1,
  "t-shirt-printing": IMG.P16,
  "rubber-stamps": IMG.P19,
  "stickers-labels": IMG.stickerSheets,
  "letterheads": IMG.letterhead,
  "catalogues": IMG.P12,
  "pamphlet-printing": IMG.P17,
  "screen-printing": IMG.P18,
  "id-cards": IMG.P13,
};
