import React from "react";
import Collapsible from "react-collapsible";
import "../Assets/Assets";

const ProjectItem = ({
  title,
  description,
  website_title,
  website_link,
  source_code_title,
  source_code_link,
  documentation_title,
  documentation_link,
  contribution,
  languages,
  date,
  location,
  extra_resource,
  extra_resource_TF,
  image,
}) => {
  return (
    <div className="ProjectItem" id="projects">
      <div className="row no-gutters paddBottom1em">
        <div className="col-md-2">{date}</div>
        <div className="col-md-8 portfolio-item">
          <Collapsible trigger={title}>
            <div>
              <div>
                <strong className="colorRed">Development skills</strong>:{" "}
                {languages.map((language) => `${language}, `)}
              </div>
              {website_title ? (
                <div>
                  <span className="colorRed">Website:</span>
                  <span>
                    &nbsp;<a href={website_link}>{website_title}</a>
                  </span>
                </div>
              ) : (
                ""
              )}
              <div>
                <span className="colorRed">Description:</span>
                <span>&nbsp;{description}</span>
              </div>
              {source_code_title ? (
                <div>
                  <span className="colorRed">Source Code:</span>
                  <span>
                    &nbsp;<a href={source_code_link}>{source_code_title}</a>
                  </span>
                </div>
              ) : (
                ""
              )}
              {documentation_title ? (
                <div>
                  <span className="colorRed">Documentation:</span>
                  <span>
                    &nbsp;<a href={documentation_link}>{documentation_title}</a>
                  </span>
                </div>
              ) : (
                ""
              )}
              <div>
                <span className="colorRed">Contribution:</span>
                <span>&nbsp;{contribution}</span>
              </div>
              {extra_resource_TF ? (
                <>
                  <span className="colorRed">Extra Resource:</span>
                  <div className="embed-container">
                    <iframe
                      src={extra_resource}
                      frameBorder="0"
                      webkitAllowFullScreen
                      mozallowfullscreen
                      allowFullScreen
                    ></iframe>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </Collapsible>
        </div>
        <div className="col-md-2">
          <strong>{location}</strong>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
