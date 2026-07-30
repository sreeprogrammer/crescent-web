import { BookOpenCheck, Compass, Handshake, Microscope, ShieldCheck, Wallet } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const reasons = [
  {
    icon: Microscope,
    title: "Research from day one",
    body: "Undergraduates join funded labs in their first year — not their final one.",
  },
  {
    icon: Compass,
    title: "1:9 tutor ratio",
    body: "Small-group tutorials with academics who know your name and your work.",
  },
  {
    icon: Handshake,
    title: "Industry embedded",
    body: "420+ partners offering placements, mentoring and sponsored final projects.",
  },
  {
    icon: Wallet,
    title: "Need-blind admission",
    body: "We admit on merit and meet 100% of demonstrated financial need.",
  },
  {
    icon: BookOpenCheck,
    title: "Lifelong access",
    body: "Alumni keep library, lab and career services access for life.",
  },
  {
    icon: ShieldCheck,
    title: "Wellbeing first",
    body: "24/7 support, dedicated counsellors and a college system that scales down campus.",
  },
];

export function WhyChoose() {
  return (
    <Section id="why" className="bg-secondary/40">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
        <SectionHeading
          align="left"
          eyebrow="Why Northvale"
          title="A university that measures itself by what you become"
          description="Everything here — the college system, the funding model, the tutorial format — exists to make ambitious work possible for ordinary people."
        />
        <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 2) * 0.08}>
              <div className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-card shadow-soft">
                  <reason.icon className="size-5 text-primary" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}