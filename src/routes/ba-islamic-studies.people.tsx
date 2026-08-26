import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/ba-islamic-studies/people")({
  component: PeoplePage,
});

function PeoplePage() {
  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8fa]">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#741b1b]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#741b1b] via-[#681818] to-[#4d1111]" />

          <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">

            <Link
              to="/ba-islamic-studies"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to BA Islamic Studies
            </Link>

            <div className="max-w-4xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                <GraduationCap size={17} />
                Faculty & Academic Team
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                People
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                Meet the faculty members associated with the B.A. Islamic
                Studies, MBA and MCA programmes.
              </p>

            </div>
          </div>
        </section>

        {/* =====================================================
            CONTENT
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">

          {/* =================================================
              BA ISLAMIC STUDIES
          ================================================== */}
          <section>

            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#741b1b]">
                Faculty
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Faculty — B.A. Islamic Studies
              </h2>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* ABDUSSAMAD */}
              <FacultyCard
                name="Moulavi Dr. S. Abdus Samad Nadwi"
                designation="Associate Professor"
                image="/assets/abdussamad.jpg"
                moreInfo="https://crescent.education/university/schools/school-of-arabic-islamic-studies/faculty/moulavi-dr-s-abdus-samad-nadwi/"
              />

              {/* YASAR */}
              <FacultyCard
                name="Dr. M. Yasar Arafath Ali"
                designation="Assistant Professor"
                image="/assets/Dr.M.Yasar-Arafath-Ali.jpg"
                moreInfo="https://crescent.education/university/schools/school-of-arabic-islamic-studies/faculty/dr-m-yasar-arafath-ali/"
              />

              {/* AHAMEDULLAH */}
              <FacultyCard
                name="Moulavi Dr. M. Ahamedullah Al Bukhari"
                designation="Assistant Professor"
                image="/assets/M.AHAMEDULLAH.jpg"
                moreInfo="https://crescent.education/university/schools/school-of-arabic-islamic-studies/faculty/moulavi-dr-m-ahamedullah-al-bukhari/"
              />

            </div>
          </section>

          {/* =================================================
              MBA
          ================================================== */}
          <section className="mt-20">

            <div className="max-w-3xl">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#741b1b]">
                Faculty
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Faculty — MBA
              </h2>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* RABIYATHUL BASARIYA */}
              <FacultyCard
                name="Dr. S. Rabiyathul Basariya"
                designation="Assistant Professor"
                image="/assets/rabiya.jpg"
                moreInfo="https://distance.crescent-institute.edu.in/img/facilities/Faculty%20Profile-rabiya%20R1.pdf"
              />

              {/* THOWSEAF */}
              <FacultyCard
                name="Dr. S. Thowseaf"
                designation="Assistant Professor"
                image="/assets/thowseaf.jpg"
                moreInfo="https://distance.crescent-institute.edu.in/img/facilities/Dr.%20S.%20Thowseaf%20-%20Faculty%20Profilenew.pdf"
              />

              {/* AGALYA */}
              <FacultyCard
                name="Dr. V. Agalya"
                designation="Assistant Professor"
                image="/assets/Dr.Agalya.jpg"
                moreInfo="https://distance.crescent-institute.edu.in/img/facilities/Dr.V.%20AGALYA%20-%20Faculty%20Profilenew.pdf"
              />

            </div>
          </section>

          {/* =================================================
              MCA
          ================================================== */}
          <section className="mt-20">

            <div className="max-w-3xl">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#741b1b]">
                Faculty
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Faculty — MCA
              </h2>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* JESLIN */}
              <FacultyCard
                name="Dr. E. Jeslin Renjith"
                designation="Assistant Professor"
                image="/assets/jeslin.jpg"
                moreInfo="https://distance.crescent-institute.edu.in/img/facilities/Faculty%20Profile%20-jeslynnew.pdf"
              />

              {/* MAHESWARI */}
              <FacultyCard
                name="Dr. P. Maheswari"
                designation="Assistant Professor"
                image="/assets/maheshwari.jpg"
                moreInfo="https://distance.crescent-institute.edu.in/img/facilities/Faculty%20Profile%20Maheswari%20Pnew.pdf"
              />

              {/* MANJULA */}
              <FacultyCard
                name="Mrs. S. Manjula"
                designation="Assistant Professor"
                image="/assets/people/manjula.jpg"
                moreInfo="https://distance.crescent-institute.edu.in/img/facilities/Faculty%20Profile-MANJULAnew.pdf"
              />

            </div>
          </section>

        </section>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <section className="border-t border-slate-200 bg-white">

          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  BA Islamic Studies
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Explore the Programme
                </h2>
              </div>

              <Link
                to="/ba-islamic-studies"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#741b1b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#5c1515]"
              >
                Back to Programme
                <ArrowLeft size={17} />
              </Link>

            </div>

          </div>

        </section>

      </main>
    </SiteLayout>
  );
}

/* ============================================================
   FACULTY CARD
============================================================ */

function FacultyCard({
  name,
  designation,
  image,
  moreInfo,
}: {
  name: string;
  designation: string;
  image: string;
  moreInfo: string;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative overflow-hidden bg-slate-100">

        <img
          src={image}
          alt={name}
          className="h-[360px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />

      </div>

      {/* DETAILS */}
      <div className="p-6">

        <h3 className="text-lg font-bold leading-7 text-slate-900">
          {name}
        </h3>

        <p className="mt-2 text-sm font-semibold text-[#741b1b]">
          {designation}
        </p>

        {/* MORE INFO */}
        <a
          href={moreInfo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#741b1b]/20 bg-[#741b1b]/5 px-4 py-3 text-sm font-semibold text-[#741b1b] transition hover:bg-[#741b1b] hover:text-white"
        >
          More Info
          <ExternalLink size={16} />
        </a>

      </div>

    </article>
  );
}