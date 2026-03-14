/**
 * V3 Instant Price Calculator — pricing tiers and delivery.
 * Prices are per unit or per bracket; calculator interpolates for quantity.
 */

export type ProductKey = "visitingCards" | "brochures" | "letterheads" | "billBooks" | "envelopes" | "weddingCards" | "posters";

export type FinishKey = string;

export interface Bracket {
  base?: number;
  per100?: number;
  per250?: number;
  per500?: number;
  per1000?: number;
  per5000?: number;
  per10000?: number;
  per25?: number;
  per50?: number;
  perCard?: number;
}

export const pricing: Record<ProductKey, Record<FinishKey, Bracket>> = {
  visitingCards: {
    gloss:   { base: 299, per100: 120, per500: 89, per1000: 75, per5000: 62 },
    matt:    { base: 349, per100: 140, per500: 99, per1000: 82, per5000: 68 },
    spotUV:  { base: 599, per100: 260, per500: 190, per1000: 160, per5000: 130 },
    foil:    { base: 799, per100: 350, per500: 270, per1000: 230, per5000: 190 },
    noLam:   { base: 249, per100: 100, per500: 75, per1000: 62, per5000: 52 },
  },
  brochures: {
    glossLam: { base: 499, per100: 220, per500: 170, per1000: 145 },
    mattLam:  { base: 549, per100: 240, per500: 185, per1000: 158 },
    noLam:    { base: 399, per100: 180, per500: 140, per1000: 120 },
  },
  letterheads: {
    standard: { base: 299, per100: 120, per500: 88, per1000: 72 },
    premium:  { base: 399, per100: 160, per500: 118, per1000: 96 },
  },
  billBooks: {
    twoPart:   { base: 250, per25: 250, per50: 450, per100: 820 },
    threePart: { base: 320, per25: 320, per50: 580, per100: 1050 },
  },
  envelopes: {
    dlWhite:  { base: 199, per100: 199, per500: 160, per1000: 130 },
    c5White:  { base: 249, per100: 249, per500: 195, per1000: 158 },
    branded:  { base: 349, per100: 349, per500: 270, per1000: 220 },
  },
  weddingCards: {
    matt:   { base: 8, perCard: 8, per100: 750, per250: 1800, per500: 3400 },
    velvet: { base: 12, perCard: 12, per100: 1100, per250: 2600, per500: 4900 },
    foil:   { base: 15, perCard: 15, per100: 1400, per250: 3300, per500: 6200 },
  },
  posters: {
    gsm130A4: { base: 199, per50: 199, per100: 350, per500: 1200 },
    gsm170A3: { base: 299, per50: 299, per100: 520, per500: 1900 },
    gsm170A2: { base: 499, per50: 499, per100: 880, per500: 3200 },
  },
};

/** Product dropdown config: id, label, key */
export const CALC_PRODUCTS: { id: ProductKey; label: string }[] = [
  { id: "visitingCards", label: "Visiting Cards" },
  { id: "brochures", label: "Brochures" },
  { id: "letterheads", label: "Letterheads" },
  { id: "billBooks", label: "Bill Books" },
  { id: "envelopes", label: "Envelopes" },
  { id: "weddingCards", label: "Wedding Cards" },
  { id: "posters", label: "Posters" },
];

