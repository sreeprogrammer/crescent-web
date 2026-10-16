import { SiteLayout } from "@/components/site/SiteLayout";
import { type CourseSection } from "@/components/site/CourseInfoLink";
import { getCourseInfo } from "@/data/courseInfo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Eye, FileText, Target } from "lucide-react";

export const Route = createFileRoute("/course-info/$courseSlug/$section")({
  component: CourseSectionPage,
});

const sectionTitles: Record<CourseSection, string> = {
  vision: "Vision",
  mission: "Mission",
  "eligibility-fee": "Eligibility & Fee",
};

function isCourseSection(section: string): section is CourseSection {
  return Object.prototype.hasOwnProperty.call(sectionTitles, section);
}

function CourseSectionPage() {
  const { courseSlug, section } = Route.useParams();
  const course = getCourseInfo(courseSlug);

  if (!course || !isCourseSection(section)) {
    return (
      <SiteLayout>
        <main className="mx-auto min-h-[60vh] max-w-4xl px-5 py-16">
          <h1 className="text-2xl font-bold">Course information not found</h1>
          <Link to="/programmes" className="mt-4 inline-flex text-[#0d5c45] underline">
            Browse programmes
          </Link>
        </main>
      </SiteLayout>
    );
  }

  const currentSection = section;
  const Icon = currentSection === "vision" ? Eye : currentSection === "mission" ? Target : FileText;

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8f4] text-[#111111]">
        <section className="bg-[#0d5c45] text-white">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
            <Link
              to="/course-info/$courseSlug"
              params={{ courseSlug: course.slug }}
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to {course.name}
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4d979]">
              {course.name}
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-5xl">{sectionTitles[currentSection]}</h1>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {currentSection === "vision" && (
              <>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#1d355f]/10 text-[#1d355f]">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-bold">Academic Vision</h2>
                </div>
                <p className="mt-5 max-w-4xl text-base leading-8 text-slate-700">{course.vision}</p>
              </>
            )}

            {currentSection === "mission" && (
              <>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#8f1d1d]/10 text-[#8f1d1d]">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                </div>
                <ul className="mt-5 space-y-4">
                  {course.mission.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-700">
                      <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#0d5c45]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {currentSection === "eligibility-fee" && (
              <>
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#0d5c45]/10 text-[#0d5c45]">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-2xl font-bold">Eligibility for Admission</h2>
                </div>
                <p className="mt-5 leading-7 text-slate-700">{course.eligibility}</p>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <h2 className="text-2xl font-bold">Fee Structure</h2>
                  {course.fees ? (
                    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full min-w-[360px] border-collapse text-left">
                        <thead className="bg-[#1d355f] text-white">
                          <tr>
                            <th className="px-4 py-3 font-semibold">Particulars</th>
                            <th className="px-4 py-3 text-right font-semibold">Indian Nationals</th>
                            {course.fees.foreignApplication && (
                              <th className="px-4 py-3 text-right font-semibold">
                                Foreign Nationals
                              </th>
                            )}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100">
                            <td className="px-4 py-3">Application Fee</td>
                            <td className="px-4 py-3 text-right">{course.fees.application}</td>
                            {course.fees.foreignApplication && (
                              <td className="px-4 py-3 text-right">
                                {course.fees.foreignApplication}
                              </td>
                            )}
                          </tr>
                          <tr>
                            <td className="px-4 py-3">Tuition Fee</td>
                            <td className="px-4 py-3 text-right font-semibold">
                              {course.fees.tuition}
                            </td>
                            {course.fees.foreignTuition && (
                              <td className="px-4 py-3 text-right font-semibold">
                                {course.fees.foreignTuition}
                              </td>
                            )}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="mt-3 leading-7 text-slate-700">
                      Fee details for this programme have not been published here. Please contact
                      the Admissions Office for the current fee schedule.
                    </p>
                  )}
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-2 font-semibold text-[#0d5c45] hover:underline"
                  >
                    Contact Admissions <ArrowRight className="size-4" />
                  </Link>
                </div>
              </>
            )}
          </article>

          <nav aria-label="Course information pages" className="mt-5 flex flex-wrap gap-3">
            {(Object.keys(sectionTitles) as CourseSection[])
              .filter((item) => item !== currentSection)
              .map((item) => (
                <Link
                  key={item}
                  to="/course-info/$courseSlug/$section"
                  params={{ courseSlug: course.slug, section: item }}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium hover:border-[#0d5c45] hover:text-[#0d5c45]"
                >
                  {sectionTitles[item]}
                </Link>
              ))}
          </nav>
        </section>
      </main>
    </SiteLayout>
  );
}
