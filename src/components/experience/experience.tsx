import { ExperienceItem } from "./experience-item";
import { allExperiences } from "@/data/experience-data";
import { SectionHeading } from "@/components/helpers/section-heading";

export const Experience = () => (
  <section id="experience" className="scroll-mt-16">
    <SectionHeading
      title="Experience"
      subtitle="Where I've worked. Click a company for details."
      className="mb-0 px-4 pt-16 pb-10 sm:mb-0 sm:pt-20 sm:pb-12"
    />
    <div className="flex flex-col lg:flex-row">
      {allExperiences.map((item, index) => (
        <ExperienceItem key={`experience-${index}`} data={item} />
      ))}
    </div>
  </section>
);
