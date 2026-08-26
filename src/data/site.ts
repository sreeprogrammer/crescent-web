export const college = {
  name: "Crescent Institute",
  unit: "Centre for Distance and Online Education",

  address: "Crescent Campus, GST Road, Vandalur, Chennai – 600 048",
  shortAddress: "Vandalur, Chennai – 600 048",

  email: "admissions@crescentcdoe.edu.in",
  whatsapp: "919000000000",

  numbers: [
    {
      label: "MBA Admission",
      value: "+91 90000 11111",
      tel: "+919000011111",
    },
    {
      label: "MCA Admission",
      value: "+91 90000 22222",
      tel: "+919000022222",
    },
    {
      label: "Islamic Studies",
      value: "+91 90000 33333",
      tel: "+919000033333",
    },
  ],

  mapEmbed:
    "https://www.google.com/maps?q=Vandalur,+Chennai&output=embed",

  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Vandalur+Chennai",

  officeHours: [
    {
      day: "Monday – Friday",
      time: "9:00 AM – 5:30 PM",
    },
    {
      day: "Saturday",
      time: "9:00 AM – 1:00 PM",
    },
    {
      day: "Sunday & Holidays",
      time: "Closed",
    },
  ],
};

/* =========================================================
   NAVIGATION TYPES
========================================================= */

export type NavChild = {
  label: string;
  to: string;
  hash?: string;
};

export type NavItem = {
  label: string;
  to: string;
  children?: NavChild[];
};

/* =========================================================
   MAIN NAVIGATION
========================================================= */

export const navItems: NavItem[] = [
  {
    label: "Home",
    to: "/",
  },

  {
    label: "About Us",
    to: "/about",
    children: [
      {
        label: "Visionary Team",
        to: "/about",
        hash: "visionary-team",
      },
      {
        label: "Execution Team",
        to: "/about",
        hash: "execution-team",
      },
      {
        label: "CDOE Team",
        to: "/about",
        hash: "cdoe-team",
      },
      {
        label: "Facilities",
        to: "/about",
        hash: "facilities",
      },
    ],
  },

  {
    label: "Programmes Offered",
    to: "/programmes",
    children: [
      {
        label: "UG Programmes",
        to: "/programmes",
        hash: "ug",
      },
      {
        label: "PG Programmes",
        to: "/programmes",
        hash: "pg",
      },
      {
        label: "Certification",
        to: "/programmes",
        hash: "certification",
      },
    ],
  },

  {
    label: "Admission",
    to: "/admission",
    children: [
      {
        label: "How to Apply",
        to: "/admission",
        hash: "how-to-apply",
      },
      {
        label: "New Registration",
        to: "/admission",
        hash: "new-registration",
      },
      {
        label: "Applicant Login",
        to: "/admission",
        hash: "applicant-login",
      },
      {
        label: "Notification",
        to: "/admission",
        hash: "notification",
      },
    ],
  },

  {
    label: "Students Corner",
    to: "/students-corner",
    children: [
      {
        label: "LMS Login",
        to: "/students-corner",
        hash: "lms-login",
      },
      {
        label: "Student Affairs",
        to: "/students-corner",
        hash: "student-affairs",
      },
    ],
  },

  {
    label: "UGC Corner",
    to: "/ugc-corner",
    children: [
      {
        label: "AICTE Approval",
        to: "/ugc-corner",
        hash: "aicte-approval",
      },
      {
        label: "Degree Equivalence",
        to: "/ugc-corner",
        hash: "degree-equivalence",
      },
      {
        label: "UGC Notification",
        to: "/ugc-corner",
        hash: "ugc-notification",
      },
      {
        label: "Compliance",
        to: "/ugc-corner",
        hash: "compliance",
      },
      {
        label: "UGC Applications",
        to: "/ugc-corner",
        hash: "ugc-applications",
      },
      {
        label: "CIQA Annual Reports",
        to: "/ugc-corner",
        hash: "ciqa-annual-reports",
      },
      {
        label: "Admission List",
        to: "/ugc-corner",
        hash: "admission-list",
      },
    ],
  },

  {
    label: "Gallery",
    to: "/gallery",
    children: [
      {
        label: "Distance Education",
        to: "/gallery",
        hash: "distance-education",
      },
      {
        label: "Campus",
        to: "/gallery",
        hash: "campus",
      },
      {
        label: "Convocation",
        to: "/gallery",
        hash: "convocation",
      },
      {
        label: "Job Fair",
        to: "/gallery",
        hash: "job-fair",
      },
      {
        label: "Events",
        to: "/gallery",
        hash: "events",
      },
      {
        label: "Faculty",
        to: "/gallery",
        hash: "faculty",
      },
    ],
  },

  {
    label: "Contact",
    to: "/contact",
  },
];

