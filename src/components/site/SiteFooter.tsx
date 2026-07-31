import { college, navItems } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { Facebook, GraduationCap, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
];

const columns = navItems.filter((i) => i.children);

export function SiteFooter() {
  return (
    <footer className="bg-navy px-4 pt-16 pb-8 text-navy-foreground sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-gradient-accent flex size-11 items-center justify-center rounded-2xl">
                <GraduationCap className="size-6 text-accent-foreground" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="font-display block text-base font-semibold">{college.name}</span>
                <span className="block text-[0.62rem] tracking-[0.2em] text-navy-foreground/60 uppercase">
                  {college.unit}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              UGC approved undergraduate and postgraduate distance education programmes with
              flexible learning, online admissions and lifelong career support.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                {college.address}
              </li>
              {college.numbers.map((n) => (
                <li key={n.label} className="flex items-center gap-3">
                  <Phone className="size-4 text-accent" aria-hidden />
                  <a href={`tel:${n.tel}`} className="transition-colors hover:text-accent">
                    {n.label}: {n.value}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-accent" aria-hidden />
                <a href={`mailto:${college.email}`} className="transition-colors hover:text-accent">
                  {college.email}
                </a>
              </li>
            </ul>
            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
                >
                  <s.icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="text-xs tracking-[0.18em] text-navy-foreground/50 uppercase">
                Quick Links
              </h3>
              <ul className="mt-5 space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-navy-foreground/75 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {columns.map((column) => (
              <div key={column.label}>
                <h3 className="text-xs tracking-[0.18em] text-navy-foreground/50 uppercase">
                  {column.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {column.children!.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.to}
                        hash={child.hash}
                        className="text-sm text-navy-foreground/75 transition-colors hover:text-accent"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xs tracking-[0.18em] text-navy-foreground/50 uppercase">
                Find Us
              </h3>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  title="Campus location map"
                  src={college.mapEmbed}
                  loading="lazy"
                  className="h-44 w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-navy-foreground/55">
            © {new Date().getFullYear()} {college.name} — {college.unit}. All rights reserved.
          </p>
          <p className="text-xs text-navy-foreground/55">UGC-DEB Approved | AICTE Recognised</p>
        </div>
      </div>
    </footer>
  );
}
