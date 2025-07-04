import { Button } from "@/components/ui/button";
import lqdigital from "@/assets/img/companies/lq-logo.svg";

export const ExperienceLQDigital = () => (
  <div className="flex-1 p-2 bg-[#d06437] flex content-center justify-center">
    <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
      <img
        src={lqdigital}
        alt="LQ Digital Logo"
        className="max-w-[200px] transition-all duration-500 ease hover:p-[1.2rem] hover:cursor-pointer"
      />
    </Button>
  </div>
);
