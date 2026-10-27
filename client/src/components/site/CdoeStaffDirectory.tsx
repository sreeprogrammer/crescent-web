import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { facultyProfiles } from "@/data/facultyProfiles";
import { circularFont } from "@/lib/fonts";

import deepakPhoto from "@/assets/deepak.jpeg";
import lathaPhoto from "@/assets/latha.jpeg";
import meerasaPhoto from "@/assets/meerasa.jpeg";
import merlinePhoto from "@/assets/merline.jpeg";
import roobanPhoto from "@/assets/rooban.jpeg";
import vigneshPhoto from "@/assets/vignesh.jpg";

type StaffTab = "faculty" | "technical";
type FacultyLevel = "ug" | "pg";
type BackTo = "/" | "/about";

const technicalTeam = [
  {
    name: "Mrs. P. Paul Merline",
    designation: "Technical Manager",
    area: "LMS & Data Management",
    photo: merlinePhoto,
  },
  {
    name: "Mr. A. Mohamed Meerasa Mujahith",
    designation: "Technical Assistant",
    area: "LMS",
    photo: meerasaPhoto,
  },
  {
    name: "Mr. K. Rooban",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: roobanPhoto,
  },
  {
    name: "Mrs. R. Latha",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: lathaPhoto,
  },
  {
    name: "Mr. D. Vignesh",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: vigneshPhoto,
  },
  {
    name: "Mr. R. Deepak",
    designation: "Technical Assistant",
    area: "Audio - Video Editing",
    photo: deepakPhoto,
  },
];

const programmeFilters: Record<FacultyLevel, { label: string; slug: string }[]> = {
  ug: [
    { label: "BA Islamic Studies", slug: "ba-islamic-studies" },
    // { label: "BA Public Policy", slug: "ba-public-policy" },
    // { label: "BA English", slug: "ba-english" },
  ],
  pg: [
    { label: "MBA", slug: "mba" },
    { label: "MCA", slug: "mca" },
  ],
};

function getFacultyLevel(courseSlug: string): FacultyLevel {
  return courseSlug.startsWith("ba-") ? "ug" : "pg";
}

