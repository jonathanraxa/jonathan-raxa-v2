import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes/routes";
import { cn } from "@/lib/utils";

type SocialSite = "github" | "linkedin" | "devto";

const SOCIAL_LINKS: Record<
  SocialSite,
  { href: string; label: string; icon: IconDefinition }
> = {
  github: { href: routes.github, label: "GitHub", icon: faGithub },
  linkedin: { href: routes.linkedin, label: "LinkedIn", icon: faLinkedin },
  devto: { href: routes.devto, label: "DEV Community", icon: faDev },
};

interface SocialLinksProps {
  sites?: SocialSite[];
  className?: string;
  buttonClassName?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  sites = ["github", "linkedin"],
  className,
  buttonClassName,
}) => (
  <div className={cn("flex gap-3", className)}>
    {sites.map((site) => {
      const { href, label, icon } = SOCIAL_LINKS[site];
      return (
        <Button
          key={site}
          asChild
          variant="secondary"
          size="icon"
          className={cn(
            "size-10 cursor-pointer hover:text-yellow-500",
            buttonClassName,
          )}
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        </Button>
      );
    })}
  </div>
);
