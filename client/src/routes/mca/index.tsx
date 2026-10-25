import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Landmark, Target, Users } from "lucide-react";

import {
  ProgrammeHighlightCard,
  ProgrammeMiniVisualCard,
  ProgrammeSectionHeading,
} from "@/components/site/ProgrammePageSections";
import { ProgrammePageTemplate } from "@/components/site/ProgrammePageTemplate";
import { mcaProgrammePageConfig } from "@/data/programmePageConfigs";

export const Route = createFileRoute("/mca/")({
  component: MCAPage,
});

function MCAPage() {
  return (
    <ProgrammePageTemplate {...mcaProgrammePageConfig}>
        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8 lg:py-9">
          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-24">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
              {/* LEFT VISUAL CARD */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-[#6b4c9a]/10" />

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6b4c9a]/10 text-[#6b4c9a]">
                    <GraduationCap size={34} />
                  </div>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a]">
                    Department of Computer Applications
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#111111] sm:text-4xl">
                    Master of Computer Applications
                  </h2>

                  <div className="mt-3 h-[3px] w-10 rounded-full bg-[#d4af37]" />

                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <ProgrammeMiniVisualCard
                      variant="mca"
                      icon={<BookOpen size={17} />}
                      title="Computer Applications"
                      accent="#0d5c45"
                    />

                    <ProgrammeMiniVisualCard

                      variant="mca"
                      icon={<Users size={17} />}
                      title="Qualified Faculty"
                      accent="#8f1d1d"
                    />

                    <ProgrammeMiniVisualCard

                      variant="mca"
                      icon={<Target size={17} />}
                      title="Research & R&D"
                      accent="#1d355f"
                    />

                    <ProgrammeMiniVisualCard

                      variant="mca"
                      icon={<Landmark size={17} />}
                      title="Industry Focus"
                      accent="#6b4c9a"
                    />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#6b4c9a]" />
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#6b4c9a]">
                  Department of Computer Applications
                </span>

                <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                  Overview
                </h2>

                <div className="mt-2 h-[3px] w-10 rounded-full bg-[#d4af37]" />

                <div className="mt-5 space-y-4 text-base leading-7 text-[#111111]">
                  <p>
                    The department offers Master of Computer Applications (MCA) since 1994, M.Phil
                    (Computer Science) since 2009, Ph.D (Computer Science) since 2009, MCA (Lateral
                    Entry) since 2014. The department motivates Staff and Students to promote
                    Industry Institute Interaction and R&D activities. In addition to regular
                    curriculum the department organizes technical seminars, symposia, workshops,
                    industrial visits, in-plant training to expose the students to the real world
                    environments and to enable them to gain practical knowledge.
                  </p>

                  <p>
                    The website and Internet services of the institute are maintained by the
                    Department of Computer Applications. Along with that the Department offers
                    additional virtual lab classes, live classes, tutorial MOOC’s and vocational
                    augmentation. Courses through IIT Professors under MHRD’s QEEE programme.
                    Special placement opportunities on mobile development in Android/IOs platforms.
                  </p>

                  <p>
                    The MCA Programme was accredited by NBA since 2001. The department has adequate
                    infrastructure and well-equipped laboratories and it is empowered with a team of
                    highly qualified faculty members.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMME HIGHLIGHTS */}
          <section className="mt-9">
            <ProgrammeSectionHeading
              variant="mca" number="03" title="Programme Highlights" accent="#1d355f" />

            <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <ProgrammeHighlightCard
                variant="mca"
                title="Virtual Learning"
                description="Virtual lab classes, live classes and tutorial MOOCs."
                icon={<BookOpen size={17} />}
                accent="#0d5c45"
              />

              <ProgrammeHighlightCard

                variant="mca"
                title="R&D Activities"
                description="Industry interaction and research activities."
                icon={<GraduationCap size={17} />}
                accent="#1d355f"
              />

              <ProgrammeHighlightCard

                variant="mca"
                title="IT Industry"
                description="Opportunities related to emerging IT technologies."
                icon={<Landmark size={17} />}
                accent="#8f1d1d"
              />

              <ProgrammeHighlightCard

                variant="mca"
                title="Infrastructure"
                description="Well-equipped laboratories and computational facilities."
                icon={<Users size={17} />}
                accent="#6b4c9a"
              />
            </div>
          </section>
        </section>
    </ProgrammePageTemplate>
  );
}
