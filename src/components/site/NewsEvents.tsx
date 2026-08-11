
import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import convocation from "@/assets/convocation.jpg";
import distance from "@/assets/distance-learning.jpg";
import events from "@/assets/events.jpg";
import jobFair from "@/assets/job-fair.jpg";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "./Section";

const items = [
  {
    title: "Annual Convocation Ceremony",
    date: "12 September 2026",
    image: convocation,
    body: "Graduating distance learners receive their degrees at the main campus auditorium.",
    featured: true,
    link: "/events/convocation",
  },
  {
    title: "Placement Job Fair",
    date: "28 August 2026",
    image: jobFair,
    body: "Over 40 recruiters meet final-year and alumni candidates across IT, finance and analytics.",
    link: "/events/job-fair",
  },
  {
    title: "Admission Announcement",
    date: "05 August 2026",
    image: distance,
    body: "Applications for the 2026 UG, PG and certification intake are now open online.",
    link: "/events/admission",
  },
  {
    title: "Academic Seminar Series",
    date: "22 July 2026",
    image: events,
    body: "Faculty-led sessions on research methodology and contemporary policy studies.",
    link: "/events/seminar",
  },
  {
    title: "Student Orientation",
    date: "10 July 2026",
    image: campus1,
    body: "A guided walkthrough of the LMS, assessments and mentoring for new enrolments.",
    link: "/events/orientation",
  },
  {
    title: "Skill Development Workshop",
    date: "30 June 2026",
    image: campus2,
    body: "Hands-on workshop on communication, interviews and workplace readiness.",
    link: "/events/skill-workshop",
  },
];

