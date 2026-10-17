import { MessageSquareText } from "lucide-react";
import { useState } from "react";
import { EnquiryFormDialog } from "./EnquiryFormDialog";

export function EnquiryFab() {
  const [open, setOpen] = useState(false);

  return (
    <EnquiryFormDialog
      open={open}
      onOpenChange={setOpen}
      onSubmitted={() => setOpen(false)}
      title="Send an enquiry"
      description="Share your details and an admission counsellor will call you back."
      idPrefix="fab"
      trigger={
        <button
          type="button"
          aria-label="Open enquiry form"
          className="fixed right-0 top-[44%] z-[9999] flex -translate-y-1/2 items-center justify-center rounded-l-2xl bg-red-700 px-2.5 py-4 text-white shadow-lg transition-all duration-300 hover:bg-red-800"
        >
          <span className="relative z-10 flex flex-col items-center gap-3">
            <MessageSquareText className="size-5 shrink-0" aria-hidden />
            <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-semibold tracking-[0.08em]">
              Enquire Now
            </span>
          </span>
        </button>
      }
    />
  );
}