import { circularFont } from "@/lib/fonts";
import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const title = "Contact Us — Crescent CDOE";

const description =
  "Contact Crescent CDOE for admission support, programmes and general enquiries.";

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
      {/* CONTACT HEADER */}
      <section
        className="bg-[#f7f4ee] px-5 pb-5 pt-6 sm:px-8 lg:px-12"
        style={circularFont}
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#d9d4ca] pb-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8f1d1d]">
              Contact Us
            </p>

            <div className="mt-2 flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-[-0.02em] text-black sm:text-4xl">
                We&apos;re here to help.
              </h1>

              <span className="mt-1 h-[3px] w-10 shrink-0 rounded-full bg-[#8f1d1d]" />
            </div>

            <p className="mt-3 max-w-4xl text-base font-medium leading-7 text-black/65 sm:text-lg">
              Have a question about admissions, programmes or the university? Get
              in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section
        className="bg-[#f6f3ec] px-5 py-6 sm:px-8 lg:px-10"
        style={circularFont}
      >
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<Phone className="size-6" />}
            title="MBA"
            text="+91 9790953750"
            href="tel:+919790953750"
          />

          <ContactCard
            icon={<Phone className="size-6" />}
            title="MCA"
            text="+91 9444437309"
            href="tel:+919444437309"
          />

          <ContactCard
            icon={<Phone className="size-6" />}
            title="Islamic Studies"
            text="+91 8667530226"
            href="tel:+918667530226"
          />

          <ContactCard
            icon={<Mail className="size-6" />}
            title="Email"
            text="admissions@crescentcdoe.edu.in"
            href="mailto:admissions@crescentcdoe.edu.in"
          />
        </div>
      </section>

      {/* ADMISSION SUPPORT */}
      <section
        className="bg-white px-5 py-6 sm:px-8 lg:px-10"
        style={circularFont}
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#172554]/10 bg-[#f8f9fc] px-5 py-8 text-center sm:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f1d1d]">
              Admission Support
            </p>

            <h2 className="mt-2 text-2xl font-black leading-tight text-black sm:text-3xl">
              Need admission assistance?
            </h2>

            <div className="mx-auto mt-3 h-[2px] w-10 rounded-full bg-[#8f1d1d]" />

            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-black/60 sm:text-lg">
              Our admission team can help you with programme selection,
              eligibility, application process and other admission-related
              queries.
            </p>

            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919790953750"
                className="inline-flex items-center gap-2 rounded-full bg-[#172554] px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8f1d1d]"
              >
                <Phone className="size-5" />
                MBA Enquiries
              </a>

              <a
                href="tel:+919444437309"
                className="inline-flex items-center gap-2 rounded-full border border-[#172554]/15 bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:border-[#d4af37]"
              >
                <Phone className="size-5" />
                MCA Enquiries
              </a>

              <a
                href="mailto:admissions@crescentcdoe.edu.in"
                className="inline-flex items-center gap-2 rounded-full border border-[#172554]/15 bg-white px-5 py-3 text-sm font-bold text-black transition-all hover:-translate-y-0.5 hover:border-[#d4af37]"
              >
                <Mail className="size-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* CONTACT CARD */
function ContactCard({
  icon,
  title,
  text,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-[108px] items-center gap-4 rounded-2xl border border-[#172554]/10 bg-white px-4 py-4 shadow-[0_5px_20px_rgba(23,37,84,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d4af37]/50 sm:px-5"
      style={circularFont}
    >
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37] transition-colors group-hover:bg-[#8f1d1d] group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#8f1d1d]">
          {title}
        </p>

        <p className="mt-1 break-words text-sm font-semibold leading-5 text-black sm:text-base">
          {text}
        </p>
      </div>
    </a>
  );
}
