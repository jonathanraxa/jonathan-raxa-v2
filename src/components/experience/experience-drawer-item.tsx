import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerTitle,
  DrawerHeader,
  DrawerDescription,
} from "@/components/ui/drawer";
import { ExperienceHero } from "@/components/experience";
import { Contact } from "@/components/contact/contact";
import { ExperienceDataTypes } from "@/types/index";

export interface ExperienceDrawerItemProps {
  data: ExperienceDataTypes;
}

export const ExperienceDrawerItem: React.FC<ExperienceDrawerItemProps> = ({
  data,
}) => {
  const { backgroundColor, title, positionSummary, companyLogo, company } =
    data;
  return (
    <Drawer>
      <DrawerTrigger
        style={{ backgroundColor }}
        className="hover:cursor-pointer min-h-[200px] sm:min-h-[300px] w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
      >
        <img
          src={companyLogo}
          alt={`${company} Logo`}
          className="w-full max-h-[150px] sm:max-h-[200px] max-w-[150px] sm:max-w-[200px] object-contain"
        />
      </DrawerTrigger>
      <DrawerContent
        style={{ backgroundColor }}
        className="z-50 bg-white w-screen min-h-screen max-h-screen overflow-y-auto"
      >
        <div className="flex justify-end p-4">
          <DrawerClose className="cursor-pointer text-2xl sm:text-3xl hover:text-yellow-500 transition-colors duration-200">
            X
          </DrawerClose>
        </div>

        <ExperienceHero
          data={data}
          header={
            <>
              <DrawerTitle className="text-2xl sm:text-4xl md:text-5xl text-black font-bold leading-tight">
                {company}
              </DrawerTitle>
              <DrawerDescription className="text-sm sm:text-md mt-2 text-black">
                <i>{positionSummary}</i>
              </DrawerDescription>
            </>
          }
          closeButton={
            <DrawerClose className="cursor-pointer uppercase text-black text-xl sm:text-2xl md:text-3xl p-3 sm:p-4 hover:text-yellow-500 outline mt-[2rem] rounded-2xl transition-colors duration-200">
              Close
            </DrawerClose>
          }
        />
        <DrawerFooter style={{ backgroundColor }} className="p-4">
          <Contact page="experience" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
