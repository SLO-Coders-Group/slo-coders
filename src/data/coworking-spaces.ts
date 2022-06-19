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
    googleMapsUrls: ["https://goo.gl/maps/dqfcMJe7JxwPbUHr5"],
  },
};
