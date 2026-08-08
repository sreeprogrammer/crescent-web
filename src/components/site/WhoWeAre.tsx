import whoWeAreImage from "@/assets/faculty.jpg";
import { BookOpenCheck, Compass, GraduationCap, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const pillars = [
  { icon: Compass, title: "Our Mission", body: "Make quality higher education accessible to every learner, wherever they are." },
  { icon: GraduationCap, title: "Our Vision", body: "A globally respected centre for flexible, values-driven online learning." },
  { icon: BookOpenCheck, title: "Academic Excellence", body: "UGC-recognised curricula delivered by experienced faculty and mentors." },
  { icon: Users, title: "Student Centered", body: "Personal counselling, mentoring and career support from day one." },
];

export function WhoWeAre() {
  return (
    <Section id="who-we-are">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="border-border bg-gradient-accent text-accent-foreground shadow-glow inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium tracking-[0.16em] uppercase">
            Who We Are
          </span>
          <h2 className="font-display mt-5 text-3xl leading-[1.1] font-semibold text-balance sm:text-4xl">
            Crescent Online Distance Education
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-relaxed text-pretty">
            The Centre for Distance and Online Education extends the university&apos;s decades of
            academic tradition to learners who need flexibility. Our UGC-recognised undergraduate,
            postgraduate and certification programmes are delivered fully online — with digital
            study material, recorded lectures, live weekend classes and continuous mentoring.
          </p>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed text-pretty">
            Whether you are working, relocating or returning to study, you learn at your own pace
            and graduate with a degree that carries the same recognition as a regular programme.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.06 * i}>
                <div className="border-border/70 bg-card/70 shadow-soft hover:shadow-float h-full rounded-2xl border p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
                  <p.icon className="text-primary size-5" aria-hidden />
                  <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="group relative overflow-hidden rounded-[2rem] border border-border/70 shadow-float">
            <img
              src={whoWeAreImage}
              alt="Faculty members of the Centre for Distance and Online Education"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}