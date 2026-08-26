import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Headphones,
  Laptop,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

// Local technical team images
import merline from "@/assets/merline.jpg";
import mohammed from "@/assets/mohammed.jpg";
import rooban from "@/assets/rooban.jpg";
import latha from "@/assets/latha.jpg";
import sasi from "@/assets/sasi.jpg";
import nizam from "@/assets/nizam.jpg";
import vignesh from "@/assets/vignesh.jpg";
import deepak from "@/assets/deepak.jpg";

export const Route = createFileRoute("/technical")({
  component: TechnicalPage,
});

const technicalTeam = [
  {
    name: "Mrs. P. Paul Merline",
    role: "Technical Manager",
    department: "LMS & Data Management",
    image: merline,
    accent: "#7f1d1d",
  },
  {
    name: "Mr. A. Mohamed Meerasa Mujahith",
    role: "Technical Assistant",
    department: "LMS",
    image: mohammed,
    accent: "#172554",
  },
  {
    name: "Mr. K. Rooban",
    role: "Technical Assistant",
    department: "Audio - Video Editing",
    image: rooban,
    accent: "#7f1d1d",
  },
  {
    name: "Mrs. R. Latha",
    role: "Technical Assistant",
    department: "Audio - Video Editing",
    image: latha,
    accent: "#172554",
  },
  {
    name: "Mr. J. Shasi Kiran",
    role: "Technical Assistant",
    department: "Audio - Video Editing",
    image: sasi,
    accent: "#7f1d1d",
  },
  {
    name: "Mr. Nizamudeen",
    role: "Technical Assistant",
    department: "Audio - Video Editing",
    image: nizam,
    accent: "#172554",
  },
  {
    name: "Mr. D. Vignesh",
    role: "Technical Assistant",
    department: "Audio - Video Editing",
    image: vignesh,
    accent: "#7f1d1d",
  },
  {
    name: "Mr. R. Deepak",
    role: "Technical Assistant",
    department: "Audio - Video Editing",
    image: deepak,
    accent: "#172554",
  },
];

