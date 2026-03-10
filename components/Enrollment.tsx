import Link from "next/link";
import FadeIn from "./FadeIn";

const chartData = [
  { m: "Oct", v: 38, act: true },
  { m: "Nov", v: 41, act: true },
  { m: "Dec", v: 39, act: true },
  { m: "Jan", v: 43, act: true },
  { m: "Feb", v: 44, act: true },
  { m: "Mar", v: 47, act: true },
  { m: "Apr", v: 50, act: false },
  { m: "May", v: 52, act: false },
  { m: "Jun", v: 55, act: false },
];

const maxV = 60;

export default function Enrollment() {
  return (
    <section className="py-24 bg-white" id="enrollment">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-teal-pale border border-[rgba(13,143,171,.2)] rounded-full mb-[18px]">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
              </svg>
              Predictive Intelligence
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-navy leading-[1.1] tracking-tight max-w-[480px]">
              Stop finding out about enrollment gaps after they hit your revenue
            </h2>
            <p className="text-[17px] text-t2 leading-[1.75] mt-3.5 max-w-[480px]">
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
                    <div className="w-[38px] h-[38px] rounded-[9px] bg-teal-pale flex items-center justify-center text-lg shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy mb-[3px]">{item.title}</div>
                      <div className="text-[13px] text-t2 leading-[1.5]">{item.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="flex gap-[13px] mt-8 flex-wrap">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-white hover:bg-teal-lt hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,143,171,.35)]"
              >
                See Enrollment AI
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white hover:-translate-y-px"
              >
                Start Free Trial
              </Link>
            </div>
          </div>

          {/* Right - Enrollment card */}
          <FadeIn>
            <div className="bg-white border border-border rounded-[22px] overflow-hidden shadow-s3">
              {/* Header */}
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-navy flex items-center gap-[7px]">📈 Enrollment Forecast — Sunny Sprouts</div>
                  <div className="text-xs text-t3 mt-0.5">Next 9 months · AI-generated · Updated weekly</div>
                </div>
                <span className="text-[10px] bg-teal-pale text-teal px-[9px] py-[3px] rounded-full font-bold">Live</span>
              </div>

              {/* Chart */}
              <div className="px-5 py-[18px]">
                <div className="text-[9px] text-t3 mb-[7px] font-bold uppercase tracking-wider">Children enrolled</div>
                <div className="flex items-end gap-[5px] h-[130px]">
                  {chartData.map((d) => {
                    const pct = (d.v / maxV) * 100;
                    return (
                      <div key={d.m} className="flex-1 flex flex-col items-center gap-1">
                        <div className="text-[9px] font-bold text-t2">{d.v}</div>
                        <div className="w-full bg-[#f2f0ed] rounded-t-[5px] relative" style={{ height: `${pct}%` }}>
                          <div
                            className={`w-full rounded-t-[5px] h-full ${
                              d.act
                                ? "bg-teal"
                                : "bg-teal opacity-[.38] border-2 border-dashed border-teal"
                            }`}
                          />
                        </div>
                        <div className="text-[9px] text-t3 font-semibold">{d.m}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex gap-4 mt-3">
                  <div className="flex items-center gap-[5px] text-[11px] text-t3">
                    <div className="w-[11px] h-[11px] rounded-[3px] bg-teal" />
                    Actual
                  </div>
                  <div className="flex items-center gap-[5px] text-[11px] text-t3">
                    <div className="w-[11px] h-[11px] rounded-[3px] bg-teal opacity-40 border border-dashed border-teal" />
                    Forecasted
                  </div>
                </div>
              </div>

              {/* KPIs */}
              <div className="grid grid-cols-3 gap-2 px-5 pb-4">
                <div className="rounded-[10px] p-3 text-center bg-teal-pale">
                  <div className="font-heading text-xl font-semibold text-teal">+8</div>
                  <div className="text-[10px] text-t3 mt-0.5 leading-[1.3]">Projected openings<br />next 60 days</div>
                </div>
                <div className="rounded-[10px] p-3 text-center bg-amber-pale">
                  <div className="font-heading text-xl font-semibold text-amber">14</div>
                  <div className="text-[10px] text-t3 mt-0.5 leading-[1.3]">Waitlisted families<br />ready to enroll</div>
                </div>
                <div className="rounded-[10px] p-3 text-center bg-[rgba(27,58,107,.06)]">
                  <div className="font-heading text-xl font-semibold text-navy">$6.2K</div>
                  <div className="text-[10px] text-t3 mt-0.5 leading-[1.3]">Projected revenue<br />increase · Q2</div>
                </div>
              </div>

              {/* AI Insight */}
              <div className="bg-cream border-t border-border px-[18px] py-[13px] flex gap-2.5 items-center">
                <span className="text-lg shrink-0">🤖</span>
                <div className="text-xs text-t2 leading-[1.5]">
                  <strong className="text-navy">AI Insight:</strong> 3 families in Toddler room predicted to age-out by May. Recommends contacting 3 waitlisted toddlers now to avoid a revenue gap.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
