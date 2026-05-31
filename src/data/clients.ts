/**
 * Trusted-by logos in public/clients/.
 * Sources: official company websites, Wikimedia Commons (where noted). Logos are
 * trademarks of their owners — use only with appropriate rights.
 */

export interface Client {
  name: string;
  tag?: string;
  /**
   * Path to a locally-hosted logo under /public/clients/. Highest priority.
   * Optional — if undefined or the file doesn't exist yet, ClientLogoTile
   * renders an initials monogram without firing a 404 network request.
   * Lighthouse flagged earlier rounds with 4 missing-logo 404s.
   */
  logo?: string;
  /**
   * Optional brand domain for the Brandfetch Logo Link API. When the local
   * `logo` file isn't on disk yet, the page falls back to
   * `https://cdn.brandfetch.io/<brandfetchDomain>?c=<VITE_BRANDFETCH_CLIENT_ID>`
   * which returns the brand-supplied logo if Brandfetch has it. Brandfetch
   * only ships logos that brands have themselves uploaded, so this is a
   * licensed-use channel (vs scraping Google Images).
   *
   * Set this for clients with a clear public brand identity (ESAB, Indian
   * Bank etc.). Leave undefined for smaller B2B clients without a
   * predictable domain; those gracefully fall through to the initials
   * monogram render.
   *
   * Brandfetch free tier: 25k requests/month. Register at
   * https://developers.brandfetch.com to get a client ID, then set the env
   * var `VITE_BRANDFETCH_CLIENT_ID` in your .env (or hosting platform).
   */
  brandfetchDomain?: string;
}

export const CLIENTS: Client[] = [
  { name: "Wipro", tag: "Technology", logo: "/clients/wipro.svg" },
  { name: "TTK Healthcare", tag: "Healthcare", logo: "/clients/ttk.jpg" },
  { name: "HFL Limited", tag: "Corporate", logo: "/clients/hfl-limited.png" },
  { name: "Precision Equipments", tag: "Engineering", logo: "/clients/precision-engineering.jpg" },
  { name: "Sea Hydrosys Systems", tag: "Industrial", logo: "/clients/sea-hydro-system.jpg" },
  { name: "Reliance", tag: "Elevators & Technology", logo: "/clients/reliance.png" },
  { name: "Fujitec", tag: "Elevators & Technology", logo: "/clients/fujitec.svg" },
  { name: "GTK Foundation", tag: "Foundation", logo: "/clients/gtk-foundation.png" },
  { name: "Bharat Petroleum", tag: "Oil & Energy", logo: "/clients/bharat-petroleum.svg" },
  { name: "Uranus Oil", tag: "Oil & Energy", logo: "/clients/uranus-oil.png" },
  { name: "Jeganathan Hospital", tag: "Healthcare", logo: "/clients/jeganathan-hospital.svg" },
  { name: "SSK Smart Move Logistic", tag: "Logistics", logo: "/clients/ssk-smart-move-logistic.svg" },
  { name: "Contemporary Leathers", tag: "Leather Manufacturing", logo: "/clients/contemporary-leathers.png" },
  // Added 2026-05-29 — 13 client names supplied by owner. Logo files for
  // entries marked "placeholder" need to be dropped at the matching path
  // under public/clients/ — until then, ClientsPage falls back to an
  // initials monogram via its onError handler.
  { name: "G.A. Jolli", tag: "Retail", logo: "/clients/ga-jolly.svg" },
  // Names corrected against owner-supplied logo files (May 2026):
  // "NK Grand Palace" → "NK Grand Park" (the boutique-hotel brand mark)
  // "Panapoly" → "Panoply" (Panoply Corrugated Boards & Boxes)
  // "CGRD" → "CGRD Chemicals" (the brand's full mark reads C.G.R.D. Chemicals)
  { name: "NK Grand Park", tag: "Hospitality", logo: "/clients/nk-grand-park.png" },
  { name: "Harsha Exports", tag: "Exports", logo: "/clients/harsha-exports.png" },
  { name: "Panoply", tag: "Packaging — Corrugated Boards & Boxes", logo: "/clients/panoply.png" },
  { name: "Mothers Medica", tag: "Healthcare", logo: "/clients/mothers-medica.png" },
  // ESAB + Indian Bank: no local logo file yet. brandfetchDomain set so
  // the Logo Link API serves the brand-uploaded mark when
  // VITE_BRANDFETCH_CLIENT_ID is configured; falls through to initials
  // monogram otherwise. No <img src> for the local path = no 404.
  { name: "ESAB", tag: "Industrial", brandfetchDomain: "esab.com" },
  { name: "Indian Bank", tag: "Banking", brandfetchDomain: "indianbank.in" },
  { name: "GG Organics", tag: "Sustainable Leather & Textiles", logo: "/clients/gg-organics.png" },
  // Kyowa Natesan + Gokul Ram Leathers: no logo file on disk yet. Owner
  // can drop a PNG at the matching slug and add `logo: "/clients/..."`
  // to re-enable. Until then, ClientLogoTile renders the monogram.
  { name: "Kyowa Natesan", tag: "Corporate" },
  { name: "CGRD Chemicals", tag: "Industrial Chemicals", logo: "/clients/cgrd-chemicals.png" },
  { name: "Gokul Ram Leathers", tag: "Leather Manufacturing" },
];
