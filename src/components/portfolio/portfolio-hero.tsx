import React, { useState } from "react";
import { PortfolioHeroData } from "@/types";

interface PortfolioHeroProps {
  data: PortfolioHeroData;
  closeButton?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({
  data,
  closeButton,
  title,
  description,
}) => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const {
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
  }: PortfolioHeroData = data;

  // Check if this is a Vimeo video
  const isVimeoVideo =
    extra_resource_TF && extra_resource && extra_resource.includes("vimeo.com");

  return (
    <div className="flex items-start justify-center bg-black text-gray-800 dark:text-gray-100 p-4">
      <div className="w-full max-w-[1500px] bg-white rounded-[25px] sm:rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)] p-[2rem] sm:p-[3rem] lg:p-[5rem]">
        {title}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          {/* Media Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            {isVimeoVideo && !videoError ? (
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-0 pb-[56.25%] rounded-lg overflow-hidden">
                {/* Loading State */}
                {videoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Loading video...
                      </p>
                    </div>
                  </div>
                )}
                <iframe
                  src={extra_resource}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={`${title} project video`}
                  onError={() => setVideoError(true)}
                  onLoad={() => setVideoLoading(false)}
                />
              </div>
            ) : (
              <img
                src={image}
                alt={`${title} project image`}
                className="max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] w-full h-auto object-contain"
              />
            )}
          </div>
          {/* Details Section */}
          <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center space-y-3 sm:space-y-4">
            {description}
            {location && (
              <p className="text-black text-sm sm:text-base">
                <span className="font-bold">Location:</span> {location}
              </p>
            )}
            {date && (
              <p className="text-black text-sm sm:text-base">
                <span className="font-bold">Date:</span> {date}
              </p>
            )}
            {contribution && (
              <p className="text-black text-sm sm:text-base">
                <span className="font-bold">Contribution:</span> {contribution}
              </p>
            )}
            {website_link && (
              <p className="text-black text-sm sm:text-base">
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
              <p className="text-black text-sm sm:text-base">
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
              <p className="text-black text-sm sm:text-base">
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
              <p className="text-black text-sm sm:text-base">
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
              <p className="text-black text-sm sm:text-base">
                <span className="font-bold">Languages:</span>{" "}
                {languages.join(", ")}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10">
          {closeButton}
        </div>
      </div>
    </div>
  );
};
