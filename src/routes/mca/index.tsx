
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
import mcaBrochurePdf from "@/assets/ODL MCA Website Brochure09012026.pdf";
import mcaRegulationsPdf from "@/assets/DeanAA-MBA-MCA-ODL-and-OL-Regulations2021-24.11.2021-F.pdf";

export const Route = createFileRoute("/mca/")({
  component: MCAPage,
});

const MCA_BROCHURE_PDF = mcaBrochurePdf;

const circularFont = {
  fontFamily: "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

function MCAPage() {
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8f4] text-[#111111]" style={circularFont}>
        {/* COMPACT VIOLET HEADER */}
        <section className="relative overflow-hidden bg-[#6b4c9a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6b4c9a] via-[#64438f] to-[#533579]" />
          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl" />
          <div className="absolute -bottom-16 left-24 h-32 w-32 rounded-full bg-[#0d5c45]/15 blur-2xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-5">
            <Link
              to="/programmes"
              className="group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80"
            >
              <ArrowRight size={15} className="rotate-180" />
              Back to Programmes
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-4xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-[#f3d15b]">
                <GraduationCap size={16} />
                Postgraduate Programme
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Master of Computer Applications
              </h1>

              <div className="mt-2 h-[3px] w-10 rounded-full bg-[#d4af37]" />

              <p className="mt-2 max-w-3xl text-base leading-7 text-white/80">
                MCA Online Learning (OL) Programme offered by the B.S. Abdur Rahman Crescent
                Institute of Science and Technology.
              </p>

              <div className="mt-3">
                <Link
                  to="/admission"
                  hash="how-to-apply"
                  className="group relative inline-flex w-fit items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-sm font-bold text-[#111111]"
                >
                  Apply Now
                  <ArrowRight size={15} />
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK NAVIGATION */}
        <section className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <HashQuickCard
                href="#overview"
                icon={<BookOpen size={18} />}
                title="Overview"
                description="Programme overview"
                iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
              />

              <LinkQuickCard
                to="/mca/people"
                icon={<Users size={18} />}
                title="People"
                description="Faculty & team"
                iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
              />

              <HashQuickCard
                section="vision"
                icon={<Eye size={18} />}
                title="Vision"
                description="Our academic vision"
                iconClass="bg-[#1d355f]/10 text-[#1d355f]"
              />

              <HashQuickCard
                section="mission"
                icon={<Target size={18} />}
                title="Mission"
                description="Our core mission"
                iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
              />
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <LinkActionCard
              courseSlug="mca"
              icon={<BookOpen size={17} />}
              title="Eligibility & fee"
              accent="#5b1d5f"
            />

            <LinkActionCard
              to="/mca/syllabus"
              icon={<BookOpen size={17} />}
              title="Syllabus"
              accent="#1d355f"
            />

            <a
              href={mcaRegulationsPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 text-left shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#8a6d12]">
                <FileText size={17} />
              </span>

              <span className="text-base font-semibold text-[#111111]">Regulations</span>

              <ArrowRight
                size={15}
                className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </a>

            <button
              type="button"
              onClick={() => setShowBrochureForm(true)}
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 text-left shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6b4c9a]/10 text-[#6b4c9a]">
                <Download size={17} />
              </span>

              <span className="text-base font-semibold text-[#111111]">Download Brochure</span>

              <ArrowRight
                size={15}
                className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </button>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-24">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              {/* LEFT VISUAL CARD */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#6b4c9a]/10" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6b4c9a]/10 text-[#6b4c9a]">
                    <GraduationCap size={34} />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a]">
                    Department of Computer Applications
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#111111] sm:text-4xl">
                    Master of Computer Applications
                  </h2>

                  <div className="mt-3 h-[3px] w-10 rounded-full bg-[#d4af37]" />

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <MiniVisualCard
                      icon={<BookOpen size={17} />}
                      title="Computer Applications"
                      accent="#0d5c45"
                    />

                    <MiniVisualCard
                      icon={<Users size={17} />}
                      title="Qualified Faculty"
                      accent="#8f1d1d"
                    />

                    <MiniVisualCard
                      icon={<Target size={17} />}
                      title="Research & R&D"
                      accent="#1d355f"
                    />

                    <MiniVisualCard
                      icon={<Landmark size={17} />}
                      title="Industry Focus"
                      accent="#6b4c9a"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6b4c9a]" />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a]">
                  Department of Computer Applications
                </span>

                <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                  Overview
                </h2>

                <div className="mt-2 h-[3px] w-10 rounded-full bg-[#d4af37]" />

                <div className="mt-5 space-y-4 text-base leading-7 text-[#111111]">
                  <p>
                    The department offers Master of Computer Applications (MCA) since 1994, M.Phil
                    (Computer Science) since 2009, Ph.D (Computer Science) since 2009, MCA (Lateral
                    Entry) since 2014. The department motivates Staff and Students to promote
                    Industry Institute Interaction and R&D activities. In addition to regular
                    curriculum the department organizes technical seminars, symposia, workshops,
                    industrial visits, in-plant training to expose the students to the real world
                    environments and to enable them to gain practical knowledge.
                  </p>

                  <p>
                    The website and Internet services of the institute are maintained by the
                    Department of Computer Applications. Along with that the Department offers
                    additional virtual lab classes, live classes, tutorial MOOC’s and vocational
                    augmentation. Courses through IIT Professors under MHRD’s QEEE programme.
                    Special placement opportunities on mobile development in Android/IOs platforms.
                  </p>

                  <p>
                    The MCA Programme was accredited by NBA since 2001. The department has adequate
                    infrastructure and well-equipped laboratories and it is empowered with a team of
                    highly qualified faculty members.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMME HIGHLIGHTS */}
          <section className="mt-9">
            <SectionHeading number="03" title="Programme Highlights" accent="#1d355f" />

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <HighlightCard
                title="Virtual Learning"
                description="Virtual lab classes, live classes and tutorial MOOCs."
                icon={<BookOpen size={17} />}
                accent="#0d5c45"
              />

              <HighlightCard
                title="R&D Activities"
                description="Industry interaction and research activities."
                icon={<GraduationCap size={17} />}
                accent="#1d355f"
              />

              <HighlightCard
                title="IT Industry"
                description="Opportunities related to emerging IT technologies."
                icon={<Landmark size={17} />}
                accent="#8f1d1d"
              />

              <HighlightCard
                title="Infrastructure"
                description="Well-equipped laboratories and computational facilities."
                icon={<Users size={17} />}
                accent="#6b4c9a"
              />
            </div>
          </section>
        </section>

        {/* BOTTOM CTA */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Ready to begin?</p>

                <h2 className="mt-1 text-2xl font-bold text-[#111111]">
                  Apply for MCA Online Learning
                </h2>
              </div>

              <Link
                to="/admission"
                className="group relative inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white"
              >
                Apply Now
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
                <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>
          </div>
        </section>

        <EnquiryFormDialog
          open={showBrochureForm}
          onOpenChange={setShowBrochureForm}
          title="Download Brochure"
          description="Please submit your enquiry details to access the requested resource."
          idPrefix="mca-resource"
          downloadHref={MCA_BROCHURE_PDF}
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
      <span className="text-sm font-bold tracking-[0.12em]" style={{ color: accent }}>
        {number}
      </span>

      <span className="h-[2px] w-7 bg-[#d4af37]" />

      <span className="text-sm font-semibold uppercase tracking-[0.1em] text-slate-500">
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
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-bold text-[#111111]">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>

        <ArrowRight
          size={15}
          className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </>
  );

  const className =
    "group relative z-10 border-b border-slate-100 px-4 py-4 transition-all duration-300 sm:border-r lg:border-b-0";

  return section ? (
    <CourseInfoLink courseSlug="mca" section={section} className={className}>
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
      className="group relative z-10 border-b border-slate-100 px-4 py-4 transition-all duration-300 sm:border-r lg:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-bold text-[#111111]">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>

        <ArrowRight
          size={15}
          className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
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
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
      <div className="flex items-center gap-2">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${accent}12`,
            color: accent,
          }}
        >
          {icon}
        </div>

        <p className="text-sm font-semibold leading-5 text-[#111111]">{title}</p>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

/* MISSION ITEM */
function MissionItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-2 overflow-hidden rounded-lg bg-[#fffdf8] px-3 py-2.5">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f1d1d]" />

      <p className="text-sm leading-6 text-[#111111] sm:text-base">{children}</p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

/* ELIGIBILITY ITEM */
function EligibilityItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-2 overflow-hidden border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
      <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#8f1d1d]" />

      <p className="text-sm leading-6 text-[#111111] sm:text-base">{children}</p>

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
        className="flex items-center gap-2 px-3 py-3"
        style={{
          backgroundColor: `${accent}12`,
        }}
      >
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${accent}18`,
            color: accent,
          }}
        >
          <Landmark size={16} />
        </div>

        <h3 className="text-base font-bold text-[#111111]">{title}</h3>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-white" style={{ backgroundColor: accent }}>
            <th className="w-10 px-3 py-3 text-left text-sm">#</th>
            <th className="px-3 py-3 text-left text-sm">Particulars</th>
            <th className="w-28 px-3 py-3 text-right text-sm">Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-slate-100">
            <td className="px-3 py-3 text-sm text-slate-500">1</td>
            <td className="px-3 py-3 text-sm font-medium text-[#111111]">Application Fee</td>
            <td className="px-3 py-3 text-right text-sm font-bold text-[#8f1d1d]">
              {applicationFee}
            </td>
          </tr>

          <tr className="bg-slate-50/60">
            <td className="px-3 py-3 text-sm text-slate-500">2</td>
            <td className="px-3 py-3 text-sm font-medium text-[#111111]">
              Tuition Fee per Semester
            </td>
            <td className="px-3 py-3 text-right text-sm font-bold text-[#0d5c45]">
              {tuitionFee}
            </td>
          </tr>
        </tbody>
      </table>
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
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div
        className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </div>

      <h3 className="text-base font-bold sm:text-lg" style={{ color: accent }}>
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#111111] sm:text-base">{description}</p>

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
    "group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 shadow-sm";

  const content = (
    <>
      <span
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </span>

      <span className="text-base font-semibold text-[#111111]">{title}</span>

      <ArrowRight
        size={15}
        className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
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
