import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  Brain,
  Cpu,
  HeartPulse,
  Landmark,
  Scale,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const programmes = [
  {
    icon: Cpu,
    title: "Computing & Artificial Intelligence",
    description:
      "Machine learning, systems and human-centred computing taught alongside our national AI institute.",
    meta: "BSc · MSc · PhD",
  },
  {
    icon: HeartPulse,
    title: "Medicine & Health Sciences",
    description:
      "Clinical training from year one across three teaching hospitals and a translational research centre.",
    meta: "MBBS · MSc",
  },
  {
    icon: Atom,
    title: "Engineering & Applied Physics",
    description:
      "Design studios, fabrication labs and industry placements with Europe's leading engineering firms.",
    meta: "BEng · MEng",
  },
  {
    icon: Landmark,
    title: "Business & Economics",
    description:
      "Quantitative foundations paired with real consulting mandates for global and social enterprises.",
    meta: "BSc · MBA",
  },
  {
    icon: Scale,
    title: "Law & Public Policy",
    description:
      "Moot courts, legal clinics and a policy lab embedded with national government departments.",
    meta: "LLB · LLM",
  },
  {
    icon: Brain,
    title: "Humanities & Cognitive Science",
    description:
      "Philosophy, linguistics and neuroscience combined in one of the UK's most interdisciplinary faculties.",
    meta: "BA · MA",
  },
];

export function Programmes() {
  return (
    <Section id="programmes">
      <SectionHeading
        eyebrow="Featured programmes"
        title="Study where the disciplines meet"
        description="Over 240 degrees across nine faculties, each designed with industry and research partners so your learning stays a decade ahead."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programmes.map((programme, i) => (
          <Reveal key={programme.title} delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-float"
            >
              <div className="flex items-start justify-between">
                <span className="bg-secondary flex size-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-gradient-primary">
                  <programme.icon className="size-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{programme.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {programme.description}
              </p>
              <p className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {programme.meta}
              </p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}