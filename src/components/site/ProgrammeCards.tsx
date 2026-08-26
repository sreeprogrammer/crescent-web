import { Button } from "@/components/ui/button";
import {
  certificationCourses,
  pgProgrammes,
  ugProgrammes,
} from "@/data/site";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Sparkles,
  UserCheck,
} from "lucide-react";

import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

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
  const isPG = type === "pg";
  const isCertification = type === "certification";

  const programmeRoute = getProgrammeRoute(programme);

  return (
    <Reveal delay={(index % 3) * 0.05}>
      <motion.article
        whileHover={{
          y: -5,
        }}
        transition={{
          duration: 0.28,
          ease: [0.16, 1, 0.3, 1],
        }}
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
          shadow-[0_5px_18px_rgba(23,37,84,0.055)]
          transition-all
          duration-300
          hover:border-[#d4af37]/55
          hover:shadow-[0_16px_36px_rgba(23,37,84,0.12)]
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
            via-[#8f1d1d]
            to-[#d4af37]
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
            bg-[#d4af37]/8
            blur-2xl
            transition-all
            duration-500
            group-hover:bg-[#8f1d1d]/10
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

        <div className="relative flex items-center justify-between">
          {/* ICON */}
          <div
            className="
              flex
              size-9
              items-center
              justify-center
              rounded-[0.7rem]
              bg-[#172554]
              text-[#d4af37]
              shadow-[0_5px_12px_rgba(23,37,84,0.13)]
              transition-all
              duration-300
              group-hover:bg-[#8f1d1d]
              group-hover:text-white
              group-hover:shadow-[0_7px_15px_rgba(143,29,29,0.18)]
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
              border
              border-[#d4af37]/35
              bg-[#f7f4ee]
              px-2
              py-1
              text-[7px]
              font-bold
              uppercase
              tracking-[0.11em]
              text-[#8f1d1d]
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
              font-display
              text-[15px]
              font-bold
              leading-tight
              tracking-[-0.01em]
              text-[#172554]
              transition-colors
              duration-300
              group-hover:text-[#8f1d1d]
            "
          >
            {programme.name}
          </h4>

          <p
            className="
              mt-1
              line-clamp-1
              text-[9px]
              font-medium
              leading-4
              text-[#8f1d1d]/80
            "
          >
            {programme.full}
          </p>
        </div>

        {/* ================================================= */}
        {/* DETAILS */}
        {/* ================================================= */}

        <div className="relative mt-3 grid grid-cols-2 gap-1.5">
          {/* DURATION */}

          <div
            className="
              rounded-[0.7rem]
              border
              border-[#172554]/6
              bg-[#172554]/[0.045]
              px-2
              py-2
              transition-all
              duration-300
              group-hover:border-[#172554]/10
            "
          >
            <div className="flex items-center gap-1 text-[#172554]">
              <Clock3 className="size-3" />

              <span className="text-[7px] font-bold uppercase tracking-wide">
                Duration
              </span>
            </div>

            <p className="mt-1 line-clamp-1 text-[9px] font-bold text-[#172554]">
              {programme.duration}
            </p>
          </div>

          {/* ELIGIBILITY */}

          <div
            className="
              rounded-[0.7rem]
              border
              border-[#d4af37]/15
              bg-[#d4af37]/[0.07]
              px-2
              py-2
              transition-all
              duration-300
              group-hover:border-[#d4af37]/30
            "
          >
            <div className="flex items-center gap-1 text-[#8f1d1d]">
              <UserCheck className="size-3" />

              <span className="text-[7px] font-bold uppercase tracking-wide">
                Eligibility
              </span>
            </div>

            <p className="mt-1 line-clamp-1 text-[9px] font-bold text-[#172554]">
              {programme.eligibility}
            </p>
          </div>
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
              h-8
              flex-1
              rounded-full
              border-[#172554]/15
              bg-white
              px-2
              text-[9px]
              font-semibold
              text-[#172554]
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
              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>

          {/* APPLY */}

          <Button
            size="pill"
            className="
              h-8
              flex-1
              rounded-full
              border-0
              bg-[#8f1d1d]
              px-2
              text-[9px]
              font-bold
              text-white
              shadow-[0_5px_12px_rgba(143,29,29,0.14)]
              transition-all
              duration-300
              hover:bg-[#172554]
              hover:shadow-[0_6px_15px_rgba(23,37,84,0.16)]
            "
            asChild
          >
            <Link
              to="/admission"
              hash="how-to-apply"
            >
              Apply Now
              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* ================================================= */}
        {/* HOVER GOLD EDGE */}
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
            bg-[#d4af37]
            transition-all
            duration-500
            group-hover:w-16
          "
        />
      </motion.article>
    </Reveal>
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
        border-[#172554]/8
        pt-3
        first:border-t-0
      "
    >
      {/* ================================================= */}
      {/* SECTION HEADER */}
      {/* ================================================= */}

      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          {/* EYEBROW */}

          <div className="mb-1 flex items-center gap-2">
            <span className="h-[2px] w-7 rounded-full bg-[#8f1d1d]" />

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#d4af37]
              "
            >
              {type === "ug"
                ? "UG Programmes"
                : type === "pg"
                  ? "PG Programmes"
                  : "Professional"}
            </span>
          </div>

          {/* TITLE */}

          <h3
            className="
              font-display
              text-[1.15rem]
              font-bold
              leading-tight
              tracking-tight
              text-[#172554]
              sm:text-[1.35rem]
            "
          >
            {title}
          </h3>

          {/* SUBTITLE */}

          <p className="mt-0.5 max-w-2xl text-[8px] leading-4 text-slate-500 sm:text-[9px]">
            {subtitle}
          </p>
        </div>

        {/* COUNT */}

        <div
          className="
            hidden
            shrink-0
            items-center
            gap-1
            rounded-full
            border
            border-[#d4af37]/25
            bg-[#d4af37]/[0.07]
            px-2
            py-1
            text-[7px]
            font-bold
            text-[#8f1d1d]
            sm:flex
          "
        >
          <BookOpen className="size-2.5" />

          {items.length} Programme
          {items.length > 1 ? "s" : ""}
        </div>
      </div>

      {/* ================================================= */}
      {/* CARDS */}
      {/* ================================================= */}

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
        {/* ================================================= */}
        {/* UG */}
        {/* ================================================= */}

        <ProgrammeSection
          id="ug"
          title="Undergraduate Programmes"
          subtitle="Flexible degree pathways for learners beginning their higher education journey."
          type="ug"
          items={ugProgrammes}
        />

        {/* ================================================= */}
        {/* PG */}
        {/* ================================================= */}

        <ProgrammeSection
          id="pg"
          title="Postgraduate Programmes"
          subtitle="Advanced programmes for career growth, academic development and professional leadership."
          type="pg"
          items={pgProgrammes}
        />

        {/* ================================================= */}
        {/* CERTIFICATION */}
        {/* ================================================= */}

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
          via-[#243b6b]
          to-[#8f1d1d]
          px-4
          py-3
          shadow-[0_10px_26px_rgba(23,37,84,0.12)]
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
            bg-[#d4af37]/12
            blur-3xl
          "
        />

        {/* MAROON GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            -bottom-12
            -left-12
            size-28
            rounded-full
            bg-[#8f1d1d]/20
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

          <div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="size-3 text-[#d4af37]" />

              <p
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#d6b66a]
                "
              >
                Admissions 2026–2027
              </p>
            </div>

            <h3 className="mt-0.5 text-[14px] font-bold text-white sm:text-base">
              Ready to start your next chapter?
            </h3>

            <p className="mt-0.5 text-[8px] text-white/60">
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
              bg-[#d4af37]
              px-4
              text-[9px]
              font-bold
              text-[#172554]
              shadow-[0_7px_18px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#e2c45a]
            "
            asChild
          >
            <Link
              to="/admission"
              hash="how-to-apply"
            >
              Apply Now
              <ArrowRight className="size-3" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}