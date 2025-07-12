import React from "react";
import sfsuLogo from "@/assets/img/companies/sfsulogo.png";

export const Education = () => (
  <div className="bg-[#25236e] flex flex-col lg:flex-row justify-evenly w-full items-center py-4 lg:py-8 px-4 lg:px-8 gap-6 lg:gap-8">
    <div className="w-full lg:w-1/2 flex justify-center">
      <img
        className="max-w-[250px] sm:max-w-[300px] lg:max-w-[430px] w-full h-auto object-contain p-4 lg:p-16"
        src={sfsuLogo}
        alt="San Francisco State University logo"
      />
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <div className="education-description section-title">
        <div className="mt-4 lg:mt-8">
          <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Education
          </h2>
        </div>
        <p className="my-3 lg:my-4 text-white font-bold text-lg sm:text-xl lg:text-2xl">
          San Francisco State University
        </p>
        <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed">
          <strong>Bachelor of Science in Computer Science</strong>
          <br className="sm:hidden" />
          <span className="hidden sm:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <br className="sm:hidden" />
          August 2010 – May 2016
        </p>
      </div>
    </div>
  </div>
);
