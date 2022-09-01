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
  akamai: {
    displayName: "Akamai Technologies",
    websiteUrl: "https://www.akamai.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Akamai-Reviews-E9219.htm",
    linkedInJobsUrl:
      "https://www.linkedin.com/company/akamai-technologies/jobs/",
  },
  costco: {
    displayName: "Costco Wholesale",
    websiteUrl: "https://www.costco.com/job-opportunities.html",
    websiteDisplayName: "www.costco.com/job-opportunities...",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Costco-Wholesale-Reviews-E2590.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/costco-wholesale/jobs/",
  },
  meta: {
    displayName: "Meta",
    websiteUrl: "https://www.metacareers.com/",
    glassdoorReviewsUrl:
      "https://www.glassdoor.com/Reviews/Meta-Reviews-E40772.htm",
    linkedInJobsUrl: "https://www.linkedin.com/company/meta/jobs/",
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
