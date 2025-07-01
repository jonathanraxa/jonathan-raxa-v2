import React, { Component } from "react";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Education from "./Education/Education";
import Personal from "./PersonalOther/PersonalOther";

import "bootstrap/dist/css/bootstrap.css";
import "./Resume.css";
import NavBarResume from "./NavBarResume";

class Resume extends Component {
  render() {
    return (
      <>
        <NavBarResume />
        <div
          className="Resume container-fluid"
          style={{ fontFamily: "times new roman", maxWidth: "1280px" }}
        >
          <div className="row" style={{ textAlign: "center" }}>
            <div className="col-md-12">
              <h1 className="upperCase">jonathan raxa</h1>
            </div>
            <div className="col-md-12">
              <div className="location">Austin Metropolitan Area, TX</div>
              <div className="top-nav-links">
                <a href="mailto:jonathanraxa@gmail.com">Email</a>
                <div>|</div>
                <a
                  href="https://www.linkedin.com/in/jonathanraxa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <div>|</div>
                <a
                  target="_blank"
                  href="https://www.github.com/jonathanraxa/"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="body-container leftAlign">
            <Experience />
            <hr />
            <Projects />
            <hr />
            <Education />
            <hr />
            <Personal />
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
