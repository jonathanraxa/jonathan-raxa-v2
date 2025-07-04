import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";

import sfsu from "@/assets/img/companies/sfsulogo.png";

export const ExperienceSFSU = () => {
  return (
    <div className="flex-1 p-2 bg-[#2b286e] flex content-center justify-center">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <Link to={routes.sfsu} rel="noopener noreferrer">
          <img
            src={sfsu}
            alt="SFSU Logo"
            className="max-w-[200px] transition-all duration-500 ease hover:p-[1.2rem] hover:cursor-pointer"
          />
        </Link>
      </Button>
    </div>
  );
};
