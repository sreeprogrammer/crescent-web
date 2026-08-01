import { GalleryGrid } from "@/components/site/GalleryGrid";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";

const title = "Gallery — Campus, Convocation, Job Fair & Events";
const description =
  "Browse photographs from distance education classes, campus life, convocation ceremonies, job fairs, academic events and our faculty.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our community"
        description="A look inside distance education classes, campus life, convocations, job fairs, events and faculty."
      />
      <GalleryGrid />
    </SiteLayout>
  );
}