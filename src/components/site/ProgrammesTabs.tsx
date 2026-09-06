import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

const title = "Programmes Offered — UG, PG & Certification";

const description =
  "Explore undergraduate, postgraduate and professional certification programmes offered through Crescent Centre for Distance and Online Education.";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: ProgrammesPage,
});

/* =========================================================
   PROGRAMME DATA
========================================================= */

const ugProgrammes = [
  {
    name: "BA English",
    full: "Bachelor of Arts in English",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
  },
  {
    name: "BA Islamic Studies",
    full: "Bachelor of Arts in Islamic Studies",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
  },
  {
    name: "BA Public Policy",
    full: "Bachelor of Arts in Public Policy",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
  },
];

const pgProgrammes = [
  {
    name: "MA Islamic Studies",
    full: "Master of Arts in Islamic Studies",
    duration: "2 Years",
    eligibility: "Bachelor's degree",
  },
  {
    name: "MCA",
    full: "Master of Computer Applications",
    duration: "2 Years",
    eligibility: "Bachelor's degree with Mathematics",
  },
  {
    name: "MBA",
    full: "Master of Business Administration",
    duration: "2 Years",
    eligibility: "Any Bachelor's degree",
  },
];

const certificationProgrammes = [
  {
    name: "Mobile Application Development",
    full: "Professional Certification Programme",
    duration: "6 Months",
    eligibility: "12th / Diploma / Degree",
  },
];

/* =========================================================
   TYPES
========================================================= */

type Programme = {
  name: string;
  full: string;
  duration: string;
  eligibility: string;
};

/* =========================================================
   ROUTE HELPER
========================================================= */

function getProgrammeRoute(name: string) {
  const programme = name.trim().toLowerCase();

  switch (programme) {
    case "ba islamic studies":
      return "/ba-islamic-studies";

    case "mca":
      return "/mca";

    case "mba":
      return "/mba";

    default:
      return "/programmes";
  }
}

/* =========================================================
   PAGE
========================================================= */

