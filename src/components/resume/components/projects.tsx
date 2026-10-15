import { resumePortfolio } from "@/data/portfolio-data";
import { ProjectItem } from "./project-item";

export const Projects = () => (
  <div id="portfolio" className="space-y-4">
    <div className="text-center mt-6 sm:mt-8">
      <h2 className="uppercase text-xl sm:text-2xl font-bold">
        Notable Projects
      </h2>
    </div>
    {resumePortfolio.map((item) => (
      <ProjectItem key={item.title} {...item} />
    ))}
  </div>
);
