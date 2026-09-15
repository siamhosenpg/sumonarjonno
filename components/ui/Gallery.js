"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gallery } from "@/data/content";
import Image from "next/image";

const LAYOUT = [
  { span: "md:col-span-3", rotate: -4, depth: 40 },
  { span: "md:col-span-3", rotate: 3, depth: -30 },
  { span: "md:col-span-2", rotate: -2, depth: 50 },
  { span: "md:col-span-2", rotate: 5, depth: -45 },
  { span: "md:col-span-2", rotate: -3, depth: 35 },
  { span: "md:col-span-6", rotate: 2, depth: -25 },
];

function Frame({ photo, layout }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [layout.depth, -layout.depth],
  );

  return (
    <motion.figure
      ref={ref}
      style={{ y, rotate: layout.rotate }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className={`${layout.span} col-span-1 rounded-sm border-8 border-white bg-white p-2 shadow-lg`}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-blush/50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          width={500}
          height={500}
          priority
          src={photo.src}
          alt={photo.caption}
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden h-full w-full items-center justify-center font-script text-xl text-rose/50">
          ছবি বসাও
        </div>
      </div>
      <figcaption className="pt-2 text-center font-script text-lg text-wine/80">
        {photo.caption}
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <span className="font-body text-sm text-gold">স্মৃতির অ্যালবাম</span>
        <h2 className="mt-3 font-display text-4xl text-wine sm:text-5xl">
          কিছু প্রিয় মুহূর্ত
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-6">
        {gallery.map((photo, i) => (
          <Frame
            key={photo.src}
            photo={photo}
            layout={LAYOUT[i % LAYOUT.length]}
          />
        ))}
      </div>
    </section>
  );
}