export function NewsEvents() {
  const [index, setIndex] = useState(0);

  const featuredEvent =
    items.find((item) => item.featured) ?? items[0];

  const normalEvents = items.filter(
    (item) => item !== featuredEvent,
  );

  const perView = 3;

  const pages = Math.ceil(normalEvents.length / perView);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % pages);
  }, [pages]);

  const prev = () => {
    setIndex((i) => (i - 1 + pages) % pages);
  };

  useEffect(() => {
    const id = setInterval(next, 5000);

    return () => clearInterval(id);
  }, [next]);

  const visibleEvents = normalEvents.slice(
    index * perView,
    index * perView + perView,
  );

  return (
    <Section
      id="news-events"
      className="!py-10 bg-[#f8f8f7]"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mb-6 text-center">
          <SectionHeading
            eyebrow="NEWS & EVENTS"
            title="What's happening at CDOE"
            description="Stay updated with campus events, admissions, placements and student activities."
          />
        </div>

        {/* =========================
            FEATURED EVENT
        ========================== */}
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="
            group
            relative
            mb-5
            grid
            overflow-hidden
            rounded-2xl
            border
            border-[#d9dee7]
            bg-white
            shadow-[0_6px_24px_rgba(15,23,42,0.06)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_12px_32px_rgba(15,23,42,0.10)]
            lg:grid-cols-[1.25fr_1fr]
          "
        >
          {/* Featured Image */}
          <div className="relative h-[220px] overflow-hidden lg:h-[230px]">
            <img
              src={featuredEvent.image}
              alt={featuredEvent.title}
              loading="lazy"
              width={1200}
              height={800}
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#172554]/75
                via-[#172554]/25
                to-transparent
              "
            />

            {/* Featured Badge */}
            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                bg-[#d4af37]
                px-3
                py-1
                text-[9px]
                font-bold
                tracking-[0.15em]
                text-[#172554]
              "
            >
              FEATURED EVENT
            </div>
          </div>

          {/* Featured Content */}
          <div className="flex flex-col justify-center px-5 py-5 lg:px-7">

            {/* Date */}
            <div
              className="
                flex
                items-center
                gap-2
                text-[10px]
                font-semibold
                tracking-[0.08em]
                text-[#7f1d1d]
              "
            >
              <CalendarDays className="size-3.5" />
              {featuredEvent.date}
            </div>

            {/* Gold line */}
            <div className="mt-2 h-[3px] w-9 rounded-full bg-[#d4af37]" />

            {/* Title */}
            <h3
              className="
                mt-3
                text-xl
                font-bold
                leading-tight
                text-[#172554]
                transition-colors
                duration-300
                group-hover:text-[#7f1d1d]
                lg:text-2xl
              "
            >
              {featuredEvent.title}
            </h3>

            {/* Description */}
            <p
              className="
                mt-2
                max-w-xl
                text-[12px]
                leading-[1.55]
                text-[#4b4b4b]
              "
            >
              {featuredEvent.body}
            </p>

            {/* View Event */}
            <div className="mt-4">
              <Link
                to={featuredEvent.link}
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-full
                  bg-[#172554]
                  px-4
                  py-2
                  text-[9px]
                  font-semibold
                  tracking-[0.08em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#7f1d1d]
                "
              >
                VIEW EVENT
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Red Bottom Accent */}
          <span
            className="
              absolute
              bottom-0
              left-0
              h-[3px]
              w-full
              origin-left
              scale-x-0
              bg-[#7f1d1d]
              transition-transform
              duration-300
              group-hover:scale-x-100
            "
          />
        </motion.article>

        {/* =========================
            SECOND EVENT GRID
        ========================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {visibleEvents.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.06,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#d9dee7]
                  bg-white
                  shadow-[0_5px_20px_rgba(15,23,42,0.05)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_28px_rgba(15,23,42,0.09)]
                "
              >
                {/* Image */}
                <div className="relative h-[135px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#172554]/65
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Date */}
                  <div
                    className="
                      absolute
                      bottom-3
                      left-3
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-white/95
                      px-2.5
                      py-1
                      text-[9px]
                      font-semibold
                      text-[#172554]
                    "
                  >
                    <CalendarDays
                      className="size-3 text-[#7f1d1d]"
                    />
                    {item.date}
                  </div>

                  {/* Arrow */}
                  <span
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      size-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#172554]/85
                      text-white
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>

                {/* Content */}
                <div className="px-4 py-3.5">

                  {/* Gold Accent */}
                  <div
                    className="
                      mb-2
                      h-[3px]
                      w-6
                      rounded-full
                      bg-[#d4af37]
                      transition-all
                      duration-300
                      group-hover:w-10
                    "
                  />

                  {/* Title */}
                  <h3
                    className="
                      text-[14px]
                      font-bold
                      leading-snug
                      text-[#172554]
                      transition-colors
                      duration-300
                      group-hover:text-[#7f1d1d]
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Body */}
                  <p
                    className="
                      mt-1.5
                      text-[11px]
                      leading-[1.45]
                      text-[#4b4b4b]
                    "
                  >
                    {item.body}
                  </p>

                  {/* View Event */}
                  <Link
                    to={item.link}
                    className="
                      mt-3
                      inline-flex
                      items-center
                      gap-1
                      text-[9px]
                      font-bold
                      tracking-[0.08em]
                      text-[#7f1d1d]
                      transition-colors
                      hover:text-[#172554]
                    "
                  >
                    VIEW EVENT
                    <ArrowUpRight className="size-3" />
                  </Link>
                </div>

                {/* Red Bottom Accent */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-full
                    origin-left
                    scale-x-0
                    bg-[#7f1d1d]
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* =========================
            CONTROLS
        ========================== */}
        <div className="mt-5 flex items-center justify-center gap-3">

          {/* Previous */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous events"
            className="
              flex
              size-8
              items-center
              justify-center
              rounded-full
              border
              border-[#172554]/20
              bg-white
              text-[#172554]
              transition-all
              hover:bg-[#172554]
              hover:text-white
            "
          >
            <ChevronLeft className="size-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to event group ${i + 1}`}
                aria-current={i === index}
                className={
                  i === index
                    ? "h-1.5 w-7 rounded-full bg-[#7f1d1d] transition-all"
                    : "size-1.5 rounded-full bg-[#b8b8b8] transition-all"
                }
              />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next events"
            className="
              flex
              size-8
              items-center
              justify-center
              rounded-full
              border
              border-[#172554]/20
              bg-white
              text-[#172554]
              transition-all
              hover:bg-[#172554]
              hover:text-white
            "
          >
            <ChevronRight className="size-4" />
          </button>

        </div>
      </div>
    </Section>
  );
}

