import React, { useState } from "react";

const drDuties: string = `
• Helped lead the eﬀort in converXng the in-house design system codebase to TypeScript, improving developer
producXvity by 50%.
• Conducted peer code reviews, paired programming sessions using Git, championed best pracXces, and reduced
product bugs by at least 15%.
• TransiXoned API state management to React Query, reducing data synchronizaXon complexity by 50% and
standardizing HTTP caching pracXces.
• Collaborated cross-funcXonally with design, product, and development teams to build and launch key UI features,
increasing user engagement by 10%.
• UXlized Jest for unit tesXng, and Cypress for regression and user acceptance tesXng, ensuring test coverage by at least
95% while enhancing tesXng processes and improving overall code quality for the applicaXon.
`;

const plmDuties: string = `- Development skills: React JS, HTML/CSS, JavaScript, HAML, Ruby, Rails, SASS, Bootstrap, Jest/Enzyme, Git
- Developing features for PLM website using React, React Context, and Bootstrap library
- Implement architectural and design patterns for flagship site, React component library, and Sass node modules
- Working closely with product development to determine scope, breakdown, and sequencing of proposed features
- Organized and lead scrum master meetings for team
- Conducting peer code reviews using Git and necessary code pairing`;

const gapDuties: string = `- Development skills: React JS, HTML/CSS, JavaScript (jQuery), Salesforce B2C Development, Front-End Design
- Developed HTML/CSS campaign template creator using React JS
- Pioneering new front-end Salesforce CMS process and site templating for Gap EU/UK
- Launching bi-monthly marketing campaigns using HTML/CSS for engaging customer experience
- Developed Google scripts to simplify workflow resulting in a 50% increase in productivity
- Consulting with brand partners and coding HTML for optimal site performance and customer experience`;

const lqDuties: string = `- Development skills: HTML/CSS, Ruby, JavaScript
- Developed ruby script to simplify content workflow from 4 hours to 15 minutes
- Produced and re-designed various websites for new promotions using HTML and CSS`;

const sfsuDuties: string = `- Development skills: Drupal CMS, HTML/CSS, JavaScript (jQuery)
- Led faculty training in Drupal CMS practices, development, and deployment
- Validated Drupal websites to ensure proper accessibility requirements for disability
- Oversaw and assisted with fixing various website issues using web tools, HTML, and CSS
- Developed video prototype for instructor/student interaction using JavaScript, jQuery, HTML, and CSS`;

// TODO: We could iterate through these experiences

