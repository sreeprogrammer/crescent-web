import { GraduationCap, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const columns = [
  {
    title: "Study",
    links: ["Undergraduate", "Postgraduate", "Online learning", "Scholarships", "Open days"],
  },
  {
    title: "University",
    links: ["About Northvale", "Faculties", "Research", "Leadership", "Careers"],
  },
  {
    title: "Community",
    links: ["Student union", "Alumni", "Giving", "Sport", "Libraries"],
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-primary px-5 pt-20 pb-10 text-primary-foreground sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-gradient-accent flex size-10 items-center justify-center rounded-2xl">
                <GraduationCap className="size-5 text-accent-foreground" />
              </span>
              <span className="leading-tight">
                <span className="font-display block text-base font-semibold">Northvale</span>
                <span className="block text-[0.65rem] tracking-[0.22em] text-primary-foreground/60 uppercase">
                  University
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              A research university founded in 1892, educating people who go on to do useful,
              difficult and lasting work.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-primary-foreground/65">
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-accent" />
                Northvale Park, Cambridgeshire, NV1 4QT
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-accent" />
                +44 (0)20 7946 0210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-accent" />
                admissions@northvale.ac.uk
              </li>
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs tracking-[0.18em] text-primary-foreground/50 uppercase">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="text-sm text-primary-foreground/75 transition-colors hover:text-accent"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-primary-foreground/12 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Northvale University. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#top"
                aria-label={social.label}
                className="flex size-10 items-center justify-center rounded-full border border-primary-foreground/15 transition-colors hover:border-accent hover:text-accent"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}