function ProgrammesPage() {
  return (
    <SiteLayout>
      <div
        className="w-full overflow-hidden bg-white"
        style={circularFont}
      >
        {/* =====================================================
            PREMIUM TOP LINE
        ===================================================== */}

        <div className="h-[3px] bg-gradient-to-r from-[#172554] via-[#991B1B] to-[#D4A017]" />

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden bg-[#f7f4ee]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-28 -top-28 size-64 rounded-full bg-[#991B1B]/8 blur-3xl" />

            <div className="absolute -right-24 -top-20 size-72 rounded-full bg-[#D4A017]/10 blur-3xl" />

            <div className="absolute bottom-0 left-1/2 size-48 -translate-x-1/2 rounded-full bg-[#1E3A8A]/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
            <div className="grid items-center gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">

              {/* LEFT HERO */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[2px] w-8 rounded-full bg-[#991B1B]" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.24em] text-[#991B1B]">
                    Programmes Offered
                  </span>

                  <span className="size-1 rounded-full bg-[#D4A017]" />
                </div>

                <h1
                  className="max-w-3xl text-[2.25rem] font-black leading-[0.96] tracking-[-0.055em] text-[#111111] sm:text-[2.7rem] lg:text-[3.25rem]"
                  style={circularFont}
                >
                  Shape Your Future With{" "}
                  <span className="relative text-[#991B1B]">
                    The Right Programme

                    <span className="absolute -bottom-1 left-0 h-[2px] w-14 rounded-full bg-[#D4A017]" />
                  </span>
                </h1>

                <p className="mt-3 max-w-xl text-[10px] leading-[1.6] text-slate-500 sm:text-[11px]">
                  Explore flexible undergraduate, postgraduate and professional
                  certification programmes designed for modern learners who
                  want quality education without putting their career on hold.
                </p>

                <div className="mt-3 grid max-w-xl grid-cols-3 gap-1.5">
                  <HeroFeature
                    icon={<GraduationCap className="size-3" />}
                    title="UG"
                    text="Programmes"
                  />

                  <HeroFeature
                    icon={<BookOpen className="size-3" />}
                    title="PG"
                    text="Programmes"
                  />

                  <HeroFeature
                    icon={<Sparkles className="size-3" />}
                    title="Career"
                    text="Focused"
                  />
                </div>

                <div className="mt-3 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3 text-[#166534]" />

                  <span className="text-[7px] font-semibold tracking-wide text-slate-500">
                    Flexible learning • Career focused • Student friendly
                  </span>
                </div>
              </motion.div>

              {/* RIGHT HERO PREMIUM PANEL */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="mx-auto w-full max-w-md"
              >
                <div className="relative">
                  <div className="absolute -inset-2 rounded-[1.6rem] bg-[#D4A017]/12 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[1.35rem] border border-[#172554]/10 bg-[#172554] p-4 shadow-[0_18px_45px_rgba(23,37,84,0.16)]">

                    <div className="pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-[#991B1B]/30 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-20 -left-20 size-40 rounded-full bg-[#166534]/15 blur-3xl" />

                    <div className="absolute right-4 top-4 size-10 rounded-full border border-[#D4A017]/25" />

                    <div className="absolute right-7 top-7 size-4 rounded-full bg-[#D4A017]/15" />

                    <div className="relative">

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-1 flex items-center gap-1.5">
                            <span className="h-[2px] w-5 rounded-full bg-[#D4A017]" />

                            <span className="text-[6px] font-bold uppercase tracking-[0.24em] text-[#D4A017]">
                              Academic Pathways
                            </span>
                          </div>

                          <h2
                            className="text-xl font-bold leading-tight text-white"
                            style={circularFont}
                          >
                            Learn. Grow. Lead.
                          </h2>

                          <p className="mt-1 text-[8px] leading-3.5 text-white/50">
                            Choose a programme that moves your future forward.
                          </p>
                        </div>

                        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#166534] text-[#D4A017] shadow-lg">
                          <GraduationCap className="size-4" />
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-1.5">
                        <MiniStat value="03" label="UG" />
                        <MiniStat value="03" label="PG" />
                        <MiniStat value="01" label="CERT" />
                      </div>

                      <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] p-2.5">
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#166534]/25">
                          <CheckCircle2 className="size-3 text-[#D4A017]" />
                        </div>

                        <div>
                          <p className="text-[8px] font-bold text-white">
                            Flexible Learning
                          </p>

                          <p className="mt-0.5 text-[7px] leading-3 text-white/45">
                            Designed for modern learners and working
                            professionals.
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                        <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#166534] via-[#D4A017] to-[#991B1B]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROGRAMMES
        ===================================================== */}

        <main className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6 sm:pb-5 lg:px-8">

            {/* UG */}

            <ProgrammeSection
              id="ug"
              eyebrow="Undergraduate"
              title="Undergraduate Programmes"
              description="Flexible degree pathways for learners beginning their higher education journey."
              count="03 Programmes"
              programmes={ugProgrammes}
            />

            <PremiumDivider />

            {/* PG */}

            <ProgrammeSection
              id="pg"
              eyebrow="Postgraduate"
              title="Postgraduate Programmes"
              description="Advanced programmes for career growth, academic development and professional leadership."
              count="03 Programmes"
              programmes={pgProgrammes}
            />

            <PremiumDivider />

            {/* CERTIFICATION */}

            <ProgrammeSection
              id="certification"
              eyebrow="Professional Certification"
              title="Certified Programme"
              description="Short-term, career-focused learning designed to build practical industry skills."
              count="01 Programme"
              programmes={certificationProgrammes}
              certification
            />

            {/* BOTTOM CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
              }}
              className="relative mt-3 overflow-hidden rounded-[1.15rem] bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#991B1B] px-4 py-3 shadow-[0_10px_28px_rgba(23,37,84,0.14)] sm:px-5"
            >
              <div className="pointer-events-none absolute -right-14 -top-16 size-36 rounded-full bg-[#D4A017]/15 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-16 -left-10 size-32 rounded-full bg-[#166534]/20 blur-3xl" />

              <div className="relative flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3 text-[#D4A017]" />

                    <span className="text-[6px] font-bold uppercase tracking-[0.2em] text-[#D4A017]">
                      Admissions 2026–2027
                    </span>
                  </div>

                  <h3
                    className="mt-0.5 text-sm font-bold text-white sm:text-base"
                    style={circularFont}
                  >
                    Ready to start your next chapter?
                  </h3>

                  <p className="mt-0.5 text-[7px] text-white/55">
                    Choose your programme and begin your learning journey.
                  </p>
                </div>

                <Link
                  to="/admission"
                  hash="how-to-apply"
                  className="group inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#D4A017] px-4 text-[8px] font-bold text-[#172554] shadow-[0_6px_18px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e1c35a]"
                >
                  Apply Now

                  <ArrowRight className="size-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}

/* =========================================================
   HERO FEATURE
========================================================= */

function HeroFeature({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      className="group flex items-center gap-1.5 rounded-xl border border-[#172554]/8 bg-white px-2 py-1.5 shadow-[0_4px_12px_rgba(23,37,84,0.035)] transition-all duration-300 hover:border-[#D4A017]/35 hover:shadow-[0_7px_18px_rgba(23,37,84,0.07)]"
    >
      <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-[#172554] text-[#D4A017] transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white">
        {icon}
      </span>

      <div className="min-w-0">
        <p className="text-[8px] font-bold leading-none text-[#111111]">
          {title}
        </p>

        <p className="mt-0.5 text-[6px] font-medium leading-none text-slate-500">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   PROGRAMME SECTION
========================================================= */

function ProgrammeSection({
  id,
  eyebrow,
  title,
  description,
  count,
  programmes,
  certification = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  count: string;
  programmes: Programme[];
  certification?: boolean;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-20 pt-2 first:pt-0"
    >
      <div className="mb-2 flex items-end justify-between gap-3">
        <div className="min-w-0">

          <div className="mb-0.5 flex items-center gap-1.5">
            <span className="h-[2px] w-6 rounded-full bg-[#991B1B]" />

            <span className="text-[6px] font-bold uppercase tracking-[0.23em] text-[#991B1B]">
              {eyebrow}
            </span>
          </div>

          <h2
            className="text-[1.15rem] font-black leading-tight tracking-[-0.035em] text-[#111111] sm:text-[1.3rem]"
            style={circularFont}
          >
            {title}
          </h2>

          <p className="mt-0.5 max-w-2xl text-[7px] leading-3 text-slate-500 sm:text-[8px]">
            {description}
          </p>
        </div>

        <div className="hidden shrink-0 items-center gap-1 rounded-full border border-[#D4A017]/35 bg-[#f7f4ee] px-2 py-1 text-[6px] font-bold text-[#991B1B] sm:flex">
          <BookOpen className="size-2.5" />

          {count}
        </div>
      </div>

      <div
        className={
          programmes.length === 1
            ? "grid max-w-[390px] grid-cols-1 gap-2"
            : "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
        }
      >
        {programmes.map((programme, index) => (
          <ProgrammeCard
            key={programme.name}
            programme={programme}
            index={index}
            certification={certification}
          />
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PREMIUM PROGRAMME CARD
========================================================= */

function ProgrammeCard({
  programme,
  index,
  certification = false,
}: {
  programme: Programme;
  index: number;
  certification?: boolean;
}) {
  const programmeRoute = getProgrammeRoute(programme.name);

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-30px",
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="group relative flex min-h-[205px] flex-col overflow-hidden rounded-[1rem] border border-[#172554]/10 bg-white p-3 shadow-[0_5px_18px_rgba(23,37,84,0.045)] transition-all duration-300 hover:border-[#D4A017]/55 hover:shadow-[0_15px_35px_rgba(23,37,84,0.11)]"
    >
      {/* TOP GRADIENT */}

      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#172554] via-[#166534] via-[#991B1B] to-[#D4A017]" />

      {/* DECORATIVE GLOW */}

      <div className="pointer-events-none absolute -right-12 -top-12 size-28 rounded-full bg-[#D4A017]/8 blur-2xl opacity-70 transition-all duration-500 group-hover:bg-[#D4A017]/15" />

      <div className="pointer-events-none absolute -bottom-10 -left-10 size-24 rounded-full bg-[#166534]/6 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* HEADER */}

      <div className="relative flex items-start justify-between gap-2 pt-0.5">

        <div className="relative flex size-9 shrink-0 items-center justify-center rounded-[0.7rem] bg-[#172554] text-[#D4A017] shadow-[0_5px_14px_rgba(23,37,84,0.13)] transition-all duration-300 group-hover:bg-[#166534] group-hover:text-white group-hover:shadow-[0_7px_16px_rgba(22,101,52,0.16)]">
          {certification ? (
            <Sparkles className="size-4" />
          ) : (
            <GraduationCap className="size-4" />
          )}

          <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-[#D4A017] ring-2 ring-white" />
        </div>

        <span className="rounded-full border border-[#D4A017]/35 bg-[#f7f4ee] px-2 py-1 text-[6px] font-bold uppercase tracking-[0.11em] text-[#991B1B]">
          {certification ? "Certification" : "Programme"}
        </span>
      </div>

      {/* TITLE */}

      <div className="relative mt-2">
        <h3
          className="text-[14px] font-black leading-tight tracking-[-0.02em] text-[#111111] transition-colors duration-300 group-hover:text-[#991B1B]"
          style={circularFont}
        >
          {programme.name}
        </h3>

        <p className="mt-0.5 line-clamp-1 text-[7px] font-medium leading-3.5 text-[#166534]/80">
          {programme.full}
        </p>
      </div>

      {/* DETAILS */}

      <div className="relative mt-2 grid grid-cols-2 gap-1.5">

        {/* Duration */}

        <div className="rounded-[0.7rem] border border-[#172554]/7 bg-[#172554]/[0.035] px-2 py-1.5 transition-all duration-300 group-hover:border-[#172554]/12 group-hover:bg-[#172554]/[0.055]">
          <div className="flex items-center gap-1 text-[#172554]/60">
            <Clock3 className="size-2.5" />

            <span className="text-[6px] font-bold uppercase tracking-[0.08em]">
              Duration
            </span>
          </div>

          <p className="mt-0.5 text-[8px] font-extrabold text-[#111111]">
            {programme.duration}
          </p>
        </div>

        {/* Eligibility */}

        <div className="rounded-[0.7rem] border border-[#D4A017]/15 bg-[#D4A017]/[0.055] px-2 py-1.5 transition-all duration-300 group-hover:border-[#D4A017]/30 group-hover:bg-[#D4A017]/[0.08]">
          <div className="flex items-center gap-1 text-[#991B1B]">
            <Users className="size-2.5" />

            <span className="text-[6px] font-bold uppercase tracking-[0.08em]">
              Eligibility
            </span>
          </div>

          <p className="mt-0.5 line-clamp-1 text-[8px] font-extrabold text-[#111111]">
            {programme.eligibility}
          </p>
        </div>
      </div>

      {/* PREMIUM HIGHLIGHT */}

      <div className="relative mt-2 flex items-center gap-1.5">
        <span className="flex size-4 items-center justify-center rounded-full bg-[#166534]/8">
          <CheckCircle2 className="size-2.5 text-[#166534]" />
        </span>

        <span className="text-[6px] font-semibold text-slate-500">
          Flexible distance learning
        </span>
      </div>

      {/* BUTTONS */}

      <div className="relative mt-auto flex gap-1.5 pt-2.5">

        {/* Explore */}

        <Link
          to={programmeRoute}
          className="group/explore flex h-7 flex-1 items-center justify-center gap-1 rounded-full border border-[#172554]/15 bg-white px-2 text-[7px] font-bold text-[#172554] transition-all duration-300 hover:border-[#172554] hover:bg-[#172554] hover:text-white"
        >
          Explore

          <ArrowRight className="size-2 transition-transform duration-300 group-hover/explore:translate-x-0.5" />
        </Link>

        {/* Apply */}

        <Link
          to="/admission"
          hash="how-to-apply"
          className="group/apply flex h-7 flex-1 items-center justify-center gap-1 rounded-full bg-[#991B1B] px-2 text-[7px] font-bold text-white shadow-[0_4px_10px_rgba(153,27,27,0.13)] transition-all duration-300 hover:bg-[#166534] hover:shadow-[0_5px_13px_rgba(22,101,52,0.16)]"
        >
          Apply Now

          <ArrowRight className="size-2 transition-transform duration-300 group-hover/apply:translate-x-0.5" />
        </Link>
      </div>

      {/* BOTTOM GOLD INDICATOR */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#D4A017] transition-all duration-500 group-hover:w-16" />
    </motion.article>
  );
}

/* =========================================================
   PREMIUM DIVIDER
========================================================= */

function PremiumDivider() {
  return (
    <div className="my-2.5 flex items-center gap-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#172554]/10 to-transparent" />

      <span className="size-1 rounded-full bg-[#D4A017]" />

      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#172554]/10 to-transparent" />
    </div>
  );
}

/* =========================================================
   MINI STAT
========================================================= */

function MiniStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="group/stat rounded-xl border border-white/10 bg-white/[0.055] px-2.5 py-2 transition-all duration-300 hover:border-[#D4A017]/20 hover:bg-white/[0.08]">
      <p
        className="text-sm font-black leading-none text-white"
        style={circularFont}
      >
        {value}
      </p>

      <p className="mt-1 text-[6px] font-bold uppercase tracking-[0.15em] text-white/40">
        {label}
      </p>
    </div>
  );
}