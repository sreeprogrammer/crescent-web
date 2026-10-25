import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CourseInfoLink, type CourseSection } from "@/components/site/CourseInfoLink";
import { EnquiryFormDialog } from "@/components/site/EnquiryFormDialog";
import { SiteLayout } from "@/components/site/SiteLayout";
import { circularFont } from "@/lib/fonts";

type Destination =
  | { type: "courseInfo"; courseSlug: string; section: CourseSection }
  | { type: "route"; to: string }
  | { type: "anchor"; href: string }
  | { type: "external"; href: string };

export interface ProgrammeNavigationItem {
  destination: Exclude<Destination, { type: "external" }>;
  icon: ReactNode;
  title: string;
  description: string;
  iconClassName: string;
}

export interface ProgrammeActionItem {
  destination: Destination | { type: "dialog" };
  icon: ReactNode;
  title: string;
  iconClassName?: string;
  iconBackgroundColor?: string;
  iconColor?: string;
  trailingIcon?: ReactNode;
}

type ProgrammeVariant = "mba" | "mca" | "ba-islamic-studies" | "generic";

export interface ProgrammePageTemplateProps {
  variant: ProgrammeVariant;
  mainClassName: string;
  hero: {
    backIcon: ReactNode;
    badgeIcon: ReactNode;
    badge: string;
    title: string;
    description: string;
    applyIcon: ReactNode;
    applyTo: string;
    applyHash?: string;
  };
  navigation: ProgrammeNavigationItem[];
  actions: ProgrammeActionItem[];
  cta: {
    label: string;
    title: string;
    to: string;
    linkText: string;
    icon: ReactNode;
  };
  brochureDialog?: {
    title: string;
    description: string;
    idPrefix: string;
    downloadHref: string;
    downloadLabel: string;
  };
  children: ReactNode;
}

function DestinationLink({
  destination,
  className,
  children,
}: {
  destination: Destination;
  className: string;
  children: ReactNode;
}) {
  switch (destination.type) {
    case "courseInfo":
      return (
        <CourseInfoLink
          courseSlug={destination.courseSlug}
          section={destination.section}
          className={className}
        >
          {children}
        </CourseInfoLink>
      );
    case "route":
      return (
        <Link to={destination.to} className={className}>
          {children}
        </Link>
      );
    case "anchor":
      return (
        <a href={destination.href} className={className}>
          {children}
        </a>
      );
    case "external":
      return (
        <a href={destination.href} target="_blank" rel="noopener noreferrer" className={className}>
          {children}
        </a>
      );
  }
}

function getNavigationStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies" || variant === "generic") {
    return {
      section: "mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8",
      container: "",
      grid: "grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.05)] sm:grid-cols-2 lg:grid-cols-4",
      card: "group relative z-10 border-b border-slate-100 px-5 py-4 transition-all duration-300 hover:bg-slate-50 sm:border-r lg:border-b-0",
      icon: "flex size-10 shrink-0 items-center justify-center rounded-lg",
      title: "text-sm font-bold text-[#111111]",
      description: "mt-0.5 text-xs text-slate-500",
      arrow:
        "ml-auto size-4 shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
      arrowSize: 16,
      underline:
        "pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
    };
  }

  const compact = variant === "mca";
  return {
    section: compact
      ? "mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8"
      : "mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8",
    container:
      "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)]",
    grid: "grid sm:grid-cols-2 lg:grid-cols-4",
    card: compact
      ? "group relative z-10 border-b border-slate-100 px-4 py-4 transition-all duration-300 sm:border-r lg:border-b-0"
      : "group relative z-10 border-b border-slate-100 px-4 py-5 transition-all duration-300 hover:bg-slate-50 sm:border-r sm:px-5 lg:border-b-0",
    icon: compact
      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11",
    title: compact
      ? "text-base font-bold text-[#111111]"
      : "text-base font-bold leading-6 text-[#111111] sm:text-lg",
    description: compact
      ? "mt-1 text-sm text-slate-500"
      : "mt-1 text-sm leading-6 text-slate-500 sm:text-base",
    arrow: compact
      ? "ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
      : "ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
    arrowSize: compact ? 15 : 18,
    underline:
      "pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-9",
  };
}

function NavigationCard({
  item,
  styles,
}: {
  item: ProgrammeNavigationItem;
  styles: ReturnType<typeof getNavigationStyles>;
}) {
  return (
    <DestinationLink destination={item.destination} className={styles.card}>
      <div className="flex items-center gap-3">
        <div className={`${styles.icon} ${item.iconClassName}`}>{item.icon}</div>
        <div className="min-w-0">
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
        <ArrowRight size={styles.arrowSize} className={styles.arrow} />
      </div>
      <span className={styles.underline} />
    </DestinationLink>
  );
}

function getActionStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies" || variant === "generic") {
    return {
      section: "mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8",
      grid: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
      card: "group relative z-10 flex w-full items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
      icon: "flex size-9 shrink-0 items-center justify-center rounded-lg",
      title: "text-sm font-semibold text-[#111111]",
      trailing:
        "ml-auto size-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
      arrowSize: 16,
      underline:
        "pointer-events-none absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
    };
  }

  const compact = variant === "mca";
  return {
    section: compact
      ? "mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8"
      : "mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8",
    grid: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
    card: compact
      ? "group relative flex items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-3.5 py-3.5 text-left shadow-sm"
      : "group relative flex min-h-[60px] items-center gap-3 overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition-all duration-300 hover:shadow-md",
    icon: compact
      ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
      : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
    title: compact
      ? "text-base font-semibold text-[#111111]"
      : "text-base font-semibold leading-6 text-[#111111] sm:text-lg",
    trailing: compact
      ? "ml-auto text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5"
      : "ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-1",
    arrowSize: compact ? 15 : 18,
    underline:
      "pointer-events-none absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
  };
}

function ActionCard({
  item,
  styles,
  onOpenDialog,
}: {
  item: ProgrammeActionItem;
  styles: ReturnType<typeof getActionStyles>;
  onOpenDialog: () => void;
}) {
  const content = (
    <>
      <span
        className={item.iconClassName ? `${styles.icon} ${item.iconClassName}` : styles.icon}
        style={
          item.iconBackgroundColor || item.iconColor
            ? {
                backgroundColor: item.iconBackgroundColor,
                color: item.iconColor,
              }
            : undefined
        }
      >
        {item.icon}
      </span>
      <span className={styles.title}>{item.title}</span>
      {item.trailingIcon ?? <ArrowRight size={styles.arrowSize} className={styles.trailing} />}
      <span className={styles.underline} />
    </>
  );

  if (item.destination.type === "dialog") {
    return (
      <button type="button" onClick={onOpenDialog} className={styles.card}>
        {content}
      </button>
    );
  }

  return (
    <DestinationLink destination={item.destination} className={styles.card}>
      {content}
    </DestinationLink>
  );
}

function getHeroStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies" || variant === "generic") {
    return {
      section: "relative overflow-hidden bg-[#0d5c45]",
      gradient: "absolute inset-0 bg-gradient-to-br from-[#0d5c45] via-[#0b6048] to-[#084735]",
      rightGlow: "absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/10 blur-3xl",
      leftGlow: "absolute -bottom-20 left-20 h-48 w-48 rounded-full bg-[#8f1d1d]/10 blur-3xl",
      container: "relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10",
      back: "group relative mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-all duration-300 hover:text-white",
      badge:
        "mb-3 inline-flex items-center gap-2 rounded-full bg-[#d4af37]/10 px-3 py-1.5 text-xs font-semibold text-[#f4d979]",
      title: "text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl",
      divider: "mt-3 h-1 w-12 rounded-full bg-[#d4af37]",
      description: "mt-4 max-w-3xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7",
      applyWrapper: "mt-5",
      apply:
        "group relative z-10 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
    };
  }

  const compact = variant === "mca";
  return {
    section: "relative overflow-hidden bg-[#6b4c9a]",
    gradient: "absolute inset-0 bg-gradient-to-br from-[#6b4c9a] via-[#64438f] to-[#533579]",
    rightGlow: "absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#d4af37]/10 blur-2xl",
    leftGlow: "absolute -bottom-16 left-24 h-32 w-32 rounded-full bg-[#0d5c45]/15 blur-2xl",
    container: compact
      ? "relative mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8 lg:py-5"
      : "relative mx-auto max-w-7xl px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8",
    back: compact
      ? "group relative mb-2 inline-flex items-center gap-2 text-sm font-medium text-white/80"
      : "group relative mb-4 inline-flex items-center gap-2 text-base font-medium text-white/85 transition-colors hover:text-white sm:text-lg",
    badge: compact
      ? "mb-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-[#f3d15b]"
      : "mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#f3d15b] sm:text-base",
    title: compact
      ? "text-3xl font-bold tracking-tight text-white sm:text-5xl"
      : "text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
    divider: compact
      ? "mt-2 h-[3px] w-10 rounded-full bg-[#d4af37]"
      : "mt-3 h-[3px] w-12 rounded-full bg-[#d4af37]",
    description: compact
      ? "mt-2 max-w-3xl text-base leading-7 text-white/80"
      : "mt-4 max-w-3xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8",
    applyWrapper: compact ? "mt-3" : "mt-5",
    apply: compact
      ? "group relative inline-flex w-fit items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2 text-sm font-bold text-[#111111]"
      : "group relative inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 text-base font-bold text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
  };
}

