import { useState, type ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CourseInfoLink, type CourseSection } from "@/components/site/CourseInfoLink";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  FileText,
  GraduationCap,
  Landmark,
  Target,
  Users,
  Eye,
} from "lucide-react";

import { EnquiryFormDialog } from "@/components/site/EnquiryFormDialog";
import mbaBrochurePdf from "@/assets/ODL MBA Website Brochure09012026.pdf";
import mbaRegulationsPdf from "@/assets/DeanAA-MBA-MCA-ODL-and-OL-Regulations2021-24.11.2021-F.pdf";

export const Route = createFileRoute("/mba/")({
  component: MBAPage,
});

const MBA_BROCHURE_PDF = mbaBrochurePdf;

const circularFont = {
  fontFamily: "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

function MBAPage() {
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8f4] text-[#111111]" style={circularFont}>
        {/* HEADER */}
        <section className="relative overflow-hidden bg-[#6b4c9a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6b4c9a] via-[#64438f] to-[#533579]" />
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl" />
          <div className="absolute -bottom-16 left-24 h-32 w-32 rounded-full bg-[#0d5c45]/15 blur-2xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8">
            <Link
              to="/programmes"
              className="group relative mb-4 inline-flex items-center gap-2 text-base font-medium text-white/85 transition-colors hover:text-white sm:text-lg"
            >
              <ArrowRight size={18} className="rotate-180" />
              Back to Programmes
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-4xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f3d15b] sm:text-base">
                <GraduationCap size={20} />
                Postgraduate Programme
              </div>

              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Master of Business Administration
              </h1>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#d4af37]" />

              <p className="mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                MBA Online Learning (OL) Programme offered by the B.S. Abdur Rahman Crescent
                Institute of Science and Technology.
              </p>

              <div className="mt-5">
                <Link
                  to="/admission"
                  hash="how-to-apply"
                  className="group relative inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-base font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Apply Now
                  <ArrowRight size={18} />
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION */}
        <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <HashQuickCard
                href="#overview"
                icon={<BookOpen size={20} />}
                title="Overview"
                description="Programme overview"
                iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
              />

              <LinkQuickCard
                to="/mba/people"
                icon={<Users size={20} />}
                title="People"
                description="Faculty & team"
                iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
              />

              <HashQuickCard
                section="vision"
                icon={<Eye size={20} />}
                title="Vision"
                description="Our academic vision"
                iconClass="bg-[#1d355f]/10 text-[#1d355f]"
              />

              <HashQuickCard
                section="mission"
                icon={<Target size={20} />}
                title="Mission"
                description="Our core mission"
                iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
              />
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LinkActionCard
              courseSlug="mba"
              icon={<BookOpen size={20} />}
              title="Eligibility & Fee"
              accent="#5b1d5f"
            />

            <LinkActionCard
              to="/mba/syllabus"
              icon={<BookOpen size={20} />}
              title="Syllabus"
              accent="#1d355f"
            />

            <a
              href={mbaRegulationsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[60px] items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#8a6d12]">
                <FileText size={20} />
              </span>

              <span className="text-base font-semibold leading-6 text-[#111111] sm:text-lg">
                Regulations
              </span>

              <ArrowRight
                size={18}
                className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </a>

            <button
              type="button"
              onClick={() => setShowBrochureForm(true)}
              className="group relative flex min-h-[60px] items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6b4c9a]/10 text-[#6b4c9a]">
                <Download size={20} />
              </span>

              <span className="text-base font-semibold leading-6 text-[#111111] sm:text-lg">
                Download Brochure
              </span>

              <ArrowRight
                size={18}
                className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </button>
          </div>
        </section>

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
                    <MiniVisualCard
                      icon={<BookOpen size={20} />}
                      title="Online Learning"
                      accent="#0d5c45"
                    />

                    <MiniVisualCard
                      icon={<Users size={20} />}
                      title="Working Adults"
                      accent="#8f1d1d"
                    />

                    <MiniVisualCard
                      icon={<Target size={20} />}
                      title="Management"
                      accent="#1d355f"
                    />

                    <MiniVisualCard
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
            <SectionHeading number="02" title="Eligibility & Fee" accent="#0d5c45" />

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
            <SectionHeading number="03" title="Programme Highlights" accent="#1d355f" />

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <HighlightCard
                title="Flexible Learning"
                description="Designed for working professionals and freshers."
                icon={<BookOpen size={20} />}
                accent="#0d5c45"
              />

              <HighlightCard
                title="Online Mode"
                description="Delivered through modern web-based technologies."
                icon={<GraduationCap size={20} />}
                accent="#1d355f"
              />

              <HighlightCard
                title="Industry Focus"
                description="Courses aligned with evolving market demands."
                icon={<Landmark size={20} />}
                accent="#8f1d1d"
              />

              <HighlightCard
                title="Professional Growth"
                description="Build knowledge across functional areas of management."
                icon={<Users size={20} />}
                accent="#6b4c9a"
              />
            </div>
          </section>
        </section>

        {/* BOTTOM CTA */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-base font-medium text-slate-500 sm:text-lg">Ready to begin?</p>

                <h2 className="mt-2 text-2xl font-bold leading-tight text-[#111111] sm:text-3xl">
                  Apply for MBA Online Learning
                </h2>
              </div>

              <Link
                to="/admission"
                className="group relative inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:text-lg"
              >
                Apply Now
                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
                <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>
          </div>
        </section>

        {/* BROCHURE ENQUIRY DIALOG */}
        <EnquiryFormDialog
          open={showBrochureForm}
          onOpenChange={setShowBrochureForm}
          title="Download Brochure"
          description="Please submit your enquiry details to access the requested resource."
          idPrefix="mba-resource"
          downloadHref={MBA_BROCHURE_PDF}
          downloadLabel="Download Brochure PDF"
        />
      </main>
    </SiteLayout>
  );
}

