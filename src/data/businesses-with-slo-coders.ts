import {
  GlassdoorReviewUrlType,
  LinkedInJobsUrlType,
  UrlType,
} from "./data.types";

type BusinessesWithCodersType = {
  displayName: string;
  websiteUrl: UrlType;
  websiteDisplayName?: string;
  glassdoorReviewsUrl?: GlassdoorReviewUrlType;
  linkedInJobsUrl?: LinkedInJobsUrlType;
};

export const businessesWithCoders: {
  [key in string]: BusinessesWithCodersType;
} = {
  costco: {
    displayName: "Costco Wholesale",
    websiteUrl: "https://www.costco.com/job-opportunities.html",
    websiteDisplayName: "www.costco.com/job-opportunities...",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Costco-Wholesale-Reviews-E2590.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/costco-wholesale/jobs/",
  },
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
  surePrep: {
    displayName: "SurePrep",
    websiteUrl: "https://corp.sureprep.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/SurePrep-Reviews-E355917.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/sureprep-llc/jobs/",
  },
};
