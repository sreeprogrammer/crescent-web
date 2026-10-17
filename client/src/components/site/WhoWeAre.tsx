import whoWeAreImage from "@/assets/campus-1.jpg";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function WhoWeAre() {
  return (
    <Section
      className="
        relative
        overflow-hidden
        border-y
        border-slate-200/80
        bg-[#f6f8fb]
        py-9
        sm:py-11
        lg:py-12
        after:absolute
        after:bottom-0
        after:left-0
        after:h-[3px]
        after:w-full
        after:bg-[#b08a4a]
      "
    >
      {/* Background decoration */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-10
          h-72
          w-72
          rounded-full
          bg-[#dce8f8]/35
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-[#f4ead7]/30
          blur-3xl
        "
      />

      {/* Main container */}

      <div
        className="
          relative
          mx-auto
          max-w-[1350px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        <div
          className="
            grid
            items-center
            gap-7
            lg:grid-cols-[0.96fr_1.04fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* LEFT — IMAGE */}

          <Reveal>
            <div className="group relative w-full">

              {/* Image frame */}

              <div
                className="
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-[0_18px_50px_rgba(15,23,42,0.10)]
                  sm:rounded-[2.2rem]
                  sm:p-2.5
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.6rem]
                    sm:rounded-[1.85rem]
                  "
                >
                  <img
                    src={whoWeAreImage}
                    alt="B.S. Abdur Rahman Crescent Institute campus"
                    loading="lazy"
                    width={1200}
                    height={850}
                    className="
                      h-[330px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                      sm:h-[395px]
                      lg:h-[430px]
                      xl:h-[455px]
                    "
                  />

                  {/* Image overlay */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#07152f]/45
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Established badge */}

                  <div
                    className="
                      absolute
                      right-4
                      top-4
                      sm:right-5
                      sm:top-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/60
                        bg-white/90
                        px-3
                        py-1.5
                        shadow-md
                        backdrop-blur-md
                      "
                    >
                      <span className="size-1.5 rounded-full bg-emerald-500" />

                      <span
                        className="
                          text-[10px]
                          font-bold
                          tracking-[0.14em]
                          text-slate-700
                          sm:text-[11px]
                        "
                      >
                        ESTABLISHED 1984
                      </span>
                    </div>
                  </div>

                  {/* Experience card */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      sm:bottom-5
                      sm:left-5
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2.5
                        rounded-xl
                        border
                        border-white/70
                        bg-white/95
                        px-3
                        py-2.5
                        shadow-[0_12px_30px_rgba(15,23,42,0.18)]
                        backdrop-blur-md
                        sm:px-4
                        sm:py-3
                      "
                    >
                      <div
                        className="
                          flex
                          size-8
                          items-center
                          justify-center
                          rounded-lg
                          bg-[#1d3b73]
                          text-white
                          sm:size-9
                        "
                      >
                        <GraduationCap className="size-4" />
                      </div>

                      <div>
                        <p className="text-xl font-bold leading-none text-slate-900">
                          40+
                        </p>

                        <p className="mt-1 text-[10px] text-slate-500 sm:text-[11px]">
                          Years of Excellence
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* INFO STRIP BELOW PHOTO */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-[#e4d5b8]
                  bg-[#fffaf0]
                  px-4
                  py-2.5
                  shadow-sm
                  sm:px-5
                "
              >
                <div className="flex items-center gap-2.5">

                  <div
                    className="
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#b08a4a]/10
                      text-[#a17a36]
                    "
                  >
                    <Sparkles className="size-4" />
                  </div>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#8d6b31]
                        sm:text-xs
                      "
                    >
                      Quality Education
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                      Learn • Grow • Lead
                    </p>
                  </div>

                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[10px] font-semibold text-slate-400">
                    CRESCENT
                  </p>

                  <p className="text-[9px] tracking-[0.12em] text-slate-400">
                    INSTITUTION
                  </p>
                </div>

              </div>

            </div>
          </Reveal>

          {/* RIGHT — CONTENT */}

          <Reveal delay={0.1}>
            <div
              className="
                flex
                h-full
                flex-col
                justify-center
                lg:pr-2
              "
            >

              {/* WHO WE ARE */}

              <div className="mb-4 flex justify-center">
                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-[#8f1d1d]
                    px-4
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-white
                    shadow-sm
                    sm:text-xs
                  "
                >
                  Who We Are
                </span>
              </div>

              {/* HEADING */}

              <h2
                className="
                  max-w-none
                  whitespace-normal
                  text-[clamp(1.85rem,2.5vw,2.7rem)]
                  font-semibold
                  leading-[1.12]
                  tracking-[-0.025em]
                  text-slate-900
                "
              >
                Empowering learners with knowledge, innovation & excellence.
              </h2>

              {/* Gold divider */}

              <div className="mt-4 h-[3px] w-16 rounded-full bg-[#b08a4a]" />

              {/* Body */}

              <div className="mt-5 max-w-[650px] space-y-3">

                <p
                  className="
                    text-[clamp(0.95rem,1.05vw,1.08rem)]
                    leading-[1.65]
                    text-slate-600
                  "
                >
                  B.S. Abdur Rahman Crescent Institute of Science and Technology
                  is a renowned institution committed to delivering quality
                  education and creating opportunities for learners to build a
                  successful future.
                </p>

                <p
                  className="
                    text-[clamp(0.95rem,1.05vw,1.08rem)]
                    leading-[1.65]
                    text-slate-600
                  "
                >
                  Through our Centre for Distance and Online Education,
                  learners can pursue undergraduate, postgraduate and
                  certification programmes with flexible learning, expert
                  faculty, digital resources and continuous academic support.
                </p>

              </div>

              {/* STATS */}

              <div
                className="
                  mt-6
                  grid
                  w-full
                  max-w-[650px]
                  grid-cols-3
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white/85
                  shadow-sm
                "
              >

                {/* 40+ */}

                <div className="px-3 py-3.5 sm:px-4 sm:py-4">

                  <div
                    className="
                      mb-1.5
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-50
                      text-[#24447d]
                    "
                  >
                    <GraduationCap className="size-4" />
                  </div>

                  <p className="text-xl font-bold text-slate-900">
                    40+
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                    Years of Excellence
                  </p>

                </div>

                {/* 55+ */}

                <div
                  className="
                    border-x
                    border-slate-200
                    px-3
                    py-3.5
                    sm:px-4
                    sm:py-4
                  "
                >

                  <div
                    className="
                      mb-1.5
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-amber-50
                      text-[#a17a36]
                    "
                  >
                    <BookOpen className="size-4" />
                  </div>

                  <p className="text-xl font-bold text-slate-900">
                    55+
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                    Programmes
                  </p>

                </div>

                {/* 25K+ */}

                <div className="px-3 py-3.5 sm:px-4 sm:py-4">

                  <div
                    className="
                      mb-1.5
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-emerald-50
                      text-emerald-700
                    "
                  >
                    <Users className="size-4" />
                  </div>

                  <p className="text-xl font-bold text-slate-900">
                    25K+
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-500 sm:text-xs">
                    Learners
                  </p>

                </div>

              </div>

              {/* Button */}

              <div className="mt-5">

                <Link
                  to="/about"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#1d3b73]
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(29,59,115,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#16305f]
                    hover:shadow-lg
                    sm:px-6
                    sm:py-3
                    sm:text-base
                  "
                >
                  Discover More

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
          </Reveal>

        </div>
      </div>
    </Section>
  );
}