/* SECTION HEADING */
function SectionHeading({
  number,
  title,
  accent,
}: {
  number: string;
  title: string;
  accent: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base font-bold tracking-[0.12em] sm:text-lg" style={{ color: accent }}>
        {number}
      </span>

      <span className="h-[2px] w-8 shrink-0 bg-[#d4af37]" />

      <span className="text-base font-semibold uppercase tracking-[0.1em] text-slate-500 sm:text-lg">
        {title}
      </span>
    </div>
  );
}

/* HASH QUICK CARD */
function HashQuickCard({
  href,
  section,
  icon,
  title,
  description,
  iconClass,
}: {
  href?: string;
  section?: Extract<CourseSection, "vision" | "mission">;
  icon: ReactNode;
  title: string;
  description: string;
  iconClass: string;
}) {
  const content = (
    <>
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-bold leading-6 text-[#111111] sm:text-lg">{title}</h3>

          <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">{description}</p>
        </div>

        <ArrowRight
          size={18}
          className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </>
  );

  const className =
    "group relative z-10 border-b border-slate-100 px-4 py-5 transition-all duration-300 hover:bg-slate-50 sm:border-r sm:px-5 lg:border-b-0";

  return section ? (
    <CourseInfoLink courseSlug="mba" section={section} className={className}>
      {content}
    </CourseInfoLink>
  ) : (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

/* LINK QUICK CARD */
function LinkQuickCard({
  to,
  icon,
  title,
  description,
  iconClass,
}: {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  iconClass: string;
}) {
  return (
    <Link
      to={to}
      className="group relative z-10 border-b border-slate-100 px-4 py-5 transition-all duration-300 hover:bg-slate-50 sm:border-r sm:px-5 lg:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-bold leading-6 text-[#111111] sm:text-lg">{title}</h3>

          <p className="mt-1 text-sm leading-6 text-slate-500 sm:text-base">{description}</p>
        </div>

        <ArrowRight
          size={18}
          className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </Link>
  );
}

/* MINI VISUAL CARD */
function MiniVisualCard({
  icon,
  title,
  accent,
}: {
  icon: ReactNode;
  title: string;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 sm:p-4">
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
          style={{
            backgroundColor: `${accent}12`,
            color: accent,
          }}
        >
          {icon}
        </div>

        <p className="text-sm font-semibold leading-6 text-[#111111] sm:text-base">{title}</p>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

/* MISSION ITEM */
function MissionItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-3 overflow-hidden rounded-lg bg-[#fffdf8] px-4 py-3">
      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#8f1d1d]" />

      <p className="text-base leading-7 text-[#111111] sm:text-lg sm:leading-8">{children}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
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

/* FEE TABLE */
function FeeTable({
  title,
  accent,
  applicationFee,
  tuitionFee,
}: {
  title: string;
  accent: string;
  applicationFee: string;
  tuitionFee: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <div
        className="flex items-center gap-3 px-4 py-4"
        style={{
          backgroundColor: `${accent}12`,
        }}
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${accent}18`,
            color: accent,
          }}
        >
          <Landmark size={20} />
        </div>

        <h3 className="text-base font-bold leading-6 text-[#111111] sm:text-lg">{title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-white" style={{ backgroundColor: accent }}>
              <th className="w-12 px-3 py-3 text-left text-sm font-semibold sm:text-base">#</th>

              <th className="px-3 py-3 text-left text-sm font-semibold sm:text-base">
                Particulars
              </th>

              <th className="w-28 px-3 py-3 text-right text-sm font-semibold sm:text-base">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-slate-100">
              <td className="px-3 py-4 text-base text-slate-500">1</td>

              <td className="px-3 py-4 text-base font-medium leading-6 text-[#111111]">
                Application Fee
              </td>

              <td className="px-3 py-4 text-right text-base font-bold text-[#8f1d1d]">
                {applicationFee}
              </td>
            </tr>

            <tr className="bg-slate-50/60">
              <td className="px-3 py-4 text-base text-slate-500">2</td>

              <td className="px-3 py-4 text-base font-medium leading-6 text-[#111111]">
                Tuition Fee per Semester
              </td>

              <td className="px-3 py-4 text-right text-base font-bold text-[#0d5c45]">
                {tuitionFee}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* HIGHLIGHT CARD */
function HighlightCard({
  title,
  description,
  icon,
  accent,
}: {
  title: string;
  description: string;
  icon: ReactNode;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold leading-6 sm:text-xl" style={{ color: accent }}>
        {title}
      </h3>

      <p className="mt-3 text-base leading-7 text-[#111111] sm:text-lg sm:leading-8">
        {description}
      </p>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </div>
  );
}

/* LINK ACTION CARD */
function LinkActionCard({
  to,
  courseSlug,
  icon,
  title,
  accent,
}: {
  to?: "/mca/syllabus" | "/mba/syllabus";
  courseSlug?: "mca" | "mba";
  icon: ReactNode;
  title: string;
  accent: string;
}) {
  const className =
    "group relative flex min-h-[60px] items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:shadow-md";

  const content = (
    <>
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </span>

      <span className="text-base font-semibold leading-6 text-[#111111] sm:text-lg">{title}</span>

      <ArrowRight
        size={18}
        className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1"
      />

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
    </>
  );

  if (courseSlug) {
    return (
      <CourseInfoLink courseSlug={courseSlug} section="eligibility-fee" className={className}>
        {content}
      </CourseInfoLink>
    );
  }

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }

  throw new Error("LinkActionCard requires a destination.");
}

export default MBAPage;
