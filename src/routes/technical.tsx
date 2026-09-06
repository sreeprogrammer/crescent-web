import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

export const Route = createFileRoute("/technical")({
  component: TechnicalPage,
});

const technicalTeam = [
  {
    name: "Mrs. P. Paul Merline",
    designation: "Technical Manager",
    area: "(LMS & Data Management)",
  },
  {
    name: "Mr. A. Mohamed Meerasa Mujahith",
    designation: "Technical Assistant",
    area: "(LMS)",
  },
  {
    name: "Mr. K. Rooban",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
  },
  {
    name: "Mrs. R. Latha",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
  },
  {
    name: "Mr. J. Shasi Kiran",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
  },
  {
    name: "Mr. Nizamudeen",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
  },
  {
    name: "Mr. D. Vignesh",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
  },
  {
    name: "Mr. R. Deepak",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
  },
];

function TechnicalPage() {
  return (
    <SiteLayout>
      <div className="bg-white text-[#111111]" style={circularFont}>
        {/* ================= HERO ================= */}
        <section className="bg-[#f6dfe5]">
          <div className="mx-auto max-w-6xl px-5 py-3.5 sm:px-6 sm:py-4">
            <div className="mb-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#111111]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to About Us
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#111111]">
                <Users className="h-3 w-3" />
                CDOE • Technical Team
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                Technical Team
              </h1>

              <p className="mt-1 max-w-3xl text-[11px] leading-4.5 text-black/70 sm:text-xs">
                Dedicated technical professionals supporting digital
                learning, LMS services, online platforms and technology
                related learner assistance.
              </p>
            </div>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <main className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
          {/* Heading */}
          <div className="mb-4">
            <div className="mb-1 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#6b4c9a]">
              <span className="h-px w-5 bg-[#d4af37]" />
              Technical Support
            </div>

            <h2 className="text-lg font-bold leading-tight tracking-tight sm:text-xl">
              Technical Team
            </h2>

            <p className="mt-0.5 text-[11px] text-black/60">
              Dedicated professionals supporting the digital learning
              experience.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {technicalTeam.map((person, index) => (
              <motion.article
                key={person.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="group relative overflow-hidden rounded-lg border border-black/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Gold Hover Line */}
                <div className="absolute bottom-0 left-2 right-2 z-10 h-0.5 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Temporary Photo */}
                <div className="relative h-32 w-full overflow-hidden bg-[#f3f3f3]">
                  <img
                    src={campusPhoto}
                    alt={person.name}
                    className="h-full w-full object-cover object-center"
                  />

                  <div className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-md bg-white/90 text-[#6b4c9a] shadow-sm">
                    <Laptop className="h-3 w-3" />
                  </div>

                  <div className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.08em] text-[#111111] shadow-sm">
                    Technical
                  </div>
                </div>

                {/* Card Content */}
                <div className="px-3 py-2.5">
                  <h3 className="text-xs font-bold leading-4.5 text-[#111111]">
                    {person.name}
                  </h3>

                  <p className="mt-0.5 text-[10px] font-semibold text-[#6b4c9a]">
                    {person.designation}
                  </p>

                  <p className="mt-0.5 text-[9px] leading-4 text-black/55">
                    {person.area}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}