import logo from "@/assets/crescent-logo.png.asset.png";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

import { college } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Placements", href: "/placements" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

const studentResources = [
  { label: "Student Corner", href: "/student-corner" },
  { label: "Examinations", href: "/examinations" },
  { label: "Library", href: "/library" },
  { label: "Placements", href: "/placements" },
  { label: "Academic Calendar", href: "/academic-calendar" },
  { label: "Grievance Redressal", href: "/grievance" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "#",
    icon: Youtube,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-white text-[#172554]">

      {/* =====================================================
          TOP ACCENT LINE
      ====================================================== */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#7f1d1d] via-[#d4af37] to-[#172554]" />

      {/* =====================================================
          VERY SUBTLE BACKGROUND DECORATION
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          size-[320px]
          rounded-full
          bg-[#172554]/[0.025]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          size-[280px]
          rounded-full
          bg-[#7f1d1d]/[0.025]
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="relative mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-10">

        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]
            lg:gap-10
          "
        >

          {/* =================================================
              BRAND + CONTACT
          ================================================= */}
          <div>

            {/* Logo */}
            <a
              href="/"
              className="inline-flex items-center"
              aria-label="Crescent Institute Home"
            >
              <img
                src={logo}
                alt="B.S. Abdur Rahman Crescent Institute of Science and Technology"
                className="
                  h-[72px]
                  w-auto
                  object-contain
                "
              />
            </a>

            {/* Gold accent */}
            <div className="mt-3 h-[3px] w-12 rounded-full bg-[#d4af37]" />

            {/* Institute name */}
            <p
              className="
                mt-3
                max-w-sm
                text-[13px]
                font-semibold
                leading-5
                text-[#8a6a24]
              "
            >
              B.S. Abdur Rahman Crescent Institute of Science &amp;
              Technology
            </p>

            {/* Contact Details */}
            <div className="mt-4 space-y-2.5">

              {/* Address */}
              <div className="flex items-start gap-3">

                <span
                  className="
                    mt-0.5
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#172554]/[0.05]
                    text-[#172554]
                    ring-1
                    ring-[#172554]/10
                  "
                >
                  <MapPin className="size-4" />
                </span>

                <p
                  className="
                    text-[12px]
                    leading-5
                    text-[#596273]
                  "
                >
                  GST Road, Vandalur,
                  <br />
                  Chennai – 600048,
                  <br />
                  Tamil Nadu, India
                </p>

              </div>

              {/* Phone */}
              <a
                href={`tel:${college.numbers?.[0]?.tel ?? ""}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  text-[#596273]
                  transition-colors
                  hover:text-[#7f1d1d]
                "
              >
                <span
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#172554]/[0.05]
                    text-[#172554]
                    ring-1
                    ring-[#172554]/10
                    transition-colors
                    group-hover:bg-[#7f1d1d]
                    group-hover:text-white
                  "
                >
                  <Phone className="size-4" />
                </span>

                <span>
                  {college.numbers?.[0]?.value ?? "+91 44 2275 1347"}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${college.email}`}
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  text-[#596273]
                  transition-colors
                  hover:text-[#7f1d1d]
                "
              >
                <span
                  className="
                    flex
                    size-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#172554]/[0.05]
                    text-[#172554]
                    ring-1
                    ring-[#172554]/10
                    transition-colors
                    group-hover:bg-[#7f1d1d]
                    group-hover:text-white
                  "
                >
                  <Mail className="size-4" />
                </span>

                <span className="break-all">
                  {college.email}
                </span>
              </a>

            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div>

            {/* Heading */}
            <div className="flex items-center gap-3">

              <span className="h-8 w-[3px] rounded-full bg-[#7f1d1d]" />

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-[#a87916]
                  "
                >
                  EXPLORE
                </p>

                <h3
                  className="
                    mt-0.5
                    text-[17px]
                    font-bold
                    text-[#172554]
                  "
                >
                  Quick Links
                </h3>
              </div>

            </div>

            <ul className="mt-3 space-y-0.5">

              {quickLinks.map((item) => (
                <li key={item.label}>

                  <a
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-1.5
                      rounded-md
                      py-1.5
                      text-[12px]
                      font-medium
                      text-[#596273]
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#172554]
                    "
                  >
                    <ChevronRight
                      className="
                        size-3
                        text-[#a87916]
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />

                    {item.label}
                  </a>

                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              STUDENT RESOURCES
          ================================================= */}
          <div>

            {/* Heading */}
            <div className="flex items-center gap-3">

              <span className="h-8 w-[3px] rounded-full bg-[#d4af37]" />

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-[#a87916]
                  "
                >
                  STUDENTS
                </p>

                <h3
                  className="
                    mt-0.5
                    text-[17px]
                    font-bold
                    text-[#172554]
                  "
                >
                  Student Resources
                </h3>
              </div>

            </div>

            <ul className="mt-3 space-y-0.5">

              {studentResources.map((item) => (
                <li key={item.label}>

                  <a
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-1.5
                      rounded-md
                      py-1.5
                      text-[12px]
                      font-medium
                      text-[#596273]
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-[#172554]
                    "
                  >
                    <ChevronRight
                      className="
                        size-3
                        text-[#a87916]
                        transition-transform
                        group-hover:translate-x-0.5
                      "
                    />

                    {item.label}
                  </a>

                </li>
              ))}

            </ul>

            {/* Mini Cards */}
            <div className="mt-3 flex gap-2">

              <a
                href="/admissions"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#dce1e8]
                  bg-[#f8f9fb]
                  px-3
                  py-2
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d4af37]
                  hover:bg-[#fffaf0]
                "
              >
                <GraduationCap
                  className="
                    size-4
                    text-[#7f1d1d]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    text-[#3f4a5c]
                  "
                >
                  Admissions
                </span>
              </a>

              <a
                href="/academics"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#dce1e8]
                  bg-[#f8f9fb]
                  px-3
                  py-2
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#d4af37]
                  hover:bg-[#fffaf0]
                "
              >
                <BookOpen
                  className="
                    size-4
                    text-[#172554]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    text-[#3f4a5c]
                  "
                >
                  Academics
                </span>
              </a>

            </div>
          </div>

          {/* =================================================
              CONNECT WITH US
          ================================================= */}
          <div>

            {/* Heading */}
            <div className="flex items-center gap-3">

              <span className="h-8 w-[3px] rounded-full bg-[#7f1d1d]" />

              <div>
                <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-[#a87916]
                  "
                >
                  CONNECT
                </p>

                <h3
                  className="
                    mt-0.5
                    text-[17px]
                    font-bold
                    text-[#172554]
                  "
                >
                  Connect With Us
                </h3>
              </div>

            </div>

            <p
              className="
                mt-3
                max-w-sm
                text-[12px]
                leading-5
                text-[#596273]
              "
            >
              Stay connected with Crescent for the latest
              news, events, announcements and campus updates.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex gap-2">

              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      flex
                      size-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#dce1e8]
                      bg-white
                      text-[#172554]
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#d4af37]
                      hover:bg-[#d4af37]
                      hover:text-[#172554]
                    "
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}

            </div>

            {/* Explore Campus */}
            <a
              href="/campus"
              className="
                group
                mt-4
                flex
                w-fit
                items-center
                gap-3
                rounded-xl
                bg-[#172554]
                px-5
                py-2.5
                text-[12px]
                font-bold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#7f1d1d]
                hover:shadow-lg
              "
            >
              <span>
                Explore Campus
              </span>

              <span
                className="
                  flex
                  size-6
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                "
              >
                <ArrowUpRight
                  className="
                    size-3.5
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                />
              </span>
            </a>

            {/* Enquiry */}
            <a
              href={`mailto:${college.email}`}
              className="
                mt-3
                inline-flex
                items-center
                gap-2
                text-[11px]
                font-semibold
                text-[#172554]
                transition-colors
                hover:text-[#7f1d1d]
              "
            >
              <span
                className="
                  flex
                  size-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#172554]/[0.06]
                "
              >
                <Mail className="size-3" />
              </span>

              Have an enquiry? Contact us
            </a>

          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}
      <div className="border-t border-[#e5e7eb] bg-white">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-2
            px-5
            py-3
            text-center
            sm:px-8
            md:flex-row
            md:text-left
            lg:px-10
          "
        >

          <p
            className="
              text-[10px]
              font-medium
              text-[#7b8492]
            "
          >
            © {new Date().getFullYear()} B.S. Abdur Rahman
            Crescent Institute of Science and Technology.
            All rights reserved.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="/privacy"
              className="
                text-[10px]
                font-medium
                text-[#7b8492]
                transition-colors
                hover:text-[#7f1d1d]
              "
            >
              Privacy Policy
            </a>

            <span className="h-3 w-px bg-[#d9dde4]" />

            <a
              href="/terms"
              className="
                text-[10px]
                font-medium
                text-[#7b8492]
                transition-colors
                hover:text-[#7f1d1d]
              "
            >
              Terms
            </a>

          </div>
        </div>
      </div>

    </footer>
  );
}