function getCtaStyles(variant: ProgrammeVariant) {
  if (variant === "ba-islamic-studies") {
    return {
      section: "border-t border-slate-200 bg-white",
      container: "mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8",
      content: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
      label: "text-sm font-medium text-slate-500",
      title: "mt-1 text-xl font-bold text-[#111111] sm:text-2xl",
      link: "group relative z-10 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
      underline:
        "pointer-events-none absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-10",
    };
  }

  if (variant === "mca") {
    return {
      section: "border-t border-slate-200 bg-white",
      container: "mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8",
      content: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
      label: "text-sm font-medium text-slate-500",
      title: "mt-1 text-2xl font-bold text-[#111111]",
      link: "group relative inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-5 py-2.5 text-sm font-semibold text-white",
      underline:
        "pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8",
    };
  }

  return {
    section: "border-t border-slate-200 bg-white",
    container: "mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8",
    content: "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between",
    label: "text-base font-medium text-slate-500 sm:text-lg",
    title: "mt-2 text-2xl font-bold leading-tight text-[#111111] sm:text-3xl",
    link: "group relative inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#8f1d1d] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:text-lg",
    underline:
      "pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8",
  };
}

export function ProgrammePageTemplate({
  variant,
  mainClassName,
  hero,
  navigation,
  actions,
  cta,
  brochureDialog,
  children,
}: ProgrammePageTemplateProps) {
  const [showBrochureForm, setShowBrochureForm] = useState(false);
  const heroStyles = getHeroStyles(variant);
  const navigationStyles = getNavigationStyles(variant);
  const actionStyles = getActionStyles(variant);
  const ctaStyles = getCtaStyles(variant);

  return (
    <SiteLayout>
      <main className={mainClassName} style={circularFont}>
        <section className={heroStyles.section}>
          <div className={heroStyles.gradient} />
          <div className={heroStyles.rightGlow} />
          <div className={heroStyles.leftGlow} />
          <div className={heroStyles.container}>
            <Link to="/programmes" className={heroStyles.back}>
              {hero.backIcon}
              Back to Programmesqq
              <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </Link>
            <div className="max-w-4xl">
              <div className={heroStyles.badge}>
                {hero.badgeIcon}
                {hero.badge}
              </div>
              <h1 className={heroStyles.title}>{hero.title}</h1>
              <div className={heroStyles.divider} />
              <p className={heroStyles.description}>{hero.description}</p>
              <div className={heroStyles.applyWrapper}>
                <Link to={hero.applyTo} hash={hero.applyHash} className={heroStyles.apply}>
                  Apply Now
                  {hero.applyIcon}
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#d4af37] transition-all duration-300 group-hover:w-8" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={navigationStyles.section}>
          <div className={navigationStyles.container}>
            <div className={navigationStyles.grid}>
              {navigation.map((item) => (
                <NavigationCard key={item.title} item={item} styles={navigationStyles} />
              ))}
            </div>
          </div>
        </section>

        <section className={actionStyles.section}>
          <div className={actionStyles.grid}>
            {actions.map((item) => (
              <ActionCard
                key={item.title}
                item={item}
                styles={actionStyles}
                onOpenDialog={() => setShowBrochureForm(true)}
              />
            ))}
          </div>
        </section>

        {children}

        <section className={ctaStyles.section}>
          <div className={ctaStyles.container}>
            <div className={ctaStyles.content}>
              <p className={ctaStyles.label}>{cta.label}</p>
              <h2 className={ctaStyles.title}>{cta.title}</h2>
            </div>
            <Link to={cta.to} className={ctaStyles.link}>
              {cta.linkText}
              {cta.icon}
              <span className={ctaStyles.underline} />
            </Link>
          </div>
        </section>

        {brochureDialog && (
          <EnquiryFormDialog
            open={showBrochureForm}
            onOpenChange={setShowBrochureForm}
            title={brochureDialog.title}
            description={brochureDialog.description}
            idPrefix={brochureDialog.idPrefix}
            downloadHref={brochureDialog.downloadHref}
            downloadLabel={brochureDialog.downloadLabel}
          />
        )}
      </main>
    </SiteLayout>
  );
}
