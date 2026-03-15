/**
 * Companies we serve — all logos are local files in public/clients/.
 * Real logo images downloaded from official/Wikimedia sources where available.
 */

export interface Client {
  name: string;
  tag?: string;
  logo: string;
}

export const CLIENTS: Client[] = [
  { name: "Reliance", tag: "Elevators & Technology", logo: "/clients/reliance.png" },
  { name: "Fujitec", tag: "Elevators & Technology", logo: "/clients/fujitec.svg" },
  { name: "GTK Foundation", tag: "Foundation", logo: "/clients/gtk-foundation.png" },
  { name: "BHARAT PETROLEUM", tag: "Oil & Energy", logo: "/clients/bharat-petroleum.svg" },
  { name: "Uranus Oil", tag: "Oil & Energy", logo: "/clients/uranus-oil.png" },
  { name: "Jeganathan Hospital", tag: "Healthcare", logo: "/clients/jeganathan-hospital.svg" },
  { name: "SSK Smart Move Logistic", tag: "Logistics", logo: "/clients/ssk-smart-move-logistic.svg" },
  { name: "Contemporary Leathers", tag: "Leather Manufacturing", logo: "/clients/contemporary-leathers.svg" },
  { name: "GA Jolly", tag: "Corporate", logo: "/clients/ga-jolly.svg" },
];
