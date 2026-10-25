import { circularFont } from "@/lib/fonts";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { newsEvents } from "@/components/site/NewsEvents";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <SiteLayout>
      <div className="min-h-screen bg-[#f8f7f4] text-[#111111]" style={circularFont}>
        <section className="bg-[#172554] text-white">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8 lg:px-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </Link>

            <div className="mt-4 max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#d4af37]">
                <CalendarDays className="h-3 w-3" />
                Latest updates
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">News & Events</h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
                Explore upcoming programmes, campus events, admissions and student opportunities at
                Crescent CDOE.
              </p>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-6xl px-5 py-7 sm:px-8 lg:px-10">
          <Accordion type="single" collapsible className="space-y-4">
            {newsEvents.map((item) => (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="overflow-hidden rounded-2xl border border-[#d9dee7] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.04)]"
              >
                <AccordionTrigger className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5">
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-16 w-16 rounded-xl object-cover sm:h-20 sm:w-20"
                    />

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#7f1d1d]">
                        {item.date}
                      </p>
                      <h2 className="mt-1 text-base font-bold text-[#172554] sm:text-lg">
                        {item.title}
                      </h2>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-[#172554]">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#172554]/70">
                      Details
                    </span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-90" />
                  </div>
                </AccordionTrigger>

                <AccordionContent className="border-t border-[#edf0f4] px-4 py-4 sm:px-5">
                  <div className="flex flex-col gap-5">
                    <div className="overflow-hidden rounded-xl border border-[#e9edf2] bg-[#f8f9fb]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-60 w-full object-cover sm:h-80"
                      />
                    </div>

                    <div>
                      <div className="mb-2 h-[3px] w-10 rounded-full bg-[#d4af37]" />

                      <p className="text-sm leading-7 text-[#3b3f46]">{item.body}</p>

                      <div className="mt-4 rounded-xl border border-[#f0d98a] bg-[#fffaf0] p-4">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#7f1d1d]">
                          Event overview
                        </p>
                        <p className="mt-2 text-sm leading-6 text-[#2b2a2a]">{item.overview}</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </main>
      </div>
    </SiteLayout>
  );
}
