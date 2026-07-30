import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const items = [
  {
    tag: "Research",
    date: "12 February 2026",
    title: "Northvale team demonstrates room-temperature quantum memory",
    excerpt:
      "A five-year collaboration with the National Photonics Institute reaches a milestone with implications for secure networking.",
  },
  {
    tag: "Event",
    date: "28 February 2026",
    title: "Open Day: Faculty of Medicine & Health Sciences",
    excerpt:
      "Tour the simulation hospital, meet clinical tutors and sit in on a first-year anatomy session.",
  },
  {
    tag: "Campus",
    date: "05 March 2026",
    title: "The Aldridge Library reopens after a £40m restoration",
    excerpt:
      "24-hour study floors, 900 new reading spaces and a conservation studio for the rare books collection.",
  },
];

export function News() {
  return (
    <Section id="news" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Latest news & events"
        title="What's happening at Northvale"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-8 shadow-soft hover:shadow-float"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground">
                  {item.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  {item.date}
                </span>
              </div>
              <h3 className="mt-6 text-lg leading-snug font-semibold text-balance">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read more
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}