import { useState, type ReactNode } from "react";

import programmePhoto from "@/assets/campus-1.jpg";

import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ProgrammeCards } from "@/components/site/ProgrammeCards";
import { SiteLayout } from "@/components/site/SiteLayout";

import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";

/* ========================================================= */
/* FONT */
/* ========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* ========================================================= */
/* PAGE SEO */
/* ========================================================= */

const title = "Programmes Offered — UG & PG Distance Education Courses";

const description =
  "Explore undergraduate, postgraduate and professional certification programmes designed for flexible and career-focused learning.";

export const Route = createFileRoute("/programmes")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: ProgrammesPage,
});

/* ========================================================= */
/* PROGRAMMES PAGE */
/* ========================================================= */

function ProgrammesPage() {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [showProgrammeDrawer, setShowProgrammeDrawer] = useState(false);

  const closeProgrammeDrawer = () => {
    setShowProgrammeDrawer(false);
  };

  return (
    <SiteLayout>
      {/* ========================================================= */}
      {/* PROGRAMME HERO */}
      {/* ========================================================= */}

      <section
        className="relative overflow-hidden bg-[#f7f4ee]"
        style={circularFont}
      >
        {/* TOP LINE */}

        <div className="h-[3px] bg-gradient-to-r from-[#172554] via-[#8f1d1d] to-[#d4af37]" />

        {/* BACKGROUND GLOW */}

        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-[#d4af37]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-[#8f1d1d]/6 blur-3xl" />

        {/* HERO CONTAINER */}

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            py-5
            sm:px-6
            sm:py-7
            lg:px-8
            lg:py-9
          "
        >
          <div className="grid items-center gap-7 lg:grid-cols-[1fr_0.88fr] lg:gap-10">
            {/* ================================================= */}
            {/* LEFT CONTENT */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="min-w-0"
            >
              {/* EYEBROW */}

              <div className="mb-2 flex items-center gap-2.5">
                <span className="h-[2px] w-8 rounded-full bg-[#8f1d1d]" />

                <span
                  className="
                    text-[clamp(0.65rem,0.58rem+0.22vw,0.82rem)]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#d4af37]
                  "
                >
                  Programmes Offered
                </span>
              </div>

              {/* TITLE */}

              <h1
                className="
                  font-display
                  max-w-2xl
                  text-[clamp(2rem,1.55rem+1.8vw,3.1rem)]
                  font-bold
                  leading-[1.04]
                  tracking-[-0.04em]
                  text-[#111111]
                "
                style={circularFont}
              >
                Shape Your Future With{" "}
                <span className="relative text-[#111111]">
                  The Right Programme

                  <span className="absolute -bottom-1 left-0 h-[2px] w-10 rounded-full bg-[#d4af37] sm:w-14" />
                </span>
              </h1>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-3
                  max-w-xl
                  text-[clamp(0.82rem,0.72rem+0.28vw,1rem)]
                  leading-[1.6]
                  text-[#111111]/80
                "
              >
                Explore flexible undergraduate, postgraduate and professional
                programmes designed for learners who want quality education
                without putting their career on hold.
              </p>

              {/* QUICK FEATURES */}

              <div className="mt-4 grid max-w-lg grid-cols-3 gap-2 sm:gap-2.5">
                <MiniFeature
                  icon={GraduationCap}
                  title="UG"
                  text="Programmes"
                />

                <MiniFeature
                  icon={BookOpen}
                  title="PG"
                  text="Programmes"
                />

                <MiniFeature
                  icon={Sparkles}
                  title="Career"
                  text="Focused"
                />
              </div>

              {/* APPLY BUTTON */}

              <div className="mt-4">
                <Link
                  to="/admission"
                  hash="how-to-apply"
                  className="
                    group
                    relative
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#8f1d1d]
                    px-4
                    py-2
                    text-[clamp(0.72rem,0.65rem+0.2vw,0.88rem)]
                    font-bold
                    text-white
                    shadow-[0_6px_16px_rgba(143,29,29,0.14)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                  "
                >
                  Apply Now

                  <ArrowRight
                    className="
                      size-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#d4af37]
                      transition-all
                      duration-300
                      group-hover:w-10
                    "
                  />
                </Link>
              </div>

              {/* TRUST LINE */}

              <div className="mt-3 flex items-center gap-2">
                <CheckCircle2 className="size-3.5 shrink-0 text-[#8f1d1d]" />

                <span
                  className="
                    text-[clamp(0.62rem,0.56rem+0.16vw,0.76rem)]
                    font-semibold
                    tracking-wide
                    text-[#111111]/75
                  "
                >
                  Flexible learning • Career focused • Student friendly
                </span>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* RIGHT IMAGE */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="relative mx-auto w-full max-w-[540px] lg:ml-auto"
            >
              {/* GOLD OUTER GLOW */}

              <div className="absolute -inset-1 rounded-[1.25rem] bg-gradient-to-br from-[#d4af37]/40 via-transparent to-[#8f1d1d]/25 blur-[2px]" />

              {/* IMAGE FRAME */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[1.2rem]
                  border
                  border-[#172554]/10
                  bg-white
                  p-1.5
                  shadow-[0_14px_35px_rgba(23,37,84,0.13)]
                "
              >
                <div className="relative overflow-hidden rounded-[0.95rem]">
                  <img
                    src={programmePhoto}
                    alt="Crescent Institute campus"
                    width={1200}
                    height={750}
                    loading="eager"
                    className="
                      h-[210px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-105
                      sm:h-[260px]
                      lg:h-[320px]
                    "
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/90 via-[#172554]/15 to-transparent" />

                  {/* TOP LABEL */}

                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                    <span
                      className="
                        rounded-full
                        border
                        border-white/20
                        bg-[#172554]/60
                        px-2.5
                        py-1.5
                        text-[clamp(0.55rem,0.5rem+0.12vw,0.68rem)]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      Distance Education
                    </span>
                  </div>

                  {/* IMAGE TEXT */}

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <p
                          className="
                            text-[clamp(0.55rem,0.5rem+0.14vw,0.7rem)]
                            font-bold
                            uppercase
                            tracking-[0.18em]
                            text-[#d4af37]
                          "
                        >
                          Crescent Education
                        </p>

                        <h2
                          className="
                            mt-1
                            font-display
                            text-[clamp(1.1rem,0.95rem+0.45vw,1.5rem)]
                            font-bold
                            leading-tight
                            text-white
                          "
                          style={circularFont}
                        >
                          Learn. Grow. Lead.
                        </h2>

                        <div className="mt-1.5 h-[2px] w-9 rounded-full bg-[#d4af37]" />
                      </div>

                      <div
                        className="
                          flex
                          size-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/20
                          bg-white/10
                          backdrop-blur-md
                          sm:size-10
                        "
                      >
                        <GraduationCap className="size-4 text-white sm:size-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE */}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.4,
                }}
                className="
                  absolute
                  -bottom-4
                  left-4
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#172554]/10
                  bg-white/95
                  px-3
                  py-2
                  shadow-[0_8px_22px_rgba(23,37,84,0.14)]
                  backdrop-blur-xl
                  sm:left-6
                "
              >
                <div className="flex size-6 items-center justify-center rounded-full bg-[#8f1d1d]">
                  <CheckCircle2 className="size-3 text-white" />
                </div>

                <div>
                  <p
                    className="
                      text-[clamp(0.62rem,0.56rem+0.16vw,0.76rem)]
                      font-bold
                      text-[#111111]
                    "
                    style={circularFont}
                  >
                    Flexible Learning
                  </p>

                  <p
                    className="
                      text-[clamp(0.52rem,0.48rem+0.12vw,0.64rem)]
                      text-[#111111]/70
                    "
                    style={circularFont}
                  >
                    Learn at your own pace
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXISTING PROGRAMME CARDS */}
      {/* ========================================================= */}

      <div style={circularFont}>
        <ProgrammeCards withHeading={false} />
      </div>

      {/* ========================================================= */}
      {/* PROGRAMME SIDE DRAWER */}
      {/* ========================================================= */}

      <AnimatePresence>
        {showProgrammeDrawer && (
          <>
            {/* DARK BACKDROP */}

            <motion.div
              key="programme-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed
                inset-0
                z-[9990]
                bg-[#0b1224]/60
                backdrop-blur-sm
              "
              onClick={closeProgrammeDrawer}
            />

            {/* DRAWER */}

            <motion.aside
              key="programme-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
              className="
                fixed
                right-0
                top-0
                z-[9995]
                flex
                h-[100dvh]
                w-full
                max-w-md
                flex-col
                overflow-hidden
                border-l
                border-white/20
                bg-[#f7f4ee]
                shadow-[-25px_0_70px_rgba(0,0,0,0.25)]
              "
              aria-label="Explore Programmes"
              style={circularFont}
            >
              {/* DRAWER HEADER */}

              <div className="relative shrink-0 overflow-hidden bg-[#172554] px-5 py-6 sm:px-6">
                {/* GLOW 1 */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    size-36
                    rounded-full
                    bg-[#8f1d1d]/45
                    blur-3xl
                  "
                />

                {/* GLOW 2 */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-12
                    -left-12
                    size-32
                    rounded-full
                    bg-[#d4af37]/15
                    blur-3xl
                  "
                />

                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  aria-label="Close programme menu"
                  title="Close"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    closeProgrammeDrawer();
                  }}
                  onPointerDown={(event) => {
                    event.stopPropagation();
                  }}
                  className="
                    pointer-events-auto
                    absolute
                    right-4
                    top-4
                    z-[100]
                    flex
                    size-10
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-white/15
                    text-white
                    shadow-lg
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:bg-[#8f1d1d]
                    hover:text-white
                    active:scale-95
                  "
                >
                  <X className="size-5" strokeWidth={2.5} />
                </button>

                {/* HEADER CONTENT */}

                <div className="relative z-10 pr-12">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-[2px] w-8 rounded-full bg-[#d4af37]" />

                    <span
                      className="
                        text-[clamp(0.62rem,0.56rem+0.16vw,0.76rem)]
                        font-bold
                        uppercase
                        tracking-[0.22em]
                        text-[#d4af37]
                      "
                    >
                      Programmes Offered
                    </span>
                  </div>

                  <h2
                    className="
                      font-display
                      text-[clamp(1.45rem,1.2rem+0.8vw,1.9rem)]
                      font-bold
                      leading-tight
                      text-white
                    "
                  >
                    Explore Programmes
                  </h2>

                  <p
                    className="
                      mt-1.5
                      text-[clamp(0.72rem,0.65rem+0.18vw,0.86rem)]
                      leading-5
                      text-white/60
                    "
                  >
                    Select a programme to view its complete overview.
                  </p>
                </div>
              </div>

              {/* PROGRAMME LIST */}

              <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-5">
                {/* UG */}

                <ProgrammeDrawerSection
                  title="Undergraduate"
                  count="3 Programmes"
                >
                  <ProgrammeDrawerItem
                    title="BA English"
                    description="English language, literature and communication"
                    icon={BookOpen}
                    link="/ba-english"
                    onNavigate={closeProgrammeDrawer}
                  />

                  <ProgrammeDrawerItem
                    title="BA Islamic Studies"
                    description="Islamic studies and academic learning"
                    icon={GraduationCap}
                    link="/ba-islamic-studies"
                    onNavigate={closeProgrammeDrawer}
                  />

                  <ProgrammeDrawerItem
                    title="BA Public Policy"
                    description="Policy, governance and administration"
                    icon={BookOpen}
                    link="/ba-public-policy"
                    onNavigate={closeProgrammeDrawer}
                  />
                </ProgrammeDrawerSection>

                {/* PG */}

                <ProgrammeDrawerSection
                  title="Postgraduate"
                  count="3 Programmes"
                >
                  <ProgrammeDrawerItem
                    title="MA Islamic Studies"
                    description="Advanced Islamic studies and research"
                    icon={BookOpen}
                    link="/ma-islamic-studies"
                    onNavigate={closeProgrammeDrawer}
                  />

                  <ProgrammeDrawerItem
                    title="MBA"
                    description="Management, leadership and business skills"
                    icon={GraduationCap}
                    link="/mba"
                    onNavigate={closeProgrammeDrawer}
                  />

                  <ProgrammeDrawerItem
                    title="MCA"
                    description="Computing, programming and software development"
                    icon={GraduationCap}
                    link="/mca"
                    onNavigate={closeProgrammeDrawer}
                  />
                </ProgrammeDrawerSection>

                {/* CERTIFICATE */}

                <ProgrammeDrawerSection
                  title="Professional Learning"
                  count="1 Programme"
                >
                  <ProgrammeDrawerItem
                    title="Mobile Application Development"
                    description="Practical skills for modern app development"
                    icon={Sparkles}
                    link="/mobile-application-development"
                    onNavigate={closeProgrammeDrawer}
                  />
                </ProgrammeDrawerSection>
              </div>

              {/* DRAWER FOOTER */}

              <div
                className="
                  shrink-0
                  border-t
                  border-slate-200
                  bg-white
                  p-4
                  sm:p-5
                "
              >
                <Link
                  to="/admission"
                  hash="how-to-apply"
                  onClick={closeProgrammeDrawer}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#8f1d1d]
                    px-4
                    py-3
                    text-[clamp(0.75rem,0.68rem+0.2vw,0.9rem)]
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(143,29,29,0.18)]
                    transition-all
                    duration-300
                  "
                >
                  Apply Now

                  <ArrowRight
                    className="
                      size-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span
                    className="
                      absolute
                      -bottom-1
                      left-1/2
                      h-[2px]
                      w-0
                      -translate-x-1/2
                      rounded-full
                      bg-[#d4af37]
                      transition-all
                      duration-300
                      group-hover:w-12
                    "
                  />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* BROCHURE MODAL */}
      {/* ========================================================= */}

      <AnimatePresence>
        {showBrochureForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[10000]
              flex
              items-center
              justify-center
              bg-[#0b1224]/75
              px-4
              py-5
              backdrop-blur-md
            "
            onClick={() => setShowBrochureForm(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              className="
                relative
                max-h-[92vh]
                w-full
                max-w-lg
                overflow-y-auto
                rounded-[1.5rem]
                border
                border-white/20
                bg-white
                shadow-[0_30px_80px_rgba(0,0,0,0.3)]
              "
              onClick={(event) => event.stopPropagation()}
            >
              {/* MODAL HEADER */}

              <div className="relative overflow-hidden bg-[#172554] px-5 py-6">
                <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-[#8f1d1d]/40 blur-2xl" />

                <div className="pointer-events-none absolute -bottom-8 -left-8 size-24 rounded-full bg-[#d4af37]/10 blur-2xl" />

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={() => setShowBrochureForm(false)}
                  aria-label="Close enquiry form"
                  className="
                    absolute
                    right-3
                    top-3
                    z-10
                    flex
                    size-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/10
                    text-white
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:bg-white/20
                  "
                >
                  <X className="size-4" />
                </button>

                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-[#d4af37]" />

                    <span
                      className="
                        text-[clamp(0.62rem,0.56rem+0.16vw,0.76rem)]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#d4af37]
                      "
                    >
                      Programme Brochure
                    </span>
                  </div>

                  <h2
                    className="
                      font-display
                      text-[clamp(1.35rem,1.15rem+0.6vw,1.7rem)]
                      font-bold
                      leading-tight
                      text-white
                    "
                  >
                    Get the Programme Brochure
                  </h2>

                  <p
                    className="
                      mt-1.5
                      max-w-sm
                      text-[clamp(0.72rem,0.66rem+0.18vw,0.86rem)]
                      leading-5
                      text-white/60
                    "
                  >
                    Share your details and our admission team will help you
                    with programmes, eligibility and admission information.
                  </p>
                </div>
              </div>

              {/* FORM */}

              <div className="p-5 sm:p-6" style={circularFont}>
                <EnquiryForm
                  language="en"
                  onSubmitted={() => setShowBrochureForm(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}

/* ========================================================= */
/* PROGRAMME DRAWER SECTION */
/* ========================================================= */

function ProgrammeDrawerSection({
  title,
  count,
  children,
}: {
  title: string;
  count: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-7" style={circularFont}>
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p
            className="
              text-[clamp(0.58rem,0.53rem+0.14vw,0.7rem)]
              font-bold
              uppercase
              tracking-[0.17em]
              text-[#d4af37]
            "
          >
            Programmes
          </p>

          <h3
            className="
              mt-0.5
              text-[clamp(1rem,0.9rem+0.3vw,1.2rem)]
              font-black
              text-[#111111]
            "
          >
            {title}
          </h3>
        </div>

        <span
          className="
            rounded-full
            bg-white
            px-2.5
            py-1.5
            text-[clamp(0.58rem,0.53rem+0.14vw,0.7rem)]
            font-bold
            text-[#111111]
            shadow-sm
          "
        >
          {count}
        </span>
      </div>

      <div className="space-y-2">{children}</div>
    </div>
  );
}

/* ========================================================= */
/* PROGRAMME DRAWER ITEM */
/* ========================================================= */

type ProgrammeLink =
  | "/ba-english"
  | "/ba-islamic-studies"
  | "/ba-public-policy"
  | "/ma-islamic-studies"
  | "/mba"
  | "/mca"
  | "/mobile-application-development";

function ProgrammeDrawerItem({
  title,
  description,
  icon: Icon,
  link,
  onNavigate,
}: {
  title: string;
  description: string;
  icon: typeof GraduationCap;
  link: ProgrammeLink;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={link}
      onClick={onNavigate}
      className="group block"
      style={circularFont}
    >
      <div
        className="
          relative
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          p-3
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:border-[#d4af37]
          hover:shadow-[0_10px_25px_rgba(23,37,84,0.10)]
        "
      >
        {/* HOVER LINE */}

        <div
          className="
            absolute
            left-0
            top-0
            h-full
            w-[3px]
            origin-top
            scale-y-0
            bg-gradient-to-b
            from-[#172554]
            via-[#8f1d1d]
            to-[#d4af37]
            transition-transform
            duration-300
            group-hover:scale-y-100
          "
        />

        {/* ICON */}

        <div
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-[#172554]
            text-[#d4af37]
            transition-all
            duration-300
            group-hover:bg-[#8f1d1d]
            group-hover:text-white
          "
        >
          <Icon className="size-4" />
        </div>

        {/* CONTENT */}

        <div className="min-w-0 flex-1">
          <h4
            className="
              text-[clamp(0.82rem,0.75rem+0.2vw,0.98rem)]
              font-black
              text-[#111111]
            "
          >
            {title}
          </h4>

          <p
            className="
              mt-0.5
              text-[clamp(0.62rem,0.57rem+0.16vw,0.76rem)]
              leading-4
              text-[#111111]/70
            "
          >
            {description}
          </p>
        </div>

        {/* ARROW */}

        <div
          className="
            flex
            size-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-slate-50
            text-[#8f1d1d]
            transition-all
            duration-300
            group-hover:bg-[#8f1d1d]
            group-hover:text-white
          "
        >
          <ArrowRight
            className="
              size-3.5
              transition-transform
              duration-300
              group-hover:translate-x-0.5
            "
          />
        </div>
      </div>
    </Link>
  );
}

/* ========================================================= */
/* MINI FEATURE */
/* ========================================================= */

function MiniFeature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof GraduationCap;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-2
        rounded-lg
        border
        border-[#172554]/7
        bg-white/70
        px-2
        py-2
        shadow-[0_3px_10px_rgba(23,37,84,0.035)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-[#d4af37]/30
        hover:shadow-[0_7px_16px_rgba(23,37,84,0.07)]
      "
      style={circularFont}
    >
      <div
        className="
          flex
          size-7
          shrink-0
          items-center
          justify-center
          rounded-md
          bg-[#172554]
          text-[#d4af37]
          transition-all
          duration-300
          group-hover:bg-[#8f1d1d]
          group-hover:text-white
        "
      >
        <Icon className="size-3.5" />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[clamp(0.62rem,0.56rem+0.16vw,0.76rem)]
            font-bold
            leading-none
            text-[#111111]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            text-[clamp(0.52rem,0.48rem+0.12vw,0.64rem)]
            font-medium
            leading-none
            text-[#111111]/70
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}