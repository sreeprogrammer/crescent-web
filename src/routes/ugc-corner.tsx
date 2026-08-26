import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  ClipboardList,
  FileCheck2,
  FileText,
  ListChecks,
  ScrollText,
  ShieldCheck,
  ArrowUpRight,
  GraduationCap,
  ExternalLink,
  FileDown,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const title = "UGC Corner — Approvals, Compliance & Annual Reports";

const description =
  "AICTE approval, degree equivalence, UGC notifications, compliance documents, UGC applications, CIQA annual reports and admission lists.";

export const Route = createFileRoute("/ugc-corner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UgcCornerPage,
});

/* =========================================================
   OFFICIAL LINKS
========================================================= */

const OFFICIAL_SITE = "https://distance.crescent-institute.edu.in";

const officialLinks = {
  admissionList: `${OFFICIAL_SITE}/admissionlist`,

  compliance:
    "https://distance.crescent-institute.edu.in/img/ugc/BSACIST%2024-25-im.pdf",

  ciqaAnnualReport:
    "https://distance.crescent-institute.edu.in/img/ugc25/annualreports/Annual%20Report%20-2024-2025.pdf",

  ugcCompliance:
    "https://distance.crescent-institute.edu.in/img/ugc/BSACIST%2024-25-im.pdf",
};

/* =========================================================
   RESOURCE DATA
========================================================= */

const resources = [
  {
    id: "aicte-approval",
    number: "01",
    title: "AICTE Approval",
    short: "Approval",
    body: "Approval and regulatory information related to AICTE-approved programmes offered through the Centre for Distance and Online Education.",
    icon: BadgeCheck,
    href: officialLinks.compliance,
    type: "PDF",
    label: "View Document",
  },

  {
    id: "degree-equivalence",
    number: "02",
    title: "Degree Equivalence",
    short: "Equivalence",
    body: "Regulatory information relating to recognition and equivalence of programmes offered through Open and Distance Learning.",
    icon: ScrollText,
    href: officialLinks.ugcCompliance,
    type: "PDF",
    label: "View Document",
  },

  {
    id: "ugc-notification",
    number: "03",
    title: "UGC Notification",
    short: "Notifications",
    body: "UGC-DEB regulatory notifications, public notices and recognition-related information applicable to ODL programmes.",
    icon: FileText,
    href: officialLinks.ugcCompliance,
    type: "PDF",
    label: "View Document",
  },

  {
    id: "compliance",
    number: "04",
    title: "Compliance",
    short: "Disclosure",
    body: "Mandatory regulatory disclosures covering ODL compliance, learner support, quality assurance and institutional information.",
    icon: ShieldCheck,
    href: officialLinks.compliance,
    type: "PDF",
    label: "View Compliance",
  },

  {
    id: "ugc-applications",
    number: "05",
    title: "UGC Applications",
    short: "Applications",
    body: "Regulatory application and submission-related information maintained for recognition and continuation of ODL programmes.",
    icon: FileCheck2,
    href: officialLinks.ugcCompliance,
    type: "PDF",
    label: "View Document",
  },

  {
    id: "ciqa-annual-reports",
    number: "06",
    title: "CIQA Annual Reports",
    short: "Quality",
    body: "Annual reports of the Centre for Internal Quality Assurance documenting quality processes, audits and improvement activities.",
    icon: ClipboardList,
    href: officialLinks.ciqaAnnualReport,
    type: "PDF",
    label: "View Annual Report",
  },

  {
    id: "admission-list",
    number: "07",
    title: "Admission List",
    short: "Admissions",
    body: "Programme-wise student admission information published for different academic sessions.",
    icon: ListChecks,
    href: officialLinks.admissionList,
    type: "WEB",
    label: "View Admission List",
  },
];

/* =========================================================
   UGC QUICK NAVIGATION
========================================================= */

