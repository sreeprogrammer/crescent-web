import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const faqs = [
  {
    q: "What are the entry requirements?",
    a: "Requirements vary by programme, typically AAA–A*AA at A-level or a 38+ IB score. Every programme page lists accepted qualifications from over 90 education systems, and contextual offers are available for applicants from under-represented backgrounds.",
  },
  {
    q: "Is funding available for international students?",
    a: "Yes. Northvale meets 100% of demonstrated financial need for all admitted students regardless of nationality, through a combination of scholarships, bursaries and paid research assistantships.",
  },
  {
    q: "Can I apply to more than one programme?",
    a: "You may list up to five programme choices in a single application at no additional cost. Choices are assessed independently, so ranking them does not disadvantage you.",
  },
  {
    q: "Is accommodation guaranteed?",
    a: "All first-year undergraduates and all incoming international postgraduates are guaranteed a place in college accommodation, with the option to remain for the duration of your degree.",
  },
  {
    q: "How long do admission decisions take?",
    a: "Most applicants receive a decision within four weeks of interview. Funding packages are confirmed alongside the offer, so you never have to accept a place before knowing what it costs.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="bg-secondary/40">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          align="left"
          eyebrow="FAQ"
          title="Questions we're asked most"
          description="Still unsure? Our admissions team answers every enquiry within one working day."
        />
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.q}
                value={faq.q}
                className="mb-3 rounded-[1.5rem] border border-border/70 bg-card px-6 shadow-soft"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}