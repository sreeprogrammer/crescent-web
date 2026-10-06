import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  certificationCourses,
  pgProgrammes,
  ugProgrammes,
} from "@/data/site";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Download,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

/* =========================================================
   PROGRAMME PHOTO
========================================================= */

import programmePhoto from "@/assets/campus-1.jpg";

/* =========================================================
   PROGRAMME BROCHURE
========================================================= */

import programmeBrochure from "@/assets/programme-brochure.pdf";

/* =========================================================
   FONT
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   PREMIUM COLOURS
========================================================= */

const NAVY = "#172554";
const DARK_NAVY = "#0F172A";
const BLUE = "#1E3A8A";
const RED = "#8F1D1D";
const YELLOW = "#D4AF37";
const BLACK = "#111111";

type Programme = {
  name: string;
  full: string;
  duration: string;
  eligibility: string;
};

type ProgrammeCardProps = {
  programme: Programme;
  index: number;
  type: "ug" | "pg" | "certification";
};

/* =========================================================
   PROGRAMME ROUTES
========================================================= */

function getProgrammeRoute(programme: Programme) {
  const name = programme.name.trim().toLowerCase();

  if (name === "ba islamic studies") {
    return "/ba-islamic-studies";
  }

  if (name === "mca") {
    return "/mca";
  }

  if (name === "mba") {
    return "/mba";
  }

  return "/programmes";
}

/* =========================================================
   PROGRAMME CARD
========================================================= */