/** Finish options per product: finish key -> label */
export const CALC_FINISHES: Record<ProductKey, { id: FinishKey; label: string }[]> = {
  visitingCards: [
    { id: "gloss", label: "Gloss" },
    { id: "matt", label: "Matt" },
    { id: "spotUV", label: "Spot UV" },
    { id: "foil", label: "Foil" },
    { id: "noLam", label: "Without Lam" },
  ],
  brochures: [
    { id: "glossLam", label: "Gloss Lam" },
    { id: "mattLam", label: "Matt Lam" },
    { id: "noLam", label: "No Lam" },
  ],
  letterheads: [
    { id: "standard", label: "Standard 90GSM" },
    { id: "premium", label: "Premium 120GSM" },
  ],
  billBooks: [
    { id: "twoPart", label: "2-Part NCR" },
    { id: "threePart", label: "3-Part NCR" },
  ],
  envelopes: [
    { id: "dlWhite", label: "DL White" },
    { id: "c5White", label: "C5 White" },
    { id: "branded", label: "Branded" },
  ],
  weddingCards: [
    { id: "matt", label: "Matt 300GSM" },
    { id: "velvet", label: "Velvet Lam" },
    { id: "foil", label: "Foil Accent" },
  ],
  posters: [
    { id: "gsm130A4", label: "130GSM A4" },
    { id: "gsm170A3", label: "170GSM A3" },
    { id: "gsm170A2", label: "170GSM A2" },
  ],
};

/** Delivery days by product (or by product+finish for visitingCards) */
export const deliveryDays: Record<ProductKey, string | Record<string, string>> = {
  visitingCards: { gloss: "48 hrs", matt: "48 hrs", spotUV: "3-4 days", foil: "4-5 days", noLam: "48 hrs" },
  brochures: "2-3 days",
  letterheads: "2-3 days",
  billBooks: "3-4 days",
  envelopes: "2-3 days",
  weddingCards: "3-5 days",
  posters: "2-3 days",
};

export function getDeliveryDays(product: ProductKey, finish: FinishKey): string {
  const d = deliveryDays[product];
  return typeof d === "string" ? d : (d[finish] ?? "2-3 days");
}

/** Get price for quantity (interpolate between brackets). Price returned is GST-inclusive. */
export function calculatePrice(
  product: ProductKey,
  finish: FinishKey,
  quantity: number
): { total: number; perPiece: number } | null {
  const tiers = pricing[product]?.[finish];
  if (!tiers) return null;

  let totalBeforeGst = 0;
  const b = tiers;

  if (product === "billBooks") {
    const sets = quantity;
    if (sets <= 25) totalBeforeGst = b.per25 ?? b.base ?? 0;
    else if (sets <= 50) totalBeforeGst = b.per50 ?? 0;
    else totalBeforeGst = (b.per100 ?? 0) * Math.ceil(sets / 100);
  } else if (product === "weddingCards") {
    if (quantity <= 100) totalBeforeGst = quantity * (b.perCard ?? b.base ?? 8);
    else if (quantity <= 250) totalBeforeGst = b.per250 ?? 0;
    else if (quantity <= 500) totalBeforeGst = b.per500 ?? 0;
    else totalBeforeGst = (b.per500 ?? 0) * Math.ceil(quantity / 500);
  } else if (product === "posters") {
    if (quantity <= 50) totalBeforeGst = b.per50 ?? b.base ?? 0;
    else if (quantity <= 100) totalBeforeGst = b.per100 ?? 0;
    else totalBeforeGst = b.per500 ?? 0;
  } else {
    // Bracket totals: 100, 500, 1000, 5000 (prices from prompt as total for that qty)
    const q = quantity;
    const t100 = b.base ?? b.per100 ?? 0;
    const t500 = b.per500 ?? t100;
    const t1000 = b.per1000 ?? t500;
    const t5000 = b.per5000 ?? t1000;
    if (q <= 100) totalBeforeGst = (t100 / 100) * q;
    else if (q <= 500) totalBeforeGst = t100 + ((t500 - t100) / 400) * (q - 100);
    else if (q <= 1000) totalBeforeGst = t500 + ((t1000 - t500) / 500) * (q - 500);
    else if (q <= 5000) totalBeforeGst = t1000 + ((t5000 - t1000) / 4000) * (q - 1000);
    else totalBeforeGst = (t5000 / 5000) * q;
  }

  totalBeforeGst = Math.round(totalBeforeGst);
  const total = Math.round(totalBeforeGst * 1.18);
  const perPiece = quantity > 0 ? total / quantity : 0;
  return { total, perPiece };
}
