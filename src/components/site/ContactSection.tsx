import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { college } from "@/data/site";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./Section";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Talk to an admission counsellor"
        description="Call, message or write to us — we respond on the same working day."
      />
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        <Reveal className="space-y-6">
          <div className="rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                <span>{college.address}</span>
              </li>
              {college.numbers.map((n) => (
                <li key={n.label} className="flex items-center gap-3">
                  <Phone className="size-5 text-primary" aria-hidden />
                  <a href={`tel:${n.tel}`} className="transition-colors hover:text-primary">
                    {n.label}: {n.value}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-primary" aria-hidden />
                <a href={`mailto:${college.email}`} className="transition-colors hover:text-primary">
                  {college.email}
                </a>
              </li>
            </ul>
            <Button variant="hero" size="pill-lg" className="mt-7 w-full sm:w-auto" asChild>
              <a href={`https://wa.me/${college.whatsapp}`} target="_blank" rel="noreferrer noopener">
                <MessageCircle className="size-4" aria-hidden />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Clock className="size-5 text-primary" aria-hidden />
              Office Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {college.officeHours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="font-medium text-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-border/70 shadow-soft">
            <iframe
              title="Campus location on Google Maps"
              src={college.mapEmbed}
              loading="lazy"
              className="h-64 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            id="enquiry"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="scroll-mt-40 rounded-[1.75rem] border border-border/70 bg-card p-7 shadow-soft"
          >
            <h3 className="text-lg font-semibold">Send an enquiry</h3>
            <div className="mt-6 grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="programme">Programme of interest</Label>
                <Input id="programme" name="programme" placeholder="e.g. MBA" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
              <Button type="submit" variant="hero" size="pill-lg" className="w-full">
                Submit enquiry
              </Button>
              <p aria-live="polite" className="text-sm text-muted-foreground">
                {sent ? "Thank you — our counsellor will contact you shortly." : ""}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
