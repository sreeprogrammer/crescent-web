import { InfoBlocks, type InfoBlock } from "@/components/site/InfoBlocks";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, MonitorPlay } from "lucide-react";

const title = "Students Corner — LMS Login & Student Affairs";
const description =
  "Access the learning management system, study material, examination updates and student affairs support for distance learners.";

export const Route = createFileRoute("/students-corner")({
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
  component: StudentsCornerPage,
});

const blocks: InfoBlock[] = [
  {
    id: "lms-login",
    title: "LMS Login",
    body: "Your learning portal holds every lecture, assignment and assessment for the semester.",
    icon: MonitorPlay,
    items: [
      "Recorded lectures and live weekend classes",
      "Downloadable study material and e-books",
      "Assignment submission and internal marks",
      "Hall tickets, exam schedule and results",
    ],
    action: { label: "Open LMS login", href: "#enquiry" },
  },
  {
    id: "student-affairs",
    title: "Student Affairs",
    body: "Mentors, grievance redressal and career services supporting you through the programme.",
    icon: HeartHandshake,
    items: [
      "Dedicated academic mentor for each learner",
      "Grievance redressal cell with 72-hour response",
      "Scholarship and fee instalment assistance",
      "Placement drives and career counselling",
    ],
  },
];

function StudentsCornerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Students corner"
        title="Everything you need while you study"
        description="One place for your learning portal, academic support and student services."
      />
      <InfoBlocks blocks={blocks} />
    </SiteLayout>
  );
}
