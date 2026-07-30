import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { GraduationCap, Menu } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Programmes", href: "#programmes" },
  { label: "Campus Life", href: "#campus" },
  { label: "Faculty", href: "#faculty" },
  { label: "Research", href: "#research" },
  { label: "Placements", href: "#placements" },
  { label: "News", href: "#news" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-3xl px-4 py-3 transition-all duration-500 sm:px-6",
          scrolled ? "glass-panel" : "border border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-3">
          <span className="bg-gradient-primary flex size-10 items-center justify-center rounded-2xl shadow-glow">
            <GraduationCap className="size-5 text-primary-foreground" />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-base font-semibold">Northvale</span>
            <span className="block text-[0.65rem] tracking-[0.22em] text-muted-foreground uppercase">
              University
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="pill" className="hidden rounded-full sm:inline-flex" asChild>
            <a href="#faq">Visit</a>
          </Button>
          <Button variant="hero" size="pill" asChild>
            <a href="#admissions">Apply</a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="glass" size="icon" className="rounded-2xl lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm border-l-border bg-card">
              <SheetTitle className="font-display text-lg">Northvale University</SheetTitle>
              <ul className="mt-8 space-y-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="pill-lg" className="mt-8 w-full" asChild>
                <a href="#admissions" onClick={() => setOpen(false)}>
                  Start your application
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}