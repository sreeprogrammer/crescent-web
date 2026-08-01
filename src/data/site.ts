export const college = {
  name: "Crescent Institute",
  unit: "Centre for Distance and Online Education",
  address: "Crescent Campus, GST Road, Vandalur, Chennai – 600 048",
  shortAddress: "Vandalur, Chennai – 600 048",
  email: "admissions@crescentcdoe.edu.in",
  whatsapp: "919000000000",
  numbers: [
    { label: "MBA Admission", value: "+91 90000 11111", tel: "+919000011111" },
    { label: "MCA Admission", value: "+91 90000 22222", tel: "+919000022222" },
    { label: "Islamic Studies", value: "+91 90000 33333", tel: "+919000033333" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Vandalur,+Chennai&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Vandalur+Chennai",
  officeHours: [
    { day: "Monday – Friday", time: "9:00 AM – 5:30 PM" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM" },
    { day: "Sunday & Holidays", time: "Closed" },
  ],
};

export type NavChild = { label: string; to: string; hash?: string };
export type NavItem = { label: string; to: string; children?: NavChild[] };

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    to: "/about",
    children: [
      { label: "Visionary Team", to: "/about", hash: "visionary-team" },
      { label: "Execution Team", to: "/about", hash: "execution-team" },
      { label: "CDOE Team", to: "/about", hash: "cdoe-team" },
      { label: "Facilities", to: "/about", hash: "facilities" },
    ],
  },
  {
    label: "Programmes Offered",
    to: "/programmes",
    children: [
      { label: "UG Programme", to: "/programmes", hash: "ug" },
      { label: "PG Programme", to: "/programmes", hash: "pg" },
    ],
  },
  {
    label: "Admission",
    to: "/admission",
    children: [
      { label: "How to Apply", to: "/admission", hash: "how-to-apply" },
      { label: "New Registration", to: "/admission", hash: "new-registration" },
      { label: "Applicant Login", to: "/admission", hash: "applicant-login" },
      { label: "Notification", to: "/admission", hash: "notification" },
    ],
  },
  {
    label: "Students Corner",
    to: "/students-corner",
    children: [
      { label: "LMS Login", to: "/students-corner", hash: "lms-login" },
      { label: "Student Affairs", to: "/students-corner", hash: "student-affairs" },
    ],
  },
  {
    label: "UGC Corner",
    to: "/ugc-corner",
    children: [
      { label: "AICTE Approval", to: "/ugc-corner", hash: "aicte-approval" },
      { label: "Degree Equivalence", to: "/ugc-corner", hash: "degree-equivalence" },
      { label: "UGC Notification", to: "/ugc-corner", hash: "ugc-notification" },
      { label: "Compliance", to: "/ugc-corner", hash: "compliance" },
      { label: "UGC Applications", to: "/ugc-corner", hash: "ugc-applications" },
      { label: "CIQA Annual Reports", to: "/ugc-corner", hash: "ciqa-annual-reports" },
      { label: "Admission List", to: "/ugc-corner", hash: "admission-list" },
    ],
  },
  {
    label: "Gallery",
    to: "/gallery",
    children: [
      { label: "Distance Education", to: "/gallery", hash: "distance-education" },
      { label: "Campus", to: "/gallery", hash: "campus" },
      { label: "Convocation", to: "/gallery", hash: "convocation" },
      { label: "Job Fair", to: "/gallery", hash: "job-fair" },
      { label: "Events", to: "/gallery", hash: "events" },
      { label: "Faculty", to: "/gallery", hash: "faculty" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

export const degreeProgrammes = [
  {
    group: "Undergraduate",
    items: [
      { name: "BA English", desc: "Literature, language and communication for modern careers.", duration: "3 Years" },
      { name: "BA Islamic Studies", desc: "Classical and contemporary Islamic thought and ethics.", duration: "3 Years" },
      { name: "BA Public Policy", desc: "Governance, economics and policy analysis fundamentals.", duration: "3 Years" },
    ],
  },
  {
    group: "Postgraduate",
    items: [
      { name: "MA Islamic Studies", desc: "Advanced research in Islamic sciences and civilisation.", duration: "2 Years" },
      { name: "MCA", desc: "Software engineering, data and applied computing.", duration: "2 Years" },
      { name: "MBA", desc: "Management, finance, analytics and leadership practice.", duration: "2 Years" },
    ],
  },
];

export const certificationProgrammes = [
  {
    name: "Mobile Application Development",
    desc: "Build production-ready Android and iOS apps with modern cross-platform tooling.",
    duration: "6 Months",
  },
];

export const ugProgrammes = [
  { name: "B.A.", full: "Bachelor of Arts", duration: "3 Years", eligibility: "10+2 in any stream" },
  { name: "B.Com.", full: "Bachelor of Commerce", duration: "3 Years", eligibility: "10+2 in any stream" },
  { name: "BBA", full: "Business Administration", duration: "3 Years", eligibility: "10+2 in any stream" },
  { name: "BCA", full: "Computer Applications", duration: "3 Years", eligibility: "10+2 with Mathematics" },
  { name: "B.Sc.", full: "Bachelor of Science", duration: "3 Years", eligibility: "10+2 in Science stream" },
];

export const pgProgrammes = [
  { name: "M.A.", full: "Master of Arts", duration: "2 Years", eligibility: "Bachelor's degree" },
  { name: "M.Com.", full: "Master of Commerce", duration: "2 Years", eligibility: "B.Com. or equivalent" },
  { name: "MBA", full: "Business Administration", duration: "2 Years", eligibility: "Any Bachelor's degree" },
  { name: "MCA", full: "Computer Applications", duration: "2 Years", eligibility: "BCA / B.Sc. / any degree with Maths" },
  { name: "M.Sc.", full: "Master of Science", duration: "2 Years", eligibility: "B.Sc. in relevant discipline" },
];

export const admissionSteps = [
  { step: "1", title: "Apply Online", body: "Complete the online application form in under ten minutes." },
  { step: "2", title: "Upload Documents", body: "Attach marksheets, ID proof and a passport photograph." },
  { step: "3", title: "Verification", body: "Our admission cell verifies eligibility within 48 hours." },
  { step: "4", title: "Fee Payment", body: "Pay securely online in full or through easy instalments." },
  { step: "5", title: "Admission Confirmation", body: "Receive your enrolment number and confirmation letter." },
  { step: "6", title: "Begin Learning", body: "Access the LMS, study material and live mentor sessions." },
];
