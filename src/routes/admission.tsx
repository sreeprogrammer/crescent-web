import { AdmissionTimeline } from "@/components/site/AdmissionTimeline";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  Download,
  FileText,
  LogIn,
  UserPlus,
} from "lucide-react";

import overviewImage from "@/assets/campus-1.jpg";

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/admission")({
  component: AdmissionPage,
});

/* =========================================================
   FONT
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   ADMISSION QUICK LINKS
========================================================= */

function AdmissionQuickLinks() {
  const links = [
    {
      number: "01",
      title: "Start Registration",
      description: "Create your admission account",
      icon: UserPlus,
      href: "#registration",
      accent: "#8F3030",
    },
    {
      number: "02",
      title: "Applicant Login",
      description: "Continue your application",
      icon: LogIn,
      href: "#login",
      accent: "#30265F",
    },
    {
      number: "03",
      title: "Documents Required",
      description: "Check required documents",
      icon: FileText,
      href: "#documents",
      accent: "#B08A24",
    },
    {
      number: "04",
      title: "Admission Notification",
      description: "View admission updates",
      icon: Bell,
      href: "#notification",
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
        pb-7
        pt-4
        sm:px-6
        sm:pb-8
        sm:pt-5
        lg:px-10
        lg:pb-9
        lg:pt-6
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
            lg:gap-4
          "
        >
          {links.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.number}
                href={item.href}
                className="
                  group
                  relative
                  min-h-[88px]
                  overflow-hidden
                  rounded-[1rem]
                  border
                  border-[#D9D4CA]
                  bg-white
                  px-4
                  py-4
                  shadow-[0_6px_18px_rgba(31,35,43,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_10px_25px_rgba(31,35,43,0.09)]
                  sm:min-h-[96px]
                  sm:px-5
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

                <div className="flex min-h-full items-center gap-3">

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
                        size-[18px]
                        text-[#D8B84C]
                        sm:size-5
                      "
                    />
                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <div className="flex min-w-0 items-center gap-2">

                      <span
                        className="
                          shrink-0
                          text-[clamp(0.65rem,0.6rem+0.15vw,0.8rem)]
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
                          text-[clamp(0.85rem,0.78rem+0.25vw,1rem)]
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
                        text-[clamp(0.72rem,0.68rem+0.15vw,0.85rem)]
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ADMISSION PROCESS HEADING
========================================================= */

function AdmissionProcessHeading() {
  return (
    <section
      style={circularFont}
      className="
        bg-[#F5F1E9]
        px-4
        pt-2
        sm:px-6
        sm:pt-3
        lg:px-10
        lg:pt-4
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        <div
          className="
            relative
            overflow-hidden
            rounded-[1.25rem]
            border
            border-[#30265F]/30
            bg-[#30265F]
            px-5
            py-6
            shadow-[0_12px_30px_rgba(48,38,95,0.14)]
            sm:rounded-[1.5rem]
            sm:px-7
            sm:py-7
            lg:px-9
            lg:py-7
          "
        >

          {/* DECORATION */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              size-40
              rounded-full
              border
              border-[#D8B84C]/20
              sm:size-48
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-12
              left-1/3
              size-24
              rounded-full
              bg-[#8F3030]/10
              blur-2xl
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              flex
              flex-col
              items-start
              justify-between
              gap-5
              sm:flex-row
              sm:items-center
            "
          >

            <div>

              <p
                className="
                  text-[clamp(0.7rem,0.65rem+0.2vw,0.85rem)]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#D8B84C]
                "
              >
                Admission Process
              </p>

              <h2
                className="
                  mt-1.5
                  text-[clamp(1.3rem,1.1rem+0.8vw,1.8rem)]
                  font-bold
                  leading-tight
                  text-white
                "
              >
                Your journey to enrolment
              </h2>

            </div>

            <div
              className="
                flex
                size-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#D8B84C]/30
                bg-white/10
                sm:size-12
              "
            >
              <ArrowRight
                className="
                  size-5
                  text-[#D8B84C]
                  sm:size-[22px]
                "
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   OVERVIEW SECTION
========================================================= */

function AdmissionOverview() {
  return (
    <section
      style={circularFont}
      className="
        bg-[#F5F1E9]
        px-4
        py-12
        sm:px-6
        sm:py-14
        lg:px-10
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl">

        <div
          className="
            grid
            items-center
            gap-10
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-14
            xl:gap-20
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="min-w-0">

            {/* DECORATIVE LINE */}

            <div className="mb-5 flex items-center gap-2">

              <span
                className="
                  h-[3px]
                  w-9
                  rounded-full
                  bg-[#8F3030]
                  sm:w-11
                "
              />

              <span
                className="
                  size-2
                  rounded-full
                  bg-[#D8B84C]
                  sm:size-2.5
                "
              />

              <span
                className="
                  h-[3px]
                  w-9
                  rounded-full
                  bg-[#30265F]
                  sm:w-11
                "
              />

            </div>

            {/* LABEL */}

            <p
              className="
                text-[clamp(0.7rem,0.65rem+0.2vw,0.9rem)]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#8F3030]
              "
            >
              Overview
            </p>

            {/* HEADING */}

            <h2
              className="
                mt-2
                max-w-2xl
                text-[clamp(1.8rem,1.45rem+1.5vw,2.75rem)]
                font-bold
                leading-[1.1]
                tracking-[-0.025em]
                text-[#20242B]
              "
            >
              Explore programmes and begin your academic journey
            </h2>

            {/* CONTENT */}

            <p
              className="
                mt-5
                max-w-2xl
                text-[clamp(0.9rem,0.82rem+0.25vw,1.05rem)]
                font-medium
                leading-7
                text-[#5E6470]
                sm:leading-8
              "
            >
              <span className="font-bold text-[#30265F]">
                VIT Group of Institutions offer
              </span>{" "}
              70 Undergraduate, 58 Postgraduate, 15 Integrated
              Programmes, 2 Research programmes and 2 M.Tech
              Industrial Programmes. In addition to full-time Ph.D
              Degrees in Engineering and Management Disciplines,
              Ph.D. in Science and Languages and Integrated Ph.D.
              programmes in engineering disciplines.
            </p>

            <p
              className="
                mt-4
                max-w-2xl
                text-[clamp(0.9rem,0.82rem+0.25vw,1.05rem)]
                font-medium
                leading-7
                text-[#5E6470]
                sm:leading-8
              "
            >
              Research Centers, integral of respective schools
              encourage inter-departmental collaborative participation
              of students in exciting research projects. A student
              admitted should register in their respective schools
              depending on the degree / programme selected to pursue.
            </p>

            {/* ACTIONS */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >

              <Link
                to="/programmes"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#30265F]
                  px-6
                  py-3
                  text-[clamp(0.8rem,0.75rem+0.2vw,0.95rem)]
                  font-bold
                  text-white
                  shadow-[0_8px_18px_rgba(48,38,95,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#3B3170]
                  sm:w-auto
                "
              >
                Explore Programmes

                <ArrowRight className="size-4" />
              </Link>

              <a
                href="#notification"
                className="
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-[#B08A24]/40
                  bg-white
                  px-6
                  py-3
                  text-[clamp(0.8rem,0.75rem+0.2vw,0.95rem)]
                  font-bold
                  text-[#30265F]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  sm:w-auto
                "
              >
                <Download className="size-4 text-[#B08A24]" />

                Admission Notification
              </a>

            </div>
          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div className="relative mx-auto w-full max-w-[430px] lg:max-w-none">

            {/* GOLD DECORATION */}

            <div
              className="
                absolute
                -bottom-3
                -right-3
                h-full
                w-full
                rounded-[1.5rem]
                border
                border-[#B08A24]/30
                sm:-bottom-4
                sm:-right-4
                sm:rounded-[1.8rem]
              "
            />

            {/* IMAGE */}

            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[1.5rem]
                border
                border-[#30265F]/15
                bg-[#30265F]
                shadow-[0_18px_40px_rgba(32,36,43,0.15)]
                sm:rounded-[1.8rem]
              "
            >

              <img
                src={overviewImage}
                alt="Admission overview"
                className="
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
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-[#17142B]/90
                  via-[#17142B]/35
                  to-transparent
                  p-5
                  sm:p-6
                  lg:p-7
                "
              >

                <p
                  className="
                    text-[clamp(0.65rem,0.6rem+0.2vw,0.8rem)]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#D8B84C]
                  "
                >
                  Admissions 2026–2027
                </p>

                <p
                  className="
                    mt-1
                    max-w-md
                    text-[clamp(1rem,0.9rem+0.4vw,1.3rem)]
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  Shape your future with confidence
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

function AdmissionPage() {
  return (
    <SiteLayout>

      <main
        style={circularFont}
        className="
          min-h-screen
          overflow-x-hidden
          bg-[#F5F1E9]
        "
      >

        {/* =================================================
            QUICK ADMISSION LINKS
        ================================================= */}

        <AdmissionQuickLinks />

        {/* =================================================
            ADMISSION PROCESS
        ================================================= */}

        <AdmissionProcessHeading />

        {/* =================================================
            EXISTING TIMELINE
            UNCHANGED
        ================================================= */}

        <div className="bg-[#F5F1E9]">
          <AdmissionTimeline />
        </div>

        {/* =================================================
            OVERVIEW
        ================================================= */}

        <AdmissionOverview />

      </main>

    </SiteLayout>
  );
}

export default AdmissionPage;