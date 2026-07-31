import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Section, SectionHeading } from "./Section";

const testimonials = [
  {
    quote:
      "I completed my MBA while working full time. Weekend live classes and recorded lectures made it genuinely possible.",
    name: "Sana Fathima",
    role: "MBA 2024 · Operations Analyst",
  },
  {
    quote:
      "The admission team guided me through every document. I was enrolled in four days without visiting the campus once.",
    name: "Rahul Menon",
    role: "BCA 2025 · Junior Developer",
  },
  {
    quote:
      "Study material on the LMS was well structured, and my mentor replied to doubts within hours. Real support, not just slides.",
    name: "Aisha Begum",
    role: "M.Com. 2024 · Accounts Executive",
  },
  {
    quote:
      "A UGC recognised degree with an affordable fee plan let me finish my graduation while supporting my family.",
    name: "Vignesh Kumar",
    role: "B.Com. 2025 · Banking Associate",
  },
];

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const active = testimonials[index];

  return (
    <Section id="testimonials" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Student voices"
        title="Learners who made it work"
        description="Graduates from across India share how flexible distance learning changed their careers."
      />
      <div className="relative mx-auto mt-14 max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-border/70 bg-card p-8 text-center shadow-soft sm:p-12"
          >
            <Quote className="mx-auto size-8 text-primary" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-pretty sm:text-xl">“{active.quote}”</p>
            <footer className="mt-7">
              <span className="font-display block font-semibold">{active.name}</span>
              <span className="block text-sm text-muted-foreground">{active.role}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-primary" : "w-2 bg-border"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
      </div>
    </Section>
  );
}
