import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { sfsuExperienceData } from "@/components/resume/experience-data";

export const SFSUPage = () => {
  return (
    <>
      <HeroExperience data={sfsuExperienceData} />
      <Contact />
    </>
  );
};
