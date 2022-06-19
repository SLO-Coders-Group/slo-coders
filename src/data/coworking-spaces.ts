type CoworkingSpacesType = {
  displayName: string;
  websiteUrl: string;
  // TODO: validate if it's a valid Google Maps link somehow
  googleMapsUrls?: string[];
};

export const coworkingSpaces: { [key in string]: CoworkingSpacesType } = {
  storyLabs: {
    displayName: "StoryLabs",
    websiteUrl: "https://www.storylabs.work/",
    googleMapsUrls: [
      "https://goo.gl/maps/dqfcMJe7JxwPbUHr5",
      "https://goo.gl/maps/rzZqrSWh57js64e78",
    ],
  },
  theSandbox: {
    displayName: "THE SANDBOX",
    websiteUrl: "https://thesandboxpaso.com/",
    googleMapsUrls: ["https://goo.gl/maps/yMchCe8wZMsg3ZWYA"],
  },
};
