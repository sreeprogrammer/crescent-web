import { admissionSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function AdmissionTimeline() {
  return (
    <Section id="how-to-apply">
      <SectionHeading
        eyebrow="Admission process"
        title="Six simple steps to enrolment"
        description="From application to your first lesson, the entire journey is online and typically completed within a week."
      />
      <div className="relative mt-16">
        <div className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          {admissionSteps.map((s, i) => (
            <li key={s.step}>
              <Reveal delay={i * 0.07}>
                <div className="relative">
                  <span className="bg-gradient-primary font-display relative z-10 flex size-12 items-center justify-center rounded-full text-lg font-semibold text-primary-foreground shadow-glow">
                    {s.step}
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
