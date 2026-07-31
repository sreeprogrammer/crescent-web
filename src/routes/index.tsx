import { createFileRoute } from "@tanstack/react-router";

import { AdmissionTimeline } from "@/components/site/AdmissionTimeline";
import { ContactSection } from "@/components/site/ContactSection";
import { FaqSection } from "@/components/site/FaqSection";
import { HeroDE } from "@/components/site/HeroDE";
import { ProgrammeCards } from "@/components/site/ProgrammeCards";
import { SiteLayout } from "@/components/site/SiteLayout";
import { TestimonialsSlider } from "@/components/site/TestimonialsSlider";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

const title = "Crescent CDOE — UGC Approved Distance Education (UG & PG)";
const description =
  "Apply online for UGC approved UG and PG distance education programmes — B.A., B.Com., BBA, BCA, B.Sc., M.A., M.Com., MBA, MCA and M.Sc. Flexible learning and free counselling.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <HeroDE />
      <ProgrammeCards />
      <WhyChooseUs />
      <AdmissionTimeline />
      <TestimonialsSlider />
      <FaqSection />
      <ContactSection />
    </SiteLayout>
  );
}
