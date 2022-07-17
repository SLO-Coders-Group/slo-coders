import { UrlType } from "./data.types";

type OnlineLearningResourcesType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  description: string;
};

export const onlineLearningResources: {
  [key in string]: OnlineLearningResourcesType;
} = {
  stackOverflowDeveloperSurvey: {
    displayName: "StackOverflow Developer Survey",
    websiteUrl: "https://survey.stackoverflow.co/2022",
    description:
      "Browse through a massive list of survey results from developers on everything from the most popular online course platforms, languages, IDEs, and version control systems.",
  },
  someBooksToImproveYourCodeAndYourWayOfCoding: {
    displayName: "Books on improving your coding skills",
    websiteUrl:
      "https://medium.com/javarevisited/some-books-to-improve-your-code-nd-your-way-of-coding-d5c1cbbbdf73",
    websiteDisplayName:
      "medium.com/javarevisited/some-books-to-improve-your-code...",
    description:
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” — M. Fowler",
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
  leetCode: {
    displayName: "LeetCode",
    websiteUrl: "https://leetcode.com/",
    description:
      "Prepare for technical interview with over 2350 practice questions.",
  },
};
