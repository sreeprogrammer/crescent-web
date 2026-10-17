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
      className="
        relative
        bg-[#F5F1E9]
        px-4
        pb-6
        pt-4
        sm:px-6
        sm:pb-7
        sm:pt-5
        lg:px-10
        lg:pb-8
        lg:pt-5
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* =================================================
            GOLD LINE
        ================================================= */}

        <div
          className="
            mb-5
            h-[3px]
            w-full
            rounded-full
            bg-[#B08A24]
            sm:mb-6
          "
        />

        {/* =================================================
            QUICK LINK CARDS
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {links.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 8,
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
                    min-h-[100px]
                    w-full
                    items-center
                    overflow-hidden
                    rounded-[1.1rem]
                    border
                    border-[#D9D4CA]
                    bg-white
                    px-4
                    py-4
                    shadow-[0_6px_18px_rgba(31,35,43,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(31,35,43,0.10)]
                    sm:min-h-[108px]
                    sm:px-4
                    lg:min-h-[112px]
                    lg:px-4
                  "
                >

                  {/* TOP ACCENT */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[3px]
                    "
                    style={{
                      backgroundColor: item.accent,
                    }}
                  />

                  {/* CARD CONTENT */}

                  <div
                    className="
                      flex
                      w-full
                      items-center
                      gap-3
                      sm:gap-3.5
                    "
                  >

                    {/* ICON */}

                    <div
                      className="
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#17234B]
                        transition-transform
                        duration-300
                        group-hover:scale-105
                        sm:size-11
                      "
                    >
                      <Icon
                        className="
                          size-4
                          text-[#D8B84C]
                          sm:size-[18px]
                        "
                      />
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <div
                        className="
                          flex
                          min-w-0
                          items-center
                          gap-1.5
                        "
                      >

                        <span
                          className="
                            shrink-0
                            text-[clamp(0.65rem,1vw,0.75rem)]
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
                            text-[clamp(0.85rem,1.2vw,1rem)]
                            font-bold
                            leading-tight
                            text-[#20242B]
                          "
                        >
                          {item.title}
                        </h3>

                      </div>

                      <p
                        className="
                          mt-1
                          truncate
                          text-[clamp(0.72rem,1vw,0.82rem)]
                          font-medium
                          leading-tight
                          text-[#737782]
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                    {/* ARROW */}

                    <ArrowRight
                      className="
                        size-4
                        shrink-0
                        text-[#B9BDC5]
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-[#30265F]
                        sm:size-[18px]
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
        className="
          min-h-screen
          overflow-hidden
          bg-[#F5F1E9]
        "
      >

        {/* =================================================
            QUICK LINK CARDS
        ================================================= */}

        <AboutQuickLinks />

        {/* =================================================
            MAIN ABOUT CONTENT
        ================================================= */}

        <section
          className="
            relative
            border-b
            border-[#dedbd6]
            bg-[#f5f3f0]
          "
        >

          {/* BACKGROUND DECORATION */}

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div
              className="
                absolute
                -right-24
                -top-24
                size-72
                rounded-full
                bg-[#8f1d1d]/5
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -bottom-24
                left-0
                size-64
                rounded-full
                bg-[#8f1d1d]/5
                blur-3xl
              "
            />

          </div>

          <div
            className="
              relative
              mx-auto
              max-w-[1400px]
              px-4
              py-6
              sm:px-6
              sm:py-7
              lg:px-10
              lg:py-8
            "
          >

            {/* =================================================
                SMALL LABEL
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
              className="
                mb-4
                flex
                items-center
                gap-2
                sm:mb-5
              "
            >
              <span
                className="
                  h-[2px]
                  w-7
                  rounded-full
                  bg-[#8f1d1d]
                  sm:w-9
                "
              />

              <span
                className="
                  text-[clamp(0.65rem,1vw,0.8rem)]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#111111]
                "
              >
                About CDOE
              </span>
            </motion.div>

            {/* =================================================
                HERO GRID
            ================================================= */}

            <div
              className="
                grid
                items-stretch
                gap-5
                lg:grid-cols-[1.08fr_0.92fr]
                lg:gap-7
              "
            >

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}

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
                  py-6
                  shadow-[0_5px_18px_rgba(0,0,0,0.04)]
                  sm:px-7
                  sm:py-7
                  lg:px-9
                  lg:py-8
                "
              >

                {/* SMALL HEADING */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[#111111]
                  "
                >

                  <ShieldCheck
                    className="
                      size-4
                      sm:size-[18px]
                    "
                  />

                  <span
                    className="
                      text-[clamp(0.7rem,1vw,0.85rem)]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    "
                  >
                    Academic Excellence
                  </span>

                </div>

                {/* =================================================
                    MAIN HEADING
                ================================================= */}

                <h1
                  className="
                    mt-4
                    max-w-3xl
                    text-[clamp(1.75rem,4vw,3rem)]
                    font-bold
                    leading-[1.08]
                    tracking-[-0.03em]
                    text-[#111111]
                  "
                >
                  An institution shaped by{" "}

                  <span className="text-[#8f1d1d]">
                    vision, people
                  </span>{" "}

                  &amp; purpose.
                </h1>

                {/* =================================================
                    PARAGRAPH 1
                ================================================= */}

                <p
                  className="
                    mt-4
                    max-w-2xl
                    text-[clamp(0.9rem,1.25vw,1rem)]
                    leading-[1.75]
                    text-[#111111]
                  "
                >
                  Our institution is committed to creating an inspiring
                  learning environment that encourages students to think
                  beyond boundaries, develop their abilities, and prepare
                  themselves for a changing world. Through quality education,
                  supportive guidance, and a learner-focused approach, we aim
                  to make every student&apos;s academic journey meaningful and
                  purposeful.
                </p>

                {/* =================================================
                    PARAGRAPH 2
                ================================================= */}

                <p
                  className="
                    mt-3
                    max-w-2xl
                    text-[clamp(0.9rem,1.25vw,1rem)]
                    leading-[1.75]
                    text-[#111111]
                  "
                >
                  With a wide range of academic programmes, digital learning
                  opportunities, student activities, and modern facilities, we
                  provide an environment where learners can grow academically,
                  personally, and professionally. Our goal is to build a strong
                  learning community where every student feels supported,
                  connected, and confident about the future.
                </p>

                {/* =================================================
                    STATS
                ================================================= */}

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-3
                    border-y
                    border-[#dedbd6]
                    py-4
                  "
                >

                  {/* STAT 1 */}

                  <div
                    className="
                      border-r
                      border-[#dedbd6]
                      pr-3
                      sm:pr-5
                    "
                  >

                    <p
                      className="
                        font-serif
                        text-[clamp(1.15rem,2vw,1.6rem)]
                        font-bold
                        text-[#111111]
                      "
                    >
                      01
                    </p>

                    <p
                      className="
                        mt-1
                        text-[clamp(0.6rem,0.9vw,0.75rem)]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#111111]
                      "
                    >
                      Academic Vision
                    </p>

                  </div>

                  {/* STAT 2 */}

                  <div
                    className="
                      border-r
                      border-[#dedbd6]
                      px-3
                      sm:px-5
                    "
                  >

                    <p
                      className="
                        font-serif
                        text-[clamp(1.15rem,2vw,1.6rem)]
                        font-bold
                        text-[#111111]
                      "
                    >
                      04
                    </p>

                    <p
                      className="
                        mt-1
                        text-[clamp(0.6rem,0.9vw,0.75rem)]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#111111]
                      "
                    >
                      Core Teams
                    </p>

                  </div>

                  {/* STAT 3 */}

                  <div className="pl-3 sm:pl-5">

                    <p
                      className="
                        font-serif
                        text-[clamp(1.15rem,2vw,1.6rem)]
                        font-bold
                        text-[#111111]
                      "
                    >
                      24/7
                    </p>

                    <p
                      className="
                        mt-1
                        text-[clamp(0.6rem,0.9vw,0.75rem)]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#111111]
                      "
                    >
                      Digital Access
                    </p>

                  </div>

                </div>

                {/* =================================================
                    TAGS
                ================================================= */}

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-[#8f1d1d]
                      px-3
                      py-1.5
                      text-[clamp(0.65rem,0.9vw,0.8rem)]
                      font-semibold
                      text-white
                    "
                  >
                    <GraduationCap className="size-3.5" />

                    Learner First
                  </span>

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#222222]
                      bg-white
                      px-3
                      py-1.5
                      text-[clamp(0.65rem,0.9vw,0.8rem)]
                      font-semibold
                      text-[#111111]
                    "
                  >
                    <Sparkles className="size-3.5" />

                    Digital Learning
                  </span>

                </div>

              </motion.div>

              {/* =================================================
                  RIGHT IMAGE
              ================================================= */}

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
                  min-h-[300px]
                  overflow-hidden
                  rounded-[16px]
                  shadow-[0_10px_25px_rgba(0,0,0,0.1)]
                  sm:min-h-[360px]
                  lg:min-h-[480px]
                  xl:min-h-[520px]
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

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/10
                    to-transparent
                  "
                />

                {/* RED ACCENT */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-1
                    bg-[#8f1d1d]
                    sm:w-1.5
                  "
                />

                {/* IMAGE CONTENT */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    p-5
                    sm:p-7
                    lg:p-8
                  "
                >

                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <Landmark
                      className="
                        size-4
                        text-white
                        sm:size-[18px]
                      "
                    />

                    <span
                      className="
                        text-[clamp(0.65rem,1vw,0.8rem)]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white
                      "
                    >
                      Our Campus
                    </span>

                  </div>

                  <h2
                    className="
                      max-w-md
                      font-serif
                      text-[clamp(1.35rem,2.5vw,2rem)]
                      font-bold
                      leading-tight
                      text-white
                    "
                  >
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