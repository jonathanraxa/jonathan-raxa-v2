import { PortfolioDrawerItem } from "./portfolio-drawer-item";
import { allPortfolio } from "@/data/portfolio-data";

export const Portfolio = () => (
  <div id="portfolio" className="flex flex-wrap -mx-2">
    {allPortfolio.map((item, index) => (
      <div key={`portfolio-${index}`} className="w-1/2">
        <PortfolioDrawerItem {...item} />
      </div>
    ))}
  </div>
);
