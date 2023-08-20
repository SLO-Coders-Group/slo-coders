import { UrlType } from "./data.types";

type LearningResourcesType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  description: string;
};

export const learningResources: {
  [key in string]: LearningResourcesType;
} = {
  codeSlo: {
    displayName: "CodeSLO",
    websiteUrl: "https://www.meetup.com/codeslo/",
    description:
      "CodeSLO is on a mission to teach the Central Coast to code. They work in partnership with local tech companies and educational organizations to offer classes in software engineering and they specialize in teaching beginners.",
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
