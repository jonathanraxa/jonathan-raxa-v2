import React from "react";
import { allPortfolio } from "@/data/portfolio-data";
import { ProjectItem } from "./project-item";

export const Projects = () => (
  <div id="portfolio" className="space-y-6">
    <div className="text-center mt-8">
      <h2 className="uppercase text-2xl font-bold">Projects</h2>
    </div>
    {allPortfolio.map((item, index) => (
      <div key={`portfolio-${index}`}>
        <ProjectItem {...item} />
      </div>
    ))}
  </div>
);
