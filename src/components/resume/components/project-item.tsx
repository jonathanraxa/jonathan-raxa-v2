import React, { useState } from "react";
import "./assets";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { PortfolioHeroData } from "@/types";

interface PortfolioHeroProps extends PortfolioHeroData {}

export const ProjectItem: React.FC<PortfolioHeroProps> = ({
  title,
  description,
  website_title,
  website_link,
  source_code_title,
  source_code_link,
  documentation_title,
  documentation_link,
  contribution,
  languages,
  date,
  extra_resource,
  location,
  extra_resource_TF,
  image,
}) => {
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
            {location && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Location:</span> {location}
              </p>
            )}
            {date && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Date:</span> {date}
              </p>
            )}
            {contribution && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Contribution:</span> {contribution}
              </p>
            )}
            {website_link && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Website:</span>{" "}
                <a
                  href={website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200 break-all"
                >
                  {website_title || website_link}
                </a>
              </p>
            )}
            {source_code_link && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Source Code:</span>{" "}
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200 break-all"
                >
                  {source_code_title || source_code_link}
                </a>
              </p>
            )}
            {documentation_link && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Documentation:</span>{" "}
                <a
                  href={documentation_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200 break-all"
                >
                  {documentation_title || documentation_link}
                </a>
              </p>
            )}
            {extra_resource_TF && extra_resource && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Extra Resource:</span>{" "}
                <a
                  href={extra_resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-200 break-all"
                >
                  {extra_resource}
                </a>
              </p>
            )}
            {languages && languages.length > 0 && (
              <p className="text-sm sm:text-base">
                <span className="font-bold">Languages:</span>{" "}
                {languages.join(", ")}
              </p>
            )}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