function ProgrammeCard({
  programme,
  index,
  type,
}: ProgrammeCardProps) {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const [brochureUnlocked, setBrochureUnlocked] = useState(false);

  const isPG = type === "pg";
  const isCertification = type === "certification";

  const programmeRoute = getProgrammeRoute(programme);

  const handleBrochureSubmit = () => {
    setBrochureUnlocked(true);
  };

  return (
    <>
      <Reveal delay={(index % 3) * 0.05}>
        <motion.article
          whileHover={{
            y: -5,
          }}
          transition={{
            duration: 0.28,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={circularFont}
          className="
            group
            relative
            flex
            min-h-[214px]
            flex-col
            overflow-hidden
            rounded-[1.2rem]
            border
            border-[#172554]/10
            bg-white
            p-3.5
            shadow-[0_5px_18px_rgba(15,23,42,0.055)]
            transition-all
            duration-300
            hover:border-[#D4AF37]/55
            hover:shadow-[0_16px_36px_rgba(15,23,42,0.10)]
          "
        >
          {/* ================================================= */}
          {/* PREMIUM TOP LINE */}
          {/* ================================================= */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[3px]
              bg-gradient-to-r
              from-[#172554]
              via-[#8F1D1D]
              to-[#D4AF37]
            "
          />

          {/* ================================================= */}
          {/* SOFT DECORATION */}
          {/* ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              size-28
              rounded-full
              bg-[#D4AF37]/10
              blur-2xl
              transition-all
              duration-500
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-10
              -left-10
              size-20
              rounded-full
              bg-[#172554]/[0.025]
              blur-xl
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />

          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <div className="relative flex items-center justify-between gap-2">
            {/* ICON */}

            <div
              className="
                flex
                size-10
                shrink-0
                items-center
                justify-center
                rounded-[0.7rem]
                bg-[#172554]
                text-[#D4AF37]
                shadow-[0_5px_12px_rgba(23,37,84,0.15)]
                transition-all
                duration-300
              "
            >
              {isCertification ? (
                <Sparkles className="size-4" />
              ) : (
                <GraduationCap className="size-4" />
              )}
            </div>

            {/* PROGRAMME TYPE */}

            <span
              className="
                rounded-full
                bg-[#F4F1E8]
                px-2.5
                py-1.5
                text-[clamp(0.55rem,0.5rem+0.12vw,0.7rem)]
                font-bold
                uppercase
                tracking-[0.11em]
                text-[#111111]
              "
            >
              {isCertification
                ? "Certification"
                : isPG
                  ? "Postgraduate"
                  : "Undergraduate"}
            </span>
          </div>

          {/* ================================================= */}
          {/* TITLE */}
          {/* ================================================= */}

          <div className="relative mt-3">
            <h4
              className="
                text-[clamp(1rem,0.9rem+0.35vw,1.15rem)]
                font-bold
                leading-tight
                tracking-[-0.01em]
                text-[#111111]
              "
            >
              {programme.name}
            </h4>

            <p
              className="
                mt-1
                line-clamp-1
                text-[clamp(0.68rem,0.62rem+0.2vw,0.8rem)]
                font-medium
                leading-5
                text-[#111111]
              "
            >
              {programme.full}
            </p>
          </div>

          {/* ================================================= */}
          {/* DETAILS + PHOTO */}
          {/* ================================================= */}

          <div className="relative mt-3 grid grid-cols-[1fr_62px] gap-2.5">
            {/* LEFT SIDE */}

            <div className="flex flex-col gap-1.5">
              {/* DURATION */}

              <div
                className="
                  rounded-[0.7rem]
                  border
                  border-[#172554]/10
                  bg-[#172554]/[0.045]
                  px-2.5
                  py-2
                  transition-all
                  duration-300
                  group-hover:border-[#172554]/15
                "
              >
                <div className="flex items-center gap-1.5 text-[#172554]">
                  <Clock3 className="size-3.5 shrink-0" />

                  <span
                    className="
                      text-[clamp(0.6rem,0.55rem+0.15vw,0.72rem)]
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#111111]
                    "
                  >
                    Duration
                  </span>
                </div>

                <p
                  className="
                    mt-1
                    line-clamp-1
                    text-[clamp(0.68rem,0.62rem+0.2vw,0.8rem)]
                    font-bold
                    text-[#111111]
                  "
                >
                  {programme.duration}
                </p>
              </div>

              {/* DOWNLOAD BROCHURE */}

              {!brochureUnlocked ? (
                <button
                  type="button"
                  onClick={() => setShowBrochureForm(true)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[0.7rem]
                    border
                    border-[#D4AF37]/35
                    bg-[#fffaf0]
                    px-2
                    py-2
                    text-[clamp(0.6rem,0.55rem+0.15vw,0.72rem)]
                    font-bold
                    text-[#111111]
                    transition-all
                    duration-300
                    hover:border-[#D4AF37]
                    hover:bg-[#D4AF37]/10
                  "
                >
                  <Download className="size-3.5 shrink-0 text-[#8F1D1D]" />

                  <span className="truncate">
                    Download Brochure
                  </span>
                </button>
              ) : (
                <a
                  href={programmeBrochure}
                  download
                  onClick={() => setShowBrochureForm(false)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-1.5
                    rounded-[0.7rem]
                    border
                    border-[#D4AF37]
                    bg-[#D4AF37]
                    px-2
                    py-2
                    text-[clamp(0.6rem,0.55rem+0.15vw,0.72rem)]
                    font-bold
                    text-[#111111]
                    transition-all
                    duration-300
                    hover:bg-[#E2C45A]
                  "
                >
                  <Download className="size-3.5 shrink-0" />

                  <span className="truncate">
                    Download Brochure
                  </span>
                </a>
              )}
            </div>

            {/* ================================================= */}
            {/* RIGHT SIDE SQUARE PHOTO */}
            {/* ================================================= */}

            <div
              className="
                relative
                aspect-square
                w-[62px]
                overflow-hidden
                rounded-[0.7rem]
                border
                border-[#D4AF37]/25
                bg-[#F4F1E8]
              "
            >
              <img
                src={programmePhoto}
                alt="Programme"
                loading="lazy"
                width={300}
                height={300}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* SUBTLE GOLD OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#172554]/20
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>

          {/* ================================================= */}
          {/* SMALL PREMIUM INDICATOR */}
          {/* ================================================= */}

          <div className="mt-2.5 flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 shrink-0 text-[#8F1D1D]" />

            <span
              className="
                text-[clamp(0.62rem,0.57rem+0.15vw,0.75rem)]
                font-semibold
                text-black/55
              "
            >
              Flexible distance learning
            </span>
          </div>

          {/* ================================================= */}
          {/* BUTTONS */}
          {/* ================================================= */}

          <div className="relative mt-auto flex gap-1.5 pt-3">
            {/* EXPLORE */}

            <Button
              variant="outline"
              size="pill"
              className="
                h-9
                flex-1
                rounded-full
                border-[#172554]/20
                bg-white
                px-2.5
                text-[clamp(0.68rem,0.62rem+0.18vw,0.82rem)]
                font-semibold
                text-[#111111]
                shadow-none
                transition-all
                duration-300
                hover:border-[#172554]
                hover:bg-[#172554]
                hover:text-white
              "
              asChild
            >
              <Link to={programmeRoute}>
                Explore

                <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>

            {/* APPLY */}

            <Button
              size="pill"
              className="
                h-9
                flex-1
                rounded-full
                border-0
                bg-[#8F1D1D]
                px-2.5
                text-[clamp(0.68rem,0.62rem+0.18vw,0.82rem)]
                font-bold
                text-white
                shadow-[0_5px_12px_rgba(143,29,29,0.15)]
                transition-all
                duration-300
                hover:bg-[#172554]
                hover:shadow-[0_6px_15px_rgba(23,37,84,0.18)]
              "
              asChild
            >
              <Link
                to="/admission"
                hash="how-to-apply"
              >
                Apply Now

                <ArrowRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* ================================================= */}
          {/* ONLY GOLD HOVER LINE */}
          {/* ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              h-[2px]
              w-0
              -translate-x-1/2
              rounded-full
              bg-[#D4AF37]
              transition-all
              duration-500
              group-hover:w-16
            "
          />
        </motion.article>
      </Reveal>

      {/* =======================================================
          BROCHURE ENQUIRY MODAL
      ======================================================= */}

      <AnimatePresence>
        {showBrochureForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#0B1224]/80
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
              {/* ================================================= */}
              {/* MODAL HEADER */}
              {/* ================================================= */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#172554]
                  px-5
                  py-5
                "
              >
                {/* GOLD GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    size-28
                    rounded-full
                    bg-[#D4AF37]/15
                    blur-2xl
                  "
                />

                {/* RED GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-8
                    -left-8
                    size-24
                    rounded-full
                    bg-[#8F1D1D]/25
                    blur-2xl
                  "
                />

                {/* CLOSE */}

                <button
                  type="button"
                  onClick={() => setShowBrochureForm(false)}
                  aria-label="Close enquiry form"
                  className="
                    absolute
                    right-3
                    top-3
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
                    hover:bg-white/20
                  "
                >
                  <X className="size-4" />
                </button>

                <div className="relative">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="h-1 w-6 rounded-full bg-[#D4AF37]" />

                    <span
                      className="
                        text-[clamp(0.6rem,0.55rem+0.18vw,0.75rem)]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#D4AF37]
                      "
                    >
                      Programme Brochure
                    </span>
                  </div>

                  <h2
                    className="
                      text-[clamp(1.3rem,1.1rem+0.7vw,1.8rem)]
                      font-bold
                      leading-tight
                      text-white
                    "
                    style={circularFont}
                  >
                    Get the Programme Brochure
                  </h2>

                  <p
                    className="
                      mt-1
                      max-w-sm
                      text-[clamp(0.75rem,0.68rem+0.2vw,0.9rem)]
                      leading-5
                      text-white/65
                    "
                    style={circularFont}
                  >
                    Fill in your details to unlock the programme brochure.
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* ENQUIRY FORM */}
              {/* ================================================= */}

              {!brochureUnlocked ? (
                <div className="p-5">
                  <EnquiryForm
                    language="en"
                    onSubmitted={handleBrochureSubmit}
                  />
                </div>
              ) : (
                <div className="p-5">
                  <div
                    className="
                      rounded-[1rem]
                      border
                      border-[#D4AF37]/30
                      bg-[#fffaf0]
                      p-5
                      text-center
                    "
                  >
                    <div
                      className="
                        mx-auto
                        flex
                        size-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#172554]
                        text-[#D4AF37]
                      "
                    >
                      <CheckCircle2 className="size-6" />
                    </div>

                    <h3
                      className="
                        mt-3
                        text-[clamp(1rem,0.9rem+0.3vw,1.25rem)]
                        font-bold
                        text-[#111111]
                      "
                      style={circularFont}
                    >
                      Brochure Unlocked
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[clamp(0.72rem,0.65rem+0.2vw,0.85rem)]
                        leading-5
                        text-black/60
                      "
                      style={circularFont}
                    >
                      Your details have been submitted successfully.
                    </p>

                    <a
                      href={programmeBrochure}
                      download
                      onClick={() => setShowBrochureForm(false)}
                      className="
                        mt-4
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        bg-[#8F1D1D]
                        px-5
                        py-3
                        text-[clamp(0.7rem,0.65rem+0.18vw,0.85rem)]
                        font-bold
                        text-white
                        shadow-[0_7px_18px_rgba(143,29,29,0.16)]
                        transition-all
                        duration-300
                        hover:bg-[#172554]
                      "
                      style={circularFont}
                    >
                      <Download className="size-4" />

                      Download PDF
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   PROGRAMME SECTION
========================================================= */

function ProgrammeSection({
  id,
  title,
  subtitle,
  items,
  type,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: Programme[];
  type: "ug" | "pg" | "certification";
}) {
  return (
    <div
      id={id}
      className="
        scroll-mt-20
        border-t
        border-[#172554]/10
        pt-3
        first:border-t-0
      "
    >
      {/* ================================================= */}
      {/* SECTION HEADER */}
      {/* ================================================= */}

      <div className="mb-3 flex items-end justify-between gap-3">
        <div className="min-w-0">
          {/* EYEBROW */}

          <div className="mb-1 flex items-center gap-2">
            <span className="h-[2px] w-7 rounded-full bg-[#172554]" />

            <span
              className="
                text-[clamp(0.6rem,0.55rem+0.15vw,0.75rem)]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#8F1D1D]
              "
            >
              {type === "ug"
                ? "UG Programmes"
                : type === "pg"
                  ? "PG Programmes"
                  : "Professional"}
            </span>

            <span className="size-1.5 shrink-0 rounded-full bg-[#D4AF37]" />
          </div>

          {/* TITLE */}

          <h3
            className="
              text-[clamp(1.25rem,1.05rem+0.7vw,1.65rem)]
              font-bold
              leading-tight
              tracking-tight
              text-[#111111]
            "
            style={circularFont}
          >
            {title}
          </h3>

          {/* SUBTITLE */}

          <p
            className="
              mt-1
              max-w-2xl
              text-[clamp(0.7rem,0.64rem+0.2vw,0.85rem)]
              leading-5
              text-black/55
            "
            style={circularFont}
          >
            {subtitle}
          </p>
        </div>

        {/* COUNT */}

        <div
          className="
            hidden
            shrink-0
            items-center
            gap-1.5
            rounded-full
            bg-[#F4F1E8]
            px-2.5
            py-1.5
            text-[clamp(0.6rem,0.55rem+0.15vw,0.72rem)]
            font-bold
            text-[#111111]
            sm:flex
          "
        >
          <BookOpen className="size-3 shrink-0 text-[#8F1D1D]" />

          {items.length} Programme
          {items.length > 1 ? "s" : ""}
        </div>
      </div>

      {/* ================================================= */}
      {/* CARDS */}
      {/*================================================= */}

      <div className="grid gap-2.5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((programme, index) => (
          <ProgrammeCard
            key={programme.name}
            programme={programme}
            index={index}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PROGRAMME CARDS
========================================================= */

export function ProgrammeCards({
  withHeading = true,
}: {
  withHeading?: boolean;
}) {
  return (
    <Section
      id="programmes"
      className="
        bg-white
        !py-0
      "
      style={circularFont}
    >
      {/* ================================================= */}
      {/* MAIN HEADING */}
      {/* ================================================= */}

      {withHeading && (
        <div className="pb-3">
          <SectionHeading
            eyebrow="Programmes Offered"
            title="Build your future with the right programme"
            description="Explore focused undergraduate, postgraduate and professional certification programmes designed for flexible learning."
          />
        </div>
      )}

      {/* ================================================= */}
      {/* PROGRAMME SECTIONS */}
      {/* ================================================= */}

      <div
        className={
          withHeading
            ? "mt-1.5 space-y-2.5"
            : "space-y-2.5"
        }
      >
        {/* UG */}

        <ProgrammeSection
          id="ug"
          title="Undergraduate Programmes"
          subtitle="Flexible degree pathways for learners beginning their higher education journey."
          type="ug"
          items={ugProgrammes}
        />

        {/* PG */}

        <ProgrammeSection
          id="pg"
          title="Postgraduate Programmes"
          subtitle="Advanced programmes for career growth, academic development and professional leadership."
          type="pg"
          items={pgProgrammes}
        />

        {/* CERTIFICATION */}

        <ProgrammeSection
          id="certification"
          title="Certified Programme"
          subtitle="Short-term, career-focused learning designed to build practical digital skills."
          type="certification"
          items={certificationCourses}
        />
      </div>

      {/* ================================================= */}
      {/* PREMIUM BOTTOM CTA */}
      {/* ================================================= */}

      <div
        className="
          relative
          mt-3
          overflow-hidden
          rounded-[1.15rem]
          bg-gradient-to-r
          from-[#172554]
          via-[#1E3A8A]
          to-[#8F1D1D]
          px-4
          py-3
          shadow-[0_10px_26px_rgba(23,37,84,0.15)]
          sm:px-5
        "
      >
        {/* GOLD GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -right-14
            -top-14
            size-32
            rounded-full
            bg-[#D4AF37]/15
            blur-3xl
          "
        />

        {/* RED GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-12
            size-28
            rounded-full
            bg-[#8F1D1D]/25
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            gap-2
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* CTA CONTENT */}

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3.5 shrink-0 text-[#D4AF37]" />

              <p
                className="
                  text-[clamp(0.6rem,0.55rem+0.15vw,0.75rem)]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D4AF37]
                "
              >
                Admissions 2026–2027
              </p>
            </div>

            <h3
              className="
                mt-0.5
                text-[clamp(0.95rem,0.8rem+0.45vw,1.2rem)]
                font-bold
                leading-tight
                text-white
              "
            >
              Ready to start your next chapter?
            </h3>

            <p
              className="
                mt-0.5
                text-[clamp(0.65rem,0.6rem+0.18vw,0.8rem)]
                leading-5
                text-white/65
              "
            >
              Apply online and begin your learning journey with CDOE.
            </p>
          </div>

          {/* CTA BUTTON */}

          <Button
            size="pill-lg"
            className="
              shrink-0
              rounded-full
              border-0
              bg-[#D4AF37]
              px-4
              py-2.5
              text-[clamp(0.68rem,0.62rem+0.18vw,0.82rem)]
              font-bold
              text-[#111111]
              shadow-[0_7px_18px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#E2C45A]
            "
            asChild
          >
            <Link
              to="/admission"
              hash="how-to-apply"
            >
              Apply Now

              <ArrowRight className="size-3.5 shrink-0" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}