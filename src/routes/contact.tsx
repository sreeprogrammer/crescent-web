import { SiteLayout } from "@/components/site/SiteLayout";
import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

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

/* =========================================================
   FONT
   Same font style used in Admission page
========================================================= */

const circularFont = {
  fontFamily:
    "'Circular Std', 'Circular', 'Poppins', 'Inter', Arial, sans-serif",
};

function ContactPage() {
  return (
    <SiteLayout>
      {/* ================= CONTACT HEADER ================= */}

      <section
        className="bg-[#f7f4ee] px-5 pb-4 pt-5 sm:px-8 lg:px-12"
        style={circularFont}
      >
        <div className="mx-auto max-w-7xl">
          <div className="border-b border-[#d9d4ca] pb-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#8f1d1d]">
              Contact Us
            </p>

            <div className="mt-1.5 flex items-center gap-3">
              <h1 className="text-[25px] font-bold tracking-[-0.02em] text-black sm:text-[29px]">
                We&apos;re here to help.
              </h1>

              {/* Small accent instead of large golden line */}
              <span className="mt-1 h-[3px] w-10 rounded-full bg-[#8f1d1d]" />
            </div>

            <p className="mt-2.5 max-w-4xl text-[12px] font-medium leading-5 text-black/65 sm:text-[13px]">
              Have a question about admissions, programmes or the university?
              Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}

      <section
        className="bg-[#f6f3ec] px-5 py-5 sm:px-8 lg:px-10"
        style={circularFont}
      >
        <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            icon={<Phone className="size-5" />}
            title="Call Us"
            text="+91 90000 11111"
            href="tel:+919000011111"
          />

          <ContactCard
            icon={<MessageCircle className="size-5" />}
            title="WhatsApp"
            text="Chat with our team"
            href="https://wa.me/919000000000"
          />

          <ContactCard
            icon={<Mail className="size-5" />}
            title="Email"
            text="admissions@crescentcdoe.edu.in"
            href="mailto:admissions@crescentcdoe.edu.in"
          />

          <ContactCard
            icon={<MapPin className="size-5" />}
            title="Campus"
            text="Vandalur, Chennai"
            href="https://www.google.com/maps/search/?api=1&query=Vandalur+Chennai"
          />
        </div>
      </section>

      {/* ================= SIMPLE SUPPORT SECTION ================= */}

      <section
        className="bg-white px-5 py-5 sm:px-8 lg:px-10"
        style={circularFont}
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-[#172554]/10 bg-[#f8f9fc] px-6 py-6 text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8f1d1d]">
              Admission Support
            </p>

            <h2 className="mt-1.5 text-2xl font-black text-black">
              Need admission assistance?
            </h2>

            <div className="mx-auto mt-2 h-[2px] w-10 rounded-full bg-[#8f1d1d]" />

            <p className="mx-auto mt-2 max-w-xl text-sm leading-5 text-black/60">
              Our admission team can help you with programme selection,
              eligibility, application process and other admission-related
              queries.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+919000011111"
                className="inline-flex items-center gap-2 rounded-full bg-[#172554] px-5 py-2.5 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#8f1d1d]"
              >
                <Phone className="size-4" />
                Call Admission
              </a>

              <a
                href="mailto:admissions@crescentcdoe.edu.in"
                className="inline-flex items-center gap-2 rounded-full border border-[#172554]/15 bg-white px-5 py-2.5 text-xs font-bold text-black transition-all hover:-translate-y-0.5 hover:border-[#d4af37]"
              >
                <Mail className="size-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ================= CONTACT CARD ================= */

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
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className="group flex min-h-[92px] items-center gap-4 rounded-2xl border border-[#172554]/10 bg-white px-4 py-3.5 shadow-[0_5px_20px_rgba(23,37,84,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#d4af37]/50"
      style={circularFont}
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#172554] text-[#d4af37] transition-colors group-hover:bg-[#8f1d1d] group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#8f1d1d]">
          {title}
        </p>

        <p className="mt-1 truncate text-xs font-semibold text-black">
          {text}
        </p>
      </div>
    </a>
  );
}