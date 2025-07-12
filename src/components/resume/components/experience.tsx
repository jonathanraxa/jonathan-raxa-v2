import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  drDuties,
  plmDuties,
  gapDuties,
  lqDuties,
  sfsuDuties,
  allExperiences,
} from "@/data/experience-data";

// TODO: We could iterate through these experiences

export const Experience: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  const copyText = (val: string): void => {
    if (
      [
        "dr-duties",
        "plm-duties",
        "gap-duties",
        "lq-duties",
        "sfsu-duties",
      ].includes(val)
    ) {
      switch (val) {
        case "dr-duties":
          navigator.clipboard.writeText(drDuties);
          break;
        case "plm-duties":
          navigator.clipboard.writeText(plmDuties);
          break;
        case "gap-duties":
          navigator.clipboard.writeText(gapDuties);
          break;
        case "lq-duties":
          navigator.clipboard.writeText(lqDuties);
          break;
        case "sfsu-duties":
          navigator.clipboard.writeText(sfsuDuties);
          break;
        default:
          break;
      }
      setCopySuccess(true);
    } else {
      navigator.clipboard.writeText(val);
      setCopySuccess(true);
    }
  };

  return (
    <div id="experience" className="relative space-y-4 sm:space-y-6">
      <div className="text-center mt-6 sm:mt-8">
        <h2 className="uppercase text-xl sm:text-2xl font-bold">Experience</h2>
      </div>

      {allExperiences.map((exp) => {
        return (
          <div className="mb-8 sm:mb-10" key={exp.company}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
              <div className="flex flex-row items-center gap-1">
                <span
                  onClick={() => copyText(exp.company)}
                  className="uppercase cursor-pointer hover:text-yellow-600 text-center transition-colors duration-200"
                >
                  <h3 className="text-base sm:text-lg font-bold">
                    {exp.company}
                  </h3>
                </span>
                <span
                  onClick={() => copyText(exp.location)}
                  className="cursor-pointer hover:text-yellow-600 text-sm sm:text-base transition-colors duration-200"
                >
                  {", "}
                  {exp.location}
                </span>
              </div>
              <div className="text-center sm:text-right text-sm sm:text-base">
                <span
                  className="cursor-pointer hover:text-yellow-600 transition-colors duration-200"
                  onClick={() => copyText("Aug 2021")}
                >
                  {exp.start}
                </span>
                {" - "}
                <span
                  className="cursor-pointer hover:text-yellow-600 transition-colors duration-200"
                  onClick={() => copyText("May 2025")}
                >
                  {exp.end}
                </span>
              </div>
            </div>
            <div className="mt-1 text-sm sm:text-base">
              <i>{exp.companySummary}</i>
            </div>
            <div
              onClick={() => copyText("Front-End Software Engineer")}
              className="cursor-pointer hover:text-yellow-600 bold mt-3 text-sm sm:text-base transition-colors duration-200"
            >
              <strong>{exp.title}</strong>
            </div>
            <div className="text-sm sm:text-base">{exp.positionSummary}</div>
            <div>
              <ul className="space-y-1 sm:space-y-2">
                {exp.duties.map((duty, index) => (
                  <li
                    key={index}
                    className="mt-2 ml-4 cursor-pointer hover:text-yellow-600 text-sm sm:text-base leading-relaxed transition-colors duration-200"
                    onClick={() => copyText(duty)}
                  >
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}

      {copySuccess && (
        <Button
          onClick={() => setCopySuccess(false)}
          className="bg-black text-white text-base sm:text-lg py-2 px-4 rounded flex justify-center items-center mx-auto my-2 opacity-70 transition-opacity duration-200"
        >
          Copied!
        </Button>
      )}
    </div>
  );
};
