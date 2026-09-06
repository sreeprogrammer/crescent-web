import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Users,
  Target,
  Eye,
  Download,
  X,
} from "lucide-react";

import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/ba-islamic-studies/")({
  component: BAIslamicStudiesPage,
});

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

const BROCHURE_PDF = "/pdfs/ba-islamic-studies-brochure.pdf";

function BAIslamicStudiesPage() {
  const [showBrochureForm, setShowBrochureForm] = useState(false);

  return (
    <SiteLayout>
      <main
        className="min-h-screen bg-[#f7f8f4] text-[#111111]"
        style={circularFont}
      >
        {/* =========================================================
            COMPACT HERO / HEADER
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#0d5c45]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]" />

          <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl" />

          <div className="absolute -bottom-16 left-24 h-32 w-32 rounded-full bg-[#8f1d1d]/10 blur-2xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-3.5 sm:px-6 lg:px-8 lg:py-4">
            <Link
              to="/programmes"
              className="group relative mb-1.5 inline-flex items-center gap-1.5 text-[9px] font-medium text-white/75 transition-all duration-300"
            >
              <ArrowLeft size={12} />
              Back to Programmes

              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-3xl">
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#d4af37]/10 px-2.5 py-1 text-[8px] font-semibold text-[#f4d979]">
                <GraduationCap size={11} />
                Undergraduate Programme
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                BA Islamic Studies
              </h1>

              <div className="mt-1 h-[2px] w-8 rounded-full bg-[#d4af37]" />

              <p className="mt-1.5 max-w-2xl text-[10px] leading-5 text-white/75 sm:text-[11px]">
                Explore the Bachelor of Arts in Islamic Studies programme
                offered through Crescent Distance Education with flexible
                learning and student-focused academic support.
              </p>

              <div className="mt-2">
                <Link
                  to="/admission"
                  className="group relative z-10 inline-flex items-center gap-1.5 rounded-full bg-[#d4af37] px-3.5 py-1.5 text-[10px] font-bold text-[#111111] transition-all duration-300"
                >
                  Apply Now

                  <ArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />

                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK NAVIGATION
        ========================================================= */}
        <section className="mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] sm:grid-cols-2 lg:grid-cols-4">
            {/* OVERVIEW */}
            <QuickCard
              to="/ba-islamic-studies"
              icon={<BookOpen size={16} />}
              title="Overview"
              description="Programme overview"
              iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
            />

            {/* PEOPLE */}
            <QuickCard
              to="/ba-islamic-studies/people"
              icon={<Users size={16} />}
              title="People"
              description="Faculty & team"
              iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
            />

            {/* VISION */}
            <HashQuickCard
              href="#vision"
              icon={<Eye size={16} />}
              title="Vision"
              description="Our academic vision"
              iconClass="bg-[#1d355f]/10 text-[#1d355f]"
            />

            {/* MISSION */}
            <HashQuickCard
              href="#mission"
              icon={<Target size={16} />}
              title="Mission"
              description="Our core mission"
              iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
            />
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <section className="mx-auto max-w-7xl px-5 py-6 sm:px-6 lg:px-8 lg:py-8">
          {/* =======================================================
              OVERVIEW
          ======================================================= */}
          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
            {/* FIRST PHOTO - LEFT */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[470px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
                <img
                  src="https://distance.crescent-institute.edu.in/img/bais/main.jpg"
                  alt="BA Islamic Studies"
                  className="h-[200px] w-full object-cover sm:h-[220px] lg:h-[235px]"
                />

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
              </div>
            </div>

            {/* OVERVIEW CONTENT - RIGHT */}
            <div className="flex flex-col justify-center">
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
                Department of B.A. Islamic Studies
              </span>

              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                Overview
              </h2>

              <div className="mt-1.5 h-[3px] w-9 rounded-full bg-[#d4af37]" />

              <div className="mt-4 space-y-3 text-[11px] leading-6 text-[#111111] sm:text-[12px] sm:leading-6.5">
                <p>
                  The school was established in 2009 with the vision of
                  promoting faith and value based education by combining
                  religious education and modern science. It was the dream
                  of the founder Dr.B.S.Abdur Rahman to promote a set of
                  younger generation equipped with both the revealed and
                  scientific knowledge. By Establishment of this school,
                  his dream became true.
                </p>

                <p>
                  The school offers UG, PG and Ph.D. programmes in Arabic
                  and Islamic studies, aiming at bringing the Islamic
                  studies into main streamline of modern education
                  combining the revealed knowledge and modern science.
                </p>

                <p>
                  The school aims to promote graduates who would be capable
                  of addressing modern issues and guiding the younger
                  generation of society and humanity at large towards right
                  path.
                </p>
              </div>
            </div>
          </div>

          {/* =======================================================
              SECOND PHOTO + CONTENT
          ======================================================= */}
          <div className="mt-8 grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
            {/* CONTENT LEFT */}
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                Arabic & Islamic Studies
              </span>

              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-[#111111] sm:text-2xl">
                Faith, Values & Modern Education
              </h3>

              <div className="mt-1.5 h-[3px] w-9 rounded-full bg-[#d4af37]" />

              <p className="mt-4 text-[11px] leading-6 text-[#111111] sm:text-[12px] sm:leading-6.5">
                The school focuses on combining revealed knowledge with
                modern scientific understanding, helping students develop
                academic knowledge together with values and a broader
                understanding of contemporary society.
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-[#0d5c45]/10 p-2 text-[#0d5c45]">
                      <BookOpen size={15} />
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-wide text-slate-500">
                        Focus
                      </p>

                      <p className="text-[10px] font-semibold text-[#111111]">
                        Islamic Studies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-[#1d355f]/10 p-2 text-[#1d355f]">
                      <GraduationCap size={15} />
                    </div>

                    <div>
                      <p className="text-[8px] uppercase tracking-wide text-slate-500">
                        Education
                      </p>

                      <p className="text-[10px] font-semibold text-[#111111]">
                        Modern Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND PHOTO - RIGHT */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[470px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.07)]">
                <img
                  src="https://distance.crescent-institute.edu.in/img/bais/arabvision.jpg"
                  alt="Arabic and Islamic Studies"
                  className="h-[195px] w-full object-cover sm:h-[215px] lg:h-[235px]"
                />

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8f1d1d]" />
              </div>
            </div>
          </div>

          {/* =======================================================
              VISION + MISSION
          ======================================================= */}
          <section id="vision" className="mt-8 scroll-mt-24">
            <div className="grid gap-5 lg:grid-cols-2">
              {/* VISION */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:p-6">
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
                  The school looks forward to be a leader in Arabic and
                  Islamic Studies to promote graduates, capable of bringing
                  about positive change for the betterment of self, family,
                  society and humanity based on moderate approach of revealed
                  knowledge and modern science.
                </p>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>

              {/* MISSION */}
              <div
                id="mission"
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:p-6"
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

                <p className="mt-4 text-[11px] font-semibold leading-6 text-[#111111] sm:text-[12px]">
                  The School is committed:
                </p>

                <ul className="mt-2.5 space-y-2 text-[10px] leading-5 text-[#111111] sm:text-[11px]">
                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0d5c45]" />
                    <span>
                      To empower the younger generation through quality
                      education in both revealed and contemporary knowledge
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8f1d1d]" />
                    <span>
                      To promote leadership quality and overall personality
                      to face global challenges
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d355f]" />
                    <span>
                      To develop logical and creative thinking through
                      research
                    </span>
                  </li>

                  <li className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>
                      To provide excellent ambience for language and soft
                      skill development
                    </span>
                  </li>
                </ul>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
          </section>

          {/* =======================================================
              ELIGIBILITY + FEE
          ======================================================= */}
          <section
            id="eligibility-fee"
            className="mt-8 scroll-mt-24"
          >
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              {/* ELIGIBILITY */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:p-6">
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

                <p className="mt-4 text-[11px] leading-6 text-[#111111] sm:text-[12px] sm:leading-6.5">
                  A Students for admission to the first semester of the
                  undergraduate degree programme must have passed the Higher
                  Secondary Examination of the 10 +2 curriculum (Academic
                  stream) or any other examination of any authority accepted
                  by this Institution as equivalent thereto.
                </p>

                <div className="mt-4 flex gap-2 rounded-xl bg-[#0d5c45]/5 p-3">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-[#0d5c45]"
                  />

                  <p className="text-[10px] leading-5 text-[#111111] sm:text-[11px]">
                    The eligibility criteria such as marks, number of
                    attempts and physical fitness shall be as prescribed by
                    the Institution in adherence to the guidelines of
                    regulatory / statuatory authorities from time to time.
                  </p>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>

              {/* FEE STRUCTURE */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#8a6d12]">
                    <FileText size={18} />
                  </div>

                  <div>
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#8a6d12]">
                      Indian Nationals
                    </span>

                    <h3 className="mt-1 text-xl font-bold text-[#111111]">
                      Fee Structure
                    </h3>

                    <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#1d355f] text-white">
                        <th className="px-3 py-2.5 text-[9px] font-semibold">
                          #
                        </th>

                        <th className="px-3 py-2.5 text-[9px] font-semibold">
                          Particulars
                        </th>

                        <th className="px-3 py-2.5 text-right text-[9px] font-semibold">
                          Amount
                        </th>
                      </tr>
                    </thead>

                    <tbody className="text-[10px] text-[#111111]">
                      <tr className="border-b border-slate-100">
                        <td className="px-3 py-3">1</td>

                        <td className="px-3 py-3 font-medium">
                          Application Fee
                        </td>

                        <td className="px-3 py-3 text-right font-semibold">
                          ₹1,000
                        </td>
                      </tr>

                      <tr>
                        <td className="px-3 py-3">2</td>

                        <td className="px-3 py-3 font-medium">
                          Tuition Fee per Year
                        </td>

                        <td className="px-3 py-3 text-right font-semibold text-[#0d5c45]">
                          ₹15,000
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
              </div>
            </div>
          </section>

          {/* =======================================================
              QUICK INFORMATION
          ======================================================= */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <InfoCard
              icon={<GraduationCap size={17} />}
              title="Programme"
              value="BA Islamic Studies"
              iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
            />

            <InfoCard
              icon={<BookOpen size={17} />}
              title="Programme Level"
              value="Undergraduate"
              iconClass="bg-[#1d355f]/10 text-[#1d355f]"
            />

            <InfoCard
              icon={<Users size={17} />}
              title="Learning Mode"
              value="Distance Education"
              iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
            />

            <InfoCard
              icon={<CheckCircle2 size={17} />}
              title="Student Support"
              value="Academic Support Available"
              iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
            />
          </div>

          {/* =======================================================
              PROGRAMME INFORMATION
          ======================================================= */}
          <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
              Programme Information
            </span>

            <h3 className="mt-1.5 text-xl font-bold text-[#111111]">
              Bachelor of Arts in Islamic Studies
            </h3>

            <div className="mt-1.5 h-[3px] w-8 rounded-full bg-[#d4af37]" />

            <div className="mt-3 space-y-2.5 text-[11px] leading-6 text-[#111111] sm:text-[12px] sm:leading-6.5">
              <p>
                The BA Islamic Studies programme provides students with an
                opportunity to develop a structured understanding of Islamic
                studies through flexible distance education. The programme
                is designed to support learners through accessible academic
                resources and a flexible learning environment.
              </p>

              <p>
                Students can access their academic resources through the
                learning platform while receiving support throughout their
                programme.
              </p>
            </div>
          </div>

          {/* =======================================================
              ADDITIONAL PROGRAMME LINKS
          ======================================================= */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {/* ELIGIBILITY */}
            <a
              href="#eligibility-fee"
              className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 transition-all duration-300"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0d5c45]/10 text-[#0d5c45]">
                <FileText size={15} />
              </span>

              <span className="text-[10px] font-semibold text-[#111111]">
                Eligibility & Fee
              </span>

              <ArrowRight
                size={12}
                className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
            </a>

            {/* SYLLABUS - SEPARATE PAGE */}
            <Link
              to="/ba-islamic-studies/syllabus"
              className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 transition-all duration-300"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#1d355f]/10 text-[#1d355f]">
                <BookOpen size={15} />
              </span>

              <span className="text-[10px] font-semibold text-[#111111]">
                Syllabus
              </span>

              <ArrowRight
                size={12}
                className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
            </Link>


            {/* REGULATIONS - SEPARATE PAGE */}
            <Link
              to="/ba-islamic-studies/regulations"
              className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 transition-all duration-300"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#8a6d12]">
                <FileText size={15} />
              </span>

              <span className="text-[10px] font-semibold text-[#111111]">
                Regulations
              </span>

              <ArrowRight
                size={12}
                className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
            </Link>

            {/* BROCHURE */}
            <button
              type="button"
              onClick={() => setShowBrochureForm(true)}
              className="group relative z-10 flex w-full items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left transition-all duration-300"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#8a6d12]">
                <FileText size={15} />
              </span>

              <span className="text-[10px] font-semibold text-[#111111]">
                Download Brochure
              </span>

              <Download
                size={12}
                className="ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-y-0.5"
              />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
            </button>
          </div>
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
                  Apply for BA Islamic Studies
                </h2>
              </div>

              <Link
                to="/admission"
                className="group relative z-10 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-4 py-2 text-[10px] font-semibold text-white transition-all duration-300"
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
            BROCHURE ENQUIRY FORM
        ========================================================= */}
        {showBrochureForm && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setShowBrochureForm(false)}
                aria-label="Close brochure enquiry form"
                className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#111111] shadow-md transition-all duration-300"
              >
                <X size={17} />
              </button>

              {/* HEADER */}
              <div className="bg-[#0d5c45] px-5 py-4 pr-14">
                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                  BA Islamic Studies
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Download Brochure
                </h3>

                <p className="mt-1 text-[10px] leading-5 text-white/75">
                  Please submit your enquiry details to access the brochure.
                </p>
              </div>

              {/* ENQUIRY FORM */}
              <div className="p-4 sm:p-5">
                <EnquiryForm />

                <div className="mt-4 border-t border-slate-200 pt-4">
                  <a
                    href={BROCHURE_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#8f1d1d] px-4 py-2.5 text-[10px] font-semibold text-white transition-all duration-300"
                  >
                    <Download size={14} />
                    Open Brochure PDF

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
   QUICK CARD
========================================================= */

function QuickCard({
  to,
  icon,
  title,
  description,
  iconClass,
}: {
  to: string;
  icon: React.ReactNode;
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
  icon: React.ReactNode;
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
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  title,
  value,
  iconClass,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconClass: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        <div
          className={`shrink-0 rounded-xl p-2.5 ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[8px] font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <p className="mt-0.5 text-[11px] font-semibold text-[#111111]">
            {value}
          </p>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9" />
    </div>
  );
}