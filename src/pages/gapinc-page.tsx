import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { gapExperienceData } from "@/components/resume/experience-data";
import { scrollToTop } from "@/components/helpers/scroll-to-top";
export const GapIncPage = () => {
  scrollToTop();
  return (
    <>
      <HeroExperience data={gapExperienceData} />
      <Contact />
    </>
  );
};
