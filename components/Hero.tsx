"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const pills = [
  { word: "Assessment", color: "#1B6CA8" },
  { word: "Schedule", color: "#0ABFBC" },
  { word: "Train", color: "#22C58B" },
  { word: "Enroll", color: "#E8860A" },
];

const stats = [
  { num: "500+", label: "Centers" },
  { num: "12K+", label: "Children" },
  { num: "4.9★", label: "Rating" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0D1B2A]">
      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(27,108,168,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 80%, rgba(10,191,188,0.08) 0%, transparent 55%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 75%)",
        }}
      />

      <div className="relative max-w-wrap mx-auto px-9 py-[160px] pb-[100px] text-center">
        {/* Feature pills */}
        <div className="flex flex-col items-center gap-3.5 mb-12">
          <div className="flex items-center gap-3.5 flex-wrap justify-center">
            {pills.slice(0, 2).map((pill, i) => (
              <div
                key={pill.word}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.06] backdrop-blur-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
                }}
              >
                <div
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${pill.color}22` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pill.color }} />
                </div>
                <span className="text-[15px] font-medium text-white/70">
                  {pill.word} <span className="text-teal font-semibold">Wise</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3.5 flex-wrap justify-center">
            {pills.slice(2).map((pill, i) => (
              <div
                key={pill.word}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.06] backdrop-blur-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 0.5s ease ${(i + 2) * 0.12}s, transform 0.5s ease ${(i + 2) * 0.12}s`,
                }}
              >
                <div
                  className="w-[30px] h-[30px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${pill.color}22` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pill.color }} />
                </div>
                <span className="text-[15px] font-medium text-white/70">
                  {pill.word} <span className="text-teal font-semibold">Wise</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Welcome label */}
        <div
          className="text-[11px] font-semibold tracking-[.2em] uppercase text-white/40 mb-4"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          Welcome to
        </div>

        {/* Headline */}
        <h1
          className="font-heading text-[clamp(48px,7vw,88px)] font-bold leading-[1.05] tracking-tight mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s",
          }}
        >
          <span className="inline-flex">
            <span className="text-white">Child</span>
            <span className="text-teal">Wise</span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg text-white/50 leading-[1.7] max-w-[520px] mx-auto mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
          }}
        >
          The first intelligent operating system built for childcare centers.
          AI scheduling, accredited training, observations, and predictive
          enrollment — all in one platform.
        </p>

        {/* CTA buttons */}
        <div
          className="flex items-center justify-center gap-3.5 flex-wrap mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.6s ease 0.85s, transform 0.6s ease 0.85s",
          }}
        >
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body text-base font-semibold no-underline bg-teal text-ink border-2 border-teal transition-all duration-200 hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(10,191,188,.3)]"
          >
            Book a Demo
          </a>
          <a
            href="#ai-os"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body text-base font-semibold no-underline border-2 border-white/15 bg-white/[0.05] text-white/80 transition-all duration-200 hover:bg-white/10 hover:border-white/25 hover:-translate-y-px"
          >
            See how it works
          </a>
        </div>

        {/* Proof stats */}
        <div
          className="flex items-center justify-center gap-8 sm:gap-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 1s",
          }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              {i > 0 && <div className="w-px h-5 bg-white/10 -ml-4 sm:-ml-6" />}
              <div className="text-center">
                <div className="font-heading text-xl font-bold text-teal">{stat.num}</div>
                <div className="text-[11px] text-white/35 mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
