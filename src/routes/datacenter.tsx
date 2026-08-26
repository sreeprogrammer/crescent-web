import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  CloudCog,
  Gauge,
  LifeBuoy,
  Network,
  Server,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const title = "Datacenter — Crescent Distance Education";

const description =
  "Dedicated data center and server infrastructure supporting secure, scalable and reliable online education.";

export const Route = createFileRoute("/datacenter")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: DatacenterPage,
});

const features = [
  {
    number: "01",
    title: "Lightning-fast Speed",
    text: "With a dedicated data center and server, our online education department can enjoy unparalleled speed and performance for all their digital needs.",
    icon: Gauge,
    accent: "#7f1d1d",
  },
  {
    number: "02",
    title: "Robust Security",
    text: "Our dedicated data center and server provide top-of-the-line security measures to ensure the safety and privacy of sensitive educational information.",
    icon: ShieldCheck,
    accent: "#172554",
  },
  {
    number: "03",
    title: "Scalability",
    text: "As our online education department grows, our dedicated data center and server can easily scale up to accommodate increasing amounts of data and users.",
    icon: CloudCog,
    accent: "#b8860b",
  },
  {
    number: "04",
    title: "Customizability",
    text: "Dedicated resources provide greater control over configuration and customization, making it easier to tailor digital infrastructure to unique needs.",
    icon: Settings2,
    accent: "#7f1d1d",
  },
  {
    number: "05",
    title: "Reliability",
    text: "Our dedicated infrastructure provides dependable, high-performance technology that supports online education when it matters most.",
    icon: Server,
    accent: "#172554",
  },
  {
    number: "06",
    title: "24/7 Support",
    text: "Round-the-clock technical support ensures that infrastructure issues are addressed promptly and efficiently whenever assistance is needed.",
    icon: LifeBuoy,
    accent: "#b8860b",
  },
];

function DatacenterPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f2f1ee]">

        {/* =========================================================
            MINIMAL HERO
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#172554]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-32 -top-32 size-[300px] rounded-full bg-[#7f1d1d]/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 size-[280px] rounded-full bg-[#b8860b]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-5 sm:px-8 lg:px-12 lg:py-6">

            {/* Back */}

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Link
                to="/facilities"
                className="group inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-[#e4bd5b]"
              >
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Back to Facilities
              </Link>
            </motion.div>

            {/* Header */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 flex items-center justify-between gap-5"
            >
              <div className="min-w-0">

                <div className="mb-2 flex items-center gap-2">
                  <span className="h-[2px] w-7 bg-[#e4bd5b]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                    Digital Infrastructure
                  </span>
                </div>

                <h1 className="font-serif text-3xl font-bold leading-none tracking-[-0.03em] text-white sm:text-4xl lg:text-[3.2rem]">
                  Dedicated{" "}
                  <span className="text-[#e4bd5b]">
                    Datacenter
                  </span>
                </h1>

                <p className="mt-3 max-w-2xl text-xs leading-5 text-white/60 sm:text-sm">
                  Secure, scalable and reliable infrastructure built to
                  support the digital learning ecosystem of Crescent
                  Distance Education.
                </p>

              </div>

              {/* Small Icon */}

              <div className="hidden shrink-0 sm:flex size-14 items-center justify-center rounded-2xl border border-[#e4bd5b]/25 bg-white/5 text-[#e4bd5b] backdrop-blur-sm">
                <Server className="size-6" />
              </div>
            </motion.div>

            {/* Mini Stats */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-5 flex max-w-xl border-t border-white/10 pt-3"
            >
              <div className="flex-1 border-r border-white/10">
                <p className="font-serif text-lg font-bold text-[#e4bd5b]">
                  06
                </p>
                <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Capabilities
                </p>
              </div>

              <div className="flex-1 border-r border-white/10 pl-4">
                <p className="font-serif text-lg font-bold text-white">
                  24/7
                </p>
                <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Support
                </p>
              </div>

              <div className="flex-1 pl-4">
                <p className="font-serif text-lg font-bold text-[#e4bd5b]">
                  Secure
                </p>
                <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.15em] text-white/40">
                  Infrastructure
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* =========================================================
            FACILITIES NAV
        ========================================================== */}

        <section className="border-b border-[#d9d6d0] bg-white">
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
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-[#66686d] transition-all hover:bg-[#f2f1ee] hover:text-[#7f1d1d]"
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
                className="rounded-full bg-[#7f1d1d] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.14em] text-white"
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

          <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-12 lg:py-8">

            {/* Section Heading */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-end justify-between gap-5"
            >
              <div>

                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-7 bg-[#b8860b]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7f1d1d]">
                    Infrastructure
                  </span>
                </div>

                <h2 className="mt-1.5 font-serif text-2xl font-bold tracking-[-0.025em] text-[#25262a] sm:text-3xl">
                  Built for dependable learning
                </h2>

              </div>

              <p className="hidden max-w-sm text-right text-[11px] leading-5 text-[#777] md:block">
                Reliable infrastructure keeps our digital education
                environment fast, secure and ready to scale.
              </p>
            </motion.div>

            {/* =====================================================
                IMAGE + FEATURES
            ====================================================== */}

            <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr]">

              {/* IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="relative min-h-[300px] overflow-hidden rounded-[20px] bg-[#172554] shadow-[0_8px_25px_rgba(0,0,0,0.07)] lg:min-h-[500px]"
              >

                <img
                  src="https://distance.crescent-institute.edu.in/img/facilities/Server.jpg"
                  alt="Crescent Distance Education Datacenter"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/10 to-transparent" />

                {/* Number */}

                <div className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/25 bg-white/90 font-serif text-xs font-bold text-[#7f1d1d] shadow-lg">
                  01
                </div>

                {/* Image Content */}

                <div className="absolute bottom-5 left-5 right-5">

                  <div className="mb-1.5 flex items-center gap-2">
                    <Server className="size-3 text-[#e4bd5b]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#e4bd5b]">
                      Dedicated Infrastructure
                    </span>
                  </div>

                  <h3 className="max-w-sm font-serif text-xl font-bold leading-tight text-white sm:text-2xl">
                    Powering a connected learning ecosystem.
                  </h3>

                  <p className="mt-2 max-w-sm text-[11px] leading-5 text-white/60">
                    High-performance infrastructure designed to support
                    students, faculty and digital learning services.
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
                        y: 15,
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
                        delay: index * 0.04,
                      }}
                      className="group relative overflow-hidden rounded-[17px] border border-[#d8d5d0] bg-white p-4 shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                    >

                      {/* Accent */}

                      <div
                        className="absolute left-0 right-0 top-0 h-[3px]"
                        style={{
                          backgroundColor: feature.accent,
                        }}
                      />

                      {/* Icon + Number */}

                      <div className="flex items-center justify-between">

                        <div
                          className="flex size-8 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: `${feature.accent}12`,
                            color: feature.accent,
                          }}
                        >
                          <Icon className="size-3.5" />
                        </div>

                        <span
                          className="font-serif text-xs font-bold"
                          style={{
                            color: feature.accent,
                          }}
                        >
                          {feature.number}
                        </span>

                      </div>

                      {/* Title */}

                      <h3 className="mt-3 font-serif text-[15px] font-bold leading-tight text-[#25262a]">
                        {feature.title}
                      </h3>

                      {/* Text */}

                      <p className="mt-2 text-[10.5px] leading-5 text-[#66686d]">
                        {feature.text}
                      </p>

                      {/* Label */}

                      <div className="mt-3 flex items-center gap-1.5">

                        <CheckCircle2
                          className="size-3"
                          style={{
                            color: feature.accent,
                          }}
                        />

                        <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#999]">
                          Infrastructure Ready
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-4 rounded-[17px] bg-[#172554] px-4 py-4 sm:px-5"
            >

              <div className="flex items-center gap-3">

                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e4bd5b] text-[#172554]">
                  <ShieldCheck className="size-4" />
                </div>

                <div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#e4bd5b]">
                    Secure digital foundation
                  </p>

                  <p className="mt-0.5 font-serif text-xs font-bold leading-5 text-white sm:text-sm">
                    Fast performance, dependable infrastructure and
                    continuous support for a secure online learning experience.
                  </p>

                </div>

              </div>

            </motion.div>

            {/* =====================================================
                QUICK NAVIGATION
            ====================================================== */}

            <div className="mt-4 grid gap-3 sm:grid-cols-3">

              {/* Facilities */}

              <Link
                to="/facilities"
                className="group flex items-center justify-between rounded-[16px] border border-[#d8d5d0] bg-white p-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#7f1d1d]/8">
                    <Network className="size-3.5 text-[#7f1d1d]" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-xs font-bold text-[#25262a]">
                      Facilities
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="size-3.5 text-[#7f1d1d] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

              {/* Studio */}

              <Link
                to="/studio"
                className="group flex items-center justify-between rounded-[16px] border border-[#d8d5d0] bg-white p-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#b8860b]/10">
                    <Settings2 className="size-3.5 text-[#b8860b]" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-xs font-bold text-[#25262a]">
                      Studio
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="size-3.5 text-[#b8860b] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

              {/* LMS */}

              <Link
                to="/lms"
                className="group flex items-center justify-between rounded-[16px] border border-[#d8d5d0] bg-white p-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex items-center gap-3">

                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#172554]/8">
                    <Server className="size-3.5 text-[#172554]" />
                  </div>

                  <div>
                    <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#999]">
                      Explore
                    </p>

                    <p className="font-serif text-xs font-bold text-[#25262a]">
                      LMS
                    </p>
                  </div>

                </div>

                <ArrowUpRight className="size-3.5 text-[#172554] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />

              </Link>

            </div>

          </div>
        </section>

        {/* =========================================================
            MINIMAL BOTTOM CTA
        ========================================================== */}

        <section className="bg-[#3f4146]">

          <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">

            <div>

              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#e4bd5b]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e4bd5b]">
                  Digital Infrastructure
                </span>
              </div>

              <h2 className="mt-1.5 font-serif text-base font-bold leading-tight text-white sm:text-lg">
                Reliable technology behind every digital learning experience.
              </h2>

            </div>

            <Link
              to="/facilities"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#e4bd5b] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#172554] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
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