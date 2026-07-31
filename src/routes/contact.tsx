import { ContactSection } from "@/components/site/ContactSection";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";

const title = "Contact — Admission Numbers, Email & Campus Location";
const description =
  "Contact the admission office for MBA, MCA and Islamic Studies programmes — phone numbers, email, WhatsApp counselling, office hours and campus map.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="We are here to help you enrol"
        description="Reach the admission cell by phone, email or WhatsApp, or send us an enquiry and we will call you back."
      />
      <ContactSection />
    </SiteLayout>
  );
}
