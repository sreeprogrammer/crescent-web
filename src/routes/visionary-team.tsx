import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const title = "Visionary Team — Leadership | Crescent Distance Education";

const description =
  "Meet the visionary leadership team behind Crescent Institute of Science and Technology's Distance and Online Education initiative.";

export const Route = createFileRoute("/visionary-team")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VisionaryTeamPage,
});

const leaders = [
  {
    number: "01",
    name: "Alhaj Dr. B.S.Abdur Rahman",
    role: "Founder",
    image:
      "https://distance.crescent-institute.edu.in/img/visionary/chancellor.jpg",
    quote:
      "A visionary who always trusted that education can be the crucial factor in improving the socio economic status of people, went ahead in proving it by establishing many educational organizations for the poor and women. He Founded the Seethakathi Trust, Est. 1967 and All India Islamic Foundation (AIIF) Est.1979 to ensure the poor and deprived are benefited in the form of education.",
  },
  {
    number: "02",
    name: "Mr. BSA Arif Buhary Rahman",
    role: "President",
    image:
      "https://distance.crescent-institute.edu.in/img/visionary/Chancellor1.jpg",
    quote:
      "The educational institutions have a great responsibility of creating holistic human beings, who have learned enough skills to earn, life ethics and social responsibility. The initiative of offering programmes through online and distance mode will help us overcome the barrier of traditional learning and spread our wings across the globe.",
  },
  {
    number: "03",
    name: "Mrs. Qurrath Jameela",
    role: "Chancellor",
    image:
      "https://distance.crescent-institute.edu.in/img/visionary/prochancellor.png",
    quote:
      "B. S. Abdur Rahman Crescent Institute of Science and Technology, an Institute with a profound legacy is committed to futuristic education, women empowerment and societal upliftment. Embracing the digital age, this renowned institution aims to provide holistic education.",
  },
  {
    number: "04",
    name: "Mr. Abdul Qadir Abdul Rahman Buhari",
    role: "Pro-Chancellor",
    image:
      "https://distance.crescent-institute.edu.in/img/visionary/VC-1.jpg",
    quote:
      "The physical presence of students in a classroom is not the only way to learn anymore. Online learning has created a disruption in today's education revolution. The Online and Distance education programmes are a boon to the people who would upskill and always be relevant in the Industry.",
  },
  {
    number: "05",
    name: "Dr. A. Peer Mohamed",
    role: "Vice-Chancellor i/c",
    image:
      "https://distance.crescent-institute.edu.in/img/visionary/additional-registrar.jpg",
    quote:
      "An educationist for more than three decades, I believe that there is a big need for adapting to new technologies. Online Distance education gives learners the advantage of upgrading their skill set and qualification while providing greater flexibility to learn whenever and wherever they are.",
  },
  {
    number: "06",
    name: "Dr. N. Raja Hussain",
    role: "Registrar",
    image:
      "https://distance.crescent-institute.edu.in/img/visionary/registrar.jpg",
    quote:
      "The introduction of flexible learning technologies and online education is vital to modern institutions. The foresight of the institution in starting online and distance education is an exemplary achievement, supported by a strong team and dedicated faculty.",
  },
];

function VisionaryTeamPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f4efe6] text-[#25262a]">

        {/* =====================================================
            PREMIUM HERO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#f4efe6]">

          {/* Decorative Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/4 size-64 rounded-full bg-[#741b1b]/5 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-5 sm:px-8 lg:px-12 lg:py-7">

            {/* Back */}

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
                  Leadership
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
                Visionary{" "}
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
                The people whose vision, leadership and commitment continue
                to shape the future of accessible, flexible and quality
                education.
              </p>

            </motion.div>

          </div>

          {/* Gold divider */}

          <div className="h-[2px] bg-gradient-to-r from-transparent via-[#b28a3c] to-transparent opacity-70" />

        </section>

        {/* =====================================================
            LEADERSHIP INTRO
        ====================================================== */}

        <section className="relative overflow-hidden bg-[#111c3b]">

          <div className="pointer-events-none absolute -left-24 top-1/2 size-64 -translate-y-1/2 rounded-full bg-[#741b1b]/30 blur-3xl" />

          <div className="pointer-events-none absolute -right-20 top-0 size-72 rounded-full bg-[#b28a3c]/10 blur-3xl" />

          <div className="mx-auto max-w-[1450px] px-5 py-5 sm:px-8 lg:px-12 lg:py-6">

            <div className="relative flex items-center gap-4">

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
                <Sparkles className="size-4" />
              </div>

              <div>

                <p
                  className="
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#e4bd5b]
                  "
                >
                  Leadership & Legacy
                </p>

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
                  Shaping the future through vision.
                </h2>

              </div>

            </div>

          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-[#b28a3c]/50 to-transparent" />

        </section>

        {/* =====================================================
            LEADERS
        ====================================================== */}

        <section className="relative bg-[#f4efe6]">

          <div className="mx-auto max-w-[1450px] px-5 py-7 sm:px-8 lg:px-12 lg:py-8">

            <div className="mb-5 flex items-end justify-between gap-4">

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
                    Distinguished Leadership
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
                  Our Visionaries
                </h2>

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
                06 Leaders
              </span>

            </div>

            <div className="grid gap-4 lg:grid-cols-2">

              {leaders.map((leader, index) => (
                <motion.article
                  key={leader.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.035,
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
                    p-4
                    shadow-[0_7px_20px_rgba(71,54,29,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#b28a3c]/60
                    hover:shadow-[0_16px_32px_rgba(71,54,29,0.12)]
                    sm:p-5
                  "
                >

                  {/* Top accent */}

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

                  {/* Number */}

                  <span
                    className="
                      absolute
                      right-4
                      top-3
                      font-serif
                      text-sm
                      font-bold
                      text-[#b28a3c]/60
                    "
                  >
                    {leader.number}
                  </span>

                  <div className="flex gap-4">

                    {/* IMAGE */}

                    <div className="relative shrink-0">

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
                          size-[82px]
                          overflow-hidden
                          rounded-full
                          border-2
                          border-[#f4efe6]
                          bg-[#172554]
                          shadow-[0_8px_20px_rgba(40,29,14,0.18)]
                          sm:size-[92px]
                        "
                      >
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            group-hover:scale-110
                          "
                        />
                      </div>

                    </div>

                    {/* DETAILS */}

                    <div className="min-w-0 flex-1">

                      <p
                        className="
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#741b1b]
                        "
                      >
                        {leader.role}
                      </p>

                      <h3
                        className="
                          mt-1
                          pr-6
                          font-serif
                          text-[1.05rem]
                          font-bold
                          leading-[1.15]
                          text-[#292823]
                          sm:text-[1.15rem]
                        "
                      >
                        {leader.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2">

                        <span className="h-px w-5 bg-[#b28a3c]" />

                        <span
                          className="
                            text-[6.5px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-[#9a896b]
                          "
                        >
                          Crescent Leadership
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* QUOTE */}

                  <div
                    className="
                      mt-4
                      border-t
                      border-[#cdbd9f]
                      pt-3
                    "
                  >

                    <div className="flex gap-2.5">

                      <Quote
                        className="
                          mt-0.5
                          size-4
                          shrink-0
                          text-[#b28a3c]
                        "
                      />

                      <p
                        className="
                          text-[9px]
                          leading-[1.75]
                          text-[#706a61]
                          sm:text-[10px]
                        "
                      >
                        {leader.quote}
                      </p>

                    </div>

                  </div>

                  {/* Bottom */}

                  <div className="mt-3 flex items-center justify-between">

                    <span
                      className="
                        text-[6.5px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#9a9185]
                      "
                    >
                      Crescent Distance Education
                    </span>

                    <span
                      className="
                        flex
                        size-6
                        items-center
                        justify-center
                        rounded-full
                        bg-[#741b1b]/[0.06]
                        text-[#741b1b]
                        transition-all
                        duration-300
                        group-hover:bg-[#741b1b]
                        group-hover:text-white
                      "
                    >
                      <ArrowUpRight className="size-3" />
                    </span>

                  </div>

                  {/* Hover glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-10
                      right-5
                      size-24
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

          </div>

        </section>

        {/* =====================================================
            BOTTOM STRIP
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
                  Leadership
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
                Building a future through education.
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