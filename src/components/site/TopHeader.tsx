import { college } from "@/data/site";
import { Link } from "@tanstack/react-router";

export function TopHeader() {
  return (
    <div className="bg-navy/95 text-navy-foreground backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-5 py-2.5 text-xs sm:px-8 lg:flex-row lg:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {college.numbers.slice(0, 2).map((n) => (
            <li key={n.label}>
              <a
                href={`tel:${n.tel}`}
                className="text-navy-foreground/70 transition-colors hover:text-accent"
              >
                {n.value}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${college.email}`}
              className="text-navy-foreground/70 transition-colors hover:text-accent"
            >
              {college.email}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-1.5">
          <Link
            to="/admission"
            hash="applicant-login"
            className="rounded-full px-3.5 py-1.5 font-medium text-navy-foreground/80 transition-colors hover:bg-white/10 hover:text-accent"
          >
            Login
          </Link>
          <Link
            to="/admission"
            hash="new-registration"
            className="rounded-full px-3.5 py-1.5 font-medium text-navy-foreground/80 transition-colors hover:bg-white/10 hover:text-accent"
          >
            Sign Up
          </Link>
          <Link
            to="/admission"
            hash="how-to-apply"
            className="bg-gradient-accent rounded-full px-4 py-1.5 font-semibold text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
