import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import convocationImg from "@/assets/convocation.jpg";
import distance from "@/assets/distance-learning.jpg";
import eventsImg from "@/assets/events.jpg";
import facultyImg from "@/assets/faculty.jpg";
import heroCampus from "@/assets/hero-campus.jpg";
import jobFairImg from "@/assets/job-fair.jpg";
import research from "@/assets/research.jpg";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ChevronRight,
  Images,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

type Photo = {
  src: string;
  alt: string;
  category: string;
};

export const galleryCategories = [
  {
    id: "distance-education",
    label: "Distance Education",
  },
  {
    id: "campus",
    label: "Campus",
  },
  {
    id: "convocation",
    label: "Convocation",
  },
  {
    id: "job-fair",
    label: "Job Fair",
  },
  {
    id: "events",
    label: "Events",
  },
  {
    id: "faculty",
    label: "Faculty",
  },
];

const photos: Photo[] = [
  {
    src: distance,
    alt: "Student attending an online class from home",
    category: "distance-education",
  },
  {
    src: research,
    alt: "Learner researching on a laptop",
    category: "distance-education",
  },
  {
    src: campus3,
    alt: "Digital library workspace",
    category: "distance-education",
  },
  {
    src: heroCampus,
    alt: "Main campus building",
    category: "campus",
  },
  {
    src: campus1,
    alt: "Students on the campus lawn",
    category: "campus",
  },
  {
    src: campus2,
    alt: "Campus corridor and study areas",
    category: "campus",
  },
  {
    src: campus4,
    alt: "Campus architecture at dusk",
    category: "campus",
  },
  {
    src: convocationImg,
    alt: "Graduates celebrating at convocation",
    category: "convocation",
  },
  {
    src: jobFairImg,
    alt: "Students meeting recruiters at the job fair",
    category: "job-fair",
  },
  {
    src: eventsImg,
    alt: "Academic seminar in the auditorium",
    category: "events",
  },
  {
    src: facultyImg,
    alt: "Faculty members of the centre",
    category: "faculty",
  },
];

