"use client";

import { motion } from "framer-motion";
import { reasons } from "@/data/content";

export default function Reasons() {
  return (
    <section className="relative z-10 mx-auto max-w-3xl px-6 py-24">
      <div className="text-center">
        <span className="font-body text-sm text-gold">টুকরো কারণ</span>
        <h2 className="mt-3 font-display text-4xl text-wine sm:text-5xl">
          কেন তোমাকে ভালোবাসি
        </h2>
      </div>

      <div className="paper-grain relative mt-12 rounded-sm bg-white/70 px-8 py-12 shadow-md sm:px-14">
        <div className="absolute inset-y-6 left-6 w-px bg-rose/15 sm:left-10" aria-hidden="true" />
        <ul className="space-y-6 pl-6 sm:pl-8">
          {reasons.map((reason, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-3 font-display text-xl text-ink/85 sm:text-2xl"
            >
              <span className="mt-1 text-rose">♥</span>
              <span>{reason}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
