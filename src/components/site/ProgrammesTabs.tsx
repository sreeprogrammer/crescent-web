import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { certificationProgrammes, degreeProgrammes } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Clock, GraduationCap, Smartphone, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

function ProgrammeCard({
  name,
  desc,
  duration,
  icon: Icon,
  delay = 0,
}: {
  name: string;
  desc: string;
  duration: string;
  icon: typeof GraduationCap;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="border-border/70 bg-card/80 shadow-soft hover:shadow-float flex h-full flex-col rounded-[1.75rem] border p-7 backdrop-blur-xl transition-shadow duration-300"
      >
        <span className="bg-secondary flex size-12 items-center justify-center rounded-2xl">
          <Icon className="text-primary size-5" aria-hidden />
        </span>
        <h4 className="mt-6 text-lg font-semibold">{name}</h4>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{desc}</p>
        <p className="text-muted-foreground mt-5 flex items-center gap-2 text-sm">
          <Clock className="text-primary size-4" aria-hidden />
          Duration: {duration}
        </p>
        <Button variant="hero" size="pill" className="mt-7 w-full" asChild>
          <Link to="/admission" hash="how-to-apply">
            Apply Now
          </Link>
        </Button>
      </motion.article>
    </Reveal>
  );
}

export function ProgrammesTabs() {
  return (
    <Section id="programmes-offered">
      <SectionHeading
        eyebrow="Programmes Offered"
        title="Degree and certification programmes"
        description="Choose a UGC-recognised degree or a focused certification designed for working professionals."
      />

      <Tabs defaultValue="degree" className="mt-12">
        <TabsList className="bg-card/70 border-border/70 shadow-soft mx-auto grid h-auto w-full max-w-xl grid-cols-2 gap-2 rounded-2xl border p-2 backdrop-blur-xl">
          <TabsTrigger
            value="degree"
            className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl px-4 py-3 text-sm font-medium transition-all"
          >
            Degree Programmes
          </TabsTrigger>
          <TabsTrigger
            value="certification"
            className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground rounded-xl px-4 py-3 text-sm font-medium transition-all"
          >
            Certification Programmes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="degree" className="mt-12 space-y-14">
          {degreeProgrammes.map((group) => (
            <div key={group.group}>
              <h3 className="font-display text-sm font-semibold tracking-[0.2em] uppercase">
                {group.group}
              </h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((p, i) => (
                  <ProgrammeCard key={p.name} {...p} icon={GraduationCap} delay={(i % 3) * 0.08} />
                ))}
              </div>
            </div>
          ))}

          <Reveal>
            <div className="border-border/70 bg-secondary/50 rounded-[1.75rem] border border-dashed p-8 text-center backdrop-blur-xl">
              <h3 className="font-display text-sm font-semibold tracking-[0.2em] uppercase">PhD</h3>
              <p className="mt-3 flex items-center justify-center gap-2 text-lg font-semibold">
                <Sparkles className="text-primary size-5" aria-hidden />
                PhD Programmes – Coming Soon
              </p>
            </div>
          </Reveal>
        </TabsContent>

        <TabsContent value="certification" className="mt-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificationProgrammes.map((p, i) => (
              <ProgrammeCard key={p.name} {...p} icon={Smartphone} delay={i * 0.08} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
}