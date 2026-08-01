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
import { useState } from "react";
import { Section } from "./Section";

type Photo = { src: string; alt: string; category: string };

export const galleryCategories = [
  { id: "distance-education", label: "Distance Education" },
  { id: "campus", label: "Campus" },
  { id: "convocation", label: "Convocation" },
  { id: "job-fair", label: "Job Fair" },
  { id: "events", label: "Events" },
  { id: "faculty", label: "Faculty" },
];

const photos: Photo[] = [
  { src: distance, alt: "Student attending an online class from home", category: "distance-education" },
  { src: research, alt: "Learner researching on a laptop", category: "distance-education" },
  { src: campus3, alt: "Digital library workspace", category: "distance-education" },
  { src: heroCampus, alt: "Main campus building", category: "campus" },
  { src: campus1, alt: "Students on the campus lawn", category: "campus" },
  { src: campus2, alt: "Campus corridor and study areas", category: "campus" },
  { src: campus4, alt: "Campus architecture at dusk", category: "campus" },
  { src: convocationImg, alt: "Graduates celebrating at convocation", category: "convocation" },
  { src: jobFairImg, alt: "Students meeting recruiters at the job fair", category: "job-fair" },
  { src: eventsImg, alt: "Academic seminar in the auditorium", category: "events" },
  { src: facultyImg, alt: "Faculty members of the centre", category: "faculty" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<string>("all");
  const [preview, setPreview] = useState<Photo | null>(null);

  const filtered = active === "all" ? photos : photos.filter((p) => p.category === active);

  return (
    <Section id="gallery">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[{ id: "all", label: "All" }, ...galleryCategories].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActive(c.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
              active === c.id
                ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow"
                : "border-border bg-card/70 text-muted-foreground hover:text-primary hover:border-primary/40 backdrop-blur-xl",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {filtered.map((photo, i) => (
          <motion.button
            key={photo.src + i}
            type="button"
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setPreview(photo)}
            className="group border-border/70 shadow-soft hover:shadow-float block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] border transition-all duration-300 hover:-translate-y-1.5"
          >
            <span className="relative block">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="from-navy/80 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-5 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.alt}
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="overflow-hidden rounded-[1.75rem] p-2 sm:max-w-3xl">
          <DialogTitle className="sr-only">{preview?.alt ?? "Gallery image"}</DialogTitle>
          {preview ? (
            <img
              src={preview.src}
              alt={preview.alt}
              width={1200}
              height={800}
              className="w-full rounded-[1.4rem] object-contain"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}