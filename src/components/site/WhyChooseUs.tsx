import {
  BadgeCheck,
  BookOpenCheck,
  Briefcase,
  ClipboardCheck,
  Clock4,
  IndianRupee,
  LifeBuoy,
  MonitorSmartphone,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const reasons = [
  { icon: BadgeCheck, title: "UGC Approved Universities", body: "Every programme carries UGC-DEB recognition and national validity." },
  { icon: Clock4, title: "Flexible Learning", body: "Study around your job with recorded lectures and weekend live classes." },
  { icon: MonitorSmartphone, title: "Online Admissions", body: "Apply, upload documents and pay fees fully online in minutes." },
  { icon: IndianRupee, title: "Affordable Fees", body: "Transparent fee structure with easy instalment options." },
  { icon: Briefcase, title: "Career Support", body: "Resume clinics, interview practice and placement drives each semester." },
  { icon: BookOpenCheck, title: "Experienced Faculty", body: "Learn from doctorate-qualified faculty and industry practitioners." },
  { icon: LifeBuoy, title: "Student Assistance", body: "A dedicated mentor answers your queries throughout the programme." },
  { icon: ClipboardCheck, title: "Examination Support", body: "Exam city choice, hall tickets and results delivered on the LMS." },
];

export function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Why choose us"
        title="A distance education experience without compromises"
        description="Recognised qualifications, modern digital delivery and human support at every step."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 0.06}>
            <div className="h-full rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-float">
              <span className="bg-gradient-primary flex size-11 items-center justify-center rounded-2xl">
                <r.icon className="size-5 text-primary-foreground" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold">{r.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
