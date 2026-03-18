/**
 * Trusted-by logos in public/clients/.
 * Sources: official company websites, Wikimedia Commons (where noted). Logos are
 * trademarks of their owners — use only with appropriate rights.
 */

export interface Client {
  name: string;
  tag?: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: "Wipro", tag: "Technology", logo: "/clients/wipro.svg" },
  { name: "TTK Healthcare", tag: "Healthcare", logo: "/clients/ttk.jpg" },
  { name: "HFL Limited", tag: "Corporate", logo: "/clients/hfl-limited.png" },
  { name: "Precision Engineering", tag: "Engineering", logo: "/clients/precision-engineering.jpg" },
  { name: "Sea Hydro System", tag: "Industrial", logo: "/clients/sea-hydro-system.jpg" },
  { name: "Reliance", tag: "Elevators & Technology", logo: "/clients/reliance.png" },
  { name: "Fujitec", tag: "Elevators & Technology", logo: "/clients/fujitec.svg" },
  { name: "GTK Foundation", tag: "Foundation", logo: "/clients/gtk-foundation.png" },
  { name: "BHARAT PETROLEUM", tag: "Oil & Energy", logo: "/clients/bharat-petroleum.svg" },
  { name: "Uranus Oil", tag: "Oil & Energy", logo: "/clients/uranus-oil.png" },
  { name: "Jeganathan Hospital", tag: "Healthcare", logo: "/clients/jeganathan-hospital.svg" },
  { name: "SSK Smart Move Logistic", tag: "Logistics", logo: "/clients/ssk-smart-move-logistic.svg" },
  { name: "Contemporary Leathers", tag: "Leather Manufacturing", logo: "/clients/contemporary-leathers.png" },
];
