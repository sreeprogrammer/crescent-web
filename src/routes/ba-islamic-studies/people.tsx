import { useState, type ReactNode } from "react";
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
import { SiteLayout } from "@/components/site/SiteLayout";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

export const Route = createFileRoute("/ba-islamic-studies/people")({
  component: BAIslamicStudiesPeoplePage,
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
    name: "Moulavi Dr. S. Abdus Samad Nadwi",
    designation: "Associate Professor",
    natureOfEmployment: "Regular",
    qualification: "M.A., M.Phil., Ph.D.",
    phone: "044-22751280 (Office)",
    email: "samadnadwi@crescent.education",
    photo: campusPhoto,
    profileUrl:
      "https://crescent.education/university/schools/school-of-arabic-islamic-studies/faculty/moulavi-dr-s-abdus-samad-nadwi/",
  },
  {
    name: "Dr. M. Yasar Arafath Ali",
    designation: "Assistant Professor",
    natureOfEmployment: "Regular",
    qualification: "M.A., M.Com., Ph.D. DIJ",
    phone: "044-22751280 (Office)",
    email: "yasar@crescent.education",
    photo: campusPhoto,
    profileUrl:
      "https://crescent.education/university/schools/school-of-arabic-islamic-studies/faculty/dr-m-yasar-arafath-ali/",
  },
  {
    name: "Moulavi Dr. M. Ahamedullah Al Bukhari",
    designation: "Assistant Professor",
    natureOfEmployment: "Regular",
    qualification: "Afzal-al-Ulama., BBA., M.A., M.Phil., Ph.D",
    phone: "044-22751280 (Office)",
    email: "ahamedullah@crescent.education",
    photo: campusPhoto,
    profileUrl:
      "https://crescent.education/university/schools/school-of-arabic-islamic-studies/faculty/moulavi-dr-m-ahamedullah-al-bukhari/",
  },
];

