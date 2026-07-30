import { ArrowRight, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-gradient-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-2.5 text-center text-xs sm:text-sm">
        <Sparkles className="hidden size-4 text-accent sm:block" />
        <span className="font-medium">Applications for the 2026–27 intake close on 15 March</span>
        <a
          href="#admissions"
          className="inline-flex items-center gap-1 font-semibold text-accent underline-offset-4 hover:underline"
        >
          Apply now
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </div>
  );
}