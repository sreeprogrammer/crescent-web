import heroImg from "@/assets/distance-learning.jpg";
import { Button } from "@/components/ui/button";
import { college } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, MessageCircle, Users } from "lucide-react";
import { AmbientShapes } from "./AmbientShapes";

const cards = [
  { icon: Award, value: "UGC", label: "Approved programmes", className: "-left-4 top-10 sm:left-6" },
  { icon: Users, value: "25,000+", label: "Learners enrolled", className: "-right-3 bottom-24 sm:right-6" },
  { icon: BookOpen, value: "10+", label: "UG & PG programmes", className: "hidden sm:flex left-8 bottom-8" },
];

export function HeroDE() {
  return (
    <section className="bg-gradient-hero relative overflow-hidden px-4 py-14 sm:px-6 md:py-20">
      <AmbientShapes />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-[0.16em] uppercase shadow-soft">
            Admissions open 2026–2027
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
            Empowering Your Future Through{" "}
            <span className="text-gradient">Distance Education</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            Join UGC Approved Undergraduate and Postgraduate Programmes with Flexible Learning,
            Online Admissions and Expert Student Support.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button variant="hero" size="pill-lg" asChild>
              <Link to="/admission" hash="how-to-apply">
                Apply Now
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button variant="outline" size="pill-lg" asChild>
              <Link to="/programmes">Explore Courses</Link>
            </Button>
            <Button variant="secondary" size="pill-lg" asChild>
              <a
                href={`https://wa.me/${college.whatsapp}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp Counselling
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-float">
            <img
              src={heroImg}
              alt="Student attending an online distance education class on a laptop"
              width={1600}
              height={1200}
              className="h-[38vh] w-full object-cover sm:h-[52vh]"
            />
          </div>
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.6, delay: 0.4 + i * 0.15 },
                y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
              }}
              className={`glass-panel absolute z-10 flex items-center gap-3 rounded-3xl px-4 py-3 ${card.className}`}
            >
              <span className="bg-gradient-primary flex size-10 items-center justify-center rounded-2xl">
                <card.icon className="size-5 text-primary-foreground" aria-hidden />
              </span>
              <span>
                <span className="font-display block text-lg font-semibold">{card.value}</span>
                <span className="block text-xs text-muted-foreground">{card.label}</span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
