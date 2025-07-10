import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface PortfolioItemProps {
  projectName: string;
  projectDescription: string;
  backgroundClassNames: string;
}

export const PortfolioItem = ({
  projectName,
  projectDescription,
  backgroundClassNames,
}: PortfolioItemProps) => (
  <Collapsible className="w-screen">
    <CollapsibleTrigger
      className={`w-full flex items-center justify-between p-4  transition-colors ${backgroundClassNames}`}
    >
      <span className="pl-5 text-xl font-semibold text-gray-900 dark:text-gray-100">
        {projectName}
      </span>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <div className="w-full p-4 h-100 overflow-y-auto  transition-colors">
        {projectDescription}
      </div>
    </CollapsibleContent>
  </Collapsible>
);
