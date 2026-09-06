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

const SYLLABUS_PDF = "/pdfs/ba-islamic-studies-syllabus.pdf";

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

const semester1: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 1101",
    title: "Basic Arabic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "AECC",
    code: "ISD 1102",
    title: "Communicative English",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 1103",
    title: "Introduction to Quranic Studies",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CC",
    code: "ISD 1104",
    title: "Guidance of Prophet – Moral & Ethics",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "DSE",
    code: "SD 1105",
    title: "Fiqh al Adillah-Ibadath",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 1106",
    title: "Basic Arabic Grammar",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "SEC",
    code: "ISD 1107",
    title: "Arabic Comprehension",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
];

const semester2: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 1211",
    title: "Basic Communicative Arabic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "AECC",
    code: "ISD 1212",
    title: "Advanced Communicative English",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 1213",
    title: "Quran Exegesis: Albaqara-II",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "CC",
    code: "ISD 1214",
    title: "Hadeeth - Teachings of Prophet",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 5,
    category: "DSE",
    code: "ISD 1215",
    title: "Islamic Doctrine - Aqeedah",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 1216",
    title: "Advanced Arabic Grammar",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "DSE",
    code: "ISD 1217",
    title: "Islamic History: Seerah & Caliphate Period",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const semester3: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 2101",
    title: "Advanced Communicative Arabic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 2102",
    title: "Quran Exegesis: Ala Imran & Al Nisa",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 2103",
    title: "A Study on Abu Dawood",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 2104",
    title: "Islamic Fiqh: Al Muamalath",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "SEC",
    code: "ISD 2105",
    title: "Principles of Jurisprudence: Al Adillah",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "DSE",
    code: "ISD 2106",
    title: "Islamic History: Umayyad & Abbasids Period",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "GE",
    code: "",
    title: "Elective - I",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const semester4: Course[] = [
  {
    no: 1,
    category: "LCC",
    code: "ISD 2211 / ISD 2221",
    title: "Arabic Prose & Poetry",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 2212",
    title: "Quran Exegesis: Muminoon, Noor and Hujurat",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "CC",
    code: "ISD 2213",
    title: "Hadeeth: Sunan At Tirmidhi",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 2214",
    title: "Muslim Personal Law: Inheritance & Waqf",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "SEC",
    code: "ISD 2215",
    title:
      "Principles of Jurisprudence: Al Qawayid Development of Islamic",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 2216",
    title: "Religious Sciences: Tafseer & Hadeeth",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "GE",
    code: "",
    title: "Elective II",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "GE",
    code: "GED 2204",
    title: "Aptitude and Workplace Skills",
    l: 0,
    t: 0,
    p: 2,
    credits: 1,
  },
];

