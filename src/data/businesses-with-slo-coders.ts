import { SloCitiesType } from "./data.types";

type BusinessesWithCodersType = {
  displayName: string;
  websiteUrl: string;
  websiteDisplayName?: string;
  // TODO: validate if it's a valid Glassdoor REVIEW link somehow
  glassdoorReviewsUrl?: string;
  // TODO: validate if it's a valid LinkedIn JOBS link somehow
  linkedInJobsUrl?: string;
};

export const businessesWithCoders: {
  [key in string]: BusinessesWithCodersType;
} = {
  instagram: {
    displayName: "Instagram (Meta)",
    websiteUrl: "https://about.instagram.com/about-us/careers",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Employee-Review-Meta-RVW9408902.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/jobs/search/?currentJobId=3168111817&f_C=2289109&geoId=92000000",
  },
  stella: {
    displayName: "STELLA Automotive AI (Telepathy Labs)",
    websiteUrl: "https://www.stellaautomotive.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Telepathy-Labs-Reviews-E2383350.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/stella-automotive-ai/jobs/",
  },
};
