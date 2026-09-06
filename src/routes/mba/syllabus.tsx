import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  Download,
  GraduationCap,
  X,
} from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { EnquiryForm } from "@/college-navigator-bot/src/chat-components/EnquiryForm";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

const SYLLABUS_PDF = "/pdfs/mba-syllabus.pdf";

type Course = {
  no: number;
  category: string;
  code: string;
  title: string;
  l: number | string;
  t: number | string;
  p: number | string;
  credits: number;
};

/* =========================================================
   SEMESTER I
========================================================= */

const semester1: Course[] = [
  {
    no: 1,
    category: "CORE",
    code: "MSE 6101",
    title: "Management Concepts",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CORE",
    code: "MSE 6102",
    title: "Managerial Economics",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CORE",
    code: "MSE 6103",
    title: "Statistics for Decision making",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CORE",
    code: "MSE 6104",
    title: "Accounting for Managers",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "CORE",
    code: "MSE 6105",
    title: "Organisational Behaviour",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 6,
    category: "CORE",
    code: "MSE 6106",
    title: "Legal Aspects of Business",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 7,
    category: "CORE",
    code: "MSE 6107",
    title: "Entrepreneurship Development",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 8,
    category: "PRACTICAL",
    code: "MSE 6108",
    title: "Computer applications in Business Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PRACTICAL",
    code: "MSE 6109",
    title: "Business Communication Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

/* =========================================================
   SEMESTER II
========================================================= */

const semester2: Course[] = [
  {
    no: 1,
    category: "CORE",
    code: "MSE 6201",
    title: "Strategic Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CORE",
    code: "MSE 6202",
    title: "Human Resources Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CORE",
    code: "MSE 6203",
    title: "Corporate Finance",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CORE",
    code: "MSE 6204",
    title: "Operations Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "CORE",
    code: "MSE 6205",
    title: "Marketing Management",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 6,
    category: "ELECTIVE",
    code: "—",
    title: "General Elective I",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 7,
    category: "ELECTIVE",
    code: "—",
    title: "General Elective II",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 8,
    category: "PRACTICAL",
    code: "MSE 6206",
    title: "Current Affairs in Business Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
  {
    no: 9,
    category: "PRACTICAL",
    code: "MSE 6207",
    title: "Psychometrics and Corporate connect Lab",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

/* =========================================================
   SEMESTER III
========================================================= */

const semester3: Course[] = [
  {
    no: 1,
    category: "CORE",
    code: "MSE 7101",
    title: "Managing Disruptive Technologies",
    l: 3,
    t: 1,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "ELECTIVE",
    code: "—",
    title: "General Elective III",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 3,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective I",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 4,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective II",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 5,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective III",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 6,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective IV",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 7,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective V",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 8,
    category: "FUNCTIONAL",
    code: "—",
    title: "Functional Elective VI",
    l: "—",
    t: "—",
    p: "—",
    credits: 4,
  },
  {
    no: 9,
    category: "INTERNSHIP",
    code: "MSE 7102",
    title: "Summer Internship *",
    l: 0,
    t: 0,
    p: 8,
    credits: 4,
  },
];

/* =========================================================
   SEMESTER IV
========================================================= */

const semester4: Course[] = [
  {
    no: 1,
    category: "PROJECT",
    code: "MSE 7201",
    title: "Project work",
    l: 0,
    t: 0,
    p: 16,
    credits: 8,
  },
  {
    no: 2,
    category: "MOOC",
    code: "—",
    title: "MOOC (General Management Course) *",
    l: "—",
    t: "—",
    p: "—",
    credits: 3,
  },
];

/* =========================================================
   SEMESTER TABLE
========================================================= */

function SemesterTable({
  semester,
  courses,
  total,
}: {
  semester: string;
  courses: Course[];
  total: number | string;
}) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6b4c9a] text-white">
          <BookOpen size={16} />
        </div>

        <h2
          className="text-xl font-bold text-[#111111]"
          style={circularFont}
        >
          {semester}
        </h2>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead>
            <tr className="bg-[#1d355f] text-white">
              <th className="px-3 py-3 text-xs font-semibold">#</th>

              <th className="px-3 py-3 text-xs font-semibold">
                Category
              </th>

              <th className="px-3 py-3 text-xs font-semibold">
                Course Code
              </th>

              <th className="px-3 py-3 text-xs font-semibold">
                Course Title
              </th>

              <th className="px-3 py-3 text-center text-xs font-semibold">
                L
              </th>

              <th className="px-3 py-3 text-center text-xs font-semibold">
                T
              </th>

              <th className="px-3 py-3 text-center text-xs font-semibold">
                P
              </th>

              <th className="px-3 py-3 text-center text-xs font-semibold">
                Credits
              </th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr
                key={`${semester}-${course.no}-${course.code}`}
                className="border-t border-slate-100 transition-colors hover:bg-[#faf8fc]"
              >
                <td className="px-3 py-3 text-sm font-medium text-[#111111]">
                  {course.no}
                </td>

                <td className="px-3 py-3">
                  <span className="inline-flex rounded-md bg-[#d4af37]/10 px-2 py-1 text-xs font-semibold text-[#8f1d1d]">
                    {course.category}
                  </span>
                </td>

                <td className="px-3 py-3 text-sm font-medium text-[#1d355f]">
                  {course.code || "—"}
                </td>

                <td className="px-3 py-3 text-sm leading-6 text-[#111111]">
                  {course.title}
                </td>

                <td className="px-3 py-3 text-center text-sm text-[#111111]">
                  {course.l}
                </td>

                <td className="px-3 py-3 text-center text-sm text-[#111111]">
                  {course.t}
                </td>

                <td className="px-3 py-3 text-center text-sm text-[#111111]">
                  {course.p}
                </td>

                <td className="px-3 py-3 text-center text-sm font-bold text-[#6b4c9a]">
                  {course.credits}
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="border-t-2 border-[#d4af37] bg-[#fffaf0]">
              <td
                colSpan={7}
                className="px-3 py-3 text-right text-sm font-bold text-[#111111]"
              >
                Total Credits
              </td>

              <td className="px-3 py-3 text-center text-sm font-bold text-[#8f1d1d]">
                {total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

/* =========================================================
   MBA SYLLABUS PAGE
========================================================= */

function SyllabusPage() {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [syllabusUnlocked, setSyllabusUnlocked] = useState(false);

  const handleSyllabusSubmit = () => {
    setSyllabusUnlocked(true);
  };

  const openSyllabusForm = () => {
    setSyllabusUnlocked(false);
    setShowEnquiry(true);
  };

  return (
    <SiteLayout>
      <main style={circularFont} className="bg-white">
        {/* =================================================
            HEADER
        ================================================= */}

        <section className="bg-[#6b4c9a] px-5 py-6 text-white sm:px-8 sm:py-7">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3">
              <Link
                to="/mba"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#d4af37]"
              >
                <ArrowLeft size={15} />
                Back to MBA
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#d4af37]">
                <GraduationCap size={14} />
                M.B.A.
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Syllabus
              </h1>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/85 sm:text-sm">
                Detailed semester-wise syllabus, course structure, credits
                and elective courses for the Master of Business
                Administration programme.
              </p>

              {/* Header Download */}

              <button
                type="button"
                onClick={openSyllabusForm}
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-3.5 py-2 text-xs font-bold text-[#111111] shadow-sm transition-all hover:bg-[#e2c45a]"
              >
                <Download size={15} />
                Download Syllabus PDF
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            CONTENT
        ================================================= */}

        <section className="px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-7xl">

            {/* Download Notice */}

            <div className="mb-8 rounded-xl border border-[#d4af37]/40 bg-[#fffaf0] px-5 py-4">
              <p className="text-sm font-semibold text-[#111111]">
                Click Here To Download Our MBA Syllabus
              </p>

              <button
                type="button"
                onClick={openSyllabusForm}
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#8f1d1d] transition-colors hover:text-[#6b4c9a]"
              >
                <Download size={15} />
                MBA Syllabus PDF
              </button>
            </div>

            {/* Title */}

            <div className="mb-8">
              <div className="mb-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
                M.B.A.
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Semester-wise course structure and credit distribution
              </p>
            </div>

            {/* =================================================
                SEMESTER I
            ================================================= */}

            <SemesterTable
              semester="SEMESTER Ⅰ"
              courses={semester1}
              total={30}
            />

            {/* =================================================
                SEMESTER II
            ================================================= */}

            <SemesterTable
              semester="SEMESTER Ⅱ"
              courses={semester2}
              total={30}
            />

            {/* =================================================
                SEMESTER III
            ================================================= */}

            <SemesterTable
              semester="SEMESTER Ⅲ"
              courses={semester3}
              total="Min: 36"
            />

            {/* =================================================
                SEMESTER IV
            ================================================= */}

            <SemesterTable
              semester="SEMESTER Ⅳ"
              courses={semester4}
              total="Min: 11"
            />

            {/* =================================================
                OVERALL TOTAL
            ================================================= */}

            <section className="mb-10 rounded-2xl bg-[#1d355f] px-5 py-6 text-white shadow-sm sm:px-7">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                    Programme Credit Structure
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Total Minimum Credits
                  </h2>
                </div>

                <div className="text-4xl font-bold text-[#d4af37]">
                  107
                </div>
              </div>
            </section>

            {/* =================================================
                NOTE
            ================================================= */}

            <div className="mb-8 rounded-xl border-l-4 border-[#8f1d1d] bg-[#fffaf0] px-4 py-3">
              <p className="text-sm leading-6 text-[#111111]/75">
                <span className="font-bold text-[#8f1d1d]">
                  Note:
                </span>{" "}
                * indicates the applicable internship / MOOC component
                as specified in the programme structure.
              </p>
            </div>

            {/* =================================================
                BOTTOM NAVIGATION
            ================================================= */}

            <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/mba"
                className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#111111] transition-all"
              >
                <ArrowLeft size={16} />
                Back to Programme

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>

              <button
                type="button"
                onClick={openSyllabusForm}
                className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-xl bg-[#8f1d1d] px-4 py-2.5 text-sm font-semibold text-white transition-all"
              >
                <Download size={16} />
                Download Full Syllabus

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            ENQUIRY FORM MODAL
        ================================================= */}

        {showEnquiry && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4 py-5 backdrop-blur-sm">
            <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">

              {/* Close */}

              <button
                type="button"
                onClick={() => setShowEnquiry(false)}
                aria-label="Close enquiry form"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition-all hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              {!syllabusUnlocked ? (
                <div className="p-4 pt-6 sm:p-6 sm:pt-7">
                  <div className="mb-5 pr-10">
                    <div className="mb-2 h-1 w-10 rounded-full bg-[#d4af37]" />

                    <h2
                      className="text-xl font-bold text-[#111111]"
                      style={circularFont}
                    >
                      Download MBA Syllabus
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      Please fill in your details to access the syllabus
                      PDF.
                    </p>
                  </div>

                  <EnquiryForm
                    language="en"
                    onSubmitted={handleSyllabusSubmit}
                  />
                </div>
              ) : (
                <div className="p-6 text-center sm:p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6b4c9a]/10 text-[#6b4c9a]">
                    <Download size={25} />
                  </div>

                  <h2
                    className="mt-4 text-xl font-bold text-[#111111]"
                    style={circularFont}
                  >
                    Syllabus Ready
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Thank you for submitting your details. You can now
                    download the MBA syllabus.
                  </p>

                  <a
                    href={SYLLABUS_PDF}
                    download
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#6b4c9a] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#5b3f86]"
                  >
                    <Download size={17} />
                    Download Syllabus PDF
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowEnquiry(false)}
                    className="mt-3 block w-full text-xs font-semibold text-slate-500 transition-colors hover:text-[#8f1d1d]"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </SiteLayout>
  );
}

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/mba/syllabus")({
  component: SyllabusPage,
});