import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Enrollment() {
  return (
    <section className="py-24 bg-[#F0F7FC]" id="enrollment">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
              </svg>
              Predictive Intelligence
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight max-w-[480px]">
              Stop finding out about enrollment gaps after they hit your revenue
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3.5 max-w-[480px]">
              ChildWise AI sees what&apos;s coming weeks before it arrives — open spots, aging-out families, seasonal dips. You get the forecast in time to act, not in time to react.
            </p>

            <div className="flex flex-col gap-4 mt-[30px]">
              {[
                { icon: "📅", title: "Forecast openings before they happen", desc: "AI identifies aging-out timelines and schedule changes to predict when spots will open weeks ahead." },
                { icon: "👥", title: "Smart waitlist matching", desc: "Automatically ranks and notifies waitlisted families based on predicted openings, age group, and schedule fit." },
                { icon: "💰", title: "Revenue & staffing forecasts", desc: "Enrollment projections feed into revenue and staffing models — giving directors a clear picture months ahead." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i as 0 | 1 | 2}>
                  <div className="flex gap-[13px] items-start p-[17px] bg-white border border-border rounded-[13px] transition-all duration-200 hover:shadow-s2 hover:translate-x-1">
                    <div className="w-[38px] h-[38px] rounded-[9px] bg-mist flex items-center justify-center text-lg shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink mb-[3px]">{item.title}</div>
                      <div className="text-[13px] text-slate leading-[1.5]">{item.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="flex gap-[13px] mt-8 flex-wrap">
              <a
                href="https://calendly.com/adam-childwise/30min"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]"
              >
                Book a Demo
              </a>
              <a
                href="https://calendly.com/adam-childwise/30min"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-px"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right - Enrollment screenshot */}
          <FadeIn>
            <div className="rounded-[22px] overflow-hidden shadow-s3 border border-border">
              <Image
                src="/images/enrollment-overview.png"
                alt="ChildWise Enrollment Overview showing real-time capacity tracking, predictive enrollment projections, and attendance charts across all classrooms"
                width={1556}
                height={756}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
