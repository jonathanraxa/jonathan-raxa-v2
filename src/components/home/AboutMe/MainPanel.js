import React from "react";
import { PERSONAL_LINKS, IMAGES } from "../../Assets/Assets";

const linkedinIcon = (
  <a href={PERSONAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin fa-4x"></i>
  </a>
);
const mediumIcon = (
  <a href={PERSONAL_LINKS.medium} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-medium fa-4x"></i>
  </a>
);
const devtoIcon = (
  <a href={PERSONAL_LINKS.devto} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-dev fa-4x"></i>
  </a>
);
const githubIcon = (
  <a href={PERSONAL_LINKS.github} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github fa-4x"></i>
  </a>
);
const wordpressIcon = (
  <a href={PERSONAL_LINKS.wordpress} target="_blank" rel="noopener noreferrer">
    <i className="fab fa-wordpress fa-4x"></i>
  </a>
);

const MainPanel = () => {
  return (
    <div className="light-bg">
      <div
        className="row"
        id="about"
        style={{ marginBottom: "4rem", paddingTop: "4rem" }}
      >
        <div className="col-lg-12 text-center">
          <div className="section-title">
            <h2>Front-end Engineer</h2>
            <p>
              <i>Aspiring full-stack</i>
            </p>
          </div>
        </div>
      </div>
      <div className="full_panel">
        <div className="full_panel-details">
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="full_panel-icon-rows">
              <div className="fake_link">
                <div className="real_link">
                  <a
                    href={PERSONAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>Find me on</div>
                  {linkedinIcon}
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "2rem" }}>
            <h4>
              <span className="brackets">&#x2774;</span>
              <span>tech</span>
              <span className="brackets">&#x2775;</span>
            </h4>
          </div>

          <div className="full_panel-icon-rows">
            <div className="fake_link">
              <div className="real_link">
                <a
                  href={PERSONAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
              <div>{githubIcon}</div>
            </div>
            <div className="fake_link">
              <div className="real_link">
                <a
                  href={PERSONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev.to
                </a>
              </div>
              <div>{devtoIcon}</div>
            </div>
          </div>

          <div style={{ textAlign: "center", margin: "2rem" }}>
            <h4>
              <span className="brackets">&#x5b;</span>
              <span>non-tech</span>
              <span className="brackets">&#x5d;</span>
            </h4>
          </div>

          <div className="full_panel-icon-rows">
            <div className="fake_link">
              <div className="real_link">
                <a
                  href={PERSONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medium
                </a>
              </div>
              <div>{mediumIcon}</div>
            </div>
            <div className="fake_link">
              <div className="real_link">
                <a
                  href={PERSONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev.to
                </a>
              </div>
              <div>{devtoIcon}</div>
            </div>
            <div className="fake_link">
              <div className="real_link">
                <a
                  href={PERSONAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wordpress
                </a>
              </div>
              <div>{wordpressIcon}</div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <p>
              Five years of experience with front-end engineering in
              technologies such as Responsive HTML, CSS, JavaScript, ReactJS,
              Node, JEST, & Cypress E2E.
            </p>
            <br></br>
            <p>I've also worked with SFCC (Salesforce) & Python.</p>
          </div>
        </div>
        <img
          src={IMAGES.profile_photo}
          className="img-responsive profile-image"
          alt="author: jon raxa"
        />
      </div>
    </div>
  );
};

export default MainPanel;
