"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/data/content";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const nameY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-paper-texture"
    >
      <motion.div
        style={{ y: bgY }}
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-blush/60 via-paper to-paper"
      />

      <motion.div
        style={{ y: nameY, opacity: fade }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <span className="font-body text-sm tracking-wide text-wine/70">
          সুমনা এটা তোমার জন্য।
        </span>

        <h1 className="mt-4 font-script text-[clamp(3.5rem,14vw,9rem)] leading-none text-wine">
          {site.herName}
        </h1>

        <p className="mt-6 max-w-md font-display text-xl italic text-ink/80 sm:text-2xl">
          {site.tagline}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2 text-wine/60"
        >
          <span className="font-body text-xs">নিচে স্ক্রল করো</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
