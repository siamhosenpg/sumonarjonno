"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/data/content";
import Image from "next/image";

function StoryItem({ item, index }) {
  const ref = useRef(null);
  const isReversed = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const photoY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = index % 2 === 0 ? -3 : 3;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-16 ${
        isReversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        style={{ y: photoY, rotate }}
        className="mx-auto w-full max-w-sm rounded-sm border-8 border-white bg-white p-2 shadow-xl"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-blush/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            width={500}
            height={500}
            priority
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden h-full w-full items-center justify-center font-script text-2xl text-rose/50">
            ছবি বসাও এখানে
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.7 }}
        className="px-2 text-center md:text-left"
      >
        <span className="font-body text-sm text-gold">{item.date}</span>
        <h3 className="mt-2 font-display text-3xl text-wine sm:text-4xl">
          {item.title}
        </h3>
        <p className="mt-4 font-body text-base leading-relaxed text-ink/80 sm:text-lg">
          {item.text}
        </p>
      </motion.div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <span className="font-body text-sm text-gold">আমাদের গল্প</span>
        <h2 className="mt-3 font-display text-4xl text-wine sm:text-5xl">
          যেভাবে শুরু হয়েছিল
        </h2>
      </div>

      <div className="mt-8 divide-y divide-rose/10">
        {timeline.map((item, i) => (
          <StoryItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
