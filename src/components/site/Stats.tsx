import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const stats = [
  { value: 34, suffix: "k", label: "Students enrolled", decimals: 0 },
  { value: 2.4, suffix: "k", label: "Academic staff", decimals: 1 },
  { value: 118, suffix: "", label: "Countries represented", decimals: 0 },
  { value: 97, suffix: "%", label: "Graduate outcomes", decimals: 0 },
];

export function Stats() {
  return (
    <Section className="py-16 md:py-20">
      <div className="glass-panel grid grid-cols-2 gap-y-10 rounded-[2rem] px-6 py-12 sm:px-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl font-semibold sm:text-5xl">
              <Counter to={stat.value} decimals={stat.decimals} />
              <span className="text-gradient">{stat.suffix}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}