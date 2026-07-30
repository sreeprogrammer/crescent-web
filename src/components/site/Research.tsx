import researchImg from "@/assets/research.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const highlights = [
  { value: 412, suffix: "m", prefix: "£", label: "Annual research funding" },
  { value: 38, suffix: "", prefix: "", label: "Spin-out companies since 2020" },
  { value: 9, suffix: "", prefix: "", label: "National research institutes" },
];

export function Research() {
  return (
    <Section id="research">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="group overflow-hidden rounded-[2rem] shadow-float">
          <img
            src={researchImg}
            alt="Engineering students working with robotics equipment in the Northvale innovation lab"
            loading="lazy"
            width={1280}
            height={960}
            className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
          />
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Research & innovation"
            title="Work that leaves the lab"
            description="From fusion materials to vaccine platforms, Northvale research reaches production. Our translation office has taken 38 ideas from bench to company in five years."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <p className="font-display text-3xl font-semibold">
                  {item.prefix}
                  <Counter to={item.value} />
                  {item.suffix}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Button variant="hero" size="pill-lg" className="mt-10" asChild>
              <a href="#news">
                Read our research stories
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}