function BAIslamicStudiesPeoplePage() {
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
        <section className="bg-[#F5F1E9]">
          <div className="mx-auto max-w-6xl px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="mb-2">
              <Link
                to="/ba-islamic-studies"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#111111]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to B.A. Islamic Studies
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#2F6F4E]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#2F6F4E]">
                <GraduationCap className="h-3 w-3" />
                B.A. Islamic Studies
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                People
              </h1>

              <p className="mt-1 max-w-3xl text-[11px] leading-4.5 text-black/70 sm:text-xs">
                Meet the faculty members supporting teaching, academic
                guidance and learner development in B.A. Islamic Studies.
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
                href="/ba-islamic-studies"
                active={false}
              />

              <QuickNav
                title="People"
                href="/ba-islamic-studies/people"
                active
              />

              <QuickNav
                title="Vision"
                href="/ba-islamic-studies#vision"
                active={false}
              />

              <QuickNav
                title="Mission"
                href="/ba-islamic-studies#mission"
                active={false}
              />
            </div>
          </div>
        </section>

        {/* MAIN */}
        <main className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
          <div className="mb-4">
            <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#2F6F4E]">
              <span className="h-px w-5 bg-[#D4AF37]" />
              Faculty Team
            </div>

            <h2 className="text-lg font-bold leading-tight sm:text-xl">
              Faculty — B.A. Islamic Studies
            </h2>

            <p className="mt-0.5 max-w-2xl text-[11px] leading-4 text-black/60">
              Academic professionals supporting the learning journey of our
              students.
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

                  <div className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#2F6F4E] shadow-sm">
                    B.A. Islamic Studies
                  </div>

                  <div className="absolute bottom-2.5 left-2.5 flex size-7 items-center justify-center rounded-lg bg-[#2F6F4E]/90 text-white">
                    <UserRound className="size-3.5" />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="px-3.5 py-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#2F6F4E]">
                    Faculty
                  </p>

                  <h3 className="mt-1 text-sm font-bold leading-5 text-[#111111]">
                    {person.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#2F6F4E]">
                    {person.designation}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-[9px] text-black/50">
                    <GraduationCap className="size-3 text-[#D4AF37]" />
                    {person.qualification}
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
          <div className="mt-4 flex items-center gap-2 rounded-xl border border-[#2F6F4E]/10 bg-[#2F6F4E]/5 px-3.5 py-3">
            <BookOpen className="size-4 shrink-0 text-[#2F6F4E]" />

            <p className="text-[9px] leading-4 text-black/60">
              Our faculty team supports academic learning, guidance and the
              overall development of learners pursuing B.A. Islamic Studies.
            </p>
          </div>
        </main>

        {/* MORE INFO / PORTFOLIO MODAL */}
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
                {/* PROFILE HEADER */}
                <div className="relative overflow-hidden bg-[#2F6F4E] px-5 py-5 text-white sm:px-6">
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
                        B.A. Islamic Studies
                      </div>
                    </div>
                  </div>
                </div>

                {/* PROFILE DETAILS */}
                <div className="p-5 sm:p-6">
                  <div className="mb-3">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.12em] text-[#2F6F4E]">
                      Faculty Details
                    </p>

                    <h3 className="mt-1 text-base font-bold text-[#111111]">
                      Academic & Professional Information
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-black/7">
                    {/* DESIGNATION */}
                    <DetailRow
                      label="Designation"
                      value={selectedFaculty.designation}
                    />

                    {/* EMPLOYMENT */}
                    <DetailRow
                      label="Nature of Employment"
                      value={selectedFaculty.natureOfEmployment}
                    />

                    {/* QUALIFICATION */}
                    <DetailRow
                      label="Qualification"
                      value={selectedFaculty.qualification}
                    />

                    {/* PHONE */}
                    <div className="grid grid-cols-1 border-b border-black/6 bg-[#F5F1E9]/50 px-3.5 py-3 sm:grid-cols-[170px_1fr] sm:gap-4">
                      <div className="flex items-center gap-2 text-[9px] font-semibold text-[#2F6F4E]">
                        <Phone className="size-3.5 text-[#D4AF37]" />
                        Phone
                      </div>

                      <a
                        href={`tel:${selectedFaculty.phone.replace(
                          /[^0-9]/g,
                          "",
                        )}`}
                        className="mt-1 text-[10px] font-medium text-[#111111] sm:mt-0"
                      >
                        {selectedFaculty.phone}
                      </a>
                    </div>

                    {/* EMAIL */}
                    <div className="grid grid-cols-1 bg-white px-3.5 py-3 sm:grid-cols-[170px_1fr] sm:gap-4">
                      <div className="flex items-center gap-2 text-[9px] font-semibold text-[#2F6F4E]">
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
                  <div className="mt-3 rounded-xl border border-[#2F6F4E]/10 bg-[#F5F1E9] p-3.5">
                    <div className="flex items-center gap-2">
                      <BookOpen className="size-4 text-[#2F6F4E]" />

                      <div>
                        <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-[#2F6F4E]">
                          Programme
                        </p>

                        <p className="text-[11px] font-bold text-[#111111]">
                          B.A. Islamic Studies
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* OFFICIAL PROFILE */}
                  <div className="mt-4 flex flex-col gap-2 border-t border-black/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[10px] font-semibold text-[#111111]">
                        Official Faculty Profile
                      </p>

                      <p className="mt-0.5 text-[9px] text-black/50">
                        View the complete profile on the Crescent website.
                      </p>
                    </div>

                    <a
                      href={selectedFaculty.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group relative inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#2F6F4E] px-3.5 py-2 text-[9px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
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
          ? "border-[#2F6F4E]/20 bg-[#2F6F4E]/5"
          : "border-black/6 bg-white hover:bg-[#F5F1E9]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className={`text-[9px] font-semibold ${
            active ? "text-[#2F6F4E]" : "text-[#111111]"
          }`}
        >
          {title}
        </span>

        <ArrowRight
          className={`size-3 ${
            active ? "text-[#2F6F4E]" : "text-black/30"
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
  value: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 border-b border-black/6 bg-white px-3.5 py-3 sm:grid-cols-[170px_1fr] sm:gap-4">
      <div className="text-[9px] font-semibold text-[#2F6F4E]">
        {label}
      </div>

      <div className="mt-1 text-[10px] font-medium leading-4 text-[#111111] sm:mt-0">
        {value}
      </div>
    </div>
  );
}

export default BAIslamicStudiesPeoplePage;