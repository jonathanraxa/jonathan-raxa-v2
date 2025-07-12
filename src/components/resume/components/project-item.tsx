import React from "react";
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
  return (
    <Collapsible>
      <CollapsibleTrigger className="cursor-pointer w-full">
        <div className="flex flex-row w-full">
          <div className="flex-1 flex justify-start items-center">
            {date || "N/A"}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <u>{title}</u>
          </div>
          <div className="flex-1 flex justify-end items-center">
            {location || "N/A"}
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-row mt-[2rem]">
          {/* Left Column: Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={image}
              alt={`${title} logo`}
              className="max-w-[600px] w-full"
            />
          </div>
          {/* Right Column: Details */}
          <div className="w-1/2 pl-10 flex flex-col justify-center">
            {description}
            {location && (
              <p className="mt-2 text-black">
                <span className="font-bold">Location:</span> {location}
              </p>
            )}
            {date && (
              <p className="mt-2 text-black">
                <span className="font-bold">Date:</span> {date}
              </p>
            )}
            {contribution && (
              <p className="mt-2 text-black">
                <span className="font-bold">Contribution:</span> {contribution}
              </p>
            )}
            {website_link && (
              <p className="mt-2 text-black">
                <span className="font-bold">Website:</span>{" "}
                <a
                  href={website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {website_title || website_link}
                </a>
              </p>
            )}
            {source_code_link && (
              <p className="mt-2 text-black">
                <span className="font-bold">Source Code:</span>{" "}
                <a
                  href={source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {source_code_title || source_code_link}
                </a>
              </p>
            )}
            {documentation_link && (
              <p className="mt-2 text-black">
                <span className="font-bold">Documentation:</span>{" "}
                <a
                  href={documentation_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {documentation_title || documentation_link}
                </a>
              </p>
            )}
            {extra_resource_TF && extra_resource && (
              <p className="mt-2 text-black">
                <span className="font-bold">Extra Resource:</span>{" "}
                <a
                  href={extra_resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  {extra_resource}
                </a>
              </p>
            )}
            {languages && languages.length > 0 && (
              <p className="mt-2 text-black">
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
