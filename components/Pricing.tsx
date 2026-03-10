"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    tier: "Starter",
    monthly: 79,
    annual: 63,
    desc: "For single-site centers getting started with digital management.",
    features: [
      "Up to 30 children",
      "Child & family management",
      "Attendance tracking",
      "Basic billing & invoicing",
      "Parent messaging",
      "Incident reporting",
      "5 staff accounts",
    ],
    cta: "Start Free Trial",
    ctaHref: "/signup",
    popular: false,
  },
  {
    tier: "Professional",
    monthly: 149,
    annual: 119,
    desc: "The full ChildWise experience — AI, auto-scheduling, CDA training, and predictive enrollment.",
    features: [
      "Up to 75 children",
      "Everything in Starter",
      { text: "AI auto-scheduling", bold: true },
      { text: "AI assistant & training links", bold: true },
      { text: "Predictive enrollment AI", bold: true },
      { text: "ChildWise Learning + CDA pathway", bold: true },
      "Licensing compliance tracker",
      "Unlimited staff accounts",
      "Priority phone support",
    ],
    cta: "Start Free Trial",
    ctaHref: "/signup",
    popular: true,
  },
  {
    tier: "Enterprise",
    monthly: 299,
    annual: 239,
    desc: "Multi-site management and advanced analytics for organizations and chains.",
    features: [
      "Unlimited children",
      "Everything in Professional",
      "Multi-site management",
      "Cross-center reporting",
      "Custom branding",
      "API access",
      "Dedicated onboarding",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    popular: false,
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="py-24 bg-cream" id="pricing">
      <div className="max-w-wrap mx-auto px-9">
        <div className="text-center mb-3.5">
          <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-teal-pale border border-[rgba(13,143,171,.2)] rounded-full mb-[18px]">
            Simple pricing
          </div>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-navy leading-[1.1] tracking-tight">
            Invest in running a better center
          </h2>
          <p className="text-[17px] text-t2 leading-[1.75] mt-3 mx-auto max-w-[460px]">
            Transparent pricing that scales with you. No hidden fees, no long-term contracts.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 my-[26px] mb-12">
          <span className={`text-sm font-medium ${!isAnnual ? "text-navy font-semibold" : "text-t3"}`}>Monthly</span>
          <div
            className={`w-11 h-6 rounded-xl relative cursor-pointer transition-colors duration-200 bg-teal`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <div
              className={`w-[18px] h-[18px] bg-white rounded-full absolute top-[3px] transition-transform duration-200 shadow-[0_1px_3px_rgba(0,0,0,.2)] ${
                isAnnual ? "translate-x-[23px]" : "translate-x-[3px]"
              }`}
            />
          </div>
          <span className={`text-sm font-medium ${isAnnual ? "text-navy font-semibold" : "text-t3"}`}>Annual</span>
          <span className="bg-amber text-white text-[11px] font-bold px-[9px] py-[3px] rounded-full">Save 20%</span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] max-w-[400px] lg:max-w-none mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.tier}
              className={`p-8 px-7 rounded-card border relative transition-all duration-200 ${
                plan.popular
                  ? "bg-navy border-transparent shadow-s4 lg:scale-[1.04] hover:shadow-s3"
                  : "bg-white border-border hover:shadow-s3"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-teal text-white text-[10px] font-extrabold px-[13px] py-1 rounded-full whitespace-nowrap tracking-wider uppercase">
                  MOST POPULAR
                </div>
              )}
              <div className={`text-[11px] font-bold uppercase tracking-[.1em] mb-[9px] ${plan.popular ? "text-white/50" : "text-teal"}`}>
                {plan.tier}
              </div>
              <div className="flex items-baseline gap-[3px] mb-[5px]">
                <span className={`text-xl font-semibold ${plan.popular ? "text-white" : "text-navy"} mt-[5px]`}>$</span>
                <span className={`font-heading text-[46px] font-semibold leading-none tracking-tight ${plan.popular ? "text-white" : "text-navy"}`}>
                  {isAnnual ? plan.annual : plan.monthly}
                </span>
                <span className={`text-[13px] ${plan.popular ? "text-white/40" : "text-t3"}`}>/mo</span>
              </div>
              <p className={`text-[13px] leading-[1.5] mb-[22px] ${plan.popular ? "text-white/60" : "text-t2"}`}>
                {plan.desc}
              </p>
              <div className={`h-px mb-5 ${plan.popular ? "bg-white/10" : "bg-border"}`} />
              <ul className="list-none flex flex-col gap-2.5 mb-[26px]">
                {plan.features.map((f, fi) => {
                  const text = typeof f === "string" ? f : f.text;
                  const bold = typeof f !== "string" && f.bold;
                  return (
                    <li key={fi} className={`flex items-start gap-2 text-[13px] ${plan.popular ? "text-white/80" : "text-t2"}`}>
                      <span className={`text-[13px] shrink-0 mt-px ${plan.popular ? "text-[#4dd6ee]" : "text-teal"}`}>
                        <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                          <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {bold ? <strong className={plan.popular ? "text-white" : ""}>{text}</strong> : text}
                    </li>
                  );
                })}
              </ul>
              <Link
                href={plan.ctaHref}
                className={`block w-full py-3 rounded-[9px] font-body text-sm font-bold cursor-pointer transition-all duration-200 text-center no-underline border-2 ${
                  plan.popular
                    ? "bg-teal text-white border-teal hover:bg-teal-lt hover:shadow-[0_8px_24px_rgba(13,143,171,.4)]"
                    : "bg-transparent text-teal border-teal hover:bg-teal hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center mt-[26px] text-[13px] text-t3">
          All plans include a 14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  );
}
