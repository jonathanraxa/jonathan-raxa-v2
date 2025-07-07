import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { plmExperienceData } from "@/components/resume/experience-data";
import { scrollToTop } from "@/components/helpers/scroll-to-top";

export const PLMPage = () => {
  scrollToTop();

  return (
    <>
      <HeroExperience data={plmExperienceData} />
      <Contact />
    </>
  );
};
