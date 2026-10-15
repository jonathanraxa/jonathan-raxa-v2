import { featuredPortfolio } from "@/data/portfolio-data";
import { ProjectItem } from "./project-item";

export const Projects = () => (
  <div id="portfolio" className="space-y-2">
    <div className="text-center mt-6 sm:mt-8">
      <h2 className="uppercase text-xl sm:text-2xl font-bold">
        Selected Projects
      </h2>
    </div>
    {featuredPortfolio.map((item) => (
      <ProjectItem key={item.title} {...item} />
    ))}
  </div>
);
