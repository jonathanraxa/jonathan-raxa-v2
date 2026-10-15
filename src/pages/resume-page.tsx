import { useEffect } from "react";
import { Resume } from "@/components/resume/resume";

export const ResumePage = () => {
  // Also used as the default file name for "Save as PDF"
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Jonathan Raxa - Resume";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return <Resume />;
};
