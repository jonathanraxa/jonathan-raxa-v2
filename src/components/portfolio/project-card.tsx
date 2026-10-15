import { ProjectData } from "@/types";

interface ProjectCardProps {
  project: ProjectData;
}

// Card face for a portfolio project; the drawer trigger wraps it
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, location, date, languages, image } = project;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
      <div className="aspect-[3/2] overflow-hidden bg-gray-100">
        <img
          loading="lazy"
          src={image}
          alt={`${title} project screenshot`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {location} · {date}
        </p>
        <h3 className="mt-1 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-yellow-600">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((language) => (
            <span
              key={language}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
            >
              {language}
            </span>
          ))}
        </div>
        <p className="mt-auto pt-5 text-sm font-semibold text-gray-900 group-hover:text-yellow-600">
          View details →
        </p>
      </div>
    </div>
  );
};
