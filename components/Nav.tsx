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
          ? "bg-[rgba(13,27,42,0.95)] shadow-s1 border-white/[0.08]"
          : "bg-[rgba(13,27,42,0.88)] border-white/[0.05]"
      }`}
    >
      <div className="max-w-wrap mx-auto px-9 h-[70px] flex items-center justify-between gap-8">
        <Link href="/" className="no-underline shrink-0">
          <span className="inline-flex font-heading font-bold text-xl tracking-tight">
            <span className="text-white">Child</span>
            <span className="text-teal">Wise</span>
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
                className="text-sm font-medium text-white/50 no-underline px-[13px] py-1.5 rounded-lg transition-all duration-150 hover:text-white hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://app.childwisesoftware.com/login"
            className="text-sm font-medium text-white/50 no-underline px-3.5 py-[7px] rounded-lg transition-all duration-150 hover:text-white hover:bg-white/[0.06]"
          >
            Sign in
          </a>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 px-[18px] py-[9px] rounded-lg font-body text-[13px] font-semibold cursor-pointer transition-all duration-200 no-underline bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
