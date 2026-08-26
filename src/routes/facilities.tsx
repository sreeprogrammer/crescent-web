import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Database,
  MonitorPlay,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const title = "Facilities — Centre for Online Education";

const description =
  "Explore the facilities and digital infrastructure supporting Crescent Centre for Online Education.";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#ebe9e4]">

        {/* =========================================================
            HERO
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#172554]">
          {/* decorative background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 -top-40 size-[430px] rounded-full bg-[#7f1d1d]/30 blur-3xl" />

            <div className="absolute -bottom-40 -left-32 size-[380px] rounded-full bg-[#b8860b]/10 blur-3xl" />

            <div className="absolute right-[16%] top-[25%] size-1.5 rounded-full bg-[#e4bd5b]" />

            <div className="absolute right-[30%] top-[62%] size-1 rounded-full bg-white/30" />
          </div>

          <div className="relative mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-12 lg:py-9">

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* eyebrow */}

              <div className="mb-3 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#e4bd5b]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  Learning Infrastructure
                </span>
              </div>

              {/* title */}

              <div className="flex items-center justify-between gap-6">

                <div>
                  <h1 className="font-serif text-[2.5rem] font-bold leading-none tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.4rem]">
                    Our{" "}
                    <span className="text-[#e4bd5b]">
                      Facilities
                    </span>
                  </h1>

                  <p className="mt-3 max-w-2xl text-[12px] leading-5 text-white/60 sm:text-sm">
                    Technology-enabled infrastructure designed to support
                    flexible, secure and engaging online education.
                  </p>
                </div>

                {/* icon */}

                <div className="hidden size-20 shrink-0 items-center justify-center rounded-full border border-[#e4bd5b]/30 bg-white/[0.04] lg:flex">
                  <div className="flex size-12 items-center justify-center rounded-full bg-[#e4bd5b] text-[#172554] shadow-lg">
                    <Sparkles className="size-5" />
                  </div>
                </div>

              </div>

              {/* stats */}

              <div className="mt-6 grid max-w-xl grid-cols-3 border-t border-white/10 pt-3">

                <div className="border-r border-white/10">
                  <p className="font-serif text-lg font-bold text-[#e4bd5b]">
                    01
                  </p>

                  <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Centre
                  </p>
                </div>

                <div className="border-r border-white/10 pl-4">
                  <p className="font-serif text-lg font-bold text-white">
                    24/7
                  </p>

                  <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Digital Support
                  </p>
                </div>

                <div className="pl-4">
                  <p className="font-serif text-lg font-bold text-[#e4bd5b]">
                    100%
                  </p>

                  <p className="mt-0.5 text-[7px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Digital Focus
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================
            FACILITIES NAVIGATION
        ========================================================== */}

        <section className="sticky top-0 z-30 border-b border-[#d4d1cb] bg-[#ebe9e4]/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1500px] overflow-x-auto px-5 sm:px-8 lg:px-12">

            <nav className="flex min-w-max items-center gap-1 py-2">

              <Link
                to="/facilities"
                className="rounded-full bg-[#7f1d1d] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-white shadow-sm"
              >
                Facilities
              </Link>

              <Link
                to="/studio"
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#66686d] transition-all hover:bg-[#172554] hover:text-white"
              >
                Studio
              </Link>

              <Link
                to="/lms"
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#66686d] transition-all hover:bg-[#172554] hover:text-white"
              >
                LMS
              </Link>

              <Link
                to="/datacenter"
                className="rounded-full px-4 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#66686d] transition-all hover:bg-[#172554] hover:text-white"
              >
                Datacenter
              </Link>

            </nav>
          </div>
        </section>

        {/* =========================================================
            OVERVIEW
        ========================================================== */}

        <section className="bg-[#ebe9e4]">
          <div className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-12 lg:py-8">

            {/* section heading */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#b8860b]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#7f1d1d]">
                  Facilities Overview
                </span>
              </div>

              <h2 className="mt-1.5 font-serif text-2xl font-bold tracking-[-0.025em] text-[#25262a] sm:text-[1.8rem]">
                Centre for Online Education
              </h2>
            </motion.div>

            {/* main card */}

            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-[22px] border border-[#d3d0ca] bg-[#f6f4ef] shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            >

              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                {/* IMAGE */}

                <div className="relative min-h-[270px] overflow-hidden bg-[#172554] sm:min-h-[320px] lg:min-h-[390px]">

                  <img
                    src="https://distance.crescent-institute.edu.in/img/facilities/overview.jpeg"
                    alt="Centre for Online Education"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/15 to-transparent" />

                  <div className="absolute left-4 top-4 flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/90 font-serif text-xs font-bold text-[#7f1d1d] shadow-lg">
                    01
                  </div>

                  <div className="absolute bottom-5 left-5 right-5">

                    <div className="mb-1.5 flex items-center gap-2">
                      <ShieldCheck className="size-3 text-[#e4bd5b]" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#e4bd5b]">
                        Online Education
                      </span>
                    </div>

                    <h3 className="max-w-md font-serif text-xl font-bold leading-tight text-white sm:text-2xl">
                      Flexible learning powered by modern infrastructure.
                    </h3>

                  </div>
                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-center bg-[#f6f4ef] p-6 sm:p-7 lg:p-8">

                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-3.5 text-[#7f1d1d]" />

                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#7f1d1d]">
                      UGC OL Regulations 2020
                    </span>
                  </div>

                  <h3 className="mt-2.5 font-serif text-xl font-bold leading-tight text-[#25262a] sm:text-2xl">
                    Centre for Online Education
                  </h3>

                  <p className="mt-3 text-[12px] leading-6 text-[#5f6166]">
                    B.S. Abdur Rahman Crescent Institute of Science and
                    Technology is elated to offer online MBA/MCA learning
                    programs that adhere to UGC OL Regulations 2020 and align
                    with our institution's values and objectives.
                  </p>

                  <p className="mt-3 text-[12px] leading-6 text-[#5f6166]">
                    Our courses feature the same curriculum as our traditional
                    MBA/MCA program, but delivered through state-of-the-art IT
                    infrastructure and web-based technologies to meet the
                    needs of working professionals and freshers in a flexible
                    learning environment.
                  </p>

                  {/* TAGS */}

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7f1d1d] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-white">
                      <BookOpen className="size-2.5" />
                      Flexible Learning
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#172554] px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.1em] text-white">
                      <MonitorPlay className="size-2.5" />
                      Digital Learning
                    </span>

                  </div>

                </div>
              </div>

              {/* TECHNOLOGY */}

              <div className="border-t border-[#d9d6d0] bg-[#e9e7e1] p-5 sm:p-7 lg:p-8">

                <div className="grid gap-4 lg:grid-cols-3">

                  {/* LMS */}

                  <FacilityCard
                    number="01"
                    title="Learning Management System"
                    icon={MonitorPlay}
                    accent="#172554"
                  >
                    Our cutting-edge LMS delivers unmatched customizability
                    for individual learners, powerful analytics to track
                    progress and identify areas for improvement, and versatile
                    instructional materials to accommodate different learning
                    styles.

                    <br />
                    <br />

                    With seamless accessibility and collaborative features,
                    our LMS fosters teamwork and peer-to-peer interaction to
                    improve engagement and motivation.
                  </FacilityCard>

                  {/* STUDIO */}

                  <FacilityCard
                    number="02"
                    title="In-house Studio"
                    icon={Sparkles}
                    accent="#7f1d1d"
                  >
                    Our in-house studio produces high-quality educational
                    content tailored to the unique needs and goals of our
                    institution.

                    <br />
                    <br />

                    With professional quality, interactivity,
                    cost-effectiveness and confidentiality, the studio
                    delivers consistent and timely educational materials that
                    enhance brand identity and student engagement.
                  </FacilityCard>

                  {/* DATA CENTER */}

                  <FacilityCard
                    number="03"
                    title="Dedicated Data Center"
                    icon={Database}
                    accent="#b8860b"
                  >
                    Our dedicated data center and server provide lightning-fast
                    speed, robust security, scalability, customizability and
                    reliability.

                    <br />
                    <br />

                    With 24/7 support, it ensures the safety and privacy of
                    sensitive educational data while meeting the evolving
                    demands of our online education department.
                  </FacilityCard>

                </div>

                {/* FINAL STATEMENT */}

                <div className="mt-4 rounded-[18px] border border-[#26345b] bg-[#172554] px-5 py-4 sm:px-6">

                  <div className="flex items-center gap-3">

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#e4bd5b] text-[#172554]">
                      <Sparkles className="size-4" />
                    </div>

                    <p className="font-serif text-[12px] font-bold leading-5 text-white sm:text-sm">
                      At B.S. Abdur Rahman Crescent Institute of Science and
                      Technology, we're committed to delivering exceptional
                      online learning experiences that exceed expectations
                      and empower the next generation of leaders.
                    </p>

                  </div>

                </div>

              </div>
            </motion.article>

            {/* =====================================================
                QUICK LINKS
            ====================================================== */}

            <div className="mt-4 grid gap-3 sm:grid-cols-3">

              <QuickLink
                to="/studio"
                title="Studio"
                icon={Sparkles}
                accent="#7f1d1d"
              />

              <QuickLink
                to="/lms"
                title="LMS"
                icon={MonitorPlay}
                accent="#172554"
              />

              <QuickLink
                to="/datacenter"
                title="Datacenter"
                icon={Database}
                accent="#b8860b"
              />

            </div>

          </div>
        </section>

        {/* =========================================================
            BOTTOM CTA
        ========================================================== */}

        <section className="relative overflow-hidden bg-[#3f4146]">

          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[#7f1d1d]/20" />

          <div className="relative mx-auto flex max-w-[1500px] items-center justify-between gap-5 px-5 py-6 sm:px-8 lg:px-12">

            <div>

              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#e4bd5b]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  Explore Facilities
                </span>
              </div>

              <h2 className="mt-1.5 max-w-3xl font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                Discover the technology behind the Crescent online learning
                experience.
              </h2>

            </div>

            <Link
              to="/studio"
              className="hidden shrink-0 items-center gap-2 rounded-full bg-[#e4bd5b] px-4 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#172554] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:inline-flex"
            >
              Explore Studio
              <ArrowUpRight className="size-3.5" />
            </Link>

          </div>
        </section>

      </main>
    </SiteLayout>
  );
}

/* =========================================================
   FACILITY CARD
========================================================= */

function FacilityCard({
  number,
  title,
  icon: Icon,
  accent,
  children,
}: {
  number: string;
  title: string;
  icon: typeof MonitorPlay;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.45 }}
      className="group relative overflow-hidden rounded-[18px] border border-[#d4d1ca] bg-[#f6f4ef] p-5 shadow-[0_5px_18px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.08)]"
    >

      {/* top accent */}

      <div
        className="absolute left-0 right-0 top-0 h-[3px]"
        style={{ backgroundColor: accent }}
      />

      {/* icon + number */}

      <div className="flex items-center justify-between">

        <div
          className="flex size-9 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${accent}12`,
          }}
        >
          <Icon
            className="size-4"
            style={{ color: accent }}
          />
        </div>

        <span
          className="font-serif text-lg font-bold"
          style={{ color: accent }}
        >
          {number}
        </span>

      </div>

      {/* title */}

      <h4 className="mt-4 font-serif text-base font-bold leading-tight text-[#25262a]">
        {title}
      </h4>

      {/* content */}

      <p className="mt-2 text-[10px] leading-[1.7] text-[#66686d]">
        {children}
      </p>

      {/* footer */}

      <div className="mt-4 border-t border-[#ddd9d2] pt-3">
        <span
          className="text-[7px] font-bold uppercase tracking-[0.15em]"
          style={{ color: accent }}
        >
          Crescent Distance Education
        </span>
      </div>

    </motion.article>
  );
}

/* =========================================================
   QUICK LINK
========================================================= */

function QuickLink({
  to,
  title,
  icon: Icon,
  accent,
}: {
  to: string;
  title: string;
  icon: typeof Sparkles;
  accent: string;
}) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between rounded-[16px] border border-[#d3d0ca] bg-[#f6f4ef] p-3.5 shadow-[0_4px_15px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >

      <div className="flex items-center gap-3">

        <div
          className="flex size-8 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${accent}12`,
          }}
        >
          <Icon
            className="size-3.5"
            style={{ color: accent }}
          />
        </div>

        <div>
          <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#999]">
            Explore
          </p>

          <p className="font-serif text-sm font-bold text-[#25262a]">
            {title}
          </p>
        </div>

      </div>

      <ArrowUpRight
        className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        style={{ color: accent }}
      />

    </Link>
  );
}