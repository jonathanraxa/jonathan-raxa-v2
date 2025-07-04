import { ExperienceSFSU } from "./experience-sfsu";
import { ExperienceLQDigital } from "./experience-lqdigital";
import { ExperienceGapInc } from "./experience-gapinc";
import { ExperiencePLM } from "./experience-plm";
import { ExperienceDataRobot } from "./experience-datarobot";

export const Experience = () => (
  <div className="flex flex-row justify-between items-center">
    <ExperienceSFSU />
    <ExperienceLQDigital />
    <ExperienceGapInc />
    <ExperiencePLM />
    <ExperienceDataRobot />
  </div>
);