/* =========================================================
   DEGREE PROGRAMMES
========================================================= */

export const degreeProgrammes = [
  {
    group: "Undergraduate",
    items: [
      {
        name: "BA English",
        desc: "Literature, language and communication for modern careers.",
        duration: "3 Years",
      },
      {
        name: "BA Islamic Studies",
        desc: "Classical and contemporary Islamic thought, civilisation and ethics.",
        duration: "3 Years",
      },
      {
        name: "BA Public Policy",
        desc: "Governance, economics and policy analysis fundamentals.",
        duration: "3 Years",
      },
    ],
  },

  {
    group: "Postgraduate",
    items: [
      {
        name: "MA Islamic Studies",
        desc: "Advanced study and research in Islamic sciences, civilisation and thought.",
        duration: "2 Years",
      },
      {
        name: "MCA",
        desc: "Software engineering, data, application development and applied computing.",
        duration: "2 Years",
      },
      {
        name: "MBA",
        desc: "Management, finance, analytics, entrepreneurship and leadership practice.",
        duration: "2 Years",
      },
    ],
  },
];

/* =========================================================
   CERTIFICATION PROGRAMMES
========================================================= */

export const certificationProgrammes = [
  {
    name: "Mobile Application Development",
    desc: "Build modern Android and iOS applications using contemporary cross-platform technologies.",
    duration: "6 Months",
  },
];

/* =========================================================
   UNDERGRADUATE PROGRAMMES
========================================================= */

export const ugProgrammes = [
  {
    name: "BA English",
    full: "Bachelor of Arts in English",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
  },

  {
    name: "BA Islamic Studies",
    full: "Bachelor of Arts in Islamic Studies",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
  },

  {
    name: "BA Public Policy",
    full: "Bachelor of Arts in Public Policy",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
  },
];

/* =========================================================
   POSTGRADUATE PROGRAMMES
========================================================= */

export const pgProgrammes = [
  {
    name: "MA Islamic Studies",
    full: "Master of Arts in Islamic Studies",
    duration: "2 Years",
    eligibility: "Bachelor's degree",
  },

  {
    name: "MCA",
    full: "Master of Computer Applications",
    duration: "2 Years",
    eligibility: "Bachelor's degree with Mathematics",
  },

  {
    name: "MBA",
    full: "Master of Business Administration",
    duration: "2 Years",
    eligibility: "Any Bachelor's degree",
  },
];

/* =========================================================
   CERTIFICATION COURSES
========================================================= */

export const certificationCourses = [
  {
    name: "Mobile Application Development",
    full: "Professional Certification Programme",
    duration: "6 Months",
    eligibility: "12th / Diploma / Degree",
  },
];

/* =========================================================
   ADMISSION PROCESS
========================================================= */

export const admissionSteps = [
  {
    step: "1",
    title: "Apply Online",
    body: "Complete the online application form in under ten minutes.",
  },

  {
    step: "2",
    title: "Upload Documents",
    body: "Attach marksheets, ID proof and a passport photograph.",
  },

  {
    step: "3",
    title: "Verification",
    body: "Our admission cell verifies eligibility within 48 hours.",
  },

  {
    step: "4",
    title: "Fee Payment",
    body: "Pay securely online in full or through easy instalments.",
  },

  {
    step: "5",
    title: "Admission Confirmation",
    body: "Receive your enrolment number and confirmation letter.",
  },

  {
    step: "6",
    title: "Begin Learning",
    body: "Access the LMS, study material and live mentor sessions.",
  },
];