import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Scissors, Sparkles, X } from "lucide-react";

import clapAudio from "@/assets/clap-audio.wav";

const confettiPieces = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 37) % 84)}%`,
  x: (index % 2 === 0 ? 1 : -1) * (45 + ((index * 29) % 180)),
  rotate: ((index * 53) % 540) - 270,
  delay: (index % 7) * 0.035,
  color: ["#7f1d1d", "#d4af37", "#172554", "#f3d9a4"][index % 4],
}));

export function RibbonCuttingCelebration() {
  const [isOpen, setIsOpen] = useState(true);
  const [isCut, setIsCut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [audioUnavailable, setAudioUnavailable] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const messageTimerRef = useRef<number | null>(null);
  const confettiTimerRef = useRef<number | null>(null);
  const cutStartedRef = useRef(false);

  const closeCelebration = useCallback(() => {
    setIsOpen(false);
    audioRef.current?.pause();
    if (audioRef.current) audioRef.current.currentTime = 0;
    if (messageTimerRef.current !== null) {
      window.clearTimeout(messageTimerRef.current);
      messageTimerRef.current = null;
    }
    if (confettiTimerRef.current !== null) {
      window.clearTimeout(confettiTimerRef.current);
      confettiTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const bodyOverflow = document.body.style.overflow;
    const rootOverflow = document.documentElement.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCelebration();
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = rootOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeCelebration, isOpen]);

  useEffect(
    () => () => {
      audioRef.current?.pause();
      audioRef.current = null;
      if (messageTimerRef.current !== null) window.clearTimeout(messageTimerRef.current);
      if (confettiTimerRef.current !== null) window.clearTimeout(confettiTimerRef.current);
    },
    [],
  );

  const cutRibbon = () => {
    if (cutStartedRef.current) return;
    cutStartedRef.current = true;
    setIsCut(true);
    setShowConfetti(true);

    const audio = new Audio(clapAudio);
    audio.volume = 0.8;
    audioRef.current = audio;
    void audio.play().catch(() => setAudioUnavailable(true));

    messageTimerRef.current = window.setTimeout(() => setShowMessage(true), 700);
    confettiTimerRef.current = window.setTimeout(() => setShowConfetti(false), 2200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center overflow-y-auto bg-[#101827]/75 px-4 py-6 backdrop-blur-md sm:px-6">
      <motion.section
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="ribbon-celebration-title"
        className="relative my-auto w-full max-w-2xl overflow-hidden rounded-[28px] border border-[#d4af37]/35 bg-[#fffdf9] shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:rounded-[36px]"
      >
        <button
          type="button"
          onClick={closeCelebration}
          aria-label="Close celebration"
          className="absolute right-4 top-4 z-20 flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-sm transition hover:bg-slate-100 hover:text-[#7f1d1d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] sm:right-5 sm:top-5"
        >
          <X className="size-5" />
        </button>

        <div className="relative px-5 pb-8 pt-12 text-center sm:px-12 sm:pb-11 sm:pt-14">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-[#d4af37]/35 bg-[#d4af37]/10 text-[#7f1d1d] shadow-sm sm:size-16">
            <Sparkles className="size-7 sm:size-8" />
          </div>

          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b6a24] sm:text-xs">
            A new chapter begins
          </p>
          <h1
            id="ribbon-celebration-title"
            className="mt-2 font-display text-2xl font-bold leading-tight text-[#172554] sm:text-4xl"
          >
            A warm welcome to Crescent
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600 sm:text-base">
            Join us in celebrating the launch of Crescent Institute Online. Let’s make this moment
            official!
          </p>

          <div className="relative mx-auto mt-8 flex h-16 w-full max-w-lg items-center justify-center sm:mt-10 sm:h-[76px]">
            <div className="absolute inset-x-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-[#d4af37]/10 blur-md sm:h-7" />
            <motion.div
              animate={
                isCut ? { x: "-115%", rotate: -8, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 left-0 z-10 w-1/2 rounded-l-full border-y border-l border-[#d4af37]/80 bg-gradient-to-b from-[#a32929] via-[#7f1d1d] to-[#5c1118] shadow-[0_8px_18px_rgba(93,17,24,0.25)]"
            />
            <motion.div
              animate={
                isCut ? { x: "115%", rotate: 8, opacity: 0 } : { x: 0, rotate: 0, opacity: 1 }
              }
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 z-10 w-1/2 rounded-r-full border-y border-r border-[#d4af37]/80 bg-gradient-to-b from-[#a32929] via-[#7f1d1d] to-[#5c1118] shadow-[0_8px_18px_rgba(93,17,24,0.25)]"
            />
            <AnimatePresence>
              {!isCut && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.5, opacity: 0 }}
                  className="z-10 flex size-12 items-center justify-center rounded-full border-[3px] border-[#f5df9b] bg-[#d4af37] text-[#5b3512] shadow-[0_3px_12px_rgba(0,0,0,0.2)] sm:size-14"
                >
                  <Scissors className="size-6 -rotate-45 sm:size-7" />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {showConfetti &&
                confettiPieces.map((piece) => (
                  <motion.span
                    key={piece.id}
                    initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 0.7 }}
                    animate={{
                      x: piece.x,
                      y: 150 + ((piece.id * 31) % 100),
                      rotate: piece.rotate,
                      opacity: 0,
                      scale: 1,
                    }}
                    transition={{ duration: 1.25, delay: piece.delay, ease: "easeOut" }}
                    className="pointer-events-none absolute top-1/2 z-20 h-2.5 w-1.5 rounded-sm sm:h-3 sm:w-2"
                    style={{ left: piece.left, backgroundColor: piece.color }}
                    aria-hidden="true"
                  />
                ))}
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            {!showMessage ? (
              <motion.div
                key="cut"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                className="mt-7"
              >
                <button
                  type="button"
                  onClick={cutRibbon}
                  disabled={isCut}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#7f1d1d] px-7 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(127,29,29,0.24)] transition hover:-translate-y-0.5 hover:bg-[#681719] hover:shadow-[0_14px_28px_rgba(127,29,29,0.3)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d4af37]/50 disabled:pointer-events-none sm:px-9 sm:text-base"
                >
                  <Sparkles className="size-4" />
                  🎉 Congratulations!
                </button>
                <p className="mt-3 text-xs text-slate-500">
                  Tap to cut the ribbon and celebrate with us
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 14, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mt-7"
                aria-live="polite"
              >
                <p className="font-display text-xl font-bold text-[#7f1d1d] sm:text-2xl">
                  Congratulations!
                </p>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#172554] sm:text-base">
                  Welcome to Crescent Institute Online. We’re delighted to have you with us.
                </p>
                {audioUnavailable && (
                  <p className="mt-2 text-xs text-slate-500">
                    Celebration audio is unavailable in this browser.
                  </p>
                )}
                <button
                  type="button"
                  onClick={closeCelebration}
                  className="mt-5 rounded-full border border-[#d4af37]/60 px-6 py-2.5 text-sm font-semibold text-[#172554] transition hover:bg-[#d4af37]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                >
                  Explore the website
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}
