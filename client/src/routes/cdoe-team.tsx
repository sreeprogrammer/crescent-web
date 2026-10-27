import { CdoeStaffDirectory } from "@/components/site/CdoeStaffDirectory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cdoe-team")({
  component: CdoeTeamPage,
});

function CdoeTeamPage() {
  return <CdoeStaffDirectory initialTab="faculty" backTo="/" backLabel="Back to Home" />;
}