function StaffCard({
  name,
  designation,
  photo,
  area,
  profileLink,
  className,
}: {
  name: string;
  designation: string;
  photo: string;
  area?: string;
  profileLink?: ReactNode;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex min-w-0 flex-col items-center rounded-2xl border border-[#172554]/8 bg-white px-4 py-6 text-center shadow-[0_8px_24px_rgba(23,37,84,0.06)] ${className ?? ""}`}
    >
      <img
        src={photo}
        alt={name}
        className="size-24 shrink-0 rounded-full border-4 border-[#f1edf8] object-cover sm:size-28"
      />
      <h2 className="mt-4 w-full break-words text-base font-bold leading-6 text-[#172554] sm:text-lg">
        {name}
      </h2>
      <p className="mt-1 text-sm font-medium leading-5 text-[#6b4c9a]">{designation}</p>
      {area && <p className="mt-1 text-sm leading-5 text-slate-500">{area}</p>}
      {profileLink && <div className="mt-3">{profileLink}</div>}
    </motion.article>
  );
}

export function CdoeStaffDirectory({
  initialTab,
  backTo,
  backLabel,
}: {
  initialTab: StaffTab;
  backTo: BackTo;
  backLabel: string;
}) {
  const [activeTab, setActiveTab] = useState<StaffTab>(initialTab);
  const [activeLevel, setActiveLevel] = useState<FacultyLevel>("ug");
  const [activeProgramme, setActiveProgramme] = useState("all");
  const faculty = facultyProfiles.filter(
    (person) =>
      getFacultyLevel(person.courseSlug) === activeLevel &&
      (activeProgramme === "all" || person.courseSlug === activeProgramme),
  );

  const selectLevel = (level: FacultyLevel) => {
    setActiveLevel(level);
    setActiveProgramme("all");
  };

  return (
    <SiteLayout>
      <main
        className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-[#f7f5fb] via-[#f7f9fc] to-[#f8f2f2] px-4 py-8 text-[#172554] sm:px-6 sm:py-12"
        style={circularFont}
      >
        <div className="mx-auto max-w-6xl">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#526078] transition-colors hover:text-[#7f1d1d]"
          >
            <span aria-hidden="true">←</span>
            {backLabel}
          </Link>

          <header className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f1d1d]">
              Centre for Distance &amp; Online Education
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#172554] sm:text-4xl">
              CDOE Team
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Meet the academic and technical professionals supporting teaching, digital learning
              and student success.
            </p>
          </header>

          <div
            className="mx-auto mt-7 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-full border border-white/80 bg-white/70 p-1.5 shadow-sm"
            role="tablist"
            aria-label="CDOE team"
          >
            {(
              [
                ["faculty", "Faculty"],
                ["technical", "Technical Team"],
              ] as const
            ).map(([tab, label]) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#172554] text-white shadow-sm"
                    : "text-[#526078] hover:bg-[#172554]/5"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeTab === "faculty" ? (
            <section className="mt-7" aria-label="Faculty">
              <div
                className="flex flex-wrap justify-center gap-2"
                role="tablist"
                aria-label="Faculty programme level"
              >
                {(
                  [
                    ["ug", "UG Programmes"],
                    ["pg", "PG Programmes"],
                  ] as const
                ).map(([level, label]) => (
                  <button
                    key={level}
                    type="button"
                    role="tab"
                    aria-selected={activeLevel === level}
                    onClick={() => selectLevel(level)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      activeLevel === level
                        ? "border-[#8f1d1d] bg-[#8f1d1d] text-white"
                        : "border-[#172554]/15 bg-white/80 text-[#172554] hover:border-[#8f1d1d]/40"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div
                className="mt-3 flex flex-wrap justify-center gap-2"
                aria-label="Filter faculty by programme"
              >
                <button
                  type="button"
                  aria-pressed={activeProgramme === "all"}
                  onClick={() => setActiveProgramme("all")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                    activeProgramme === "all"
                      ? "bg-[#172554] text-white"
                      : "bg-white/75 text-[#526078] hover:bg-white"
                  }`}
                >
                  All {activeLevel.toUpperCase()} Programmes
                </button>
                {programmeFilters[activeLevel].map((programme) => (
                  <button
                    key={programme.slug}
                    type="button"
                    aria-pressed={activeProgramme === programme.slug}
                    onClick={() => setActiveProgramme(programme.slug)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      activeProgramme === programme.slug
                        ? "bg-[#172554] text-white"
                        : "bg-white/75 text-[#526078] hover:bg-white"
                    }`}
                  >
                    {programme.label}
                  </button>
                ))}
              </div>

              {faculty.length > 0 ? (
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {faculty.map((person) => (
                    <StaffCard
                      key={person.slug}
                      className={
                        faculty.length === 1
                          ? "col-span-2 mx-auto w-full max-w-[12rem] sm:col-span-1 sm:mx-0 sm:max-w-none"
                          : undefined
                      }
                      name={person.name}
                      designation={person.designation}
                      photo={person.photo}
                      profileLink={
                        <Link
                          to="/faculty-profile/$courseSlug/$facultySlug"
                          params={{
                            courseSlug: person.courseSlug,
                            facultySlug: person.slug,
                          }}
                          className="text-sm font-semibold text-[#8f1d1d] hover:underline"
                        >
                          View profile
                        </Link>
                      }
                    />
                  ))}
                </div>
              ) : (
                <p className="mt-8 text-center text-sm text-slate-500">
                  No faculty profiles are currently listed for this programme.
                </p>
              )}
            </section>
          ) : (
            <section
              className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Technical Team"
            >
              {technicalTeam.map((person) => (
                <StaffCard
                  key={person.name}
                  name={person.name}
                  designation={person.designation}
                  photo={person.photo}
                  area={person.area}
                />
              ))}
            </section>
          )}
        </div>
      </main>
    </SiteLayout>
  );
}
