import React, { useState } from "react";

const Experience = () => {
  const [currentText, setCurrentText] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const drDuties = `
- Development skills: React JS, JavaScript, JEST, Cypress E2E, React-Query, TypeScript
- Developing, maintaining, and upgrading various features for our SaaS product
- Developing, maintaining, and upgrading various features and aspects of in-house design-system
- Implement architectural and design patterns for the flagship site, React component library, and other node modules
- Working closely with product development to determine the scope, breakdown, and sequencing of proposed features
- Conducting peer code reviews using Git and necessary code pairing
`;
  const plmDuties = `- Development skills: React JS, HTML/CSS, JavaScript, HAML, Ruby, Rails, SASS, Bootstrap, Jest/Enzyme, Git
- Developing features for PLM website using React, React Context, and Bootstrap library
- Implement architectural and design patterns for flagship site, React component library, and Sass node modules
- Working closely with product development to determine scope, breakdown, and sequencing of proposed features
- Organized and lead scrum master meetings for team
- Conducting peer code reviews using Git and necessary code pairing`;
  const gapDuties = `- Development skills: React JS, HTML/CSS, JavaScript (jQuery), Salesforce B2C Development, Front-End Design
- Developed HTML/CSS campaign template creator using React JS
- Pioneering new front-end Salesforce CMS process and site templating for Gap EU/UK
- Launching bi-monthly marketing campaigns using HTML/CSS for engaging customer experience
- Developed Google scripts to simplify workflow resulting in a 50% increase in productivity
- Consulting with brand partners and coding HTML for optimal site performance and customer experience`;
  const lqDuties = `- Development skills: HTML/CSS, Ruby, JavaScript
- Developed ruby script to simplify content workflow from 4 hours to 15 minutes
- Produced and re-designed various websites for new promotions using HTML and CSS`;
  const sfsuDuties = `- Development skills: Drupal CMS, HTML/CSS, JavaScript (jQuery)
- Led faculty training in Drupal CMS practices, development, and deployment
- Validated Drupal websites to ensure proper accessibility requirements for disability
- Oversaw and assisted with fixing various websites issues using web tools, HTML, and CSS
- Developed video prototype for instructor/student interaction using JavaScript, jQuery, HTML, and CSS`;

  const copyText = (val) => {
    if (
      [
        "dr-duties",
        "plm-duties",
        "gap-duties",
        "lq-duties",
        "sfsu-duties",
      ].includes(val)
    ) {
      switch (true) {
        case val === "dr-duties":
          navigator.clipboard.writeText(drDuties);
          setCurrentText("DataRobot Duties");
          break;
        case val === "plm-duties":
          navigator.clipboard.writeText(plmDuties);
          setCurrentText("PLM Duties");
          break;
        case val === "gap-duties":
          navigator.clipboard.writeText(gapDuties);
          setCurrentText("Gap Duties");
          break;
        case val === "lq-duties":
          navigator.clipboard.writeText(lqDuties);
          setCurrentText("LQ Duties");
          break;
        case val === "sfsu-duties":
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
    return null;
  };

  return (
    <div className="Experience position-relative" id="experience">
      <div className="row">
        <div className="col-md-2">
          <strong>Experience</strong>
        </div>
      </div>

      {/* DataRobot */}
      <div className="datarobot mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <span className="hover-copy" onClick={() => copyText("Nov 2020")}>
              Aug 2021
            </span>{" "}
            -{" "}
            <span className="hover-copy" onClick={() => copyText("Present")}>
              May 2025
            </span>
          </div>
          <div
            onClick={() => copyText("DataRobot")}
            className="col-md-8 text-uppercase hover-copy"
          >
            <strong>DataRobot</strong>
          </div>
          <div
            onClick={() => copyText("Greater Boston")}
            className="col-md-2 hover-copy"
          >
            <strong>Greater Boston (remote)</strong>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            onClick={() => copyText("Front-End Software Engineer")}
            className="offset-md-2 position_title hover-copy"
          >
            Front-End Software Engineer
          </div>
        </div>

        <div className="row no-gutters">
          <div className="offset-md-2">
            <ul
              className="pl-3 mb-0 hover-copy"
              onClick={() => copyText("plm-duties")}
            >
              <li>
                <strong className="colorRed">Development skills:&nbsp;</strong>
                <i>
                  Development skills: React JS, JavaScript, JEST, Cypress E2E,
                  React-Query, TypeScript
                </i>
              </li>
              <li>
                Developing, maintaining, and upgrading various features for our
                SaaS product
              </li>
              <li>
                Developing, maintaining, and upgrading various features and
                aspects of in-house design-system
              </li>
              <li>
                Implement architectural and design patterns for the flagship
                site, React component library, and other node modules
              </li>
              <li>
                Working closely with product development to determine the scope,
                breakdown, and sequencing of proposed features
              </li>
              <li>
                Conducting peer code reviews using Git and necessary code
                pairing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* PATIENTSLIKEME, LLC */}
      <div className="patientslikeme mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <span className="hover-copy" onClick={() => copyText("Nov 2020")}>
              Nov 2020
            </span>{" "}
            -{" "}
            <span className="hover-copy" onClick={() => copyText("Present")}>
              Aug 2021
            </span>
          </div>
          <div
            onClick={() => copyText("PatientsLikeMe, LLC")}
            className="col-md-8 text-uppercase hover-copy"
          >
            <strong>PatientsLikeMe, LLC</strong>
          </div>
          <div
            onClick={() => copyText("Greater Boston")}
            className="col-md-2 hover-copy"
          >
            <strong>Greater Boston (remote)</strong>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            onClick={() => copyText("Front-End Software Engineer")}
            className="offset-md-2 position_title hover-copy"
          >
            Front-End Software Engineer
          </div>
        </div>

        <div className="row no-gutters">
          <div className="offset-md-2">
            <ul
              className="pl-3 mb-0 hover-copy"
              onClick={() => copyText("plm-duties")}
            >
              <li>
                <strong className="colorRed">Development skills:&nbsp;</strong>
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
                Conducting peer code reviews using Git and necessary code
                pairing
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* GAP INC */}
      <div className="gapinc mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <span className="hover-copy" onClick={() => copyText("Sep 2016")}>
              Sep 2016
            </span>{" "}
            -{" "}
            <span className="hover-copy" onClick={() => copyText("Nov 2020")}>
              Nov 2020
            </span>
          </div>
          <div
            className="col-md-8 text-uppercase hover-copy"
            onClick={() => copyText("Gap Inc.")}
          >
            <strong>Gap Inc.</strong>
          </div>
          <div
            className="col-md-2 hover-copy"
            onClick={() => copyText("San Francisco, CA")}
          >
            <strong>San Francisco, CA</strong>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            className="offset-md-2 position_title hover-copy"
            onClick={() => copyText("Front-End Web Content Developer")}
          >
            Front-End Web Content Developer
          </div>
        </div>

        <div className="row no-gutters">
          <div className="offset-md-2">
            <ul
              className="pl-3 mb-0 hover-copy"
              onClick={() => copyText("gap-duties")}
            >
              <li>
                <strong className="colorRed">Development skills:&nbsp;</strong>
                <i>
                  React JS, HTML/CSS, JavaScript (jQuery), Salesforce B2C
                  Development, Front-End Design
                </i>
              </li>
              <li>
                Developed HTML/CSS campaign template creator using React JS
              </li>
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
      </div>

      {/* LQ DIGIAL */}
      <div className="lqdigital mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <span className="hover-copy" onClick={() => copyText("Feb 2016")}>
              Feb 2016
            </span>{" "}
            -{" "}
            <span className="hover-copy" onClick={() => copyText("Sep 2016")}>
              Sep 2016
            </span>
          </div>
          <div
            className="col-md-8 text-uppercase hover-copy"
            onClick={() => copyText("LQ Digital")}
          >
            <strong>LQ Digital</strong>
          </div>
          <div
            className="col-md-2 hover-copy"
            onClick={() => copyText("Emeryville, CA")}
          >
            <strong>Emeryville, CA</strong>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            className="offset-md-2 position_title hover-copy"
            onClick={() =>
              copyText("Front-End Web Content Manager / Developer")
            }
          >
            Front-End Web Content Manager / Developer
          </div>
        </div>

        <div className="row no-gutters">
          <div className="offset-md-2">
            <ul
              className="pl-3 mb-0 hover-copy"
              onClick={() => copyText("lq-duties")}
            >
              <li>
                <strong className="colorRed">Development skills</strong>:
                HTML/CSS, Ruby, JavaScript
              </li>
              <li>
                Developed ruby script to simplify content workflow from 4 hours
                to 15 minutes
              </li>
              <li>
                Produced and re-designed various websites for new promotions
                using HTML and CSS
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SFSI I.T.s and COE */}
      <div className="sfsu">
        <div className="row no-gutters">
          <div className="col-md-2">
            <span className="hover-copy" onClick={() => copyText("Jun 2012")}>
              Jun 2012
            </span>{" "}
            -{" "}
            <span className="hover-copy" onClick={() => copyText("Feb 2016")}>
              Feb 2016
            </span>
          </div>
          <div
            className="col-md-8 text-uppercase hover-copy"
            onClick={() =>
              copyText(
                "SFSU I.T. Department (ITS) | College of Education I.T. (POETS)",
              )
            }
          >
            <strong>
              SFSU I.T. Department (ITS) | College of Education I.T. (POETS)
            </strong>
          </div>
          <div
            className="col-md-2 hover-copy"
            onClick={() => copyText("San Francisco, CA")}
          >
            <strong>San Francisco, CA</strong>
          </div>
        </div>

        <div className="row no-gutters">
          <div
            className="offset-md-2 position_title hover-copy"
            onClick={() =>
              copyText("Technology Consultant | General IT Assistant")
            }
          >
            Technology Consultant | General IT Assistant
          </div>
        </div>

        <div className="row no-gutters">
          <div className="offset-md-2">
            <ul
              className="pl-3 mb-0 hover-copy"
              onClick={() => copyText("sfsu-duties")}
            >
              <li>
                <strong className="colorRed">Development skills</strong>: Drupal
                CMS, HTML/CSS, JavaScript (jQuery)
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
                Oversaw and assisted with fixing various websites issues using
                web tools, HTML, and CSS
              </li>
              <li>
                Developed video prototype for instructor/student interaction
                using JavaScript, jQuery, HTML, and CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
      {copySuccess && (
        <a
          style={{
            color: "white",
            backgroundColor: "black",
            fontSize: "1.2rem",
            opacity: ".7",
          }}
          tabIndex="0"
          className="btn btn-lg btn-success d-flex justify-content-center align-items-center text-center my-2"
          role="button"
          data-toggle="popover"
          data-trigger="focus"
          title="Dismissible popover"
          data-content="And here's some amazing content. It's very engaging. Right?"
          onClick={() => setCopySuccess(false)}
        >
          Copied&nbsp;
          <span>
            <i>{currentText}</i>
          </span>
        </a>
      )}
    </div>
  );
};

export default Experience;
