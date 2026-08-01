import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import convocation from "@/assets/convocation.jpg";
import distance from "@/assets/distance-learning.jpg";
import events from "@/assets/events.jpg";
import jobFair from "@/assets/job-fair.jpg";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Section, SectionHeading } from "./Section";

const items = [
  { title: "Annual Convocation Ceremony", date: "12 September 2026", image: convocation, body: "Graduating distance learners receive their degrees at the main campus auditorium." },
  { title: "Placement Job Fair", date: "28 August 2026", image: jobFair, body: "Over 40 recruiters meet final-year and alumni candidates across IT, finance and analytics." },
  { title: "Admission Announcement", date: "05 August 2026", image: distance, body: "Applications for the 2026 UG, PG and certification intake are now open online." },
  { title: "Academic Seminar Series", date: "22 July 2026", image: events, body: "Faculty-led sessions on research methodology and contemporary policy studies." },
  { title: "Student Orientation", date: "10 July 2026", image: campus1, body: "A guided walkthrough of the LMS, assessments and mentoring for new enrolments." },
  { title: "Skill Development Workshop", date: "30 June 2026", image: campus2, body: "Hands-on workshop on communication, interviews and workplace readiness." },
];

export function NewsEvents() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const set = () => setPerView(window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  const pages = Math.ceil(items.length / perView);
  const next = useCallback(() => setIndex((i) => (i + 1) % pages), [pages]);
  const prev = () => setIndex((i) => (i - 1 + pages) % pages);

  useEffect(() => {
    setIndex(0);
  }, [perView]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const visible = items.slice(index * perView, index * perView + perView);

  return (
    <Section id="news-events" className="bg-secondary/40">
      <SectionHeading
        eyebrow="News & Events"
        title="What's happening at CDOE"
        description="Convocations, job fairs, seminars and announcements from across the centre."
      />

      <div className="mt-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {visible.map((item, i) => (
              <motion.article
                key={`${index}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group border-border/70 bg-card/80 shadow-soft hover:shadow-float flex flex-col overflow-hidden rounded-[1.75rem] border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-primary flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase">
                    <CalendarDays className="size-4" aria-hidden />
                    {item.date}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.body}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" className="rounded-full" onClick={prev} aria-label="Previous events">
            <ChevronLeft className="size-5" aria-hidden />
          </Button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={
                  i === index
                    ? "bg-primary h-2 w-8 rounded-full transition-all"
                    : "bg-border h-2 w-2 rounded-full transition-all"
                }
              />
            ))}
          </div>
          <Button variant="outline" size="icon" className="rounded-full" onClick={next} aria-label="Next events">
            <ChevronRight className="size-5" aria-hidden />
          </Button>
        </div>
      </div>
    </Section>
  );
}