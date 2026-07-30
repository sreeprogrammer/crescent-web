import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({
  to,
  decimals = 0,
  duration = 1.8,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} aria-label={String(to)}>
      {value.toFixed(decimals)}
    </span>
  );
}