export function GalleryGrid() {
  const [active, setActive] = useState<string>("all");
  const [preview, setPreview] = useState<Photo | null>(null);

  const filtered =
    active === "all"
      ? photos
      : photos.filter((photo) => photo.category === active);

  const activeLabel =
    active === "all"
      ? "All Moments"
      : galleryCategories.find((item) => item.id === active)?.label ??
        "Gallery";

  return (
    <Section id="gallery" className="!py-8 sm:!py-10">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            PREMIUM INTRO
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-7 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-7 bg-[#d4af37]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8f1d1d]">
                Campus Stories
              </span>

              <Sparkles className="size-3.5 text-[#d4af37]" />
            </div>

            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.035em] text-[#172554] sm:text-4xl">
              Moments that define our
              <span className="text-[#8f1d1d]"> community.</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Explore the learning experience, campus life, celebrations,
              events and people behind Crescent CDOE.
            </p>
          </div>

          {/* Photo count */}
          <div className="hidden rounded-2xl border border-[#d4af37]/25 bg-[#172554] px-5 py-3 text-white shadow-[0_12px_30px_rgba(23,37,84,0.15)] sm:flex sm:items-center sm:gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[#8f1d1d]">
              <Images className="size-4" />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
                Gallery
              </p>

              <p className="text-sm font-bold">
                {photos.length} Moments
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            CATEGORY NAVIGATION
        ===================================================== */}
        <div className="mb-7 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex min-w-max items-center gap-2 rounded-2xl border border-[#172554]/10 bg-white/60 p-1.5 shadow-[0_8px_25px_rgba(23,37,84,0.06)] backdrop-blur-xl">

            {[{ id: "all", label: "All Moments" }, ...galleryCategories].map(
              (category) => {
                const selected = active === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActive(category.id)}
                    className={cn(
                      "group relative flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300",
                      selected
                        ? "bg-[#172554] text-white shadow-md"
                        : "text-slate-500 hover:bg-[#8f1d1d]/8 hover:text-[#8f1d1d]",
                    )}
                  >
                    {selected && (
                      <span className="size-1.5 rounded-full bg-[#d4af37]" />
                    )}

                    {category.label}

                    {!selected && (
                      <ChevronRight className="size-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    )}
                  </button>
                );
              },
            )}
          </div>
        </div>

        {/* =====================================================
            ACTIVE CATEGORY BAR
        ===================================================== */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="size-4 text-[#8f1d1d]" />

            <span className="text-sm font-bold text-[#172554]">
              {activeLabel}
            </span>

            <span className="rounded-full bg-[#d4af37]/15 px-2 py-0.5 text-[10px] font-bold text-[#8f1d1d]">
              {filtered.length}
            </span>
          </div>

          <div className="hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-400 sm:flex">
            <span className="size-1.5 rounded-full bg-[#d4af37]" />
            Click any image to explore
          </div>
        </div>

        {/* =====================================================
            PREMIUM MASONRY GALLERY
        ===================================================== */}
        <motion.div
          layout
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {filtered.map((photo, i) => (
            <motion.button
              key={`${photo.src}-${i}`}
              type="button"
              layout
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: Math.min(i * 0.045, 0.25),
              }}
              onClick={() => setPreview(photo)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.35rem] border border-[#172554]/10 bg-[#172554] text-left shadow-[0_8px_25px_rgba(23,37,84,0.08)] outline-none transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,37,84,0.16)] focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              {/* Image */}
              <span className="relative block overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Dark cinematic overlay */}
                <span className="absolute inset-0 bg-gradient-to-t from-[#172554]/95 via-[#172554]/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-85" />

                {/* Gold corner */}
                <span className="absolute right-3 top-3 flex size-9 translate-y-1 items-center justify-center rounded-xl border border-white/15 bg-[#172554]/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Maximize2 className="size-4" />
                </span>

                {/* Bottom information */}
                <span className="absolute inset-x-0 bottom-0 p-4">
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/30 bg-[#172554]/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#d4af37] backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-[#d4af37]" />
                    {galleryCategories.find(
                      (item) => item.id === photo.category,
                    )?.label}
                  </span>

                  <span className="block max-w-[90%] text-sm font-semibold leading-5 text-white">
                    {photo.alt}
                  </span>

                  <span className="mt-2 flex items-center gap-1 text-[10px] font-medium text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View image
                    <ArrowUpRight className="size-3" />
                  </span>
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* =====================================================
            EMPTY STATE
        ===================================================== */}
        {filtered.length === 0 && (
          <div className="rounded-3xl border border-dashed border-[#d4af37]/40 bg-[#f7f4ee] px-6 py-12 text-center">
            <Images className="mx-auto size-8 text-[#8f1d1d]" />

            <p className="mt-3 text-sm font-semibold text-[#172554]">
              No images available
            </p>

            <p className="mt-1 text-xs text-slate-500">
              More moments will be added soon.
            </p>
          </div>
        )}

        {/* =====================================================
            BOTTOM PREMIUM STRIP
        ===================================================== */}
        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />

          <div className="flex items-center gap-2 rounded-full border border-[#172554]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="size-1.5 rounded-full bg-[#8f1d1d]" />

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#172554]">
              Learn • Connect • Grow
            </span>

            <span className="size-1.5 rounded-full bg-[#d4af37]" />
          </div>

          <span className="h-px w-10 bg-[#d4af37]" />
        </div>
      </div>

      {/* =====================================================
          IMAGE PREVIEW
      ===================================================== */}
      <Dialog
        open={!!preview}
        onOpenChange={(open) => !open && setPreview(null)}
      >
        <DialogContent className="max-w-5xl overflow-hidden rounded-[1.5rem] border border-[#d4af37]/30 bg-[#172554] p-2 shadow-2xl">
          <DialogTitle className="sr-only">
            {preview?.alt ?? "Gallery image"}
          </DialogTitle>

          {preview && (
            <div className="relative overflow-hidden rounded-[1.15rem]">
              <img
                src={preview.src}
                alt={preview.alt}
                width={1600}
                height={1000}
                className="max-h-[78vh] w-full object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#172554]/95 to-transparent p-5 pt-14">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                      {galleryCategories.find(
                        (item) => item.id === preview.category,
                      )?.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      {preview.alt}
                    </p>
                  </div>

                  <div className="hidden size-9 items-center justify-center rounded-xl bg-[#8f1d1d] sm:flex">
                    <Camera className="size-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}