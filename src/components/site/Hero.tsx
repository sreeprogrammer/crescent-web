import heroCampus from "@/assets/hero-campus.jpg";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, GlobeLock, PlayCircle, Users } from "lucide-react";
import { AmbientShapes } from "./AmbientShapes";

const floatingCards = [
  {
    icon: Award,
    value: "#12",
    label: "QS World Ranking 2026",
    className: "left-4 top-8 sm:left-8 lg:-left-6 lg:top-16",
    delay: 0.5,
  },
  {
    icon: Users,
    value: "97%",
    label: "Graduate placement rate",
    className: "right-4 bottom-24 sm:right-8 lg:-right-6 lg:bottom-32",
    delay: 0.7,
  },
  {
    icon: GlobeLock,
    value: "118",
    label: "Nationalities on campus",
    className: "hidden lg:flex left-10 bottom-10",
    delay: 0.9,
  },
];

export function Hero() {
  return (
    <section id="top" className="bg-gradient-hero relative overflow-hidden px-5 pt-14 pb-20 sm:px-8 md:pt-20">
      <AmbientShapes />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-[0.16em] uppercase shadow-soft">
            Established 1892 · Northvale, UK
          </span>
          <h1 className="mt-7 text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-7xl">
            A university built for the <span className="text-gradient">next century</span> of ideas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            World-class teaching, frontier research and a campus designed for people. Northvale
            prepares graduates to lead across science, technology, medicine and the arts.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="hero" size="pill-lg" asChild>
              <a href="#programmes">
                Explore programmes
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="glass" size="pill-lg" asChild>
              <a href="#campus">
                <PlayCircle className="size-4" />
                Take the campus tour
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="group overflow-hidden rounded-[2rem] border border-border/60 shadow-float">
            <img
              src={heroCampus}
              alt="Northvale University campus at golden hour with students walking across the main plaza"
              width={1920}
              height={1200}
              className="h-[42vh] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 sm:h-[52vh] lg:h-[62vh]"
            />
          </div>

          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel absolute flex items-center gap-3 rounded-3xl px-5 py-4 ${card.className}`}
            >
              <span className="bg-gradient-accent flex size-11 items-center justify-center rounded-2xl">
                <card.icon className="size-5 text-accent-foreground" />
              </span>
              <span>
                <span className="font-display block text-xl font-semibold">{card.value}</span>
                <span className="block text-xs text-muted-foreground">{card.label}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}