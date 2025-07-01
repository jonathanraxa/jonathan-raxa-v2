import React from "react";
import { noAuto } from "@fortawesome/fontawesome-svg-core";

export const AboutMe = () => {
  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <div className="section-title">
        <h2>
          Who is <strong>Jonathan Raxa</strong>?
        </h2>
      </div>
      <br />
      <div className="section-title">
        <div className="theMotto">
          <p>
            <i>
              <span className="theMotto--bolded">Question</span>
              &nbsp;everything.
              <span className="theMotto--bolded">Build</span>.&nbsp;
              <span className="theMotto--bolded">Solve</span>
              &nbsp;problems.&nbsp;Make it
              <span className="theMotto--bolded">better</span>.
            </i>
          </p>

          <p>
            <i>Leave a legacy that others will remember.</i>
          </p>
        </div>
      </div>
    </div>
  );
};
