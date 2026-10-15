import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ProjectData } from "@/types";
import { ProjectDetails } from "@/components/helpers/project-details";

export const ProjectItem: React.FC<ProjectData> = (props) => {
  const { title, description, date, location, image } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsOpen(!isOpen);
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setIsClicked(false);
    }
  };

  return (
    <Collapsible open={isOpen} onOpenChange={handleOpenChange}>
      <CollapsibleTrigger
        className={`cursor-pointer w-full p-2 transition-colors duration-200 ${
          isClicked && isOpen
            ? "bg-yellow-200 hover:bg-yellow-300"
            : "hover:bg-gray-50"
        }`}
        onClick={handleClick}
      >
        <div className="flex flex-row w-full gap-2 sm:gap-0">
          <div className="flex-1 flex justify-start items-center text-sm sm:text-base">
            {date || "N/A"}
          </div>
          <div className="flex-1 flex justify-center items-center text-sm sm:text-base">
            <u className="hover:text-yellow-600 transition-colors duration-200">
              {title}
            </u>
          </div>
          <div className="flex-1 flex justify-end items-center text-sm sm:text-base">
            {location || "N/A"}
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col lg:flex-row mt-[2rem] gap-6 lg:gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={image}
              alt={`${title} project image`}
              className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] w-full h-auto object-contain"
            />
          </div>
          {/* Details Section */}
          <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            <ProjectDetails data={props} />
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
