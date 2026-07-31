import { college } from "@/data/site";
import { Link } from "@tanstack/react-router";
import { LogIn, Mail, MapPin, MessageSquare, MonitorPlay, Phone, UserPlus } from "lucide-react";

const actions = [
  { label: "Enquiry", icon: MessageSquare, to: "/contact", hash: "enquiry" },
  { label: "Apply Now", icon: UserPlus, to: "/admission", hash: "how-to-apply" },
  { label: "Sign Up", icon: UserPlus, to: "/admission", hash: "new-registration" },
  { label: "Login", icon: LogIn, to: "/admission", hash: "applicant-login" },
  { label: "LMS Login", icon: MonitorPlay, to: "/students-corner", hash: "lms-login" },
] as const;

export function TopHeader() {
  return (
    <div className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2 text-xs sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 lg:justify-start">
          <li className="flex items-center gap-1.5 text-navy-foreground/75">
            <MapPin className="size-3.5 text-accent" aria-hidden />
            <span>{college.shortAddress}</span>
          </li>
          {college.numbers.map((n) => (
            <li key={n.label}>
              <a
                href={`tel:${n.tel}`}
                className="flex items-center gap-1.5 text-navy-foreground/75 transition-colors hover:text-accent"
              >
                <Phone className="size-3.5 text-accent" aria-hidden />
                <span className="hidden sm:inline">{n.label}:</span>
                <span>{n.value}</span>
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${college.email}`}
              className="flex items-center gap-1.5 text-navy-foreground/75 transition-colors hover:text-accent"
            >
              <Mail className="size-3.5 text-accent" aria-hidden />
              <span>{college.email}</span>
            </a>
          </li>
        </ul>

        <ul className="flex flex-wrap items-center justify-center gap-1">
          {actions.map((a) => (
            <li key={a.label}>
              <Link
                to={a.to}
                hash={a.hash}
                className="flex items-center gap-1.5 rounded-full px-3 py-1.5 font-medium text-navy-foreground/80 transition-colors hover:bg-white/10 hover:text-accent"
              >
                <a.icon className="size-3.5" aria-hidden />
                {a.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
