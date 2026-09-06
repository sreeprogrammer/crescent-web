import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Database,
  Laptop,
  Server,
  Sparkles,
  Video,
} from "lucide-react";

import campus1 from "@/assets/campus-1.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   PAGE META
========================================================= */

const title = "Facilities — Center for Online Education";

const description =
  "Explore the learning facilities, LMS, studio and data center supporting online education.";

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/facilities")({
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

  component: FacilitiesPage,
});

/* =========================================================
   FONT
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   FACILITIES QUICK LINKS
========================================================= */

function FacilitiesQuickLinks() {
  const links = [
    {
      number: "01",
      title: "Overview",
      description: "Explore our online education facilities",
      icon: Sparkles,
      href: "/facilities",
      accent: "#8F3030",
    },
    {
      number: "02",
      title: "Studio",
      description: "High-quality educational content",
      icon: Video,
      href: "/studio",
      accent: "#30265F",
    },
    {
      number: "03",
      title: "LMS",
      description: "Digital learning management system",
      icon: Laptop,
      href: "/lms",
      accent: "#B08A24",
    },
    {
      number: "04",
      title: "Datacenter",
      description: "Secure and reliable data infrastructure",
      icon: Database,
      href: "/studio",
      accent: "#427D76",
    },
  ];

  return (
    <section
      style={circularFont}
      className="relative bg-[#F5F1E9] px-5 pb-5 pt-3 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* GOLD LINE */}

        <div className="mb-5 h-[3px] w-full rounded-full bg-[#B08A24]" />

        {/* QUICK LINK CARDS */}

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
                    className="absolute left-0 right-0 top-0 h-[2px]"
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
   FACILITIES PAGE
========================================================= */

function FacilitiesPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#F5F1E9]"
      >
        {/* =================================================
            QUICK LINKS
        ================================================= */}

        <FacilitiesQuickLinks />

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <section className="relative border-b border-[#dedbd6] bg-[#f5f3f0]">

          {/* BACKGROUND DECORATION */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#8f1d1d]/5 blur-3xl" />

            <div className="absolute -bottom-24 left-0 size-64 rounded-full bg-[#30265F]/5 blur-3xl" />
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
                Center for Online Education
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
                  <Server className="size-3.5" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.16em]">
                    Online Education
                  </span>
                </div>

                {/* MAIN HEADING */}

                <h1 className="mt-3 max-w-3xl text-2xl font-bold leading-[1.08] tracking-[-0.02em] text-[#111111] sm:text-3xl lg:text-[2.4rem]">
                  Modern infrastructure for{" "}
                  <span className="text-[#8f1d1d]">
                    flexible online learning.
                  </span>
                </h1>

                {/* INTRODUCTION */}

                <p className="mt-3 max-w-2xl text-[11px] leading-5 text-[#111111] sm:text-xs">
                  B.S. Abdur Rahman Crescent Institute of Science and Technology
                  is elated to offer online MBA/MCA learning programs that
                  adhere to UGC OL Regulations 2020 and align with our
                  institution&apos;s values and objectives. Our courses feature
                  the same curriculum as our traditional MBA/MCA program, but
                  delivered through state-of-the-art IT infrastructure and
                  web-based technologies to meet the needs of working
                  professionals and freshers in a flexible learning
                  environment.
                </p>

                {/* STATS */}

                <div className="mt-4 grid grid-cols-3 border-y border-[#dedbd6] py-3">

                  <div className="border-r border-[#dedbd6] pr-3">
                    <p className="font-serif text-lg font-bold text-[#111111]">
                      01
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      LMS
                    </p>
                  </div>

                  <div className="border-r border-[#dedbd6] px-3">
                    <p className="font-serif text-lg font-bold text-[#111111]">
                      01
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Studio
                    </p>
                  </div>

                  <div className="pl-3">
                    <p className="font-serif text-lg font-bold text-[#111111]">
                      24/7
                    </p>

                    <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#111111]">
                      Support
                    </p>
                  </div>
                </div>

                {/* TAGS */}

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8f1d1d] px-2.5 py-1 text-[8px] font-semibold text-white">
                    <Laptop className="size-3" />
                    Digital Learning
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#222222] bg-white px-2.5 py-1 text-[8px] font-semibold text-[#111111]">
                    <Sparkles className="size-3" />
                    Flexible Learning
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
                  alt="Online education facilities"
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
                    <Server className="size-3.5 text-white" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white">
                      Online Facilities
                    </span>
                  </div>

                  <h2 className="max-w-md font-serif text-xl font-bold leading-tight text-white">
                    Technology that makes learning accessible.
                  </h2>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                FACILITY DETAILS
            ================================================= */}

            <div className="mt-5 grid gap-4 lg:grid-cols-2">

              {/* LMS + STUDIO */}

              <motion.article
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
                className="
                  rounded-[16px]
                  border
                  border-[#dedbd6]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_5px_18px_rgba(0,0,0,0.04)]
                  sm:px-6
                "
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#17234B]">
                    <Laptop className="size-3.5 text-[#D8B84C]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#B08A24]">
                      Digital Learning
                    </p>

                    <h2 className="text-sm font-bold text-[#111111]">
                      LMS &amp; In-house Studio
                    </h2>
                  </div>
                </div>

                <p className="text-[11px] leading-5 text-[#111111]">
                  Our cutting-edge Learning Management System (LMS) delivers
                  unmatched customizability for individual learners, powerful
                  analytics to track progress and identify areas for
                  improvement, and versatile instructional materials to
                  accommodate different learning styles. With seamless
                  accessibility and collaborative features, our LMS fosters
                  teamwork and peer-to-peer interaction to improve engagement
                  and motivation.
                </p>

                <p className="mt-2 text-[11px] leading-5 text-[#111111]">
                  Our LMS also offers a highly personalized learning experience
                  while maintaining top-notch security and world-class support.
                  To further enhance the learning experience, we also offer an
                  in-house studio that produces high-quality educational
                  content tailored to the unique needs and goals of our
                  institution. With professional quality, interactivity,
                  cost-effectiveness, and confidentiality, our in-house studio
                  delivers consistent and timely educational materials that
                  enhance brand identity and student engagement.
                </p>
              </motion.article>

              {/* DATACENTER */}

              <motion.article
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
                  delay: 0.05,
                }}
                className="
                  rounded-[16px]
                  border
                  border-[#dedbd6]
                  bg-white
                  px-5
                  py-4
                  shadow-[0_5px_18px_rgba(0,0,0,0.04)]
                  sm:px-6
                "
              >
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#17234B]">
                    <Database className="size-3.5 text-[#D8B84C]" />
                  </div>

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#427D76]">
                      Infrastructure
                    </p>

                    <h2 className="text-sm font-bold text-[#111111]">
                      Data Center &amp; Server
                    </h2>
                  </div>
                </div>

                <p className="text-[11px] leading-5 text-[#111111]">
                  Finally, our dedicated data center and server provide
                  lightning-fast speed, robust security, scalability,
                  customizability, reliability, and 24/7 support to ensure the
                  safety and privacy of sensitive educational data and meet the
                  evolving demands of our online education department.
                </p>

                <p className="mt-2 text-[11px] leading-5 text-[#111111]">
                  At B.S. Abdur Rahman Crescent Institute of Science and
                  Technology, we&apos;re committed to delivering exceptional
                  online learning experiences that exceed expectations and
                  empower the next generation of leaders.
                </p>
              </motion.article>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default FacilitiesPage;