import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Laptop,
  Users,
} from "lucide-react";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

export const Route = createFileRoute("/cdoe-team")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <div className="bg-white text-[#111111]" style={circularFont}>

        {/* HERO */}
        <section className="bg-[#f6dfe5]">
          <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6 sm:py-5">
            <div className="mb-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#111111]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>
            </div>

            <div className="max-w-4xl">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8f1d1d]">
                <Users className="h-3 w-3" />
                About Us • CDOE
              </div>

              <h1 className="text-xl font-bold leading-tight tracking-tight sm:text-2xl">
                Centre for Distance &amp; Online Education
              </h1>

              <p className="mt-1.5 max-w-3xl text-xs leading-5 text-[#111111]/75 sm:text-sm">
                The CDOE team brings together academic and technical
                professionals who work together to provide learners with
                quality education, digital support and a smooth learning
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-6xl px-5 py-5 sm:px-6 sm:py-6">
          <div className="mb-4">
            <div className="mb-1.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8f1d1d]">
              <span className="h-px w-6 bg-[#d4af37]" />
              CDOE Team
            </div>

            <h2 className="text-lg font-bold leading-tight tracking-tight sm:text-xl">
              Academic excellence powered by people and technology.
            </h2>

            <p className="mt-1 text-xs text-black/60">
              Meet Our Teams
            </p>
          </div>

          {/* TEAM CARDS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* ACADEMIC TEAM */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-xl border border-[#8f1d1d]/10 bg-white px-4 py-3.5 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-2.5 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#8f1d1d]/10 text-[#8f1d1d]">
                  <GraduationCap className="h-4 w-4" />
                </div>

                <span className="text-[10px] font-semibold text-black/40">
                  01
                </span>
              </div>

              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#8f1d1d]">
                Academic Team
              </p>

              <h3 className="text-base font-bold leading-tight">
                Faculty Team
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-black/65">
                Our faculty team supports teaching, academic guidance,
                programme coordination and learner development.
              </p>

              <div className="mt-2.5">
                <Link
                  to="/faculty"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111]"
                >
                  View Faculty Team
                  <ArrowRight className="h-3.5 w-3.5 text-[#d4af37]" />
                </Link>
              </div>
            </motion.div>

            {/* TECHNICAL TEAM */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-[#6b4c9a]/10 bg-white px-4 py-3.5 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-[#d4af37] transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-2.5 flex items-center justify-between">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6b4c9a]/10 text-[#6b4c9a]">
                  <Laptop className="h-4 w-4" />
                </div>

                <span className="text-[10px] font-semibold text-black/40">
                  02
                </span>
              </div>

              <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#6b4c9a]">
                Technical Support
              </p>

              <h3 className="text-base font-bold leading-tight">
                Technical Team
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-black/65">
                Our technical team supports digital learning, LMS services,
                online platforms and technology-related learner assistance.
              </p>

              <div className="mt-2.5">
                <Link
                  to="/technical"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111]"
                >
                  View Technical Team
                  <ArrowRight className="h-3.5 w-3.5 text-[#d4af37]" />
                </Link>
              </div>
            </motion.div>

          </div>
        </section>
      </div>
    </SiteLayout>
  );
}