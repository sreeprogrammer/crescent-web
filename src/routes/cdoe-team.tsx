import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  Laptop,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/cdoe-team")({
  component: CDOEPage,
});

const teams = [
  {
    number: "01",
    title: "Faculty Team",
    eyebrow: "Academic Team",
    description:
      "Our faculty team supports teaching, academic guidance, programme coordination and learner development.",
    icon: GraduationCap,
    href: "/faculty",
  },
  {
    number: "02",
    title: "Technical Team",
    eyebrow: "Technical Support",
    description:
      "Our technical team supports digital learning, LMS services, online platforms and technology-related learner assistance.",
    icon: Laptop,
    href: "/technical",
  },
];

function CDOEPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f4efe6] text-[#25262a]">

        {/* =====================================================
            PREMIUM HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#f4efe6]">

          {/* Decorative glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-10 size-64 rounded-full bg-[#741b1b]/5 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-5 sm:px-8 lg:px-12 lg:py-7">

            {/* BACK BUTTON */}

            <Link
              to="/about"
              className="
                group
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#c9b78e]
                bg-[#fffaf0]/50
                px-3
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#665f53]
                backdrop-blur-sm
                transition-all
                hover:border-[#741b1b]/30
                hover:bg-[#741b1b]
                hover:text-white
              "
            >
              <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-1" />
              Back to About
            </Link>

            {/* HERO CONTENT */}

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mt-5"
            >

              <div className="flex items-center gap-2.5">

                <span className="h-[2px] w-8 bg-[#b28a3c]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#741b1b]
                  "
                >
                  About Us • CDOE
                </span>

                <Sparkles className="size-3 text-[#b28a3c]" />

              </div>

              <h1
                className="
                  mt-2
                  max-w-4xl
                  font-serif
                  text-[2rem]
                  font-bold
                  leading-[1]
                  tracking-[-0.035em]
                  text-[#25262a]
                  sm:text-[2.45rem]
                  lg:text-[2.9rem]
                "
              >
                Centre for{" "}
                <span className="text-[#741b1b]">
                  Distance & Online Education
                </span>
              </h1>

              <p
                className="
                  mt-2.5
                  max-w-2xl
                  text-[10px]
                  leading-[1.7]
                  text-[#706b63]
                  sm:text-[11px]
                "
              >
                The CDOE team brings together academic and technical
                professionals who work together to provide learners with
                quality education, digital support and a smooth learning
                experience.
              </p>

            </motion.div>

          </div>

          {/* GOLD DIVIDER */}

          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#b28a3c] to-transparent opacity-70" />

        </section>

        {/* =====================================================
            PREMIUM INTRO STRIP
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#111c3b]">

          <div className="pointer-events-none absolute -left-20 top-1/2 size-60 -translate-y-1/2 rounded-full bg-[#741b1b]/30 blur-3xl" />

          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div className="relative mx-auto max-w-[1450px] px-5 py-5 sm:px-8 lg:px-12 lg:py-6">

            <div className="flex items-center gap-4">

              {/* ICON */}

              <div
                className="
                  flex
                  size-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e4bd5b]/30
                  bg-[#e4bd5b]/10
                  text-[#e4bd5b]
                  sm:size-11
                "
              >
                <Users className="size-4.5" />
              </div>

              {/* CONTENT */}

              <div>

                <div className="flex items-center gap-2">

                  <span className="h-px w-5 bg-[#e4bd5b]" />

                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#e4bd5b]
                    "
                  >
                    CDOE Team
                  </p>

                </div>

                <h2
                  className="
                    mt-0.5
                    font-serif
                    text-base
                    font-bold
                    text-white
                    sm:text-lg
                  "
                >
                  Academic excellence powered by people and technology.
                </h2>

              </div>

            </div>

          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#b28a3c]/50 to-transparent" />

        </section>

        {/* =====================================================
            TEAM SECTION
        ====================================================== */}

        <section className="relative bg-[#f4efe6]">

          {/* Decorative glow */}

          <div className="pointer-events-none absolute -right-24 top-20 size-64 rounded-full bg-[#741b1b]/5 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-7 sm:px-8 lg:px-12 lg:py-8">

            {/* SECTION HEADING */}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-5 flex items-end justify-between gap-4"
            >

              <div>

                <div className="flex items-center gap-2">

                  <span className="h-[2px] w-7 bg-[#b28a3c]" />

                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#741b1b]
                    "
                  >
                    Meet Our Teams
                  </span>

                </div>

                <h2
                  className="
                    mt-1.5
                    font-serif
                    text-[1.6rem]
                    font-bold
                    tracking-[-0.025em]
                    text-[#25262a]
                    sm:text-[1.85rem]
                  "
                >
                  Faculty & Technical Team
                </h2>

                <p
                  className="
                    mt-1
                    max-w-xl
                    text-[10px]
                    leading-[1.6]
                    text-[#77716a]
                    sm:text-[11px]
                  "
                >
                  Dedicated academic and technical professionals supporting
                  every stage of the distance learning experience.
                </p>

              </div>

              <span
                className="
                  hidden
                  rounded-full
                  border
                  border-[#cdbd9f]
                  bg-[#eee6d8]
                  px-3
                  py-1
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#8b7b60]
                  sm:block
                "
              >
                02 Teams
              </span>

            </motion.div>

            {/* TEAM CARDS */}

            <div className="grid gap-4 lg:grid-cols-2">

              {teams.map((team, index) => {
                const Icon = team.icon;

                return (
                  <motion.article
                    key={team.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.08,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#cdbd9f]
                      bg-gradient-to-br
                      from-[#eee6d8]
                      to-[#e3d8c7]
                      p-5
                      shadow-[0_7px_20px_rgba(71,54,29,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#b28a3c]/60
                      hover:shadow-[0_16px_32px_rgba(71,54,29,0.12)]
                      sm:p-6
                    "
                  >

                    {/* PREMIUM TOP LINE */}

                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-[2px]
                        bg-gradient-to-r
                        from-[#741b1b]
                        via-[#b28a3c]
                        to-[#741b1b]
                      "
                    />

                    {/* NUMBER */}

                    <span
                      className="
                        absolute
                        right-5
                        top-4
                        font-serif
                        text-4xl
                        font-bold
                        text-[#b28a3c]/25
                      "
                    >
                      {team.number}
                    </span>

                    {/* ICON */}

                    <div
                      className="
                        flex
                        size-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#b28a3c]/25
                        bg-[#f5ede0]
                        text-[#741b1b]
                        shadow-[0_5px_15px_rgba(71,54,29,0.06)]
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:border-[#b28a3c]/50
                      "
                    >
                      <Icon className="size-6" />
                    </div>

                    {/* TEXT */}

                    <div className="mt-5">

                      <div className="flex items-center gap-2">

                        <span className="h-px w-5 bg-[#b28a3c]" />

                        <p
                          className="
                            text-[7px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#741b1b]
                          "
                        >
                          {team.eyebrow}
                        </p>

                      </div>

                      <h3
                        className="
                          mt-1.5
                          font-serif
                          text-[1.35rem]
                          font-bold
                          tracking-[-0.02em]
                          text-[#292823]
                          sm:text-[1.5rem]
                        "
                      >
                        {team.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-xl
                          text-[10px]
                          leading-[1.75]
                          text-[#706a61]
                          sm:text-[11px]
                        "
                      >
                        {team.description}
                      </p>

                    </div>

                    {/* LINK */}

                    <div
                      className="
                        mt-5
                        border-t
                        border-[#cdbd9f]
                        pt-3.5
                      "
                    >

                      <Link
                        to={team.href}
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-2
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[#741b1b]
                        "
                      >

                        <span>
                          View {team.title}
                        </span>

                        <span
                          className="
                            flex
                            size-6
                            items-center
                            justify-center
                            rounded-full
                            bg-[#741b1b]/[0.06]
                            transition-all
                            duration-300
                            group-hover/link:bg-[#741b1b]
                            group-hover/link:text-white
                          "
                        >
                          <ArrowUpRight
                            className="
                              size-3
                              transition-transform
                              group-hover/link:translate-x-0.5
                              group-hover/link:-translate-y-0.5
                            "
                          />
                        </span>

                      </Link>

                    </div>

                    {/* HOVER GLOW */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -bottom-12
                        right-5
                        size-28
                        rounded-full
                        bg-[#b28a3c]/10
                        opacity-0
                        blur-2xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                    />

                  </motion.article>
                );
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            PREMIUM INFORMATION STRIP
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#e9e0d1]">

          <div className="pointer-events-none absolute -left-16 bottom-0 size-56 rounded-full bg-[#741b1b]/5 blur-3xl" />

          <div className="relative mx-auto max-w-[1450px] px-5 py-6 sm:px-8 lg:px-12 lg:py-7">

            <div className="grid gap-4 sm:grid-cols-2">

              {/* FACULTY */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#cdbd9f]
                  bg-[#f0e8da]/70
                  p-4
                "
              >

                <div
                  className="
                    flex
                    size-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#741b1b]/10
                    text-[#741b1b]
                  "
                >
                  <GraduationCap className="size-4" />
                </div>

                <div>

                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#741b1b]
                    "
                  >
                    Academic
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#39352e]">
                    Faculty Team
                  </p>

                </div>

              </div>

              {/* TECHNICAL */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-[#cdbd9f]
                  bg-[#f0e8da]/70
                  p-4
                "
              >

                <div
                  className="
                    flex
                    size-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#111c3b]/10
                    text-[#111c3b]
                  "
                >
                  <Laptop className="size-4" />
                </div>

                <div>

                  <p
                    className="
                      text-[7px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#111c3b]
                    "
                  >
                    Technology
                  </p>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#39352e]">
                    Technical Team
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PREMIUM BOTTOM
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#111c3b]">

          <div className="pointer-events-none absolute left-1/3 top-0 size-40 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div
            className="
              relative
              mx-auto
              flex
              max-w-[1450px]
              items-center
              justify-between
              gap-4
              px-5
              py-4
              sm:px-8
              lg:px-12
            "
          >

            <div>

              <div className="flex items-center gap-2">

                <span className="h-px w-5 bg-[#e4bd5b]" />

                <p
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#e4bd5b]
                  "
                >
                  CDOE
                </p>

              </div>

              <h2
                className="
                  mt-1
                  font-serif
                  text-sm
                  font-bold
                  text-white
                  sm:text-base
                "
              >
                Dedicated teams for better distance learning.
              </h2>

            </div>

            <Link
              to="/about"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-1
                rounded-full
                border
                border-[#e4bd5b]/40
                bg-[#e4bd5b]
                px-3.5
                py-1.5
                text-[8px]
                font-bold
                uppercase
                tracking-[0.07em]
                text-[#111c3b]
                shadow-[0_5px_18px_rgba(228,189,91,0.15)]
                transition-all
                hover:-translate-y-0.5
                hover:bg-white
              "
            >
              Back to About

              <ArrowUpRight
                className="
                  size-2.5
                  transition-transform
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>

          </div>

        </section>

      </main>
    </SiteLayout>
  );
}