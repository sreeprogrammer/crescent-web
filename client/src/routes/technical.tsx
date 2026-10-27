import { CdoeStaffDirectory } from "@/components/site/CdoeStaffDirectory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/technical")({
  component: TechnicalPage,
});

function TechnicalPage() {
  return <CdoeStaffDirectory initialTab="technical" backTo="/about" backLabel="Back to About Us" />;
}
