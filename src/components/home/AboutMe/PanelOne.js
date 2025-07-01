import React from "react";
import { PERSONAL_LINKS, IMAGES } from "../../Assets/Assets";

const PanelOne = () => {
  let panelOneImg = { margin: "0 auto", paddingTop: "0%", width: "90%" };

  return (
    <div className="col-md-4">
      <div className="team-item">
        <div className="team-image photoOfMe">
          <img
            src={IMAGES.profile_photo}
            style={panelOneImg}
            className="img-responsive"
            alt="author: jon raxa"
          />
        </div>
        <div className="team-text">
          <a className="page-scroll" href="#portfolio">
            <h3>
              WEB DEVELOPER
              <br />&<br />
              Content Creator
            </h3>
          </a>
          <a className="page-scroll" href="#portfolio">
            <div className="team-position">
              Specialized in <br />
              Front-End Web Development
            </div>
          </a>
          <br />
          <a
            href={PERSONAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            FIND ME ON LINKEDIN
          </a>
          <a className="page-scroll" href="#portfolio">
            <p>
              Seven year experience with front-end web development with
              technologies such as Responsive HTML/CSS, Drupal, Wordpress,
              Demandware CMS, and JavaScript.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PanelOne;
