import React from "react";

const Education = () => {
  return (
    <div className="Education" id="education">
      <div className="row">
        <div className="col-md-2">
          <strong>Education</strong>
        </div>
      </div>

      <div className="gapinc">
        <div className="row no-gutters">
          <div className="col-md-2">2010 - 2016</div>
          <div className="col-md-8 upperCase">
            <strong>San Francisco State University</strong>
          </div>
          <div className="col-md-2">
            <strong>San Francisco, CA</strong>
          </div>
        </div>

        <div className="row no-gutters offset-md-2">
          <i>Bachelors of Science | Computer Science</i>
        </div>
        <br />
        <div className="row no-gutters offset-md-2">
          <strong>Organizations:</strong>
        </div>
        <div className="row no-gutters offset-md-2">
          AMC (Computer Technology Organization) | Koinonia Fellowship
        </div>
        <br />
        <div className="row no-gutters offset-md-2">
          <strong>Designed and developed:</strong>
        </div>
        <div className="row no-gutters offset-md-2">
          http://www.videdu.org/ & http://bit.ly/1WVkzwR (documentation only) &
          http://photoglobe.space/
        </div>
        <br />
        <div className="row no-gutters offset-md-2">
          <strong>Development skills (used in school projects):</strong>
        </div>
        <div className="row no-gutters offset-md-2">
          JavaScript, jQuery, HTML/CSS, Ruby, Ruby on Rails, Agile Development,
          Various APIs
        </div>
      </div>
    </div>
  );
};

export default Education;
