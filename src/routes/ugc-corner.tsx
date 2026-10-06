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

const title = "UGC Corner — Crescent Centre for Distance and Online Education";

const description =
  "UGC mandatory disclosures, regulatory approvals, compliance information and quality assurance documents of Crescent Centre for Distance and Online Education.";

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
   FONT
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   OFFICIAL DOCUMENT LINKS
========================================================= */

const officialLinks = {
  admissionList: "/admission-list.pdf",
  ugcMandatoryDisclosure: "/pdf/ugc-mandatory-disclosure.pdf",
  aicteMandatoryDisclosure: "/pdf/aicte-mandatory-disclosure.pdf",
  ugcNotification: "/pdf/ugc-notification.pdf",
  compliance: "/pdf/compliance.pdf",
  ugcApplication: "/pdf/ugc-application.pdf",
  ciqaAnnualReport: "/pdf/ciqa-annual-report.pdf",
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
    body: "Approval and regulatory information related to programmes offered through the Centre for Distance and Online Education.",
    icon: BadgeCheck,
    href: officialLinks.aicteMandatoryDisclosure,
    type: "PDF",
    label: "View Document",
  },
  {
    id: "degree-equivalence",
    number: "02",
    title: "Degree Equivalence",
    short: "Equivalence",
    body: "Information relating to recognition and equivalence of programmes offered through Open and Distance Learning.",
    icon: ScrollText,
    href: officialLinks.ugcMandatoryDisclosure,
    type: "PDF",
    label: "View Document",
  },
  {
    id: "ugc-notification",
    number: "03",
    title: "UGC Notification",
    short: "Notifications",
    body: "UGC-DEB notifications, public notices and recognition-related information applicable to ODL programmes.",
    icon: FileText,
    href: officialLinks.ugcNotification,
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
    href: officialLinks.ugcApplication,
    type: "PDF",
    label: "View Document",
  },
  {
    id: "ciqa-annual-reports",
    number: "06",
    title: "CIQA Annual Reports",
    short: "Quality",
    body: "Annual reports of the Centre for Internal Quality Assurance documenting quality processes and improvement activities.",
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
    body: "Programme-wise admission information published for different academic sessions.",
    icon: ListChecks,
    href: officialLinks.admissionList,
    type: "PDF",
    label: "View Admission List",
  },
];

/* =========================================================
   QUICK NAVIGATION
========================================================= */

const ugcMenuItems = [
  {
    label: "UGC Overview",
    href: "#ugc-overview",
  },
  {
    label: "UGC Disclosure",
    href: "#ugc-disclosure",
  },
  {
    label: "AICTE Disclosure",
    href: "#aicte-disclosure",
  },
  {
    label: "Resources",
    href: "#ugc-resources",
  },
];

/* =========================================================
   PAGE
========================================================= */

