import { XIcon } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";

// Round close button for the detail pop-ups; readable on photos and brand colors
export const DialogCloseButton = () => (
  <DialogClose
    aria-label="Close"
    className="absolute top-4 right-4 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-md hover:bg-yellow-400 transition-colors duration-200"
  >
    <XIcon className="size-5" />
  </DialogClose>
);
