import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import logo from "@/assets/crescent-logo.png.asset.json";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Admissions", to: "/admission" },
  { label: "Academics", to: "/programmes" },
  { label: "Placements", to: "/students-corner" },
  { label: "Careers", to: "/about" },
  { label: "Contact Us", to: "/contact" },
] as const;

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube },
];

export function SiteFooter() {
  return (
    <footer className="bg-footer-blue px-5 pt-16 pb-7 text-footer-foreground sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 lg:grid-cols-[1.45fr_0.8fr_0.9fr] lg:gap-20">
          <div className="space-y-6 text-center md:text-left">
            <img
              src={logo.url}
              alt="B.S. Abdur Rahman Crescent Institute of Science & Technology"
              className="mx-auto h-20 w-auto rounded-2xl bg-white px-4 py-2.5 shadow-float md:mx-0 sm:h-24"
            />
            <div className="space-y-3 text-sm leading-relaxed text-footer-foreground/80 sm:text-[0.95rem]">
              <p className="max-w-md font-display text-base font-semibold leading-snug text-footer-foreground sm:text-lg">
                B.S. Abdur Rahman Crescent Institute of Science & Technology
              </p>
              <p className="flex items-start justify-center gap-2 md:justify-start">
                <MapPin className="mt-0.5 size-4 shrink-0 text-footer-gold" aria-hidden />
                <span>GST Road, Vandalur, Chennai – 600048<br />Tamil Nadu, India</span>
              </p>
              <a
                href="mailto:admissions@crescent.education"
                className="flex items-center justify-center gap-2 transition-colors hover:text-footer-gold md:justify-start"
              >
                <Mail className="size-4 shrink-0 text-footer-gold" aria-hidden />
                admissions@crescent.education
              </a>
              <a
                href="tel:+914422751347"
                className="flex items-center justify-center gap-2 transition-colors hover:text-footer-gold md:justify-start"
              >
                <Phone className="size-4 shrink-0 text-footer-gold" aria-hidden />
                +91 44 22751347
              </a>
            </div>
          </div>

          <nav aria-label="Footer quick links" className="text-center md:text-left">
            <h2 className="font-display text-lg font-semibold text-footer-foreground">Quick Links</h2>
            <ul className="mt-5 space-y-3.5 text-sm text-footer-foreground/78">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center transition-colors hover:text-footer-gold"
                  >
                    <span className="relative after:absolute after:right-0 after:-bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-footer-gold after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-center md:text-left">
            <h2 className="font-display text-lg font-semibold text-footer-foreground">Follow Us</h2>
            <div className="mt-5 flex justify-center gap-3 md:justify-start">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex size-11 items-center justify-center rounded-full border border-footer-foreground/20 bg-footer-surface text-footer-foreground transition-all duration-300 hover:-translate-y-1 hover:border-footer-gold hover:text-footer-gold hover:shadow-footer-glow"
                >
                  <Icon className="size-[1.1rem]" aria-hidden />
                </a>
              ))}
            </div>
            <Button
              asChild
              className="mt-7 h-11 rounded-xl bg-footer-gold px-5 text-sm font-semibold text-footer-gold-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:bg-footer-gold/90 hover:shadow-footer-glow"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=B.S.+Abdur+Rahman+Crescent+Institute+of+Science+and+Technology"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span aria-hidden>🎥</span>
                Explore 360° Campus
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-footer-divider pt-6 text-center text-xs text-footer-foreground/65 sm:mt-16 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© 2026 B.S. Abdur Rahman Crescent Institute of Science & Technology, Chennai. All Rights Reserved.</p>
          <div className="flex justify-center gap-5 sm:gap-6 md:justify-end">
            <a href="#" className="transition-colors hover:text-footer-gold">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-footer-gold">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
