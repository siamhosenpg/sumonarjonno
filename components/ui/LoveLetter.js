"use client";

import { motion } from "framer-motion";
import { letter } from "@/data/content";

export default function LoveLetter() {
  return (
    <section className="relative z-10 mx-auto max-w-2xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8 }}
        className="paper-grain relative overflow-hidden rounded-sm bg-white px-8 py-14 shadow-2xl sm:px-16"
      >
        <div
          aria-hidden="true"
          className="absolute -top-10 -right-10 h-24 w-24 rotate-45 bg-blush/40"
        />

        <h2 className="text-center font-display text-3xl text-wine sm:text-4xl">
          {letter.heading}
        </h2>

        <div className="mt-8 space-y-5 font-display text-lg italic leading-relaxed text-ink/85 sm:text-xl">
          {letter.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10 text-right">
          <p className="font-display text-lg text-ink/70">{letter.signOff}</p>
          <p className="mt-1 font-script text-4xl text-rose">{letter.signature}</p>
        </div>
      </motion.div>
    </section>
  );
}
