import { SloCitiesType } from "./data.types";

type CoworkingSpacesType = {
  displayName: string;
  websiteUrl: string;
  websiteDisplayName?: string;
  // TODO: validate if it's a valid Google Maps link somehow
  googleMapsLocations?: {
    cityName: SloCitiesType;
    googleMapsUrl: string;
  }[];
};

export const coworkingSpaces: { [key in string]: CoworkingSpacesType } = {
  storyLabs: {
    displayName: "StoryLabs",
    websiteUrl: "https://www.storylabs.work/",
    googleMapsLocations: [
      {
        cityName: "San Luis Obispo",
        googleMapsUrl: "https://goo.gl/maps/dqfcMJe7JxwPbUHr5",
      },
      {
        cityName: "Atascadero",
        googleMapsUrl: "https://goo.gl/maps/rzZqrSWh57js64e78",
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
};
