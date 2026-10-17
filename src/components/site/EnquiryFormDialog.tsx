import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { useState, type ReactElement } from "react";
import { EnquiryForm } from "./EnquiryForm";

interface EnquiryFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  downloadHref?: string;
  downloadLabel?: string;
  idPrefix?: string;
  trigger?: ReactElement;
  onSubmitted?: () => void;
}

export function EnquiryFormDialog({
  open,
  onOpenChange,
  title,
  description,
  downloadHref,
  downloadLabel = "Download PDF",
  idPrefix = "enquiry-resource",
  trigger,
  onSubmitted,
}: EnquiryFormDialogProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) setSubmitted(false);
    onOpenChange(nextOpen);
  };

  const handleSubmitted = () => {
    setSubmitted(true);
    onSubmitted?.();
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-[1.75rem] sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <EnquiryForm idPrefix={idPrefix} onSubmitted={handleSubmitted} />

        {submitted && downloadHref && (
          <a
            href={downloadHref}
            download
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8f1d1d] px-4 py-3 text-sm font-semibold text-white"
          >
            <Download size={17} />
            {downloadLabel}
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}