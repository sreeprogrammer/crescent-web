import logo from "@/assets/logo.jpeg";
import {
  ArrowUpRight,
  ChevronRight,
  Facebook,
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
  // { label: "Placements", href: "/placements" },
  // { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
  { label: "Student Corner", href: "/students-corner" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/BSACrescentInstitute/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bsacrescentinstituteofficial/?hl=en",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/school/crescentinstitute/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://youtu.be/2jvzpjgUOhY?feature=shared",
    icon: Youtube,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden rounded-t-[2rem] bg-white text-[#172554] sm:rounded-t-[2.5rem]">
      {/* =====================================================
          TOP ACCENT LINE
      ====================================================== */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#d4af37] via-[#f2dfab] to-[#d4af37]" />

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
      <div className="relative mx-auto max-w-7xl px-5 py-4 sm:px-7 sm:py-5 lg:px-9">
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-x-6
            gap-y-5
            text-left
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-x-8
          "
        >
          {/* =================================================
              BRAND + CONTACT
          ================================================= */}
          <div className="flex w-full min-w-0 flex-col items-start text-left md:col-span-2 lg:col-span-1">
            {/* Logo */}
            <a href="/" className="inline-flex items-center" aria-label="Crescent Institute Home">
              <img
                src={logo}
                alt="B.S. Abdur Rahman Crescent Institute of Science and Technology"
                className="
                  h-[56px]
                  w-auto
                  object-contain
                "
              />
            </a>

            {/* Gold accent */}
            <div className="mt-1 h-[3px] w-12 rounded-full bg-[#d4af37]" />

            {/* Institute name */}
            <p
              className="
    mt-1
    max-w-sm
    text-[13px]
    font-semibold
    leading-5
    text-[#172554]
  "
            >
              B.S. Abdur Rahman Crescent Institute of Science &amp; Technology
            </p>

            {/* Contact Details */}
            <div className="mt-2 w-full space-y-1.5">
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
                    text-[#a87916]
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
                    text-left
                  "
                >
                  GST Road, Vandalur,
                  <br />
                  Chennai – 600048,
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}
          <div className="flex w-full min-w-0 flex-col items-start">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <span className="h-8 w-[3px] rounded-full bg-[#d4af37]" />

              <div>
                {/* <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-[#a87916]
                  "
                >
                  EXPLORE
                </p> */}

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

            <ul className="mt-2 grid w-full grid-cols-2 gap-x-2 gap-y-0">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      justify-start
                      gap-1.5
                      rounded-md
                      py-1
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
              CONNECT WITH US
          ================================================= */}
          <div className="flex w-full min-w-0 flex-col items-start">
            {/* Heading */}
            <div className="flex items-center gap-3">
              <span className="h-8 w-[3px] rounded-full bg-[#d4af37]" />

              <div>
                {/* <p
                  className="
                    text-[9px]
                    font-bold
                    tracking-[0.2em]
                    text-[#a87916]
                  "
                >
                  CONNECT
                </p> */}

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
                mt-1
                max-w-sm
                text-[12px]
                leading-4
                text-[#596273]
              "
            >
              Stay connected with Crescent for the latest news, events, announcements and campus
              updates.
            </p>

            {/* Phone numbers and email */}
            <div className="mt-2 w-full space-y-1">
              {college.numbers.map((number) => (
                <a
                  key={number.label}
                  href={`tel:${number.tel}`}
                  className="flex min-w-0 items-start gap-2.5 text-[11px] leading-5 text-[#596273] transition-colors hover:text-[#172554]"
                >
                  <Phone className="mt-1 size-3.5 shrink-0 text-[#a87916]" />
                  <span className="min-w-0">
                    <span className="font-semibold text-[#172554]">{number.label}</span>
                    {" - "}
                    {number.value}
                  </span>
                </a>
              ))}
              <a
                href={`mailto:${college.email}`}
                className="flex min-w-0 items-center gap-2.5 text-[12px] text-[#596273] transition-colors hover:text-[#172554]"
              >
                <Mail className="size-3.5 shrink-0 text-[#a87916]" />
                <span className="break-all">{college.email}</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-2 flex gap-1.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      flex
                      size-8
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
              href="https://youtu.be/2jvzpjgUOhY?feature=shared"
              className="
                group
                mt-2
                flex
                w-fit
                items-center
                gap-3
                rounded-xl
                bg-[#172554]
                px-4
                py-2
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
              <span>Explore Campus</span>

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
                mt-1
                inline-flex
                items-center
                justify-center
                gap-2
                text-[11px]
                font-semibold
                text-[#596273]
                transition-colors
                hover:text-[#172554]
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
            items-start
            justify-between
            gap-1
            px-5
            py-2
            text-left
            sm:px-7
            md:flex-row
            md:items-center
            lg:px-9
          "
        >
          <p
            className="
              text-[10px]
              font-medium
              text-[#7b8492]
            "
          >
            © {new Date().getFullYear()} Center for Distance and Online Education - BSACIST
          </p>
        </div>
      </div>
    </footer>
  );
}
