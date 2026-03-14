/**
 * Companies we serve — logo paths point to public/clients/.
 * Replace placeholder images with actual logos from company websites when available.
 */

export interface Client {
  name: string;
  tag?: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: "Reliance Fujitec", tag: "Elevators & Technology", logo: "/clients/reliance-fujitec.svg" },
  { name: "GTK Foundation", tag: "Foundation", logo: "/clients/gtk-foundation.svg" },
  { name: "HP Oil", tag: "Oil & Energy", logo: "/clients/hp-oil.svg" },
  { name: "Uranus Oil", tag: "Oil & Energy", logo: "/clients/uranus-oil.svg" },
  { name: "Jeganathan Hospital", tag: "Healthcare", logo: "/clients/jeganathan-hospital.svg" },
  { name: "SSK Smart Move Logistic", tag: "Logistics", logo: "/clients/ssk-smart-move-logistic.svg" },
  { name: "Contemporary Leathers", tag: "Leather Manufacturing", logo: "/clients/contemporary-leathers.svg" },
  { name: "GA Jolly", tag: "Corporate", logo: "/clients/ga-jolly.svg" },
];
