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
        className="hover:cursor-pointer min-h-[300px] w-full flex-1 p-2 flex items-center justify-center grayscale hover:grayscale-0"
      >
        <img
          src={companyLogo}
          alt={`${company} Logo`}
          className="w-full max-h-[200px] max-w-[200px]"
        />
      </DrawerTrigger>
      <DrawerContent
        style={{ backgroundColor }}
        className="z-50 bg-white w-screen min-h-screen"
      >
        <div className="flex justify-end">
          <DrawerClose className="cursor-pointer text-3xl hover:text-yellow-500 pr-[3rem]">
            X
          </DrawerClose>
        </div>

        <ExperienceHero
          data={data}
          header={
            <>
              <DrawerTitle className="text-5xl text-black">
                {company}
              </DrawerTitle>
              <DrawerDescription className="text-md mt-2 text-black">
                <i>{positionSummary}</i>
              </DrawerDescription>
            </>
          }
          closeButton={
            <DrawerClose className="cursor-pointer uppercase text-black text-3xl p-4 hover:text-yellow-500 outline mt-[2rem] rounded-2xl">
              Close
            </DrawerClose>
          }
        />
        <DrawerFooter style={{ backgroundColor }}>
          <Contact />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
