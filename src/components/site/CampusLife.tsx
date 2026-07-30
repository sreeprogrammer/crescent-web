import campus1 from "@/assets/campus-1.jpg";
import campus2 from "@/assets/campus-2.jpg";
import campus3 from "@/assets/campus-3.jpg";
import campus4 from "@/assets/campus-4.jpg";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

const gallery = [
  {
    src: campus1,
    alt: "Students talking in the sunlit atrium of the Northvale central library",
    caption: "The Aldridge Library",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: campus2,
    alt: "Researchers working in a Northvale University science laboratory",
    caption: "Life sciences labs",
    span: "",
  },
  {
    src: campus3,
    alt: "Graduating students celebrating on the campus lawn",
    caption: "Commencement on the Great Lawn",
    span: "",
  },
  {
    src: campus4,
    alt: "Students playing football on the university athletics field at dusk",
    caption: "Athletics & 62 student clubs",
    span: "lg:col-span-2",
  },
];

export function CampusLife() {
  return (
    <Section id="campus">
      <SectionHeading
        eyebrow="Campus life"
        title="A campus you'll never want to leave"
        description="Nine colleges, 300 acres of parkland, studios open until 2am and a student union that runs 62 clubs across sport, music and enterprise."
      />
      <div className="mt-14 grid auto-rows-[13rem] gap-5 sm:grid-cols-2 sm:auto-rows-[15rem] lg:grid-cols-4">
        {gallery.map((item, i) => (
          <Reveal
            key={item.caption}
            delay={i * 0.08}
            className={cn("group relative overflow-hidden rounded-[1.75rem] shadow-soft", item.span)}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
            <span className="absolute bottom-5 left-5 text-sm font-medium text-primary-foreground">
              {item.caption}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}