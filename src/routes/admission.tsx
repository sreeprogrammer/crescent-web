import { AdmissionTimeline } from "@/components/site/AdmissionTimeline";
import { InfoBlocks, type InfoBlock } from "@/components/site/InfoBlocks";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Bell, FileSignature, LogIn, UserPlus } from "lucide-react";

const title = "Admission 2026–2027 — Apply Online for UG & PG Programmes";
const description =
  "How to apply, new registration, applicant login and the latest admission notifications for our UGC approved distance education programmes.";

export const Route = createFileRoute("/admission")({
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
  component: AdmissionPage,
});

const blocks: InfoBlock[] = [
  {
    id: "new-registration",
    title: "New Registration",
    body: "Create an applicant account with your email and mobile number to start a fresh application.",
    icon: UserPlus,
    items: ["Verify mobile via OTP", "Choose your programme", "Save and resume anytime"],
    action: { label: "Start new registration", href: "#enquiry" },
  },
  {
    id: "applicant-login",
    title: "Applicant Login",
    body: "Already registered? Sign in to continue your application, upload documents or pay your fee.",
    icon: LogIn,
    items: ["Track application status", "Upload pending documents", "Download offer letter"],
    action: { label: "Go to applicant login", href: "#enquiry" },
  },
  {
    id: "notification",
    title: "Notification",
    body: "Important admission announcements for the 2026–2027 academic session.",
    icon: Bell,
    items: [
      "Applications open — 1 January 2026",
      "Last date for UG & PG applications — 31 July 2026",
      "Document verification window — within 48 hours of submission",
      "Session commences — 1 September 2026",
    ],
  },
  {
    id: "documents",
    title: "Documents Required",
    body: "Keep scanned copies ready before you begin the online application.",
    icon: FileSignature,
    items: [
      "10th and 12th marksheets",
      "Degree marksheet and provisional certificate (PG applicants)",
      "Government photo ID proof",
      "Passport-size photograph and signature",
    ],
  },
];

function AdmissionPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Admission"
        title="Admissions open for 2026–2027"
        description="A fully online admission journey — apply, verify, pay and enrol without visiting the campus."
      />
      <AdmissionTimeline />
      <InfoBlocks blocks={blocks} />
    </SiteLayout>
  );
}
