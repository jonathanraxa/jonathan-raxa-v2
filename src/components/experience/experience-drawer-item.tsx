import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { HeroExperience } from "@/components/hero";

export const ExperienceDrawerItem = (item: any) => {
  return (
    <Drawer>
      <DrawerTrigger
        className={`w-full flex-1 p-2 flex content-center justify-center grayscale hover:grayscale-0 bg-[${item.backgroundColor}]`}
      >
        <img
          src={item.companyLogo}
          alt={`${item.companyName} Logo`}
          className="w-full max-w-[200px] hover:cursor-pointer"
        />
      </DrawerTrigger>
      <DrawerContent
        className={`z-50 bg-white w-screen min-h-screen bg-[${item.backgroundColor}]`}
      >
        <DrawerHeader className={`bg-[${item.backgroundColor}]`}>
          <DrawerClose>
            <Button
              className="cursor-pointer hover:text-yellow-500"
              size="lg"
              variant="outline"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <HeroExperience data={item} />
        <DrawerFooter className={`bg-[${item.backgroundColor}]`}>
          <DrawerClose>
            <Button
              className="cursor-pointer hover:text-yellow-500"
              size="lg"
              variant="outline"
            >
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
