import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import campus1 from "@/assets/campus-1.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   PAGE META
========================================================= */

const title = "About Us — Leadership, CDOE Team & Facilities";

const description =
  "Learn about our institution, visionary leadership, execution team, CDOE team and learning facilities.";

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title,
      },
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

  component: AboutPage,
});

/* =========================================================
   FONT
   SAME FONT AS ADMISSION PAGE
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   ABOUT QUICK LINKS
========================================================= */

function AboutQuickLinks() {
  const links = [
    {
      number: "01",
      title: "Visionary Team",
      description: "Meet our visionary leadership",
      icon: GraduationCap,
      href: "/visionary-team",
      accent: "#8F3030",
    },
    {
      number: "02",
      title: "Execution Team",
      description: "Explore our execution team",
      icon: Users,
      href: "/execution-team",
      accent: "#30265F",
    },
    {
      number: "03",
      title: "CDOE Team",
      description: "Meet our CDOE team",
      icon: ShieldCheck,
      href: "/cdoe-team",
      accent: "#B08A24",
    },
    {
      number: "04",
      title: "Facilities",
      description: "Explore our learning facilities",
      icon: Sparkles,
      href: "/facilities",
      accent: "#427D76",
    },
  ];

  return (
    <section
      style={circularFont}
      className="relative bg-[#F5F1E9] px-5 pb-5 pt-3 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =================================================
            GOLD LINE
        ================================================= */}

        <div className="mb-5 h-[3px] w-full rounded-full bg-[#B08A24]" />

        {/* =================================================
            QUICK LINK CARDS
            EXACT ADMISSION CARD HEIGHT
        ================================================= */}

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

                  {/* TOP ACCENT */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[2px]
                    "
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  {/* CARD CONTENT */}

                  <div className="flex w-full items-center gap-3">

                    {/* ICON */}

                    <div
                      className="
                        flex
                        size-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#17234B]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon className="size-4 text-[#D8B84C]" />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <div className="flex min-w-0 items-center gap-1.5">

                        <span
                          className="
                            shrink-0
                            text-[8px]
                            font-bold
                            tracking-[0.12em]
                          "
                          style={{
                            color: item.accent,
                          }}
                        >
                          {item.number}
                        </span>

                        <h3
                          className="
                            min-w-0
                            truncate
                            text-[11px]
                            font-bold
                            text-[#20242B]
                          "
                        >
                          {item.title}
                        </h3>

                      </div>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[9px]
                          font-medium
                          text-[#737782]
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                    {/* ARROW */}

                    <ArrowRight
                      className="
                        size-3.5
                        shrink-0
                        text-[#B9BDC5]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#30265F]
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
   ABOUT PAGE
========================================================= */

function AboutPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#F5F1E9]"
      >

        {/* =================================================
            ADMISSION STYLE CARDS
        ================================================= */}

        <AboutQuickLinks />

        {/* =================================================
            MAIN ABOUT CONTENT
        ================================================= */}

        <section className="relative border-b border-[#dedbd6] bg-[#f5f3f0]">

          {/* BACKGROUND DECORATION */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#8f1d1d]/5 blur-3xl" />

            <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[#8f1d1d]/5 blur-3xl" />

          </div>

          <div className="relative mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-10 lg:py-6">

            {/* SMALL LABEL */}

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
              <span className="h-[2px] w-7 bg-[#8f1d1d]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#111111]">
                About CDOE
              </span>
            </motion.div>

            {/* HERO GRID */}

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
                  flex
                  flex-col
                  justify-center
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

                {/* SMALL HEADING */}

                <div className="flex items-center gap-2 text-[#111111]">

                  <ShieldCheck className="size-3.5" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.16em]">
                    Academic Excellence
                  </span>

                </div>

                {/* MAIN HEADING */}

                <h1 className="mt-3 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[2.4rem]">

                  An institution shaped by{" "}

                  <span className="text-[#8f1d1d]">
                    vision, people
                  </span>{" "}

                  &amp; purpose.

                </h1>

                {/* PARAGRAPH 1 */}

                <p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#111111] sm:text-xs">
                  Our institution is committed to creating an inspiring
                  learning environment that encourages students to think
                  beyond boundaries, develop their abilities, and prepare
                  themselves for a changing world. Through quality education,
                  supportive guidance, and a learner-focused approach, we aim
                  to make every student&apos;s academic journey meaningful and
                  purposeful.
                </p>

                {/* PARAGRAPH 2 */}

                <p className="mt-2 max-w-2xl text-[11px] leading-5 text-[#111111] sm:text-xs">
                  With a wide range of academic programmes, digital learning
                  opportunities, student activities, and modern facilities, we
                  provide an environment where learners can grow academically,
                  personally, and professionally. Our goal is to build a strong
                  learning community where every student feels supported,
                  connected, and confident about the future.
                </p>

                {/* STATS */}

                <div className="mt-4 grid grid-cols-3 border-y border-[#dedbd6] py-3">

                  <div className="border-r border-[#dedbd6] pr-3">

                    <p className="font-serif text-lg font-bold text-[#111111]">
                      01
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Academic Vision
                    </p>

                  </div>

                  <div className="border-r border-[#dedbd6] px-3">

                    <p className="font-serif text-lg font-bold text-[#111111]">
                      04
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Core Teams
                    </p>

                  </div>

                  <div className="pl-3">

                    <p className="font-serif text-lg font-bold text-[#111111]">
                      24/7
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Digital Access
                    </p>

                  </div>

                </div>

                {/* TAGS */}

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8f1d1d] px-2.5 py-1 text-[8px] font-semibold text-white">

                    <GraduationCap className="size-3" />

                    Learner First

                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#222222] bg-white px-2.5 py-1 text-[8px] font-semibold text-[#111111]">

                    <Sparkles className="size-3" />

                    Digital Learning

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
                  alt="Crescent campus"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute left-0 top-0 h-full w-1 bg-[#8f1d1d]" />

                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <div className="mb-1.5 flex items-center gap-2">

                    <Landmark className="size-3.5 text-white" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      Our Campus
                    </span>

                  </div>

                  <h2 className="max-w-md font-serif text-xl font-bold leading-tight text-white">
                    Where academic ambition meets opportunity.
                  </h2>

                </div>

              </motion.div>

            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default AboutPage;