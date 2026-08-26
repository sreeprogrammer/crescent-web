import { AdmissionTimeline } from "@/components/site/AdmissionTimeline";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileSignature,
  GraduationCap,
  LogIn,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

/* =========================================================
   SEO
========================================================= */

const title = "Admission 2026–2027 — Apply Online for UG & PG Programmes";

const description =
  "How to apply, new registration, applicant login and the latest admission notifications for Crescent Distance Education programmes.";

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/admission")({
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
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: AdmissionPage,
});

/* =========================================================
   SUPPORT CARD DATA
========================================================= */

const supportCards = [
  {
    id: "new-registration",
    number: "01",
    icon: UserPlus,
    label: "GET STARTED",
    title: "New Registration",
    description:
      "Create your applicant account and begin your admission application in a few simple steps.",
    items: [
      "Choose your username and password",
      "Enter your personal details",
      "Select your programme",
    ],
    action: "Start Registration",
    link: "/new-registration",
  },

  {
    id: "applicant-login",
    number: "02",
    icon: LogIn,
    label: "RETURNING APPLICANT",
    title: "Applicant Login",
    description:
      "Already registered? Continue your application, upload documents and track your admission status.",
    items: [
      "Continue your saved application",
      "Upload pending documents",
      "Track application status",
    ],
    action: "Applicant Login",
    link: "/login",
  },

  {
    id: "notification",
    number: "03",
    icon: Bell,
    label: "LATEST UPDATES",
    title: "Admission Notification",
    description:
      "Important dates and updates for the 2026–2027 admission cycle.",
    items: [
      "Applications open — 1 January 2026",
      "Last date — 31 July 2026",
      "Verification — within 48 hours",
      "Session starts — 1 September 2026",
    ],
    action: null,
    link: "/admission",
  },

  {
    id: "documents",
    number: "04",
    icon: FileSignature,
    label: "BEFORE YOU APPLY",
    title: "Documents Required",
    description:
      "Keep the required documents ready before starting your online application.",
    items: [
      "10th & 12th marksheets",
      "Degree certificate for PG",
      "Government photo ID",
      "Photo & signature",
    ],
    action: null,
    link: "/admission",
  },
] as const;

/* =========================================================
   SUPPORT CARD
========================================================= */

