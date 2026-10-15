import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogCloseButton } from "@/components/helpers/dialog-close-button";
import { ExperienceData } from "@/types/index";
import { cn, isDarkColor } from "@/lib/utils";

interface ExperienceItemProps {
  data: ExperienceData;
}

// Company card that opens a pop-up with the job's details
export const ExperienceItem = ({ data }: ExperienceItemProps) => {
  const {
    backgroundColor,
    companyLogo,
    company,
    location,
    companySummary,
    positionSummary,
    title,
    start,
    end,
    duties,
  } = data;
  // Black or white text, whichever reads better on the company color
  const textOnColor = isDarkColor(backgroundColor)
    ? "text-white"
    : "text-gray-900";

  return (
    <Dialog>
      <DialogTrigger
        style={{ backgroundColor }}
        className={cn(
          "group hover:cursor-pointer min-h-[200px] sm:min-h-[300px] w-full flex flex-col items-center justify-start gap-4 px-4 py-10 text-center grayscale hover:grayscale-0 transition-all duration-300",
          textOnColor,
        )}
      >
        <div className="flex h-[120px] sm:h-[150px] w-full items-center justify-center">
          <img
            loading="lazy"
            src={companyLogo}
            alt={`${company} Logo`}
            className="max-h-full w-full max-w-[150px] sm:max-w-[180px] object-contain"
          />
        </div>
        <div>
          <p className="font-bold leading-snug">{title}</p>
          <p className="mt-1 text-sm opacity-80">
            {start} – {end}
          </p>
          <p className="mt-3 text-sm font-semibold underline-offset-4 group-hover:underline">
            View details →
          </p>
        </div>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-h-[90vh] gap-0 overflow-y-auto rounded-2xl border-0 bg-white p-0 text-gray-900 sm:max-w-2xl"
      >
        {/* Header in the company's color */}
        <div
          style={{ backgroundColor }}
          className={cn(
            "flex flex-col gap-4 px-6 py-6 pr-16 sm:flex-row sm:items-center sm:px-8",
            textOnColor,
          )}
        >
          <img
            src={companyLogo}
            alt=""
            className="h-14 w-auto max-w-[140px] object-contain"
          />
          <div>
            <DialogTitle className="text-2xl font-bold leading-tight">
              {company}
            </DialogTitle>
            <DialogDescription className="mt-1 font-semibold text-inherit">
              {title}
            </DialogDescription>
            <p className="text-sm opacity-80">
              {start} – {end} · {location}
            </p>
          </div>
        </div>
        <DialogCloseButton />

        <div className="space-y-4 px-6 py-6 text-base leading-relaxed sm:px-8">
          <p className="italic text-gray-600">{companySummary}</p>
          <p className="font-medium">{positionSummary}</p>
          {duties.length > 0 && (
            <ul className="list-disc space-y-2 pl-5">
              {duties.map((duty) => (
                <li key={duty}>{duty.replace(/^•\s*/, "")}</li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
