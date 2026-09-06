import { AdmissionTimeline } from "@/components/site/AdmissionTimeline";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bell,
  FileText,
  LogIn,
  UserPlus,
  Download,
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
        px-5
        pb-6
        pt-4
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =================================================
            DARK GOLD LINE
        ================================================= */}

        <div
          className="
            mb-5
            h-[3px]
            w-full
            rounded-full
            bg-[#B08A24]
          "
        />

        {/* =================================================
            QUICK LINK CARDS
        ================================================= */}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {links.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.number}
                href={item.href}
                className="
                  group
                  relative
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

                <div className="flex items-center gap-3">

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

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-1.5">

                      <span
                        className="
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
        px-5
        pt-6
        sm:px-8
        lg:px-12
      "
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            relative
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#30265F]/30
            bg-[#30265F]
            px-6
            py-5
            shadow-[0_12px_30px_rgba(48,38,95,0.14)]
            sm:px-8
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
              items-center
              justify-between
              gap-5
            "
          >

            <div>

              <p
                className="
                  text-[9px]
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
                  text-[20px]
                  font-bold
                  text-white
                  sm:text-[23px]
                "
              >
                Your journey to enrolment
              </h2>

            </div>

            <div
              className="
                hidden
                size-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[#D8B84C]/30
                bg-white/10
                sm:flex
              "
            >
              <ArrowRight className="size-5 text-[#D8B84C]" />
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
        px-5
        py-12
        sm:px-8
        lg:px-12
        lg:py-16
      "
    >
      <div className="mx-auto max-w-7xl">

        <div
          className="
            grid
            items-center
            gap-9
            lg:grid-cols-[1fr_0.72fr]
            lg:gap-14
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>

            {/* DECORATIVE LINE */}

            <div className="mb-4 flex items-center gap-2">

              <span
                className="
                  h-[3px]
                  w-10
                  rounded-full
                  bg-[#8F3030]
                "
              />

              <span
                className="
                  size-2
                  rounded-full
                  bg-[#D8B84C]
                "
              />

              <span
                className="
                  h-[3px]
                  w-10
                  rounded-full
                  bg-[#30265F]
                "
              />

            </div>

            {/* LABEL */}

            <p
              className="
                text-[10px]
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
                max-w-xl
                text-[28px]
                font-bold
                leading-tight
                tracking-[-0.02em]
                text-[#20242B]
                sm:text-[34px]
              "
            >
              Explore programmes and begin your academic journey
            </h2>

            {/* CONTENT */}

            <p
              className="
                mt-5
                max-w-2xl
                text-[13px]
                font-medium
                leading-7
                text-[#5E6470]
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
                text-[13px]
                font-medium
                leading-7
                text-[#5E6470]
              "
            >
              Research Centers, integral of respective schools
              encourage inter-departmental collaborative participation
              of students in exciting research projects. A student
              admitted should register in their respective schools
              depending on the degree / programme selected to pursue.
            </p>

            {/* ACTIONS */}

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                to="/programmes"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#30265F]
                  px-5
                  py-2.5
                  text-[11px]
                  font-bold
                  text-white
                  shadow-[0_8px_18px_rgba(48,38,95,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#3B3170]
                "
              >
                Explore Programmes
                <ArrowRight className="size-3.5" />
              </Link>

              <a
                href="#notification"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#B08A24]/40
                  bg-white
                  px-5
                  py-2.5
                  text-[11px]
                  font-bold
                  text-[#30265F]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                "
              >
                <Download className="size-3.5 text-[#B08A24]" />
                Admission Notification
              </a>

            </div>
          </div>

          {/* =================================================
              RIGHT SQUARE IMAGE
          ================================================= */}

          <div className="relative mx-auto w-full max-w-[430px]">

            {/* GOLD DECORATION */}

            <div
              className="
                absolute
                -bottom-3
                -right-3
                h-full
                w-full
                rounded-[1.8rem]
                border
                border-[#B08A24]/30
              "
            />

            {/* IMAGE */}

            <div
              className="
                relative
                aspect-square
                overflow-hidden
                rounded-[1.8rem]
                border
                border-[#30265F]/15
                bg-[#30265F]
                shadow-[0_18px_40px_rgba(32,36,43,0.15)]
              "
            >

              <img
                src={overviewImage}
                alt="Admission overview"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              {/* IMAGE OVERLAY */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-[#17142B]/80
                  via-[#17142B]/30
                  to-transparent
                  p-6
                "
              >

                <p
                  className="
                    text-[9px]
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
                    text-[17px]
                    font-bold
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
        className="min-h-screen bg-[#F5F1E9]"
      >

        {/* =================================================
            QUICK ADMISSION LINKS
            Compact cards
        ================================================= */}

        <AdmissionQuickLinks />

        {/* =================================================
            ADMISSION PROCESS
        ================================================= */}

        <AdmissionProcessHeading />

        {/* EXISTING TIMELINE — UNCHANGED */}

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