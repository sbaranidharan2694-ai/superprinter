/**
 * Trusted-by logos in public/clients/.
 * Sources: official company websites, Wikimedia Commons (where noted). Logos are
 * trademarks of their owners — use only with appropriate rights.
 */

export interface Client {
  name: string;
  tag?: string;
  /** Path to a locally-hosted logo under /public/clients/. Highest priority. */
  logo: string;
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
  { name: "G.A. Jolly", tag: "Retail", logo: "/clients/ga-jolly.svg" },
  { name: "NK Grand Palace", tag: "Hospitality", logo: "/clients/nk-grand-palace.svg" },
  { name: "Harsha Exports", tag: "Exports", logo: "/clients/harsha-exports.svg" },
  { name: "Panapoly", tag: "Corporate", logo: "/clients/panapoly.svg" },
  { name: "Mothers Medical", tag: "Healthcare", logo: "/clients/mothers-medical.svg" },
  { name: "ESAB", tag: "Industrial", logo: "/clients/esab.svg", brandfetchDomain: "esab.com" },
  { name: "Indian Bank", tag: "Banking", logo: "/clients/indian-bank.svg", brandfetchDomain: "indianbank.in" },
  { name: "GG Organics", tag: "Food & Organics", logo: "/clients/gg-organics.svg" },
  { name: "Kwowa Natesan", tag: "Corporate", logo: "/clients/kwowa-natesan.svg" },
  { name: "CGRD", tag: "Corporate", logo: "/clients/cgrd.svg" },
  { name: "Gokul Ram Leathers", tag: "Leather Manufacturing", logo: "/clients/gokul-ram-leathers.svg" },
];
