import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  drDuties,
  plmDuties,
  gapDuties,
  lqDuties,
  sfsuDuties,
  allExperiences,
} from "./experience-data";

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
    <div id="experience" className="relative space-y-6">
      <div className="text-center mt-8">
        <h2 className="uppercase text-2xl font-bold">Experience</h2>
      </div>

      {allExperiences.map((exp) => {
        return (
          <div className="mb-10" key={exp.company}>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span
                  onClick={() => copyText(exp.company)}
                  className="uppercase cursor-pointer hover:text-yellow-600 text-center"
                >
                  <h3 className="text-lg font-bold">{exp.company}</h3>
                </span>
                <span
                  onClick={() => copyText(exp.location)}
                  className="cursor-pointer hover:text-yellow-600 text-right"
                >
                  {", "}
                  {exp.location}
                </span>
              </div>
              <div>
                <span
                  className="cursor-pointer hover:text-yellow-600"
                  onClick={() => copyText("Aug 2021")}
                >
                  {exp.start}
                </span>
                {" - "}
                <span
                  className="cursor-pointer hover:text-yellow-600"
                  onClick={() => copyText("May 2025")}
                >
                  {exp.end}
                </span>
              </div>
            </div>
            <div className="mt-1">
              <i>{exp.companySummary}</i>
            </div>
            <div
              onClick={() => copyText("Front-End Software Engineer")}
              className="cursor-pointer hover:text-yellow-600 bold mt-3"
            >
              <strong>{exp.title}</strong>
            </div>
            <div>{exp.positionSummary}</div>
            <div>
              <ul>
                {exp.duties.map((duty, index) => (
                  <li
                    key={index}
                    className="mt-2 ml-4 cursor-pointer hover:text-yellow-600"
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
          className="bg-black text-white text-lg py-2 px-4 rounded flex justify-center items-center mx-auto my-2 opacity-70"
        >
          Copied!
        </Button>
      )}
    </div>
  );
};
