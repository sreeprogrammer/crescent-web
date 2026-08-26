import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const title = "Execution Team — Crescent Distance Education";

const description =
  "Meet the academic and administrative team responsible for executing the vision of Crescent Distance and Online Education.";

export const Route = createFileRoute("/execution-team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ExecutionTeamPage,
});

const cdoeTeam = [
  {
    number: "01",
    name: "Dr. W. Aisha Banu",
    role: "Professor & HOD CSE",
    image:
      "https://distance.crescent-institute.edu.in/img/execution/DR.AISHABANU.jpg",
  },
  {
    number: "02",
    name: "Dr. S. Thowseaf",
    role: "Assistant Professor / CDOE",
    secondaryRole: "Assistant Director",
    image:
      "https://distance.crescent-institute.edu.in/img/mba/people/thowseaf.jpg",
  },
];

const planningCommittee = [
  {
    number: "01",
    name: "Dr. Latha Tamilselvan",
    role: "Professor & Director",
    secondaryRole: "MIS",
    image:
      "https://distance.crescent-institute.edu.in/img/execution/DR.LATHATAMILSELVAN.jpg",
  },
  {
    number: "02",
    name: "Dr. C. Tharini",
    role: "Professor & Dean SECS",
    image:
      "https://distance.crescent-institute.edu.in/img/execution/Dr.C.Tharini.jpg",
  },
  {
    number: "03",
    name: "Dr. Sharmila Sankar",
    role: "Professor & Dean SCIMS",
    image:
      "https://distance.crescent-institute.edu.in/img/execution/DR.SHARMILASANKAR.jpg",
  },
  {
    number: "04",
    name: "Dr. Aisha Banu",
    role: "Professor & HOD CSE",
    image:
      "https://distance.crescent-institute.edu.in/img/execution/DR.AISHABANU.jpg",
  },
];

const formerDirector = {
  name: "Dr. V. Rhymend Uthariaraj",
  role: "Former Director",
  period: "2021–2023",
  image:
    "https://distance.crescent-institute.edu.in/img/execution/director.jpg",
};

function ExecutionTeamPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f4efe6] text-[#25262a]">

        {/* =====================================================
            PREMIUM HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#f4efe6]">

          {/* decorative glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/4 size-64 rounded-full bg-[#741b1b]/5 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-5 sm:px-8 lg:px-12 lg:py-7">

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
                bg-[#fffaf0]/60
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
                  Academic Operations
                </span>

                <Sparkles className="size-3 text-[#b28a3c]" />

              </div>

              <h1
                className="
                  mt-2
                  font-serif
                  text-[2.15rem]
                  font-bold
                  leading-[0.95]
                  tracking-[-0.035em]
                  text-[#25262a]
                  sm:text-[2.65rem]
                  lg:text-[3rem]
                "
              >
                Execution{" "}
                <span className="text-[#741b1b]">
                  Team
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
                The dedicated academic and administrative team working
                together to deliver a smooth, supportive and quality
                learning experience.
              </p>

            </motion.div>
          </div>

          {/* GOLD LINE */}

          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#b28a3c] to-transparent opacity-70" />

        </section>

        {/* =====================================================
            DIRECTOR FEATURE
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#111c3b]">

          {/* background accents */}

          <div className="pointer-events-none absolute -left-24 top-1/2 size-64 -translate-y-1/2 rounded-full bg-[#741b1b]/30 blur-3xl" />

          <div className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-6 sm:px-8 lg:px-12 lg:py-7">

            <div className="relative grid items-center gap-6 lg:grid-cols-[0.4fr_1fr]">

              {/* DIRECTOR */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="
                  relative
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[#b28a3c]/25
                  bg-white/[0.035]
                  p-4
                  backdrop-blur-md
                "
              >

                <div className="relative shrink-0">

                  <div
                    className="
                      absolute
                      -inset-1.5
                      rounded-full
                      border
                      border-[#b28a3c]/50
                    "
                  />

                  <div
                    className="
                      relative
                      size-[76px]
                      overflow-hidden
                      rounded-full
                      border-2
                      border-[#e4bd5b]
                      bg-[#172554]
                      shadow-[0_8px_25px_rgba(0,0,0,0.3)]
                      sm:size-[88px]
                    "
                  >
                    <img
                      src={formerDirector.image}
                      alt="Dr. A. Jaya"
                      className="h-full w-full object-cover"
                    />
                  </div>

                </div>

                <div className="min-w-0">

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
                      Director
                    </p>
                  </div>

                  <h2
                    className="
                      mt-1
                      font-serif
                      text-xl
                      font-bold
                      text-white
                      sm:text-[1.35rem]
                    "
                  >
                    Dr. A. Jaya
                  </h2>

                  <p
                    className="
                      mt-1
                      text-[7px]
                      uppercase
                      tracking-[0.12em]
                      text-white/40
                    "
                  >
                    Centre for Distance & Online Education
                  </p>

                </div>

              </motion.div>

              {/* MESSAGE */}

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="
                  relative
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  p-4
                  backdrop-blur-md
                  sm:p-5
                "
              >

                <Quote className="absolute right-4 top-4 size-6 text-[#b28a3c]/25" />

                <p
                  className="
                    max-w-3xl
                    text-[10px]
                    leading-[1.75]
                    text-white/65
                    sm:text-[11px]
                  "
                >
                  The Centre for Distance and Online Education is committed
                  to providing quality education through Online and Distance
                  mode. We understand that each student has unique needs and
                  learning styles. Our ODL and OL programmes are designed to
                  cater to all types of learners, whether you prefer to learn
                  in a traditional classroom setting or from the comfort of
                  your own home.
                </p>

                <p
                  className="
                    mt-2.5
                    max-w-3xl
                    text-[10px]
                    leading-[1.75]
                    text-white/65
                    sm:text-[11px]
                  "
                >
                  Our highly qualified and experienced faculty members are
                  dedicated to ensuring that learners receive the best
                  possible education and guidance to achieve their academic
                  and career goals. We believe education is a lifelong
                  journey and encourage every learner to actively participate
                  in the learning experience.
                </p>

              </motion.div>

            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#b28a3c]/50 to-transparent" />

        </section>

        {/* =====================================================
            CDOE TEAM
        ====================================================== */}

        <section className="relative bg-[#f4efe6]">

          <div className="mx-auto max-w-[1450px] px-5 py-7 sm:px-8 lg:px-12 lg:py-8">

            <SectionHeading
              eyebrow="CDOE Team"
              title="Academic & Support Team"
              description="Professionals supporting academic coordination and learner-focused delivery."
            />

            <TeamGrid members={cdoeTeam} />

          </div>
        </section>

        {/* =====================================================
            PLANNING COMMITTEE
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#e9e0d1]">

          <div className="pointer-events-none absolute -right-20 top-10 size-64 rounded-full bg-[#741b1b]/5 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-7 sm:px-8 lg:px-12 lg:py-8">

            <SectionHeading
              eyebrow="Planning & Monitoring Committee"
              title="Planning & Monitoring"
              description="Academic leaders contributing to planning, quality and institutional monitoring."
              dark
            />

            <TeamGrid members={planningCommittee} />

          </div>
        </section>

        {/* =====================================================
            FORMER DIRECTOR
        ====================================================== */}

        <section className="bg-[#f4efe6]">

          <div className="mx-auto max-w-[1450px] px-5 py-7 sm:px-8 lg:px-12 lg:py-8">

            <div className="mb-3 flex items-center gap-2">

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
                Former Director
              </span>

            </div>

            <motion.article
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="
                group
                relative
                flex
                items-center
                gap-4
                overflow-hidden
                rounded-2xl
                border
                border-[#cdbd9f]
                bg-gradient-to-r
                from-[#e8dfcf]
                to-[#f0e8db]
                p-4
                shadow-[0_8px_24px_rgba(74,54,30,0.07)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_30px_rgba(74,54,30,0.11)]
                sm:p-5
              "
            >

              {/* GOLD SIDE */}

              <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#b28a3c]" />

              {/* IMAGE */}

              <div className="relative ml-1 shrink-0">

                <div className="absolute -inset-1 rounded-full border border-[#b28a3c]/40" />

                <div
                  className="
                    relative
                    size-[68px]
                    overflow-hidden
                    rounded-full
                    border-2
                    border-[#f4efe6]
                    bg-[#172554]
                    shadow-md
                    sm:size-[76px]
                  "
                >
                  <img
                    src={formerDirector.image}
                    alt={formerDirector.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

              </div>

              {/* DETAILS */}

              <div className="min-w-0 flex-1">

                <p
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#741b1b]
                  "
                >
                  {formerDirector.role}
                </p>

                <h3
                  className="
                    mt-1
                    font-serif
                    text-base
                    font-bold
                    text-[#292823]
                    sm:text-lg
                  "
                >
                  {formerDirector.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#a27b30]
                  "
                >
                  {formerDirector.period}
                </p>

              </div>

              <div
                className="
                  hidden
                  size-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#741b1b]/[0.06]
                  text-[#741b1b]
                  transition-all
                  group-hover:bg-[#741b1b]
                  group-hover:text-white
                  sm:flex
                "
              >
                <ArrowUpRight className="size-3" />
              </div>

            </motion.article>

          </div>
        </section>

        {/* =====================================================
            PREMIUM FOOTER STRIP
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
                  Academic Operations
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
                People who turn vision into action.
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

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-5"
    >

      <div className="flex items-center gap-2">

        <span className="h-[2px] w-7 bg-[#b28a3c]" />

        <span
          className={`
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            ${dark ? "text-[#741b1b]" : "text-[#741b1b]"}
          `}
        >
          {eyebrow}
        </span>

      </div>

      <h2
        className={`
          mt-1.5
          font-serif
          text-[1.6rem]
          font-bold
          tracking-[-0.025em]
          ${dark ? "text-[#292823]" : "text-[#25262a]"}
          sm:text-[1.85rem]
        `}
      >
        {title}
      </h2>

      <p
        className={`
          mt-1
          max-w-xl
          text-[10px]
          leading-[1.6]
          ${dark ? "text-[#70695e]" : "text-[#77716a]"}
          sm:text-[11px]
        `}
      >
        {description}
      </p>

    </motion.div>
  );
}

/* =========================================================
   TEAM GRID
========================================================= */

function TeamGrid({
  members,
}: {
  members: {
    number: string;
    name: string;
    role: string;
    secondaryRole?: string;
    image: string;
  }[];
}) {
  return (
    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

      {members.map((member, index) => (
        <motion.article
          key={member.number + member.name}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.035,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-[#cdbd9f]
            bg-gradient-to-b
            from-[#eee6d8]
            to-[#e4dac9]
            p-4
            shadow-[0_6px_18px_rgba(71,54,29,0.06)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#b28a3c]/60
            hover:shadow-[0_15px_32px_rgba(71,54,29,0.12)]
          "
        >

          {/* TOP GOLD LINE */}

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
              right-3
              top-3
              font-serif
              text-xs
              font-bold
              text-[#b28a3c]/60
            "
          >
            {member.number}
          </span>

          {/* PHOTO */}

          <div className="flex justify-center pt-1">

            <div className="relative">

              <div
                className="
                  absolute
                  -inset-1
                  rounded-full
                  border
                  border-[#b28a3c]/40
                "
              />

              <div
                className="
                  relative
                  size-[78px]
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#f4efe6]
                  bg-[#172554]
                  shadow-[0_7px_18px_rgba(30,24,15,0.16)]
                  sm:size-[84px]
                "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-600
                    group-hover:scale-110
                  "
                />
              </div>

            </div>

          </div>

          {/* DETAILS */}

          <div className="mt-3 text-center">

            <span
              className="
                text-[7px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#a27b30]
              "
            >
              {member.number}
            </span>

            <h3
              className="
                mt-1
                font-serif
                text-[1rem]
                font-bold
                leading-[1.2]
                text-[#292823]
                sm:text-[1.05rem]
              "
            >
              {member.name}
            </h3>

            <p
              className="
                mt-1.5
                text-[9px]
                font-bold
                leading-4
                text-[#741b1b]
              "
            >
              {member.role}
            </p>

            {member.secondaryRole && (
              <p
                className="
                  mt-0.5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.08em]
                  text-[#766f64]
                "
              >
                {member.secondaryRole}
              </p>
            )}

          </div>

          {/* FOOTER */}

          <div
            className="
              mt-3
              border-t
              border-[#cdbd9f]
              pt-2.5
              text-center
            "
          >
            <span
              className="
                text-[6.5px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#968b7a]
              "
            >
              Crescent Distance Education
            </span>
          </div>

          {/* HOVER GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              -bottom-10
              left-1/2
              size-24
              -translate-x-1/2
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
      ))}

    </div>
  );
}