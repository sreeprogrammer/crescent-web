
import { memo, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { exportConversationPdf } from "../chat-utils/pdfExport";
import type { Language, Message } from "../chat-types/chat";

interface Props {
  messages: Message[];
  language: Language;
  label: string;
}

function PdfDownloadButtonBase({ messages, language, label }: Props) {
  const [busy, setBusy] = useState(false);

  const download = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await exportConversationPdf(messages, language);
    } finally {
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={download}
      disabled={busy}
      aria-label={label}
      title={label}
      className="flex size-7 items-center justify-center rounded-full bg-primary-foreground/15 text-primary-foreground transition-colors hover:bg-primary-foreground/25 disabled:opacity-50"
    >
      {busy ? <Loader2 className="size-3.5 animate-spin" /> : <Download className="size-3.5" />}
    </button>
  );
}

export const PdfDownloadButton = memo(PdfDownloadButtonBase);
export default PdfDownloadButton;
