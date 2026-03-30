import Link from "next/link";
import FadeIn from "./FadeIn";

export default function AiAssistant() {
  return (
    <section className="py-24 bg-white" id="ai">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
              </svg>
              AI-Powered Intelligence
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight max-w-[480px]">
              Your staff shouldn&apos;t have to wonder. Now they don&apos;t have to.
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3.5 max-w-[480px]">
              Teachers ask questions and get answers — with a direct link to the exact training that covers it. Directors get alerts before compliance problems happen. The whole center runs with less second-guessing and more confidence.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              {[
                { num: "1", title: "Ask anything, get instant training", desc: 'Teachers ask a question — handling a tantrum, developmental delays, a safety scenario — and AI answers with guidance and <strong>links directly to the exact training module</strong> in ChildWise Learning that covers it.' },
                { num: "2", title: "Licensing compliance on autopilot", desc: "ChildWise tracks every staff member's training hours against <strong>your state's licensing requirements</strong> and alerts directors weeks before renewals fall short — never face an audit unprepared." },
                { num: "3", title: "Proactive center monitoring", desc: "AI watches your entire center — <strong>flagging expiring certifications, low ratios, billing issues, and attendance anomalies</strong> before they become problems a director has to manage in crisis mode." },
              ].map((item, i) => (
                <FadeIn key={item.num} delay={i as 0 | 1 | 2}>
                  <div className="flex gap-3.5 items-start">
                    <div className="w-[34px] h-[34px] rounded-[9px] bg-ink text-white font-heading text-[15px] font-semibold flex items-center justify-center shrink-0">
                      {item.num}
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-ink mb-1">{item.title}</div>
                      <div className="text-sm text-slate leading-[1.65] [&_strong]:text-ink [&_strong]:font-semibold" dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="flex gap-[13px] mt-8 flex-wrap">
              <a href="https://calendly.com/adam-heritagehollowllc/30min" className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]">
                Book a Demo
              </a>
              <a href="#ai-os" className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-px">
                See How It Works
              </a>
            </div>
          </div>

          <FadeIn>
            <div className="bg-gradient-to-br from-ink to-ink-light rounded-[22px] p-[26px] shadow-s4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_10%,rgba(10,191,188,.15)_0%,transparent_50%)] pointer-events-none" />

              <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-4 relative">
                <div className="w-9 h-9 rounded-[10px] bg-teal flex items-center justify-center text-[19px] shrink-0">🤖</div>
                <div>
                  <div className="text-sm font-semibold text-white">ChildWise AI Assistant</div>
                  <div className="text-[11px] text-white/45 flex items-center gap-[5px]">
                    <span className="w-1.5 h-1.5 bg-success rounded-full inline-block" />
                    Watching your center · Always on
                  </div>
                </div>
              </div>

              <div className="rounded-[13px] px-[15px] py-[11px] text-[13px] leading-relaxed mb-[9px] bg-white/10 text-white/90 rounded-br-[3px] ml-[15%]">
                &quot;Which staff need training hours before their license renewal?&quot;
              </div>

              <div className="rounded-[13px] px-[15px] py-[11px] text-[13px] leading-relaxed mb-[9px] bg-white text-ink rounded-bl-[3px]">
                <strong className="text-teal font-semibold">3 staff members</strong> have upcoming renewals:<br /><br />
                • Ms. Johnson — needs <strong className="text-teal font-semibold">4 CEU hrs</strong> by Apr 15<br />
                • Mr. Torres — needs <strong className="text-teal font-semibold">6 CEU hrs</strong> by May 1<br />
                • Ms. Davis — needs <strong className="text-teal font-semibold">2 CEU hrs</strong> by Mar 28<br /><br />
                I&apos;ve matched each person to the right courses:
                <a className="flex items-center gap-[7px] mt-2 p-[7px] px-[11px] bg-mist rounded-lg text-xs font-semibold text-teal no-underline hover:bg-[#d6edf6]" href="#">
                  🎓 &nbsp;Child Development Foundations · 3 hrs
                </a>
                <a className="flex items-center gap-[7px] mt-[5px] p-[7px] px-[11px] bg-mist rounded-lg text-xs font-semibold text-teal no-underline hover:bg-[#d6edf6]" href="#">
                  🎓 &nbsp;Safety &amp; Emergency Protocols · 2 hrs
                </a>
              </div>

              <div className="rounded-[13px] px-[15px] py-[11px] text-[13px] leading-relaxed mb-[9px] bg-white/10 text-white/90 rounded-br-[3px] ml-[15%] mt-1">
                &quot;What should I do if a child is showing signs of separation anxiety?&quot;
              </div>

              <div className="rounded-[13px] px-[15px] py-[11px] text-[13px] leading-relaxed mb-[9px] bg-white text-ink rounded-bl-[3px]">
                Brief, warm goodbyes with a predictable routine work best — consistency reduces anxiety quickly.<br /><br />
                <a className="flex items-center gap-[7px] mt-2 p-[7px] px-[11px] bg-mist rounded-lg text-xs font-semibold text-teal no-underline hover:bg-[#d6edf6]" href="#">
                  🎓 &nbsp;Supporting Emotional Wellbeing (Ages 2–5) · 1.5 hrs — CDA Unit 6
                </a>
              </div>

              <div className="bg-[rgba(232,134,10,.15)] border border-[rgba(232,134,10,.3)] rounded-[9px] px-[13px] py-[11px] flex items-center gap-[9px] mt-2">
                <span className="text-[17px]">⚠️</span>
                <div className="text-xs text-[#f5b144] font-medium leading-[1.4]">
                  <strong className="text-[#fbcc7a]">Ms. Davis renewal in 23 days.</strong> Auto-enrolled in recommended course. Your approval needed.
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
