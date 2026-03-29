import Link from "next/link";
import FadeIn from "./FadeIn";

const scheduleRows = [
  { name: "Ms. Johnson", cells: [{ t: "7–3", c: "t" }, { t: "7–3", c: "t" }, { t: "OFF", c: "off" }, { t: "7–3", c: "t" }, { t: "7–3", c: "t" }] },
  { name: "Mr. Torres", cells: [{ t: "11–6", c: "n" }, { t: "11–6", c: "n" }, { t: "11–6", c: "n" }, { t: "11–6", c: "n" }, { t: "OFF", c: "off" }] },
  { name: "Ms. Davis", cells: [{ t: "OFF", c: "off" }, { t: "7–3", c: "t" }, { t: "7–3", c: "t" }, { t: "7–3", c: "t" }, { t: "7–3", c: "t" }] },
  { name: "Ms. Lee", cells: [{ t: "2–6", c: "a" }, { t: "2–6", c: "a" }, { t: "2–6", c: "a" }, { t: "Confirm?", c: "p" }, { t: "2–6", c: "a" }] },
  { name: "Mr. Kim", cells: [{ t: "Confirm?", c: "p" }, { t: "8–4", c: "t" }, { t: "8–4", c: "t" }, { t: "8–4", c: "t" }, { t: "8–4", c: "t" }] },
];

const cellColors: Record<string, string> = {
  t: "bg-mist text-teal",
  n: "bg-[rgba(27,108,168,.08)] text-ink",
  a: "bg-[#fef3e2] text-[#E8860A]",
  p: "bg-[#fef9ec] text-[#c05c00] border border-dashed border-[rgba(232,134,10,.5)]",
  off: "bg-[#f5f4f2] text-[#bbb]",
};

export default function Scheduler() {
  return (
    <section className="py-24 bg-[#F0F7FC] relative overflow-hidden" id="sched">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
          <div>
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
              </svg>
              Game-Changing Feature
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight max-w-[480px]">
              No more Sunday nights rebuilding next week&apos;s schedule
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3.5 max-w-[480px]">
              Parents enter their drop-off and pickup times. ChildWise builds the entire staff schedule automatically — right people, right ratios, zero overtime surprises. You review and confirm in minutes. That&apos;s it.
            </p>

            <div className="flex flex-col gap-4 mt-8">
              {[
                { icon: "👨‍👩‍👧", title: "Parents drive the schedule", desc: "Families submit weekly times through the parent app — ChildWise does the rest. No phone calls, no guessing." },
                { icon: "⚡", title: "AI builds, you approve in minutes", desc: "Instant schedule generation accounting for qualifications, state ratios, overtime rules, and staff availability." },
                { icon: "📋", title: "Always ratio-compliant", desc: "ChildWise knows your state's child-to-staff ratio rules. Every schedule is compliant before it reaches your desk." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i as 0 | 1 | 2}>
                  <div className="flex gap-[13px] items-start p-[18px] bg-white border border-border rounded-[13px] shadow-s1 transition-all duration-200 hover:shadow-s2">
                    <div className="w-10 h-10 rounded-[10px] bg-mist flex items-center justify-center text-[19px] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-ink mb-[3px]">{item.title}</div>
                      <div className="text-[13px] text-slate/70 leading-[1.55]">{item.desc}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="flex gap-[13px] mt-8 flex-wrap">
              <a href="#book-demo" className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]">
                Book a Demo
              </a>
              <a href="#ai-os" className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-px">
                See How It Works
              </a>
            </div>
          </div>

          <FadeIn>
            <div className="bg-white rounded-[20px] overflow-hidden shadow-[0_28px_72px_rgba(0,0,0,.08)] border border-border">
              <div className="bg-[#F0F7FC] border-b border-border px-[18px] py-3.5 flex items-center justify-between">
                <div className="text-[13px] font-semibold text-ink">📅 Week of March 3 — Sunny Sprouts</div>
                <div className="text-[10px] bg-mist text-teal px-[9px] py-[3px] rounded-full font-bold flex items-center gap-1">
                  <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5">
                    <path d="M8 1l1.8 4.2L14 6.8l-3.2 2.7.9 4.5L8 11.8 4.3 14l.9-4.5L2 6.8l4.2-1.6L8 1z" fill="#0ABFBC" />
                  </svg>
                  Auto-generated
                </div>
              </div>

              <div className="p-[18px]">
                <div className="grid grid-cols-[70px_repeat(5,1fr)] gap-[5px] mb-[5px]">
                  <div />
                  {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d) => (
                    <div key={d} className="text-[10px] font-bold text-slate/60 text-center uppercase tracking-wider">{d}</div>
                  ))}
                </div>
                {scheduleRows.map((row) => (
                  <div key={row.name} className="grid grid-cols-[70px_repeat(5,1fr)] gap-[5px] mb-1 items-center">
                    <div className="text-[11px] font-medium text-slate">{row.name}</div>
                    {row.cells.map((cell, ci) => (
                      <div key={ci} className={`h-8 rounded-md flex items-center justify-center text-[9px] font-bold ${cellColors[cell.c]}`}>
                        {cell.t}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-[7px] px-[18px] py-3 border-t border-border bg-[#fafafa]">
                <span className="text-[10px] font-bold px-[9px] py-[3px] rounded-full bg-mist text-teal">
                  <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 inline mr-1">
                    <path d="M8 1l1.8 4.2L14 6.8l-3.2 2.7.9 4.5L8 11.8 4.3 14l.9-4.5L2 6.8l4.2-1.6L8 1z" fill="#0ABFBC" />
                  </svg>
                  Auto-generated
                </span>
                <span className="text-[10px] font-bold px-[9px] py-[3px] rounded-full bg-[#fef3e2] text-[#E8860A]">
                  2 need confirm
                </span>
                <button className="ml-auto px-4 py-[7px] bg-ink text-white border-none rounded-[7px] text-[11px] font-bold cursor-pointer font-body transition-colors hover:bg-ink-mid">
                  Confirm All →
                </button>
              </div>
            </div>

            <div className="mt-3.5 bg-white border border-border rounded-xl px-4 py-[13px] flex gap-[9px] items-center shadow-s1">
              <span className="text-[17px]">📊</span>
              <div>
                <div className="text-xs font-semibold text-ink">All rooms: ratio compliant</div>
                <div className="text-[11px] text-slate/60 mt-0.5">Butterfly 1:4 · Rainbow 1:5 · Sunshine 1:6 — within state limits</div>
              </div>
              <div className="ml-auto text-[17px]">✅</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
