import { Button } from "@/components/ui/button";
import gapinc from "@/assets/img/companies/gaplogo.svg";

export const ExperienceGapInc = () => {
  return (
    <div className="flex-1 p-2 bg-[#adc9ff] flex content-center justify-center">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <img
          src={gapinc}
          alt="Gap Inc. Logo"
          className="max-w-[200px] transition-all duration-500 ease hover:p-[1.2rem] hover:cursor-pointer"
        />
      </Button>
    </div>
  );
};
