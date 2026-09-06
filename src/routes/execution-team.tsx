import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  GraduationCap,
  Users,
} from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

const director = {
  name: "Dr.A.Jaya",
  role: "Professor & Director",
  image: campusPhoto,
  description:
    "The Centre for Distance and Online Education committed to provide quality education through Online and Distance mode. We understand that each student has unique needs and learning styles. Our OL and ODL programs are designed to cater to all types of learners, whether you prefer to learn in a traditional classroom setting or from the comfort of your own home. Our highly qualified and experienced faculty members are dedicated to ensuring that you receive the best possible education and guidance to help you achieve your academic and career goals. We believe that education is a lifelong journey. As a director, we are committed to providing you with the necessary knowledge and skills to succeed in today's ever-changing world. We encourage you to take advantage of all the resources and opportunities available to you and to actively participate in your learning experience.",
};

const cdoeTeam = [
  {
    name: "Dr. W. Aisha Banu",
    role: "Professor & HOD CSE",
    image: campusPhoto,
    accent: "green",
  },
  {
    name: "Dr. S. Thowseaf",
    role: "Assistant Professor/CDOE",
    extra: "Assistant Director",
    image: campusPhoto,
    accent: "gold",
  },
];

const planningCommittee = [
  {
    name: "Dr. Latha Tamilselvan",
    role: "Professor & Director",
    extra: "MIS",
    image: campusPhoto,
    accent: "violet",
  },
  {
    name: "Dr. C. Tharini",
    role: "Professor & Dean SECS",
    image: campusPhoto,
    accent: "green",
  },
  {
    name: "Dr. Sharmila Sankar",
    role: "Professor & Dean SCIMS",
    image: campusPhoto,
    accent: "red",
  },
  {
    name: "Dr. Aisha Banu",
    role: "Professor & HOD CSE",
    image: campusPhoto,
    accent: "gold",
  },
];

const formerDirector = {
  name: "Dr.V.Rhymend Uthariaraj",
  role: "Former Director",
  year: "2021-2023",
  image: campusPhoto,
};

function getAccentClasses(accent: string) {
  switch (accent) {
    case "green":
      return {
        border: "border-[#3f7d58]/20",
        line: "bg-[#3f7d58]",
        badge: "bg-[#3f7d58]/10",
        icon: "text-[#3f7d58]",
      };

    case "gold":
      return {
        border: "border-[#d4af37]/25",
        line: "bg-[#d4af37]",
        badge: "bg-[#d4af37]/10",
        icon: "text-[#a58208]",
      };

    case "violet":
      return {
        border: "border-[#6b4c9a]/20",
        line: "bg-[#6b4c9a]",
        badge: "bg-[#6b4c9a]/10",
        icon: "text-[#6b4c9a]",
      };

    case "red":
      return {
        border: "border-[#8f1d1d]/20",
        line: "bg-[#8f1d1d]",
        badge: "bg-[#8f1d1d]/10",
        icon: "text-[#8f1d1d]",
      };

    default:
      return {
        border: "border-slate-200",
        line: "bg-[#d4af37]",
        badge: "bg-[#d4af37]/10",
        icon: "text-[#d4af37]",
      };
  }
}

export const Route = createFileRoute("/execution-team")({
  component: ExecutionTeamPage,
});

