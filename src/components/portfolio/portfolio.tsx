import { useState } from "react";
import { PortfolioItem } from "./portfolio-item";
import { allPortfolio, featuredPortfolio } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/helpers/section-heading";

export const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const otherProjects = allPortfolio.filter(
    (project) => !featuredPortfolio.includes(project),
  );
  const projects = showAll
    ? [...featuredPortfolio, ...otherProjects]
    : featuredPortfolio;

  return (
    <section className="px-4 pb-16 sm:px-8 sm:pb-20">
      <div id="portfolio" className="scroll-mt-16 pt-16 sm:pt-20">
        <SectionHeading
          title="Portfolio Projects"
          subtitle="My most proud projects."
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <PortfolioItem key={project.title} {...project} />
        ))}
      </div>
      {otherProjects.length > 0 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll((show) => !show)}
            className="cursor-pointer rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:border-yellow-500 hover:text-yellow-600 transition-colors duration-200"
          >
            {showAll
              ? "Show fewer projects"
              : `Show all ${allPortfolio.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
};