function UgcCornerPage() {
  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen bg-[#F5F1E9] text-[#20242B]"
      >
        {/* =====================================================
            UGC OVERVIEW
        ===================================================== */}

        <section
          id="ugc-overview"
          className="bg-[#F5F1E9] px-5 pb-7 pt-7 sm:px-8 sm:pb-8 sm:pt-9 lg:px-12 lg:pt-10"
        >
          <div className="mx-auto max-w-7xl">
            <div className="border-b border-[#D9D4CA] pb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F3030] sm:text-sm">
                Regulatory Information
              </p>

              <h1 className="mt-2 text-3xl font-bold leading-tight tracking-[-0.025em] text-[#20242B] sm:text-4xl lg:text-[2.75rem]">
                UGC Overview
              </h1>

              <div className="mt-4 h-1 w-20 rounded-full bg-[#B08A24]" />

              <p className="mt-5 max-w-4xl text-sm font-medium leading-6 text-[#5E6470] sm:text-base sm:leading-7">
                Information regarding approvals, mandatory disclosures,
                regulatory compliance and quality assurance related to the
                Centre for Distance and Online Education.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK NAVIGATION
        ===================================================== */}

        <section className="bg-[#F5F1E9] px-5 pb-5 pt-1 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-2xl border border-[#D9D4CA] bg-white shadow-[0_8px_25px_rgba(32,36,43,0.05)]">
              <div className="flex flex-wrap items-center gap-1 p-2.5">
                {ugcMenuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      inline-flex
                      items-center
                      rounded-lg
                      px-3.5
                      py-2.5
                      text-sm
                      font-bold
                      text-[#20242B]
                      transition-all
                      duration-300
                      hover:bg-[#30265F]
                      hover:text-white
                      sm:px-4
                      sm:text-sm
                    "
                  >
                    {index === 0 && (
                      <BadgeCheck className="mr-1.5 size-4 text-[#8F3030]" />
                    )}

                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MANDATORY DISCLOSURES
        ===================================================== */}

        <section
          id="ugc-disclosure"
          className="bg-[#F5F1E9] px-5 pb-10 pt-3 sm:px-8 sm:pb-12 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F3030] sm:text-sm">
                Mandatory Disclosure
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#20242B] sm:text-3xl">
                UGC &amp; Regulatory Documents
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#B08A24]" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* UGC */}

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#D9D4CA]
                  bg-white
                  p-6
                  shadow-[0_10px_30px_rgba(32,36,43,0.06)]
                  sm:p-7
                "
              >
                <div className="flex items-center gap-5">
                  <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D9D4CA] bg-white p-2.5">
                    <img
                      src="/images/ugc-logo.webp"
                      alt="UGC Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F3030]">
                      Regulatory Authority
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-[#20242B] sm:text-2xl">
                      UGC
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#737782]">
                      University Grants Commission
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#ECE8E0] pt-5">
                  <p className="text-sm font-medium leading-6 text-[#5E6470]">
                    Mandatory disclosure and regulatory information related to
                    Crescent Centre for Distance and Online Education.
                  </p>

                  <a
                    href={officialLinks.ugcMandatoryDisclosure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#30265F]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#3B3170]
                    "
                  >
                    <FileDown className="size-4 text-[#D8B84C]" />

                    UGC Mandatory Disclosure

                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </motion.div>

              {/* AICTE */}

              <motion.div
                id="aicte-disclosure"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#D9D4CA]
                  bg-white
                  p-6
                  shadow-[0_10px_30px_rgba(32,36,43,0.06)]
                  sm:p-7
                "
              >
                <div className="flex items-center gap-5">
                  <div className="flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#D9D4CA] bg-white p-2.5">
                    <img
                      src="/images/aicte-logo.webp"
                      alt="AICTE Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8F3030]">
                      Regulatory Authority
                    </p>

                    <h3 className="mt-1 text-xl font-bold leading-tight text-[#20242B] sm:text-2xl">
                      All India Council for Technical Education (AICTE)
                    </h3>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#ECE8E0] pt-5">
                  <p className="text-sm font-medium leading-6 text-[#5E6470]">
                    Mandatory disclosure and regulatory information maintained
                    for the institution and its approved programmes.
                  </p>

                  <a
                    href={officialLinks.aicteMandatoryDisclosure}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#30265F]
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#3B3170]
                    "
                  >
                    <FileDown className="size-4 text-[#D8B84C]" />

                    AICTE Mandatory Disclosure

                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESOURCES
        ===================================================== */}

        <section
          id="ugc-resources"
          className="relative overflow-hidden bg-[#F7F4EE] pb-12 pt-8 sm:pb-14"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            {/* SECTION HEADER */}

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
                mb-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-end
                sm:justify-between
              "
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8F3030]">
                  Official Information
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#20242B] sm:text-3xl">
                  Regulatory &amp; Quality Resources
                </h2>

                <div className="mt-4 h-1 w-16 rounded-full bg-[#B08A24]" />
              </div>

              <p className="max-w-md text-sm font-medium leading-6 text-[#737782] sm:text-right">
                Explore approvals, notifications, compliance records and
                quality assurance documents.
              </p>
            </motion.div>

            {/* RESOURCE CARDS */}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                      border-[#D9D4CA]
                      bg-white
                      p-5
                      shadow-[0_6px_20px_rgba(32,36,43,0.05)]
                      transition-all
                      duration-300
                      hover:border-[#B08A24]/60
                      hover:shadow-[0_15px_32px_rgba(32,36,43,0.11)]
                    "
                  >
                    {/* TOP GOLD LINE */}

                    <div className="absolute left-0 right-0 top-0 h-[3px] bg-[#B08A24]" />

                    {/* CARD TOP */}

                    <div className="flex items-start justify-between gap-3">
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
                          size-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-[#30265F]
                          text-white
                          shadow-md
                          transition-colors
                          duration-300
                          group-hover:bg-[#8F3030]
                        "
                      >
                        <Icon className="size-5" />
                      </motion.div>

                      <div className="flex items-center gap-2">
                        <span
                          className="
                            rounded-full
                            bg-[#30265F]/5
                            px-2.5
                            py-1
                            text-xs
                            font-bold
                            uppercase
                            tracking-wider
                            text-[#30265F]/60
                          "
                        >
                          {resource.type}
                        </span>

                        <span className="text-xs font-bold tracking-[0.16em] text-[#8F3030]/45">
                          {resource.number}
                        </span>
                      </div>
                    </div>

                    {/* CARD CONTENT */}

                    <div className="mt-4">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#B08A24]">
                        {resource.short}
                      </span>

                      <h3 className="mt-1.5 text-lg font-bold leading-tight text-[#20242B] transition-colors duration-300 group-hover:text-[#8F3030]">
                        {resource.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-6 text-[#737782]">
                        {resource.body}
                      </p>
                    </div>

                    {/* CARD FOOTER */}

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3">
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] text-slate-400">
                        <CheckCircle2 className="size-3.5 text-[#8F3030]" />
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
                          gap-1.5
                          rounded-lg
                          bg-[#30265F]
                          px-3.5
                          py-2
                          text-sm
                          font-bold
                          text-white
                          shadow-sm
                          transition-all
                          duration-300
                          hover:bg-[#8F3030]
                        "
                      >
                        {resource.type === "PDF" ? (
                          <FileDown className="size-3.5" />
                        ) : (
                          <ExternalLink className="size-3.5" />
                        )}

                        {resource.label}

                        <ArrowUpRight className="size-3.5" />
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
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                rounded-xl
                border
                border-[#D9D4CA]
                bg-white
                px-5
                py-4
                shadow-sm
              "
            >
              <motion.div
                whileHover={{ y: -1 }}
                className="flex items-center gap-2"
              >
                <ShieldCheck className="size-4 text-[#8F3030]" />

                <span className="text-sm font-bold text-[#20242B]">
                  Transparent
                </span>
              </motion.div>

              <span className="hidden h-4 w-px bg-slate-200 sm:block" />

              <motion.div
                whileHover={{ y: -1 }}
                className="flex items-center gap-2"
              >
                <BadgeCheck className="size-4 text-[#B08A24]" />

                <span className="text-sm font-bold text-[#20242B]">
                  Verified Information
                </span>
              </motion.div>

              <span className="hidden h-4 w-px bg-slate-200 sm:block" />

              <motion.div
                whileHover={{ y: -1 }}
                className="flex items-center gap-2"
              >
                <FileCheck2 className="size-4 text-[#8F3030]" />

                <span className="text-sm font-bold text-[#20242B]">
                  Public Disclosure
                </span>
              </motion.div>

              <span className="hidden h-4 w-px bg-slate-200 sm:block" />

              <motion.div
                whileHover={{ y: -1 }}
                className="flex items-center gap-2"
              >
                <GraduationCap className="size-4 text-[#30265F]" />

                <span className="text-sm font-bold text-[#20242B]">
                  UGC-DEB
                </span>
              </motion.div>
            </motion.div>

            {/* SOURCE NOTE */}

            <p className="mt-5 text-center text-xs font-medium leading-5 text-slate-400">
              Regulatory documents and admission information are linked to the
              official Crescent Centre for Distance and Online Education
              resources.
            </p>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}

export default UgcCornerPage;