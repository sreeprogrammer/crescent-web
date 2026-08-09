import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, college } from "@/data/site";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/crescent-logo.png.asset.json";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${college.name} home`}>
      <img
        src={logo.url}
        alt="B.S. Abdur Rahman Crescent Institute of Science & Technology"
        className="h-11 w-auto sm:h-12"
      />
      <span className="hidden border-l border-border pl-3 leading-tight sm:block">
        <span className="block text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
          Distance Education
        </span>
      </span>
    </Link>
  );
}

export function MainNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "supports-[backdrop-filter]:bg-card/60 border-b bg-card/85 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        "relative bg-gradient-to-b from-white/70 to-white/20",
        scrolled ? "border-border/70 shadow-float" : "border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                to={item.to}
                className="flex items-center gap-1 rounded-full px-3.5 py-2.5 text-[0.82rem] font-medium text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-card hover:text-foreground hover:shadow-soft focus-visible:bg-card focus-visible:text-foreground focus-visible:shadow-soft"
                activeProps={{ className: "bg-card text-foreground shadow-soft" }}
                activeOptions={{ exact: item.to === "/" }}
                onFocus={() => setOpenMenu(item.label)}
              >
                {item.label}
                {item.children ? <ChevronDown className="size-3.5" aria-hidden /> : null}
              </Link>

              <AnimatePresence>
                {item.children && openMenu === item.label ? (
                  <motion.ul
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-full z-50 mt-2 w-60 rounded-2xl border border-border/70 bg-card p-2 text-foreground shadow-float"
                  >
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          to={child.to}
                          hash={child.hash}
                          className="block rounded-xl px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:bg-muted focus-visible:text-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-2xl border border-border px-3 py-1.5 md:flex">
            <ShieldCheck className="size-5 text-primary" aria-hidden />
            <span className="leading-tight">
              <span className="font-display block text-sm font-semibold">CDOE</span>
              <span className="block text-[0.6rem] tracking-[0.14em] text-muted-foreground uppercase">
                UGC Approved
              </span>
            </span>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-2xl xl:hidden">
                <Menu className="size-5" aria-hidden />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto bg-card">
              <SheetTitle className="font-display text-lg">{college.name}</SheetTitle>
              <Accordion type="single" collapsible className="mt-6 w-full">
                {navItems.map((item) =>
                  item.children ? (
                    <AccordionItem key={item.label} value={item.label}>
                      <AccordionTrigger className="text-base font-medium">
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="space-y-1">
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block rounded-xl px-3 py-2 text-sm text-primary"
                        >
                          Overview
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            hash={child.hash}
                            onClick={() => setOpen(false)}
                            className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div key={item.label} className="border-b">
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block py-4 text-base font-medium"
                      >
                        {item.label}
                      </Link>
                    </div>
                  ),
                )}
              </Accordion>
              <Button variant="hero" size="pill-lg" className="mt-8 w-full" asChild>
                <Link to="/admission" hash="how-to-apply" onClick={() => setOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
