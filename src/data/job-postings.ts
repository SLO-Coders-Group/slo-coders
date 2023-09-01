import { DateTime } from "luxon";
import { UrlType } from "./data.types";

type JobPostingsType = {
  companyOrCoderName: string;
  jobTitle: string;
  url: UrlType;
  websiteDisplayName?: string;
  description: string;
  datePosted: DateTime | undefined;
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
  //   datePosted: DateTime.fromObject({
  //     year: 2023,
  //     month: 5,
  //     day: 15,
  //   }),
  // },
  // example of someone looking for a job
  // samSmith: {
  //   jobTitle: "Senior Software Engineer",
  //   companyOrCoderName: "Sam Smith",
  //   url: "https://www.google.com",
  //   description: "This is a short description of what I'm looking for.",
  //   datePosted: DateTime.fromObject({
  //     year: 2023,
  //     month: 5,
  //     day: 15,
  //   }),
  // },
  mindbodySoftwareEngineeringManager: {
    jobTitle: "Software Engineering Manager",
    companyOrCoderName: "Mindbody",
    url: "https://co.mindbodyonline.com/careers/opportunities/4242933006",
    description:
      "As an Engineering Manager, you'll be leading a full stack team focused on one of the key opportunities for Mindbody. You'll pursue continuous improvement to help Mindbody achieve its mission: Powering the world's fitness and wellness businesses and connecting them with more consumers, more effectively, than anyone else.",
    datePosted: undefined,
  },
  amazonSeniorSystemsDevelopementEngineerAmSecSensorTelemetryEngineering: {
    jobTitle:
      "Senior Systems Developement Engineer, AmSec Sensor & Telemetry Engineering",
    companyOrCoderName: "Amazon",
    url: "https://www.amazon.jobs/en/jobs/2401562/senior-systems-developement-engineer-amsec-sensor-telemetry-engineering",
    description:
      "We are looking for a Systems Development Engineer who is excited about designing and building solutions to solve challenging problems and ensure the trust our customers have in us is maintained. We run a mix of commercial and in-house developed tools that collect telemetry across the network and make it available for consumption for security teams to make data-driven decisions.",
    datePosted: DateTime.fromObject({
      year: 2023,
      month: 7,
      day: 7,
    }),
  },
  amazonAwsSrSecurityEngineerCorporateArchitectureAndDesignAmazonSecurityCorporateArchitectureAndDesign:
    {
      jobTitle:
        "AWS Sr. Security Engineer (Corporate Architecture and Design), Amazon Security Corporate Architecture and Design",
      companyOrCoderName: "Amazon",
      url: "https://www.amazon.jobs/en/jobs/2424159/aws-sr-security-engineer-corporate-architecture-and-design-amazon-security-corporate-architecture-and-design",
      description:
        "AWS is looking for Security Engineers to ensure that our infrastructure operates to the highest standards required to maintain and enhance internal and external customer trust. If you enjoy data engineering & architecture, building machine learning models, operationalizing SIEM-based COTS products, and are skilled at investigating security issues and new threat scenarios, this position will provide you with a challenging opportunity to work alongside world-class talent in solving complex and far-reaching problems. A successful candidate will have a good mix of deep technical knowledge and a demonstrated background in Security Detections Engineering, Data Architecture, and Security Analytics.",
      datePosted: DateTime.fromObject({
        year: 2023,
        month: 7,
        day: 17,
      }),
    },
  amazonJrSoftwareDevelopmentEngineer: {
    jobTitle: "Jr. Software Development Engineer",
    companyOrCoderName: "Amazon",
    url: "https://www.amazon.jobs/en/jobs/2422818/jr-software-development-engineer",
    description:
      "Amazon is looking for a highly-motivated Jr. Software Development Engineer (SDE)! Jr. SDEs write real software and collaborate with experienced software engineers who provide guidance and opportunities for ownership on projects that matter to our customers. As a year-round intern, Jr. SDEs become fully integrated into their teams and regularly contribute to impactful deliverables. Your design and code will contribute to solving some of Amazon's most complex technical challenges.",
    datePosted: DateTime.fromObject({
      year: 2023,
      month: 8,
      day: 14,
    }),
  },
  amazonItSupportEngineerI: {
    jobTitle: "IT Support Engineer I",
    companyOrCoderName: "Amazon",
    url: "https://www.amazon.jobs/en/jobs/2403593/it-support-engineer-i",
    description:
      "Amazon is seeking bright, adaptable, and hardworking applicants to join our IT Services organization as an IT Support Engineer. IT Support Engineers work with Amazonians to provide and support the IT equipment and services that are used every day. We treat Amazon employees as our customers and provide timely, accurate, and professional assistance.",
    datePosted: DateTime.fromObject({
      year: 2023,
      month: 7,
      day: 2,
    }),
  },
  calPolySoftwareEngineer: {
    jobTitle: "Software Engineer",
    companyOrCoderName: "Cal Poly",
    url: "https://jobs.calpoly.edu/en-us/job/512565/software-engineer",
    description:
      "Cal Poly Information Technology Services has an open opportunity for Software Engineer. Come join our Application Engineering team as we continue our journey of modernizing our stack, migrating to AWS, and delivering excellent software products and services to our campus customers.",
    datePosted: DateTime.fromObject({
      year: 2023,
      month: 7,
      day: 25,
    }),
  },
  calPolyBusinessIntelligenceEngineer: {
    jobTitle: "Business Intelligence Engineer",
    companyOrCoderName: "Cal Poly",
    url: "https://jobs.calpoly.edu/en-us/job/529803/business-intelligence-engineer",
    description:
      "Join our team as a Business Intelligence Engineer and make a significant impact on our campus enterprise. In this role, you will design, develop, and maintain our data analytics platform, collaborating with stakeholders to determine requirements, perform data analysis, and create data pipelines. Key responsibilities include building and maintaining data sources, dashboards, and integrating applications with our computing infrastructure. Join us and drive our institution's data-driven decision-making.",
    datePosted: DateTime.fromObject({
      year: 2023,
      month: 8,
      day: 7,
    }),
  },
  calEnterpriseApplicationsErpEngineerLead: {
    jobTitle: "Enterprise Applications (ERP) Engineer - Lead",
    companyOrCoderName: "Cal Poly",
    url: "https://jobs.calpoly.edu/en-us/job/528544/enterprise-applications-erp-engineer-lead",
    description:
      "Join our team and take charge of designing, developing, and maintaining campus enterprise applications, with a focus on PeopleSoft. You'll lead the Enterprise Applications Engineering team, ensuring smooth operations, delivering excellent customer service, and managing projects and escalations. Your expertise in integrating applications with our computing infrastructure and managing critical systems will be crucial. Join us and make an impact today!",
    datePosted: DateTime.fromObject({
      year: 2023,
      month: 6,
      day: 21,
    }),
  },
};
