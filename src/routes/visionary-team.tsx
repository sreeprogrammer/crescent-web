import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Crown,
  GraduationCap,
  Landmark,
  Users,
} from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

const visionaryTeam = [
  {
    name: "Alhaj Dr. B.S.Abdur Rahman",
    role: "Founder",
    image: campusPhoto,
    accent: "green",
    description:
      "A visionary who always trusted that education can be the crucial factor in improving the socio economic status of people, went ahead in proving it by establishing many educational organizations for the poor and women. He Founded the Seethakathi Trust, Est. 1967 and All India Islamic Foundation (AIIF) Est.1979 to ensure the poor and deprived are benefited in the form of education . A total of 12 Educational Institutions comprising of a leading Engineering University, a Women’s College, an Arabic college for men, 2 boys schools, 3 girls schools, a women nursing college, a teachers training institute, B. Ed college for women and 2 hospitals and orphanages in both urban and rural areas in the State of Tamil Nadu are his contribution to the society with the only motive of providing quality education to the poor",
  },
  {
    name: "Mr. BSA Arif Buhary Rahman",
    role: "President",
    image: campusPhoto,
    accent: "gold",
    description:
      "The educational institutions have a great responsibility of creating holistic human beings, who have learned enough skills to earn, life ethics and social responsibility. B. S. Abdur Rahman crescent Institute of Science and technology being in the education arena for more than three decades has been successful in creating graduates with good technical skills, exhibiting great leadership skills and socially responsible citizens. The limitation was that the university was not able to extend this expertise to people around the globe and people who could not attend regular classes. The initiative of offering programmes through online and distance mode will help us overcome this barrier and spread our wings across the globe. Apart from degree programmes, certification programmes of international standards will help students from rural India learn technologies that are of great demand globally.",
  },
  {
    name: "Mrs.Qurrath Jameela",
    role: "Chancellor",
    image: campusPhoto,
    accent: "violet",
    description:
      "B S Abdur Rahman Crescent Institute of Science and Technology, an Institute with a profound legacy is committed to futuristic education, women empowerment and societal upliftment. Embracing the digital age, this renowned institution aims to provide holistic education and ensure that students are armed with the expertise and skills needed to flourish in a dynamic global landscape.",
    extra:
      "Our mission is to achieve comprehensive growth by fostering an inclusive environment where diversity is celebrated and sustained development is realized.",
  },
  {
    name: "Mr. Abdul Qadir Abdul Rahman Buhari",
    role: "Pro-Chancellor",
    image: campusPhoto,
    accent: "red",
    description:
      "The physical presence of students in a classroom is not the only way to learn anymore. Online learning has created a disruption in today’s education revolution. More than the degree the skills of an individual is very imperative in the industry today. The change in technology every day necessitates unlearning and relearning to be an integral part of every learner. The Online and Distance education programmes are a boon to the people who would upskill and always be relevant in the Industry. The sharing of knowledge has become global. This gives the learner an edge to be a global competitor. The online and distance education of BSACIST will be a big player in creating employable graduates and also help in upgrading their skills.",
  },
  {
    name: "Dr. A. Peer Mohamed",
    role: "Vice-Chancellor i/c",
    image: campusPhoto,
    accent: "navy",
    description:
      "An educationist for more than three decades, I believe that there is a big need for adapting to new technologies. The Online Distance education programme is an advantage to the learners both to upgrade their skill set and also to improve the qualification. This enhances the chances of better employment opportunities. This also gives a greater flexibility of learning whenever you can and wherever you are. The online and distance education courses at BSAUCIST are tailored to cater to people who are willing to upgrade their skills and seek better employment and also for people who are more willing to increase their academic qualification.",
  },
  {
    name: "Dr. N.Raja Hussain",
    role: "Registrar",
    image: campusPhoto,
    accent: "green",
    description:
      "The introduction of flexible learning technologies, the online education market is expected to grow multifold in the next few years. Adapting to the technological disruptions is very vital to all the educational institutions. The foresight of the institution in starting the online and distance education department is an exemplary achievement. The strength of the leading team and faculty are important in making all new initiatives a success. BSAUCIST has unarguably the best team and leaders which will make learning a great experience. The mentoring skills of our faculty would help every learner to have a unique experience while upgrading their qualifications and improving their knowledge.",
  },
];

function getRoleIcon(role: string) {
  if (role === "Founder") return Landmark;
  if (role === "President") return Award;
  if (role === "Chancellor") return Crown;
  if (role === "Pro-Chancellor") return GraduationCap;
  if (role === "Vice-Chancellor i/c") return BookOpen;
  return Users;
}

