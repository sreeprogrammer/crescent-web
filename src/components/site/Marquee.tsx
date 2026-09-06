import {
  ArrowRight,
  Award,
  GraduationCap,
} from "lucide-react";

const items = [
  {
    text: "Admissions Open 2026–2027",
    type: "admission",
    href: "/admission",
  },
  {
    text: "UGC Approved Distance Education",
    type: "ugc",
    href: "#ugc",
  },
  {
    text: "UG & PG Admissions Open",
    type: "admission",
    href: "/programmes",
  },
  {
    text: "Apply Now",
    type: "apply",
    href: "/admission",
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

function MarqueeItem({
  item,
  index,
}: {
  item: (typeof items)[number];
  index: number;
}) {
  return (
    <a
      href={item.href}
      className="
        group/item
        flex
        shrink-0
        items-center
        gap-3
        rounded-full
        px-1
        py-1
        text-white
        transition-all
        duration-300
        hover:text-[#c6a15b]
        active:text-[#c6a15b]
      "
    >
      {/* UGC LOGO */}
      {item.type === "ugc" ? (
        <span
          className="
            flex
            size-7
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/30
            bg-white
            transition-all
            duration-300
            group-hover/item:border-[#c6a15b]
          "
        >
          <img
            src="/ugc-logo.png"
            alt="UGC"
            className="
              h-full
              w-full
              object-contain
              p-0.5
            "
          />
        </span>
      ) : (
        /* NORMAL ICON */
        <span
          className="
            flex
            size-7
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-white
            transition-all
            duration-300
            group-hover/item:bg-[#c6a15b]
            group-hover/item:text-[#172554]
            group-active/item:bg-[#c6a15b]
            group-active/item:text-[#172554]
          "
        >
          <ItemIcon type={item.type} />
        </span>
      )}

      {/* TEXT */}
      <span
        className="
          text-[12px]
          font-semibold
          tracking-[0.02em]
          text-white
          transition-colors
          duration-300
          group-hover/item:text-[#c6a15b]
          group-active/item:text-[#c6a15b]
          sm:text-[13px]
        "
      >
        {item.text}
      </span>

      {/* NOW OPEN */}
      {index === 0 && (
        <span
          className="
            rounded-full
            border
            border-[#c6a15b]/50
            bg-[#c6a15b]/10
            px-2
            py-0.5
            text-[8px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-[#e2c56e]
            transition-all
            duration-300
            group-hover/item:bg-[#c6a15b]
            group-hover/item:text-[#172554]
            group-active/item:bg-[#c6a15b]
            group-active/item:text-[#172554]
          "
        >
          Now Open
        </span>
      )}

      {/* GOLD SEPARATOR */}
      <span
        className="
          ml-2
          flex
          size-3
          shrink-0
          items-center
          justify-center
        "
        aria-hidden="true"
      >
        <span
          className="
            size-1.5
            rotate-45
            rounded-[1px]
            bg-[#c6a15b]
          "
        />
      </span>
    </a>
  );
}

export function Marquee() {
  return (
    <div
      className="
        group
        relative
        z-40
        w-full
        overflow-hidden
        border-y
        border-[#c6a15b]/20
        bg-[#172554]
        shadow-[0_3px_15px_rgba(23,37,84,0.15)]
      "
    >
      {/* TOP GOLD LINE */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          z-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#c6a15b]/70
          to-transparent
        "
      />

      {/* LEFT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-10
          h-full
          w-8
          bg-gradient-to-r
          from-[#172554]
          to-transparent
          sm:w-16
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-10
          h-full
          w-8
          bg-gradient-to-l
          from-[#172554]
          to-transparent
          sm:w-16
        "
      />

      {/* MARQUEE */}
      <div
        className="
          w-full
          overflow-hidden
          py-2
          sm:py-[9px]
        "
      >
        <div
          className="
            marquee-track
            flex
            w-max
            items-center
            hover:[animation-play-state:paused]
          "
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {/* COPY 1 */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-5
              pr-5
              sm:gap-7
              sm:pr-7
            "
          >
            {items.map((item, index) => (
              <MarqueeItem
                key={`first-${item.text}`}
                item={item}
                index={index}
              />
            ))}
          </div>

          {/* COPY 2 */}
          <div
            className="
              flex
              shrink-0
              items-center
              gap-5
              pr-5
              sm:gap-7
              sm:pr-7
            "
            aria-hidden="true"
          >
            {items.map((item, index) => (
              <MarqueeItem
                key={`second-${item.text}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM GOLD LINE */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-10
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#c6a15b]/40
          to-transparent
        "
      />

      {/* ANIMATION */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 20s !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}