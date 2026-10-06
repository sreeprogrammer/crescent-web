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
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-[#0d5c45]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]" />

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl" />

          <div className="absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-[#8f1d1d]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <Link
              to="/programmes"
              className="group relative mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white"
            >
              <ArrowLeft className="size-4" />

              Back to Programmes

              <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>

            <div className="max-w-4xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1.5 text-xs font-semibold text-[#f4d979]">
                <GraduationCap className="size-4" />

                Undergraduate Programme
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                BA Islamic Studies
              </h1>

              <div className="mt-3 h-1 w-12 rounded-full bg-[#d4af37]" />

              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                Explore the Bachelor of Arts in Islamic Studies programme
                offered through Crescent Distance Education with flexible
                learning and student-focused academic support.
              </p>

              <div className="mt-5">
                <Link
                  to="/admission"
                  className="group relative z-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Apply Now

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />

                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK NAVIGATION
        ========================================================= */}
        <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.05)] sm:grid-cols-2 lg:grid-cols-4">
            <QuickCard
              to="/ba-islamic-studies"
              icon={<BookOpen className="size-5" />}
              title="Overview"
              description="Programme overview"
              iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
            />

            <QuickCard
              to="/ba-islamic-studies/people"
              icon={<Users className="size-5" />}
              title="People"
              description="Faculty & team"
              iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
            />

            <HashQuickCard
              href="#vision"
              icon={<Eye className="size-5" />}
              title="Vision"
              description="Our academic vision"
              iconClass="bg-[#1d355f]/10 text-[#1d355f]"
            />

            <HashQuickCard
              href="#mission"
              icon={<Target className="size-5" />}
              title="Mission"
              description="Our core mission"
              iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
            />
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          {/* =======================================================
              OVERVIEW
          ======================================================= */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
                <img
                  src="https://distance.crescent-institute.edu.in/img/bais/main.jpg"
                  alt="BA Islamic Studies"
                  className="h-[230px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                />

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#d4af37]" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
                Department of B.A. Islamic Studies
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
                Overview
              </h2>

              <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

              <div className="mt-6 space-y-4 text-sm leading-7 text-[#111111] sm:text-base sm:leading-7">
                <p>
                  The school was established in 2009 with the vision of
                  promoting faith and value based education by combining
                  religious education and modern science. It was the dream of
                  the founder Dr. B.S. Abdur Rahman to promote a set of younger
                  generation equipped with both the revealed and scientific
                  knowledge. By establishment of this school, his dream became
                  true.
                </p>

                <p>
                  The school offers UG, PG and Ph.D. programmes in Arabic and
                  Islamic studies, aiming at bringing Islamic studies into the
                  mainstream of modern education by combining revealed
                  knowledge and modern science.
                </p>

                <p>
                  The school aims to promote graduates who would be capable of
                  addressing modern issues and guiding the younger generation of
                  society and humanity at large towards the right path.
                </p>
              </div>
            </div>
          </div>

          {/* =======================================================
              SECOND IMAGE + CONTENT
          ======================================================= */}
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* CONTENT */}
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                Arabic & Islamic Studies
              </span>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl">
                Faith, Values & Modern Education
              </h3>

              <div className="mt-3 h-1 w-10 rounded-full bg-[#d4af37]" />

              <p className="mt-5 text-sm leading-7 text-[#111111] sm:text-base">
                The school focuses on combining revealed knowledge with modern
                scientific understanding, helping students develop academic
                knowledge together with values and a broader understanding of
                contemporary society.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#0d5c45]/10 p-2.5 text-[#0d5c45]">
                      <BookOpen className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Focus
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-[#111111]">
                        Islamic Studies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#1d355f]/10 p-2.5 text-[#1d355f]">
                      <GraduationCap className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Education
                      </p>

                      <p className="mt-0.5 text-sm font-semibold text-[#111111]">
                        Modern Learning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGE */}
            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.07)]">
                <img
                  src="https://distance.crescent-institute.edu.in/img/bais/arabvision.jpg"
                  alt="Arabic and Islamic Studies"
                  className="h-[230px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                />

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8f1d1d]" />
              </div>
            </div>
          </div>

          {/* =======================================================
              VISION + MISSION
          ======================================================= */}
          <section id="vision" className="mt-12 scroll-mt-24">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* VISION */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1d355f]/10 text-[#1d355f]">
                    <Eye className="size-5" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1d355f]">
                      Academic Direction
                    </span>

                    <h3 className="mt-1 text-2xl font-bold text-[#111111]">
                      Vision
                    </h3>

                    <div className="mt-2 h-1 w-9 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#111111] sm:text-base">
                  The school looks forward to be a leader in Arabic and
                  Islamic Studies to promote graduates, capable of bringing
                  about positive change for the betterment of self, family,
                  society and humanity based on moderate approach of revealed
                  knowledge and modern science.
                </p>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-16" />
              </div>

              {/* MISSION */}
              <div
                id="mission"
                className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#8f1d1d]/10 text-[#8f1d1d]">
                    <Target className="size-5" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8f1d1d]">
                      Core Commitment
                    </span>

                    <h3 className="mt-1 text-2xl font-bold text-[#111111]">
                      Mission
                    </h3>

                    <div className="mt-2 h-1 w-9 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <p className="mt-5 text-sm font-semibold leading-7 text-[#111111]">
                  The School is committed:
                </p>

                <ul className="mt-3 space-y-3 text-sm leading-6 text-[#111111]">
                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#0d5c45]" />

                    <span>
                      To empower the younger generation through quality
                      education in both revealed and contemporary knowledge.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#8f1d1d]" />

                    <span>
                      To promote leadership quality and overall personality to
                      face global challenges.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#1d355f]" />

                    <span>
                      To develop logical and creative thinking through
                      research.
                    </span>
                  </li>

                  <li className="flex gap-3">
                    <span className="mt-2 size-2 shrink-0 rounded-full bg-[#d4af37]" />

                    <span>
                      To provide excellent ambience for language and soft skill
                      development.
                    </span>
                  </li>
                </ul>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          </section>

          {/* =======================================================
              ELIGIBILITY + FEE
          ======================================================= */}
          <section id="eligibility-fee" className="mt-12 scroll-mt-24">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              {/* ELIGIBILITY */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0d5c45]/10 text-[#0d5c45]">
                    <GraduationCap className="size-5" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
                      Admission Requirement
                    </span>

                    <h3 className="mt-1 text-2xl font-bold text-[#111111]">
                      Eligibility for Admission
                    </h3>

                    <div className="mt-2 h-1 w-9 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#111111] sm:text-base">
                  A student seeking admission to the first semester of the
                  undergraduate degree programme must have passed the Higher
                  Secondary Examination of the 10+2 curriculum (Academic
                  stream) or any other examination of any authority accepted by
                  this Institution as equivalent thereto.
                </p>

                <div className="mt-5 flex gap-3 rounded-xl bg-[#0d5c45]/5 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#0d5c45]" />

                  <p className="text-sm leading-6 text-[#111111]">
                    The eligibility criteria such as marks, number of attempts
                    and physical fitness shall be as prescribed by the
                    Institution in adherence to the guidelines of regulatory /
                    statutory authorities from time to time.
                  </p>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-16" />
              </div>

              {/* FEE STRUCTURE */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#8a6d12]">
                    <FileText className="size-5" />
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6d12]">
                      Indian Nationals
                    </span>

                    <h3 className="mt-1 text-2xl font-bold text-[#111111]">
                      Fee Structure
                    </h3>

                    <div className="mt-2 h-1 w-9 rounded-full bg-[#d4af37]" />
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[360px] border-collapse text-left">
                      <thead>
                        <tr className="bg-[#1d355f] text-white">
                          <th className="px-4 py-3 text-sm font-semibold">
                            #
                          </th>

                          <th className="px-4 py-3 text-sm font-semibold">
                            Particulars
                          </th>

                          <th className="px-4 py-3 text-right text-sm font-semibold">
                            Amount
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-sm text-[#111111]">
                        <tr className="border-b border-slate-100">
                          <td className="px-4 py-4">1</td>

                          <td className="px-4 py-4 font-medium">
                            Application Fee
                          </td>

                          <td className="px-4 py-4 text-right font-semibold">
                            ₹1,000
                          </td>
                        </tr>

                        <tr>
                          <td className="px-4 py-4">2</td>

                          <td className="px-4 py-4 font-medium">
                            Tuition Fee per Year
                          </td>

                          <td className="px-4 py-4 text-right font-semibold text-[#0d5c45]">
                            ₹15,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          </section>

          {/* =======================================================
              QUICK INFORMATION
          ======================================================= */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <InfoCard
              icon={<GraduationCap className="size-5" />}
              title="Programme"
              value="BA Islamic Studies"
              iconClass="bg-[#0d5c45]/10 text-[#0d5c45]"
            />

            <InfoCard
              icon={<BookOpen className="size-5" />}
              title="Programme Level"
              value="Undergraduate"
              iconClass="bg-[#1d355f]/10 text-[#1d355f]"
            />

            <InfoCard
              icon={<Users className="size-5" />}
              title="Learning Mode"
              value="Distance Education"
              iconClass="bg-[#8f1d1d]/10 text-[#8f1d1d]"
            />

            <InfoCard
              icon={<CheckCircle2 className="size-5" />}
              title="Student Support"
              value="Academic Support Available"
              iconClass="bg-[#d4af37]/20 text-[#8a6d12]"
            />
          </div>

          {/* =======================================================
              PROGRAMME INFORMATION
          ======================================================= */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0d5c45]">
              Programme Information
            </span>

            <h3 className="mt-2 text-2xl font-bold text-[#111111]">
              Bachelor of Arts in Islamic Studies
            </h3>

            <div className="mt-3 h-1 w-9 rounded-full bg-[#d4af37]" />

            <div className="mt-5 space-y-3 text-sm leading-7 text-[#111111] sm:text-base">
              <p>
                The BA Islamic Studies programme provides students with an
                opportunity to develop a structured understanding of Islamic
                studies through flexible distance education. The programme is
                designed to support learners through accessible academic
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
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* ELIGIBILITY */}
            <a
              href="#eligibility-fee"
              className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#0d5c45]/10 text-[#0d5c45]">
                <FileText className="size-5" />
              </span>

              <span className="text-sm font-semibold text-[#111111]">
                Eligibility & Fee
              </span>

              <ArrowRight className="ml-auto size-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </a>

            {/* SYLLABUS */}
            <Link
              to="/ba-islamic-studies/syllabus"
              className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1d355f]/10 text-[#1d355f]">
                <BookOpen className="size-5" />
              </span>

              <span className="text-sm font-semibold text-[#111111]">
                Syllabus
              </span>

              <ArrowRight className="ml-auto size-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </Link>

            {/* REGULATIONS */}
            <Link
              to="/ba-islamic-studies/regulations"
              className="group relative z-10 flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#8a6d12]">
                <FileText className="size-5" />
              </span>

              <span className="text-sm font-semibold text-[#111111]">
                Regulations
              </span>

              <ArrowRight className="ml-auto size-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </Link>

            {/* BROCHURE */}
            <button
              type="button"
              onClick={() => setShowBrochureForm(true)}
              className="group relative z-10 flex w-full items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#8a6d12]">
                <FileText className="size-5" />
              </span>

              <span className="text-sm font-semibold text-[#111111]">
                Download Brochure
              </span>

              <Download className="ml-auto size-4 text-slate-300 transition-transform duration-300 group-hover:translate-y-0.5" />

              <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
            </button>
          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Ready to begin?
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#111111] sm:text-2xl">
                  Apply for BA Islamic Studies
                </h2>
              </div>

              <Link
                to="/admission"
                className="group relative z-10 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Apply Now

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />

                <span className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            BROCHURE ENQUIRY FORM
        ========================================================= */}
        {showBrochureForm && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setShowBrochureForm(false);
              }
            }}
          >
            <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
              {/* CLOSE */}
              <button
                type="button"
                onClick={() => setShowBrochureForm(false)}
                aria-label="Close brochure enquiry form"
                className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white text-[#111111] shadow-md transition-all duration-300 hover:scale-105"
              >
                <X className="size-5" />
              </button>

              {/* HEADER */}
              <div className="bg-[#0d5c45] px-6 py-5 pr-16">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                  BA Islamic Studies
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Download Brochure
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/75">
                  Please submit your enquiry details to access the brochure.
                </p>
              </div>

              {/* FORM */}
              <div className="p-5 sm:p-6">
                <EnquiryForm />

                <div className="mt-5 border-t border-slate-200 pt-5">
                  <a
                    href={BROCHURE_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-[#8f1d1d] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <Download className="size-4" />

                    Open Brochure PDF

                    <span className="pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-12" />
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
      className="group relative z-10 border-b border-slate-100 px-5 py-4 transition-all duration-300 hover:bg-slate-50 sm:border-r lg:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold text-[#111111]">{title}</h3>

          <p className="mt-0.5 text-xs text-slate-500">{description}</p>
        </div>

        <ArrowRight className="ml-auto size-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
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
      className="group relative z-10 border-b border-slate-100 px-5 py-4 transition-all duration-300 hover:bg-slate-50 sm:border-r lg:border-b-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h3 className="text-sm font-bold text-[#111111]">{title}</h3>

          <p className="mt-0.5 text-xs text-slate-500">{description}</p>
        </div>

        <ArrowRight className="ml-auto size-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
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
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-5">
      <div className="flex items-center gap-3">
        <div className={`shrink-0 rounded-xl p-3 ${iconClass}`}>
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <p className="mt-1 text-sm font-semibold text-[#111111] sm:text-base">
            {value}
          </p>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
    </div>
  );
}

export default BAIslamicStudiesPage;