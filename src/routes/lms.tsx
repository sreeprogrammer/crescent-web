import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  LockKeyhole,
  MonitorPlay,
  Network,
  Settings2,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const title = "Learning Management System — Crescent CDOE";

const description =
  "Explore the Learning Management System supporting flexible, personalized and secure online learning.";

export const Route = createFileRoute("/lms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LMSPage,
});

const features = [
  {
    number: "01",
    title: "Unmatched Customizability",
    text: "Tailor the content and modules to meet the specific needs and preferences of individual learners.",
    icon: Settings2,
    accent: "#7f1d1d",
  },
  {
    number: "02",
    title: "Seamless Accessibility",
    text: "Access our LMS anytime, anywhere, and on any device to provide maximum convenience for all learners.",
    icon: MonitorPlay,
    accent: "#172554",
  },
  {
    number: "03",
    title: "Powerful Analytics",
    text: "Track learner progress and generate data-driven reports to measure teaching effectiveness and identify areas where additional support is needed.",
    icon: BarChart3,
    accent: "#b8860b",
  },
  {
    number: "04",
    title: "Collaborative Learning",
    text: "Foster collaboration, teamwork, and peer-to-peer interaction, particularly useful for online and hybrid learning environments.",
    icon: Users,
    accent: "#7f1d1d",
  },
  {
    number: "05",
    title: "Versatile Instructional Materials",
    text: "Deliver videos, interactive quizzes, discussion forums and other materials to accommodate different learning styles.",
    icon: BookOpen,
    accent: "#172554",
  },
  {
    number: "06",
    title: "Personalized Learning Experience",
    text: "Personalize learning based on each student's strengths, weaknesses and interests to improve engagement and motivation.",
    icon: Sparkles,
    accent: "#b8860b",
  },
  {
    number: "07",
    title: "Top-notch Security",
    text: "Protect student data and intellectual property with a secure LMS that maintains the trust of learners, educators and administrators.",
    icon: LockKeyhole,
    accent: "#7f1d1d",
  },
  {
    number: "08",
    title: "World-class Support",
    text: "Rely on customer support, online tutorials and technical assistance to resolve issues quickly and maximize the value of the system.",
    icon: Network,
    accent: "#172554",
  },
];

function LMSPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f2f1ee]">

        {/* =========================================================
            MINIMAL HERO
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#172554]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-28 -top-28 size-[280px] rounded-full bg-[#7f1d1d]/25 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 size-[260px] rounded-full bg-[#b8860b]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* BACK */}
              <Link
                to="/facilities"
                className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-[#e4bd5b]"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Back to Facilities
              </Link>

              <div className="mt-5 flex items-center justify-between gap-6">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-[2px] w-7 bg-[#e4bd5b]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                      Digital Infrastructure
                    </span>
                  </div>

                  <h1 className="font-serif text-3xl font-bold leading-none tracking-[-0.03em] text-white sm:text-4xl lg:text-[3rem]">
                    Learning{" "}
                    <span className="text-[#e4bd5b]">
                      Management System
                    </span>
                  </h1>

                  <p className="mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
                    A flexible digital learning environment connecting
                    learners, content, assessment and academic support.
                  </p>
                </div>

                {/* Small icon */}
                <div className="hidden size-16 shrink-0 items-center justify-center rounded-full border border-[#e4bd5b]/30 bg-white/5 lg:flex">
                  <div className="flex size-11 items-center justify-center rounded-full bg-[#e4bd5b] text-[#172554]">
                    <MonitorPlay className="size-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FACILITIES NAV
        ========================================================== */}
        <section className="sticky top-0 z-30 border-b border-[#d8d5d0] bg-white/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1500px] overflow-x-auto px-5 sm:px-8 lg:px-12">
            <nav className="flex min-w-max items-center gap-1 py-2">

              <Link
                to="/facilities"
                className="rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
              >
                Facilities
              </Link>

              <Link
                to="/studio"
                className="rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
              >
                Studio
              </Link>

              <Link
                to="/lms"
                className="rounded-full bg-[#7f1d1d] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow-sm"
              >
                LMS
              </Link>

              <Link
                to="/datacenter"
                className="rounded-full px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
              >
                Datacenter
              </Link>

            </nav>
          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}
        <section className="bg-[#f2f1ee]">
          <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12 lg:py-9">

            {/* SECTION HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#b8860b]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7f1d1d]">
                  LMS Capabilities
                </span>
              </div>

              <h2 className="mt-2 font-serif text-2xl font-bold tracking-[-0.025em] text-[#25262a] sm:text-3xl">
                Designed around the learner
              </h2>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-[#777]">
                Technology, accessibility and learner support brought together
                through one digital environment.
              </p>
            </motion.div>

            {/* =====================================================
                IMAGE + FEATURES
            ====================================================== */}
            <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative min-h-[300px] overflow-hidden rounded-[22px] bg-[#172554] shadow-[0_8px_25px_rgba(0,0,0,0.07)] sm:min-h-[360px] lg:min-h-[560px]"
              >
                <img
                  src="https://distance.crescent-institute.edu.in/img/facilities/lms.jpeg"
                  alt="Learning Management System"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/15 to-transparent" />

                <div className="absolute left-5 top-5 flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/90 font-serif text-xs font-bold text-[#7f1d1d] shadow-lg backdrop-blur">
                  01
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 flex items-center gap-2">
                    <MonitorPlay className="size-3.5 text-[#e4bd5b]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e4bd5b]">
                      Digital Learning
                    </span>
                  </div>

                  <h3 className="max-w-sm font-serif text-2xl font-bold leading-tight text-white">
                    Learning without boundaries.
                  </h3>

                  <p className="mt-2 max-w-sm text-[11px] leading-5 text-white/60">
                    A connected digital environment built for accessible,
                    engaging and personalized education.
                  </p>
                </div>
              </motion.div>

              {/* FEATURES */}
              <div className="grid gap-3 sm:grid-cols-2">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.article
                      key={feature.number}
                      initial={{
                        opacity: 0,
                        y: 16,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.035,
                      }}
                      className="group relative overflow-hidden rounded-[18px] border border-[#d8d5d0] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                    >
                      {/* TOP ACCENT */}
                      <div
                        className="absolute left-0 right-0 top-0 h-[3px]"
                        style={{
                          backgroundColor: feature.accent,
                        }}
                      />

                      <div className="flex items-center justify-between">
                        <div
                          className="flex size-9 items-center justify-center rounded-xl"
                          style={{
                            backgroundColor: `${feature.accent}12`,
                            color: feature.accent,
                          }}
                        >
                          <Icon className="size-4" />
                        </div>

                        <span
                          className="font-serif text-sm font-bold"
                          style={{
                            color: feature.accent,
                          }}
                        >
                          {feature.number}
                        </span>
                      </div>

                      <h3 className="mt-3 font-serif text-[16px] font-bold leading-tight text-[#25262a]">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-[11px] leading-5 text-[#66686d]">
                        {feature.text}
                      </p>

                      <div className="mt-3 flex items-center gap-1.5">
                        <CheckCircle2
                          className="size-3"
                          style={{
                            color: feature.accent,
                          }}
                        />

                        <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#999]">
                          Learner Focused
                        </span>
                      </div>
                    </motion.article>
                  );
                })}

              </div>
            </div>

            {/* =====================================================
                STATEMENT
            ====================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-5 rounded-[19px] bg-[#172554] px-5 py-5 sm:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#e4bd5b] text-[#172554]">
                  <MonitorPlay className="size-5" />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e4bd5b]">
                    One connected learning environment
                  </p>

                  <p className="mt-1 font-serif text-sm font-bold leading-6 text-white sm:text-base">
                    Empowering learners through accessible technology,
                    meaningful interaction and personalized digital education.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =====================================================
                QUICK NAVIGATION
            ====================================================== */}
            <div className="mt-5 grid gap-3 sm:grid-cols-3">

              <Link
                to="/facilities"
                className="group flex items-center justify-between rounded-[17px] border border-[#d8d5d0] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#7f1d1d]/8">
                    <BookOpen className="size-4 text-[#7f1d1d]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-sm font-bold text-[#25262a]">
                      Facilities
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="size-4 text-[#7f1d1d] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/studio"
                className="group flex items-center justify-between rounded-[17px] border border-[#d8d5d0] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#b8860b]/10">
                    <Sparkles className="size-4 text-[#b8860b]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-sm font-bold text-[#25262a]">
                      Studio
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="size-4 text-[#b8860b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                to="/datacenter"
                className="group flex items-center justify-between rounded-[17px] border border-[#d8d5d0] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#172554]/8">
                    <Network className="size-4 text-[#172554]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-sm font-bold text-[#25262a]">
                      Datacenter
                    </p>
                  </div>
                </div>

                <ArrowUpRight className="size-4 text-[#172554] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

            </div>
          </div>
        </section>

        {/* =========================================================
            MINIMAL CTA
        ========================================================== */}
        <section className="relative overflow-hidden bg-[#3f4146]">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[#7f1d1d]/15" />

          <div className="relative mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#e4bd5b]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  Digital Learning
                </span>
              </div>

              <h2 className="mt-1.5 font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                Technology that keeps learning connected.
              </h2>
            </div>

            <Link
              to="/facilities"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#e4bd5b] px-4 py-2 text-[9px] font-bold text-[#172554] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              All Facilities
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </section>

      </main>
    </SiteLayout>
  );
}