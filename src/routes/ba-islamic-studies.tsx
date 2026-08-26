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
} from "lucide-react";

export const Route = createFileRoute("/ba-islamic-studies")({
  component: BAIslamicStudiesPage,
});

function BAIslamicStudiesPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8fa]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#741b1b]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#741b1b] via-[#681818] to-[#4d1111]" />

          <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
            <Link
              to="/programmes"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Programmes
            </Link>

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">

              {/* Hero Content */}
              <div className="max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                  <GraduationCap size={17} />
                  Undergraduate Programme
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  BA Islamic Studies
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                  Explore the Bachelor of Arts in Islamic Studies programme
                  offered through Crescent Distance Education with flexible
                  learning and student-focused academic support.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/admission"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#741b1b] shadow-lg transition hover:bg-slate-100"
                  >
                    Apply Now
                    <ArrowRight size={17} />
                  </Link>

                  {/* DIRECT PEOPLE LINK */}
                  <a
                    href="/ba-islamic-studies/people"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    Explore Programme
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur">
                <img
                  src="https://distance.crescent-institute.edu.in/img/bais/main.jpg"
                  alt="BA Islamic Studies"
                  className="h-[280px] w-full rounded-2xl object-cover sm:h-[330px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MAIN CONTENT + SIDE MENU
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px]">

            {/* =================================================
                LEFT - OVERVIEW
            ================================================== */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#741b1b]">
                Department of B.A. Islamic Studies
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Overview
              </h2>

              <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <img
                  src="https://distance.crescent-institute.edu.in/img/bais/main.jpg"
                  alt="Department of BA Islamic Studies"
                  className="h-[280px] w-full object-cover sm:h-[380px]"
                />
              </div>

              <div className="mt-8 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  The school was established in 2009 with the vision of
                  promoting faith and value based education by combining
                  religious education and modern science. It was the dream
                  of the founder Dr. B. S. Abdur Rahman to promote a younger
                  generation equipped with both revealed and scientific
                  knowledge.
                </p>

                <p>
                  The school offers UG, PG and Ph.D. programmes in Arabic and
                  Islamic Studies, aiming at bringing Islamic Studies into
                  the mainstream of modern education by combining revealed
                  knowledge and modern science.
                </p>

                <p>
                  The school aims to promote graduates who would be capable
                  of addressing modern issues and guiding the younger
                  generation of society and humanity at large towards the
                  right path.
                </p>
              </div>

              {/* QUICK INFORMATION */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                <InfoCard
                  icon={<GraduationCap size={21} />}
                  title="Programme"
                  value="BA Islamic Studies"
                />

                <InfoCard
                  icon={<BookOpen size={21} />}
                  title="Programme Level"
                  value="Undergraduate"
                />

                <InfoCard
                  icon={<Users size={21} />}
                  title="Learning Mode"
                  value="Distance Education"
                />

                <InfoCard
                  icon={<CheckCircle2 size={21} />}
                  title="Student Support"
                  value="Academic Support Available"
                />

              </div>

              {/* ABOUT PROGRAMME */}
              <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#741b1b]">
                  Programme Information
                </span>

                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  Bachelor of Arts in Islamic Studies
                </h3>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  The BA Islamic Studies programme provides students with
                  an opportunity to develop a structured understanding of
                  Islamic studies through flexible distance education.
                  The programme is designed to support learners through
                  accessible academic resources and a flexible learning
                  environment.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Students can access their academic resources through the
                  learning platform while receiving support throughout
                  their programme.
                </p>

              </div>

            </div>

            {/* =================================================
                RIGHT SIDE MENU
            ================================================== */}
            <aside className="h-fit lg:sticky lg:top-24">

              {/* Main Menu */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                <div className="bg-[#741b1b] p-6 text-white">

                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
                    BA Islamic Studies
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Programme Menu
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Explore all programme information
                  </p>

                </div>

                <nav className="p-3">

                  {/* OVERVIEW */}
                  <SideMenuLink
                    to="/ba-islamic-studies"
                    label="Overview"
                    icon={<BookOpen size={17} />}
                  />

                  {/* =================================================
                      PEOPLE - DIRECT URL
                  ================================================== */}
                  <a
                    href="/ba-islamic-studies/people"
                    className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 hover:bg-[#741b1b]/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-[#741b1b]/10 group-hover:text-[#741b1b]">
                      <Users size={17} />
                    </span>

                    <span className="flex-1 text-sm font-medium text-slate-700 transition group-hover:text-[#741b1b]">
                      People
                    </span>

                    <ArrowRight
                      size={16}
                      className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#741b1b]"
                    />
                  </a>

                  {/* VISION */}
                  <SideMenuLink
                    to="/ba-islamic-studies/vision"
                    label="Vision"
                    icon={<GraduationCap size={17} />}
                  />

                  {/* MISSION */}
                  <SideMenuLink
                    to="/ba-islamic-studies/mission"
                    label="Mission"
                    icon={<CheckCircle2 size={17} />}
                  />

                  {/* ELIGIBILITY */}
                  <SideMenuLink
                    to="/ba-islamic-studies/eligibility-fee"
                    label="Eligibility & Fee"
                    icon={<FileText size={17} />}
                  />

                  {/* REGULATIONS */}
                  <SideMenuLink
                    to="/ba-islamic-studies/regulations"
                    label="Regulations"
                    icon={<FileText size={17} />}
                  />

                  {/* SYLLABUS */}
                  <SideMenuLink
                    to="/ba-islamic-studies/syllabus"
                    label="Syllabus"
                    icon={<BookOpen size={17} />}
                  />

                  {/* BROCHURE */}
                  <SideMenuLink
                    to="/ba-islamic-studies/brochure"
                    label="Brochure"
                    icon={<FileText size={17} />}
                  />

                </nav>
              </div>

              {/* APPLY CARD */}
              <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <GraduationCap size={21} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  Interested in this programme?
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Start your application for BA Islamic Studies.
                </p>

                <Link
                  to="/admission"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#741b1b] transition hover:bg-slate-100"
                >
                  Apply Now
                  <ArrowRight size={17} />
                </Link>

              </div>

            </aside>
          </div>
        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  Ready to begin?
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Apply for BA Islamic Studies
                </h2>
              </div>

              <Link
                to="/admission"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#741b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5c1515]"
              >
                Apply Now
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </SiteLayout>
  );
}

/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-center gap-4">

        <div className="shrink-0 rounded-xl bg-[#741b1b]/10 p-3 text-[#741b1b]">
          {icon}
        </div>

        <div>

          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <p className="mt-1 font-semibold text-slate-900">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}

/* ============================================================
   SIDE MENU LINK
============================================================ */

function SideMenuLink({
  to,
  label,
  icon,
}: {
  to: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 hover:bg-[#741b1b]/5"
    >

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover:bg-[#741b1b]/10 group-hover:text-[#741b1b]">
        {icon}
      </span>

      <span className="flex-1 text-sm font-medium text-slate-700 transition group-hover:text-[#741b1b]">
        {label}
      </span>

      <ArrowRight
        size={16}
        className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#741b1b]"
      />

    </Link>
  );
}