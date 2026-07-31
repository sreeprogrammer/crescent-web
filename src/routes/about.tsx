import { InfoBlocks, type InfoBlock } from "@/components/site/InfoBlocks";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Building2, Compass, Users, Wrench } from "lucide-react";

const title = "About Us — Leadership, CDOE Team & Facilities";
const description =
  "Meet the visionary team, execution team and CDOE team behind our distance education centre, and explore the facilities supporting every learner.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

const blocks: InfoBlock[] = [
  {
    id: "visionary-team",
    title: "Visionary Team",
    body: "The Chancellor, Pro-Chancellor and Board of Management set the long-term academic vision for open and distance learning.",
    icon: Compass,
    items: ["Chancellor", "Pro-Chancellor", "Vice-Chancellor", "Board of Management"],
  },
  {
    id: "execution-team",
    title: "Execution Team",
    body: "Registrars, deans and controllers of examination translate policy into day-to-day academic delivery.",
    icon: Users,
    items: ["Registrar", "Deans of Faculty", "Controller of Examinations", "Finance Officer"],
  },
  {
    id: "cdoe-team",
    title: "CDOE Team",
    body: "The Centre for Distance and Online Education runs admissions, learner support, content production and assessments.",
    icon: Building2,
    items: ["Director, CDOE", "Programme Coordinators", "Admission Cell", "Student Support Desk"],
  },
  {
    id: "facilities",
    title: "Facilities",
    body: "Digital-first infrastructure backed by physical resources available to every enrolled learner.",
    icon: Wrench,
    items: [
      "Learning Management System with recorded and live classes",
      "Digital library and e-journal access",
      "Regional learner support centres",
      "Examination centres across India",
    ],
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="A distance education centre built on academic rigour"
        description="Our centre brings the university's classroom standards to learners wherever they are, supported by experienced leadership and modern infrastructure."
      />
      <InfoBlocks blocks={blocks} />
    </SiteLayout>
  );
}
