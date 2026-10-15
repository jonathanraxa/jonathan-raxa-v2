import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { ExperienceHero } from "@/components/experience";
import { Contact } from "@/components/contact/contact";
import { ExperienceData } from "@/types/index";
import { cn, isDarkColor } from "@/lib/utils";

export interface ExperienceDrawerItemProps {
  data: ExperienceData;
}

export const ExperienceDrawerItem: React.FC<ExperienceDrawerItemProps> = ({
  data,
}) => {
  const {
    backgroundColor,
    positionSummary,
    companyLogo,
    company,
    title,
    start,
    end,
  } = data;
  return (
    <Drawer shouldScaleBackground={true}>
      <DrawerTrigger
        style={{ backgroundColor }}
        className={cn(
          "group hover:cursor-pointer min-h-[200px] sm:min-h-[300px] w-full flex flex-col items-center justify-start gap-4 px-4 py-10 text-center grayscale hover:grayscale-0 transition-all duration-300",
          isDarkColor(backgroundColor) ? "text-white" : "text-gray-900",
        )}
      >
        <div className="flex h-[120px] sm:h-[150px] w-full items-center justify-center">
          <img
            loading="lazy"
            src={companyLogo}
            alt={`${company} Logo`}
            className="max-h-full w-full max-w-[150px] sm:max-w-[180px] object-contain"
          />
        </div>
        <div>
          <p className="font-bold leading-snug">{title}</p>
          <p className="mt-1 text-sm opacity-80">
            {start} – {end}
          </p>
          <p className="mt-3 text-sm font-semibold underline-offset-4 group-hover:underline">
            View details →
          </p>
        </div>
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
