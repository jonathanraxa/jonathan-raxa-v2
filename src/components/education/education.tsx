import React from "react";
import sfsuLogo from "@/assets/img/companies/sfsulogo.png";

export const Education = () => (
  <div className="bg-gray-50 dark:bg-gray-200 flex justify-evenly w-full items-center py-8">
    <div className="text-center">
      <img className="max-w-[430px] p-16" src={sfsuLogo} alt="SFSU logo" />
    </div>
    <div className="text-center">
      <div className="education-description section-title">
        <div className="text-center mt-8">
          <h2 className="uppercase text-2xl font-bold">Education</h2>
        </div>
        <p className="my-4 text-[#25236e] font-bold">
          San Francisco State University
        </p>
        <p>
          <strong>Bachelor of Science in Computer Science</strong>
          &nbsp;&nbsp;|&nbsp;&nbsp;August 2010 – May 2016
        </p>
      </div>
    </div>
  </div>
);
