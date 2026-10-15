import { ProjectData } from "@/types";

// Prefer the GitHub source link; many older project sites are offline
const getProjectLink = ({ sourceCodeLink, websiteLink }: ProjectData) =>
  [sourceCodeLink, websiteLink].find((link) => link.includes("github"));

export const ProjectItem = (project: ProjectData) => {
  const { title, description, location, date, languages } = project;
  const link = getProjectLink(project);

  return (
    <div className="break-inside-avoid text-sm sm:text-base">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
        <h3 className="font-bold">{title}</h3>
        <span>
          {location} · {date}
        </span>
      </div>
      <p className="leading-relaxed">{description}</p>
      <p className="italic">
        {languages.join(", ")}
        {link && (
          <>
            {" · "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-blue-700 hover:text-yellow-600 transition-colors duration-200 print:text-black"
            >
              {link.replace(/^https?:\/\//, "")}
            </a>
          </>
        )}
      </p>
    </div>
  );
};
