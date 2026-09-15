"use client";

import { useScroll, useTransform, motion } from "framer-motion";

const PETALS = [
  { left: "6%", size: 22, delay: 0, depth: 0.15, rotate: -12 },
  { left: "18%", size: 14, delay: 0.4, depth: 0.35, rotate: 20 },
  { left: "32%", size: 30, delay: 0.1, depth: 0.08, rotate: 5 },
  { left: "47%", size: 16, delay: 0.6, depth: 0.28, rotate: -25 },
  { left: "61%", size: 24, delay: 0.2, depth: 0.18, rotate: 15 },
  { left: "74%", size: 12, delay: 0.5, depth: 0.4, rotate: -8 },
  { left: "85%", size: 26, delay: 0.3, depth: 0.12, rotate: 30 },
  { left: "93%", size: 15, delay: 0.7, depth: 0.32, rotate: -18 },
];

function Petal({ left, size, delay, depth, rotate, scrollYProgress }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, 1400 * depth]);

  return (
    <motion.svg
      viewBox="0 0 24 24"
      style={{ left, width: size, height: size, y }}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 0.35 }}
      transition={{ duration: 1.2, delay }}
      className="absolute top-0 fill-rose/40"
    >
      <g transform={`rotate(${rotate} 12 12)`}>
        <path d="M12 21s-7.5-4.7-10-9.2C.5 8.4 2.3 5 5.6 5c2 0 3.5 1.1 4.4 2.6C10.9 6.1 12.4 5 14.4 5c3.3 0 5.1 3.4 3.6 6.8C19.5 16.3 12 21 12 21z" />
      </g>
    </motion.svg>
  );
}

export default function FloatingHearts() {
  const { scrollYProgress } = useScroll();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {PETALS.map((p, i) => (
        <Petal key={i} {...p} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}
