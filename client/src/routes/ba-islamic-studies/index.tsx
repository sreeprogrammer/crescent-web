import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CheckCircle2, GraduationCap, Users } from "lucide-react";

import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { baIslamicStudiesProgrammePageConfig } from "@/data/programmePageConfigs";

export const Route = createFileRoute("/ba-islamic-studies/")({
  component: BAIslamicStudiesPage,
});

function BAIslamicStudiesPage() {
  return (
    <ProgrammePageTemplate {...baIslamicStudiesProgrammePageConfig}>
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
                The school was established in 2009 with the vision of promoting faith and value
                based education by combining religious education and modern science. It was the
                dream of the founder Dr. B.S. Abdur Rahman to promote a set of younger generation
                equipped with both the revealed and scientific knowledge. By establishment of this
                school, his dream became true.
              </p>

              <p>
                The school offers UG, PG and Ph.D. programmes in Arabic and Islamic studies, aiming
                at bringing Islamic studies into the mainstream of modern education by combining
                revealed knowledge and modern science.
              </p>

              <p>
                The school aims to promote graduates who would be capable of addressing modern
                issues and guiding the younger generation of society and humanity at large towards
                the right path.
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
              The school focuses on combining revealed knowledge with modern scientific
              understanding, helping students develop academic knowledge together with values and a
              broader understanding of contemporary society.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#0d5c45]/10 p-2.5 text-[#0d5c45]">
                    <BookOpen className="size-5" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Focus</p>

                    <p className="mt-0.5 text-sm font-semibold text-[#111111]">Islamic Studies</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#1d355f]/10 p-2.5 text-[#1d355f]">
                    <GraduationCap className="size-5" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Education</p>

                    <p className="mt-0.5 text-sm font-semibold text-[#111111]">Modern Learning</p>
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
              The BA Islamic Studies programme provides students with an opportunity to develop a
              structured understanding of Islamic studies through flexible distance education. The
              programme is designed to support learners through accessible academic resources and a
              flexible learning environment.
            </p>

            <p>
              Students can access their academic resources through the learning platform while
              receiving support throughout their programme.
            </p>
          </div>
        </div>
      </section>
    </ProgrammePageTemplate>
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
        <div className={`shrink-0 rounded-xl p-3 ${iconClass}`}>{icon}</div>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{title}</p>

          <p className="mt-1 text-sm font-semibold text-[#111111] sm:text-base">{value}</p>
        </div>
      </div>

      <span className="pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10" />
    </div>
  );
}

export default BAIslamicStudiesPage;
