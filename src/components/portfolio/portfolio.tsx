import { PortfolioDrawerItem } from "./portfolio-drawer-item";
import { allPortfolio } from "@/data/portfolio-data";

export const Portfolio = () => (
  <>
    <div id="portfolio" className="scroll-mt-16 my-20 text-center">
      <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Portfolio Projects
      </h2>
      <p className="text-base sm:text-lg text-center mt-2">
        My most proud projects.
      </p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-1 lg:gap-2 p-2 lg:p-4">
      {allPortfolio.map((item, index) => (
        <PortfolioDrawerItem key={`portfolio-${index}`} {...item} />
      ))}
    </div>
  </>
);
