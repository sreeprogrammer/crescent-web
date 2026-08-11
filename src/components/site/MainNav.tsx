import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navItems, college } from "@/data/site";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Menu, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/crescent-logo.png.asset.png";
import cdoePhoto from "@/assets/campus-1.jpg";

function Logo() {
  return (
    <Link
      to="/"
      className="
        group
        flex
        shrink-0
        items-center
        transition-transform
        duration-300
        hover:scale-[1.015]
      "
      aria-label={`${college.name} home`}
    >
      <img
        src={logo}
        alt={`${college.name} logo`}
        className="
          h-[52px]
          w-auto
          object-contain
          sm:h-[55px]
        "
      />
    </Link>
  );
}

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        // =====================================================
        // MAIN CONTAINER
        // =====================================================
        "relative z-50 mx-auto mt-3 w-[calc(100%-28px)] max-w-[1820px]",
        "rounded-[28px]",
        "border border-[#e6e8eb]",

        // =====================================================
        // PREMIUM GLASS BACKGROUND
        // =====================================================
        scrolled
          ? "bg-white/96 backdrop-blur-2xl"
          : "bg-[#fffdf9]/92 backdrop-blur-xl",

        // =====================================================
        // SHADOW
        // =====================================================
        scrolled
          ? "shadow-[0_16px_50px_rgba(15,23,42,0.14)]"
          : "shadow-[0_8px_30px_rgba(15,23,42,0.08)]",

        // =====================================================
        // ANIMATION
        // =====================================================
        "transition-all duration-500",

        // =====================================================
        // TOP GLASS HIGHLIGHT
        // =====================================================
        "before:pointer-events-none",
        "before:absolute",
        "before:inset-x-10",
        "before:top-0",
        "before:h-px",
        "before:rounded-full",
        "before:bg-gradient-to-r",
        "before:from-transparent",
        "before:via-[#d4af37]/70",
        "before:to-transparent",

        // =====================================================
        // SUBTLE INNER BORDER
        // =====================================================
        "after:pointer-events-none",
        "after:absolute",
        "after:inset-[1px]",
        "after:rounded-[27px]",
        "after:border",
        "after:border-white/70",
        "after:content-['']",
      )}
    >
      {/* =====================================================
          VERY SUBTLE DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          -top-20
          size-40
          rounded-full
          bg-[#7f1d1d]/[0.035]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -bottom-20
          size-44
          rounded-full
          bg-[#172554]/[0.035]
          blur-3xl
        "
      />

      {/* =====================================================
          HEADER CONTENT
      ====================================================== */}

      <div
        className={cn(
          "relative flex items-center",
          "px-5 sm:px-6 lg:px-7",
          scrolled
            ? "min-h-[68px]"
            : "min-h-[76px]",
          "transition-all duration-500",
        )}
      >

        {/* ===================================================
            LOGO
        ==================================================== */}

        <Logo />

        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <ul
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-center
            gap-0.5
            xl:flex
          "
        >
          {navItems.map((item) => (
            <li
              key={item.label}
              className="shrink-0"
            >
              <Link
                to={item.to}
                activeOptions={{
                  exact: item.to === "/",
                }}
                className={cn(
                  // ===============================
                  // BASE
                  // ===============================
                  "group relative flex items-center justify-center",
                  "whitespace-nowrap",
                  "px-3.5 py-3",

                  // ===============================
                  // FONT
                  // ===============================
                  "text-[0.9rem]",
                  "font-semibold",
                  "tracking-[-0.01em]",
                  "text-[#3f4652]",

                  // ===============================
                  // TRANSITION
                  // ===============================
                  "transition-all duration-300",

                  // ===============================
                  // HOVER
                  // ===============================
                  "hover:text-[#7f1d1d]",

                  // ===============================
                  // UNDERLINE
                  // ===============================
                  "after:pointer-events-none",
                  "after:absolute",
                  "after:bottom-[3px]",
                  "after:left-1/2",
                  "after:h-[3px]",
                  "after:w-0",
                  "after:-translate-x-1/2",
                  "after:rounded-full",
                  "after:bg-[#7f1d1d]",
                  "after:opacity-0",
                  "after:transition-all",
                  "after:duration-300",

                  // ===============================
                  // HOVER UNDERLINE
                  // ===============================
                  "hover:after:w-[55%]",
                  "hover:after:opacity-100",
                )}
                activeProps={{
                  className: cn(
                    // ===============================
                    // ACTIVE TEXT
                    // ===============================
                    "text-[#7f1d1d]",
                    "font-bold",

                    // ===============================
                    // ACTIVE UNDERLINE
                    // ===============================
                    "after:w-[55%]",
                    "after:opacity-100",

                    // ===============================
                    // GOLD MICRO GLOW
                    // ===============================
                    "after:shadow-[0_2px_7px_rgba(212,175,55,0.30)]",
                  ),
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ===================================================
            RIGHT SIDE
        ==================================================== */}

        <div className="ml-2 flex shrink-0 items-center gap-2">

          {/* =================================================
              CDOE / CAMPUS CAPSULE
          ================================================== */}

          <div
            className="
              hidden
              items-center
              gap-2
              rounded-full
              border
              border-[#e2e5e9]
              bg-white/80
              p-1.5
              shadow-[0_3px_14px_rgba(15,23,42,0.06)]
              backdrop-blur-md
              md:flex
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative
                size-10
                overflow-hidden
                rounded-full
                border
                border-[#e2e5e9]
                bg-[#f7f7f5]
              "
            >
              <img
                src={cdoePhoto}
                alt="Crescent campus"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  hover:scale-110
                "
              />

              {/* tiny gold overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  ring-1
                  ring-inset
                  ring-white/70
                "
              />
            </div>

            {/* SHIELD */}

            <div
              className="
                flex
                size-9
                items-center
                justify-center
                rounded-full
                bg-[#7f1d1d]/[0.07]
                text-[#7f1d1d]
                transition-all
                duration-300
                hover:bg-[#7f1d1d]
                hover:text-white
              "
              title="UGC Approved"
            >
              <ShieldCheck className="size-[17px]" />
            </div>
          </div>

          {/* =================================================
              MOBILE MENU
          ================================================== */}

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="
                  size-11
                  rounded-2xl
                  border-[#dfe3e8]
                  bg-white/80
                  text-[#172554]
                  shadow-sm
                  transition-all
                  hover:border-[#7f1d1d]/30
                  hover:bg-[#7f1d1d]/[0.04]
                  hover:text-[#7f1d1d]
                  xl:hidden
                "
              >
                <Menu className="size-5" />

                <span className="sr-only">
                  Open navigation menu
                </span>
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
                w-[88vw]
                max-w-sm
                overflow-y-auto
                border-l
                border-[#e5e7eb]
                bg-[#fffdf9]
              "
            >
              {/* MOBILE HEADER */}

              <SheetTitle
                className="
                  pr-8
                  font-display
                  text-lg
                  font-bold
                  text-[#172554]
                "
              >
                {college.name}
              </SheetTitle>

              <div className="mt-3 h-[3px] w-12 rounded-full bg-[#7f1d1d]" />

              {/* MOBILE NAVIGATION */}

              <nav className="mt-6 flex flex-col">

                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    activeOptions={{
                      exact: item.to === "/",
                    }}
                    onClick={() => setOpen(false)}
                    className={cn(
                      // ==========================
                      // BASE
                      // ==========================
                      "relative",
                      "border-b border-[#e8eaed]",
                      "px-2 py-4",
                      "text-[15px]",
                      "font-semibold",
                      "text-[#454d59]",

                      // ==========================
                      // HOVER
                      // ==========================
                      "transition-all duration-200",
                      "hover:translate-x-1",
                      "hover:text-[#7f1d1d]",

                      // ==========================
                      // ACTIVE LINE
                      // ==========================
                      "after:pointer-events-none",
                      "after:absolute",
                      "after:bottom-0",
                      "after:left-2",
                      "after:h-[3px]",
                      "after:w-0",
                      "after:rounded-full",
                      "after:bg-[#7f1d1d]",
                      "after:opacity-0",
                      "after:transition-all",
                      "after:duration-300",
                    )}
                    activeProps={{
                      className: cn(
                        "font-bold",
                        "text-[#7f1d1d]",
                        "after:w-12",
                        "after:opacity-100",
                      ),
                    }}
                  >
                    {item.label}
                  </Link>
                ))}

              </nav>

              {/* MOBILE APPLY */}

              <Button
                variant="hero"
                size="pill-lg"
                className="
                  mt-7
                  w-full
                  bg-[#7f1d1d]
                  text-white
                  shadow-lg
                  shadow-[#7f1d1d]/20
                  hover:bg-[#172554]
                "
                asChild
              >
                <Link
                  to="/admission"
                  hash="how-to-apply"
                  onClick={() => setOpen(false)}
                >
                  Apply Now
                </Link>
              </Button>

              {/* MOBILE INFO */}

              <div
                className="
                  mt-5
                  rounded-2xl
                  border
                  border-[#e5e7eb]
                  bg-white
                  p-4
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#172554]/[0.06]
                      text-[#172554]
                    "
                  >
                    <ShieldCheck className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-[#172554]">
                      UGC Approved
                    </p>

                    <p className="mt-0.5 text-[11px] text-[#737b87]">
                      Recognised programmes
                    </p>
                  </div>

                </div>
              </div>
            </SheetContent>
          </Sheet>

        </div>
      </div>
    </nav>
  );
}