import { college } from "@/data/site";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  LogIn,
  Mail,
  Phone,
  UserPlus,
} from "lucide-react";

export function TopHeader() {
  return (
    <header
      className="
        relative
        z-50
        w-full
        overflow-hidden
        bg-[#741b1b]
        text-white
      "
    >
      {/* Premium Gold Top Line */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#d1ad5b]
          to-transparent
        "
      />

      {/* Subtle Gold Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          size-32
          rounded-full
          bg-[#d1ad5b]/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-16
          size-32
          rounded-full
          bg-[#4b1111]/40
          blur-3xl
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[42px]
          w-full
          max-w-[1900px]
          items-center
          justify-between
          gap-2
          px-2
          sm:min-h-[48px]
          sm:gap-4
          sm:px-6
          lg:min-h-[52px]
          lg:px-10
          xl:px-12
        "
      >
        {/* ===============================
            LEFT SIDE
        ================================ */}
        <div
          className="
            flex
            min-w-0
            shrink
            items-center
            gap-3
            sm:gap-5
          "
        >
          {/* PHONE */}
          {college.numbers.slice(0, 1).map((n) => (
            <a
              key={n.tel}
              href={`tel:${n.tel}`}
              className="
                group
                hidden
                items-center
                gap-2
                text-xs
                font-medium
                text-white/80
                transition-colors
                duration-200
                sm:flex
                hover:text-white
              "
            >
              <span
                className="
                  flex
                  size-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.08]
                  text-[#d1ad5b]
                  transition-all
                  duration-200
                  group-hover:bg-[#d1ad5b]
                  group-hover:text-[#741b1b]
                "
              >
                <Phone className="size-3" />
              </span>

              <span className="whitespace-nowrap">
                {n.value}
              </span>
            </a>
          ))}

          {/* DIVIDER */}
          <span
            className="
              hidden
              h-4
              w-px
              shrink-0
              bg-[#d1ad5b]/25
              sm:block
            "
          />

          {/* EMAIL */}
          <a
            href={`mailto:${college.email}`}
            className="
              group
              hidden
              min-w-0
              items-center
              gap-2
              text-xs
              font-medium
              text-white/80
              transition-colors
              duration-200
              md:flex
              hover:text-white
            "
          >
            <span
              className="
                flex
                size-6
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/[0.08]
                text-[#d1ad5b]
                transition-all
                duration-200
                group-hover:bg-[#d1ad5b]
                group-hover:text-[#741b1b]
              "
            >
              <Mail className="size-3" />
            </span>

            <span className="truncate">
              {college.email}
            </span>
          </a>
        </div>

        {/* ===============================
            RIGHT SIDE
        ================================ */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-1
            sm:gap-1.5
          "
        >
          {/* LMS LOGIN */}
          <a
            href="https://lmscdoe.crescent-institute.edu.in/login/index.php"
            className="
              group
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-[#172554]/40
              bg-[#172554]
              px-2
              py-1.5
              text-[10px]
              font-semibold
              text-white
              shadow-[0_4px_12px_rgba(0,0,0,0.15)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#102044]
              hover:shadow-[0_6px_16px_rgba(0,0,0,0.22)]
              sm:gap-2
              sm:px-3
              sm:text-xs
              sm:py-1.5
            "
          >
            <BookOpen
              className="
                size-3
                shrink-0
                text-[#d1ad5b]
                transition-transform
                duration-300
                group-hover:scale-110
                sm:size-3.5
              "
            />

            <span className="hidden sm:inline">
              LMS Login
            </span>

            <span className="sm:hidden">
              LMS
            </span>
          </a>

          {/* Divider */}
          <span
            className="
              mx-0.5
              hidden
              h-5
              w-px
              bg-white/20
              sm:block
            "
          />

          {/* LOGIN */}
          <a
            href="https://odladmission.crescent-institute.edu.in/login/index.php"
            className="
              group
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              px-2
              py-1.5
              text-[10px]
              font-semibold
              text-white/90
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-white/20
              hover:bg-white/[0.12]
              hover:text-white
              sm:gap-2
              sm:px-4
              sm:text-xs
            "
          >
            <span
              className="
                flex
                size-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-[#d1ad5b]
                transition-all
                duration-300
                group-hover:bg-[#d1ad5b]
                group-hover:text-[#741b1b]
              "
            >
              <LogIn className="size-3" />
            </span>

            <span>
              Login
            </span>
          </a>

          {/* SIGN UP / NEW REGISTRATION */}
          <a
            href="https://odladmission.crescent-institute.edu.in/login/signup.php?"
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-[#d1ad5b]/35
              bg-[#d1ad5b]/[0.07]
              px-3
              py-1.5
              text-xs
              font-semibold
              text-[#f0d995]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#d1ad5b]/60
              hover:bg-[#d1ad5b]/15
              hover:text-white
              sm:flex
              sm:px-4
            "
          >
            <span
              className="
                flex
                size-5
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#d1ad5b]/15
                text-[#d1ad5b]
                transition-all
                duration-300
                group-hover:bg-[#d1ad5b]
                group-hover:text-[#741b1b]
              "
            >
              <UserPlus className="size-3" />
            </span>

            <span>
              Sign Up
            </span>
          </a>

          {/* APPLY NOW */}
          <Link
            to="/admission"
            className="
              group
              ml-0.5
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              bg-[#d1ad5b]
              px-2.5
              py-1.5
              text-[10px]
              font-bold
              text-[#4b1111]
              shadow-[0_5px_16px_rgba(209,173,91,0.25)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#e2c477]
              hover:shadow-[0_8px_20px_rgba(209,173,91,0.35)]
              sm:ml-1
              sm:gap-1.5
              sm:px-5
              sm:py-2
              sm:text-xs
            "
          >
            <span className="sm:hidden">
              Apply
            </span>

            <span className="hidden sm:inline">
              Apply Now
            </span>

            <ArrowRight
              className="
                size-3
                shrink-0
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                sm:size-3.5
              "
            />
          </Link>
        </div>
      </div>

      {/* Bottom Gold Accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#d1ad5b]/40
          to-transparent
        "
      />
    </header>
  );
}