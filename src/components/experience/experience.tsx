import { Button } from "@/components/ui/button";
import gapinc from "@/assets/img/companies/gaplogo.svg";
import lqdigital from "@/assets/img/companies/lq-logo.svg";
import sfsu from "@/assets/img/companies/sfsulogo.png";
import personal from "@/assets/img/creative.jpg";

export const Experience = () => {
  return (
    <section>
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex-1 p-2 bg-[#adc9ff] flex content-center justify-center">
            <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
              <img src={gapinc} alt="Gap Inc. Logo" />
            </Button>
          </div>
          <div className="flex-1 p-2 bg-[#d06437] flex content-center justify-center">
            <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
              <img src={lqdigital} alt="LQ Digital Logo" />
            </Button>
          </div>
          <div className="flex-1 p-2 bg-[#2b286e] flex content-center justify-center">
            <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
              <img src={sfsu} alt="SFSU Logo" />
            </Button>
          </div>
          <div className="flex-1 p-2 bg-[#000000] flex content-center justify-center">
            <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
              <img src={personal} alt="DataRobot Logo" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
