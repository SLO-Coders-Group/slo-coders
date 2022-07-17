import { UrlType } from "./data.types";

type LocalLearningResourcesType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  description: string;
};

export const localLearningResources: {
  [key in string]: LocalLearningResourcesType;
} = {
  codeSlo: {
    displayName: "CodeSLO",
    websiteUrl: "https://codeslo.com/",
    description:
      "CodeSLO is a local company that makes learning to code as  accessible as possible for the Central Coast and beyond and focuses on an inclusive model of coding instruction.",
  },
  calPolySoftwareEngineering: {
    displayName: "Cal Poly Software Engineering",
    websiteUrl: "https://www.calpoly.edu/major/software-engineering",
    description:
      "Interested in getting a degree? Cal Poly has a Software Engineering major.",
  },
  calPolyCodingBootcamp: {
    displayName: "Cal Poly Coding Bootcamp",
    websiteUrl: "https://bootcamp-extended.calpoly.edu/programs/coding",
    description:
      "A 12-26 week Cal Poly extended education coding program. No prior coding experience necessary!",
  },
};