function getAccentClasses(accent: string) {
  switch (accent) {
    case "green":
      return {
        border: "border-[#3f7d58]/20",
        line: "bg-[#3f7d58]",
        badge: "bg-[#3f7d58]/10",
        icon: "text-[#3f7d58]",
      };

    case "gold":
      return {
        border: "border-[#d4af37]/25",
        line: "bg-[#d4af37]",
        badge: "bg-[#d4af37]/10",
        icon: "text-[#a58208]",
      };

    case "violet":
      return {
        border: "border-[#6b4c9a]/20",
        line: "bg-[#6b4c9a]",
        badge: "bg-[#6b4c9a]/10",
        icon: "text-[#6b4c9a]",
      };

    case "red":
      return {
        border: "border-[#8f1d1d]/20",
        line: "bg-[#8f1d1d]",
        badge: "bg-[#8f1d1d]/10",
        icon: "text-[#8f1d1d]",
      };

    default:
      return {
        border: "border-[#1d355f]/20",
        line: "bg-[#1d355f]",
        badge: "bg-[#1d355f]/10",
        icon: "text-[#1d355f]",
      };
  }
}

export const Route = createFileRoute("/visionary-team")({
  component: VisionaryTeamPage,
});

function VisionaryTeamPage() {
  return (
    <SiteLayout>
      <div
        style={circularFont}
        className="min-h-screen bg-[#f7f5f7] text-black"
      >
        {/* HEADER */}
        <section className="relative overflow-hidden bg-[#f6dfe5] text-black">
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#6b4c9a]/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <a
                href="/about"
                className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-black/70 transition-colors hover:text-[#8f1d1d]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to About
              </a>

              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full bg-white/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#8f1d1d]">
                <Users className="h-3 w-3" />
                Leadership
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-black sm:text-3xl">
                Visionary Team
              </h1>

              <p className="mt-1.5 max-w-2xl text-xs leading-5 text-black/70 sm:text-sm">
                Leadership and vision driving excellence in education,
                innovation and societal development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* QUICK NAV */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2.5 px-5 py-4 sm:grid-cols-4 sm:px-8">
            <a
              href="#founder"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Landmark className="h-3.5 w-3.5 text-[#3f7d58]" />
                <span className="text-xs font-semibold text-black">
                  Founder
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>

            <a
              href="#president"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-[#d4af37]" />
                <span className="text-xs font-semibold text-black">
                  President
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>

            <a
              href="#chancellor"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <Crown className="h-3.5 w-3.5 text-[#6b4c9a]" />
                <span className="text-xs font-semibold text-black">
                  Chancellor
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>

            <a
              href="#administration"
              className="group rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-[#8f1d1d]" />
                <span className="text-xs font-semibold text-black">
                  Administration
                </span>
              </div>
              <div className="mt-2 h-0.5 w-0 bg-[#d4af37] transition-all duration-300 group-hover:w-7" />
            </a>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <main className="mx-auto max-w-7xl px-5 py-7 sm:px-8 sm:py-9">
          <div className="mb-6 max-w-3xl">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="h-6 w-1 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8f1d1d]">
                Our Leadership
              </span>
            </div>

            <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl">
              Visionary Team
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-black/65 sm:text-sm">
              The leadership team guiding the institution towards accessible,
              innovative and quality education.
            </p>
          </div>

          <div className="space-y-5">
            {visionaryTeam.map((person, index) => {
              const styles = getAccentClasses(person.accent);
              const Icon = getRoleIcon(person.role);

              const isImageRight = index % 2 === 0;

              const sectionId =
                index === 0
                  ? "founder"
                  : index === 1
                    ? "president"
                    : index === 2
                      ? "chancellor"
                      : "administration";

              return (
                <motion.section
                  key={person.name}
                  id={sectionId}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.4 }}
                  className={`group overflow-hidden rounded-2xl border ${styles.border} bg-white shadow-sm`}
                >
                  <div
                    className={`grid md:grid-cols-[1fr_280px] ${
                      !isImageRight ? "md:grid-cols-[280px_1fr]" : ""
                    }`}
                  >
                    {/* CONTENT LEFT / RIGHT */}
                    <div
                      className={`order-2 p-5 sm:p-6 ${
                        isImageRight ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${styles.badge}`}
                        >
                          <Icon className={`h-4 w-4 ${styles.icon}`} />
                        </div>

                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-black/50">
                            {person.role}
                          </p>

                          <h3 className="mt-0.5 text-base font-bold leading-5 text-black sm:text-lg">
                            {person.name}
                          </h3>
                        </div>
                      </div>

                      <div className="my-4 h-px bg-slate-100" />

                      <p className="text-xs leading-6 text-black sm:text-sm sm:leading-6.5">
                        {person.description}
                      </p>

                      {person.extra && (
                        <p className="mt-3 text-xs font-medium leading-6 text-black sm:text-sm">
                          {person.extra}
                        </p>
                      )}

                      <div className="mt-4 h-0.5 w-8 bg-[#d4af37] transition-all duration-300 group-hover:w-14" />
                    </div>

                    {/* PHOTO */}
                    <div
                      className={`relative order-1 h-56 overflow-hidden bg-slate-100 sm:h-64 md:h-full md:min-h-[290px] ${
                        isImageRight ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />

                      <div
                        className={`absolute bottom-0 left-0 h-1 w-full ${styles.line}`}
                      />
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>
        </main>
      </div>
    </SiteLayout>
  );
}