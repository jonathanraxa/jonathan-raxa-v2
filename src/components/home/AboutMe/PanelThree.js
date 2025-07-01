import React from "react";
import { INTROVERTED_INTELLECT, IMAGES } from "../../Assets/Assets";

const PanelThree = () => {
  let customWidthB = { width: "81%", margin: "0 auto", paddingTop: "10%" };

  return (
    <div className="col-md-4">
      <div className="team-item">
        <a
          href={INTROVERTED_INTELLECT.blog}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="team-image">
            <img
              style={customWidthB}
              className="img-responsive"
              src={IMAGES.introverted_intellect_logo}
              alt="author"
            />
          </div>
        </a>
        <div className="team-text">
          <a
            href={INTROVERTED_INTELLECT.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>INTROVERTED INTELLECT</h3>
          </a>
          <div className="team-position">
            Writings from a genuine, bonafide, insecure, awkward introvert.
          </div>
          <br />
          <a
            href={INTROVERTED_INTELLECT.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            INTROVERTED INTELLECT
          </a>
          <a
            href={INTROVERTED_INTELLECT.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              As a bonafide introvert my aim is grow out of my comfort-zone and
              take on the world with confidence, passion, and vision.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PanelThree;
