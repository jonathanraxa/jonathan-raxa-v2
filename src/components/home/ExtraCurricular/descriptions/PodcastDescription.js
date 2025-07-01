import React from "react";
import { INTROVERTED_INTELLECT } from "../../../Assets/Assets";

const PodcastDescription = () => {
  return (
    <div className="animate-me">
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
      <div className="margin-top-normal">
        <p> Discussions from a perspective of a recovering awkward guy.</p>
      </div>
      <br />
      <a
        href={INTROVERTED_INTELLECT.itunes}
        target="_blank"
        className="margin-top-small"
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
      <p className="margin-top-normal">
        With the growing use of technology, media will shove down our throats
        expectations that we can't always live up to. I'm here to say, screw you
        media.
      </p>
    </div>
  );
};

export default PodcastDescription;
