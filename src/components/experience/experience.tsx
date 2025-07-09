import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";

import sfsu from "@/assets/img/companies/sfsulogo.png";
import lqdigital from "@/assets/img/companies/lq-logo.svg";
import gapinc from "@/assets/img/companies/gaplogo.svg";
import plm from "@/assets/img/companies/plm.svg";
import datarobot from "@/assets/img/companies/datarobot.svg";

export const Experience = () => (
  <div id="experience" className="flex flex-row justify-between items-center">
    <div className="flex-1 p-2 bg-[#2b286e] flex content-center justify-center grayscale hover:grayscale-0">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <Link to={routes.sfsu} rel="noopener noreferrer">
          <img
            src={sfsu}
            alt="SFSU Logo"
            className="w-full max-w-[200px] hover:cursor-pointer"
          />
        </Link>
      </Button>
    </div>
    <div className="flex-1 p-2 bg-[#d06437] flex content-center justify-center grayscale hover:grayscale-0">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <Link to={routes.lqdigital} rel="noopener noreferrer">
          <img
            src={lqdigital}
            alt="LQ Digital Logo"
            className="w-full max-w-[200px] hover:cursor-pointer"
          />
        </Link>
      </Button>
    </div>
    <div className="flex-1 p-2 bg-[#adc9ff] flex content-center justify-center grayscale hover:grayscale-0">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <Link to={routes.gapinc} rel="noopener noreferrer">
          <img
            src={gapinc}
            alt="Gap Inc. Logo"
            className="w-full max-w-[200px] hover:cursor-pointer"
          />
        </Link>
      </Button>
    </div>
    <div className="flex-1 p-2 bg-[#F0F0F0] flex content-center justify-center grayscale hover:grayscale-0">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <Link to={routes.plm} rel="noopener noreferrer">
          <img
            src={plm}
            alt="Patients Like Me Logo"
            className="max-w-[200px] transition-all duration-500 ease hover:p-[1.5rem] hover:cursor-pointer"
          />
        </Link>
      </Button>
    </div>
    <div className="flex-1 p-2 bg-[#81fba5] flex content-center justify-center grayscale hover:grayscale-0">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <Link to={routes.datarobot} rel="noopener noreferrer">
          <img
            src={datarobot}
            alt="DataRobot Logo"
            className="w-full max-w-[200px] hover:cursor-pointer"
          />
        </Link>
      </Button>
    </div>
  </div>
);
