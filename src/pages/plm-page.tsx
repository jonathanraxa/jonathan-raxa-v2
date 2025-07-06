import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { plmExperienceData } from "@/components/resume/experience-data";
import { ScrollToTop } from "@/components/helpers/scroll-to-top";

export const PLMPage = () => {
  ScrollToTop();

  return (
    <>
      <HeroExperience data={plmExperienceData} />
      <Contact />
    </>
  );
};
