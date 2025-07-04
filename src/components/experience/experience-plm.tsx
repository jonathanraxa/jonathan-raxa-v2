import { Button } from "@/components/ui/button";
import plm from "@/assets/img/companies/plm.svg";

export const ExperiencePLM = () => {
  return (
    <div className="flex-1 p-2 bg-[#F0F0F0] flex content-center justify-center">
      <Button className="w-full max-w-[200px] h-100 object-contain cursor-pointer">
        <img
          src={plm}
          alt="Patients Like Me Logo"
          className="max-w-[200px] transition-all duration-500 ease hover:p-[1.5rem] hover:cursor-pointer"
        />
      </Button>
    </div>
  );
};
