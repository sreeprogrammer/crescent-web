import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const testimonials = [
  {
    quote:
      "I published with my supervisor in second year. Nowhere else was going to hand an undergraduate that kind of trust.",
    name: "Ife Balogun",
    detail: "MEng Engineering, Class of 2025",
    initials: "IB",
  },
  {
    quote:
      "The college system makes a 34,000-student university feel like forty people who actually notice when you're struggling.",
    name: "Marta Kowalski",
    detail: "BA Philosophy & Linguistics",
    initials: "MK",
  },
  {
    quote:
      "I came on a full needs-based scholarship. Four years later I'm leading a clinical data team. That's the whole story.",
    name: "Samuel Reyes",
    detail: "MSc Health Data Science, Class of 2024",
    initials: "SR",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Student voices"
        title="Told better by the people who lived it"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.08}>
            <motion.figure
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-8 shadow-soft hover:shadow-float"
            >
              <Quote className="size-7 text-accent" />
              <blockquote className="mt-6 flex-1 text-base leading-relaxed text-pretty">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                <span className="bg-secondary font-display flex size-11 items-center justify-center rounded-full text-sm font-semibold text-primary">
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{item.name}</span>
                  <span className="block text-xs text-muted-foreground">{item.detail}</span>
                </span>
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}