const semester5: Course[] = [
  {
    no: 1,
    category: "CC",
    code: "ISD 3101",
    title: "Shariah Rulings in Chapter Al Maidah",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 3102",
    title: "A Special Study on Saheeh Muslim",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "DSE",
    code: "ISD 3103",
    title: "Muslim Family Law",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 3104",
    title: "Comparative Fiqh",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "DSE",
    code: "ISD 3105",
    title: "History of Islamic Thought",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "SEC",
    code: "ISD 3106",
    title: "Business Arabic and Translation",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 7,
    category: "DSE",
    code: "ISD 3107",
    title: "Indian Constitution: Minority Rights",
    l: 1,
    t: 0,
    p: 0,
    credits: 1,
  },
  {
    no: 8,
    category: "GE",
    code: "",
    title: "Elective - III",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const semester6: Course[] = [
  {
    no: 1,
    category: "CC",
    code: "ISD 3211",
    title: "Thematic Study of Quran",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 2,
    category: "CC",
    code: "ISD 3212",
    title: "A Special Study on Saheeh Al Bukhar",
    l: 4,
    t: 0,
    p: 0,
    credits: 4,
  },
  {
    no: 3,
    category: "DSE",
    code: "ISD 3213",
    title: "Quran and Modern Issues",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
  {
    no: 4,
    category: "DSE",
    code: "ISD 3214",
    title: "Dawa’h & Comparative Religion",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "DSE",
    code: "ISD 3215",
    title: "History of Modern Arabic Literature",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "DSE",
    code: "ISD 3216",
    title: "Fiqh Methodology of Imams",
    l: 2,
    t: 0,
    p: 0,
    credits: 2,
  },
  {
    no: 7,
    category: "GE",
    code: "",
    title: "Elective IV",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "GE",
    code: "",
    title: "Elective - V",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives3: Course[] = [
  {
    no: 1,
    category: "GE",
    code: "ISDX 01",
    title: "Art of Quran recitation and Memorization",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 2,
    category: "GE",
    code: "ISDX 02",
    title: "Arabic Rhetoric",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 3,
    category: "GE",
    code: "ISDX 03",
    title: "Arabic Morphology",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives4: Course[] = [
  {
    no: 4,
    category: "GE",
    code: "ISDX 04",
    title: "Fundamentals of Islamic Finance",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 5,
    category: "GE",
    code: "ISDX 05",
    title: "Islamic Banking: Products & Services",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 6,
    category: "GE",
    code: "ISDX 06",
    title: "Islamic Philosophy",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives5: Course[] = [
  {
    no: 7,
    category: "GE",
    code: "ISDX 07",
    title: "Islamic Insurance (Takaful)",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 8,
    category: "GE",
    code: "ISDX 08",
    title: "Islamic Capital Market",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 9,
    category: "GE",
    code: "ISDX 09",
    title: "Advent of Islam in South India",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 10,
    category: "GE",
    code: "ISDX 10",
    title: "History of Andalusia (Spain)",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

const electives6: Course[] = [
  {
    no: 11,
    category: "GE",
    code: "ISDX 11",
    title: "Arabic Translation & SAP",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 12,
    category: "GE",
    code: "ISDX 12",
    title: "Muslims in India & Plural Society",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 13,
    category: "GE",
    code: "ISDX 13",
    title: "Islamic Ethics",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
  {
    no: 14,
    category: "GE",
    code: "ISDX 14",
    title: "History of Ottoman Caliphate",
    l: 3,
    t: 0,
    p: 0,
    credits: 3,
  },
];

function SemesterTable({
  semester,
  courses,
  total,
}: {
  semester: string;
  courses: Course[];
  total: number;
}) {
  return (
    <section className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d5c45] text-white">
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
            <tr className="bg-[#0d5c45] text-white">
              <th className="px-3 py-3 text-xs font-semibold">#</th>
              <th className="px-3 py-3 text-xs font-semibold">Category</th>
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
                className="border-t border-slate-100 transition-colors hover:bg-[#fffaf0]"
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

                <td className="px-3 py-3 text-center text-sm font-bold text-[#0d5c45]">
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
        {/* Compact Header */}
        <section className="bg-[#0d5c45] px-5 py-6 text-white sm:px-8 sm:py-7">
          <div className="mx-auto max-w-7xl">
            <div className="mb-3">
              <Link
                to="/ba-islamic-studies"
                className="inline-flex items-center gap-2 text-xs font-medium text-white/90 transition-colors hover:text-[#d4af37]"
              >
                <ArrowLeft size={15} />
                Back to BA Islamic Studies
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#d4af37]">
                <GraduationCap size={14} />
                B.A. Islamic Studies
              </div>

              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Syllabus
              </h1>

              <p className="mt-2 max-w-2xl text-xs leading-5 text-white/85 sm:text-sm">
                Detailed semester-wise syllabus, course structure, credits
                and elective courses for the B.A. Islamic Studies programme.
              </p>

              {/* Header Download - Opens Form */}
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

        {/* Content */}
        <section className="px-5 py-8 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-7xl">
            {/* Download notice */}
            <div className="mb-8 rounded-xl border border-[#d4af37]/40 bg-[#fffaf0] px-5 py-4">
              <p className="text-sm font-semibold text-[#111111]">
                Click Here To Download Our BA Islamic Studies Syllabus
              </p>

              {/* Opens enquiry form - does not navigate */}
              <button
                type="button"
                onClick={openSyllabusForm}
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#8f1d1d] transition-colors hover:text-[#0d5c45]"
              >
                <Download size={15} />
                BA Islamic Studies Syllabus PDF
              </button>
            </div>

            {/* Title */}
            <div className="mb-8">
              <div className="mb-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
                B.A. Islamic Studies
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Semester-wise course structure and credit distribution
              </p>
            </div>

            {/* Semester I */}
            <SemesterTable
              semester="SEMESTER Ⅰ"
              courses={semester1}
              total={22}
            />

            {/* Semester II */}
            <SemesterTable
              semester="SEMESTER Ⅱ"
              courses={semester2}
              total={22}
            />

            {/* Semester III */}
            <SemesterTable
              semester="SEMESTER Ⅲ"
              courses={semester3}
              total={24}
            />

            {/* Semester IV */}
            <SemesterTable
              semester="SEMESTER Ⅳ"
              courses={semester4}
              total={24}
            />

            {/* Semester V */}
            <SemesterTable
              semester="SEMESTER V"
              courses={semester5}
              total={24}
            />

            {/* Semester VI */}
            <SemesterTable
              semester="SEMESTER VI"
              courses={semester6}
              total={24}
            />

            {/* Overall Total */}
            <section className="mb-10 rounded-2xl bg-[#0d5c45] px-5 py-6 text-white shadow-sm sm:px-7">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                    Programme Credit Structure
                  </p>

                  <h2 className="mt-1 text-xl font-bold">Total Credits</h2>
                </div>

                <div className="text-4xl font-bold text-[#d4af37]">140</div>
              </div>
            </section>

            {/* Elective Courses */}
            <div className="mb-7">
              <div className="mb-2 h-1 w-12 rounded-full bg-[#d4af37]" />

              <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl">
                LIST OF ELECTIVE COURSES
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Elective courses available across the different semesters.
              </p>
            </div>

            {/* Semester III Electives */}
            <SemesterTable
              semester="Semester III"
              courses={electives3}
              total={9}
            />

            {/* Semester IV Electives */}
            <SemesterTable
              semester="Semester IV"
              courses={electives4}
              total={9}
            />

            {/* Semester V Electives */}
            <SemesterTable
              semester="Semester V"
              courses={electives5}
              total={12}
            />

            {/* Semester VI Electives */}
            <SemesterTable
              semester="Semester VI"
              courses={electives6}
              total={12}
            />

            {/* Bottom navigation */}
            <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/ba-islamic-studies"
                className="group relative inline-flex w-fit items-center gap-2 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#111111] transition-all"
              >
                <ArrowLeft size={16} />
                Back to Programme

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </Link>

              {/* Opens enquiry form instead of directly downloading */}
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

        {/* Enquiry Form Modal */}
        {showEnquiry && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4 py-5 backdrop-blur-sm">
            <div className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">
              {/* Close Button */}
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
                      Download BA Islamic Studies Syllabus
                    </h2>

                    <p className="mt-1.5 text-xs leading-5 text-slate-600">
                      Please fill in your details to access the syllabus PDF.
                    </p>
                  </div>

                  <EnquiryForm
                    language="en"
                    onSubmitted={handleSyllabusSubmit}
                  />
                </div>
              ) : (
                <div className="p-6 text-center sm:p-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0d5c45]/10 text-[#0d5c45]">
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
                    download the BA Islamic Studies syllabus.
                  </p>

                  <a
                    href={SYLLABUS_PDF}
                    download
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d5c45] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#0a4b38]"
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

export const Route = createFileRoute("/ba-islamic-studies/syllabus")({
  component: SyllabusPage,
});