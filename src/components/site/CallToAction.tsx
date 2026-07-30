import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { AmbientShapes } from "./AmbientShapes";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function CallToAction() {
  return (
    <Section id="cta">
      <Reveal>
        <div className="bg-gradient-primary relative overflow-hidden rounded-[2rem] px-6 py-20 text-center shadow-float sm:px-16">
          <AmbientShapes />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl leading-tight font-semibold text-balance text-primary-foreground sm:text-5xl">
              Your application starts with one page
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-primary-foreground/75 sm:text-lg">
              Join 34,000 students from 118 countries. Applications for the 2026–27 academic year
              close on 15 March.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="gold" size="pill-lg" asChild>
                <a href="#admissions">
                  Apply now
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="glass" size="pill-lg" asChild>
                <a href="#campus">
                  <CalendarCheck className="size-4" />
                  Book an open day
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}