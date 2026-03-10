"use client";

import { useEffect, useRef } from "react";

export default function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("v");
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -28px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1
      ? "d1"
      : delay === 2
        ? "d2"
        : delay === 3
          ? "d3"
          : delay === 4
            ? "d4"
            : "";

  return (
    <div ref={ref} className={`fi ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
