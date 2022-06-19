type TechRecruitersType = {
  displayName: string;
  websiteUrl: string;
  // TODO: validate if it's a valid LinkedIn JOBS link somehow
  linkedInJobsUrl?: string;
};

export const techRecruiters: { [key in string]: TechRecruitersType } = {
  revature: {
    displayName: "Revature",
    websiteUrl: "https://revature.com/",
    linkedInJobsUrl: "https://www.linkedin.com/company/revature/jobs/",
  },
};
