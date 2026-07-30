import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const faculty = [
  {
    name: "Prof. Amara Osei",
    role: "Dean of Computing & AI",
    focus: "Machine reasoning, AI safety",
    initials: "AO",
  },
  {
    name: "Prof. Daniel Whitcombe",
    role: "Chair of Applied Physics",
    focus: "Quantum materials",
    initials: "DW",
  },
  {
    name: "Dr. Priya Raghunathan",
    role: "Director, Translational Medicine",
    focus: "Immunotherapy",
    initials: "PR",
  },
  {
    name: "Prof. Elena Márquez",
    role: "Head of Public Policy",
    focus: "Climate governance",
    initials: "EM",
  },
];

export function Faculty() {
  return (
    <Section id="faculty" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Faculty"
        title="Taught by the people writing the field"
        description="Our academics include 14 national academy fellows, three Turing Award nominees and clinicians leading trials in 21 countries."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-[1.75rem] border border-border/70 bg-card p-7 text-center shadow-soft hover:shadow-float"
            >
              <span className="bg-gradient-primary font-display mx-auto flex size-16 items-center justify-center rounded-full text-lg font-semibold text-primary-foreground shadow-glow">
                {person.initials}
              </span>
              <h3 className="mt-5 text-base font-semibold">{person.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
              <p className="mt-4 text-xs tracking-[0.14em] text-primary uppercase">{person.focus}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}