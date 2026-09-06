import { useState, type ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
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
  X,
} from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/mca/")({
  component: MCAPage,
});

const MCA_BROCHURE_PDF = "/pdfs/mca-brochure.pdf";
const MCA_REGULATION_PDF = "/pdfs/mca-regulations.pdf";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

function MCAPage() {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [resourceType, setResourceType] = useState<
    "brochure" | "regulation"
  >("brochure");

  const openResource = (type: "brochure" | "regulation") => {
    setResourceType(type);
    setShowBrochureForm(true);
  };

  return (
    <SiteLayout>
      <main
        className="min-h-screen bg-[#f7f8f4] text-[#111111]"
        style={circularFont}
      >
        {/* =========================================================
            COMPACT VIOLET HEADER
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#6b4c9a]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6b4c9a] via-[#64438f] to-[#533579]" />

          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl" />

          <div className="absolute -bottom-16 left-24 h-32 w-32 rounded-full bg-[#0d5c45]/15 blur-2xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-3.5 sm:px-6 lg:px-8 lg:py-4">
            <Link
              to="/programmes"
              className="group relative mb-1.5 inline-flex items-center gap-1.5 text-[9px] font-medium text-white/75"
            >
              <span>
                <ArrowRight size={12} className="rotate-180" />
              </span>

              Back to Programmes

              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-4xl">
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[8px] font-semibold text-[#f3d15b]">
                <GraduationCap size={11} />
                Postgraduate Programme
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Master of Computer Applications
              </h1>

              <div className="mt-1.5 h-[2px] w-9 rounded-full bg-[#d4af37]" />

              <p className="mt-1.5 max-w-3xl text-[10px] leading-5 text-white/75 sm:text-[11px]">
                MCA Online Learning (OL) Programme offered by the B.S.
                Abdur Rahman Crescent Institute of Science and Technology.
              </p>

              <div className="mt-2.5">
                <Link
                  to="/admission"
                  hash="how-to-apply"
                  className="group relative inline-flex w-fit items-center gap-1.5 rounded-full bg-[#d4af37] px-3.5 py-1.5 text-[9px] font-bold text-[#111111]"
                >
                  Apply Now

                  <ArrowRight size={12} />

                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK NAVIGATION
            Overview | People | Vision | Mission
        ========================================================= */}
        <section className="mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              <HashQuickCard
                href="#overview"
                icon={<BookOpen size={16} />}
                title="Overview"
                description="Programme overview"
                iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
              />

              <LinkQuickCard
                to="/mca/people"
                icon={<Users size={16} />}
                title="People"
                description="Faculty & team"
                iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
              />

              <HashQuickCard
                href="#vision"
                icon={<Eye size={16} />}
                title="Vision"
                description="Our academic vision"
                iconClass="bg-[#1d355f]/10 text-[#1d355f]"
              />

              <HashQuickCard
                href="#mission"
                icon={<Target size={16} />}
                title="Mission"
                description="Our core mission"
                iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <section className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8 lg:py-8">

          {/* =======================================================
              OVERVIEW
          ======================================================= */}
          <section id="overview" className="scroll-mt-24">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">

              {/* LEFT VISUAL CARD */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#6b4c9a]/10" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6b4c9a]/10 text-[#6b4c9a]">
                    <GraduationCap size={30} />
                  </div>

                  <p className="mt-5 text-[8px] font-bold uppercase tracking-[0.2em] text-[#6b4c9a]">
                    Department of Computer Applications
                  </p>

                  <h2 className="mt-1.5 text-xl font-bold text-[#111111] sm:text-2xl">
                    Master of Computer Applications
                  </h2>

                  <div className="mt-2 h-[3px] w-9 rounded-full bg-[#d4af37]" />

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <MiniVisualCard
                      icon={<BookOpen size={14} />}
                      title="Computer Applications"
                      accent="#0d5c45"
                    />

                    <MiniVisualCard
                      icon={<Users size={14} />}
                      title="Qualified Faculty"
                      accent="#8f1d1d"
                    />

                    <MiniVisualCard
                      icon={<Target size={14} />}
                      title="Research & R&D"
                      accent="#1d355f"
                    />

                    <MiniVisualCard
                      icon={<Landmark size={14} />}
                      title="Industry Focus"
                      accent="#6b4c9a"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6b4c9a]" />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#6b4c9a]">
                  Department of Computer Applications
                </span>

                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                  Overview
                </h2>

                <div className="mt-1.5 h-[3px] w-9 rounded-full bg-[#d4af37]" />

                <div className="mt-4 space-y-3 text-[11px] leading-6 text-[#111111] sm:text-[12px] sm:leading-6.5">
                  <p>
                    The department offers Master of Computer Applications
                    (MCA) since 1994, M.Phil (Computer Science) since 2009,
                    Ph.D (Computer Science) since 2009, MCA (Lateral Entry)
                    since 2014. The department motivates Staff and Students
                    to promote Industry Institute Interaction and R&D
                    activities. In addition to regular curriculum the
                    department organizes technical seminars, symposia,
                    workshops, industrial visits, in-plant training to
                    expose the students to the real world environments and
                    to enable them to gain practical knowledge.
                  </p>

                  <p>
                    The website and Internet services of the institute are
                    maintained by the Department of Computer Applications.
                    Along with that the Department offers additional
                    virtual lab classes, live classes, tutorial MOOC’s and
                    vocational augmentation. Courses through IIT Professors
                    under MHRD’s QEEE programme. Special placement
                    opportunities on mobile development in Android/IOs
                    platforms.
                  </p>

                  <p>
                    The MCA Programme was accredited by NBA since 2001. The
                    department has adequate infrastructure and
                    well-equipped laboratories and it is empowered with a
                    team of highly qualified faculty members.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =======================================================
              VISION + MISSION
          ======================================================= */}
          <section className="mt-8">
            <SectionHeading
              number="01"
              title="Vision & Mission"
              accent="#6b4c9a"
            />

            <div className="mt-3 grid gap-5 lg:grid-cols-2">

              {/* VISION */}
              <div
                id="vision"
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1d355f]/10 text-[#1d355f]">
                    <Eye size={18} />
                  </div>

                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#1d355f]">
                      Academic Direction
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#111111]">
                      Vision
                    </h3>

                    <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <p className="mt-4 text-[11px] leading-6 text-[#111111] sm:text-[12px] sm:leading-6.5">
                  Aspires to provide quality education in the field of
                  computer applications with state-of-the-art computational
                  facilities and undertake quality research in collaboration
                  with industries and universities to produce committed
                  professionals and academicians to meet the needs of the
                  industries and society.
                </p>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>

              {/* MISSION */}
              <div
                id="mission"
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#8f1d1d]/10 text-[#8f1d1d]">
                    <Target size={18} />
                  </div>

                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                      Core Commitment
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#111111]">
                      Mission
                    </h3>

                    <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <MissionItem>
                    To disseminate knowledge through education and training
                    of graduates in the field of computer applications.
                  </MissionItem>

                  <MissionItem>
                    To focus on teaching - learning, research and consultancy
                    to promote excellence in computer applications.
                  </MissionItem>

                  <MissionItem>
                    To foster graduates with opportunities required to
                    explore, create and face challenges of IT related
                    industries.
                  </MissionItem>

                  <MissionItem>
                    To equip the graduates with the necessary skills in
                    communication, team work and leadership qualities to meet
                    the needs of the IT related sector globally.
                  </MissionItem>

                  <MissionItem>
                    To disseminate the outcome of projects and research work
                    undertaken by the department through appropriate measures
                    for the benefit of society and industry.
                  </MissionItem>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
          </section>

          {/* =======================================================
              ELIGIBILITY + FEE
          ======================================================= */}
          <section id="eligibility-fee" className="mt-8 scroll-mt-24">
            <SectionHeading
              number="02"
              title="Eligibility & Fee"
              accent="#0d5c45"
            />

            <div className="mt-3 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">

              {/* ELIGIBILITY */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0d5c45]/10 text-[#0d5c45]">
                    <GraduationCap size={18} />
                  </div>

                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
                      Admission Requirement
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#111111]">
                      Eligibility for Admission
                    </h3>

                    <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#0d5c45] p-3.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2
                      size={15}
                      className="mt-0.5 shrink-0 text-[#f3d15b]"
                    />

                    <p className="text-[10px] font-semibold leading-5 text-white sm:text-[11px]">
                      Any undergraduate Degree with branch of study in
                      Computer Applications, Computer Science, Engineering
                      with a minimum CGPA of 5.0 / 50% of marks.
                    </p>
                  </div>
                </div>

                <div className="my-3 text-center text-[10px] font-bold text-[#8f1d1d]">
                  OR
                </div>

                <div className="rounded-xl bg-[#f7f8f4] p-3.5">
                  <p className="text-[10px] font-medium leading-5 text-[#111111] sm:text-[11px]">
                    Any undergraduate degree with the branch of study in
                    Mathematics, Physics, Chemistry, Commerce with
                    Mathematics at Graduation Level or 12th standard Level
                    and with a minimum CGPA of 5.0 / 50% of marks.
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <EligibilityItem>
                    Admission is based on the CGPA / Percentage obtained in
                    the UG degree and performance in the Crescent PG
                    Entrance Exam (CPGEE).
                  </EligibilityItem>

                  <EligibilityItem>
                    Applicants who have already appeared in the National
                    level Entrance Exams like TANCET, etc., and have secured
                    valid scores are exempted from appearing CPGEE.
                  </EligibilityItem>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>

              {/* FEE */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#8a6d12]">
                    <Landmark size={18} />
                  </div>

                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8a6d12]">
                      Indian & Foreign Nationals
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#111111]">
                      Fee Structure
                    </h3>

                    <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <FeeTable
                    title="Indian Nationals"
                    accent="#0d5c45"
                    applicationFee="₹1,000"
                    tuitionFee="₹30,000"
                  />

                  <FeeTable
                    title="Foreign Nationals"
                    accent="#6b4c9a"
                    applicationFee="$15"
                    tuitionFee="$750"
                  />
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
          </section>

          {/* =======================================================
              PROGRAMME HIGHLIGHTS
          ======================================================= */}
          <section className="mt-8">
            <SectionHeading
              number="03"
              title="Programme Highlights"
              accent="#1d355f"
            />

            <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <HighlightCard
                title="Virtual Learning"
                description="Virtual lab classes, live classes and tutorial MOOCs."
                icon={<BookOpen size={14} />}
                accent="#0d5c45"
              />

              <HighlightCard
                title="R&D Activities"
                description="Industry interaction and research activities."
                icon={<GraduationCap size={14} />}
                accent="#1d355f"
              />

              <HighlightCard
                title="IT Industry"
                description="Opportunities related to emerging IT technologies."
                icon={<Landmark size={14} />}
                accent="#8f1d1d"
              />

              <HighlightCard
                title="Infrastructure"
                description="Well-equipped laboratories and computational facilities."
                icon={<Users size={14} />}
                accent="#6b4c9a"
              />
            </div>
          </section>

          {/* =======================================================
              ADDITIONAL LINKS
          ======================================================= */}
          <section className="mt-7">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <LinkActionCard
                to="/mca/eligibility-fee"
                icon={<BookOpen size={15} />}
                title="Eligibility & fee"
                accent="#5b1d5f"
              />

              <LinkActionCard
                to="/mca/syllabus"
                icon={<BookOpen size={15} />}
                title="Syllabus"
                accent="#1d355f"
              />

              <button
                type="button"
                onClick={() => openResource("regulation")}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-left shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#8a6d12]">
                  <FileText size={15} />
                </span>

                <span className="text-[10px] font-semibold text-[#111111]">
                  Regulations
                </span>

                <ArrowRight
                  size={12}
                  className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
                />

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
              </button>

              <button
                type="button"
                onClick={() => openResource("brochure")}
                className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-left shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6b4c9a]/10 text-[#6b4c9a]">
                  <Download size={15} />
                </span>

                <span className="text-[10px] font-semibold text-[#111111]">
                  Download Brochure
                </span>

                <ArrowRight
                  size={12}
                  className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
                />

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
              </button>
            </div>
          </section>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-medium text-slate-500">
                  Ready to begin?
                </p>

                <h2 className="mt-0.5 text-base font-bold text-[#111111]">
                  Apply for MCA Online Learning
                </h2>
              </div>

              <Link
                to="/admission"
                className="group relative inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-4 py-2 text-[10px] font-semibold text-white"
              >
                Apply Now

                <ArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />

                <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            BROCHURE / REGULATION ENQUIRY MODAL
        ========================================================= */}
        {showBrochureForm && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
            onClick={() => setShowBrochureForm(false)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowBrochureForm(false)}
                aria-label="Close enquiry form"
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111111] shadow-md"
              >
                <X size={17} />
              </button>

              <div className="bg-[#6b4c9a] px-5 py-4 pr-14">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#f3d15b]">
                  MCA Online Learning
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  {resourceType === "brochure"
                    ? "Download Brochure"
                    : "MCA Regulation"}
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-white/75">
                  Please submit your enquiry details to access the requested
                  resource.
                </p>
              </div>

              <div className="p-4 sm:p-5">
                <EnquiryForm />

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <a
                    href={
                      resourceType === "brochure"
                        ? MCA_BROCHURE_PDF
                        : MCA_REGULATION_PDF
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#8f1d1d] px-4 py-2.5 text-[10px] font-semibold text-white"
                  >
                    <Download size={14} />

                    {resourceType === "brochure"
                      ? "Open Brochure PDF"
                      : "Open Regulation PDF"}

                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </SiteLayout>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

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
    <div className="flex items-center gap-2">
      <span
        className="text-[9px] font-bold tracking-[0.14em]"
        style={{ color: accent }}
      >
        {number}
      </span>

      <span className="h-[2px] w-6 bg-[#d4af37]" />

      <span className="text-[8px] font-semibold uppercase tracking-[0.13em] text-slate-500">
        {title}
      </span>
    </div>
  );
}

