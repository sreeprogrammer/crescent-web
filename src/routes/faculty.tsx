import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Mail,
  Users,
} from "lucide-react";

// Faculty Images
import thowseaf from "@/assets/thowseaf.jpg";
import agalya from "@/assets/agalya.jpg";
import jeslin from "@/assets/jeslin.jpg";
import maheshwari from "@/assets/maheshwari.jpg";
import manjula from "@/assets/manjula.jpg";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

const faculty = {
  mba: [
    {
      name: "Dr. S. Thowseaf",
      role: "Assistant Professor",
      image: thowseaf,
    },
    {
      name: "Dr. V. Agalya",
      role: "Assistant Professor",
      image: agalya,
    },
  ],

  mca: [
    {
      name: "Dr. E. Jeslin Renjith",
      role: "Assistant Professor",
      image: jeslin,
    },
    {
      name: "Dr. P. Maheswari",
      role: "Assistant Professor",
      image: maheshwari,
    },
    {
      name: "Mrs. S. Manjula",
      role: "Assistant Professor",
      image: manjula,
    },
  ],
};

function FacultyPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f7f5f1]">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-[#ddd8cf] bg-gradient-to-br from-[#fffdf9] via-[#f8f5ef] to-[#eef1f7]">

          {/* Decorative shapes */}
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#7f1d1d]/10 blur-3xl" />
          <div className="absolute -bottom-20 left-10 size-72 rounded-full bg-[#172554]/10 blur-3xl" />
          <div className="absolute right-[30%] top-[35%] size-24 rounded-full bg-[#b8860b]/10 blur-2xl" />

          <div className="relative mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12 lg:py-11">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 flex items-center gap-2.5"
            >
              <span className="h-[2px] w-8 bg-[#b8860b]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7f1d1d]">
                CDOE • Faculty
              </span>
            </motion.div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Icon */}
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#7f1d1d] text-white shadow-md">
                  <GraduationCap className="size-5" />
                </div>

                <h1 className="max-w-2xl font-serif text-3xl font-bold leading-tight tracking-tight text-[#25262a] sm:text-4xl lg:text-5xl">
                  Our{" "}
                  <span className="text-[#7f1d1d]">
                    Faculty Team
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-xs leading-6 text-[#65666b] sm:text-sm">
                  Meet the experienced academic professionals supporting
                  Crescent Distance and Online Education across MBA and MCA
                  programmes.
                </p>

                {/* Back Button */}
                <div className="mt-6">
                  <Link
                    to="/cdoe-team"
                    className="inline-flex items-center gap-2 rounded-full bg-[#172554] px-4 py-2 text-[10px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7f1d1d]"
                  >
                    <ArrowLeft className="size-3.5" />
                    Back to CDOE Team
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT INFO CARD */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="rounded-[22px] border border-[#dedbd4] bg-white/90 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.07)] backdrop-blur"
              >
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#b8860b]/10 text-[#b8860b]">
                    <Users className="size-4" />
                  </div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b8860b]">
                    Academic Excellence
                  </p>
                </div>

                <h2 className="mt-3 font-serif text-xl font-bold leading-tight text-[#25262a]">
                  Experienced faculty for learner success.
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-[#68696d]">
                  Our faculty members support teaching, academic coordination
                  and student learning across our programmes.
                </p>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-[#ead6d6] bg-[#fff5f5] p-3">
                    <p className="font-serif text-xl font-bold text-[#7f1d1d]">
                      02
                    </p>

                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-[#777]">
                      MBA Faculty
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#d9dfef] bg-[#f3f5fb] p-3">
                    <p className="font-serif text-xl font-bold text-[#172554]">
                      03
                    </p>

                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-[#777]">
                      MCA Faculty
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= MBA ================= */}
        <section className="bg-[#f2f0ec]">
          <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12 lg:py-10">

            {/* Section Header */}
            <div className="mb-5 flex items-end justify-between border-b border-[#d8d4cd] pb-3">

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b8860b]">
                  Programme Faculty
                </p>

                <h2 className="mt-1 font-serif text-2xl font-bold text-[#25262a] sm:text-3xl">
                  Faculty — MBA
                </h2>
              </div>

              <span className="hidden text-[10px] font-medium text-[#777] sm:block">
                02 Faculty Members
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {faculty.mba.map((member, index) => (
                <FacultyCard
                  key={member.name}
                  member={member}
                  index={index}
                  accent="#7f1d1d"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= MCA ================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12 lg:py-10">

            {/* Section Header */}
            <div className="mb-5 flex items-end justify-between border-b border-[#e1ded8] pb-3">

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#172554]">
                  Programme Faculty
                </p>

                <h2 className="mt-1 font-serif text-2xl font-bold text-[#25262a] sm:text-3xl">
                  Faculty — MCA
                </h2>
              </div>

              <span className="hidden text-[10px] font-medium text-[#777] sm:block">
                03 Faculty Members
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {faculty.mca.map((member, index) => (
                <FacultyCard
                  key={member.name}
                  member={member}
                  index={index}
                  accent="#172554"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-[#3f4146]">
          <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 lg:px-12">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  CDOE Faculty
                </p>

                <h2 className="mt-1 font-serif text-lg font-bold text-white sm:text-xl">
                  Dedicated faculty for quality distance education.
                </h2>
              </div>

              <div className="hidden size-10 items-center justify-center rounded-full bg-white/10 text-[#e4bd5b] sm:flex">
                <GraduationCap className="size-5" />
              </div>

            </div>
          </div>
        </section>

      </main>
    </SiteLayout>
  );
}

/* =====================================================
   FACULTY CARD
===================================================== */

function FacultyCard({
  member,
  index,
  accent,
}: {
  member: {
    name: string;
    role: string;
    image: string;
  };
  index: number;
  accent: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-[20px] border border-[#ddd9d2] bg-white shadow-[0_7px_22px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.10)]"
    >

      {/* TOP COLOUR LINE */}
      <div
        className="absolute left-0 right-0 top-0 z-20 h-1"
        style={{ backgroundColor: accent }}
      />

      {/* ================= PHOTO ================= */}
      <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-[#f0eee9] sm:h-[285px]">

        {/* Decorative background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at top right, ${accent}, transparent 60%)`,
          }}
        />

        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-4">

          <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/75">
            Faculty Member
          </p>

          <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-white sm:text-xl">
            {member.name}
          </h3>

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4">

        <div className="flex items-center gap-2.5">

          <div
            className="flex size-8 shrink-0 items-center justify-center rounded-lg"
            style={{
              backgroundColor: `${accent}12`,
              color: accent,
            }}
          >
            <GraduationCap className="size-3.5" />
          </div>

          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#8a8a8a]">
              Designation
            </p>

            <p className="mt-0.5 text-[11px] font-semibold text-[#292a2e]">
              {member.role}
            </p>
          </div>

        </div>

        {/* Bottom Info */}
        <div className="mt-4 flex items-center justify-between border-t border-[#ece9e4] pt-3">

          <span
            className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ color: accent }}
          >
            <Mail className="size-3" />
            Faculty
          </span>

          <span
            className="rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: `${accent}10`,
              color: accent,
            }}
          >
            CDOE
          </span>

        </div>
      </div>
    </motion.article>
  );
}