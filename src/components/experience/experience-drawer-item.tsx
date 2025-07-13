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
    <Drawer shouldScaleBackground={true}>
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
        style={{
          backgroundColor,
          height: "100vh",
          maxHeight: "100vh",
          minHeight: "100vh",
        }}
        className="z-50 bg-white w-screen flex flex-col !h-screen [&>div:first-child]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="flex justify-end px-5 pt-4 flex-shrink-0">
            <DrawerClose className="cursor-pointer text-xl sm:text-2xl md:text-3xl hover:text-yellow-500 transition-colors duration-200 z-10">
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
          <div style={{ backgroundColor }} className="p-4">
            <Contact page="experience" />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
