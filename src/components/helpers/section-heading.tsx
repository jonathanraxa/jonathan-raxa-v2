import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

// Shared heading style for home page sections
export const SectionHeading = ({
  title,
  subtitle,
  className,
}: SectionHeadingProps) => (
  <div className={cn("mb-10 text-center sm:mb-12", className)}>
    <h2 className="text-3xl font-bold uppercase tracking-tight sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-base opacity-80 sm:text-lg">{subtitle}</p>
    )}
  </div>
);
