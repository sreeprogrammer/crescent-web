import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MessageSquareText } from "lucide-react";
import { useState } from "react";
import { EnquiryForm } from "./EnquiryForm";

export function EnquiryFab() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open enquiry form"
          className="bg-gradient-primary text-primary-foreground shadow-float focus-visible:outline-ring fixed top-1/2 right-0 z-50 flex -translate-y-1/2 items-center gap-2 rounded-r-2xl px-2.5 py-5 text-sm font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:px-3.5 hover:shadow-glow focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span className="flex flex-col items-center gap-2 [writing-mode:vertical-rl]">
            <MessageSquareText className="size-4 rotate-90" aria-hidden />
            Enquiry
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[1.75rem] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">Send an enquiry</DialogTitle>
          <DialogDescription>
            Share your details and an admission counsellor will call you back.
          </DialogDescription>
        </DialogHeader>
        <EnquiryForm idPrefix="fab" />
      </DialogContent>
    </Dialog>
  );
}