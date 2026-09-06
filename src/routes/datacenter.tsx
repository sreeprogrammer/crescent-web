import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Database,
  HardDrive,
  Laptop,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import campus1 from "@/assets/campus-1.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "Datacenter — Center for Online Education";

const description =
  "Explore the dedicated data center and server infrastructure supporting secure, scalable and reliable online education.";

export const Route = createFileRoute("/datacenter")({
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
    ],
  }),
  component: DatacenterPage,
});

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   QUICK NAVIGATION
========================================================= */

function DatacenterQuickLinks() {
  const links = [
    {
      number: "01",
      title: "Overview",
      description: "Explore our online education facilities",
      icon: Sparkles,
      href: "/facilities",
      accent: "#8F1D1D",
    },
    {
      number: "02",
      title: "Studio",
      description: "High-quality educational content",
      icon: Laptop,
      href: "/studio",
      accent: "#6B4C9A",
    },
    {
      number: "03",
      title: "LMS",
      description: "Digital learning management system",
      icon: Network,
      href: "/lms",
      accent: "#2F6F4E",
    },
    {
      number: "04",
      title: "Datacenter",
      description: "Secure and reliable data infrastructure",
      icon: Database,
      href: "/datacenter",
      accent: "#B08A24",
    },
  ];

  return (
    <section
      style={circularFont}
      className="relative bg-[#F5F1E9] px-5 pb-5 pt-3 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="mb-5 h-[3px] w-full rounded-full bg-gradient-to-r from-[#2F6F4E] via-[#B08A24] to-[#6B4C9A]" />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="min-w-0"
              >
                <Link
                  to={item.href}
                  className="
                    group
                    relative
                    flex
                    h-[96px]
                    min-h-[96px]
                    w-full
                    items-center
                    overflow-hidden
                    rounded-[1.1rem]
                    border
                    border-[#D9D4CA]
                    bg-white
                    px-4
                    py-3.5
                    shadow-[0_6px_18px_rgba(31,35,43,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_10px_25px_rgba(31,35,43,0.09)]
                  "
                >
                  <div
                    className="absolute left-0 right-0 top-0 h-[3px]"
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  <div className="flex w-full items-center gap-3">

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#17234B] transition-transform duration-300 group-hover:scale-105">
                      <Icon
                        className="size-4"
                        style={{
                          color: item.accent,
                        }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex min-w-0 items-center gap-1.5">
                        <span
                          className="shrink-0 text-[8px] font-bold tracking-[0.12em]"
                          style={{
                            color: item.accent,
                          }}
                        >
                          {item.number}
                        </span>

                        <h3 className="min-w-0 truncate text-[11px] font-bold text-[#20242B]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-0.5 truncate text-[9px] font-medium text-[#737782]">
                        {item.description}
                      </p>
                    </div>

                    <ArrowRight
                      className="
                        size-3.5
                        shrink-0
                        text-[#B9BDC5]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   DATA CENTER FEATURES
========================================================= */

const datacenterFeatures = [
  {
    number: "01",
    title: "Lightning-fast speed",
    accent: "#6B4C9A",
    iconBg: "#6B4C9A",
    icon: HardDrive,
    text:
      "With a dedicated data center and server, our online education department can enjoy unparalleled speed and performance for all their digital needs.",
  },
  {
    number: "02",
    title: "Robust security",
    accent: "#8F1D1D",
    iconBg: "#8F1D1D",
    icon: ShieldCheck,
    text:
      "When it comes to sensitive educational data, security is paramount. Our dedicated data center and server provide top-of-the-line security measures to ensure the safety and privacy of all information.",
  },
  {
    number: "03",
    title: "Scalability",
    accent: "#2F6F4E",
    iconBg: "#2F6F4E",
    icon: Network,
    text:
      "As our online education department grows, our dedicated data center and server can easily scale up to accommodate increasing amounts of data and users.",
  },
  {
    number: "04",
    title: "Customizability",
    accent: "#B08A24",
    iconBg: "#B08A24",
    icon: Sparkles,
    text:
      "With dedicated resources, our online education department has greater control over the configuration and customization of their digital infrastructure, making it easier to tailor their solutions to meet their unique needs.",
  },
  {
    number: "05",
    title: "Reliability",
    accent: "#30265F",
    iconBg: "#30265F",
    icon: Server,
    text:
      "With a dedicated data center and server, our online education department can count on dependable, high-performance technology that won't let them down when they need it most.",
  },
  {
    number: "06",
    title: "24/7 support",
    accent: "#427D76",
    iconBg: "#427D76",
    icon: LockKeyhole,
    text:
      "Our dedicated server and data center come with round-the-clock technical support to ensure that any issues are addressed promptly and efficiently. Students and faculty can rest assured that they'll have access to help whenever they need it.",
  },
];

/* =========================================================
   DATACENTER PAGE
========================================================= */

function DatacenterPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#F5F1E9]"
      >

        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <DatacenterQuickLinks />

        {/* =================================================
            MAIN SECTION
        ================================================= */}

        <section className="relative border-b border-[#dedbd6] bg-[#f5f3f0]">

          {/* BACKGROUND ACCENTS */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#B08A24]/5 blur-3xl" />

            <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[#30265F]/5 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F6F4E]/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10 lg:py-6">

            {/* =================================================
                LABEL
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="mb-3 flex items-center gap-2"
            >
              <span className="h-[2px] w-7 bg-[#B08A24]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#111111]">
                Center for Online Education
              </span>
            </motion.div>

            {/* =================================================
                HERO
            ================================================= */}

            <div className="grid items-stretch gap-5 lg:grid-cols-[1.08fr_0.92fr]">

              {/* LEFT CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.55,
                }}
                className="
                  relative
                  flex
                  flex-col
                  justify-center
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#dedbd6]
                  bg-white
                  px-5
                  py-5
                  shadow-[0_5px_18px_rgba(0,0,0,0.04)]
                  sm:px-7
                  lg:px-8
                "
              >

                {/* COLOUR STRIPE */}

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#B08A24] via-[#6B4C9A] to-[#2F6F4E]" />

                <div className="flex items-center gap-2 text-[#111111]">
                  <Server className="size-3.5 text-[#B08A24]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.16em]">
                    Dedicated Data Center
                  </span>
                </div>

                <h1 className="mt-3 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[2.4rem]">
                  Powerful{" "}
                  <span className="text-[#B08A24]">
                    infrastructure
                  </span>{" "}
                  for reliable online learning.
                </h1>

                <p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#111111] sm:text-xs">
                  Our dedicated data center and server provide the speed,
                  security, scalability, customizability and reliability
                  required to support the evolving needs of our online
                  education department.
                </p>

                {/* STATS */}

                <div className="mt-4 grid grid-cols-3 border-y border-[#dedbd6] py-3">

                  <div className="border-r border-[#dedbd6] pr-3">
                    <p className="font-serif text-lg font-bold text-[#B08A24]">
                      06
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Features
                    </p>
                  </div>

                  <div className="border-r border-[#dedbd6] px-3">
                    <p className="font-serif text-lg font-bold text-[#2F6F4E]">
                      24/7
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Support
                    </p>
                  </div>

                  <div className="pl-3">
                    <p className="font-serif text-lg font-bold text-[#6B4C9A]">
                      100%
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Secure
                    </p>
                  </div>
                </div>

                {/* TAGS */}

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B08A24] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Server className="size-3" />
                    High Performance
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2F6F4E] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <ShieldCheck className="size-3" />
                    Secure Infrastructure
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6B4C9A] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Network className="size-3" />
                    Scalable
                  </span>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  relative
                  min-h-[260px]
                  overflow-hidden
                  rounded-[16px]
                  shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                "
              >
                <img
                  src={campus1}
                  alt="Data center and server infrastructure"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#17234B]/95 via-[#30265F]/25 to-transparent" />

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#B08A24] via-[#6B4C9A] to-[#2F6F4E]" />

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <div className="mb-1.5 flex items-center gap-2">
                    <Database className="size-3.5 text-[#D8B84C]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      Data Center
                    </span>
                  </div>

                  <h2 className="max-w-md font-serif text-xl font-bold leading-tight text-white">
                    Secure infrastructure powering digital education.
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                FEATURES
            ================================================= */}

            <div className="mt-5">

              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#B08A24] to-[#2F6F4E]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                  Data Center Features
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {datacenterFeatures.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.article
                      key={feature.title}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.35,
                        delay: index * 0.04,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-[#dedbd6]
                        bg-white
                        px-4
                        py-3.5
                        shadow-[0_5px_18px_rgba(0,0,0,0.04)]
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]
                      "
                    >

                      {/* COLOUR STRIPE */}

                      <div
                        className="absolute left-0 top-0 h-full w-[3px]"
                        style={{
                          backgroundColor: feature.accent,
                        }}
                      />

                      {/* GOLD HOVER LINE */}

                      <div className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />

                      <div className="mb-2 flex items-start gap-2.5">

                        {/* ICON */}

                        <div
                          className="flex size-7 shrink-0 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: feature.iconBg,
                          }}
                        >
                          <Icon className="size-3.5 text-white" />
                        </div>

                        {/* TITLE */}

                        <div className="min-w-0">
                          <span
                            className="text-[8px] font-bold uppercase tracking-[0.1em]"
                            style={{
                              color: feature.accent,
                            }}
                          >
                            {feature.number}
                          </span>

                          <h3 className="mt-0.5 text-xs font-bold leading-4.5 text-[#111111]">
                            {feature.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-[10px] leading-4.5 text-[#111111]">
                        {feature.text}
                      </p>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#dedbd6] pt-4">

              <Link
                to="/lms"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-1.5
                  text-[10px]
                  font-semibold
                  text-[#111111]
                "
              >
                <ArrowLeft className="size-3.5 text-[#2F6F4E]" />

                Back to LMS

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <Link
                to="/facilities"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  gap-1.5
                  text-[10px]
                  font-semibold
                  text-[#111111]
                "
              >
                Back to Facilities

                <ArrowRight className="size-3.5 text-[#B08A24]" />

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default DatacenterPage;