function ExecutionTeamPage() {
  return (
    <SiteLayout>
      <div
        style={circularFont}
        className="min-h-screen bg-[#f7f7f5] text-black"
      >
        {/* HEADER */}
        <section className="relative overflow-hidden bg-[#f6dfe5] text-black">
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#6b4c9a]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <a
                href="/about"
                className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-black/70 transition-colors hover:text-[#8f1d1d]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to About
              </a>

              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-white/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black"
              >
                <Users className="h-3 w-3" />
                Execution Team
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                Execution Team
              </h1>

              <p className="mt-1.5 max-w-2xl text-xs leading-5 text-black/70 sm:text-sm">
                Centre for Distance and Online Education
              </p>
            </motion.div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 px-5 py-4 sm:grid-cols-4 sm:px-8">
            <a
              href="#director"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-[#8f1d1d]" />
                <span className="text-xs font-semibold text-black">
                  Director
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>

            <a
              href="#cdoe-team"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-[#3f7d58]" />
                <span className="text-xs font-semibold text-black">
                  CDOE Team
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>

            <a
              href="#planning"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5 text-[#6b4c9a]" />
                <span className="text-xs font-semibold text-black">
                  Planning & Monitoring
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>

            <a
              href="#former-director"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-[#d4af37]" />
                <span className="text-xs font-semibold text-black">
                  Former Director
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>
          </div>
        </section>

        {/* MAIN */}
        <main className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-9">
          {/* DIRECTOR */}
          <motion.section
            id="director"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-7 w-1 rounded-full bg-[#8f1d1d]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
                  Leadership
                </p>
                <h2 className="text-xl font-bold text-black sm:text-2xl">
                  Director
                </h2>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#8f1d1d]/20 bg-white shadow-sm">
              <div className="grid md:grid-cols-[1fr_310px]">
                {/* CONTENT LEFT */}
                <div className="order-2 p-6 sm:p-7 md:order-1">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8f1d1d]/10">
                      <Award className="h-5 w-5 text-[#8f1d1d]" />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/50">
                        Professor & Director
                      </p>

                      <h3 className="mt-0.5 text-xl font-bold leading-6 text-black sm:text-2xl">
                        {director.name}
                      </h3>
                    </div>
                  </div>

                  <div className="my-5 h-px bg-slate-100" />

                  <p className="text-xs leading-6.5 text-black sm:text-sm sm:leading-7">
                    {director.description}
                  </p>

                  <div className="mt-5 h-1 w-12 bg-[#d4af37]" />
                </div>

                {/* PHOTO RIGHT */}
                <div className="relative order-1 h-64 overflow-hidden bg-slate-100 md:order-2 md:h-full md:min-h-[340px]">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#8f1d1d]" />
                </div>
              </div>
            </div>
          </motion.section>

          {/* CDOE TEAM */}
          <section id="cdoe-team" className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-7 w-1 rounded-full bg-[#3f7d58]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
                  Team
                </p>
                <h2 className="text-xl font-bold text-black sm:text-2xl">
                  CDOE Team
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {cdoeTeam.map((person, index) => {
                const styles = getAccentClasses(person.accent);

                return (
                  <motion.article
                    key={person.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group overflow-hidden rounded-2xl border ${styles.border} bg-white shadow-sm`}
                  >
                    <div className="grid sm:grid-cols-[155px_1fr]">
                      <div className="relative h-48 overflow-hidden bg-slate-100 sm:h-full sm:min-h-[210px]">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="h-full w-full object-cover"
                        />

                        <div
                          className={`absolute bottom-0 left-0 h-1 w-full ${styles.line}`}
                        />
                      </div>

                      <div className="p-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-black/50">
                          {person.role}
                        </p>

                        <h3 className="mt-1 text-lg font-bold leading-6 text-black">
                          {person.name}
                        </h3>

                        {person.extra && (
                          <p className="mt-1.5 text-xs font-medium text-black/70">
                            {person.extra}
                          </p>
                        )}

                        <div
                          className={`mt-4 h-0.5 w-8 ${styles.line} transition-all duration-300 group-hover:w-14`}
                        />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* PLANNING & MONITORING */}
          <section id="planning" className="mb-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-7 w-1 rounded-full bg-[#6b4c9a]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
                  Committee
                </p>
                <h2 className="text-xl font-bold text-black sm:text-2xl">
                  Planning & Monitoring Committee
                </h2>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {planningCommittee.map((person, index) => {
                const styles = getAccentClasses(person.accent);

                return (
                  <motion.article
                    key={`${person.name}-${index}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`group overflow-hidden rounded-2xl border ${styles.border} bg-white shadow-sm`}
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />

                      <div
                        className={`absolute bottom-0 left-0 h-1 w-full ${styles.line}`}
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-bold leading-5 text-black">
                        {person.name}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-black/70">
                        {person.role}
                      </p>

                      {person.extra && (
                        <p className="mt-0.5 text-xs font-medium text-black">
                          {person.extra}
                        </p>
                      )}

                      <div
                        className={`mt-3 h-0.5 w-7 ${styles.line} transition-all duration-300 group-hover:w-12`}
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          {/* FORMER DIRECTOR */}
          <motion.section
            id="former-director"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-7 w-1 rounded-full bg-[#d4af37]" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/50">
                  Previous Leadership
                </p>
                <h2 className="text-xl font-bold text-black sm:text-2xl">
                  Former Director
                </h2>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-white shadow-sm">
              <div className="grid sm:grid-cols-[190px_1fr]">
                <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-full sm:min-h-[210px]">
                  <img
                    src={formerDirector.image}
                    alt={formerDirector.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute bottom-0 left-0 h-1 w-full bg-[#d4af37]" />
                </div>

                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/50">
                    {formerDirector.role}
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-black">
                    {formerDirector.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-black">
                    {formerDirector.year}
                  </p>

                  <div className="mt-4 h-0.5 w-9 bg-[#d4af37]" />
                </div>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </SiteLayout>
  );
}