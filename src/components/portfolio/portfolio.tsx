import { PortfolioDrawerItem } from "./portfolio-drawer-item";
import { allPortfolio } from "@/data/portfolio-data";

export const Portfolio = () => (
  <div
    id="portfolio"
    className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-1 lg:gap-2 p-2 lg:p-4"
  >
    {allPortfolio.map((item, index) => (
      <PortfolioDrawerItem key={`portfolio-${index}`} {...item} />
    ))}
  </div>
);
