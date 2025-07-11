import React from "react";

interface PortfolioHeroData {
  title?: string;
  description?: string;
  website_title?: string;
  website_link?: string;
  source_code_title?: string;
  source_code_link?: string;
  documentation_title?: string;
  documentation_link?: string;
  contribution?: string;
  languages?: string[];
  date?: string;
  extra_resource?: string;
  location?: string;
  extra_resource_TF?: boolean;
  image?: string;
}

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

  return (
    <div className="h-screen flex items-center justify-center bg-black text-gray-800 dark:text-gray-100">
      <div className="w-[1500px] bg-white rounded-[50px] shadow-[0_0_50px_rgba(0,0,0,0.35)] p-[5rem]">
        {title}
        <div className="flex flex-row">
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
        <div className="flex justify-center mt-10">{closeButton}</div>
      </div>
    </div>
  );
};
