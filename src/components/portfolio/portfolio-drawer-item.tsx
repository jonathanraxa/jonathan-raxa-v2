import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PortfolioHero } from "./portfolio-hero";

export const PortfolioDrawerItem = (item: any) => {
  return (
    <Drawer>
      <DrawerTrigger className="group block min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] w-full relative overflow-hidden cursor-pointer transition-all duration-300">
        <img
          src={item.image}
          alt={`${item.title} project image`}
          className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:brightness-20"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 sm:p-6 lg:p-[3rem] bg-black bg-opacity-50">
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center leading-tight">
            {item.title}
          </h2>
          <p className="text-white text-xs sm:text-sm mt-2 text-center">
            {item.description}
          </p>
          <p className="text-white text-xs sm:text-sm mt-2 text-center">
            <span className="font-bold">Lang:</span> {item.languages.join(", ")}
          </p>
        </div>
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
