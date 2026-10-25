
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, GraduationCap, Laptop, Users } from "lucide-react";

import deepakPhoto from "@/assets/deepak.jpeg";
import lathaPhoto from "@/assets/latha.jpeg";
import meerasaPhoto from "@/assets/meerasa.jpeg";
import merlinePhoto from "@/assets/merline.jpeg";
import roobanPhoto from "@/assets/rooban.jpeg";

const circularFont = {
  fontFamily: "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

export const Route = createFileRoute("/technical")({
  component: TechnicalPage,
});

const technicalTeam = [
  {
    name: "Mrs. P. Paul Merline",
    designation: "Technical Manager",
    area: "(LMS & Data Management)",
    photo: merlinePhoto,
  },
  {
    name: "Mr. A. Mohamed Meerasa Mujahith",
    designation: "Technical Assistant",
    area: "(LMS)",
    photo: meerasaPhoto,
  },
  {
    name: "Mr. K. Rooban",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
    photo: roobanPhoto,
  },
  {
    name: "Mrs. R. Latha",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
    photo: lathaPhoto,
  },
  {
    name: "Mr. R. Deepak",
    designation: "Technical Assistant",
    area: "(Audio - Video Editing)",
    photo: deepakPhoto,
  },
];

function TechnicalPage() {
  return (
    <SiteLayout>
      <div className="bg-white text-[#111111]" style={circularFont}>
        {/* HERO */}
        <section className="bg-[#f6dfe5]">
          <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
            <div className="mb-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#111111]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to About Us
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#111111]">
                <Users className="h-4 w-4" />
                CDOE • Technical Team
              </div>

              <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                Technical Team
              </h1>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 sm:text-base">
                Dedicated technical professionals supporting digital learning, LMS services, online
                platforms and technology related learner assistance.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <main className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
          {/* Heading */}
          <div className="mb-5">
            <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b4c9a]">
              <span className="h-px w-6 bg-[#d4af37]" />
              Technical Support
            </div>

            <h2 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
              Technical Team
            </h2>

            <p className="mt-1 text-sm leading-5 text-black/60 sm:text-base">
              Dedicated professionals supporting the digital learning experience.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-black/8 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Gold Hover Line */}
                <div className="absolute bottom-0 left-2 right-2 z-10 h-0.5 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Consistent Image Alignment */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f3f3f3]">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />

                  <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-white/90 text-[#6b4c9a] shadow-sm">
                    <Laptop className="h-4 w-4" />
                  </div>

                  <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111111] shadow-sm">
                    Technical
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col px-4 py-4">
                  <h3 className="text-base font-bold leading-6 text-[#111111]">
                    {person.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold leading-5 text-[#6b4c9a]">
                    {person.designation}
                  </p>

                  <p className="mt-1 text-sm leading-5 text-black/60">
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
