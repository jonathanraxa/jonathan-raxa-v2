import { PortfolioItem } from "./portfolio-items";
import { items } from "./portfolio-data";

export const Portfolio = () => {
  return items.map((item, index) => (
    <div id="portfolio">
      <PortfolioItem
        key={index}
        projectName={item.projectName}
        projectDescription={item.projectDescription}
        backgroundClassNames={item.backgroundClassNames}
      />
    </div>
  ));
};
