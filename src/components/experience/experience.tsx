import { ExperienceDrawerItem } from "./experience-drawer-item";
import { allExperiences } from "@/data/experience-data";

export const Experience = () => (
  <div id="experience" className="flex flex-row justify-between items-center">
    {allExperiences.map((item, index) => (
      <ExperienceDrawerItem key={`experience-${index}`} data={item} />
    ))}
  </div>
);
