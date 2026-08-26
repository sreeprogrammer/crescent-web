import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import convocation from "@/assets/convocation.jpg";

import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  Compass,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

const title = "About Us — Leadership, CDOE Team & Facilities";

const description =
  "Meet the visionary leadership, execution team and CDOE community behind our distance education centre.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const sections = [
  {
    number: "01",
    eyebrow: "Leadership",
    title: "Visionary Team",
    description:
      "Academic direction begins with experienced leadership committed to building an accessible, future-ready learning environment.",
    items: [
      "Chancellor",
      "Pro-Chancellor",
      "Vice-Chancellor",
      "Board of Management",
    ],
    icon: Compass,
    image: campus1,
    href: "/visionary-team",
    accent: "red",
  },
  {
    number: "02",
    eyebrow: "Academic Operations",
    title: "Execution Team",
    description:
      "A dedicated academic and administrative team turns institutional vision into a smooth learner experience.",
    items: [
      "Registrar",
      "Deans of Faculty",
      "Controller of Examinations",
      "Finance Officer",
    ],
    icon: Users,
    image: campus2,
    href: "/execution-team",
    accent: "blue",
  },
  {
    number: "03",
    eyebrow: "Distance Education",
    title: "CDOE Team",
    description:
      "The Centre for Distance and Online Education coordinates admissions, learner support, digital content and assessments.",
    items: [
      "Director, CDOE",
      "Programme Coordinators",
      "Admission Cell",
      "Student Support Desk",
    ],
    icon: Building2,
    image: convocation,
    href: "/cdoe-team",
    accent: "gold",
  },
  {
    number: "04",
    eyebrow: "Learning Infrastructure",
    title: "Facilities",
    description:
      "Modern digital infrastructure and learner-focused physical resources support students throughout their academic journey.",
    items: [
      "Learning Management System",
      "Digital Library & E-Journals",
      "Regional Learner Support Centres",
      "Examination Centres",
    ],
    icon: Wrench,
    image: campus1,
    href: "/facilities",
    accent: "grey",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <main className="overflow-hidden bg-white">
        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative border-b border-[#d9d9d9] bg-[#f6f5f2]">
          {/* Decorative background */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#7f1d1d]/5 blur-3xl" />

            <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-[#172554]/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 lg:py-10">
            {/* TOP LABEL */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex flex-wrap items-center gap-3"
            >
              <span className="h-[2px] w-10 bg-[#b8860b]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7f1d1d]">
                About CDOE
              </span>

              <span className="rounded-full border border-[#172554]/15 bg-[#172554]/5 px-2.5 py-1 text-[10px] font-bold text-[#172554]">
                ESTABLISHED FOR LEARNERS
              </span>
            </motion.div>

            {/* HERO GRID */}

            <div className="grid items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              {/* LEFT */}

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center rounded-[24px] border border-[#dedbd5] bg-white px-6 py-7 shadow-[0_12px_35px_rgba(0,0,0,0.06)] sm:px-8 lg:px-10"
              >
                <div className="flex items-center gap-2 text-[#172554]">
                  <ShieldCheck className="size-4" />

                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Academic Excellence
                  </span>
                </div>

                <h1 className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-[1.05] tracking-[-0.025em] text-[#25262a] sm:text-4xl lg:text-[3.1rem]">
                  An institution shaped by{" "}
                  <span className="text-[#7f1d1d]">
                    vision, people
                  </span>{" "}
                  & purpose.
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#5b5d62] sm:text-[15px]">
                  Our Centre for Distance and Online Education brings the
                  university&apos;s academic standards to learners wherever
                  they are — combining experienced leadership, digital
                  learning and dedicated student support.
                </p>

                {/* STATS */}

                <div className="mt-6 grid grid-cols-3 border-y border-[#e3e0db] py-4">
                  <div className="border-r border-[#e3e0db] pr-3">
                    <p className="font-serif text-xl font-bold text-[#7f1d1d]">
                      01
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#777]">
                      Academic Vision
                    </p>
                  </div>

                  <div className="border-r border-[#e3e0db] px-3">
                    <p className="font-serif text-xl font-bold text-[#172554]">
                      04
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#777]">
                      Core Teams
                    </p>
                  </div>

                  <div className="pl-3">
                    <p className="font-serif text-xl font-bold text-[#b8860b]">
                      24/7
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#777]">
                      Digital Access
                    </p>
                  </div>
                </div>

                {/* TAGS */}

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7f1d1d] px-3 py-1.5 text-[11px] font-semibold text-white">
                    <GraduationCap className="size-3.5" />
                    Learner First
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#172554] px-3 py-1.5 text-[11px] font-semibold text-white">
                    <Sparkles className="size-3.5" />
                    Digital Learning
                  </span>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative min-h-[330px] overflow-hidden rounded-[24px] shadow-[0_18px_45px_rgba(0,0,0,0.12)]"
              >
                <img
                  src={campus1}
                  alt="Crescent campus"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-[#111827]/15 to-transparent" />

                <div className="absolute left-0 top-0 h-full w-1 bg-[#b8860b]" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <Landmark className="size-4 text-[#e4bd5b]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                      Our Campus
                    </span>
                  </div>

                  <h2 className="max-w-md font-serif text-2xl font-bold leading-tight text-white">
                    Where academic ambition meets opportunity.
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SECTION INTRO
        ========================================================== */}

        <section className="bg-[#172554]">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e4bd5b]">
                Inside our centre
              </p>

              <h2 className="mt-1 font-serif text-xl font-bold text-white sm:text-2xl">
                People, purpose & infrastructure
              </h2>
            </div>

            <div className="hidden h-px flex-1 bg-white/15 md:block" />

            <p className="hidden max-w-sm text-right text-xs leading-5 text-white/65 md:block">
              Explore the teams and facilities that make the learner journey
              possible.
            </p>
          </div>
        </section>

        {/* =========================================================
            CONTENT GRID
        ========================================================== */}

        <section className="bg-[#f2f1ee]">
          <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12 lg:py-9">
            <div className="grid gap-4 lg:grid-cols-2">
              {sections.map((section, index) => {
                const Icon = section.icon;

                const accent =
                  section.accent === "red"
                    ? "#7f1d1d"
                    : section.accent === "blue"
                      ? "#172554"
                      : section.accent === "gold"
                        ? "#b8860b"
                        : "#3f4146";

                return (
                  <motion.article
                    key={section.number}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    className="group relative overflow-hidden rounded-[22px] border border-[#d8d5d0] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.055)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(0,0,0,0.11)]"
                  >
                    {/* TOP ACCENT */}

                    <div
                      className="absolute left-0 right-0 top-0 h-1"
                      style={{
                        backgroundColor: accent,
                      }}
                    />

                    <div className="grid min-h-[265px] grid-cols-1 sm:grid-cols-[0.9fr_1.1fr]">
                      {/* IMAGE */}

                      <div className="relative min-h-[220px] overflow-hidden sm:min-h-0">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/10 to-black/45" />

                        <div className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 font-serif text-sm font-bold shadow-lg backdrop-blur">
                          <span style={{ color: accent }}>
                            {section.number}
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}

                      <div className="flex flex-col p-5 sm:p-6">
                        <div className="flex items-center justify-between">
                          <span
                            className="text-[9px] font-bold uppercase tracking-[0.2em]"
                            style={{
                              color: accent,
                            }}
                          >
                            {section.eyebrow}
                          </span>

                          <div
                            className="flex size-9 items-center justify-center rounded-xl"
                            style={{
                              backgroundColor: `${accent}12`,
                              color: accent,
                            }}
                          >
                            <Icon className="size-4" />
                          </div>
                        </div>

                        <h3 className="mt-3 font-serif text-xl font-bold text-[#25262a]">
                          {section.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-[#66686d]">
                          {section.description}
                        </p>

                        {/* ITEMS */}

                        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5">
                          {section.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-start gap-1.5 text-[10px] font-medium leading-4 text-[#55575c]"
                            >
                              <span
                                className="mt-1.5 size-1 shrink-0 rounded-full"
                                style={{
                                  backgroundColor: accent,
                                }}
                              />

                              {item}
                            </div>
                          ))}
                        </div>

                        {/* VIEW DETAILS */}

                        <div className="mt-auto pt-4">
                          <Link
                            to={section.href}
                            className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] transition-all duration-200"
                            style={{
                              color: accent,
                            }}
                          >
                            <span className="relative">
                              View details

                              <span
                                className="absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-300 group-hover/link:w-full"
                                style={{
                                  backgroundColor: accent,
                                }}
                              />
                            </span>

                            <span
                              className="flex size-6 items-center justify-center rounded-full transition-transform duration-300 group-hover/link:translate-x-1"
                              style={{
                                backgroundColor: `${accent}14`,
                              }}
                            >
                              <ArrowUpRight className="size-3.5" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#3f4146]">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[#7f1d1d]/20" />

          <div className="relative mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 py-7 sm:px-8 lg:px-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e4bd5b]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  Our commitment
                </span>
              </div>

              <h2 className="mt-2 max-w-3xl font-serif text-xl font-bold leading-tight text-white sm:text-2xl">
                Every learner deserves access to meaningful,
                supported and quality education.
              </h2>
            </div>

            <Link
              to="/programmes"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#e4bd5b] px-5 py-2.5 text-xs font-bold text-[#172554] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              Explore Programmes
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}