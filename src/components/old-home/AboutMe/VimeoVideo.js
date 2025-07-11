import React from "react";
import "./AboutMe.css";

// iframe for vimeo video
export const VimeoVideo = () => {
  return (
    <div>
      <div className="section-title">
        <h2>How to navigate this site</h2>
      </div>
      <div className="embed-container">
        <iframe
          src="https://player.vimeo.com/video/193199959"
          frameBorder="0"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
