type RecruitersAndJobsType = {
  displayName: string;
  websiteUrl: string;
  websiteDisplayName?: string;
  // TODO: validate if it's a valid LinkedIn JOBS link somehow
  linkedInJobsUrl?: string;
};

export const recruitersAndJobs: { [key in string]: RecruitersAndJobsType } = {
  revature: {
    displayName: "Revature",
    websiteUrl: "https://revature.com/",
    linkedInJobsUrl: "https://www.linkedin.com/company/revature/jobs/",
  },
  linkedIn: {
    displayName: "LinkedIn Jobs",
    websiteUrl:
      "https://www.linkedin.com/jobs/search/?currentJobId=3130313945&distance=25.0&f_WT=1%2C3&geoId=107133267&keywords=developer&location=San%20Luis%20Obispo%20County%2C%20California%2C%20United%20States&refresh=true",
    websiteDisplayName: "www.linkedin.com/jobs/search/...",
  },
  indeed: {
    displayName: "Indeed",
    websiteDisplayName: "www.indeed.com/jobs?q=developer...",
    websiteUrl:
      "https://www.indeed.com/jobs?q=developer&l=San%20Luis%20Obispo%20County%2C%20CA&vjk=1b45df19adc4ca0e",
  },
  glassdoorJobs: {
    displayName: "Glassdoor Jobs",
    websiteDisplayName: "www.glassdoor.com/Job/san-luis-obispo...",
    websiteUrl:
      "https://www.glassdoor.com/Job/san-luis-obispo-developer-jobs-SRCH_IL.0,15_IC1147458_KO16,25.htm",
  },
  simplyHired: {
    displayName: "SimplyHired",
    websiteDisplayName: "www.simplyhired.com/search...",
    websiteUrl:
      "https://www.simplyhired.com/search?q=developer&l=San+Luis+Obispo%2C+CA&job=7-sqcHjMXvXA9nxlBZV_O2aRUR-k-5WvUjmTrrdLxxKMRmOtJgSEJg",
  },
};
