import { GalleryGrid } from "@/components/site/GalleryGrid";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Camera,
  CheckCircle2,
  Images,
  Sparkles,
} from "lucide-react";

const title = "Gallery — Campus, Convocation, Job Fair & Events";

const description =
  "Browse photographs from distance education classes, campus life, convocation ceremonies, job fairs, academic events and our faculty.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <main className="overflow-hidden bg-[#f7f4ee]">

        {/* =====================================================
            PREMIUM GALLERY HERO
        ===================================================== */}
        <section className="relative overflow-hidden bg-[#f7f4ee]">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-32 -top-32 size-80 rounded-full bg-[#8f1d1d]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -right-32 size-96 rounded-full bg-[#d4af37]/10 blur-3xl" />

          {/* Decorative lines */}
          <div className="pointer-events-none absolute right-[8%] top-10 hidden h-24 w-px bg-[#d4af37]/30 lg:block" />
          <div className="pointer-events-none absolute right-[8%] top-10 hidden w-24 border-t border-[#d4af37]/30 lg:block" />

          <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-9 sm:px-8 sm:pb-10 lg:px-12 lg:pt-11">

            <div className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr]">

              {/* =================================================
                  LEFT CONTENT
              ================================================= */}
              <div>

                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-white/70 px-3.5 py-1.5 shadow-sm backdrop-blur">
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#8f1d1d]/10">
                    <Camera className="size-3 text-[#8f1d1d]" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#8f1d1d]">
                    Crescent Gallery
                  </span>
                </div>

                {/* Heading */}
                <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#172554] sm:text-5xl lg:text-[4rem]">
                  Moments that
                  <span className="text-[#8f1d1d]"> define </span>
                  our journey.
                </h1>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                  Explore the people, places and experiences that make our
                  academic community special — from campus life to
                  convocations, events and student achievements.
                </p>

                {/* Trust points */}
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5">

                  {[
                    "Campus Life",
                    "Academic Events",
                    "Student Moments",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 text-[11px] font-semibold text-[#172554]"
                    >
                      <span className="flex size-5 items-center justify-center rounded-full bg-[#8f1d1d]/10">
                        <CheckCircle2 className="size-3 text-[#8f1d1d]" />
                      </span>

                      {item}
                    </div>
                  ))}

                </div>

                {/* Scroll CTA */}
                <a
                  href="#gallery-content"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8f1d1d] px-4 py-2.5 text-[11px] font-bold text-white shadow-lg shadow-[#8f1d1d]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#701616]"
                >
                  Explore Gallery
                  <ArrowDown className="size-3.5" />
                </a>

              </div>

              {/* =================================================
                  RIGHT PREMIUM VISUAL CARD
              ================================================= */}
              <div className="relative">

                {/* Glow */}
                <div className="absolute -inset-4 rounded-[2.2rem] bg-[#d4af37]/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2rem] border border-[#d4af37]/30 bg-[#172554] p-5 text-white shadow-[0_20px_60px_rgba(23,37,84,0.22)]">

                  {/* Decorative glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#8f1d1d]/20 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-[#d4af37]/10 blur-3xl" />

                  <div className="relative">

                    {/* Top row */}
                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex size-11 items-center justify-center rounded-2xl bg-[#8f1d1d] shadow-lg">
                          <Images className="size-5 text-white" />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                            Visual Stories
                          </p>

                          <h2 className="mt-0.5 text-lg font-bold">
                            Our Community
                          </h2>
                        </div>

                      </div>

                      <Sparkles className="size-5 text-[#d4af37]" />

                    </div>

                    {/* Category cards */}
                    <div className="mt-5 grid grid-cols-2 gap-3">

                      {[
                        {
                          title: "Campus",
                          subtitle: "Life & Learning",
                        },
                        {
                          title: "Convocation",
                          subtitle: "Celebrating Success",
                        },
                        {
                          title: "Job Fair",
                          subtitle: "Career Opportunities",
                        },
                        {
                          title: "Events",
                          subtitle: "Beyond Classroom",
                        },
                      ].map((item, index) => (
                        <div
                          key={item.title}
                          className="group rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37]/35 hover:bg-white/[0.09]"
                        >
                          <div className="flex items-center justify-between">

                            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af37]">
                              0{index + 1}
                            </span>

                            <span className="size-1.5 rounded-full bg-[#8f1d1d]" />

                          </div>

                          <p className="mt-3 text-xs font-bold">
                            {item.title}
                          </p>

                          <p className="mt-1 text-[9px] text-white/45">
                            {item.subtitle}
                          </p>
                        </div>
                      ))}

                    </div>

                    {/* Bottom strip */}
                    <div className="mt-3 flex items-center justify-between rounded-2xl border border-[#d4af37]/15 bg-[#d4af37]/10 px-4 py-3">

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                          Discover
                        </p>

                        <p className="mt-0.5 text-[11px] font-medium text-white/75">
                          Stories beyond the classroom
                        </p>
                      </div>

                      <Camera className="size-4 text-[#d4af37]" />

                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY CONTENT
        ===================================================== */}
        <section
          id="gallery-content"
          className="scroll-mt-24 bg-[#f7f4ee] px-5 pb-8 pt-2 sm:px-8 sm:pb-10"
        >
          <div className="mx-auto max-w-7xl">

            {/* Compact gallery heading */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#8f1d1d]">
                  Explore moments
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-[#172554] sm:text-3xl">
                  Life at Crescent
                </h2>
              </div>

              <p className="max-w-md text-xs leading-5 text-slate-500 sm:text-right">
                Browse campus memories, academic activities, student
                achievements and important moments from our community.
              </p>

            </div>

            {/* Existing gallery */}
            <GalleryGrid />

          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}
        <section className="px-5 pb-8 sm:px-8">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 rounded-[1.75rem] bg-[#172554] px-6 py-5 text-white shadow-[0_15px_45px_rgba(23,37,84,0.16)] sm:flex-row sm:px-8">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#d4af37]">
                Experience Crescent
              </p>

              <h3 className="mt-1 text-lg font-bold">
                Ready to become part of our journey?
              </h3>
            </div>

            <a
              href="/programmes"
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-[11px] font-bold text-[#172554] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3c35a]"
            >
              Explore Programmes
              <ArrowDown className="size-3.5 -rotate-90" />
            </a>

          </div>

        </section>

      </main>
    </SiteLayout>
  );
}