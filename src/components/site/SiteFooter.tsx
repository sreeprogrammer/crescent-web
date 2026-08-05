import { college } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/crescent-logo.png.asset.json";

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
    <footer className="bg-navy px-5 pt-28 pb-14 text-navy-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="rounded-3xl bg-white px-6 py-4 shadow-float">
              <img
                src={logo.url}
                alt="B.S. Abdur Rahman Crescent Institute of Science & Technology"
                className="h-14 w-auto sm:h-16"
              />
            </span>
            <span className="block text-xs tracking-[0.24em] text-navy-foreground/60 uppercase sm:text-sm">
              {college.unit}
            </span>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-base">
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

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-base text-navy-foreground/70">
            <a href={`tel:${phone.tel}`} className="transition-colors hover:text-accent">
              {phone.value}
            </a>
            <a href={`mailto:${college.email}`} className="transition-colors hover:text-accent">
              {college.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <s.icon className="size-5" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-16 border-t border-white/10 pt-10 text-center text-sm text-navy-foreground/55">
          © {new Date().getFullYear()} {college.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
