import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Headphones,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { HeroDE } from "../components/site/HeroDE";
import { SiteLayout } from "../components/site/SiteLayout";
import ChatWidget from "../chat-components/ChatWidget";

const title =
  "Crescent Distance Education | UG & PG Admissions 2026–2027";

const description =
  "UGC approved UG and PG distance education programmes with flexible learning, online admissions and expert student support.";

export const Route = createFileRoute("/")({
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
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

/* =========================================================
   HIGHLIGHTS
========================================================= */

const highlights = [
  {
    icon: ShieldCheck,
    value: "UGC",
    label: "Approved Programmes",
  },
  {
    icon: BookOpen,
    value: "10+",
    label: "UG & PG Programmes",
  },
  {
    icon: Users,
    value: "25,000+",
    label: "Learners Enrolled",
  },
  {
    icon: Headphones,
    value: "24×7",
    label: "Admission Assistance",
  },
];

/* =========================================================
   WHY CRESCENT
========================================================= */

const advantages = [
  {
    number: "01",
    title: "Flexible Learning",
    description:
      "Learn at your own pace with flexible distance education designed for students and working professionals.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Expert Student Support",
    description:
      "Get guidance throughout your admission journey with dedicated learner support and assistance.",
    icon: Headphones,
  },
  {
    number: "03",
    title: "Recognised Programmes",
    description:
      "Explore undergraduate and postgraduate programmes designed around academic and career goals.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   PROGRAMME CARDS
========================================================= */

const programmes = [
  {
    tag: "POSTGRADUATE",
    title: "MBA",
    description:
      "Build business knowledge, leadership skills and professional confidence through flexible learning.",
  },
  {
    tag: "POSTGRADUATE",
    title: "MCA",
    description:
      "Develop advanced computing and application skills through a structured distance learning experience.",
  },
  {
    tag: "UNDERGRADUATE",
    title: "UG Programmes",
    description:
      "Start your academic journey with flexible undergraduate programmes designed for modern learners.",
  },
];

/* =========================================================
   HOME PAGE
========================================================= */

function Index() {
  return (
    <SiteLayout>
      {/* =====================================================
          HERO
      ===================================================== */}

      <HeroDE />

      {/* =====================================================
          PREMIUM HIGHLIGHT BAR
      ===================================================== */}

      <section className="relative z-10 -mt-5 px-4 sm:px-6">
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[28px]
            border
            border-white/60
            bg-white/95
            shadow-[0_18px_50px_rgba(20,35,65,0.12)]
            backdrop-blur-xl
          "
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-4
                    px-5
                    py-5
                    transition-all
                    duration-300
                    hover:bg-[#faf8f3]
                    sm:px-6
                    ${
                      index !== highlights.length - 1
                        ? "border-b border-[#e7e2d8] lg:border-b-0 lg:border-r"
                        : ""
                    }
                  `}
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      size-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#202b55]
                      text-[#d5ad54]
                      shadow-[0_8px_20px_rgba(32,43,85,0.18)]
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                    "
                  >
                    <Icon className="size-5" />
                  </div>

                  {/* TEXT */}

                  <div className="min-w-0">
                    <p
                      className="
                        text-lg
                        font-extrabold
                        tracking-tight
                        text-[#202b55]
                      "
                    >
                      {item.value}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.08em]
                        text-[#6d7484]
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / ABOUT DISTANCE EDUCATION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-20">
        {/* subtle background decoration */}

        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-10
            size-80
            rounded-full
            bg-[#d5ad54]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            size-80
            rounded-full
            bg-[#8f1d1d]/5
            blur-3xl
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-10
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-16
          "
        >
          {/* LEFT */}

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[3px] w-10 rounded-full bg-[#8f1d1d]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#a17a36]
                "
              >
                Crescent Distance Education
              </span>
            </div>

            <h2
              className="
                max-w-xl
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-[#202b55]
                sm:text-4xl
                lg:text-5xl
              "
            >
              Education that fits
              <span className="text-[#8f1d1d]"> your journey.</span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-[15px]
                leading-7
                text-[#5f6878]
              "
            >
              Crescent Distance Education brings academic learning,
              flexible study and dedicated learner support together in
              one accessible learning experience.
            </p>

            <div className="mt-7">
              <Link
                to="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#202b55]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_10px_25px_rgba(32,43,85,0.20)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#8f1d1d]
                "
              >
                Discover Crescent
                <ArrowRight
                  className="
                    size-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {advantages.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#e8e3d9]
                    bg-[#faf9f6]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#d5ad54]/60
                    hover:bg-white
                    hover:shadow-[0_15px_35px_rgba(32,43,85,0.10)]
                  "
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        text-[11px]
                        font-extrabold
                        tracking-[0.16em]
                        text-[#a17a36]
                      "
                    >
                      {item.number}
                    </span>

                    <div
                      className="
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#202b55]
                        text-white
                      "
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <h3
                    className="
                      mt-5
                      text-base
                      font-bold
                      text-[#202b55]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-[#697283]
                    "
                  >
                    {item.description}
                  </p>

                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-[#8f1d1d]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMMES SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f6f4ef]
          px-4
          py-16
          sm:px-6
          md:py-20
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADING */}

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-[3px] w-9 rounded-full bg-[#d5ad54]" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#8f1d1d]
                  "
                >
                  Explore Programmes
                </span>
              </div>

              <h2
                className="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-[#202b55]
                  sm:text-4xl
                "
              >
                Find the right path
                <span className="text-[#8f1d1d]"> for you.</span>
              </h2>
            </div>

            <Link
              to="/programmes"
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-[#202b55]/15
                bg-white
                px-5
                py-2.5
                text-sm
                font-bold
                text-[#202b55]
                shadow-sm
                transition-all
                hover:border-[#8f1d1d]/30
                hover:text-[#8f1d1d]
              "
            >
              View All Programmes
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* CARDS */}

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {programmes.map((programme, index) => (
              <Link
                key={programme.title}
                to="/programmes"
                className="
                  group
                  relative
                  min-h-[250px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#e5e0d5]
                  bg-white
                  p-6
                  shadow-[0_8px_25px_rgba(32,43,85,0.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_45px_rgba(32,43,85,0.13)]
                "
              >
                {/* TOP NUMBER */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      bg-[#202b55]
                      px-3
                      py-1
                      text-[9px]
                      font-extrabold
                      tracking-[0.16em]
                      text-[#e4c46a]
                    "
                  >
                    {programme.tag}
                  </span>

                  <span
                    className="
                      text-3xl
                      font-black
                      text-[#e8e3d8]
                      transition-colors
                      duration-300
                      group-hover:text-[#d5ad54]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                <h3
                  className="
                    mt-10
                    text-3xl
                    font-extrabold
                    tracking-tight
                    text-[#202b55]
                  "
                >
                  {programme.title}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-sm
                    text-sm
                    leading-6
                    text-[#6c7483]
                  "
                >
                  {programme.description}
                </p>

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-[#8f1d1d]
                    via-[#a17a36]
                    to-[#d5ad54]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ADMISSION CTA
      ===================================================== */}

      <section className="bg-white px-4 py-14 sm:px-6 md:py-16">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[30px]
            bg-gradient-to-br
            from-[#202b55]
            via-[#253563]
            to-[#8f1d1d]
            px-6
            py-10
            shadow-[0_20px_55px_rgba(32,43,85,0.20)]
            sm:px-10
            lg:px-14
          "
        >
          {/* decorative circles */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              size-60
              rounded-full
              border
              border-[#d5ad54]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-28
              right-32
              size-72
              rounded-full
              bg-[#d5ad54]/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-7
              lg:flex-row
              lg:items-center
            "
          >
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-[#e4c46a]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#e4c46a]
                  "
                >
                  Admissions 2026–2027
                </span>
              </div>

              <h2
                className="
                  mt-3
                  max-w-2xl
                  text-2xl
                  font-extrabold
                  tracking-tight
                  text-white
                  sm:text-3xl
                "
              >
                Ready to start your next chapter?
              </h2>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-white/70
                "
              >
                Explore programmes, check eligibility and begin your
                application journey with Crescent Distance Education.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/admission"
                hash="how-to-apply"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#a82020]
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-all
                  hover:-translate-y-1
                  hover:bg-[#c02727]
                "
              >
                Apply Now
                <ArrowRight className="size-4" />
              </Link>

              <Link
                to="/programmes"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  backdrop-blur-md
                  transition-all
                  hover:bg-white/15
                "
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CHATBOT
      ===================================================== */}

      <ChatWidget />
    </SiteLayout>
  );
}

export default Index;