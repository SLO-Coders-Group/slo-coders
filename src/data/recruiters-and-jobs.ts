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
    linkedInJobsUrl:
      "https://www.linkedin.com/jobs/search/?currentJobId=3130313945&distance=25.0&f_WT=1%2C3&geoId=107133267&keywords=developer&location=San%20Luis%20Obispo%20County%2C%20California%2C%20United%20States&refresh=true",
  },
};
