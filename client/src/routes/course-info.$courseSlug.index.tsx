import { SiteLayout } from "@/components/site/SiteLayout";
import { CourseInfoLink, type CourseSection } from "@/components/site/CourseInfoLink";
import { getCourseInfo } from "@/data/courseInfo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Eye, FileText, Target } from "lucide-react";

export const Route = createFileRoute("/course-info/$courseSlug/")({
  component: CourseOverviewPage,
});

const sections: {
  id: CourseSection;
  title: string;
  description: string;
  icon: typeof Eye;
}[] = [
  {
    id: "vision",
    title: "Vision",
    description: "Explore this programme's academic vision.",
    icon: Eye,
  },
  {
    id: "mission",
    title: "Mission",
    description: "Read the programme's mission and commitments.",
    icon: Target,
  },
  {
    id: "eligibility-fee",
    title: "Eligibility & Fee",
    description: "Review admission requirements and fee details.",
    icon: FileText,
  },
];

function CourseOverviewPage() {
  const { courseSlug } = Route.useParams();
  const course = getCourseInfo(courseSlug);

  if (!course) {
    return (
      <SiteLayout>
        <main className="mx-auto min-h-[60vh] max-w-4xl px-5 py-16">
          <h1 className="text-2xl font-bold">Programme not found</h1>
          <Link to="/programmes" className="mt-4 inline-flex text-[#0d5c45] underline">
            Browse programmes
          </Link>
        </main>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <main className="min-h-screen bg-[#f7f8f4] text-[#111111]">
        <section className="bg-[#0d5c45] text-white">
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="size-4" />
              Back to Programmes
            </Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4d979]">
              {course.level} Programme
            </p>
            <h1 className="mt-2 text-3xl font-bold sm:text-5xl">{course.name}</h1>
            <p className="mt-3 max-w-3xl leading-7 text-white/80">{course.description}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d5c45]">
                Programme
              </p>
              <h2 className="mt-2 text-xl font-bold">{course.fullName}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {course.duration} · {course.level}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0d5c45]">
                Eligibility
              </p>
              <p className="mt-2 leading-7 text-slate-700">{course.eligibility}</p>
            </div>
          </div>

          <h2 className="mt-10 text-2xl font-bold">Programme Information</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {sections.map(({ id, title, description, icon: Icon }) => (
              <CourseInfoLink
                key={id}
                courseSlug={course.slug}
                section={id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#0d5c45]/10 text-[#0d5c45]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0d5c45]">
                  View details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CourseInfoLink>
            ))}
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
