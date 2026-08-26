import heroImg1 from "@/assets/heroImg1.jpg";
import heroImg2 from "@/assets/heroImg2.jpg";
import heroImg3 from "@/assets/heroImg3.jpg";
import heroImg4 from "@/assets/heroImg4.jpg";

import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
  heroImg1,
  heroImg2,
  heroImg3,
  heroImg4,
];

const features = [
  "UGC Approved",
  "Flexible Learning",
  "Online Admission",
];

export function HeroDE() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#f8f7f3]
        px-4
        pt-8
        pb-7
        sm:px-6
        sm:pt-10
        sm:pb-8
        lg:px-8
        lg:pt-11
        lg:pb-9
      "
    >
      {/* =====================================================
          SOFT BACKGROUND DETAILS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            -left-32
            top-10
            h-72
            w-72
            rounded-full
            bg-[#8f1d1d]/[0.035]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#1d355f]/[0.045]
            blur-3xl
          "
        />
      </div>

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1450px]
          items-center
          gap-8
          lg:grid-cols-[0.88fr_1.12fr]
          lg:gap-10
          xl:gap-12
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -22,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            min-w-0
            flex-col
            justify-center
            lg:py-2
          "
        >
          {/* =================================================
              CRESCENT DISTANCE EDUCATION
          ================================================== */}

          <div className="mb-4 flex items-center gap-3">
            <span
              className="
                h-[3px]
                w-10
                rounded-full
                bg-[#b08a3e]
              "
            />

            <span
              className="
                text-[16px]
                font-extrabold
                uppercase
                tracking-[0.18em]
                text-[#8a6728]
                sm:text-[18px]
                lg:text-[20px]
              "
            >
              Crescent Distance Education
            </span>
          </div>

          {/* =================================================
              ADMISSIONS OPEN
              CENTER + POPUP + BLINK
          ================================================== */}

          <div className="mb-5 flex w-full justify-center">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                y: -10,
              }}
              animate={{
                opacity: [0.75, 1, 0.75],
                scale: [1, 1.08, 1],
                y: [0, 0, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-[#b08a3e]/40
                bg-[#b08a3e]
                px-5
                py-2
                shadow-[0_8px_25px_rgba(176,138,62,0.28)]
              "
            >
              <motion.span
                animate={{
                  opacity: [1, 0.3, 1],
                  scale: [1, 0.75, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  size-2
                  rounded-full
                  bg-white
                "
              />

              <span
                className="
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  sm:text-[13px]
                "
              >
                Admissions Open 2026–2027
              </span>
            </motion.div>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================== */}

          <h1
            className="
              max-w-[650px]
              text-[28px]
              leading-[1.05]
              font-extrabold
              tracking-[-0.04em]
              text-[#172033]
              sm:text-[32px]
              lg:text-[36px]
              xl:text-[40px]
            "
          >
            Empowering Your
            <br />

            <span className="text-[#172033]">
              Future Through
            </span>{" "}

            <span className="text-[#951f23]">
              Distance
            </span>

            <br />

            <span className="text-[#951f23]">
              Education
            </span>
          </h1>

          {/* =================================================
              DECORATIVE LINE
          ================================================== */}

          <div className="my-5 flex items-center gap-2">
            <span
              className="
                h-[4px]
                w-12
                rounded-full
                bg-[#951f23]
              "
            />

            <span
              className="
                h-[4px]
                w-5
                rounded-full
                bg-[#b08a3e]
              "
            />

            <span
              className="
                h-[4px]
                w-2
                rounded-full
                bg-[#1d355f]
              "
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p
            className="
              max-w-[620px]
              text-[15px]
              leading-[1.65]
              font-medium
              text-[#566274]
              sm:text-[16px]
            "
          >
            Join UGC Approved Undergraduate and Postgraduate
            Programmes with flexible learning, online admissions
            and expert student support.
          </p>

          {/* =================================================
              FEATURES
          ================================================== */}

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-2.5
            "
          >
            {features.map((feature) => (
              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                "
              >
                <CheckCircle2
                  className="
                    size-[17px]
                    text-[#951f23]
                  "
                  strokeWidth={2}
                />

                <span
                  className="
                    text-[12px]
                    font-semibold
                    text-[#4b5563]
                    sm:text-[13px]
                  "
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-3
            "
          >
            <Button
              asChild
              size="pill-lg"
              className="
                h-12
                rounded-full
                border-0
                bg-[#951f23]
                px-6
                text-sm
                font-bold
                text-white
                shadow-[0_10px_24px_rgba(149,31,35,0.20)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#7f181c]
                hover:shadow-[0_14px_30px_rgba(149,31,35,0.25)]
              "
            >
              <Link
                to="/admission"
                hash="how-to-apply"
              >
                Apply Now

                <ArrowRight className="ml-1 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="pill-lg"
              className="
                h-12
                rounded-full
                border
                border-[#1d355f]/20
                bg-white
                px-6
                text-sm
                font-semibold
                text-[#1d355f]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#b08a3e]/50
                hover:bg-[#fffdf8]
                hover:text-[#951f23]
              "
            >
              <Link to="/programmes">
                Explore Courses
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 22,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            min-w-0
            lg:pl-1
          "
        >
          {/* =================================================
              OUTER PREMIUM FRAME
          ================================================== */}

          <div
            className="
              relative
              rounded-[2rem]
              border
              border-[#b08a3e]/30
              bg-[#1d355f]/[0.04]
              p-2
              shadow-[0_20px_55px_rgba(29,53,95,0.14)]
              sm:rounded-[2.2rem]
              sm:p-2.5
            "
          >
            {/* =================================================
                INNER IMAGE
            ================================================== */}

            <div
              className="
                relative
                h-[330px]
                overflow-hidden
                rounded-[1.65rem]
                bg-[#1d355f]
                sm:h-[390px]
                lg:h-[440px]
                xl:h-[475px]
                sm:rounded-[1.85rem]
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={heroImages[currentImage]}
                  alt="Crescent Distance Education campus"
                  width={1600}
                  height={1000}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />
              </AnimatePresence>

              {/* NAVY IMAGE OVERLAY */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#101d37]/80
                  via-[#1d355f]/15
                  to-[#1d355f]/10
                "
              />

              {/* GOLD INNER BORDER */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-[1.65rem]
                  border
                  border-white/10
                "
              />

              {/* =================================================
                  IMAGE BOTTOM CONTENT
              ================================================== */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  flex
                  items-end
                  justify-between
                  gap-4
                  sm:bottom-7
                  sm:left-7
                  sm:right-7
                "
              >
                <div>
                  <p
                    className="
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-[0.20em]
                      text-[#d9b45f]
                      sm:text-[15px]
                    "
                  >
                    Crescent Distance Education
                  </p>

                  <h2
                    className="
                      mt-1
                      text-xl
                      font-bold
                      tracking-[-0.02em]
                      text-white
                      sm:text-2xl
                    "
                  >
                    Your Future Starts Here
                  </h2>
                </div>

                {/* SLIDER INDICATORS */}

                <div className="hidden items-center gap-1.5 sm:flex">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentImage(i)}
                      aria-label={`Show hero image ${i + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          i === currentImage
                            ? "w-7 bg-[#d9b45f]"
                            : "w-1.5 bg-white/50 hover:bg-white"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                UGC FLOATING CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: [0, -5, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 0.45,
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                left-5
                top-5
                z-20
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/70
                bg-white/95
                px-3
                py-2.5
                shadow-[0_12px_30px_rgba(15,23,42,0.18)]
                backdrop-blur-xl
                sm:left-8
                sm:top-8
                sm:px-4
                sm:py-3
              "
            >
              {/* PHOTO */}

              <span
                className="
                  flex
                  size-10
                  shrink-0
                  overflow-hidden
                  rounded-full
                  border
                  border-[#d9b45f]/40
                  bg-[#1d355f]
                  sm:size-11
                "
              >
                <img
                  src={heroImg1}
                  alt="Crescent campus"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </span>

              <span>
                <span
                  className="
                    block
                    text-sm
                    font-bold
                    text-[#172033]
                    sm:text-base
                  "
                >
                  UGC
                </span>

                <span
                  className="
                    block
                    text-[10px]
                    font-medium
                    text-[#667085]
                    sm:text-xs
                  "
                >
                  Approved programmes
                </span>
              </span>
            </motion.div>

            {/* =================================================
                APPLY FLOATING CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: [0, -5, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 0.6,
                },
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                bottom-5
                right-5
                z-20
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-white/60
                bg-white/95
                px-3
                py-2.5
                shadow-[0_12px_30px_rgba(15,23,42,0.18)]
                backdrop-blur-xl
                sm:bottom-8
                sm:right-8
                sm:px-4
                sm:py-3
              "
            >
              <span
                className="
                  flex
                  size-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#951f23]
                  text-white
                  sm:size-10
                "
              >
                <Users className="size-5" />
              </span>

              <span>
                <span
                  className="
                    block
                    text-sm
                    font-bold
                    capitalize
                    text-[#172033]
                    sm:text-base
                  "
                >
                  Apply Now
                </span>

                <span
                  className="
                    block
                    text-[10px]
                    font-medium
                    text-[#667085]
                    sm:text-xs
                  "
                >
                  Crescent Education
                </span>
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}