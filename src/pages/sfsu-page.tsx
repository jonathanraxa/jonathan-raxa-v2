import { useEffect } from "react";

import { Contact } from "@/components/evergreen/contact";
import { HeroExperience } from "@/components/hero";
import { sfsuExperienceData } from "@/components/resume/experience-data";
import { scrollToTop } from "@/components/helpers/scroll-to-top";

export const SFSUPage = () => {
  scrollToTop();
  return (
    <>
      <HeroExperience data={sfsuExperienceData} />
      <Contact />
    </>
  );
};
