import { IMAGES } from "../../Assets/Assets";

export const EXPERIENCE = [
  {
    title: "Front-End Web Content Manager & Developer",
    company: "LQ Digital",
    location: "Emeryville, CA",
    dates: "April 2016 – September 2016",
    skills: "HTML/CSS, Ruby, JavaScript",
    description: [
      "Developed ruby script to simplify content workflow from 4 hours to 15 minutes",
      "Produced and re-designed various websites for new promotions using HTML and CSS",
    ],
    image: (
      <img
        src={IMAGES.lqdigital}
        alt="lq digital"
        className="img-responsive fullWidth no-mar-top"
      />
    ),
  },
  {
    title: "Technology Consultant | General IT Assistant",
    company: "SFSU I.T. Department (ITS) & College of Education I.T. (POETS)",
    location: "San Francisco, CA",
    dates: "Feb 2015 – April 2016",
    skills: "Drupal CMS, HTML/CSS, JavaScript (jQuery)",
    description: [
      "Led faculty training in Drupal CMS practices, development, and deployment",
      "Validated Drupal websites to ensure proper accessibility requirements for disability",
      "Oversaw and assisted with fixing various websites issues using web tools, HTML, and CSS",
      "Developed video prototype for instructor/student interaction using JavaScript, jQuery, HTML, and CSS",
    ],
    image: (
      <img
        src={IMAGES.sfsu}
        alt="sfsu"
        className="img-responsive fullWidth no-mar-top"
      />
    ),
  },
  {
    title: "Front-End Web Content Developer",
    company: "Gap Inc.",
    location: "San Francisco, CA",
    dates: "September 2016 – November 2020",
    skills:
      "React JS, HTML/CSS, JavaScript (jQuery), Salesforce B2C Development, Front-End Design",
    description: [
      "Developed HTML/CSS campaign template creator using React JS",
      "Pioneering new front-end Salesforce CMS process and site templating for Gap EU/UK",
      "Launching bi-monthly marketing campaigns using HTML/CSS for engaging customer experience",
      "Developed Google scripts to simplify workflow resulting in a 50% increase in productivity",
      "Consulting with brand partners and coding HTML for optimal site performance and customer experience",
    ],
    image: (
      <img
        src={IMAGES.gapinc}
        alt="gap inc"
        className="img-responsive fullWidth no-mar-top"
      />
    ),
  },
  {
    title: "Front-End Software Engineer",
    company: "PatientsLikeMe, LLC.",
    location: "Greater Boston (remote)",
    dates: "Nov 2020 – Aug 2021",
    skills:
      "React JS, HTML/CSS, JavaScript, HAML, Ruby, Rails, SASS, Bootstrap, Jest/Enzyme, Git",
    description: [
      "Developing features for PLM website using React, React Context, and Bootstrap library",
      "Implement architectural and design patterns for flagship site, React component library, and Sass node modules",
      "Working closely with product development to determine scope, breakdown, and sequencing of proposed features",
      "Organized and lead scrum master meetings for team",
      "Conducting peer code reviews using Git and necessary code pairing",
    ],
    image: (
      <img
        src={IMAGES.patientslikeme_logo}
        alt=""
        className="img-responsive fullWidth no-mar-top"
      />
    ),
  },
  {
    title: "Front-End Software Engineer",
    company: "DataRobot",
    location: "Greater Boston (remote)",
    dates: "Aug 2021 - Present",
    skills: "React JS, JavaScript, JEST, Cypress E2E, React-Query, TypeScript",
    description: [
      "Developing, maintaining, and upgrading various features for our SaaS product",
      "Developing, maintaining, and upgrading various features and aspects of in-house design-system",
      "Implement architectural and design patterns for the flagship site, React component library, and other node modules",
      "Working closely with product development to determine the scope, breakdown, and sequencing of proposed features",
      "Conducting peer code reviews using Git and necessary code pairing",
    ],
    image: (
      <img
        src={IMAGES.datarobot_logo}
        alt=""
        className="img-responsive fullWidth no-mar-top"
      />
    ),
  },
];
