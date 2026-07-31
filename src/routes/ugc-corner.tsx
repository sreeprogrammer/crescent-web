import { InfoBlocks, type InfoBlock } from "@/components/site/InfoBlocks";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, ClipboardList, FileCheck2, FileText, ListChecks, ScrollText, ShieldCheck } from "lucide-react";

const title = "UGC Corner — Approvals, Compliance & Annual Reports";
const description =
  "AICTE approval, degree equivalence, UGC notifications, compliance documents, UGC applications, CIQA annual reports and admission lists.";

export const Route = createFileRoute("/ugc-corner")({
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
  component: UgcCornerPage,
});

const blocks: InfoBlock[] = [
  {
    id: "aicte-approval",
    title: "AICTE Approval",
    body: "Approval letters for technical programmes offered through the centre, published for the current academic year.",
    icon: BadgeCheck,
  },
  {
    id: "degree-equivalence",
    title: "Degree Equivalence",
    body: "UGC notification confirming that degrees awarded through open and distance learning are equivalent to conventional degrees.",
    icon: ScrollText,
  },
  {
    id: "ugc-notification",
    title: "UGC Notification",
    body: "Latest circulars and regulations issued by the University Grants Commission for distance and online education.",
    icon: FileText,
  },
  {
    id: "compliance",
    title: "Compliance",
    body: "Statutory disclosures covering programme-wise intake, faculty details, fee structure and learner support centres.",
    icon: ShieldCheck,
  },
  {
    id: "ugc-applications",
    title: "UGC Applications",
    body: "Applications submitted to UGC-DEB for recognition and continuation of programmes, with acknowledgement copies.",
    icon: FileCheck2,
  },
  {
    id: "ciqa-annual-reports",
    title: "CIQA Annual Reports",
    body: "Centre for Internal Quality Assurance annual reports documenting quality audits and improvement actions.",
    icon: ClipboardList,
  },
  {
    id: "admission-list",
    title: "Admission List",
    body: "Programme-wise list of admitted learners published each session as required by UGC-DEB regulations.",
    icon: ListChecks,
  },
];

function UgcCornerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="UGC corner"
        title="Approvals, compliance and public disclosures"
        description="Every statutory document required under UGC-DEB regulations, published transparently."
      />
      <InfoBlocks blocks={blocks} />
    </SiteLayout>
  );
}
