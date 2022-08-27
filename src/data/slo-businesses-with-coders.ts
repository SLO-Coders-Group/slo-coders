import {
  SloCitiesType,
  UrlType,
  GlassdoorReviewUrlType,
  LinkedInJobsUrlType,
  GoogleMapsUrl,
} from "./data.types";

type BusinessesWithCodersType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  glassdoorReviewsUrl?: GlassdoorReviewUrlType;
  linkedInJobsUrl?: LinkedInJobsUrlType;
  googleMapsLocations?: {
    cityName: SloCitiesType;
    googleMapsUrl: GoogleMapsUrl;
  }[];
};

export const businessesWithCoders: {
  [key in string]: BusinessesWithCodersType;
} = {
  stellarExploration: {
    displayName: "Stellar Exploration",
    websiteUrl: "https://www.stellar-exploration.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Stellar-Exploration-Reviews-E2387620.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/stellar-exploration-inc-/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/a8pLAwGnvEm2bCV49",
      },
    ],
  },
  rantecPowerSystems: {
    displayName: "Rantec Power Systems",
    websiteUrl: "https://rantec.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Rantec-Power-Systems-Reviews-E307287.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/rantecpowersystemsinc./jobs/",
    googleMapsLocations: [
      {
        cityName: "Los Osos",
        googleMapsUrl: "https://goo.gl/maps/fmsmzPrdXMwzo5HE8",
      },
    ],
  },
  dassaultSystemes: {
    displayName: "Dassault Systemes",
    websiteUrl: "https://www.3ds.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Dassault-Systemes-Reviews-E6162.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/dassaultsystemes/jobs/",
    googleMapsLocations: [
      {
        cityName: "Paso Robles",
        googleMapsUrl: "https://goo.gl/maps/oWcVdCUPkYdgYULH9",
      },
    ],
  },
  tapestrySolutions: {
    displayName: "Tapestry Solutions",
    websiteUrl: "https://www.tapestrysolutions.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Tapestry-Solutions-Reviews-E107604.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/tapestry-solutions/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/Fn7rXUb6tAEqmEx57",
      },
    ],
  },
  whiteFoxDefense: {
    displayName: "WhiteFox Defense",
    websiteUrl: "https://www.whitefoxdefense.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/WhiteFox-Defense-Technologies-Reviews-E1831870.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/whitefox-technologies-limited/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/Tu7JwevNajb9sFFj7",
      },
    ],
  },
  trihydroCorporation: {
    displayName: "Trihydro Corporation",
    websiteUrl: "https://www.trihydro.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Trihydro-Reviews-E415353.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/trihydro-corporation/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/r24Q8J7qZXTZX3L18",
      },
    ],
  },
  transunion: {
    displayName: "Transunion",
    websiteUrl: "https://www.transunion.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/TransUnion-Reviews-E11441.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/transunion/jobs/",
  },
  sriInternational: {
    displayName: "SRI International",
    websiteUrl: "https://www.sri.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/SRI-International-Reviews-E3389.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/sri-international/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/yHUXa6Fo4ofbLL1Z8",
      },
    ],
  },
  silvertracSoftware: {
    websiteUrl: "https://www.silvertracsoftware.com/",
    displayName: "Silvertrac Software",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Silvertrac-Reviews-E3102205.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/silver-trac-software-inc/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://g.page/Silvertrac?share",
      },
    ],
  },
  roopairs: {
    websiteUrl: "https://www.roopairs.com/",
    displayName: "Roopairs",
    linkedInJobsUrl: "https://www.linkedin.com/company/goroopairs/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://g.page/roopairs?share",
      },
    ],
  },
  publicisSapient: {
    websiteUrl: "https://www.publicissapient.com/",
    displayName: "Publicis Sapient",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Publicis-Sapient-Reviews-E1646026_P2.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/publicissapient/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/a6EQzUv9rFRmaBQh9",
      },
    ],
  },
  postalIo: {
    websiteUrl: "https://postal.io/",
    displayName: "Postal.io",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Postal-io-Reviews-E3048879.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/postal-io/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/z1azWFZsiCBYZY2s7",
      },
    ],
  },
  mindbody: {
    websiteUrl: "https://www.mindbodyonline.com/",
    displayName: "Mindbody",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Mindbody-Reviews-E319289.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/mindbody/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/tUfwuvc6c9ckWN9P8",
      },
    ],
  },
  matchfire: {
    websiteUrl: "https://matchfire.com/",
    displayName: "Matchfire",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Matchfire-Co-Reviews-E1047702.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/matchfire-co-/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/np4uZSMrGmqGNmEf6",
      },
    ],
  },
  landGorilla: {
    websiteUrl: "https://landgorilla.com/",
    displayName: "Land Gorilla",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Land-Gorilla-Reviews-E1282056.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/land-gorilla/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/A53fDq1RtE1uE7Ng7",
      },
    ],
  },
  iFixit: {
    websiteUrl: "https://www.ifixit.com/",
    displayName: "iFixit",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/iFixit-Reviews-E625163.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/ifixit/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://g.page/ifixit-san-luis-obispo?share",
      },
    ],
  },
  hortau: {
    websiteUrl: "https://www.hortau.com/",
    displayName: "Hortau",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Hortau-Reviews-E825934.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/hortau/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/1DAUt5qDYypHjPBWA",
      },
    ],
  },
  haptX: {
    websiteUrl: "https://haptx.com/",
    displayName: "HaptX",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/HaptX-Reviews-E1040507.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/haptx/jobs/",
  },
  bounteous: {
    websiteUrl: "https://www.bounteous.com/",
    displayName: "Bounteous",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Bounteous-Reviews-E280921.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/bounteous/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/BHaGvLN6A4b5DEVBA",
      },
    ],
  },
  gaine: {
    websiteUrl: "https://www.gaine.com/",
    displayName: "Gaine",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Gaine-Solutions-Reviews-E429373.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/gaine-solutions-inc/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/qJreVpFzisBnXqBt9",
      },
    ],
  },
  flumeWater: {
    websiteUrl: "https://flumewater.com/",
    displayName: "Flume Water",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Flume-Water-Reviews-E2421543.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/flume-inc./jobs/",
  },
  etnaInteractive: {
    websiteUrl: "https://www.etnainteractive.com/",
    displayName: "Etna Interactive",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Etna-Interactive-Reviews-E466737.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/etna-interactive/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://g.page/EtnaInteractive?share",
      },
    ],
  },
  entegris: {
    websiteUrl: "https://www.entegris.com/",
    displayName: "Entegris",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Entegris-Reviews-E6272.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/entegris/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/ef4PLS5qiAjj1wdi6",
      },
    ],
  },
  empath: {
    websiteUrl: "https://empathunited.com/",
    displayName: "EMPATH",
    linkedInJobsUrl: "https://www.linkedin.com/company/empathunited/jobs/",
  },
  dozuki: {
    websiteUrl: "https://www.dozuki.com/",
    displayName: "Dozuki",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Dozuki-Reviews-E1649615.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/dozuki/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/XLExJLLWwv33L6317",
      },
    ],
  },
  digitalMarketMedia: {
    websiteUrl: "https://www.digitalmarketmedia.com/",
    displayName: "Digital Market Media",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Digital-Market-Media-Reviews-E2956681.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/digital-market-media/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://g.page/digital-market-media?share",
      },
    ],
  },
  bishopPeakTechnology: {
    websiteUrl: "https://bishoppeak.com/",
    displayName: "Bishop Peak Technology",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Bishop-Peak-Technology-Reviews-E2076411.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/bishop-peak-technology/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/YSJCFMhovMD22DBHA",
      },
    ],
  },
  amfMediaGroup: {
    websiteUrl: "https://www.amfmediagroup.com/",
    displayName: "AMF Media Group",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/AMF-Media-Group-Reviews-E333640.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/amfmediagroup/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/sgsEmihPf32f8cDZ7",
      },
    ],
  },
  amazon: {
    websiteUrl:
      "https://www.amazon.jobs/en/locations/san-luis-obispo-california",
    websiteDisplayName: "www.amazon.jobs/...",
    displayName: "Amazon",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Amazon-Reviews-E6036.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/amazon/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/y6827rKwnhNPpJ6m7",
      },
    ],
  },
  allPeople: {
    websiteUrl: "https://www.allpeople.co/",
    displayName: "AllPeople",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/AllPeople-Marketplace-Reviews-E6850419.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/allpeople/jobs/",
  },
  edgeAutonomy: {
    websiteUrl: "https://edgeautonomy.io/",
    displayName: "Edge Autonomy",
    linkedInJobsUrl: "https://www.linkedin.com/company/edgeautonomy/jobs/",
  },
  crystalEngineering: {
    displayName: "Crystal Engineering",
    websiteUrl: "https://www.ametekcalibration.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Crystal-Engineering-Reviews-E904913.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/ametek/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/vRwawV9LZ7w3Bie89",
      },
    ],
  },
  levelStudios: {
    displayName: "Level Studios",
    websiteUrl: "https://level-studios.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/LEVEL-Studios-Reviews-E235464.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/level-studios/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/ZwDPQs43n81shNyx9",
      },
    ],
  },
  treesApp: {
    displayName: "Trees.app",
    websiteUrl: "https://www.trees.app/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Trees-Reviews-E4781348.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/trees-app/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/r1uCCusLHyVk82st5",
      },
    ],
  },
  calPoly: {
    displayName: "Cal Poly",
    websiteDisplayName: "jobs.calpoly.edu/en-us/filter/...",
    websiteUrl:
      "https://jobs.calpoly.edu/en-us/filter/?search-keyword=&category=information%20systems%20%26%20technology",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/CAL-POLY-Reviews-E32744.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/school/california-polytechnic-state-university-san-luis-o/jobs/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/z2T7Vi66FepfRb3u7",
      },
    ],
  },
};
