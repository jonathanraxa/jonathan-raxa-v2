import { Button } from "@/components/ui/button";
import datarobot from "@/assets/img/companies/datarobot.svg";

export const ExperienceDataRobot = () => {
  return (
    <div className="flex-1 p-2 bg-[#81fba5] flex content-center justify-center">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <img
          src={datarobot}
          alt="DataRobot Logo"
          className="w-full max-w-[200px] transition-all duration-500 ease hover:p-[1.2rem] hover:cursor-pointer"
        />
      </Button>
    </div>
  );
};
