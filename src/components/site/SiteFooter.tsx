import { college } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { Facebook, GraduationCap, Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Programmes", to: "/programmes" },
  { label: "Admission", to: "/admission" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteFooter() {
  const phone = college.numbers[0];

  return (
    <footer className="bg-navy px-5 pt-20 pb-10 text-navy-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex items-center gap-3">
            <span className="bg-gradient-accent flex size-11 items-center justify-center rounded-2xl">
              <GraduationCap className="size-6 text-accent-foreground" aria-hidden />
            </span>
            <span className="text-left leading-tight">
              <span className="font-display block text-base font-semibold">{college.name}</span>
              <span className="block text-[0.62rem] tracking-[0.2em] text-navy-foreground/55 uppercase">
                {college.unit}
              </span>
            </span>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-navy-foreground/75 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-navy-foreground/70">
            <a href={`tel:${phone.tel}`} className="transition-colors hover:text-accent">
              {phone.value}
            </a>
            <a href={`mailto:${college.email}`} className="transition-colors hover:text-accent">
              {college.email}
            </a>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <s.icon className="size-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-navy-foreground/50">
          © {new Date().getFullYear()} {college.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