/* =========================================================
   HASH QUICK CARD
========================================================= */

function HashQuickCard({
  href,
  icon,
  title,
  description,
  iconClass,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  iconClass: string;
}) {
  return (
    <a
      href={href}
      className="group relative z-10 border-b border-slate-100 px-4 py-3 transition-all duration-300 sm:border-r lg:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-[10px] font-bold text-[#111111]">
            {title}
          </h3>

          <p className="mt-0.5 text-[8px] text-slate-500">
            {description}
          </p>
        </div>

        <ArrowRight
          size={12}
          className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </a>
  );
}

/* =========================================================
   LINK QUICK CARD
========================================================= */

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
      className="group relative z-10 border-b border-slate-100 px-4 py-3 transition-all duration-300 sm:border-r lg:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-[10px] font-bold text-[#111111]">
            {title}
          </h3>

          <p className="mt-0.5 text-[8px] text-slate-500">
            {description}
          </p>
        </div>

        <ArrowRight
          size={12}
          className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </Link>
  );
}

/* =========================================================
   MINI VISUAL CARD
========================================================= */

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
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5">
      <div className="flex items-center gap-2">
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${accent}12`,
            color: accent,
          }}
        >
          {icon}
        </div>

        <p className="text-[8px] font-semibold text-[#111111]">
          {title}
        </p>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

/* =========================================================
   MISSION ITEM
========================================================= */

function MissionItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-2 overflow-hidden rounded-lg bg-[#fffdf8] px-2.5 py-2">
      <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f1d1d]" />

      <p className="text-[9px] leading-[1.6] text-[#111111] sm:text-[10px]">
        {children}
      </p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

/* =========================================================
   ELIGIBILITY ITEM
========================================================= */

function EligibilityItem({ children }: { children: ReactNode }) {
  return (
    <div className="group relative flex items-start gap-2 overflow-hidden border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
      <CheckCircle2
        size={13}
        className="mt-0.5 shrink-0 text-[#8f1d1d]"
      />

      <p className="text-[9px] leading-[1.6] text-[#111111] sm:text-[10px]">
        {children}
      </p>

      <span className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
    </div>
  );
}

/* =========================================================
   FEE TABLE
========================================================= */

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
        className="flex items-center gap-2 px-3 py-2"
        style={{
          backgroundColor: `${accent}12`,
        }}
      >
        <div
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{
            backgroundColor: `${accent}18`,
            color: accent,
          }}
        >
          <Landmark size={13} />
        </div>

        <h3 className="text-[10px] font-bold text-[#111111]">
          {title}
        </h3>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr
            className="text-white"
            style={{
              backgroundColor: accent,
            }}
          >
            <th className="w-8 px-2.5 py-2 text-left text-[8px]">
              #
            </th>

            <th className="px-2.5 py-2 text-left text-[8px]">
              Particulars
            </th>

            <th className="w-24 px-2.5 py-2 text-right text-[8px]">
              Amount
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b border-slate-100">
            <td className="px-2.5 py-2 text-[8px] text-slate-500">
              1
            </td>

            <td className="px-2.5 py-2 text-[9px] font-medium text-[#111111]">
              Application Fee
            </td>

            <td className="px-2.5 py-2 text-right text-[9px] font-bold text-[#8f1d1d]">
              {applicationFee}
            </td>
          </tr>

          <tr className="bg-slate-50/60">
            <td className="px-2.5 py-2 text-[8px] text-slate-500">
              2
            </td>

            <td className="px-2.5 py-2 text-[9px] font-medium text-[#111111]">
              Tuition Fee per Semester
            </td>

            <td className="px-2.5 py-2 text-right text-[9px] font-bold text-[#0d5c45]">
              {tuitionFee}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* =========================================================
   HIGHLIGHT CARD
========================================================= */

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
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div
        className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </div>

      <h3
        className="text-[9px] font-bold sm:text-[10px]"
        style={{
          color: accent,
        }}
      >
        {title}
      </h3>

      <p className="mt-1 text-[8px] leading-4 text-[#111111] sm:text-[9px]">
        {description}
      </p>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </div>
  );
}

/* =========================================================
   LINK ACTION CARD
========================================================= */

function LinkActionCard({
  to,
  icon,
  title,
  accent,
}: {
  to: string;
  icon: ReactNode;
  title: string;
  accent: string;
}) {
  return (
    <Link
      to={to}
      className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3 shadow-sm"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
        style={{
          backgroundColor: `${accent}12`,
          color: accent,
        }}
      >
        {icon}
      </span>

      <span className="text-[10px] font-semibold text-[#111111]">
        {title}
      </span>

      <ArrowRight
        size={12}
        className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
      />

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
    </Link>
  );
}