import type { ReactNode } from "react";
import { FloatingActions } from "./FloatingActions";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-gradient-hero border-b border-border px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-[0.16em] uppercase shadow-soft">
          {eyebrow}
        </span>
        <h1 className="mt-6 text-3xl leading-tight font-semibold text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
