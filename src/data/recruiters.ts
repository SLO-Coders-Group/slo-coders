type RecruitersType = {
  displayName: string;
  websiteUrl: string;
  websiteDisplayName?: string;
  // TODO: validate if it's a valid LinkedIn JOBS link somehow
  linkedInJobsUrl?: string;
};

export const recruiters: { [key in string]: RecruitersType } = {
  revature: {
    displayName: "Revature",
    websiteUrl: "https://revature.com/",
    linkedInJobsUrl: "https://www.linkedin.com/company/revature/jobs/",
  },
};
