import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Section, SectionHeading } from "./Section";

const reviews = [
  {
    name: "Sana Fathima",
    programme: "MBA · Class of 2024",
    photo: review1,
    rating: 5,
    text: "I completed my MBA while working full time. Weekend live classes and recorded lectures made it genuinely possible, and the mentors never let me fall behind.",
  },
  {
    name: "Rahul Menon",
    programme: "BCA · Class of 2025",
    photo: review2,
    rating: 5,
    text: "The admission team guided me through every document. I was enrolled in four days without visiting the campus once — the whole process felt effortless.",
  },
  {
    name: "Aisha Begum",
    programme: "M.Com. · Class of 2024",
    photo: review3,
    rating: 5,
    text: "Study material on the LMS was beautifully structured and my mentor replied to doubts within hours. Real academic support, not just slides on a portal.",
  },
  {
    name: "Vignesh Kumar",
    programme: "B.Com. · Class of 2025",
    photo: review4,
    rating: 5,
    text: "A UGC recognised degree with an affordable fee plan let me finish my graduation while supporting my family. It changed the direction of my career.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rating ? "size-4 fill-accent text-accent" : "size-4 text-border"}
          aria-hidden
        />
      ))}
    </div>
  );
}

export function StudentReviews() {
  const [index, setIndex] = useState(0);
  const perView = 2;
  const pages = Math.ceil(reviews.length / perView);
  const next = useCallback(() => setIndex((i) => (i + 1) % pages), [pages]);
  const prev = () => setIndex((i) => (i - 1 + pages) % pages);

  useEffect(() => {
    const id = setInterval(next, 6500);
    return () => clearInterval(id);
  }, [next]);

  const visible = reviews.slice(index * perView, index * perView + perView);

  return (
    <Section id="reviews" className="bg-secondary/30">
      <SectionHeading
        eyebrow="Student reviews"
        title="Rated by the learners who finished"
        description="Graduates across India share what studying with us actually felt like."
      />

      <div className="mx-auto mt-14 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-6 md:grid-cols-2"
          >
            {visible.map((r) => (
              <figure
                key={r.name}
                className="group rounded-[1.75rem] border border-border/60 bg-card/70 p-7 shadow-soft backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={r.photo}
                    alt={`${r.name}, ${r.programme}`}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-14 rounded-full object-cover ring-2 ring-primary/15"
                  />
                  <figcaption>
                    <span className="font-display block font-semibold">{r.name}</span>
                    <span className="block text-sm text-muted-foreground">{r.programme}</span>
                  </figcaption>
                </div>
                <div className="mt-5">
                  <Stars rating={r.rating} />
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground sm:text-base">
                  “{r.text}”
                </blockquote>
              </figure>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous reviews"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review set ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next reviews"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card/70 backdrop-blur transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </Section>
  );
}