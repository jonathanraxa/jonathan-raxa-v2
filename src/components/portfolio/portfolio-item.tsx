import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogCloseButton } from "@/components/helpers/dialog-close-button";
import { ProjectDetails } from "@/components/helpers/project-details";
import { ProjectCard } from "./project-card";
import { ProjectData } from "@/types";

// Video for projects that have a Vimeo demo, otherwise the screenshot
const ProjectMedia = ({ project }: { project: ProjectData }) => {
  const { title, image, extraResource, showExtraResource } = project;
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);
  const isVimeoVideo = showExtraResource && extraResource.includes("vimeo.com");

  if (isVimeoVideo && !videoError) {
    return (
      <div className="relative aspect-video w-full bg-gray-900">
        {videoLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-yellow-500"></div>
            <p className="text-sm">Loading video...</p>
          </div>
        )}
        <iframe
          src={extraResource}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`${title} project video`}
          onError={() => setVideoError(true)}
          onLoad={() => setVideoLoading(false)}
        />
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${title} project screenshot`}
      className="max-h-[45vh] w-full bg-gray-100 object-cover object-top"
    />
  );
};

// Project card that opens a pop-up with the project's details
export const PortfolioItem = (project: ProjectData) => (
  <Dialog>
    <DialogTrigger className="group block h-full w-full cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-500">
      <ProjectCard project={project} />
    </DialogTrigger>

    <DialogContent
      showCloseButton={false}
      className="max-h-[90vh] gap-0 overflow-y-auto rounded-2xl border-0 bg-white p-0 text-gray-900 sm:max-w-3xl"
    >
      <ProjectMedia project={project} />
      <DialogCloseButton />

      <div className="space-y-3 px-6 py-6 sm:px-8">
        <DialogTitle className="text-2xl font-bold leading-tight sm:text-3xl">
          {project.title}
        </DialogTitle>
        <DialogDescription className="text-base text-gray-600">
          {project.description}
        </DialogDescription>
        <div className="space-y-2 pt-2">
          <ProjectDetails data={project} />
        </div>
      </div>
    </DialogContent>
  </Dialog>
);
