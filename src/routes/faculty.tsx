import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  GraduationCap,
  Users,
} from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

const facultySections = [
  {
    title: "Faculty--B.A. Islamic Studies",
    label: "B.A. Islamic Studies",
    accent: "#2f6f4e",
    faculty: [
      {
        name: "Moulavi Dr.S.Abdus Samad Nadwi",
        designation: "Associate Professor",
      },
      {
        name: "Dr. M. Yasar Arafath Ali",
        designation: "Assistant Professor",
      },
      {
        name: "Moulavi Dr. M. Ahamedullah Al Bukhari",
        designation: "Assistant Professor",
      },
    ],
  },
  {
    title: "Faculty--MBA",
    label: "MBA",
    accent: "#6b4c9a",
    faculty: [
      {
        name: "Dr. S. Rabiyathul Basariya",
        designation: "Assistant Professor",
      },
      {
        name: "Dr. S. Thowseaf",
        designation: "Assistant Professor",
      },
      {
        name: "Dr. V. Agalya",
        designation: "Assistant Professor",
      },
    ],
  },
  {
    title: "Faculty-MCA",
    label: "MCA",
    accent: "#8f1d1d",
    faculty: [
      {
        name: "Dr. E. Jeslin Renjith",
        designation: "Assistant Professor",
      },
      {
        name: "Dr. P. Maheswari",
        designation: "Assistant Professor",
      },
      {
        name: "Mrs. S. Manjula",
        designation: "Assistant Professor",
      },
    ],
  },
];

function FacultyPage() {
  return (
    <SiteLayout>
      <div className="bg-white text-[#111111]" style={circularFont}>
        {/* HERO */}
        <section className="bg-[#f6dfe5]">
          <div className="mx-auto max-w-6xl px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="mb-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#111111]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to About Us
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#111111]">
                <Users className="h-3 w-3" />
                CDOE • Faculty Team
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                Faculty Team
              </h1>

              <p className="mt-1 max-w-3xl text-[11px] leading-4.5 text-black/70 sm:text-xs">
                Dedicated academic professionals supporting teaching,
                academic guidance, programme coordination and learner
                development.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <main className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
          {/* TITLE */}
          <div className="mb-4">
            <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#8f1d1d]">
              <span className="h-px w-5 bg-[#d4af37]" />
              Academic Team
            </div>

            <h2 className="text-lg font-bold leading-tight tracking-tight sm:text-xl">
              Meet Our Faculty
            </h2>

            <p className="mt-0.5 text-[11px] text-black/60">
              Experienced faculty members supporting every stage of the
              learning experience.
            </p>
          </div>

          {/* FACULTY SECTIONS */}
          <div className="space-y-4">
            {facultySections.map((section, sectionIndex) => (
              <section key={section.title}>
                {/* SECTION TITLE */}
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: section.accent }}
                  >
                    <GraduationCap className="h-3 w-3" />
                  </div>

                  <div className="leading-tight">
                    <p
                      className="text-[9px] font-semibold uppercase tracking-[0.1em]"
                      style={{ color: section.accent }}
                    >
                      {section.label}
                    </p>

                    <h2 className="text-sm font-bold">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {section.faculty.map((person, index) => (
                    <motion.article
                      key={person.name}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.04,
                      }}
                      className="group relative overflow-hidden rounded-lg border border-black/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      {/* GOLD HOVER LINE */}
                      <div className="absolute bottom-0 left-2 right-2 z-10 h-0.5 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" />

                      {/* TEMPORARY PHOTO */}
                      <div className="relative h-36 w-full overflow-hidden bg-[#f3f3f3] sm:h-32">
                        <img
                          src={campusPhoto}
                          alt={person.name}
                          className="h-full w-full object-cover object-center"
                        />

                        <div className="absolute left-2.5 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#111111] shadow-sm">
                          Faculty
                        </div>
                      </div>

                      {/* CARD DETAILS */}
                      <div className="px-3 py-2.5">
                        <h3 className="text-xs font-bold leading-4.5 text-[#111111]">
                          {person.name}
                        </h3>

                        <p
                          className="mt-0.5 text-[10px] font-medium"
                          style={{ color: section.accent }}
                        >
                          {person.designation}
                        </p>

                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#111111]">
                            More Info
                            <ArrowUpRight className="h-3 w-3 text-[#d4af37]" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* SMALL DIVIDER */}
                {sectionIndex < facultySections.length - 1 && (
                  <div className="mt-4 h-px bg-black/5" />
                )}
              </section>
            ))}
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}