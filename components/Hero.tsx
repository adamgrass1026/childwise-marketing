import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="pt-[148px] pb-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_65%_-5%,rgba(13,143,171,.08)_0%,transparent_55%),radial-gradient(ellipse_40%_40%_at_5%_85%,rgba(27,58,107,.05)_0%,transparent_50%)]" />

      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[72px] items-center">
          {/* Left column */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-1.5 pl-2 mb-[22px] shadow-s1">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal to-navy flex items-center justify-center text-[11px]">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                    <path d="M8 1l1.8 4.2L14 6.8l-3.2 2.7.9 4.5L8 11.8 4.3 14l.9-4.5L2 6.8l4.2-1.6L8 1z" fill="white" />
                  </svg>
                </div>
                <span className="text-[13px] font-medium text-t2">
                  <strong className="text-navy">Introducing:</strong> The first intelligent operating system built for childcare centers
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={1}>
              <h1 className="font-heading text-[clamp(36px,5vw,62px)] font-semibold text-navy leading-[1.08] tracking-tight mb-[22px]">
                The first intelligent<br />operating system<br />built for <em className="italic text-teal">childcare.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={2}>
              <p className="text-lg text-t2 leading-[1.75] mb-9 max-w-[460px]">
                While you lead your center, ChildWise AI is building your schedule, guiding your teachers, tracking every required CEU — with accredited training built right in, no separate subscription — documenting child development, and forecasting your enrollment. All at once. All in one platform. Nothing like it exists.
              </p>
            </FadeIn>

            <FadeIn delay={3}>
              <div className="flex items-center gap-3.5 flex-wrap">
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-white hover:bg-teal-lt hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,143,171,.35)]"
                >
                  Start Free Trial →
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white hover:-translate-y-px"
                >
                  See a Demo
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={4}>
              <div className="flex items-center gap-3.5 mt-[34px] pt-[30px] border-t border-border">
                <div className="flex">
                  {["S", "M", "J", "T", "+"].map((letter, i) => (
                    <div
                      key={i}
                      className="w-[30px] h-[30px] rounded-full border-2 border-white bg-teal-pale flex items-center justify-center text-[11px] font-bold text-teal"
                      style={{ marginLeft: i === 0 ? 0 : "-8px" }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <div className="text-[13px] text-t3">
                  <strong className="text-t1 font-semibold">500+ directors</strong> — one platform that actually thinks
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right column - Dashboard mockup */}
          <FadeIn delay={2} className="relative hidden lg:block">
            <div className="bg-white border border-border rounded-[20px] shadow-s4 overflow-hidden">
              {/* Browser bar */}
              <div className="bg-navy px-[18px] py-[13px] flex items-center gap-2.5">
                <div className="flex gap-[5px]">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#ff5f57]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#febc2e]" />
                  <div className="w-[9px] h-[9px] rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-white/[.45] ml-1.5">childwisesoftware.com — Dashboard</span>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div className="w-[52px] bg-navy flex flex-col items-center py-3.5 gap-1.5 shrink-0">
                  {[
                    { icon: "🏠", active: true },
                    { icon: "👶", active: false },
                    { icon: "📅", active: false },
                    { icon: "👥", active: false },
                    { icon: "💰", active: false },
                    { icon: "🤖", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`w-[33px] h-[33px] rounded-lg flex items-center justify-center text-sm cursor-pointer ${
                        item.active ? "bg-teal text-white" : "text-white/40"
                      }`}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 bg-[#f9f8f6] min-h-[390px]">
                  <div className="text-xs font-semibold text-navy mb-1">Good morning, Director Sarah 👋</div>
                  <div className="text-[10px] text-t3 mb-3">Thursday, March 5 · Sunny Sprouts Academy</div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-[7px] mb-3">
                    {[
                      { num: "47", label: "Enrolled", badge: "↑ 3", badgeColor: "bg-[#e8f9f0] text-[#15803d]" },
                      { num: "94%", label: "Attendance", badge: "44 in", badgeColor: "bg-teal-pale text-teal" },
                      { num: "12", label: "Staff today", badge: "2 pending", badgeColor: "bg-amber-pale text-[#c05c00]" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white border border-border rounded-[9px] p-2.5">
                        <div className="font-heading text-xl font-semibold text-navy">{stat.num}</div>
                        <div className="text-[10px] text-t3 mt-px">{stat.label}</div>
                        <span className={`inline-block text-[9px] px-1.5 py-0.5 rounded-full font-bold mt-1 ${stat.badgeColor}`}>
                          {stat.badge}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* AI Alert */}
                  <div className="bg-gradient-to-br from-navy to-[#2a5298] rounded-[9px] px-[13px] py-2.5 flex items-center gap-2 mb-2">
                    <span className="text-sm">🤖</span>
                    <span className="text-[11px] text-white/85 flex-1">
                      <em className="not-italic font-semibold text-white">3 staff licenses expire in 14 days.</em> Training auto-assigned.
                    </span>
                    <span className="text-[9px] bg-teal text-white px-[7px] py-[3px] rounded-full font-bold whitespace-nowrap">Review →</span>
                  </div>

                  {/* Schedule mini */}
                  <div className="bg-white border border-border rounded-[9px] p-2.5">
                    <div className="text-[9px] font-bold text-t3 uppercase tracking-wider mb-[7px]">
                      <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3 inline mr-1">
                        <path d="M8 1l1.8 4.2L14 6.8l-3.2 2.7.9 4.5L8 11.8 4.3 14l.9-4.5L2 6.8l4.2-1.6L8 1z" fill="#0D8FAB" />
                      </svg>
                      Auto-Scheduled · This Week
                    </div>
                    {[
                      { name: "Ms. Johnson", shift: "Mon–Thu · 7am–3pm ✓", color: "bg-teal-pale text-teal" },
                      { name: "Mr. Torres", shift: "Mon–Thu · 11am–6pm ✓", color: "bg-[rgba(27,58,107,.08)] text-navy" },
                      { name: "Ms. Lee", shift: "Friday · Confirm shift?", color: "bg-[#fef9ec] text-[#c05c00] border border-dashed border-[rgba(232,134,10,.5)]" },
                    ].map((row) => (
                      <div key={row.name} className="flex items-center gap-[5px] mb-1">
                        <span className="text-[10px] text-t2 font-medium w-[68px] shrink-0">{row.name}</span>
                        <div className={`flex-1 h-5 rounded-[5px] flex items-center px-[7px] text-[9px] font-bold ${row.color}`}>
                          {row.shift}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating pills */}
            <div
              className="absolute top-3.5 right-[-18px] bg-white border border-border rounded-full px-[13px] py-[7px] flex items-center gap-[7px] shadow-s2 text-xs font-semibold text-t1 whitespace-nowrap"
              style={{ animation: "flt 3s ease-in-out infinite" }}
            >
              <div className="w-[7px] h-[7px] rounded-full bg-teal" />
              Schedule auto-built ✓
            </div>
            <div
              className="absolute bottom-[85px] right-[-24px] bg-white border border-border rounded-full px-[13px] py-[7px] flex items-center gap-[7px] shadow-s2 text-xs font-semibold text-t1 whitespace-nowrap"
              style={{ animation: "flt 3s ease-in-out infinite", animationDelay: "-1.2s" }}
            >
              <div className="w-[7px] h-[7px] rounded-full bg-amber" />
              Staff ratio: compliant
            </div>
            <div
              className="absolute bottom-[18px] left-[-20px] bg-white border border-border rounded-full px-[13px] py-[7px] flex items-center gap-[7px] shadow-s2 text-xs font-semibold text-t1 whitespace-nowrap"
              style={{ animation: "flt 3s ease-in-out infinite", animationDelay: "-2.1s" }}
            >
              <div className="w-[7px] h-[7px] rounded-full bg-[#4ade80]" />
              CDA progress: 72%
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
