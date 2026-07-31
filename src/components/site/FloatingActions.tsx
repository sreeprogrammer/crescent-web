import { college } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const base =
  "flex size-12 items-center justify-center rounded-full shadow-float transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col items-center gap-3 sm:right-6">
      <a
        href={`https://wa.me/${college.whatsapp}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with us on WhatsApp"
        className={cn(base, "bg-[#25D366] text-white")}
      >
        <MessageCircle className="size-5" aria-hidden />
      </a>
      <a
        href={`tel:${college.numbers[0].tel}`}
        aria-label="Call the admission office"
        className={cn(base, "bg-gradient-primary text-primary-foreground")}
      >
        <Phone className="size-5" aria-hidden />
      </a>
      <a
        href={college.mapLink}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Get directions to campus"
        className={cn(base, "bg-card text-primary border border-border")}
      >
        <MapPin className="size-5" aria-hidden />
      </a>
      <AnimatePresence>
        {showTop ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={cn(base, "bg-navy text-navy-foreground")}
          >
            <ArrowUp className="size-5" aria-hidden />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
