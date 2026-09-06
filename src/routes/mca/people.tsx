import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Mail,
  Phone,
  UserRound,
  X,
} from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";
import programmeBrochure from "@/assets/programme-brochure.pdf";
import { SiteLayout } from "@/components/site/SiteLayout";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

export const Route = createFileRoute("/mca/people")({
  component: MCAPeoplePage,
});

type Faculty = {
  name: string;
  designation: string;
  natureOfEmployment: string;
  qualification: string;
  phone: string;
  email: string;
  photo: string;
  profileUrl: string;
};

const faculty: Faculty[] = [
  {
    name: "Dr.E.Jeslin Renjith",
    designation: "Assistant Professor",
    natureOfEmployment: "Regular",
    qualification: "MCA, M.Phil, SET, Ph.D",
    phone: "9790965499",
    email: "jeslin@crescent.education",
    photo: campusPhoto,
    profileUrl: programmeBrochure,
  },
  {
    name: "Maheswari P",
    designation: "Assistant Professor",
    natureOfEmployment: "Regular",
    qualification: "MCA., M.Phil.",
    phone: "9080147779",
    email: "maheswari@crescent.education",
    photo: campusPhoto,
    profileUrl: programmeBrochure,
  },
  {
    name: "S.MANJULA",
    designation: "Assistant Professor",
    natureOfEmployment: "Regular",
    qualification: "MCA., SET., Ph.D (Pursuing)",
    phone: "9962582595",
    email: "Manjula.s@crescent.education",
    photo: campusPhoto,
    profileUrl: programmeBrochure,
  },
];

