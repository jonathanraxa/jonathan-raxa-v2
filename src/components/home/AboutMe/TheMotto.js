import React from "react";

export const TheMotto = () => {
  return (
    <section className="TheMotto" id="motto">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-title">
              <p className="theMotto" style={{ fontWeight: "300" }}>
                <blockquote>
                  <p className="theMotto--lines">
                    I wish I'd had the{" "}
                    <span className="theMotto--bolded">
                      <strong>courage</strong>
                    </span>{" "}
                    to live <br />
                  </p>
                  <p className="theMotto--lines">
                    a life{" "}
                    <span className="theMotto--bolded">
                      <strong>true</strong>
                    </span>
                    &nbsp;to myself,
                  </p>
                  <p className="theMotto--lines">
                    not the life others{" "}
                    <span className="theMotto--bolded">
                      <strong>expected</strong>
                    </span>{" "}
                    of me.
                  </p>
                </blockquote>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
