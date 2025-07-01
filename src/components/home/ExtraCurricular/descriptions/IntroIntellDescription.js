import React from "react";
import { INTROVERTED_INTELLECT } from "../../../Assets/Assets";

const IntroIntellDescription = () => {
  return (
    <div className="animate-me">
      <a
        href={INTROVERTED_INTELLECT.blog}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>Introverted Intellect</h3>
      </a>
      <div className="margin-top-normal">
        <p>Writings from a genuine, bonafide, insecure, awkward introvert.</p>
      </div>

      <div className="margin-top-normal">
        <h4>
          <strong>Author</strong>
        </h4>
        <p>
          <a
            href="https://amzn.to/2QsjkUE"
            target="_blank"
            rel="noopener noreferrer"
          >
            An Awkward Introvert’s Guide to Human Connection
          </a>
        </p>
      </div>

      <div className="margin-top-normal">
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
          <p className="margin-top-normal">
            As a bonafide introvert my aim is grow out of my comfort-zone and
            take on the world with confidence, passion, and vision.
          </p>
        </a>
      </div>
    </div>
  );
};

export default IntroIntellDescription;
