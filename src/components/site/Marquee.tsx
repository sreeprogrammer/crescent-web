import {
  ArrowRight,
  Award,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const items = [
  {
    text: "Admissions Open 2026–2027",
    type: "admission",
  },
  {
    text: "UGC Approved Distance Education",
    type: "ugc",
  },
  {
    text: "UG & PG Admissions Open",
    type: "admission",
  },
  {
    text: "Apply Online Today",
    type: "apply",
  },
];

function ItemIcon({ type }: { type: string }) {
  if (type === "ugc") {
    return <Award className="size-3.5" />;
  }

  if (type === "apply") {
    return <ArrowRight className="size-3.5" />;
  }

  return <GraduationCap className="size-3.5" />;
}

export function Marquee() {
  return (
    <div
      className="
        group
        relative
        z-40
        overflow-hidden
        border-y
        border-[#c6a15b]/20
        bg-[#172554]
        shadow-[0_3px_15px_rgba(23,37,84,0.12)]
      "
    >
      {/* GOLD TOP ACCENT */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#c6a15b]/60
          to-transparent
        "
      />

      {/* RED SIDE GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-32
          bg-gradient-to-r
          from-[#8b2020]/20
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-full
          w-32
          bg-gradient-to-l
          from-[#8b2020]/20
          to-transparent
        "
      />

      {/* MARQUEE VIEWPORT */}

      <div
        className="
          marquee-viewport
          mx-auto
          flex
          max-w-[100vw]
          overflow-hidden
          py-[9px]
        "
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="
              marquee-track
              flex
              shrink-0
              items-center
              gap-7
              pr-7
              whitespace-nowrap
              group-hover:[animation-play-state:paused]
            "
          >
            {items.map((item, index) => (
              <div
                key={`${copy}-${item.text}`}
                className="
                  flex
                  items-center
                  gap-7
                "
              >
                {/* ITEM */}

                <span
                  className={`
                    flex
                    items-center
                    gap-2
                    text-[12px]
                    font-semibold
                    tracking-[0.02em]
                    transition-colors
                    duration-300
                    sm:text-[13px]
                    ${
                      index === 0
                        ? "text-white"
                        : "text-white/75"
                    }
                  `}
                >
                  {/* ICON */}

                  <span
                    className={`
                      flex
                      size-6
                      items-center
                      justify-center
                      rounded-full
                      ${
                        index === 0
                          ? "bg-[#8b2020] text-white shadow-[0_3px_10px_rgba(139,32,32,0.35)]"
                          : "bg-white/[0.07] text-[#d6b667]"
                      }
                    `}
                  >
                    <ItemIcon type={item.type} />
                  </span>

                  {/* TEXT */}

                  <span>{item.text}</span>

                  {/* FIRST ITEM BADGE */}

                  {index === 0 && (
                    <span
                      className="
                        rounded-full
                        border
                        border-[#c6a15b]/35
                        bg-[#c6a15b]/10
                        px-2
                        py-0.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.12em]
                        text-[#e2c56e]
                      "
                    >
                      Now Open
                    </span>
                  )}
                </span>

                {/* GOLD SEPARATOR */}

                <span
                  className="
                    relative
                    flex
                    size-4
                    items-center
                    justify-center
                  "
                  aria-hidden
                >
                  <span
                    className="
                      size-1.5
                      rotate-45
                      rounded-[1px]
                      bg-[#c6a15b]
                      shadow-[0_0_8px_rgba(198,161,91,0.35)]
                    "
                  />
                </span>
              </div>
            ))}

            {/* END SPARK */}

            <span
              className="
                flex
                items-center
                gap-2
                text-[#c6a15b]/70
              "
              aria-hidden
            >
              <Sparkles className="size-3.5" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                Crescent Education
              </span>
            </span>
          </div>
        ))}
      </div>

      {/* GOLD BOTTOM ACCENT */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#c6a15b]/30
          to-transparent
        "
      />
    </div>
  );
}