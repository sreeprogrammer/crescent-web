import { FaqSection } from "@/components/site/FaqSection";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";

const title = "FAQ — Distance Education Admissions & Learning";
const description =
  "Answers about degree validity, admission documents, fee instalments, LMS classes, examinations and placement support.";

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="The questions our counsellors hear most often, answered in plain language."
      />
      <FaqSection />
    </SiteLayout>
  );
}
