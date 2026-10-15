import React from "react";
import { ProjectData } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
  data: ProjectData;
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
    websiteTitle,
    websiteLink,
    sourceCodeTitle,
    sourceCodeLink,
    documentationTitle,
    documentationLink,
    contribution,
    languages,
    date,
    extraResource,
    location,
    showExtraResource,
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
      {websiteLink && (
        <DetailLink
          label="Website"
          href={websiteLink}
          text={websiteTitle}
          className={rowClassName}
        />
      )}
      {sourceCodeLink && (
        <DetailLink
          label="Source Code"
          href={sourceCodeLink}
          text={sourceCodeTitle}
          className={rowClassName}
        />
      )}
      {documentationLink && (
        <DetailLink
          label="Documentation"
          href={documentationLink}
          text={documentationTitle}
          className={rowClassName}
        />
      )}
      {showExtraResource && extraResource && (
        <DetailLink
          label="Extra Resource"
          href={extraResource}
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
