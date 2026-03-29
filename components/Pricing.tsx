"use client";

import Link from "next/link";

const features = [
  "Unlimited children",
  "Child & family management",
  "Attendance tracking",
  "Billing & invoicing",
  "Parent messaging",
  "Incident reporting",
  "Unlimited staff accounts",
  { text: "AI auto-scheduling", bold: true },
  { text: "AI assistant & training links", bold: true },
  { text: "Predictive enrollment AI", bold: true },
  { text: "ChildWise Learning + CDA pathway", bold: true },
  "Licensing compliance tracker",
  "Multi-site management",
  "Priority phone support",
];

export default function Pricing() {
  return (
    <section className="py-24 bg-[#F0F7FC]" id="pricing">
      <div className="max-w-wrap mx-auto px-9">
        <div className="text-center mb-3.5">
          <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
            Simple pricing
          </div>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight">
            One plan. Everything included.
          </h2>
          <p className="text-[17px] text-slate leading-[1.75] mt-3 mx-auto max-w-[500px]">
            No tiers, no hidden fees — every center gets the full ChildWise platform.
          </p>
        </div>

        {/* Launch offer badge */}
        <div className="flex justify-center mt-6 mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#E8860A]/10 border border-[#E8860A]/25">
            <span className="text-[#E8860A] text-sm font-bold">Launch Special</span>
            <span className="text-slate text-sm">50% off for your first 12 months</span>
          </div>
        </div>

        {/* Single card */}
        <div className="max-w-[480px] mx-auto">
          <div className="p-10 px-9 rounded-card border bg-ink border-transparent shadow-s4 relative">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-teal text-ink text-[10px] font-extrabold px-[13px] py-1 rounded-full whitespace-nowrap tracking-wider uppercase">
              LAUNCH PRICING
            </div>

            <div className="text-center mb-6">
              {/* Struck-through regular price */}
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-white/40 text-lg line-through">$99/mo</span>
                <span className="bg-[#E8860A] text-white text-[11px] font-bold px-[9px] py-[3px] rounded-full">SAVE 50%</span>
              </div>

              {/* Launch price */}
              <div className="flex items-baseline justify-center gap-[3px]">
                <span className="text-xl font-semibold text-white mt-[5px]">$</span>
                <span className="font-heading text-[56px] font-semibold leading-none tracking-tight text-white">
                  49
                </span>
                <span className="text-[14px] text-white/40">/mo</span>
              </div>
              <p className="text-[13px] text-white/50 mt-1.5">for your first 12 months, then $99/mo</p>
            </div>

            <p className="text-[14px] text-white/60 leading-[1.6] text-center mb-6">
              The complete ChildWise platform — AI scheduling, accredited training, observations, predictive enrollment, and everything you need to run your center.
            </p>

            <div className="h-px mb-5 bg-white/10" />

            <ul className="list-none flex flex-col gap-2.5 mb-[26px]">
              {features.map((f, fi) => {
                const text = typeof f === "string" ? f : f.text;
                const bold = typeof f !== "string" && f.bold;
                return (
                  <li key={fi} className="flex items-start gap-2 text-[13px] text-white/80">
                    <span className="text-[13px] shrink-0 mt-px text-[#4dd6ee]">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {bold ? <strong className="text-white">{text}</strong> : text}
                  </li>
                );
              })}
            </ul>

            <a
              href="#book-demo"
              className="block w-full py-3.5 rounded-[9px] font-body text-sm font-bold cursor-pointer transition-all duration-200 text-center no-underline border-2 bg-teal text-ink border-teal hover:bg-teal-light hover:shadow-[0_8px_24px_rgba(10,191,188,.4)]"
            >
              Book a Demo
            </a>
          </div>
        </div>

        <p className="text-center mt-[26px] text-[13px] text-slate/60">
          No long-term contracts · Cancel anytime · Launch pricing locks in for 12 months
        </p>
      </div>
    </section>
  );
}