function MCAPeoplePage() {
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(
    null,
  );

  return (
    <SiteLayout>
      <div
        style={circularFont}
        className="min-h-screen bg-white text-[#111111]"
      >
        {/* HEADER */}
        <section className="bg-gradient-to-r from-[#6b4c9a] via-[#64438f] to-[#533579] text-white">
          <div className="mx-auto max-w-6xl px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="mb-2">
              <Link
                to="/mca"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to MCA
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-white">
                <GraduationCap className="h-3 w-3 text-[#D4AF37]" />
                Postgraduate Programme
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                People
              </h1>

              <p className="mt-1 max-w-3xl text-[11px] leading-4.5 text-white/75 sm:text-xs">
                Meet the faculty members supporting teaching, academic
                guidance and learner development in MCA.
              </p>
            </div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-2.5 sm:px-6">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <QuickNav
                title="Overview"
                href="/mca"
                active={false}
              />

              <QuickNav
                title="People"
                href="/mca/people"
                active
              />

              <QuickNav
                title="Syllabus"
                href="/mca/syllabus"
                active={false}
              />

              <QuickNav
                title="Eligibility & Fee"
                href="/mca/eligibility-fee"
                active={false}
              />
            </div>
          </div>
        </section>

        {/* MAIN */}
        <main className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
          {/* SECTION HEADING */}
          <div className="mb-4">
            <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6b4c9a]">
              <span className="h-px w-5 bg-[#D4AF37]" />
              Faculty Team
            </div>

            <h2 className="text-lg font-bold leading-tight sm:text-xl">
              Faculty — MCA
            </h2>

            <p className="mt-0.5 max-w-2xl text-[11px] leading-4 text-black/60">
              Academic professionals supporting teaching, guidance and
              learner development.
            </p>
          </div>

          {/* FACULTY CARDS */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {faculty.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* GOLD BOTTOM LINE */}
                <div className="absolute bottom-0 left-2 right-2 z-20 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />

                {/* PHOTO */}
                <div className="relative h-[210px] w-full overflow-hidden bg-[#F3F3F3]">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#6b4c9a] shadow-sm">
                    MCA
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 flex size-7 items-center justify-center rounded-lg bg-[#6b4c9a]/90 text-white">
                    <UserRound className="size-3.5" />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="px-3.5 py-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#6b4c9a]">
                    Faculty
                  </p>

                  <h3 className="mt-1 text-sm font-bold leading-5 text-[#111111]">
                    {person.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#6b4c9a]">
                    {person.designation}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-[9px] text-black/50">
                    <GraduationCap className="size-3 text-[#D4AF37]" />
                    MCA Faculty
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedFaculty(person)}
                    className="group/info relative mt-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#111111]"
                  >
                    More Info

                    <ArrowRight className="size-3 text-[#D4AF37] transition-transform duration-300 group-hover/info:translate-x-0.5" />

                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover/info:scale-x-100" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#6b4c9a]/10 bg-[#6b4c9a]/5 px-3.5 py-3">
            <BookOpen className="size-4 shrink-0 text-[#6b4c9a]" />

            <p className="text-[9px] leading-4 text-black/60">
              Our MCA faculty team supports academic learning, guidance and
              the overall development of learners.
            </p>
          </div>
        </main>

        {/* FACULTY PROFILE MODAL */}
        <AnimatePresence>
          {selectedFaculty && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/55 px-4 py-5 backdrop-blur-sm"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setSelectedFaculty(null);
                }
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 12,
                }}
                transition={{ duration: 0.25 }}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
              >
                {/* MODAL HEADER */}
                <div className="relative overflow-hidden bg-gradient-to-r from-[#6b4c9a] via-[#64438f] to-[#533579] px-5 py-5 text-white sm:px-6">
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#D4AF37]" />

                  <button
                    type="button"
                    onClick={() => setSelectedFaculty(null)}
                    aria-label="Close faculty profile"
                    className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  >
                    <X className="size-4" />
                  </button>

                  <div className="flex flex-col gap-4 pr-8 sm:flex-row sm:items-center">
                    {/* TEMPORARY PHOTO */}
                    <div className="h-[120px] w-[120px] shrink-0 overflow-hidden rounded-xl border-2 border-white/40 bg-white/10 shadow-lg">
                      <img
                        src={selectedFaculty.photo}
                        alt={selectedFaculty.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.14em] text-[#D4AF37]">
                        Faculty Profile
                      </p>

                      <h2 className="mt-1 text-xl font-bold leading-tight sm:text-2xl">
                        {selectedFaculty.name}
                      </h2>

                      <p className="mt-1 text-[11px] font-medium text-white/80">
                        {selectedFaculty.designation}
                      </p>

                      <div className="mt-2 inline-flex rounded-full bg-white/10 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-white/85">
                        MCA • Faculty
                      </div>
                    </div>
                  </div>
                </div>

                {/* MODAL BODY */}
                <div className="p-5 sm:p-6">
                  <div className="mb-3">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#6b4c9a]">
                      Faculty Details
                    </p>

                    <h3 className="mt-1 text-base font-bold text-[#111111]">
                      Academic & Professional Information
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-black/7">
                    <DetailRow
                      label="Designation"
                      value={selectedFaculty.designation}
                    />

                    <DetailRow
                      label="Nature of Employment"
                      value={selectedFaculty.natureOfEmployment}
                    />

                    <DetailRow
                      label="Qualification"
                      value={selectedFaculty.qualification}
                    />

                    {/* PHONE */}
                    <div className="grid grid-cols-1 border-b border-black/6 bg-[#F5F1E9]/50 px-3.5 py-3 sm:grid-cols-[170px_1fr] sm:gap-4">
                      <div className="flex items-center gap-2 text-[9px] font-semibold text-[#6b4c9a]">
                        <Phone className="size-3.5 text-[#D4AF37]" />
                        Phone
                      </div>

                      <a
                        href={`tel:${selectedFaculty.phone}`}
                        className="mt-1 text-[10px] font-medium text-[#111111] sm:mt-0"
                      >
                        {selectedFaculty.phone}
                      </a>
                    </div>

                    {/* EMAIL */}
                    <div className="grid grid-cols-1 bg-white px-3.5 py-3 sm:grid-cols-[170px_1fr] sm:gap-4">
                      <div className="flex items-center gap-2 text-[9px] font-semibold text-[#6b4c9a]">
                        <Mail className="size-3.5 text-[#D4AF37]" />
                        Email ID
                      </div>

                      <a
                        href={`mailto:${selectedFaculty.email}`}
                        className="mt-1 break-all text-[10px] font-medium text-[#111111] sm:mt-0"
                      >
                        {selectedFaculty.email}
                      </a>
                    </div>
                  </div>

                  {/* PROGRAMME */}
                  <div className="mt-3 rounded-xl border border-[#6b4c9a]/10 bg-[#F5F1E9] p-3.5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="size-4 text-[#6b4c9a]" />

                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#6b4c9a]">
                          Programme
                        </p>

                        <p className="text-[11px] font-bold text-[#111111]">
                          Master of Computer Applications (MCA)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* OFFICIAL PROFILE */}
                  <div className="mt-4 flex flex-col gap-2 border-t border-black/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold text-[#111111]">
                        Faculty Profile
                      </p>

                      <p className="mt-0.5 text-[9px] text-black/50">
                        View the faculty profile document.
                      </p>
                    </div>

                    <a
                      href={selectedFaculty.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#6b4c9a] px-3.5 py-2 text-[9px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      View Official Profile

                      <ExternalLink className="size-3 text-[#D4AF37]" />

                      <span className="absolute bottom-0 left-2 right-2 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SiteLayout>
  );
}

/* QUICK NAV */
function QuickNav({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      to={href}
      className={`group relative rounded-lg border px-3 py-2.5 transition-all duration-300 ${
        active
          ? "border-[#6b4c9a]/20 bg-[#6b4c9a]/5"
          : "border-black/6 bg-white hover:bg-[#F5F1E9]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`text-[9px] font-semibold ${
            active ? "text-[#6b4c9a]" : "text-[#111111]"
          }`}
        >
          {title}
        </span>

        <ArrowRight
          className={`size-3 ${
            active ? "text-[#6b4c9a]" : "text-black/30"
          } transition-transform duration-300 group-hover:translate-x-0.5`}
        />
      </div>

      <span
        className={`absolute bottom-0 left-2 right-2 h-0.5 origin-left bg-[#D4AF37] transition-transform duration-300 ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

/* DETAIL ROW */
function DetailRow({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 border-b border-black/6 bg-white px-3.5 py-3 sm:grid-cols-[170px_1fr] sm:gap-4">
      <div className="text-[9px] font-semibold text-[#6b4c9a]">
        {label}
      </div>

      <div className="mt-1 text-[10px] font-medium leading-4 text-[#111111] sm:mt-0">
        {value}
      </div>
    </div>
  );
}

export default MCAPeoplePage;