function TechnicalPage() {
  return (
    <SiteLayout>
      <main className="min-h-screen overflow-hidden bg-[#f7f5f1]">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden border-b border-[#ddd8cf] bg-gradient-to-br from-[#fffdf9] via-[#f8f5ef] to-[#eef1f7]">

          {/* Decorative Shapes */}
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[#172554]/10 blur-3xl" />
          <div className="absolute -bottom-20 left-10 size-72 rounded-full bg-[#7f1d1d]/10 blur-3xl" />
          <div className="absolute right-[30%] top-[35%] size-24 rounded-full bg-[#b8860b]/10 blur-2xl" />

          <div className="relative mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12 lg:py-11">

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 flex items-center gap-2.5"
            >
              <span className="h-[2px] w-8 bg-[#b8860b]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#172554]">
                CDOE • Technical Team
              </span>
            </motion.div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">

              {/* ================= LEFT ================= */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >

                {/* Icon */}
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-[#172554] text-white shadow-md">
                  <Settings className="size-5" />
                </div>

                <h1 className="max-w-2xl font-serif text-3xl font-bold leading-tight tracking-tight text-[#25262a] sm:text-4xl lg:text-5xl">
                  Our{" "}
                  <span className="text-[#172554]">
                    Technical Team
                  </span>
                </h1>

                <p className="mt-4 max-w-xl text-xs leading-6 text-[#65666b] sm:text-sm">
                  Meet the technical professionals supporting LMS operations,
                  data management, digital learning and audio-video content
                  services at Crescent Distance and Online Education.
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

              {/* ================= RIGHT CARD ================= */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="rounded-[22px] border border-[#dedbd4] bg-white/90 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.07)] backdrop-blur"
              >

                {/* Icon */}
                <div className="flex size-8 items-center justify-center rounded-lg bg-[#172554]/10 text-[#172554]">
                  <ShieldCheck className="size-4" />
                </div>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-[#b8860b]">
                  Digital Support
                </p>

                <h2 className="mt-2 font-serif text-xl font-bold leading-tight text-[#25262a]">
                  Technology that supports every learner.
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-[#68696d]">
                  Our technical team helps maintain the digital systems,
                  learning platforms and media services that support online
                  education.
                </p>

                {/* Support Types */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-[#d9dfef] bg-[#f3f5fb] p-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#172554]/10 text-[#172554]">
                      <Laptop className="size-4" />
                    </div>

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-[#666]">
                      LMS
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#ead6d6] bg-[#fff5f5] p-3">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-[#7f1d1d]/10 text-[#7f1d1d]">
                      <Headphones className="size-4" />
                    </div>

                    <p className="mt-2 text-[9px] font-bold uppercase tracking-wider text-[#666]">
                      Media
                    </p>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SECTION TITLE ================= */}
        <section className="bg-[#172554]">
          <div className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8 lg:px-12">

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
              Meet Our Team
            </p>

            <div className="mt-1 flex items-center justify-between gap-4">

              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Technical Team
              </h2>

              <span className="hidden rounded-full bg-white/10 px-3 py-1.5 text-[9px] font-semibold text-white/75 sm:inline-flex">
                08 Team Members
              </span>

            </div>
          </div>
        </section>

        {/* ================= TEAM GRID ================= */}
        <section className="bg-[#f2f0ec]">
          <div className="mx-auto max-w-[1400px] px-5 py-9 sm:px-8 lg:px-12 lg:py-10">

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              {technicalTeam.map((member, index) => (
                <TechnicalCard
                  key={member.name}
                  member={member}
                  index={index}
                />
              ))}

            </div>
          </div>
        </section>

        {/* ================= BOTTOM ================= */}
        <section className="bg-[#3f4146]">
          <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 lg:px-12">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e4bd5b]">
                  CDOE Technical Team
                </p>

                <h2 className="mt-1 font-serif text-lg font-bold text-white sm:text-xl">
                  Reliable technology. Seamless learning.
                </h2>
              </div>

              <div className="hidden size-10 items-center justify-center rounded-full bg-white/10 text-[#e4bd5b] sm:flex">
                <Settings className="size-5" />
              </div>

            </div>
          </div>
        </section>

      </main>
    </SiteLayout>
  );
}

/* =====================================================
   TECHNICAL CARD
===================================================== */

function TechnicalCard({
  member,
  index,
}: {
  member: {
    name: string;
    role: string;
    department: string;
    image: string;
    accent: string;
  };
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="group relative overflow-hidden rounded-[20px] border border-[#ddd9d2] bg-white shadow-[0_7px_22px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(0,0,0,0.10)]"
    >

      {/* TOP ACCENT */}
      <div
        className="absolute left-0 right-0 top-0 z-20 h-1"
        style={{ backgroundColor: member.accent }}
      />

      {/* ================= PHOTO ================= */}
      <div className="relative flex h-[270px] items-center justify-center overflow-hidden bg-[#efede8]">

        {/* Colour Background Glow */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(circle at top right, ${member.accent}, transparent 60%)`,
          }}
        />

        {/* Photo */}
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="relative z-10 h-full w-full object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Bottom Gradient */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Name */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-4">

          <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-white/75">
            Technical Team
          </p>

          <h3 className="mt-1 font-serif text-lg font-bold leading-tight text-white sm:text-xl">
            {member.name}
          </h3>

        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4">

        {/* Role */}
        <div className="flex items-center gap-2">

          <div
            className="flex size-8 shrink-0 items-center justify-center rounded-lg"
            style={{
              backgroundColor: `${member.accent}12`,
              color: member.accent,
            }}
          >
            <Settings className="size-3.5" />
          </div>

          <div>
            <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#8a8a8a]">
              Role
            </p>

            <p
              className="mt-0.5 text-[11px] font-semibold"
              style={{ color: member.accent }}
            >
              {member.role}
            </p>
          </div>

        </div>

        {/* Department */}
        <div className="mt-3 rounded-xl bg-[#f8f7f4] px-3 py-2.5">

          <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#999]">
            Department
          </p>

          <p className="mt-1 min-h-[32px] text-[11px] font-semibold leading-4 text-[#303136]">
            {member.department}
          </p>

        </div>

        {/* Bottom */}
        <div className="mt-3 flex items-center justify-between border-t border-[#ece9e4] pt-3">

          <span
            className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider"
            style={{ color: member.accent }}
          >
            <Laptop className="size-3" />
            CDOE
          </span>

          <span
            className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: `${member.accent}10`,
              color: member.accent,
            }}
          >
            <Users className="size-3" />
            Team
          </span>

        </div>
      </div>
    </motion.article>
  );
}