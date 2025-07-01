import React from "react";
import { PERSONAL_LINKS } from "../assets/Assets";

export default function Footer({ dark, id }) {
  return (
    <div className={"Footer section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <footer style={{ backgroundColor: "inherit" }}>
          <div className="container text-center"></div>
          <div className="row center-margin">
            <div className="col icon-col">
              <a
                className=""
                href={PERSONAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github fa-2x" />
              </a>
            </div>
            <div className="col icon-col">
              <a
                className=""
                href={PERSONAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x" />
              </a>
            </div>
            <div className="col icon-col">
              <a
                className=""
                href={PERSONAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" />
              </a>
            </div>
            <div className="col icon-col">
              <a
                className=""
                href={PERSONAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f fa-2x" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
