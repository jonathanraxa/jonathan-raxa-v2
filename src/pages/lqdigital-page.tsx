import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { lqExperienceData } from "@/components/resume/experience-data";

export const LQDigitalPage = () => {
  return (
    <>
      <HeroExperience data={lqExperienceData} />
      <Contact />
    </>
  );
};
