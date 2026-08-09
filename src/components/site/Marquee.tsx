const items = [
  "🎓 Admissions Open 2026–2027",
  "UGC Approved Distance Education",
  "UG & PG Admissions Open",
  "Apply Online Today",
  "Free Counselling",
  "Contact us on WhatsApp",
];

export function Marquee() {
  return (
    <div className="group relative z-0 border-y border-accent/20 bg-gradient-accent text-accent-foreground">
      <div className="marquee-viewport mx-auto flex max-w-[100vw] overflow-hidden py-2.5 text-sm">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="marquee-track flex shrink-0 items-center gap-8 pr-8 whitespace-nowrap group-hover:[animation-play-state:paused]"
          >
            {items.map((item) => (
              <span key={item} className="flex items-center gap-8 font-medium">
                {item}
                <span className="size-1.5 rounded-full bg-accent-foreground/50" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
