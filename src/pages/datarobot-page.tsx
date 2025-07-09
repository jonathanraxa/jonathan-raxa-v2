import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { dataRobotExperienceData } from "@/components/resume/experience-data";
import { scrollToTop } from "@/components/helpers/scroll-to-top";
export const DataRobotPage = () => {
  scrollToTop();
  return (
    <>
      <HeroExperience data={dataRobotExperienceData} />
      <Contact />
    </>
  );
};
