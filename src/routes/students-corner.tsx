import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  HeartHandshake,
  MonitorPlay,
  ShieldCheck,
  Users,
} from "lucide-react";

const title = "Students Corner — LMS Login & Student Affairs";

const description =
  "Access the learning management system, study material, examination updates and student affairs support for distance learners.";

export const Route = createFileRoute("/students-corner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudentsCornerPage,
});

function StudentsCornerPage() {
  return (
    <SiteLayout>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#101b3d] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 size-64 rounded-full bg-[#8f1d1d]/20 blur-3xl" />

          <div className="absolute -right-32 top-10 size-72 rounded-full bg-[#d4af37]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[90px] max-w-7xl items-center justify-center px-5 py-4 sm:min-h-[100px] sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="mb-1 text-[8px] font-black uppercase tracking-[0.3em] text-[#d4af37]">
              Distance Education
            </p>

            <h1 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
              Students Corner
            </h1>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK ACCESS
      ===================================================== */}

      <section className="bg-[#f6f3ec] px-5 py-4 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <QuickCard
            icon={<MonitorPlay className="size-5" />}
            title="LMS Login"
            text="Access learning portal"
            href="/lms-login"
          />

          <QuickCard
            icon={<BookOpen className="size-5" />}
            title="Study Material"
            text="Notes & e-books"
            href="/lms-login"
          />

          <QuickCard
            icon={<FileText className="size-5" />}
            title="Examination"
            text="Schedule & results"
            href="/lms-login"
          />

          <QuickCard
            icon={<HeartHandshake className="size-5" />}
            title="Student Affairs"
            text="Get academic support"
            href="#student-affairs"
          />
        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f4ee] px-5 py-7 sm:px-8 sm:py-8 lg:px-12">
        <div className="pointer-events-none absolute -left-32 top-20 size-72 rounded-full bg-[#8f1d1d]/[0.04] blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-[#d4af37]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          {/* =================================================
              SECTION HEADING
          ================================================= */}

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8f1d1d]">
                Student Services
              </p>

              <h2 className="mt-1 text-xl font-black tracking-tight text-[#172554] sm:text-2xl">
                Everything you need while you study
              </h2>
            </div>

            <p className="max-w-md text-[10px] leading-5 text-slate-500 sm:text-right">
              Learning, examination and student support — organised in one
              simple experience.
            </p>
          </div>

          {/* =================================================
              MAIN CARDS
          ================================================= */}

          <div className="grid gap-4 lg:grid-cols-2">
            {/* =================================================
                LMS CARD
            ================================================= */}

            <div
              id="lms-login"
              className="group relative overflow-hidden rounded-[1.7rem] border border-[#172554]/10 bg-white p-5 shadow-[0_10px_35px_rgba(23,37,84,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/30 hover:shadow-[0_18px_45px_rgba(23,37,84,0.11)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[#d4af37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37] shadow-lg">
                    <MonitorPlay className="size-5" />
                  </div>

                  <span className="rounded-full bg-[#8f1d1d]/10 px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-[#8f1d1d]">
                    Learning
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black text-[#172554] sm:text-2xl">
                  LMS Login
                </h3>

                <p className="mt-1.5 max-w-lg text-[11px] leading-5 text-slate-500">
                  Access lectures, assignments, assessments, study materials
                  and academic resources through your learning portal.
                </p>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Recorded lectures",
                    "Live weekend classes",
                    "Study material & e-books",
                    "Assignment submission",
                    "Internal marks",
                    "Exam updates & results",
                  ].map((item) => (
                    <FeatureItem key={item} text={item} />
                  ))}
                </div>

                <Link
                  to="/lms-login"
                  className="group/btn mt-5 inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-[10px] font-black text-white transition-all duration-300 hover:bg-[#a52222] hover:shadow-lg"
                >
                  Open LMS Login

                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* =================================================
                STUDENT AFFAIRS
            ================================================= */}

            <div
              id="student-affairs"
              className="group relative overflow-hidden rounded-[1.7rem] bg-[#172554] p-5 text-white shadow-[0_10px_35px_rgba(23,37,84,0.13)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,37,84,0.20)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-[#d4af37]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[#8f1d1d] text-white shadow-lg">
                    <HeartHandshake className="size-5" />
                  </div>

                  <span className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-[#f0d56b]">
                    Support
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black sm:text-2xl">
                  Students Grievance Redressal Cell
                </h3>

                <p className="mt-1.5 text-[11px] leading-5 text-white/60">
                  Students having grievances on academic matters can contact
                  the Nodal Officer in person, through the Grievance Box,
                  online complaint form or email.
                </p>

                {/* Officer */}

                <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3">
                  <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/10">
                    <img
                      src="https://distance.crescent-institute.edu.in/img/technical/merline.jpg"
                      alt="Ms. P. Paul Merline"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-white">
                      Ms. P. Paul Merline
                    </p>

                    <p className="mt-0.5 text-[8px] leading-3.5 text-white/50">
                      Technical Manager (LMS & Data Management)
                    </p>

                    <p className="text-[8px] font-bold text-[#d4af37]">
                      Nodal Officer
                    </p>
                  </div>
                </div>

                {/* Grievance features */}

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {[
                    "Academic grievances",
                    "Grievance Box",
                    "Online complaint",
                    "Student support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-[10px] text-white/75"
                    >
                      <CheckCircle2 className="size-3.5 shrink-0 text-[#d4af37]" />

                      {item}
                    </div>
                  ))}
                </div>

                {/* Actions */}

                <div className="mt-5 flex flex-wrap gap-2">
                  <a
                    href="https://distance.crescent-institute.edu.in/complaintform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2.5 text-[9px] font-black text-[#172554] transition-all hover:bg-[#f0d56b]"
                  >
                    Online Complaint Form

                    <ArrowRight className="size-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </a>

                  <a
                    href="https://distance.crescent-institute.edu.in/img/Grievence.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[9px] font-bold text-white/80 transition-all hover:bg-white/10 hover:text-white"
                  >
                    UGC Letter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM SUPPORT STRIP
          ================================================= */}

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <SupportCard
              icon={<ShieldCheck className="size-4.5" />}
              title="Secure Learning"
              text="Your academic information stays protected."
            />

            <SupportCard
              icon={<Users className="size-4.5" />}
              title="Mentor Support"
              text="Get guidance throughout your programme."
            />

            <SupportCard
              icon={<HeartHandshake className="size-4.5" />}
              title="Learner First"
              text="Support designed around your academic journey."
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* =========================================================
   QUICK CARD
