import React from "react";

export const Education = () => (
  <div className="Education" id="education">
    <div className="text-center mt-6 sm:mt-8">
      <h2 className="uppercase text-xl sm:text-2xl font-bold">Education</h2>
    </div>
    <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed">
      <div>
        <strong>Bachelors of Science (BS)</strong>, Computer Science,{" "}
        <u className="underline uppercase">San Francisco State University</u>,
        San Francisco, CA
      </div>
      <div>
        <strong>Organizations: </strong>AMC (Computer Technology Organization) |
        Koinonia Fellowship
      </div>
      <div>
        <strong>Designed and developed: </strong>
        <a
          href="http://www.videdu.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 cursor-not-allowed opacity-60"
          onClick={(e) => e.preventDefault()}
        >
          http://www.videdu.org/
        </a>{" "}
        &
        <a
          href="http://bit.ly/1WVkzwR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 cursor-not-allowed opacity-60"
          onClick={(e) => e.preventDefault()}
        >
          http://bit.ly/1WVkzwR
        </a>{" "}
        &
        <a
          href="http://photoglobe.space/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 cursor-not-allowed opacity-60"
          onClick={(e) => e.preventDefault()}
        >
          http://photoglobe.space/
        </a>
      </div>
      <div>
        <strong>Development skills (used in school projects): </strong>
        JavaScript, jQuery, HTML/CSS, Ruby, Ruby on Rails, Agile Development,
        Various APIs
      </div>
    </div>
  </div>
);
