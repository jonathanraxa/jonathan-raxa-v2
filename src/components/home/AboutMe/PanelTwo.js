import React from "react";
import { INTROVERTED_INTELLECT } from "../../Assets/Assets";
import { IMAGES } from "../../Assets/Assets";

const PanelTwo = () => {
  let customWidthA = { width: "100%", margin: "0 auto", paddingTop: "0%" };

  return (
    <div className="col-md-4">
      <div className="team-item">
        <div className="team-image">
          <a
            href={INTROVERTED_INTELLECT.blog}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={customWidthA}
              className="img-responsive"
              src={IMAGES.introverted_intellect_profile}
              alt="author"
            />
          </a>
        </div>
        <div className="team-text">
          <a
            href={INTROVERTED_INTELLECT.itunes}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              Podcasting with
              <br />
              Jonny Raxa
            </h3>
          </a>
          <div className="team-position">
            Discussions from a perspective of a recovering awkward guy.
          </div>
          <br />
          <a
            href={INTROVERTED_INTELLECT.itunes}
            target="_blank"
            rel="noopener noreferrer"
          >
            iTunes
          </a>
          &nbsp;|&nbsp;
          <a
            href={INTROVERTED_INTELLECT.googleplay}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Play
          </a>
          &nbsp;|&nbsp;
          <a
            href={INTROVERTED_INTELLECT.stitcher}
            target="_blank"
            rel="noopener noreferrer"
          >
            Stitcher
          </a>
          <p>
            With the growing use of technology, media will shove down our
            throats expectations that we can't always live up to. I'm here to
            say, screw you media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PanelTwo;