========================================================= */

function QuickCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="group flex min-h-[72px] items-center gap-3 rounded-xl border border-[#172554]/10 bg-white px-3.5 py-3 shadow-[0_7px_22px_rgba(23,37,84,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/50 hover:shadow-[0_14px_30px_rgba(23,37,84,0.09)]"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#172554] text-[#d4af37] transition-all duration-300 group-hover:bg-[#8f1d1d] group-hover:text-white">
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-[8px] font-black uppercase tracking-[0.15em] text-[#8f1d1d]">
          {title}
        </span>

        <span className="mt-0.5 block text-[10px] font-semibold text-[#172554]">
          {text}
        </span>
      </span>

      <ArrowRight className="ml-auto size-3.5 shrink-0 text-[#172554]/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#8f1d1d]" />
    </Link>
  );
}

/* =========================================================
   FEATURE ITEM
========================================================= */

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-[#f7f4ee] px-3 py-2 text-[10px] font-medium text-[#172554]">
      <CheckCircle2 className="size-3 shrink-0 text-[#8f1d1d]" />

      {text}
    </div>
  );
}

/* =========================================================
   SUPPORT CARD
========================================================= */

function SupportCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#172554]/10 bg-white px-3.5 py-3 shadow-[0_7px_22px_rgba(23,37,84,0.04)]">
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/15 text-[#8f1d1d]">
        {icon}
      </div>

      <div>
        <h4 className="text-[10px] font-black text-[#172554]">
          {title}
        </h4>

        <p className="mt-0.5 text-[9px] leading-3.5 text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
}

export default StudentsCornerPage;