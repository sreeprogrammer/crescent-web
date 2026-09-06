import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clapperboard,
  Database,
  Laptop,
  Sparkles,
  Video,
} from "lucide-react";

import campus1 from "@/assets/campus-1.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

const title = "Studio — Center for Online Education";

const description =
  "Explore the in-house studio supporting high-quality, customized and interactive educational content.";

export const Route = createFileRoute("/studio")({
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
  component: StudioPage,
});

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   QUICK NAVIGATION
========================================================= */

function StudioQuickLinks() {
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
      icon: Clapperboard,
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
   STUDIO FEATURES
========================================================= */

const studioFeatures = [
  {
    number: "01",
    title: "Professional Quality",
    accent: "#6B4C9A",
    iconBg: "#6B4C9A",
    text:
      "Our in-house studio is equipped with the latest technology and staffed by experienced professionals who produce high-quality educational content that reflects the values and standards of our institution.",
  },
  {
    number: "02",
    title: "Customization",
    accent: "#2F6F4E",
    iconBg: "#2F6F4E",
    text:
      "Our in-house studio offers the flexibility to create educational content that meets the specific needs and goals of the institution, ensuring that to provide the best possible learning experience for your students.",
  },
  {
    number: "03",
    title: "Interactivity",
    accent: "#B08A24",
    iconBg: "#B08A24",
    text:
      "Our in-house studio produces interactive educational content, including videos, simulations, and other multimedia assets, that captures the attention and imagination of the students, resulting in greater engagement and retention of knowledge.",
  },
  {
    number: "04",
    title: "Cost-effective",
    accent: "#8F1D1D",
    iconBg: "#8F1D1D",
    text:
      "Our in-house studio delivers cost-effective educational content, allowing you to produce high-quality learning materials without breaking the bank.",
  },
  {
    number: "05",
    title: "Timeliness",
    accent: "#30265F",
    iconBg: "#30265F",
    text:
      "Our in-house studio delivers educational content quickly, allowing to keep pace with the ever-changing demands of the academic world and stay ahead of the competition.",
  },
  {
    number: "06",
    title: "Consistency",
    accent: "#427D76",
    iconBg: "#427D76",
    text:
      "Our in-house studio ensures consistency in the educational materials that our institution produces, resulting in a strong and memorable brand identity and learning experience for your students.",
  },
  {
    number: "07",
    title: "Confidentiality",
    accent: "#6B4C9A",
    iconBg: "#6B4C9A",
    text:
      "Our in-house studio guarantees confidentiality and protection of the institution's intellectual property, ensuring educational content remains secure and protected at all times.",
  },
];

/* =========================================================
   PAGE
========================================================= */

function StudioPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#F5F1E9]"
      >

        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <StudioQuickLinks />

        {/* =================================================
            MAIN SECTION
        ================================================= */}

        <section className="relative border-b border-[#dedbd6] bg-[#f5f3f0]">

          {/* BACKGROUND ACCENTS */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#6B4C9A]/5 blur-3xl" />

            <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[#2F6F4E]/5 blur-3xl" />

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
              <span className="h-[2px] w-7 bg-[#6B4C9A]" />

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

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#6B4C9A] via-[#B08A24] to-[#2F6F4E]" />

                <div className="flex items-center gap-2 text-[#111111]">
                  <Clapperboard className="size-3.5 text-[#6B4C9A]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.16em]">
                    In-house studio
                  </span>
                </div>

                <h1 className="mt-3 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[2.4rem]">
                  Creating{" "}
                  <span className="text-[#6B4C9A]">
                    quality educational content
                  </span>{" "}
                  for online learning.
                </h1>

                <p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#111111] sm:text-xs">
                  Our in-house studio is equipped with the latest technology
                  and staffed by experienced professionals who produce
                  high-quality educational content that reflects the values and
                  standards of our institution.
                </p>

                {/* STATS */}

                <div className="mt-4 grid grid-cols-3 border-y border-[#dedbd6] py-3">

                  <div className="border-r border-[#dedbd6] pr-3">
                    <p className="font-serif text-lg font-bold text-[#6B4C9A]">
                      01
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Studio
                    </p>
                  </div>

                  <div className="border-r border-[#dedbd6] px-3">
                    <p className="font-serif text-lg font-bold text-[#2F6F4E]">
                      07
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Features
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
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6B4C9A] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Clapperboard className="size-3" />
                    Professional Quality
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2F6F4E] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Video className="size-3" />
                    Interactive Content
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#B08A24] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Sparkles className="size-3" />
                    Customization
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
                  alt="In-house studio"
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

                <div className="absolute inset-0 bg-gradient-to-t from-[#30265F]/90 via-[#6B4C9A]/20 to-transparent" />

                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#B08A24] via-[#6B4C9A] to-[#2F6F4E]" />

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <div className="mb-1.5 flex items-center gap-2">
                    <Clapperboard className="size-3.5 text-[#D8B84C]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      In-house Studio
                    </span>
                  </div>

                  <h2 className="max-w-md font-serif text-xl font-bold leading-tight text-white">
                    Professional content for meaningful learning.
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                FEATURE SECTION
            ================================================= */}

            <div className="mt-5">

              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-6 bg-gradient-to-r from-[#6B4C9A] to-[#B08A24]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#111111]">
                  In-house studio
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {studioFeatures.map((feature, index) => (
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
                    {/* ACCENT STRIPE */}

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
                        <CheckCircle2 className="size-3.5 text-white" />
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
                ))}
              </div>
            </div>

            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#dedbd6] pt-4">

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
                <ArrowLeft className="size-3.5 text-[#6B4C9A]" />
                Back to Facilities

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

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
                Explore LMS
                <ArrowRight className="size-3.5 text-[#2F6F4E]" />

                <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default StudioPage;