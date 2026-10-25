import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Landmark,
  Target,
  Users,
} from "lucide-react";

import {
  ProgrammeHighlightCard,
  ProgrammeMiniVisualCard,
  ProgrammeSectionHeading,
} from "@/components/site/ProgrammePageSections";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { mbaProgrammePageConfig } from "@/data/programmePageConfigs";

export const Route = createFileRoute("/mba/")({
  component: MBAPage,
});

function MBAPage() {
  return (
    <ProgrammePageTemplate {...mbaProgrammePageConfig}>
        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-24">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              {/* LEFT VISUAL CARD */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[#6b4c9a]/10" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6b4c9a]/10 text-[#6b4c9a] sm:h-[72px] sm:w-[72px]">
                    <GraduationCap size={38} />
                  </div>

                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a] sm:text-base">
                    Department of Management Studies
                  </p>

                  <h2 className="mt-3 text-3xl font-bold leading-tight text-[#111111] sm:text-4xl">
                    Master of Business Administration
                  </h2>

                  <div className="mt-4 h-[3px] w-12 rounded-full bg-[#d4af37]" />

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <ProgrammeMiniVisualCard
                      variant="mba"
                      icon={<BookOpen size={20} />}
                      title="Online Learning"
                      accent="#0d5c45"
                    />

                    <ProgrammeMiniVisualCard

                      variant="mba"
                      icon={<Users size={20} />}
                      title="Working Adults"
                      accent="#8f1d1d"
                    />

                    <ProgrammeMiniVisualCard

                      variant="mba"
                      icon={<Target size={20} />}
                      title="Management"
                      accent="#1d355f"
                    />

                    <ProgrammeMiniVisualCard

                      variant="mba"
                      icon={<Landmark size={20} />}
                      title="Industry Focus"
                      accent="#6b4c9a"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6b4c9a]" />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a] sm:text-base">
                  Department of Management Studies
                </span>

                <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                  Overview
                </h2>

                <div className="mt-3 h-[3px] w-12 rounded-full bg-[#d4af37]" />

                <div className="mt-6 space-y-5 text-base leading-8 text-[#111111] sm:text-lg sm:leading-8">
                  <p>
                    MBA Online Learning (OL) programme of the B.S. Abdur Rahman Crescent Institute
                    of Science and Technology are developed in accordance with the guidelines of the
                    UGC OL Regulations 2020 and in line with the vision and mission of the
                    Institute.
                  </p>

                  <p>
                    Typically, the curriculum and syllabus contents under both programmes are
                    similar to our regular MBA programme, nevertheless delivered through Online mode
                    using state-of-the-art IT infrastructure and web based technologies.
                  </p>

                  <p>
                    The programmes are targeted to working adults as well as freshers who aspire to
                    upskill their knowledge across functional areas of management that are evolving
                    in the dynamic business environment in a flexible learning space.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* VISION AND MISSION */}
          

          {/* ELIGIBILITY AND FEE */}
          <section id="eligibility-fee" className="mt-12 scroll-mt-24">
            <ProgrammeSectionHeading
              variant="mba" number="02" title="Eligibility & Fee" accent="#0d5c45" />

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              {/* ELIGIBILITY */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0d5c45]/10 text-[#0d5c45]">
                    <GraduationCap size={22} />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#0d5c45] sm:text-sm">
                      Admission Requirement
                    </span>

                    <h3 className="mt-2 text-xl font-bold text-[#111111] sm:text-2xl">
                      Eligibility for Admission
                    </h3>

                    <div className="mt-3 h-[3px] w-9 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-[#0d5c45] p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-1 shrink-0 text-[#f3d15b]" />

                    <p className="text-base font-semibold leading-7 text-white sm:text-lg">
                      Any Bachelor Degree (minimum 3 years duration) with a minimum CGPA of 5.0 /
                      50% of marks
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <EligibilityItem>
                    Admission is based on the CGPA / Percentage obtained in the UG degree and
                    performance in the CreScent School of Business Administration Test (CSBAT).
                  </EligibilityItem>

                  <EligibilityItem>
                    Applicants who have already appeared in the National level Entrance Exams like
                    CAT, MAT, XAT, TANCET, etc., and have secured valid scores are exempted from
                    appearing CSBAT.
                  </EligibilityItem>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>

              {/* FEE */}
            </div>
          </section>

          {/* PROGRAMME HIGHLIGHTS */}
          <section className="mt-12">
            <ProgrammeSectionHeading
              variant="mba" number="03" title="Programme Highlights" accent="#1d355f" />

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ProgrammeHighlightCard
                variant="mba"
                title="Flexible Learning"
                description="Designed for working professionals and freshers."
                icon={<BookOpen size={20} />}
                accent="#0d5c45"
              />

              <ProgrammeHighlightCard

                variant="mba"
                title="Online Mode"
                description="Delivered through modern web-based technologies."
                icon={<GraduationCap size={20} />}
                accent="#1d355f"
              />

              <ProgrammeHighlightCard

                variant="mba"
                title="Industry Focus"
                description="Courses aligned with evolving market demands."
                icon={<Landmark size={20} />}
                accent="#8f1d1d"
              />

              <ProgrammeHighlightCard

                variant="mba"
                title="Professional Growth"
                description="Build knowledge across functional areas of management."
                icon={<Users size={20} />}
                accent="#6b4c9a"
              />
            </div>
          </section>
        </section>
    </ProgrammePageTemplate>
  );
}

/* ELIGIBILITY ITEM */
function EligibilityItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-3 overflow-hidden border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
      <CheckCircle2 size={19} className="mt-1 shrink-0 text-[#8f1d1d]" />

      <p className="text-base leading-7 text-[#111111] sm:text-lg sm:leading-8">{children}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

export default MBAPage;
