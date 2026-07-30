import { Briefcase, LineChart, TrendingUp } from "lucide-react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const cards = [
  {
    icon: TrendingUp,
    value: 97,
    suffix: "%",
    label: "In work or further study within six months",
  },
  { icon: LineChart, value: 68, suffix: "k", prefix: "£", label: "Median graduate starting salary" },
  { icon: Briefcase, value: 420, suffix: "+", label: "Recruiting partner organisations" },
];

const recruiters = [
  "Meridian Health",
  "Aurora Labs",
  "Northbank",
  "Civic Studio",
  "Helios Energy",
  "Barrow & Finch",
];

export function Placements() {
  return (
    <Section id="placements" className="bg-primary text-primary-foreground">
      <SectionHeading
        tone="invert"
        eyebrow="Placement highlights"
        title="Where a Northvale degree takes you"
        description="Careers support starts in week one and never stops — CV clinics, alumni mentors and on-campus recruiting from over 420 organisations."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 0.08}>
            <div className="h-full rounded-[1.75rem] border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-primary-foreground/10">
              <card.icon className="size-6 text-accent" />
              <p className="font-display mt-6 text-4xl font-semibold">
                {card.prefix}
                <Counter to={card.value} />
                {card.suffix}
              </p>
              <p className="mt-3 text-sm text-primary-foreground/70">{card.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {recruiters.map((name) => (
            <li
              key={name}
              className="font-display text-base font-medium text-primary-foreground/45 transition-colors hover:text-primary-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}