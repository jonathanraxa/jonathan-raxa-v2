import { ExperienceData } from "@/types";
import sfsuLogo from "@/assets/img/companies/sfsulogo.png";
import plm from "@/assets/img/companies/plm.svg";
import lqdigital from "@/assets/img/companies/lq-logo.svg";
import gapinc from "@/assets/img/companies/gaplogo.svg";
import datarobot from "@/assets/img/companies/datarobot.svg";
import halcyon from "@/assets/img/companies/halcyon.svg";
import halcyonDarkText from "@/assets/img/companies/halcyon-dark-text.svg";

// Years of experience, calculated so the site never goes stale
const WEB_DEV_START_YEAR = 2016;
const REACT_START_YEAR = 2020;
const currentYear = new Date().getFullYear();
export const webDevYears = currentYear - WEB_DEV_START_YEAR;
export const reactYears = currentYear - REACT_START_YEAR;

export const sfsuExperienceData: ExperienceData = {
  company: "San Francisco State University",
  location: "San Francisco, CA",
  companySummary: "Higher education institution based in San Francisco.",
  positionSummary:
    "Assisted faculty with various IT- and website-related issues.",
  title: "General Information Technology Assistant and Web Content Developer",
  start: "Jun 2012",
  end: "Feb 2016",
  duties: [
    "• Led faculty training in Drupal CMS practices, development, and deployment, allowing staff to update content on the Drupal website.",
    "• Validated and fixed Drupal websites to ensure proper accessibility requirements for disability, reducing accessibility inconsistencies to comply with A11y standards by 100%.",
    "• Eliminated 100% of website issues on Drupal sites by overseeing and assisting with fixes using web tools, HTML, and CSS.",
    "• Developed video prototype for instructor and student interaction using JavaScript, jQuery, HTML, and CSS.",
  ],
  companyLogo: sfsuLogo,
  backgroundColor: "#2b286e",
};

export const halcyonExperienceData: ExperienceData = {
  company: "Halcyon",
  location: "Austin, TX",
  companySummary:
    "Cyber resilience platform that Global 2000 companies rely on to defeat ransomware, with fast endpoint recovery and data extortion prevention.",
  positionSummary:
    "Frontend engineer on Halcyon's cyber resilience platform, owning several projects end to end. Builds accessible, well-tested features with React and TypeScript, writes end-to-end tests with Playwright, and uses Claude AI to work more productively.",
  title: "Front End Engineer",
  start: "Nov 2025",
  end: "Present",
  duties: [],
  companyLogo: halcyon,
  companyLogoOnLight: halcyonDarkText,
  backgroundColor: "#003058",
};

export const dataRobotExperienceData: ExperienceData = {
  company: "DataRobot",
  location: "Boston, MA",
  companySummary:
    "Enterprise software provider specializing in automated machine learning solutions, helping organizations streamline development and deployment of predictive models.",
  positionSummary:
    "As part of the Core UI team, contributed to the development and maintenance of key features in a React-based SaaS application and its proprietary design system, improving stability and accelerating feature delivery through effective use of Node, React, JavaScript, Cypress, CI/CD pipelines, Harness, and Git/GitHub.",
  title: "Frontend Software Engineer",
  start: "Aug 2021",
  end: "May 2025",
  duties: [
    "• Helped lead the effort in converting the in-house design system codebase to TypeScript, improving developer productivity by 50%.",
    "• Conducted peer code reviews, paired programming sessions using Git, championed best practices, and reduced product bugs by at least 15%.",
    "• Transitioned API state management to React Query, reducing data synchronization complexity by 50% and standardizing HTTP caching practices.",
    "• Collaborated cross-functionally with design, product, and development teams to build and launch key UI features, increasing user engagement by 10%.",
    "• Utilized Jest for unit testing, and Cypress for regression and user acceptance testing, ensuring test coverage by at least 95% while enhancing testing processes and improving overall code quality for the application.",
  ],
  companyLogo: datarobot,
  backgroundColor: "#81fba5",
};

export const plmExperienceData: ExperienceData = {
  company: "PatientsLikeMe",
  location: "Boston, MA",
  companySummary:
    "A digital health company providing a platform for patients to share health experiences, track conditions, and discover treatment options through peer support and real-world data.",
  positionSummary:
    "Enhanced a large-scale platform's frontend by developing and maintaining core user-facing features using React and CSS (SASS), ensuring high-quality performance validated through Jest testing.",
  title: "Frontend Software Engineer",
  start: "Nov 2020",
  end: "Aug 2021",
  duties: [
    "• Increased user engagement by 10% by resolving critical bugs in the platform's core functionalities, implementing and debugging features utilizing React, React Context, and Bootstrap.",
    "• Collaborated with hiring managers to conduct design candidate interviews and assess fit against team needs.",
  ],
  companyLogo: plm,
  backgroundColor: "#ffde7c",
};
export const gapExperienceData: ExperienceData = {
  company: "GAP Inc.",
  location: "San Francisco, CA",
  companySummary:
    "Popular U.S. clothing retailer selling clothes online and in stores.",
  positionSummary:
    "Drove customer engagement and sales growth by launching bi-monthly marketing campaigns leveraging HTML and CSS, promoting collaboration among stakeholders.",
  title: "Frontend Web Content Developer",
  start: "Sep 2016",
  end: "Nov 2020",
  duties: [
    "• Achieved a 50% increase in work productivity through the development of a small React-based promo and message generator application that leverages HTML and CSS for Salesforce CMS, promoting effective collaboration.",
    "• Pioneered a new front-end Salesforce CMS (SFCC) process and site templating utilizing HTML and CSS for Gap EU/UK, streamlining content management efficiency by 50%.",
    "• Achieved a 50% increase in productivity by developing Google scripts that generate HTML and CSS within Google Docs, which simplified workflow and enabled project managers to bypass work requests for a developer.",
  ],
  companyLogo: gapinc,
  backgroundColor: "#adc9ff",
};
export const lqExperienceData: ExperienceData = {
  company: "LQ Digital",
  location: "Emeryville, CA",
  companySummary:
    "Digital marketing agency helping businesses find and convert their best customers.",
  positionSummary:
    "Produced and redesigned various websites for new promotions using HTML and CSS, allowing for a more robust and aesthetically pleasing user experience.",
  title: "Frontend Web Content Developer",
  start: "Feb 2016",
  end: "Sep 2016",
  duties: [
    "• Developed Ruby script to simplify content workflow from four hours to 15 minutes, delivering an increase in productivity.",
    "• Authored a comprehensive user guide for Ruby script featuring step-by-step instructions, annotated screenshots, and terminal code snippets to streamline adoption.",
  ],
  companyLogo: lqdigital,
  backgroundColor: "#d06437",
};

export const allExperiences: ExperienceData[] = [
  halcyonExperienceData,
  dataRobotExperienceData,
  plmExperienceData,
  gapExperienceData,
  lqExperienceData,
  sfsuExperienceData,
];