export const Experience: React.FC = () => {
  const [currentText, setCurrentText] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyText = (val: string): void => {
    if (
      [
        "dr-duties",
        "plm-duties",
        "gap-duties",
        "lq-duties",
        "sfsu-duties",
      ].includes(val)
    ) {
      switch (val) {
        case "dr-duties":
          navigator.clipboard.writeText(drDuties);
          setCurrentText("DataRobot Duties");
          break;
        case "plm-duties":
          navigator.clipboard.writeText(plmDuties);
          setCurrentText("PLM Duties");
          break;
        case "gap-duties":
          navigator.clipboard.writeText(gapDuties);
          setCurrentText("Gap Duties");
          break;
        case "lq-duties":
          navigator.clipboard.writeText(lqDuties);
          setCurrentText("LQ Duties");
          break;
        case "sfsu-duties":
          navigator.clipboard.writeText(sfsuDuties);
          setCurrentText("SFSU Duties");
          break;
        default:
          break;
      }
      setCopySuccess(true);
    } else {
      navigator.clipboard.writeText(val);
      setCurrentText(val);
      setCopySuccess(true);
    }
  };

  return (
    <div id="experience" className="relative space-y-6">
      <div className="text-center mt-8">
        <h2 className="uppercase text-2xl font-bold">Experience</h2>
      </div>

      {/* DataRobot Block */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <span
              onClick={() => copyText("DataRobot")}
              className=" uppercase cursor-pointer hover:underline text-center"
            >
              <h3 className="text-lg">DataRobot</h3>
            </span>
            <span
              onClick={() => copyText("Greater Boston")}
              className=" cursor-pointer hover:underline text-right"
            >
              <strong>, Boston, MA</strong>
            </span>
          </div>
          <div>
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Aug 2021")}
            >
              Aug 2021
            </span>
            {" - "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("May 2025")}
            >
              May 2025
            </span>
          </div>
        </div>
        <div>
          Enterprise so+ware provider specializing in automated machine learning
          solu7ons, helping organiza7ons streamline development and deployment
          of predic7ve models.
        </div>
        <div>
          <div>
            <span
              onClick={() => copyText("Front-End Software Engineer")}
              className="cursor-pointer hover:underline bold"
            >
              Front End Software Engineer
            </span>
          </div>
          <div>
            As part of the Core UI team, contributed to the development and
            maintenance of key features in a React-based SaaS applicaXon and its
            proprietary design system, improving stability and acceleraXng
            feature delivery through eﬀecXve use of Node, React, JavaScript,
            Cypress, CI/CD pipelines, Harness, and Git/Github.
          </div>
          <ul
            className="mt-2 cursor-pointer hover:underline"
            onClick={() => copyText("dr-duties")}
          >
            <li>
              • Helped lead the effort in converting the in-house design system
              codebase to TypeScript, improving developer productivity by 50%.
            </li>
            <li>
              • Conducted peer code reviews and pair programming sessions using
              Git, championed best practices, and reduced product bugs by at
              least 15%.
            </li>
            <li>
              • Transitioned API state management to React Query, reducing data
              synchronization complexity by 50% and standardizing HTTP caching
              practices.
            </li>
            <li>
              • Collaborated cross-functionally with design, product, and
              development teams to build and launch key UI features, increasing
              user engagement by 10%.
            </li>
            <li>
              • Utilized Jest for unit testing and Cypress for regression and
              user acceptance testing, ensuring test coverage of at least 95%,
              while enhancing testing processes and improving overall code
              quality for the application.
            </li>
          </ul>
        </div>
      </div>

      {/* PatientsLikeMe Block */}
      <div className="mb-6">
        <div className="flex items-center">
          <div className="w-1/6">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Nov 2020")}
            >
              Nov 2020
            </span>
            {" - "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Aug 2021")}
            >
              Aug 2021
            </span>
          </div>
          <div
            onClick={() => copyText("PatientsLikeMe, LLC")}
            className="w-2/3 uppercase cursor-pointer hover:underline text-center"
          >
            <h3 className="text-lg">PatientsLikeMe, LLC</h3>
          </div>
          <div
            onClick={() => copyText("Greater Boston")}
            className="w-1/6 cursor-pointer hover:underline text-right"
          >
            <strong>Greater Boston (remote)</strong>
          </div>
        </div>
        <div>
          <span
            onClick={() => copyText("Front-End Software Engineer")}
            className="cursor-pointer hover:underline"
          >
            Front-End Software Engineer
          </span>
        </div>
        <div>
          <ul
            className="mt-4 cursor-pointer hover:underline"
            onClick={() => copyText("plm-duties")}
          >
            <li>
              <strong className="text-red-500">
                Development skills:&nbsp;
              </strong>
              <i>
                React JS, HTML/CSS, JavaScript, HAML, Ruby, Rails, SASS,
                Bootstrap, Jest/Enzyme, Git
              </i>
            </li>
            <li>
              Developing features for PLM website using React, React Context,
              and Bootstrap library
            </li>
            <li>
              Implement architectural and design patterns for flagship site,
              React component library, and Sass node modules
            </li>
            <li>
              Working closely with product development to determine scope,
              breakdown, and sequencing of proposed features
            </li>
            <li>Organized and lead scrum master meetings for team</li>
            <li>
              Conducting peer code reviews using Git and necessary code pairing
            </li>
          </ul>
        </div>
      </div>

      {/* Gap Inc. Block */}
      <div className="mb-6">
        <div className="flex items-center">
          <div className="w-1/6">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Sep 2016")}
            >
              Sep 2016
            </span>
            {" - "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Nov 2020")}
            >
              Nov 2020
            </span>
          </div>
          <div
            onClick={() => copyText("Gap Inc.")}
            className="w-2/3 uppercase cursor-pointer hover:underline text-center"
          >
            <h3 className="text-lg">Gap Inc.</h3>
          </div>
          <div
            onClick={() => copyText("San Francisco, CA")}
            className="w-1/6 cursor-pointer hover:underline text-right"
          >
            <strong>San Francisco, CA</strong>
          </div>
        </div>
        <div>
          <span
            onClick={() => copyText("Front-End Web Content Developer")}
            className="cursor-pointer hover:underline"
          >
            Front-End Web Content Developer
          </span>
        </div>
        <div>
          <ul
            className="mt-4 cursor-pointer hover:underline"
            onClick={() => copyText("gap-duties")}
          >
            <li>
              <strong className="text-red-500">
                Development skills:&nbsp;
              </strong>
              <i>
                React JS, HTML/CSS, JavaScript (jQuery), Salesforce B2C
                Development, Front-End Design
              </i>
            </li>
            <li>Developed HTML/CSS campaign template creator using React JS</li>
            <li>
              Pioneering new front-end Salesforce CMS process and site
              templating for Gap EU/UK
            </li>
            <li>
              Launching bi-monthly marketing campaigns using HTML/CSS for
              engaging customer experience
            </li>
            <li>
              Developed Google scripts to simplify workflow resulting in a 50%
              increase in productivity
            </li>
            <li>
              Consulting with brand partners and coding HTML for optimal site
              performance and customer experience
            </li>
          </ul>
        </div>
      </div>

      {/* LQ Digital Block */}
      <div className="mb-6">
        <div className="flex items-center">
          <div className="w-1/6">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Feb 2016")}
            >
              Feb 2016
            </span>
            {" - "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Sep 2016")}
            >
              Sep 2016
            </span>
          </div>
          <div
            onClick={() => copyText("LQ Digital")}
            className="w-2/3 uppercase cursor-pointer hover:underline text-center"
          >
            <h3 className="text-lg">LQ Digital</h3>
          </div>
          <div
            onClick={() => copyText("Emeryville, CA")}
            className="w-1/6 cursor-pointer hover:underline text-right"
          >
            <strong>Emeryville, CA</strong>
          </div>
        </div>
        <div>
          <span
            onClick={() =>
              copyText("Front-End Web Content Manager / Developer")
            }
            className="cursor-pointer hover:underline"
          >
            Front-End Web Content Manager / Developer
          </span>
        </div>
        <div>
          <ul
            className="mt-4 cursor-pointer hover:underline"
            onClick={() => copyText("lq-duties")}
          >
            <li>
              <strong className="text-red-500">
                Development skills:&nbsp;
              </strong>
              HTML/CSS, Ruby, JavaScript
            </li>
            <li>
              Developed ruby script to simplify content workflow from 4 hours to
              15 minutes
            </li>
            <li>
              Produced and re-designed various websites for new promotions using
              HTML and CSS
            </li>
          </ul>
        </div>
      </div>

      {/* SFSU I.T.s and COE Block */}
      <div className="mb-6">
        <div className="flex items-center">
          <div className="w-1/6">
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Jun 2012")}
            >
              Jun 2012
            </span>
            {" - "}
            <span
              className="cursor-pointer hover:underline"
              onClick={() => copyText("Feb 2016")}
            >
              Feb 2016
            </span>
          </div>
          <div
            onClick={() =>
              copyText(
                "SFSU I.T. Department (ITS) | College of Education I.T. (POETS)",
              )
            }
            className="w-2/3 uppercase cursor-pointer hover:underline text-center"
          >
            <h3 className="text-lg">
              SFSU I.T. Department (ITS) | College of Education I.T. (POETS)
            </h3>
          </div>
          <div
            onClick={() => copyText("San Francisco, CA")}
            className="w-1/6 cursor-pointer hover:underline text-right"
          >
            <strong>San Francisco, CA</strong>
          </div>
        </div>
        <div>
          <span
            onClick={() =>
              copyText("Technology Consultant | General IT Assistant")
            }
            className="cursor-pointer hover:underline"
          >
            Technology Consultant | General IT Assistant
          </span>
        </div>
        <div>
          <ul
            className="mt-4 cursor-pointer hover:underline"
            onClick={() => copyText("sfsu-duties")}
          >
            <li>
              <strong className="text-red-500">
                Development skills:&nbsp;
              </strong>
              Drupal CMS, HTML/CSS, JavaScript (jQuery)
            </li>
            <li>
              Led faculty training in Drupal CMS practices, development, and
              deployment
            </li>
            <li>
              Validated Drupal websites to ensure proper accessibility
              requirements for disability
            </li>
            <li>
              Oversaw and assisted with fixing various website issues using web
              tools, HTML, and CSS
            </li>
            <li>
              Developed video prototype for instructor/student interaction using
              JavaScript, jQuery, HTML, and CSS
            </li>
          </ul>
        </div>
      </div>

      {/* Copy Alert */}
      {copySuccess && (
        <button
          onClick={() => setCopySuccess(false)}
          className="bg-black text-white text-lg py-2 px-4 rounded flex justify-center items-center mx-auto my-2 opacity-70"
        >
          Copied&nbsp;
          <span>
            <i>{currentText}</i>
          </span>
        </button>
      )}
    </div>
  );
};
