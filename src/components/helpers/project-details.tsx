import React from "react";
import { PortfolioHeroData } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
  data: PortfolioHeroData;
  className?: string;
}

interface DetailLinkProps {
  label: string;
  href: string;
  text?: string;
  className?: string;
}

const DetailLink: React.FC<DetailLinkProps> = ({
  label,
  href,
  text,
  className,
}) => (
  <p className={className}>
    <span className="font-bold">{label}:</span>{" "}
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 transition-colors duration-200 break-all"
    >
      {text || href}
    </a>
  </p>
);

// Location, date, contribution, links, and languages for a portfolio project
export const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  data,
  className,
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
  } = data;

  const rowClassName = cn("text-sm sm:text-base", className);

  return (
    <>
      {location && (
        <p className={rowClassName}>
          <span className="font-bold">Location:</span> {location}
        </p>
      )}
      {date && (
        <p className={rowClassName}>
          <span className="font-bold">Date:</span> {date}
        </p>
      )}
      {contribution && (
        <p className={rowClassName}>
          <span className="font-bold">Contribution:</span> {contribution}
        </p>
      )}
      {website_link && (
        <DetailLink
          label="Website"
          href={website_link}
          text={website_title}
          className={rowClassName}
        />
      )}
      {source_code_link && (
        <DetailLink
          label="Source Code"
          href={source_code_link}
          text={source_code_title}
          className={rowClassName}
        />
      )}
      {documentation_link && (
        <DetailLink
          label="Documentation"
          href={documentation_link}
          text={documentation_title}
          className={rowClassName}
        />
      )}
      {extra_resource_TF && extra_resource && (
        <DetailLink
          label="Extra Resource"
          href={extra_resource}
          className={rowClassName}
        />
      )}
      {languages && languages.length > 0 && (
        <p className={rowClassName}>
          <span className="font-bold">Languages:</span> {languages.join(", ")}
        </p>
      )}
    </>
  );
};
