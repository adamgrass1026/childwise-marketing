import { faqItems } from "./JsonLd";
import FadeIn from "./FadeIn";

export default function Faq() {
  return (
    <section className="py-24 bg-white" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-[820px] mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              Questions, answered
            </div>
            <h2
              id="faq-heading"
              className="font-heading text-[clamp(30px,4vw,46px)] font-semibold text-ink leading-[1.1] tracking-tight"
            >
              Childcare management software FAQ
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3.5 max-w-[560px] mx-auto">
              Everything directors ask before switching to ChildWise — pricing,
              compliance, security, and how it compares to Brightwheel and Procare.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <FadeIn key={item.q} delay={(i % 3) as 0 | 1 | 2}>
              <details className="group bg-white border border-border rounded-[14px] overflow-hidden transition-all duration-200 hover:shadow-s2 open:shadow-s2">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading text-[16px] sm:text-[17px] font-semibold text-ink leading-[1.4] m-0">
                    {item.q}
                  </h3>
                  <div className="w-7 h-7 rounded-full bg-mist text-teal flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-45">
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none">
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </summary>
                <div className="px-5 pb-5 -mt-1 text-[14.5px] text-slate leading-[1.75]">
                  {item.a}
                </div>
              </details>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="text-center mt-12">
            <p className="text-[15px] text-slate mb-5">
              Still have questions? Our team will walk you through everything in a
              30-minute live demo.
            </p>
            <a
              href="https://calendly.com/adam-childwise/30min"
              className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]"
            >
              Book a Demo →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
