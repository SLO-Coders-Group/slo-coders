import { LinkedInJobsUrlType, UrlType } from "./data.types";

type RecruitersType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  linkedInJobsUrl?: LinkedInJobsUrlType;
};

export const recruiters: { [key in string]: RecruitersType } = {
  revature: {
    displayName: "Revature",
    websiteUrl: "https://revature.com/",
    linkedInJobsUrl: "https://www.linkedin.com/company/revature/jobs/",
  },
};
