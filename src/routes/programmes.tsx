import { ProgrammeCards } from "@/components/site/ProgrammeCards";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";

const title = "Programmes Offered — UG & PG Distance Education Courses";
const description =
  "Explore UG programmes (B.A., B.Com., BBA, BCA, B.Sc.) and PG programmes (M.A., M.Com., MBA, MCA, M.Sc.) with duration, eligibility and online application.";

export const Route = createFileRoute("/programmes")({
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
  component: ProgrammesPage,
});

function ProgrammesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Programmes offered"
        title="Undergraduate and postgraduate programmes"
        description="Ten UGC approved programmes across arts, commerce, management, computer applications and science."
      />
      <ProgrammeCards withHeading={false} />
    </SiteLayout>
  );
}
