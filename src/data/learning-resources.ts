type LearningResourcesType = {
  displayName: string;
  websiteUrl: string;
  websiteDisplayName?: string;
  description: string;
};

export const learningResources: { [key in string]: LearningResourcesType } = {
  codeSlo: {
    displayName: "CodeSLO",
    websiteUrl: "https://codeslo.com/",
    description:
      "CodeSLO is a local company that makes learning to code as  accessible as possible for the Central Coast and beyond and focuses on an inclusive model of coding instruction.",
  },
  stackOverflowDeveloperSurvey: {
    displayName: "StackOverflow Developer Survey",
    websiteUrl: "https://survey.stackoverflow.co/2022",
    description:
      "Browse through a massive list of survey results from developers on everything from the most popular online course platforms, languages, IDEs, and version control systems.",
  },
  someBooksToImproveYourCodeAndYourWayOfCoding: {
    displayName: "Some Books to Improve Your Code and Your Way of Coding",
    websiteUrl:
      "https://medium.com/javarevisited/some-books-to-improve-your-code-nd-your-way-of-coding-d5c1cbbbdf73",
    websiteDisplayName:
      "medium.com/javarevisited/some-books-to-improve-your-code...",
    description:
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” — M. Fowler",
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
  w3Schools: {
    displayName: "W3Schools",
    websiteUrl: "https://www.w3schools.com/",
    description:
      "W3Schools is an online free school for web developers. This is a great beginner place to start.",
  },
  freeCodeCamp: {
    displayName: "freeCodeCamp",
    websiteUrl: "https://www.freecodecamp.org/",
    description:
      "freeCodeCamp is free and has thousands of videos, articles, and interactive coding lessons.",
  },
  codeAcademy: {
    displayName: "Codecademy",
    websiteUrl: "https://www.codecademy.com/",
    description:
      "If you are looking for a paid course platform with more features than the free ones listed, then check out Codecademy.",
  },
  medium: {
    displayName: "Medium - Programming",
    websiteUrl: "https://medium.com/tag/programming",
    description:
      "One of the best ways to stay up-to-date with the latest and greatest is to read coding articles on Medium.",
  },
};
