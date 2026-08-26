import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clapperboard,
  Clock3,
  LockKeyhole,
  Palette,
  Play,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

const title = "Studio — Centre for Online Education";

const description =
  "Explore the in-house studio supporting professional, interactive and institution-focused educational content.";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: StudioPage,
});

const features = [
  {
    number: "01",
    title: "Professional Quality",
    icon: Clapperboard,
    accent: "#7f1d1d",
    text: "Our in-house studio is equipped with the latest technology and staffed by experienced professionals who produce high-quality educational content that reflects the values and standards of our institution.",
  },
  {
    number: "02",
    title: "Customization",
    icon: Palette,
    accent: "#172554",
    text: "Our in-house studio offers the flexibility to create educational content that meets the specific needs and goals of the institution, ensuring that we provide the best possible learning experience for our students.",
  },
  {
    number: "03",
    title: "Interactivity",
    icon: Play,
    accent: "#b8860b",
    text: "Our in-house studio produces interactive educational content, including videos, simulations, and other multimedia assets, that captures the attention and imagination of students, resulting in greater engagement and retention of knowledge.",
  },
  {
    number: "04",
    title: "Cost-effective",
    icon: Wallet,
    accent: "#7f1d1d",
    text: "Our in-house studio delivers cost-effective educational content, allowing us to produce high-quality learning materials without unnecessary expense.",
  },
  {
    number: "05",
    title: "Timeliness",
    icon: Clock3,
    accent: "#172554",
    text: "Our in-house studio delivers educational content quickly, allowing us to keep pace with the ever-changing demands of the academic world and stay ahead of the competition.",
  },
  {
    number: "06",
    title: "Consistency",
    icon: CheckCircle2,
    accent: "#b8860b",
    text: "Our in-house studio ensures consistency in the educational materials that our institution produces, resulting in a strong and memorable brand identity and learning experience for our students.",
  },
  {
    number: "07",
    title: "Confidentiality",
    icon: LockKeyhole,
    accent: "#7f1d1d",
    text: "Our in-house studio guarantees confidentiality and protection of the institution's intellectual property, ensuring educational content remains secure and protected at all times.",
  },
];

function StudioPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f4f3f0]">

        {/* =========================================================
            NAVY MINIMAL HEADER
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#061735]">

          {/* Subtle background decoration */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-32 size-80 rounded-full border border-white/[0.05]" />

            <div className="absolute -right-20 top-16 size-60 rounded-full border border-[#e4bd5b]/10" />

            <div className="absolute -bottom-32 left-[35%] size-72 rounded-full bg-[#7f1d1d]/10 blur-3xl" />

            <div className="absolute right-[14%] top-[30%] size-2 rounded-full bg-[#e4bd5b]" />

            <div className="absolute right-[25%] top-[55%] size-1 rounded-full bg-white/30" />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12 lg:py-8">

            {/* Back + Label */}

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex items-center justify-between gap-4"
            >

              <Link
                to="/facilities"
                className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.17em] text-white/55 transition-colors hover:text-[#e4bd5b]"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Back to Facilities
              </Link>

              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#e4bd5b]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Facilities
                </span>
              </div>

            </motion.div>

            {/* Title */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 flex items-end justify-between gap-8"
            >

              <div>

                <div className="mb-3 flex items-center gap-3">
                  <span className="h-[2px] w-9 bg-[#e4bd5b]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#e4bd5b]">
                    Creative Learning Infrastructure
                  </span>
                </div>

                <h1 className="font-serif text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4rem]">
                  In-house{" "}
                  <span className="text-[#e4bd5b]">
                    Studio
                  </span>
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/60 sm:text-[15px]">
                  A dedicated studio for creating professional, interactive
                  and institution-focused educational content.
                </p>

              </div>

              {/* Icon */}

              <div className="hidden size-20 shrink-0 items-center justify-center rounded-full border border-[#e4bd5b]/30 bg-white/[0.04] backdrop-blur-sm lg:flex">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#e4bd5b] text-[#061735]">
                  <Clapperboard className="size-6" />
                </div>
              </div>

            </motion.div>

            {/* Small Stats */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 grid max-w-2xl grid-cols-3 border-t border-white/10 pt-4"
            >

              <div className="border-r border-white/10">
                <p className="font-serif text-xl font-bold text-[#e4bd5b]">
                  07
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Capabilities
                </p>
              </div>

              <div className="border-r border-white/10 pl-4">
                <p className="font-serif text-xl font-bold text-white">
                  Pro
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Production
                </p>
              </div>

              <div className="pl-4">
                <p className="font-serif text-xl font-bold text-[#e4bd5b]">
                  360°
                </p>

                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Learning Content
                </p>
              </div>

            </motion.div>

          </div>
        </section>

        {/* =========================================================
            FACILITIES NAVIGATION
        ========================================================== */}

        <section className="sticky top-0 z-30 border-b border-[#d9d6d0] bg-white/95 backdrop-blur-md">

          <div className="mx-auto max-w-[1500px] overflow-x-auto px-5 sm:px-8 lg:px-12">

            <nav className="flex min-w-max items-center gap-1 py-2">

              <Link
                to="/facilities"
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
              >
                Facilities
              </Link>

              <Link
                to="/studio"
                className="rounded-full bg-[#7f1d1d] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white shadow-sm"
              >
                Studio
              </Link>

              <Link
                to="/lms"
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
              >
                LMS
              </Link>

              <Link
                to="/datacenter"
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
              >
                Datacenter
              </Link>

            </nav>

          </div>
        </section>

        {/* =========================================================
            MAIN CONTENT
        ========================================================== */}

        <section className="bg-[#f4f3f0]">

          <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12 lg:py-9">

            {/* =====================================================
                INTRODUCTION
            ====================================================== */}

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[22px] border border-[#d8d5d0] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.05)]"
            >

              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                {/* IMAGE */}

                <div className="relative min-h-[260px] overflow-hidden bg-[#061735] sm:min-h-[320px] lg:min-h-[370px]">

                  <img
                    src="https://distance.crescent-institute.edu.in/img/facilities/studio.jpeg"
                    alt="Crescent in-house studio"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061735]/95 via-[#061735]/20 to-transparent" />

                  <div className="absolute left-5 top-5 flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/90 font-serif text-xs font-bold text-[#7f1d1d] shadow-lg">
                    02
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">

                    <div className="mb-2 flex items-center gap-2">
                      <Sparkles className="size-3 text-[#e4bd5b]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e4bd5b]">
                        Creative Infrastructure
                      </span>
                    </div>

                    <h2 className="max-w-md font-serif text-xl font-bold leading-tight text-white sm:text-2xl">
                      Professional content for meaningful learning.
                    </h2>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9">

                  <div className="flex items-center gap-3">
                    <span className="h-[2px] w-7 bg-[#b8860b]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7f1d1d]">
                      In-house Studio
                    </span>
                  </div>

                  <h2 className="mt-3 font-serif text-2xl font-bold leading-tight text-[#25262a] sm:text-3xl">
                    Built to create, produce and deliver.
                  </h2>

                  <p className="mt-4 text-xs leading-6 text-[#606268] sm:text-sm">
                    Our in-house studio is designed to support the creation of
                    high-quality educational content tailored to the unique
                    needs and goals of our institution.
                  </p>

                  <p className="mt-3 text-xs leading-6 text-[#606268] sm:text-sm">
                    Professional production, interactive media and customised
                    learning resources help create a more engaging digital
                    education experience for learners.
                  </p>

                  {/* TAGS */}

                  <div className="mt-5 flex flex-wrap gap-2">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7f1d1d] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white">
                      <Target className="size-3" />
                      Customised
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#172554] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white">
                      <Play className="size-3" />
                      Interactive
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#b8860b] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#172554]">
                      <Sparkles className="size-3" />
                      Professional
                    </span>

                  </div>

                </div>

              </div>

            </motion.article>

            {/* =====================================================
                SECTION HEADING
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 mt-8"
            >

              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#b8860b]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7f1d1d]">
                  Studio Capabilities
                </span>

              </div>

              <h2 className="mt-2 font-serif text-2xl font-bold tracking-[-0.025em] text-[#25262a] sm:text-3xl">
                What our studio delivers
              </h2>

              <p className="mt-1 max-w-2xl text-[11px] leading-5 text-[#77797d]">
                Seven core capabilities supporting the production of quality
                digital learning materials.
              </p>

            </motion.div>

            {/* =====================================================
                FEATURES
            ====================================================== */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {features.map((feature, index) => {

                const Icon = feature.icon;

                return (
                  <motion.article
                    key={feature.number}
                    initial={{
                      opacity: 0,
                      y: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.045,
                    }}
                    className={`group relative overflow-hidden rounded-[20px] border border-[#d8d5d0] bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_32px_rgba(0,0,0,0.09)] ${
                      index === 6
                        ? "sm:col-span-2 lg:col-span-3"
                        : ""
                    }`}
                  >

                    {/* Top Accent */}

                    <div
                      className="absolute left-0 right-0 top-0 h-[3px]"
                      style={{
                        background: `linear-gradient(90deg, ${feature.accent}, #b8860b, #172554)`,
                      }}
                    />

                    <div className="flex items-start gap-4">

                      {/* Number */}

                      <div
                        className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${feature.accent}10`,
                        }}
                      >

                        <span
                          className="font-serif text-xs font-bold"
                          style={{
                            color: feature.accent,
                          }}
                        >
                          {feature.number}
                        </span>

                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-3">

                          <h3 className="font-serif text-lg font-bold leading-tight text-[#25262a]">
                            {feature.title}
                          </h3>

                          <div
                            className="flex size-8 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `${feature.accent}10`,
                              color: feature.accent,
                            }}
                          >
                            <Icon className="size-4" />
                          </div>

                        </div>

                        <p className="mt-2 text-[11px] leading-5 text-[#66686d] sm:text-xs">
                          {feature.text}
                        </p>

                      </div>

                    </div>

                    {/* Arrow */}

                    <div className="mt-4 flex justify-end">

                      <span
                        className="flex size-6 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
                        style={{
                          backgroundColor: `${feature.accent}10`,
                          color: feature.accent,
                        }}
                      >
                        <ArrowUpRight className="size-3.5" />
                      </span>

                    </div>

                  </motion.article>
                );
              })}

            </div>

          </div>
        </section>

        {/* =========================================================
            QUICK NAVIGATION
        ========================================================== */}

        <section className="border-t border-[#d9d6d0] bg-white">

          <div className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12">

            <div className="grid gap-3 sm:grid-cols-3">

              {/* FACILITIES */}

              <Link
                to="/facilities"
                className="group flex items-center justify-between rounded-[18px] border border-[#d8d5d0] bg-[#f8f7f4] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)]"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#7f1d1d]/10 text-[#7f1d1d]">
                    <Sparkles className="size-4" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-sm font-bold text-[#25262a]">
                      Facilities
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="size-4 text-[#7f1d1d] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

              {/* LMS */}

              <Link
                to="/lms"
                className="group flex items-center justify-between rounded-[18px] border border-[#d8d5d0] bg-[#f8f7f4] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)]"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#172554]/10 text-[#172554]">
                    <Play className="size-4" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-sm font-bold text-[#25262a]">
                      LMS
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="size-4 text-[#172554] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

              {/* DATACENTER */}

              <Link
                to="/datacenter"
                className="group flex items-center justify-between rounded-[18px] border border-[#d8d5d0] bg-[#f8f7f4] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.07)]"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-9 items-center justify-center rounded-xl bg-[#b8860b]/10 text-[#b8860b]">
                    <Clapperboard className="size-4" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-sm font-bold text-[#25262a]">
                      Datacenter
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="size-4 text-[#b8860b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

            </div>

          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#061735]">

          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[#7f1d1d]/20" />

          <div className="relative mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-12">

            <div>

              <div className="flex items-center gap-2">

                <span className="size-1.5 rounded-full bg-[#e4bd5b]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  Digital Learning
                </span>

              </div>

              <h2 className="mt-1.5 max-w-3xl font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                Creating educational content that keeps learners engaged.
              </h2>

            </div>

            <Link
              to="/facilities"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#e4bd5b] px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#061735] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              Back to Facilities
              <ArrowUpRight className="size-3.5" />
            </Link>

          </div>

        </section>

      </main>
    </SiteLayout>
  );
}