import {
  CheckCircle2,
  CreditCard,
  FileCheck2,
  FileUp,
  GraduationCap,
  Laptop2,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

import { admissionSteps } from "@/data/site";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const stepIcons = [
  Send,
  FileUp,
  FileCheck2,
  CreditCard,
  GraduationCap,
  Laptop2,
];

export function AdmissionTimeline() {
  return (
    <Section
      id="how-to-apply"
      className="relative overflow-hidden !py-5 sm:!py-7"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 size-52 rounded-full bg-[#7f1d1d]/5 blur-3xl" />

        <div className="absolute -right-24 bottom-5 size-56 rounded-full bg-[#172554]/7 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-3 sm:px-5">

        {/* =================================================
            HEADING
        ================================================== */}

        <Reveal>
          <div className="mx-auto mb-5 max-w-3xl text-center">

            {/* ADMISSION PROCESS PILL */}

            <div className="mb-2 flex items-center justify-center">
              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#8f1d1d]
                  px-6
                  py-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-white
                  shadow-[0_8px_20px_rgba(143,29,29,0.15)]
                  sm:px-7
                  sm:py-2.5
                  sm:text-[11px]
                "
              >
                ADMISSION PROCESS
              </span>
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                text-2xl
                font-extrabold
                tracking-tight
                text-[#172554]
                sm:text-3xl
                lg:text-[36px]
              "
            >
              Your journey starts{" "}
              <span className="text-[#8f1d1d]">
                here.
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-1
                max-w-xl
                text-xs
                leading-relaxed
                text-slate-500
                sm:text-sm
              "
            >
              Six simple steps from application to your first lesson —
              completely online.
            </p>

          </div>
        </Reveal>

        {/* =================================================
            TIMELINE
        ================================================== */}

        <div className="relative">

          {/* DESKTOP LINE */}

          <div className="absolute left-[8%] right-[8%] top-[39px] hidden lg:block">

            <div className="h-[2px] bg-[#d4af37]/25" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
              className="
                absolute
                inset-0
                origin-left
                bg-gradient-to-r
                from-[#7f1d1d]
                via-[#d4af37]
                to-[#172554]
              "
            />

          </div>

          {/* =================================================
              STEP CARDS
          ================================================== */}

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-2">

            {admissionSteps.map((step, index) => {
              const Icon = stepIcons[index] ?? CheckCircle2;

              return (
                <li key={step.step}>

                  <Reveal delay={index * 0.05}>

                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="
                        group
                        relative
                        h-full
                        overflow-hidden
                        rounded-[1.15rem]
                        border
                        border-slate-200/70
                        bg-white/65
                        px-3
                        py-3
                        shadow-[0_6px_20px_rgba(23,37,84,0.06)]
                        backdrop-blur-lg
                        transition-all
                        duration-300
                        hover:border-[#d4af37]/60
                        hover:shadow-[0_12px_30px_rgba(23,37,84,0.12)]
                      "
                    >

                      {/* TOP GRADIENT */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          top-0
                          h-[2px]
                          bg-gradient-to-r
                          from-[#7f1d1d]
                          via-[#d4af37]
                          to-[#172554]
                        "
                      />

                      {/* NUMBER BACKGROUND */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          right-2
                          top-1
                          text-5xl
                          font-black
                          leading-none
                          text-[#172554]/[0.035]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* ICON + STEP */}

                      <div
                        className="
                          relative
                          z-10
                          mb-2.5
                          flex
                          items-center
                          justify-between
                        "
                      >

                        <div
                          className="
                            flex
                            size-9
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[#d4af37]/40
                            bg-[#172554]
                            text-white
                            shadow-[0_5px_12px_rgba(23,37,84,0.16)]
                            transition-all
                            duration-300
                            group-hover:bg-[#7f1d1d]
                            group-hover:scale-105
                          "
                        >
                          <Icon className="size-4" />
                        </div>

                        <span
                          className="
                            rounded-full
                            bg-[#7f1d1d]/5
                            px-2
                            py-0.5
                            text-[8px]
                            font-bold
                            tracking-[0.12em]
                            text-[#7f1d1d]
                          "
                        >
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      {/* ACCENT */}

                      <div className="mb-1.5 flex items-center gap-1">

                        <span
                          className="
                            h-[2px]
                            w-5
                            rounded-full
                            bg-[#7f1d1d]
                            transition-all
                            group-hover:w-8
                          "
                        />

                        <span className="size-1 rounded-full bg-[#d4af37]" />

                      </div>

                      {/* TITLE */}

                      <h3
                        className="
                          text-[13px]
                          font-extrabold
                          leading-tight
                          text-[#172554]
                          group-hover:text-[#7f1d1d]
                        "
                      >
                        {step.title}
                      </h3>

                      {/* DESCRIPTION */}

                      <p
                        className="
                          mt-1.5
                          text-[10.5px]
                          leading-[1.45]
                          text-slate-500
                        "
                      >
                        {step.body}
                      </p>

                      {/* BOTTOM */}

                      <div
                        className="
                          mt-2.5
                          flex
                          items-center
                          gap-1
                          border-t
                          border-slate-100
                          pt-2
                        "
                      >

                        <CheckCircle2
                          className="size-3 text-[#d4af37]"
                        />

                        <span
                          className="
                            text-[8px]
                            font-semibold
                            tracking-wide
                            text-slate-400
                          "
                        >
                          NEXT STEP
                        </span>

                      </div>

                    </motion.div>

                  </Reveal>

                </li>
              );
            })}

          </ol>

        </div>

        {/* =================================================
            COMPACT BOTTOM BAR
        ================================================== */}

        <Reveal delay={0.2}>

          <div
            className="
              relative
              mt-4
              overflow-hidden
              rounded-xl
              bg-gradient-to-r
              from-[#172554]
              via-[#202f61]
              to-[#7f1d1d]
              px-4
              py-2.5
              shadow-[0_8px_24px_rgba(23,37,84,0.12)]
            "
          >

            <div
              className="
                relative
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-4
                gap-y-1
                text-center
              "
            >

              {/* READY */}

              <div className="flex items-center gap-1.5">

                <GraduationCap
                  className="size-3.5 text-[#d4af37]"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  READY TO BEGIN?
                </span>

              </div>

              <span
                className="
                  hidden
                  size-1
                  rounded-full
                  bg-[#d4af37]
                  sm:block
                "
              />

              <span
                className="
                  text-[9px]
                  font-medium
                  text-white/65
                "
              >
                SIMPLE
              </span>

              <span className="text-[#d4af37]">
                •
              </span>

              <span
                className="
                  text-[9px]
                  font-medium
                  text-white/65
                "
              >
                DIGITAL
              </span>

              <span className="text-[#d4af37]">
                •
              </span>

              <span
                className="
                  text-[9px]
                  font-medium
                  text-white/65
                "
              >
                SUPPORTED
              </span>

              <span
                className="
                  hidden
                  size-1
                  rounded-full
                  bg-[#d4af37]
                  sm:block
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-wide
                  text-[#f2cf67]
                "
              >
                100% ONLINE
              </span>

            </div>

          </div>

        </Reveal>

      </div>
    </Section>
  );
}