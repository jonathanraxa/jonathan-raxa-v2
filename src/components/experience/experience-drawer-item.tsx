import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  DrawerHeader,
} from "@/components/ui/drawer";
import { HeroExperience } from "@/components/hero";
import { Contact } from "@/components/contact/contact";

export const ExperienceDrawerItem = (item: any) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={`hover:cursor-pointer min-h-[300px] w-full flex-1 p-2 flex items-center justify-center grayscale hover:grayscale-0 bg-[${item.backgroundColor}]`}
      >
        <img
          src={item.companyLogo}
          alt={`${item.company} Logo`}
          className="w-full max-h-[200px] max-w-[200px]"
        />
      </DrawerTrigger>
      <DrawerContent
        className={`z-50 bg-white w-screen min-h-screen bg-[${item.backgroundColor}]`}
      >
        <div className="flex justify-end">
          <DrawerClose className="cursor-pointer text-3xl hover:text-yellow-500 pr-[3rem]">
            X
          </DrawerClose>
        </div>
        <HeroExperience
          data={item}
          closeButton={
            <DrawerClose className="cursor-pointer uppercase text-black text-3xl p-4 hover:text-yellow-500 outline mt-[2rem]">
              Close
            </DrawerClose>
          }
        />
        <DrawerFooter className={`bg-[${item.backgroundColor}]`}>
          <Contact />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
