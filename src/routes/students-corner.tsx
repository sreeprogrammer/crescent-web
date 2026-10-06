import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  GraduationCap,
  Headphones,
  Mail,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

import campusPhoto from "@/assets/campus-1.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";

/* =========================================================
   FONT
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

/* =========================================================
   ROUTE
========================================================= */

export const Route = createFileRoute("/students-corner")({
  component: StudentsCornerPage,
});

/* =========================================================
   STUDENTS CORNER PAGE
========================================================= */

function StudentsCornerPage() {
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  return (
    <SiteLayout>
      <main
        style={circularFont}
        className="min-h-screen overflow-hidden bg-[#F5F1E9] text-[#111111]"
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <section className="bg-[#F5F1E9]">
          <div className="mx-auto max-w-6xl px-5 py-6 sm:px-6 sm:py-7 lg:py-8">

            <div className="mb-3">
              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-[clamp(0.78rem,0.72rem+0.15vw,0.9rem)]
                  font-medium
                  text-[#111111]
                  transition-colors
                  hover:text-[#8F1D1D]
                "
              >
                <ArrowLeft className="size-[clamp(0.9rem,0.85rem+0.15vw,1rem)]" />
                Back to Home
              </Link>
            </div>

            <div className="max-w-4xl">

              <div
                className="
                  mb-2.5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white/70
                  px-3
                  py-1.5
                  text-[clamp(0.65rem,0.6rem+0.15vw,0.8rem)]
                  font-semibold
                  uppercase
                  tracking-[0.08em]
                  text-[#111111]
                "
              >
                <GraduationCap className="size-4" />
                Student Support
              </div>

              <h1
                className="
                  text-[clamp(1.8rem,1.45rem+1.2vw,2.7rem)]
                  font-bold
                  leading-[1.05]
                  tracking-tight
                "
              >
                Students Corner
              </h1>

              <p
                className="
                  mt-2
                  max-w-3xl
                  text-[clamp(0.9rem,0.82rem+0.2vw,1.08rem)]
                  leading-[1.6]
                  text-black/70
                "
              >
                Access learning resources, student services and grievance
                support through one convenient space.
              </p>
            </div>
          </div>
        </section>

        {/* =================================================
            QUICK ACCESS
        ================================================= */}

        <section className="bg-[#F5F1E9] px-5 pb-6 pt-3 sm:px-6 sm:pb-7 lg:pb-8">
          <div className="mx-auto max-w-6xl">

            <div className="mb-3 flex items-center gap-2.5">
              <span className="h-[2px] w-7 bg-[#B08A24]" />

              <span
                className="
                  text-[clamp(0.68rem,0.62rem+0.15vw,0.8rem)]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[#8f1d1d]
                "
              >
                Quick Access
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <QuickCard
                number="01"
                title="LMS Login"
                description="Access your digital learning space"
                icon={BookOpen}
                accent="#30265F"
                href="/lms-login"
              />

              <QuickCard
                number="02"
                title="Study Material"
                description="Access learning resources"
                icon={FileText}
                accent="#2F6F4E"
                href="/lms-login"
              />

              <QuickCard
                number="03"
                title="Examination"
                description="Exam updates and information"
                icon={GraduationCap}
                accent="#B08A24"
                href="/lms-login"
              />

              <QuickCard
                number="04"
                title="Student Affairs"
                description="Student support and grievance"
                icon={ShieldCheck}
                accent="#8F1D1D"
                href="#student-affairs"
              />

            </div>
          </div>
        </section>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <section className="px-5 pb-8 pt-2 sm:px-6 sm:pb-10">
          <div className="mx-auto max-w-6xl">

            <div className="grid gap-4 lg:grid-cols-2">

              {/* =================================================
                  LMS LOGIN
              ================================================= */}

              <motion.section
                id="lms-login"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-[#dedbd6]
                  bg-white
                  p-5
                  shadow-[0_6px_20px_rgba(0,0,0,0.05)]
                  sm:p-6
                "
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-[#30265F]" />

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <div className="mb-2 flex items-center gap-2.5">

                      <div className="flex size-10 items-center justify-center rounded-xl bg-[#30265F]">
                        <BookOpen className="size-5 text-[#D8B84C]" />
                      </div>

                      <div>

                        <p
                          className="
                            text-[clamp(0.65rem,0.6rem+0.15vw,0.78rem)]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#30265F]
                          "
                        >
                          Digital Learning
                        </p>

                        <h2
                          className="
                            text-[clamp(1.05rem,0.95rem+0.3vw,1.35rem)]
                            font-bold
                            leading-tight
                          "
                        >
                          LMS Login
                        </h2>

                      </div>
                    </div>

                    <p
                      className="
                        mt-3
                        max-w-xl
                        text-[clamp(0.82rem,0.76rem+0.2vw,0.98rem)]
                        leading-[1.65]
                        text-black/65
                      "
                    >
                      Access your online learning environment, academic
                      resources and important course updates.
                    </p>

                  </div>
                </div>

                {/* FEATURES */}

                <div className="mt-5 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2">

                  {[
                    "Recorded lectures",
                    "Live weekend classes",
                    "Study material & e-books",
                    "Assignment submission",
                    "Internal marks",
                    "Exam updates & results",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[clamp(0.78rem,0.72rem+0.15vw,0.9rem)]
                        font-medium
                        text-[#111111]
                      "
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#2F6F4E]" />
                      {item}
                    </div>
                  ))}

                </div>

                {/* BUTTON */}

                <div className="mt-5">

                  <a
                    href="https://lmscdoe.crescent-institute.edu.in/login/index.php"
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#30265F]
                      px-4
                      py-2.5
                      text-[clamp(0.78rem,0.72rem+0.15vw,0.9rem)]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    Login to LMS

                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />

                    <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-[#D8B84C] transition-transform duration-300 group-hover:scale-x-100" />
                  </a>

                </div>
              </motion.section>

              {/* =================================================
                  GRIEVANCE
              ================================================= */}

              <motion.section
                id="student-affairs"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="
                  relative
                  overflow-hidden
                  rounded-[16px]
                  bg-[#17234B]
                  p-5
                  text-white
                  shadow-[0_8px_22px_rgba(23,35,75,0.16)]
                  sm:p-6
                "
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#2F6F4E] via-[#D8B84C] to-[#8F1D1D]" />

                <div className="mb-4 flex items-center gap-2.5">

                  <div className="flex size-10 items-center justify-center rounded-xl bg-white/10">
                    <ShieldCheck className="size-5 text-[#D8B84C]" />
                  </div>

                  <div>

                    <p
                      className="
                        text-[clamp(0.65rem,0.6rem+0.15vw,0.78rem)]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#D8B84C]
                      "
                    >
                      Student Support
                    </p>

                    <h2
                      className="
                        text-[clamp(1.05rem,0.95rem+0.3vw,1.35rem)]
                        font-bold
                        leading-tight
                      "
                    >
                      Student Grievance Redressal Cell
                    </h2>

                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_190px]">

                  {/* OFFICER */}

                  <div>

                    <p
                      className="
                        text-[clamp(0.78rem,0.72rem+0.15vw,0.92rem)]
                        leading-[1.65]
                        text-white/65
                      "
                    >
                      For any academic or student-related grievance, learners
                      can approach the designated Nodal Officer.
                    </p>

                    {/* PROFILE */}

                    <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5">

                      <div className="h-[84px] w-[84px] shrink-0 overflow-hidden rounded-xl border-2 border-[#D8B84C]/60 bg-white/10">

                        <img
                          src={campusPhoto}
                          alt="Ms. P. Paul Merline"
                          className="h-full w-full object-cover object-center"
                        />

                      </div>

                      <div className="min-w-0">

                        <p
                          className="
                            text-[clamp(0.82rem,0.76rem+0.15vw,0.95rem)]
                            font-bold
                          "
                        >
                          Ms. P. Paul Merline
                        </p>

                        <p
                          className="
                            mt-1
                            text-[clamp(0.7rem,0.65rem+0.15vw,0.82rem)]
                            leading-5
                            text-white/60
                          "
                        >
                          Technical Manager
                          <br />
                          (LMS &amp; Data Management)
                        </p>

                        <p
                          className="
                            mt-1.5
                            text-[clamp(0.68rem,0.62rem+0.15vw,0.8rem)]
                            font-semibold
                            text-[#D8B84C]
                          "
                        >
                          Nodal Officer
                        </p>

                      </div>
                    </div>
                  </div>

                  {/* FEATURES */}

                  <div className="grid grid-cols-2 gap-2">

                    {[
                      "Academic grievances",
                      "Grievance Box",
                      "Online complaint",
                      "Student support",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2.5"
                      >
                        <div
                          className="
                            mb-1
                            text-[clamp(0.68rem,0.62rem+0.15vw,0.8rem)]
                            font-bold
                            text-[#D8B84C]
                          "
                        >
                          0{index + 1}
                        </div>

                        <p
                          className="
                            text-[clamp(0.68rem,0.62rem+0.15vw,0.8rem)]
                            leading-4
                            text-white/75
                          "
                        >
                          {item}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>

                {/* ACTIONS */}

                <div className="mt-5 flex flex-wrap gap-2.5">

                  <button
                    type="button"
                    onClick={() => setIsComplaintOpen(true)}
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[#D8B84C]
                      px-4
                      py-2.5
                      text-[clamp(0.72rem,0.68rem+0.15vw,0.85rem)]
                      font-bold
                      text-[#17234B]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <FileText className="size-4" />

                    Online Complaint Form

                    <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-[#8F1D1D] transition-transform duration-300 group-hover:scale-x-100" />
                  </button>

                  <a
                    href="https://distance.crescent-institute.edu.in/img/Grievence.png"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group
                      relative
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-white/20
                      bg-white/5
                      px-4
                      py-2.5
                      text-[clamp(0.72rem,0.68rem+0.15vw,0.85rem)]
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <FileText className="size-4 text-[#D8B84C]" />

                    UGC Letter

                    <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-[#D8B84C] transition-transform duration-300 group-hover:scale-x-100" />
                  </a>

                </div>
              </motion.section>
            </div>

            {/* =================================================
                SUPPORT STRIP
            ================================================= */}

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <SupportCard
                icon={ShieldCheck}
                title="Secure Learning"
                description="Safe and reliable digital access"
                accent="#2F6F4E"
              />

              <SupportCard
                icon={Headphones}
                title="Mentor Support"
                description="Guidance whenever you need it"
                accent="#6B4C9A"
              />

              <SupportCard
                icon={GraduationCap}
                title="Learner First"
                description="Support designed around students"
                accent="#8F1D1D"
              />

            </div>
          </div>
        </section>

        {/* =================================================
            COMPLAINT MODAL
        ================================================= */}

        <AnimatePresence>
          {isComplaintOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="
                fixed
                inset-0
                z-[10000]
                flex
                items-center
                justify-center
                bg-[#111111]/60
                px-4
                py-5
                backdrop-blur-sm
              "
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  setIsComplaintOpen(false);
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 12 }}
                transition={{ duration: 0.25 }}
                className="
                  relative
                  max-h-[92vh]
                  w-full
                  max-w-xl
                  overflow-y-auto
                  rounded-[18px]
                  bg-white
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                "
              >

                {/* MODAL HEADER */}

                <div className="sticky top-0 z-10 bg-[#17234B] px-5 py-5 text-white">

                  <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#2F6F4E] via-[#D8B84C] to-[#8F1D1D]" />

                  <button
                    type="button"
                    onClick={() => setIsComplaintOpen(false)}
                    aria-label="Close complaint form"
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      size-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/10
                      text-white
                      transition-colors
                      hover:bg-white/20
                    "
                  >
                    <X className="size-4" />
                  </button>

                  <div className="pr-10">

                    <div className="mb-1.5 flex items-center gap-2">

                      <ShieldCheck className="size-5 text-[#D8B84C]" />

                      <span
                        className="
                          text-[clamp(0.65rem,0.6rem+0.15vw,0.8rem)]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#D8B84C]
                        "
                      >
                        Student Support
                      </span>

                    </div>

                    <h2
                      className="
                        text-[clamp(1.15rem,1rem+0.4vw,1.5rem)]
                        font-bold
                        leading-tight
                      "
                    >
                      Students Grievance Redressal Cell
                    </h2>

                    <p
                      className="
                        mt-1.5
                        text-[clamp(0.75rem,0.7rem+0.15vw,0.9rem)]
                        leading-5
                        text-white/65
                      "
                    >
                      Submit your grievance using the form below.
                    </p>

                  </div>
                </div>

                {/* FORM */}

                <form
                  className="space-y-4 px-5 py-6"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setIsComplaintOpen(false);
                  }}
                >

                  {/* NAME */}

                  <div>

                    <label
                      htmlFor="student-name"
                      className="
                        mb-1.5
                        block
                        text-[clamp(0.75rem,0.7rem+0.15vw,0.88rem)]
                        font-bold
                        text-[#111111]
                      "
                    >
                      Name of Student
                    </label>

                    <div className="relative">

                      <UserRound className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#6B4C9A]" />

                      <input
                        id="student-name"
                        name="studentName"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="
                          h-11
                          w-full
                          rounded-lg
                          border
                          border-[#dedbd6]
                          bg-[#F8F7F4]
                          pl-10
                          pr-3
                          text-[clamp(0.8rem,0.75rem+0.15vw,0.95rem)]
                          text-[#111111]
                          outline-none
                          transition-all
                          placeholder:text-black/35
                          focus:border-[#6B4C9A]
                          focus:bg-white
                          focus:ring-2
                          focus:ring-[#6B4C9A]/10
                        "
                      />

                    </div>
                  </div>

                  {/* RRN + PHONE */}

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div>

                      <label
                        htmlFor="student-rrn"
                        className="
                          mb-1.5
                          block
                          text-[clamp(0.75rem,0.7rem+0.15vw,0.88rem)]
                          font-bold
                          text-[#111111]
                        "
                      >
                        RRN
                      </label>

                      <input
                        id="student-rrn"
                        name="rrn"
                        type="text"
                        required
                        placeholder="Enter RRN"
                        className="
                          h-11
                          w-full
                          rounded-lg
                          border
                          border-[#dedbd6]
                          bg-[#F8F7F4]
                          px-3
                          text-[clamp(0.8rem,0.75rem+0.15vw,0.95rem)]
                          text-[#111111]
                          outline-none
                          transition-all
                          placeholder:text-black/35
                          focus:border-[#2F6F4E]
                          focus:bg-white
                          focus:ring-2
                          focus:ring-[#2F6F4E]/10
                        "
                      />

                    </div>

                    <div>

                      <label
                        htmlFor="student-phone"
                        className="
                          mb-1.5
                          block
                          text-[clamp(0.75rem,0.7rem+0.15vw,0.88rem)]
                          font-bold
                          text-[#111111]
                        "
                      >
                        Phone
                      </label>

                      <div className="relative">

                        <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#8F1D1D]" />

                        <input
                          id="student-phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="Enter phone number"
                          className="
                            h-11
                            w-full
                            rounded-lg
                            border
                            border-[#dedbd6]
                            bg-[#F8F7F4]
                            pl-10
                            pr-3
                            text-[clamp(0.8rem,0.75rem+0.15vw,0.95rem)]
                            text-[#111111]
                            outline-none
                            transition-all
                            placeholder:text-black/35
                            focus:border-[#8F1D1D]
                            focus:bg-white
                            focus:ring-2
                            focus:ring-[#8F1D1D]/10
                          "
                        />

                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}

                  <div>

                    <label
                      htmlFor="student-email"
                      className="
                        mb-1.5
                        block
                        text-[clamp(0.75rem,0.7rem+0.15vw,0.88rem)]
                        font-bold
                        text-[#111111]
                      "
                    >
                      Email
                    </label>

                    <div className="relative">

                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#B08A24]" />

                      <input
                        id="student-email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter email address"
                        className="
                          h-11
                          w-full
                          rounded-lg
                          border
                          border-[#dedbd6]
                          bg-[#F8F7F4]
                          pl-10
                          pr-3
                          text-[clamp(0.8rem,0.75rem+0.15vw,0.95rem)]
                          text-[#111111]
                          outline-none
                          transition-all
                          placeholder:text-black/35
                          focus:border-[#B08A24]
                          focus:bg-white
                          focus:ring-2
                          focus:ring-[#B08A24]/10
                        "
                      />

                    </div>
                  </div>

                  {/* GRIEVANCE */}

                  <div>

                    <label
                      htmlFor="student-grievance"
                      className="
                        mb-1.5
                        block
                        text-[clamp(0.75rem,0.7rem+0.15vw,0.88rem)]
                        font-bold
                        text-[#111111]
                      "
                    >
                      State Your Grievance
                    </label>

                    <textarea
                      id="student-grievance"
                      name="grievance"
                      required
                      rows={5}
                      placeholder="State your grievance clearly..."
                      className="
                        w-full
                        resize-none
                        rounded-lg
                        border
                        border-[#dedbd6]
                        bg-[#F8F7F4]
                        px-3
                        py-3
                        text-[clamp(0.8rem,0.75rem+0.15vw,0.95rem)]
                        leading-6
                        text-[#111111]
                        outline-none
                        transition-all
                        placeholder:text-black/35
                        focus:border-[#30265F]
                        focus:bg-white
                        focus:ring-2
                        focus:ring-[#30265F]/10
                      "
                    />

                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="
                      group
                      relative
                      flex
                      h-11
                      w-full
                      items-center
                      justify-center
                      gap-2
                      overflow-hidden
                      rounded-lg
                      bg-[#17234B]
                      text-[clamp(0.8rem,0.75rem+0.15vw,0.95rem)]
                      font-bold
                      text-white
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                    "
                  >
                    <span>Submit</span>

                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />

                    <span className="absolute bottom-0 left-5 right-5 h-0.5 origin-left scale-x-0 bg-[#D8B84C] transition-transform duration-300 group-hover:scale-x-100" />
                  </button>

                  {/* NOTE */}

                  <div className="rounded-lg border-l-[3px] border-[#D8B84C] bg-[#F5F1E9] px-3.5 py-3">

                    <p
                      className="
                        text-[clamp(0.75rem,0.7rem+0.15vw,0.88rem)]
                        leading-5
                        text-[#111111]/75
                      "
                    >
                      <span className="font-bold text-[#8F1D1D]">
                        Note:
                      </span>{" "}
                      You can also email your grievance to:{" "}
                      <a
                        href="mailto:cdoesupport@crescent.education"
                        className="font-semibold text-[#30265F]"
                      >
                        cdoesupport@crescent.education
                      </a>{" "}
                      or submit your grievance in person to the Nodal Officer.
                    </p>

                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </SiteLayout>
  );
}

/* =========================================================
   QUICK CARD
========================================================= */

function QuickCard({
  number,
  title,
  description,
  icon: Icon,
  accent,
  href,
}: {
  number: string;
  title: string;
  description: string;
  icon: typeof GraduationCap;
  accent: string;
  href: string;
}) {
  const destination =
    href === "/lms-login"
      ? "https://lmscdoe.crescent-institute.edu.in/login/index.php"
      : href;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-w-0"
    >
      <a
        href={destination}
        className="
          group
          relative
          flex
          min-h-[104px]
          w-full
          items-center
          overflow-hidden
          rounded-[1rem]
          border
          border-[#D9D4CA]
          bg-white
          px-4
          py-4
          shadow-[0_5px_16px_rgba(31,35,43,0.05)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_9px_22px_rgba(31,35,43,0.09)]
        "
      >

        <div
          className="absolute left-0 right-0 top-0 h-[3px]"
          style={{ backgroundColor: accent }}
        />

        <div className="flex w-full items-center gap-3">

          {/* ICON */}

          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#17234B] transition-transform duration-300 group-hover:scale-105">

            <Icon className="size-5 text-[#D8B84C]" />

          </div>

          {/* CONTENT */}

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2">

              <span
                className="
                  shrink-0
                  text-[clamp(0.68rem,0.62rem+0.15vw,0.8rem)]
                  font-bold
                  tracking-[0.1em]
                "
                style={{ color: accent }}
              >
                {number}
              </span>

              <h3
                className="
                  truncate
                  text-[clamp(0.88rem,0.82rem+0.2vw,1rem)]
                  font-bold
                  text-[#20242B]
                "
              >
                {title}
              </h3>

            </div>

            <p
              className="
                mt-1
                truncate
                text-[clamp(0.72rem,0.68rem+0.15vw,0.85rem)]
                font-medium
                text-[#737782]
              "
            >
              {description}
            </p>

          </div>

          {/* ARROW */}

          <ArrowRight
            className="
              size-4
              shrink-0
              text-[#B9BDC5]
              transition-all
              duration-300
              group-hover:translate-x-1
              group-hover:text-[#30265F]
            "
          />

        </div>

        <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
      </a>
    </motion.div>
  );
}

/* =========================================================
   SUPPORT CARD
========================================================= */

function SupportCard({
  icon: Icon,
  title,
  description,
  accent,
}: {
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-[#D9D4CA] bg-white px-4 py-4 shadow-[0_4px_14px_rgba(31,35,43,0.04)]">

      <div
        className="absolute left-0 top-0 h-full w-1"
        style={{ backgroundColor: accent }}
      />

      <div className="flex items-center gap-3 pl-1">

        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}15` }}
        >
          <Icon className="size-5" style={{ color: accent }} />
        </div>

        <div>

          <h3
            className="
              text-[clamp(0.82rem,0.76rem+0.2vw,0.98rem)]
              font-bold
              text-[#111111]
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-0.5
              text-[clamp(0.72rem,0.68rem+0.15vw,0.85rem)]
              text-black/55
            "
          >
            {description}
          </p>

        </div>
      </div>

      <span className="absolute bottom-0 left-3 right-3 h-0.5 origin-left scale-x-0 bg-[#D4AF37] transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}

export default StudentsCornerPage;