const ugcMenuItems = [
  {
    label: "AICTE Approval",
    href: "#aicte-approval",
  },
  {
    label: "Degree Equivalence",
    href: "#degree-equivalence",
  },
  {
    label: "UGC Notification »",
    href: "#ugc-notification",
  },
  {
    label: "Compliance »",
    href: "#compliance",
  },
  {
    label: "UGC Applications »",
    href: "#ugc-applications",
  },
  {
    label: "CIQA Annual Reports »",
    href: "#ciqa-annual-reports",
  },
  {
    label: "Admission List",
    href: "#admission-list",
  },
];

/* =========================================================
   PAGE
========================================================= */

function UgcCornerPage() {
  return (
    <SiteLayout>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f4ee]">
        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -left-44
              -top-44
              size-[360px]
              rounded-full
              bg-[#8f1d1d]/10
              blur-[90px]
            "
          />

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 20, 0],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -right-40
              top-0
              size-[330px]
              rounded-full
              bg-[#d4af37]/10
              blur-[90px]
            "
          />

          <div
            className="
              absolute
              left-1/2
              top-1/2
              size-[240px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#172554]/5
              blur-[80px]
            "
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8 lg:px-12">
          <div className="grid items-center gap-7 lg:grid-cols-[1.25fr_0.75fr]">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
              }}
            >
              {/* Badge */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: -8,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#d4af37]/40
                  bg-[#172554]
                  px-3
                  py-1.5
                  shadow-[0_8px_20px_rgba(23,37,84,0.15)]
                "
              >
                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                    opacity: [1, 0.6, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="size-1.5 rounded-full bg-[#d4af37]"
                />

                <span className="text-[8px] font-extrabold uppercase tracking-[0.22em] text-white">
                  UGC • DEB • COMPLIANCE
                </span>
              </motion.div>

              {/* Main Heading */}

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                }}
                className="
                  mt-3
                  max-w-3xl
                  text-[2rem]
                  font-black
                  leading-[1.02]
                  tracking-[-0.04em]
                  text-[#172554]
                  sm:text-[2.45rem]
                  lg:text-[2.9rem]
                "
              >
                Approvals,
                <span className="text-[#8f1d1d]"> compliance </span>
                & transparency.
              </motion.h1>

              {/* Description */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.18,
                }}
                className="mt-3 max-w-2xl text-[12px] leading-5 text-slate-600 sm:text-[13px]"
              >
                Access important regulatory information, approvals, public
                disclosures and quality documents related to our distance and
                online education programmes.
              </motion.p>

              {/* Tags */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                className="mt-4 flex flex-wrap gap-1.5"
              >
                {[
                  "UGC-DEB",
                  "Public Disclosures",
                  "Quality Assurance",
                ].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.3 + index * 0.08,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      rounded-full
                      border
                      border-[#172554]/15
                      bg-white
                      px-2.5
                      py-1
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#172554]
                      shadow-sm
                      transition-colors
                      duration-300
                      hover:border-[#d4af37]/60
                      hover:bg-[#172554]
                      hover:text-white
                    "
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* =================================================
                RIGHT CARD
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.12,
                ease: "easeOut",
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  opacity: [0.5, 0.9, 0.5],
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  -inset-3
                  rounded-[1.7rem]
                  bg-[#d4af37]/10
                  blur-2xl
                "
              />

              <motion.div
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[1.55rem]
                  border
                  border-[#d4af37]/30
                  bg-gradient-to-br
                  from-[#172554]
                  via-[#19295c]
                  to-[#241d3c]
                  p-4
                  text-white
                  shadow-[0_18px_45px_rgba(23,37,84,0.2)]
                "
              >
                <div className="absolute -right-14 -top-14 size-36 rounded-full bg-[#d4af37]/10 blur-3xl" />

                <div className="absolute -bottom-16 -left-16 size-32 rounded-full bg-[#8f1d1d]/15 blur-3xl" />

                <div className="relative">
                  {/* Card Header */}

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[7px] font-bold uppercase tracking-[0.25em] text-[#d4af37]">
                        Regulatory Hub
                      </p>

                      <h2 className="mt-1 text-[1.15rem] font-black tracking-tight text-white">
                        UGC Corner
                      </h2>
                    </div>

                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                        rotate: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        relative
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#d4af37]/50
                        bg-[#8f1d1d]
                        shadow-[0_7px_18px_rgba(143,29,29,0.35)]
                      "
                    >
                      <div className="absolute inset-1 rounded-[9px] border border-white/20" />

                      <GraduationCap className="relative size-5 text-[#d4af37]" />
                    </motion.div>
                  </div>

                  {/* Stats */}

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-3
                      "
                    >
                      <p className="text-[7px] uppercase tracking-wider text-white/45">
                        Resources
                      </p>

                      <p className="mt-0.5 text-lg font-black text-white">
                        07
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        scale: 1.02,
                      }}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-3
                      "
                    >
                      <p className="text-[7px] uppercase tracking-wider text-white/45">
                        Access
                      </p>

                      <p className="mt-0.5 text-xs font-bold text-white">
                        Public
                      </p>
                    </motion.div>
                  </div>

                  {/* Info */}

                  <motion.div
                    animate={{
                      borderColor: [
                        "rgba(212,175,55,0.18)",
                        "rgba(212,175,55,0.38)",
                        "rgba(212,175,55,0.18)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="
                      mt-2
                      rounded-xl
                      border
                      bg-[#d4af37]/10
                      p-3
                    "
                  >
                    <p className="text-[9px] leading-4 text-white/75">
                      Regulatory information and institutional disclosures in
                      one place.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          UGC QUICK NAVIGATION
      ===================================================== */}

      <section className="relative bg-[#f7f4ee] px-5 pb-2 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              overflow-hidden
              rounded-2xl
              border
              border-[#d9d4c8]
              bg-white
              shadow-[0_8px_25px_rgba(23,37,84,0.05)]
            "
          >
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1 p-2">
              {ugcMenuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    rounded-lg
                    px-3
                    py-2
                    text-[9px]
                    font-bold
                    text-[#172554]
                    transition-all
                    duration-300
                    hover:bg-[#172554]
                    hover:text-white
                    sm:text-[10px]
                  "
                >
                  {index === 0 && (
                    <BadgeCheck className="mr-1 inline size-3 text-[#8f1d1d]" />
                  )}

                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          RESOURCES
      ===================================================== */}

      <section
        id="ugc-resources"
        className="
          relative
          overflow-hidden
          bg-[#f7f4ee]
          pb-9
          pt-5
          sm:pb-11
          sm:pt-6
        "
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          {/* Section Header */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mb-5
              flex
              flex-col
              gap-2
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <div>
              <p className="text-[8px] font-bold uppercase tracking-[0.24em] text-[#8f1d1d]">
                Official Information
              </p>

              <h2 className="mt-1 text-[1.45rem] font-black tracking-tight text-[#172554] sm:text-[1.7rem]">
                Regulatory & quality resources
              </h2>
            </div>

            <p className="max-w-md text-[10px] leading-4.5 text-slate-500 sm:text-right">
              Explore approvals, notifications, compliance records and quality
              assurance documents.
            </p>
          </motion.div>

          {/* =================================================
              RESOURCE CARDS
          ================================================= */}

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              const Icon = resource.icon;

              return (
                <motion.article
                  key={resource.id}
                  id={resource.id}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-40px",
                  }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 3) * 0.07,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.012,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[1.2rem]
                    border
                    border-[#d9d4c8]
                    bg-white
                    p-4
                    shadow-[0_6px_20px_rgba(23,37,84,0.05)]
                    transition-all
                    duration-300
                    hover:border-[#d4af37]/60
                    hover:shadow-[0_15px_32px_rgba(23,37,84,0.11)]
                  "
                >
                  {/* Top Accent */}

                  <motion.div
                    initial={{
                      scaleX: 0,
                    }}
                    whileInView={{
                      scaleX: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.04,
                    }}
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[3px]
                      origin-left
                      bg-gradient-to-r
                      from-[#172554]
                      via-[#8f1d1d]
                      to-[#d4af37]
                    "
                  />

                  {/* Card Top */}

                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="
                        flex
                        size-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#172554]
                        text-white
                        shadow-md
                        transition-colors
                        duration-300
                        group-hover:bg-[#8f1d1d]
                      "
                    >
                      <Icon className="size-4" />
                    </motion.div>

                    <div className="flex items-center gap-1.5">
                      <span
                        className="
                          rounded-full
                          bg-[#172554]/5
                          px-2
                          py-1
                          text-[7px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-[#172554]/60
                        "
                      >
                        {resource.type}
                      </span>

                      <span className="text-[9px] font-black tracking-[0.16em] text-[#8f1d1d]/45">
                        {resource.number}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}

                  <div className="mt-3">
                    <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                      {resource.short}
                    </span>

                    <h3 className="mt-1 text-[15px] font-black text-[#172554] transition-colors duration-300 group-hover:text-[#8f1d1d]">
                      {resource.title}
                    </h3>

                    <p className="mt-1.5 text-[10px] leading-[1.55] text-slate-500">
                      {resource.body}
                    </p>
                  </div>

                  {/* Card Footer */}

                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                    <span className="flex items-center gap-1 text-[7px] font-bold uppercase tracking-[0.13em] text-slate-400">
                      <CheckCircle2 className="size-3 text-[#8f1d1d]" />
                      Official Resource
                    </span>

                    <motion.a
                      href={resource.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        x: 2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        flex
                        items-center
                        gap-1
                        rounded-lg
                        bg-[#172554]
                        px-2.5
                        py-1.5
                        text-[9px]
                        font-bold
                        text-white
                        shadow-sm
                        transition-all
                        duration-300
                        hover:bg-[#8f1d1d]
                      "
                    >
                      {resource.type === "PDF" ? (
                        <FileDown className="size-3" />
                      ) : (
                        <ExternalLink className="size-3" />
                      )}

                      {resource.label}

                      <ArrowUpRight className="size-3" />
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
              rounded-xl
              border
              border-[#d9d4c8]
              bg-white
              px-4
              py-2.5
              shadow-sm
            "
          >
            {/* Transparent */}

            <motion.div
              whileHover={{
                y: -1,
              }}
              className="flex items-center gap-1.5"
            >
              <ShieldCheck className="size-3.5 text-[#8f1d1d]" />

              <span className="text-[8px] font-bold text-[#172554]">
                Transparent
              </span>
            </motion.div>

            <span className="hidden h-3.5 w-px bg-slate-200 sm:block" />

            {/* Verified */}

            <motion.div
              whileHover={{
                y: -1,
              }}
              className="flex items-center gap-1.5"
            >
              <BadgeCheck className="size-3.5 text-[#d4af37]" />

              <span className="text-[8px] font-bold text-[#172554]">
                Verified Information
              </span>
            </motion.div>

            <span className="hidden h-3.5 w-px bg-slate-200 sm:block" />

            {/* Public Disclosure */}

            <motion.div
              whileHover={{
                y: -1,
              }}
              className="flex items-center gap-1.5"
            >
              <FileCheck2 className="size-3.5 text-[#8f1d1d]" />

              <span className="text-[8px] font-bold text-[#172554]">
                Public Disclosure
              </span>
            </motion.div>

            <span className="hidden h-3.5 w-px bg-slate-200 sm:block" />

            {/* UGC */}

            <motion.div
              whileHover={{
                y: -1,
              }}
              className="flex items-center gap-1.5"
            >
              <GraduationCap className="size-3.5 text-[#172554]" />

              <span className="text-[8px] font-bold text-[#172554]">
                UGC-DEB
              </span>
            </motion.div>
          </motion.div>

          {/* Small Source Note */}

          <p className="mt-4 text-center text-[8px] leading-4 text-slate-400">
            Regulatory documents and admission information are linked to the
            official Crescent Centre for Distance and Online Education
            resources.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
