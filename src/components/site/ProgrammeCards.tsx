import { Button } from "@/components/ui/button";
import { pgProgrammes, ugProgrammes } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, GraduationCap, UserCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

function Grid({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: typeof ugProgrammes;
}) {
  return (
    <div id={id} className="mt-14 scroll-mt-40">
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.name} delay={(i % 3) * 0.08}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-float"
            >
              <span className="bg-secondary flex size-12 items-center justify-center rounded-2xl">
                <GraduationCap className="size-5 text-primary" aria-hidden />
              </span>
              <h4 className="mt-6 text-lg font-semibold">{p.name}</h4>
              <p className="text-sm text-muted-foreground">{p.full}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" aria-hidden />
                  Duration: {p.duration}
                </li>
                <li className="flex items-start gap-2">
                  <UserCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  Eligibility: {p.eligibility}
                </li>
              </ul>
              <Button variant="hero" size="pill" className="mt-7 w-full" asChild>
                <Link to="/admission" hash="how-to-apply">
                  Apply Now
                </Link>
              </Button>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function ProgrammeCards({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <Section id="programmes">
      {withHeading ? (
        <SectionHeading
          eyebrow="Programmes offered"
          title="UG & PG programmes built for working learners"
          description="Study at your own pace with UGC approved curricula, digital study material and continuous academic mentoring."
        />
      ) : null}
      <Grid id="ug" title="UG Programmes" items={ugProgrammes} />
      <Grid id="pg" title="PG Programmes" items={pgProgrammes} />
    </Section>
  );
}
