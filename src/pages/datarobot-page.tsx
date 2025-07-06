import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { dataRobotExperienceData } from "@/components/resume/experience-data";

export const DataRobotPage = () => {
  return (
    <>
      <HeroExperience data={dataRobotExperienceData} />
      <Contact />
    </>
  );
};
