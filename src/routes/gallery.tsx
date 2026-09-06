import { GalleryGrid } from "@/components/site/GalleryGrid";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";

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

/* =========================================================
   FONT
   Same font style used in Admission page
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

function GalleryPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#f7f4ee]"
      >
        {/* =====================================================
            GALLERY HEADER
            HERO CONTENT REMOVED
        ===================================================== */}

        <section className="bg-[#f7f4ee] px-5 pb-5 pt-6 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="border-b border-[#d9d4ca] pb-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#8f1d1d]">
                Crescent Gallery
              </p>

              <h1 className="mt-1.5 text-[25px] font-bold tracking-[-0.02em] text-[#20242b] sm:text-[29px]">
                Gallery
              </h1>

              <div className="mt-3 h-[3px] w-20 rounded-full bg-[#b08a24]" />

              <p className="mt-4 max-w-4xl text-[12px] font-medium leading-6 text-[#5e6470] sm:text-[13px]">
                Browse photographs from distance education classes, campus
                life, convocation ceremonies, job fairs, academic events and
                our faculty.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            GALLERY CONTENT
        ===================================================== */}

        <section
          id="gallery-content"
          className="scroll-mt-24 bg-[#f7f4ee] px-5 pb-8 pt-2 sm:px-8 sm:pb-10 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            {/* Compact gallery heading */}

            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#8f1d1d]">
                  Explore moments
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight text-black sm:text-3xl">
                  Life at Crescent
                </h2>

                <div className="mt-2 h-[3px] w-16 rounded-full bg-[#b08a24]" />
              </div>

              <p className="max-w-md text-xs leading-5 text-black sm:text-right">
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

        <section className="px-5 pb-8 sm:px-8 lg:px-12">
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
              className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-[11px] font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e3c35a]"
            >
              Explore Programmes
              <span className="text-sm">→</span>
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default GalleryPage;