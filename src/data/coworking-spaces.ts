import { GoogleMapsUrl, SloCitiesType, UrlType } from "./data.types";

type CoworkingSpacesType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  googleMapsLocations?: {
    cityName: SloCitiesType;
    googleMapsUrl: GoogleMapsUrl;
  }[];
};

export const coworkingSpaces: { [key in string]: CoworkingSpacesType } = {
  storyLabs: {
    displayName: "StoryLabs",
    websiteUrl: "https://www.storylabs.work/",
    googleMapsLocations: [
      {
        cityName: "Atascadero",
        googleMapsUrl: "https://goo.gl/maps/rzZqrSWh57js64e78",
      },
    ],
  },
  officeHours: {
    displayName: "Office Hours",
    websiteUrl: "https://www.myofficehours.co/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://maps.app.goo.gl/dE2FKyifhKhsjE8n6",
      },
    ],
  },
  theSandbox: {
    displayName: "THE SANDBOX",
    websiteUrl: "https://thesandboxpaso.com/",
    googleMapsLocations: [
      {
        cityName: "Paso Robles",
        googleMapsUrl: "https://goo.gl/maps/yMchCe8wZMsg3ZWYA",
      },
    ],
  },
  hotHouse: {
    displayName: "Cal Poly HotHouse",
    websiteUrl: "https://cie.calpoly.edu/coworking/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/aCzctP91d2JE1Jnv9",
      },
    ],
  },
  bridgeWorks: {
    displayName: "BridgeWorks Coworking",
    websiteUrl: "https://www.atascaderochamber.org/bridgeworks/",
    googleMapsLocations: [
      {
        cityName: "Atascadero",
        googleMapsUrl: "https://g.page/atascaderochamberofcommerce?share",
      },
    ],
  },
  theLaunchPad: {
    displayName: "The Launch Pad",
    websiteUrl: "https://thelaunchpadsouthcountychambers.com/",
    googleMapsLocations: [
      {
        cityName: "Grover Beach",
        googleMapsUrl: "https://goo.gl/maps/hr84HF41v5nvYpLX8",
      },
      {
        cityName: "Nipomo",
        googleMapsUrl: "https://goo.gl/maps/naR2WXSa5CESX2a26",
      },
    ],
  },
};
