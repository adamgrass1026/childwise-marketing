"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] backdrop-blur-[16px] border-b transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(248,245,240,.97)] shadow-s1 border-[rgba(224,218,210,.6)]"
          : "bg-[rgba(248,245,240,.88)] border-[rgba(224,218,210,.6)]"
      }`}
    >
      <div className="max-w-wrap mx-auto px-9 h-[70px] flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0">
          <div className="w-[34px] h-[34px] bg-navy rounded-[9px] flex items-center justify-center">
            <svg viewBox="0 0 20 20" fill="none" className="w-[19px] h-[19px]">
              <path
                d="M10 2C7.5 2 5.5 3.8 5.5 6c0 1.4.8 2.6 1.9 3.3C5.5 10 4 11.8 4 14h12c0-2.2-1.5-4-3.4-4.7C13.7 8.6 14.5 7.4 14.5 6 14.5 3.8 12.5 2 10 2z"
                fill="white"
              />
              <circle cx="16" cy="15" r="3" fill="#0D8FAB" />
            </svg>
          </div>
          <span className="font-heading text-[19px] font-semibold text-navy tracking-tight">
            Child<span className="text-teal">Wise</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-0.5 list-none flex-1 justify-center">
          {[
            { href: "#sched", label: "Auto Scheduling" },
            { href: "#ai", label: "AI Assistant" },
            { href: "#observations", label: "Observations" },
            { href: "#training", label: "Training & CDA" },
            { href: "#pricing", label: "Pricing" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-t2 no-underline px-[13px] py-1.5 rounded-lg transition-all duration-150 hover:text-navy hover:bg-cream-dk"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://app.childwisesoftware.com/login"
            className="text-sm font-medium text-t2 no-underline px-3.5 py-[7px] rounded-lg transition-all duration-150 hover:text-navy hover:bg-cream-dk"
          >
            Sign in
          </a>
          <a
            href="https://app.childwisesoftware.com/login"
            className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-lg font-body text-[13px] font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-white hover:bg-teal-lt hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,143,171,.35)]"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </nav>
  );
}
