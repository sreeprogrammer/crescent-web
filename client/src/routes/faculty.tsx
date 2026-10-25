import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, GraduationCap, Users } from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";
import abdussamadPhoto from "@/assets/abdussamad.jpeg";
import agalyaPhoto from "@/assets/Agalya.jpeg";
import ahamedullahPhoto from "@/assets/ahamedullah.png";
import jeslinPhoto from "@/assets/jeslin.jpeg";
import maheshwariPhoto from "@/assets/maheshwari.jpeg";
import manjulaPhoto from "@/assets/manjula.jpeg";
import thowseafPhoto from "@/assets/thowseaf.jpeg";
import yasarPhoto from "@/assets/yasar-arafath.jpeg";

const circularFont = {
  fontFamily: "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
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
        courseSlug: "ba-islamic-studies",
        facultySlug: "moulavi-dr-s-abdus-samad-nadwi",
        designation: "Associate Professor",
        photo: abdussamadPhoto,
      },
      {
        name: "Dr. M. Yasar Arafath Ali",
        courseSlug: "ba-islamic-studies",
        facultySlug: "dr-m-yasar-arafath-ali",
        designation: "Assistant Professor",
        photo: yasarPhoto,
      },
      {
        name: "Moulavi Dr. M. Ahamedullah Al Bukhari",
        courseSlug: "ba-islamic-studies",
        facultySlug: "moulavi-dr-m-ahamedullah-al-bukhari",
        designation: "Assistant Professor",
        photo: ahamedullahPhoto,
      },
    ],
  },
  {
    title: "Faculty--MBA",
    label: "MBA",
    accent: "#6b4c9a",
    faculty: [
      {
        name: "Dr. S. Thowseaf",
        courseSlug: "mba",
        facultySlug: "dr-s-thowseaf",
        designation: "Assistant Professor",
        photo: thowseafPhoto,
      },
      {
        name: "Dr. V. Agalya",
        courseSlug: "mba",
        facultySlug: "dr-v-agalya",
        designation: "Assistant Professor",
        photo: agalyaPhoto,
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
        courseSlug: "mca",
        facultySlug: "dr-e-jeslin-renjith",
        designation: "Assistant Professor",
        photo: jeslinPhoto,
      },
      {
        name: "Dr. P. Maheswari",
        courseSlug: "mca",
        facultySlug: "maheswari-p",
        designation: "Assistant Professor",
        photo: maheshwariPhoto,
      },
      {
        name: "Mrs. S. Manjula",
        courseSlug: "mca",
        facultySlug: "s-manjula",
        designation: "Assistant Professor",
        photo: manjulaPhoto,
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
          <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
            <div className="mb-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to About Us
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#111111]">
                <Users className="h-3.5 w-3.5" />
                CDOE • Faculty Team
              </div>

              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Faculty Team
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 sm:text-base">
                Dedicated academic professionals supporting teaching, academic guidance, programme
                coordination and learner development.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <main className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
          {/* TITLE */}
          <div className="mb-5">
            <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8f1d1d]">
              <span className="h-px w-6 bg-[#d4af37]" />
              Academic Team
            </div>

            <h2 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
              Meet Our Faculty
            </h2>

            <p className="mt-1 text-sm leading-5 text-black/60 sm:text-base">
              Experienced faculty members supporting every stage of the learning experience.
            </p>
          </div>

          {/* FACULTY SECTIONS */}
          <div className="space-y-5">
            {facultySections.map((section, sectionIndex) => (
              <section key={section.title}>
                {/* SECTION TITLE */}
                <div className="mb-3 flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: section.accent }}
                  >
                    <GraduationCap className="h-4 w-4" />
                  </div>

                  <div className="leading-tight">
                    <p
                      className="text-xs font-semibold uppercase tracking-[0.1em]"
                      style={{ color: section.accent }}
                    >
                      {section.label}
                    </p>

                    <h2 className="text-base font-bold sm:text-lg">{section.title}</h2>
                  </div>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                    >
                      {/* GOLD HOVER LINE */}
                      <div className="absolute bottom-0 left-2 right-2 z-10 h-0.5 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" />

                      {/* CONSISTENT IMAGE ALIGNMENT */}
                      <div className="relative aspect-[5/4] w-full overflow-hidden bg-[#f3f3f3]">
                        <img
                          src={person.photo ?? campusPhoto}
                          alt={person.name}
                          className="absolute inset-0 h-full w-full object-contain"
                        />

                        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111111] shadow-sm">
                          Faculty
                        </div>
                      </div>

                      {/* CARD DETAILS */}
                      <div className="flex flex-1 flex-col px-4 py-3">
                        <h3 className="text-sm font-bold leading-5 text-[#111111] sm:text-base">
                          {person.name}
                        </h3>

                        <p
                          className="mt-1 text-sm font-medium leading-5"
                          style={{ color: section.accent }}
                        >
                          {person.designation}
                        </p>

                        <div className="mt-auto pt-3">
                          <Link
                            to="/faculty-profile/$courseSlug/$facultySlug"
                            params={{
                              courseSlug: person.courseSlug,
                              facultySlug: person.facultySlug,
                            }}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111111]"
                          >
                            More Info
                            <ArrowUpRight className="h-4 w-4 text-[#d4af37]" />
                          </Link>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>

                {/* SECTION DIVIDER */}
                {sectionIndex < facultySections.length - 1 && (
                  <div className="mt-5 h-px bg-black/5" />
                )}
              </section>
            ))}
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}
