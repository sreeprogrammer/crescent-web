import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const steps = [
  {
    step: "01",
    title: "Create your applicant profile",
    body: "One profile covers up to five programme choices across every faculty.",
  },
  {
    step: "02",
    title: "Submit academics & personal statement",
    body: "Transcripts, one reference and 1,000 words on why this subject, not another.",
  },
  {
    step: "03",
    title: "Interview or portfolio review",
    body: "A 30-minute academic conversation, held online or on campus — your choice.",
  },
  {
    step: "04",
    title: "Offer, funding & enrolment",
    body: "Decisions within four weeks, with your full funding package attached to the offer.",
  },
];

export function Admissions() {
  return (
    <Section id="admissions">
      <SectionHeading
        eyebrow="Admission process"
        title="Four steps, no mystery"
        description="We publish every criterion we assess against. No hidden weighting, no advantage to those who know someone."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.08}>
            <div className="relative h-full rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft">
              <span className="text-gradient font-display text-4xl font-semibold">{item.step}</span>
              <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="mt-10 text-center">
        <Button variant="gold" size="pill-lg" asChild>
          <a href="#cta">
            Begin your application
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </Reveal>
    </Section>
  );
}