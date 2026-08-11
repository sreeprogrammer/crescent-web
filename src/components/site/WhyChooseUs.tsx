
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
  {
    icon: BadgeCheck,
    title: "UGC Approved",
    body: "Recognised programmes with national validity.",
  },
  {
    icon: Clock4,
    title: "Flexible Learning",
    body: "Learn anytime with recorded and live classes.",
  },
  {
    icon: MonitorSmartphone,
    title: "Online Admission",
    body: "Apply and complete your admission completely online.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    body: "Transparent fees with convenient instalment options.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    body: "Resume, interview and placement assistance.",
  },
  {
    icon: BookOpenCheck,
    title: "Expert Faculty",
    body: "Learn from experienced academic professionals.",
  },
  {
    icon: LifeBuoy,
    title: "Student Assistance",
    body: "Dedicated support throughout your programme.",
  },
  {
    icon: ClipboardCheck,
    title: "Exam Support",
    body: "Hall tickets, exams and results through LMS.",
  },
];

export function WhyChooseUs() {
  return (
    <Section
      id="why-choose-us"
      className="!py-8 bg-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-5 text-center">
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Built around your success"
            description="Everything you need for a flexible, supported and career-focused learning journey."
          />
        </div>

        {/* Compact Feature Box */}
        <div
          className="
            overflow-hidden
            rounded-2xl
            border
            border-[#d9dee7]
            bg-white
            shadow-[0_8px_30px_rgba(15,23,42,0.06)]
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => {
              const Icon = r.icon;

              return (
                <Reveal
                  key={r.title}
                  delay={(i % 4) * 0.04}
                >
                  <div
                    className="
                      group
                      relative
                      flex
                      min-h-[125px]
                      gap-3
                      px-4
                      py-4
                      border-b
                      border-[#e5e7eb]
                      transition-all
                      duration-300
                      hover:bg-[#f8fafc]

                      lg:border-r
                      lg:[&:nth-child(4n)]:border-r-0
                      lg:[&:nth-child(n+5)]:border-b-0
                    "
                  >

                    {/* Icon */}
                    <div
                      className="
                        flex
                        size-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-[#7f1d1d]/20
                        bg-[#7f1d1d]/5
                        text-[#7f1d1d]
                        transition-all
                        duration-300
                        group-hover:bg-[#7f1d1d]
                        group-hover:text-white
                      "
                    >
                      <Icon
                        className="size-[16px]"
                        strokeWidth={2}
                        aria-hidden
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="
                            text-[9px]
                            font-bold
                            tracking-[0.18em]
                            text-[#8b1e1e]/55
                          "
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-5 bg-[#172554]/20" />
                      </div>

                      <h3
                        className="
                          mt-1
                          text-[14px]
                          font-semibold
                          leading-tight
                          text-[#172554]
                          transition-colors
                          duration-300
                          group-hover:text-[#7f1d1d]
                        "
                      >
                        {r.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[11.5px]
                          leading-[1.4]
                          text-slate-500
                        "
                      >
                        {r.body}
                      </p>
                    </div>

                    {/* Hover line */}
                    <span
                      className="
                        absolute
                        bottom-0
                        left-4
                        right-4
                        h-[2px]
                        origin-left
                        scale-x-0
                        bg-[#7f1d1d]
                        transition-transform
                        duration-300
                        group-hover:scale-x-100
                      "
                    />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}

