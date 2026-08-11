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
  className="fixed right-0 top-[44%] z-[9999] flex -translate-y-1/2 items-center justify-center rounded-l-2xl bg-red-700 px-2.5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-red-800"
>
  <span className="relative z-10 flex flex-col items-center gap-3">
    <MessageSquareText
      className="size-5 shrink-0"
      aria-hidden
    />

    <span
      className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold tracking-[0.08em]"
    >
      Enquire Now
    </span>
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