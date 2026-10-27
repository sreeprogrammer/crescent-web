import { CdoeStaffDirectory } from "@/components/site/CdoeStaffDirectory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faculty")({
  component: FacultyPage,
});

function FacultyPage() {
  return <CdoeStaffDirectory initialTab="faculty" backTo="/about" backLabel="Back to About Us" />;
}
