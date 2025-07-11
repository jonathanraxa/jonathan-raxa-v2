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
      <DrawerTrigger className="group block min-h-[300px] w-full flex-1 relative overflow-hidden cursor-pointer">
        <img
          src={item.image}
          alt={`${item.company} Logo`}
          className="w-full border-5 border-white transition-all duration-300 ease-in-out group-hover:brightness-20"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[3rem]">
          <h2 className="text-white text-2xl font-bold">{item.title}</h2>
          <p className="text-white text-sm mt-2">{item.description}</p>

          <p className="text-white text-sm mt-2">
            <span className="font-bold">Lang:</span> {item.languages.join(", ")}
          </p>
        </div>
      </DrawerTrigger>
      <DrawerContent className="z-50 bg-black w-screen min-h-screen">
        <div className="flex justify-end">
          <DrawerClose className="cursor-pointer text-3xl hover:text-yellow-500 pr-[3rem] text-white">
            X
          </DrawerClose>
        </div>
        <PortfolioHero
          data={item}
          title={
            <DrawerTitle className="text-5xl text-black font-bold mb-6 text-center">
              {item.title}
            </DrawerTitle>
          }
          description={
            <DrawerDescription className="text-md text-black italic mb-4">
              {item.description}
            </DrawerDescription>
          }
          closeButton={
            <DrawerClose className="cursor-pointer uppercase text-black text-3xl p-4 hover:text-yellow-500 outline mt-[2rem] rounded-2xl">
              Close
            </DrawerClose>
          }
        />
      </DrawerContent>
    </Drawer>
  );
};
