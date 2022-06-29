type LearningResourcesType = {
  displayName: string;
  websiteUrl: string;
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
    description:
      "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” — M. Fowler",
  },
};
