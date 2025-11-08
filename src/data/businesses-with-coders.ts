import { SloCitiesType, UrlType } from "./data.types";

type BusinessesWithCodersType = {
  displayName: string;
  websiteUrl: UrlType;
  cityNames: SloCitiesType[];
};

export const businessesWithCoders: {
  [key in string]: BusinessesWithCodersType;
} = {
  scientificDrilling: {
    displayName: "Scientific Drilling",
    websiteUrl: "https://scientificdrilling.com/",
    cityNames: ["Paso Robles"],
  },
  stellarExploration: {
    displayName: "Stellar Exploration",
    websiteUrl: "https://www.stellar-exploration.com/",
    cityNames: ["San Luis Obispo"],
  },
  rantecPowerSystems: {
    displayName: "Rantec Power Systems",
    websiteUrl: "https://rantec.com/",
    cityNames: ["Los Osos"],
  },
  dassaultSystemes: {
    displayName: "Dassault Systemes",
    websiteUrl: "https://www.3ds.com/",
    cityNames: ["Paso Robles"],
  },
  tapestrySolutions: {
    displayName: "Tapestry Solutions",
    websiteUrl: "https://www.tapestrysolutions.com/",
    cityNames: ["San Luis Obispo"],
  },
  whiteFoxDefense: {
    displayName: "WhiteFox Defense",
    websiteUrl: "https://www.whitefoxdefense.com/",
    cityNames: ["San Luis Obispo"],
  },
  trihydroCorporation: {
    displayName: "Trihydro Corporation",
    websiteUrl: "https://www.trihydro.com/",
    cityNames: ["San Luis Obispo"],
  },
  roopairs: {
    websiteUrl: "https://www.roopairs.com/",
    displayName: "Roopairs",
    cityNames: ["San Luis Obispo"],
  },
  postalIo: {
    websiteUrl: "https://postal.io/",
    displayName: "Postal.io",
    cityNames: ["San Luis Obispo"],
  },
  mindbody: {
    websiteUrl: "https://www.mindbodyonline.com/",
    displayName: "Mindbody",
    cityNames: ["San Luis Obispo"],
  },
  matchfire: {
    websiteUrl: "https://matchfire.com/",
    displayName: "Matchfire",
    cityNames: ["San Luis Obispo"],
  },
  landGorilla: {
    websiteUrl: "https://landgorilla.com/",
    displayName: "Land Gorilla",
    cityNames: ["San Luis Obispo"],
  },
  iFixit: {
    websiteUrl: "https://www.ifixit.com/",
    displayName: "iFixit",
    cityNames: ["San Luis Obispo"],
  },
  haptX: {
    websiteUrl: "https://haptx.com/",
    displayName: "HaptX",
    cityNames: ["San Luis Obispo"],
  },
  bounteous: {
    websiteUrl: "https://www.bounteous.com/",
    displayName: "Bounteous",
    cityNames: ["San Luis Obispo"],
  },
  gaine: {
    websiteUrl: "https://www.gaine.com/",
    displayName: "Gaine",
    cityNames: ["San Luis Obispo"],
  },
  etnaInteractive: {
    websiteUrl: "https://www.etnainteractive.com/",
    displayName: "Etna Interactive",
    cityNames: ["San Luis Obispo"],
  },
  entegris: {
    websiteUrl: "https://www.entegris.com/",
    displayName: "Entegris",
    cityNames: ["San Luis Obispo"],
  },
  empath: {
    websiteUrl: "https://empathunited.com/",
    displayName: "EMPATH",
    cityNames: ["San Luis Obispo"],
  },
  digitalMarketMedia: {
    websiteUrl: "https://www.digitalmarketmedia.com/",
    displayName: "Digital Market Media",
    cityNames: ["San Luis Obispo"],
  },
  amfMediaGroup: {
    websiteUrl: "https://www.amfmediagroup.com/",
    displayName: "AMF Media Group",
    cityNames: ["San Luis Obispo"],
  },
  amazon: {
    websiteUrl:
      "https://www.amazon.jobs/en/locations/san-luis-obispo-california",
    displayName: "Amazon",
    cityNames: ["San Luis Obispo"],
  },
  edgeAutonomy: {
    websiteUrl: "https://edgeautonomy.io/",
    displayName: "Edge Autonomy",
    cityNames: ["San Luis Obispo"],
  },
  crystalEngineering: {
    displayName: "Crystal Engineering",
    websiteUrl: "https://www.ametekcalibration.com/",
    cityNames: ["San Luis Obispo"],
  },
  treesApp: {
    displayName: "Trees.app",
    websiteUrl: "https://www.trees.app/",
    cityNames: ["San Luis Obispo"],
  },
  calPoly: {
    displayName: "Cal Poly",
    websiteUrl:
      "https://jobs.calpoly.edu/en-us/filter/?search-keyword=&category=information%20systems%20%26%20technology",
    cityNames: ["San Luis Obispo"],
  },
  xano: {
    displayName: "Xano.com",
    websiteUrl: "https://www.xano.com/",
    cityNames: ["San Luis Obispo"],
  },
  milcgroup: {
    displayName: "Milc Group",
    websiteUrl: "https://www.milcgroup.com/",
    cityNames: ["San Luis Obispo"],
  },
};
