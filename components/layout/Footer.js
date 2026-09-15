"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/content";

function daysTogether(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

export default function Footer() {
  const [days, setDays] = useState(null);

  useEffect(() => {
    setDays(daysTogether(site.startDate));
  }, []);

  return (
    <footer className="relative z-10 border-t border-rose/15 bg-paper py-12 text-center mb-10">
      {days !== null && (
        <p className="font-display text-lg text-wine px-6">
          আমি জানি না তোমাকে পাবো কি না, তবুও তোমাকে পাওয়ার ইচ্ছা কখনো ফুরাবে
          না।
        </p>
      )}
      <p className="mt-3 font-script text-2xl text-rose">
        {site.myName} ♥ {site.herName}
      </p>
    </footer>
  );
}
