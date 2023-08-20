import { UrlType } from "./data.types";

type JobPostingsType = {
  companyOrCoderName: string;
  jobTitle: string;
  url: UrlType;
  websiteDisplayName?: string;
  description: string;
  datePosted: string;
};

export const jobPostings: {
  [key in string]: JobPostingsType;
} = {
  // example job posting
  // companyName: {
  //   jobTitle: "Senior Software Engineer",
  //   companyOrCoderName: "Company Name",
  //   url: "https://www.google.com",
  //   description: "This is a short description of my job posting.",
  //   datePosted: "Saturday August 19th, 2023",
  // },
  // example of someone looking for a job
  // samSmith: {
  //   jobTitle: "Senior Software Engineer",
  //   companyOrCoderName: "Sam Smith",
  //   url: "https://www.google.com",
  //   description: "This is a short description of what I'm looking for.",
  //   datePosted: "Saturday August 19th, 2023",
  // },
};
