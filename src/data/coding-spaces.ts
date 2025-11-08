import { SloCitiesType, UrlType } from "./data.types";

type CodingSpacesType = {
  displayName: string;
  websiteUrl: UrlType;
  cityNames: SloCitiesType[];
};

export const codingSpaces: { [key in string]: CodingSpacesType } = {
  hotHouse: {
    displayName: "Cal Poly HotHouse",
    websiteUrl: "https://cie.calpoly.edu/coworking/",
    cityNames: ["San Luis Obispo"],
  },
  fieldDay: {
    displayName: "Field Day Coffee",
    websiteUrl: "https://www.fielddaycoffee.com/",
    cityNames: ["San Luis Obispo"],
  },
  twentySouth: {
    displayName: "Twenty South Coffee",
    websiteUrl: "https://www.twentysouth.co/",
    cityNames: ["San Luis Obispo"],
  },
  scoutCoffee: {
    displayName: "Scout Coffee",
    websiteUrl: "https://scoutcoffeeco.com/",
    cityNames: ["San Luis Obispo", "Morro Bay"],
  },
};
