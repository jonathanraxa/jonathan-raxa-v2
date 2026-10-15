import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PortfolioHero } from "./portfolio-hero";
import { ProjectCard } from "./project-card";
import { ProjectData } from "@/types";

export const PortfolioDrawerItem = (item: ProjectData) => {
  return (
    <Drawer>
      <DrawerTrigger className="group block h-full w-full cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-500">
        <ProjectCard project={item} />
      </DrawerTrigger>
      <DrawerContent
        style={{
          height: "100vh",
          maxHeight: "100vh",
          minHeight: "100vh",
        }}
        className="z-50 bg-black w-screen flex flex-col !h-screen [&>div:first-child]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="flex justify-end px-5 pt-8 sm:pt-4 flex-shrink-0">
            <DrawerClose className="cursor-pointer text-xl sm:text-2xl md:text-3xl hover:text-yellow-500 transition-colors duration-200 z-10 text-white">
              X
            </DrawerClose>
          </div>
          <PortfolioHero
            data={item}
            title={
              <DrawerTitle className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black font-bold mb-4 sm:mb-6 text-center leading-tight">
                {item.title}
              </DrawerTitle>
            }
            description={
              <DrawerDescription className="text-sm sm:text-md text-black italic mb-4 text-center">
                {item.description}
              </DrawerDescription>
            }
            closeButton={
              <DrawerClose className="cursor-pointer uppercase text-black text-lg sm:text-xl lg:text-2xl xl:text-3xl p-3 sm:p-4 hover:text-yellow-500 outline mt-[2rem] rounded-2xl transition-colors duration-200">
                Close
              </DrawerClose>
            }
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
