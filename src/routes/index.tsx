import { createFileRoute } from "@tanstack/react-router";

import { Admissions } from "@/components/site/Admissions";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { CallToAction } from "@/components/site/CallToAction";
import { CampusLife } from "@/components/site/CampusLife";
import { FAQ } from "@/components/site/FAQ";
import { Faculty } from "@/components/site/Faculty";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import { News } from "@/components/site/News";
import { Placements } from "@/components/site/Placements";
import { Programmes } from "@/components/site/Programmes";
import { Research } from "@/components/site/Research";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChoose } from "@/components/site/WhyChoose";

const title = "Northvale University — Research, Teaching & Admissions";
const description =
  "Northvale University: 240+ degrees across nine faculties, need-blind admission, £412m research funding and a 97% graduate outcome rate.";

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
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programmes />
        <WhyChoose />
        <CampusLife />
        <Faculty />
        <Research />
        <Placements />
        <Testimonials />
        <News />
        <Admissions />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
