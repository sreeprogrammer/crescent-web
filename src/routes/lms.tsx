import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Database,
  Laptop,
  LockKeyhole,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  Video,
} from "lucide-react";

import campus1 from "@/assets/campus-1.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "LMS — Center for Online Education";

const description =
  "Explore the Learning Management System supporting flexible, accessible and personalized online learning.";

export const Route = createFileRoute("/lms")({
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
  component: LMSPage,
});

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   QUICK NAVIGATION
========================================================= */

function LMSQuickLinks() {
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
      icon: Video,
      href: "/studio",
      accent: "#6B4C9A",
    },
    {
      number: "03",
      title: "LMS",
      description: "Digital learning management system",
      icon: Laptop,
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
   LMS FEATURES
========================================================= */

const lmsFeatures = [
  {
    number: "01",
    title: "Unmatched Customizability",
    accent: "#6B4C9A",
    iconBg: "#6B4C9A",
    icon: Sparkles,
    text:
      "Tailor the content and modules to meet the specific needs and preferences of individual learner.",
  },
  {
    number: "02",
    title: "Seamless Accessibility",
    accent: "#2F6F4E",
    iconBg: "#2F6F4E",
    icon: MonitorSmartphone,
    text:
      "Access our LMS anytime, anywhere, and on any device to provide maximum convenience for all learners.",
  },
  {
    number: "03",
    title: "Powerful Analytics",
    accent: "#B08A24",
    iconBg: "#B08A24",
    icon: BarChart3,
    text:
      "Track learner progress and generate data-driven reports to measure the effectiveness of teaching methods, make data-driven decisions, and identify areas where additional support is needed.",
  },
  {
    number: "04",
    title: "Collaborative Learning",
    accent: "#8F1D1D",
    iconBg: "#8F1D1D",
    icon: MessageCircle,
    text:
      "Foster collaboration, teamwork, and peer-to-peer interaction with our LMS, particularly useful for online and hybrid learning environments.",
  },
  {
    number: "05",
    title: "Versatile Instructional Materials",
    accent: "#30265F",
    iconBg: "#30265F",
    icon: Video,
    text:
      "Deliver an extensive range of materials, including videos, interactive quizzes, and discussion forums, to accommodate different learning styles.",
  },
  {
    number: "06",
    title: "Personalized Learning Experience",
    accent: "#427D76",
    iconBg: "#427D76",
    icon: Laptop,
    text:
      "Personalize the learning experience for each individual student based on their strengths, weaknesses, and interests, to improve engagement and motivation.",
  },
  {
    number: "07",
    title: "Top-notch Security",
    accent: "#6B4C9A",
    iconBg: "#6B4C9A",
    icon: LockKeyhole,
    text:
      "Protect student data and intellectual property with our secure LMS, essential for maintaining the trust and confidence of learners, educators, and administrators.",
  },
  {
    number: "08",
    title: "World-class Support",
    accent: "#2F6F4E",
    iconBg: "#2F6F4E",
    icon: CheckCircle2,
    text:
      "Rely on our customer support, online tutorials, and technical assistance to resolve any issues quickly and maximize the value of our system.",
  },
];

/* =========================================================
   LMS PAGE
========================================================= */

function LMSPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#F5F1E9]"
      >

        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <LMSQuickLinks />

        {/* =================================================
            MAIN SECTION
        ================================================= */}

        <section className="relative border-b border-[#dedbd6] bg-[#f5f3f0]">

          {/* BACKGROUND ACCENTS */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#2F6F4E]/5 blur-3xl" />

            <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[#6B4C9A]/5 blur-3xl" />

            <div className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B08A24]/5 blur-3xl" />
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
              <span className="h-[2px] w-7 bg-[#2F6F4E]" />

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

                {/* LEFT COLOUR STRIPE */}

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#2F6F4E] via-[#B08A24] to-[#6B4C9A]" />

                <div className="flex items-center gap-2 text-[#111111]">
                  <Laptop className="size-3.5 text-[#2F6F4E]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.16em]">
                    Learning Management System
                  </span>
                </div>

                <h1 className="mt-3 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[2.4rem]">
                  A smarter{" "}
                  <span className="text-[#2F6F4E]">
                    learning experience
                  </span>{" "}
                  for every learner.
                </h1>

                <p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#111111] sm:text-xs">
                  Our LMS provides a flexible digital learning environment
                  designed to support individual learners with accessible
                  content, powerful analytics, collaboration, personalized
                  learning and secure academic support.
                </p>

                {/* STATS */}

                <div className="mt-4 grid grid-cols-3 border-y border-[#dedbd6] py-3">

                  <div className="border-r border-[#dedbd6] pr-3">
                    <p className="font-serif text-lg font-bold text-[#2F6F4E]">
                      08
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Features
                    </p>
                  </div>

                  <div className="border-r border-[#dedbd6] px-3">
                    <p className="font-serif text-lg font-bold text-[#6B4C9A]">
                      24/7
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Access
                    </p>
                  </div>

                  <div className="pl-3">
                    <p className="font-serif text-lg font-bold text-[#B08A24]">
                      360°
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Learning
                    </p>
                  </div>
                </div>

                {/* TAGS */}

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2F6F4E] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Laptop className="size-3" />
                    Digital Learning
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6B4C9A] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Sparkles className="size-3" />
                    Personalized
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B08A24] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <LockKeyhole className="size-3" />
                    Secure
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
                  alt="Learning Management System"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#17234B]/90 via-[#2F6F4E]/20 to-transparent" />

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#2F6F4E] via-[#B08A24] to-[#6B4C9A]" />

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <div className="mb-1.5 flex items-center gap-2">
                    <Laptop className="size-3.5 text-[#D8B84C]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      Learning Management System
                    </span>
                  </div>

                  <h2 className="max-w-md font-serif text-xl font-bold leading-tight text-white">
                    Flexible technology for connected learning.
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                LMS FEATURES
            ================================================= */}

            <div className="mt-5">

              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#2F6F4E] to-[#B08A24]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                  LMS Features
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {lmsFeatures.map((feature, index) => {
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
                to="/studio"
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
                <ArrowLeft className="size-3.5 text-[#6B4C9A]" />
                Back to Studio

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              <Link
                to="/datacenter"
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
                Explore Datacenter

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

export default LMSPage;