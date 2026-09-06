import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Layers3,
  X,
} from "lucide-react";

const programmes = [
  {
    title: "BA English",
    type: "Undergraduate",
    href: "/ba-english",
    accent: "#8F1D1D",
  },
  {
    title: "BA Islamic Studies",
    type: "Undergraduate",
    href: "/ba-islamic-studies",
    accent: "#2F6F4E",
  },
  {
    title: "BA Public Policy",
    type: "Undergraduate",
    href: "/ba-public-policy",
    accent: "#B08A24",
  },
  {
    title: "MA Islamic Studies",
    type: "Postgraduate",
    href: "/ma-islamic-studies",
    accent: "#6B4C9A",
  },
  {
    title: "MBA",
    type: "Postgraduate",
    href: "/mba",
    accent: "#30265F",
  },
  {
    title: "MCA",
    type: "Postgraduate",
    href: "/mca",
    accent: "#427D76",
  },
];

export function CoursesFab() {
  const [open, setOpen] = useState(false);

  const undergraduate = programmes.filter(
    (item) => item.type === "Undergraduate",
  );

  const postgraduate = programmes.filter(
    (item) => item.type === "Postgraduate",
  );

  return (
    <>
      {/* =====================================================
          COURSES FAB
      ===================================================== */}

      <button
        type="button"
        aria-label="Explore Courses"
        onClick={() => setOpen(true)}
        className="
          fixed
          left-0
          top-[44%]
          z-[9999]
          flex
          -translate-y-1/2
          items-center
          justify-center
          rounded-r-2xl
          bg-[#8F1D1D]
          px-2.5
          py-4
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-[#7A1818]
        "
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <GraduationCap className="size-5" />

          <span
            className="
              [writing-mode:vertical-rl]
              rotate-180
              text-sm
              font-semibold
              tracking-[0.08em]
            "
          >
            Courses
          </span>
        </div>
      </button>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[9998]
            bg-black/20
            backdrop-blur-[1px]
          "
          onClick={() => setOpen(false)}
        />
      )}

      {/* =====================================================
          LEFT COURSE DRAWER
      ===================================================== */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[10000]
          flex
          h-screen
          w-[310px]
          max-w-[88vw]
          flex-col
          bg-[#F5F1E9]
          shadow-[8px_0_30px_rgba(0,0,0,0.15)]
          transition-transform
          duration-300
          ease-out
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* =================================================
            DRAWER HEADER
        ================================================= */}

        <div className="relative bg-[#17234B] px-5 py-5 text-white">

          <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-[#2F6F4E] via-[#D4AF37] to-[#6B4C9A]" />

          <button
            type="button"
            aria-label="Close Courses"
            onClick={() => setOpen(false)}
            className="
              absolute
              right-4
              top-4
              flex
              size-7
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition-colors
              hover:bg-[#D4AF37]
              hover:text-[#17234B]
            "
          >
            <X className="size-4" />
          </button>

          <div className="flex items-center gap-2">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#D4AF37]">
              <GraduationCap className="size-4 text-[#17234B]" />
            </div>

            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#D8B84C]">
                Academic Programmes
              </p>

              <h2 className="mt-0.5 text-base font-bold">
                Explore Courses
              </h2>
            </div>
          </div>

          <p className="mt-3 pr-5 text-[10px] leading-4 text-white/70">
            Explore our undergraduate and postgraduate programmes.
          </p>
        </div>

        {/* =================================================
            PROGRAMMES
        ================================================= */}

        <div className="flex-1 overflow-y-auto px-4 py-4">

          {/* UNDERGRADUATE */}

          <div className="mb-5">

            <div className="mb-2.5 flex items-center gap-2">
              <span className="h-[2px] w-5 bg-[#2F6F4E]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#2F6F4E]">
                Undergraduate
              </span>
            </div>

            <div className="space-y-2">
              {undergraduate.map((programme) => (
                <Link
                  key={programme.title}
                  to={programme.href}
                  onClick={() => setOpen(false)}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#DEDAD2]
                    bg-white
                    px-3
                    py-3
                    shadow-[0_3px_12px_rgba(0,0,0,0.035)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
                  "
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{
                      backgroundColor: programme.accent,
                    }}
                  />

                  <div
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: programme.accent,
                    }}
                  >
                    <BookOpen className="size-3.5 text-white" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-[#111111]">
                      {programme.title}
                    </p>

                    <p className="mt-0.5 text-[8px] text-[#737782]">
                      Explore Programme
                    </p>
                  </div>

                  <ArrowRight
                    className="
                      size-3.5
                      shrink-0
                      text-[#D4AF37]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* POSTGRADUATE */}

          <div>

            <div className="mb-2.5 flex items-center gap-2">
              <span className="h-[2px] w-5 bg-[#6B4C9A]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#6B4C9A]">
                Postgraduate
              </span>
            </div>

            <div className="space-y-2">
              {postgraduate.map((programme) => (
                <Link
                  key={programme.title}
                  to={programme.href}
                  onClick={() => setOpen(false)}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#DEDAD2]
                    bg-white
                    px-3
                    py-3
                    shadow-[0_3px_12px_rgba(0,0,0,0.035)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)]
                  "
                >
                  <span
                    className="absolute left-0 top-0 h-full w-[3px]"
                    style={{
                      backgroundColor: programme.accent,
                    }}
                  />

                  <div
                    className="flex size-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: programme.accent,
                    }}
                  >
                    <Layers3 className="size-3.5 text-white" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold text-[#111111]">
                      {programme.title}
                    </p>

                    <p className="mt-0.5 text-[8px] text-[#737782]">
                      Explore Programme
                    </p>
                  </div>

                  <ArrowRight
                    className="
                      size-3.5
                      shrink-0
                      text-[#D4AF37]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                  <span className="absolute bottom-0 left-3 right-3 h-[2px] origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="border-t border-[#DEDAD2] bg-white px-4 py-3">
          <p className="text-center text-[8px] font-medium text-[#737782]">
            Choose a programme to explore its details
          </p>
        </div>
      </aside>
    </>
  );
}

export default CoursesFab;