function SupportCard({
  card,
  index,
}: {
  card: (typeof supportCards)[number];
  index: number;
}) {
  const Icon = card.icon;

  return (
    <motion.article
      id={card.id}
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[1.4rem]
        border
        border-[#172554]/10
        bg-white
        p-4
        shadow-[0_10px_28px_rgba(23,37,84,0.06)]
        transition-all
        duration-300
        hover:border-[#d4af37]/50
        hover:shadow-[0_18px_38px_rgba(23,37,84,0.11)]
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          size-32
          rounded-full
          bg-[#d4af37]/10
          blur-2xl
          transition-all
          duration-500
          group-hover:bg-[#8f1d1d]/10
        "
      />

      {/* Top */}

      <div className="relative flex items-start justify-between">
        <div
          className="
            flex
            size-10
            items-center
            justify-center
            rounded-[0.8rem]
            bg-[#172554]
            text-[#d4af37]
            shadow-md
            transition-all
            duration-300
            group-hover:bg-[#8f1d1d]
            group-hover:text-white
          "
        >
          <Icon className="size-[18px]" />
        </div>

        <span
          className="
            rounded-full
            border
            border-[#d4af37]/30
            bg-[#d4af37]/10
            px-2.5
            py-1
            text-[8px]
            font-black
            tracking-[0.18em]
            text-[#8f1d1d]
          "
        >
          {card.number}
        </span>
      </div>

      {/* Label */}

      <p
        className="
          relative
          mt-3
          text-[8px]
          font-black
          tracking-[0.22em]
          text-[#8f1d1d]
        "
      >
        {card.label}
      </p>

      {/* Title */}

      <h3
        className="
          relative
          mt-1
          text-lg
          font-black
          tracking-tight
          text-[#172554]
        "
      >
        {card.title}
      </h3>

      {/* Description */}

      <p
        className="
          relative
          mt-1
          text-[11px]
          leading-[1.5]
          text-slate-500
        "
      >
        {card.description}
      </p>

      {/* Items */}

      <div
        className="
          relative
          mt-3
          space-y-1.5
          border-t
          border-slate-100
          pt-3
        "
      >
        {card.items.map((item) => (
          <div
            key={item}
            className="
              flex
              items-start
              gap-2
              text-[10px]
              font-medium
              text-slate-600
            "
          >
            <CheckCircle2
              className="
                mt-0.5
                size-3.5
                shrink-0
                text-[#8f1d1d]
              "
            />

            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Action */}

      {card.action && (
        <Link
          to={card.link}
          className="
            relative
            mt-3
            flex
            items-center
            justify-between
            rounded-xl
            bg-[#172554]
            px-3.5
            py-2.5
            text-[10px]
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-[#8f1d1d]
          "
        >
          <span>{card.action}</span>

          <ChevronRight
            className="
              size-3.5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      )}
    </motion.article>
  );
}

/* =========================================================
   HERO
========================================================= */

function AdmissionHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f4ee]
        px-4
        py-3
        sm:px-6
        sm:py-4
        lg:px-10
        lg:py-5
      "
    >
      {/* Background */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            -left-28
            -top-28
            size-72
            rounded-full
            bg-[#8f1d1d]/10
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -right-20
            size-80
            rounded-full
            bg-[#d4af37]/15
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-[30%]
            top-1/2
            size-40
            rounded-full
            bg-[#172554]/5
            blur-3xl
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            ADMISSIONS OPEN
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            mb-2
            flex
            justify-center
          "
        >
          <motion.div
            animate={{
              opacity: [1, 0.78, 1],
              scale: [1, 1.025, 1],
              boxShadow: [
                "0 0 0 rgba(127,29,29,0)",
                "0 0 18px rgba(127,29,29,0.30)",
                "0 0 0 rgba(127,29,29,0)",
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#7f1d1d]/40
              bg-[#7f1d1d]
              px-5
              py-2
              text-white
              backdrop-blur-md
            "
          >
            <span className="size-1.5 rounded-full bg-[#d4af37]" />

            <span
              className="
                text-[10px]
                font-black
                tracking-[0.16em]
                text-white
                sm:text-[11px]
              "
            >
              Admissions Open · 2026–2027
            </span>

            <span className="size-1.5 rounded-full bg-[#d4af37]" />
          </motion.div>
        </motion.div>

        {/* =====================================================
            HERO GRID
        ===================================================== */}

        <div
          className="
            grid
            items-center
            gap-4
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="text-center lg:text-left"
          >
            {/* Accent */}

            <div
              className="
                mb-2
                flex
                items-center
                justify-center
                gap-1.5
                lg:justify-start
              "
            >
              <span className="h-[2px] w-7 rounded-full bg-[#8f1d1d]" />

              <span className="size-1 rounded-full bg-[#d4af37]" />

              <span className="h-[2px] w-7 rounded-full bg-[#172554]" />
            </div>

            {/* Heading */}

            <h1
              className="
                mx-auto
                max-w-2xl
                text-[26px]
                font-black
                leading-[1.08]
                tracking-[-0.025em]
                text-[#172554]
                sm:text-[32px]
                lg:mx-0
                lg:text-[38px]
              "
            >
              Begin your{" "}
              <span className="text-[#8f1d1d]">
                academic journey
              </span>{" "}
              with confidence.
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-2
                max-w-xl
                text-[11px]
                leading-5
                text-slate-600
                sm:text-xs
                lg:mx-0
              "
            >
              Apply online for UG and PG programmes through a simple,
              supported admission journey — from registration to enrolment.
            </p>

            {/* Trust badges */}

            <div
              className="
                mt-3
                flex
                flex-wrap
                justify-center
                gap-2
                lg:justify-start
              "
            >
              {[
                "UGC Approved",
                "100% Online",
                "Flexible Learning",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-[#172554]/10
                    bg-white/75
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    text-[#172554]
                    shadow-sm
                  "
                >
                  <CheckCircle2
                    className="
                      size-3
                      text-[#8f1d1d]
                    "
                  />

                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT STATUS */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                -inset-3
                rounded-[2rem]
                bg-[#d4af37]/10
                blur-2xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[1.6rem]
                border
                border-[#d4af37]/30
                bg-[#172554]
                p-3.5
                text-white
                shadow-[0_18px_45px_rgba(23,37,84,0.16)]
              "
            >
              <div
                className="
                  absolute
                  -right-16
                  -top-16
                  size-44
                  rounded-full
                  bg-[#d4af37]/10
                  blur-2xl
                "
              />

              <div className="relative">

                {/* Status Header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="
                        text-[8px]
                        font-black
                        uppercase
                        tracking-[0.25em]
                        text-[#d4af37]
                      "
                    >
                      Admission Status
                    </p>

                    <h2 className="mt-1 text-lg font-black">
                      Applications Open
                    </h2>
                  </div>

                  <div
                    className="
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#8f1d1d]
                    "
                  >
                    <GraduationCap className="size-4.5" />
                  </div>
                </div>

                {/* Session / Mode */}

                <div className="mt-3 grid grid-cols-2 gap-2">

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-2.5
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-white/40
                      "
                    >
                      Session
                    </p>

                    <p className="mt-1 text-xs font-black">
                      2026–2027
                    </p>
                  </div>

                  <div
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-2.5
                    "
                  >
                    <p
                      className="
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-wider
                        text-white/40
                      "
                    >
                      Mode
                    </p>

                    <p className="mt-1 text-xs font-black">
                      Online
                    </p>
                  </div>

                </div>

                {/* Security Note */}

                <div
                  className="
                    mt-2
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[#d4af37]/20
                    bg-[#d4af37]/10
                    p-2.5
                  "
                >
                  <ShieldCheck
                    className="
                      size-3.5
                      shrink-0
                      text-[#d4af37]
                    "
                  />

                  <p
                    className="
                      text-[9px]
                      leading-4
                      text-white/75
                    "
                  >
                    Simple admission process with dedicated learner support.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

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

      {/* =====================================================
          HERO
      ===================================================== */}

      <AdmissionHero />

      {/* =====================================================
          ADMISSION PROCESS
      ===================================================== */}

      <div className="bg-[#f7f4ee]">
        <AdmissionTimeline />
      </div>

      {/* =====================================================
          SUPPORT SECTION
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#f7f4ee]
          px-4
          py-5
          sm:px-6
          sm:py-6
          lg:px-10
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div
            className="
              mb-3
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[8px]
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-[#8f1d1d]
                "
              >
                Admission Support
              </p>

              <h2
                className="
                  mt-1
                  text-xl
                  font-black
                  tracking-tight
                  text-[#172554]
                  sm:text-2xl
                "
              >
                Everything you need to apply
              </h2>
            </div>

            <p
              className="
                max-w-md
                text-[10px]
                leading-5
                text-slate-500
                sm:text-right
              "
            >
              Registration, login, admission updates and document
              requirements — organised in one simple space.
            </p>
          </div>

          {/* =================================================
              CARDS
          ================================================= */}

          <div
            className="
              grid
              gap-3
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {supportCards.map((card, index) => (
              <SupportCard
                key={card.id}
                card={card}
                index={index}
              />
            ))}
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <motion.div
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
            className="
              mt-3
              flex
              flex-col
              items-center
              justify-between
              gap-3
              rounded-2xl
              border
              border-[#d4af37]/25
              bg-[#172554]
              px-5
              py-3
              text-center
              sm:flex-row
              sm:text-left
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#d4af37]
                  text-[#172554]
                "
              >
                <FileCheck2 className="size-3.5" />
              </div>

              <div>
                <p className="text-[11px] font-bold text-white">
                  Ready to start?
                </p>

                <p className="text-[9px] text-white/55">
                  Keep your documents ready and begin your application.
                </p>
              </div>

            </div>

            {/* =================================================
                START APPLICATION → NEW REGISTRATION
            ================================================= */}

            <Link
              to="/new-registration"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#8f1d1d]
                px-4
                py-2
                text-[9px]
                font-black
                text-white
                transition-all
                hover:bg-[#a82424]
                hover:shadow-lg
              "
            >
              Start Application

              <ChevronRight className="size-3" />
            </Link>

          </motion.div>

        </div>
      </section>

    </SiteLayout>
  );
}

/* =========================================================
   DEFAULT EXPORT ONLY
========================================================= */

export default AdmissionPage;