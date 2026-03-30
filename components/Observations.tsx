import Link from "next/link";
import FadeIn from "./FadeIn";

const points = [
  {
    icon: "📸",
    title: "Photo or voice note → draft observation",
    desc: 'Snap a photo or leave a quick voice memo while the moment is fresh. AI generates a <strong>draft observation for the teacher to review</strong> — saving the time of writing from scratch while keeping the teacher\'s professional judgment front and center.',
  },
  {
    icon: "🎯",
    title: "Milestone suggestions — teacher confirms",
    desc: 'AI suggests developmental milestone connections across cognitive, social-emotional, language, and motor domains. <strong>Teachers review every suggestion and confirm or adjust</strong> — the final record always reflects their expertise, not just the algorithm.',
  },
  {
    icon: "✏️",
    title: "Edit, refine, then save",
    desc: 'The AI draft is a <strong>starting point, not the final word</strong>. Teachers edit freely, add context only they would know, and approve the observation before it\'s added to the child\'s record or shared with families.',
  },
  {
    icon: "👨‍👩‍👧",
    title: "Share meaningful moments with families",
    desc: 'Once a teacher approves an observation, send it to families with one tap. Parents receive <strong>rich developmental context alongside the photo</strong> — not just a snapshot, but a window into their child\'s growth.',
  },
];

const milestones = [
  { dot: "bg-[#4ade80]", text: "Cooperative play with peers (Social-Emotional 3–4yr)", tag: "✓ Confirmed", tagStyle: "bg-[rgba(74,222,128,.15)] text-[#4ade80] border border-[rgba(74,222,128,.3)]" },
  { dot: "bg-[#f5a030]", text: "Sustained attention 10+ min (Cognitive)", tag: "Review →", tagStyle: "bg-[rgba(232,134,10,.2)] text-[#f5b144] border border-[rgba(232,134,10,.3)]" },
  { dot: "bg-teal", text: "Color recognition & sorting (Cognitive)", tag: "✓ Confirmed", tagStyle: "bg-[rgba(74,222,128,.15)] text-[#4ade80] border border-[rgba(74,222,128,.3)]" },
  { dot: "bg-teal", text: "Verbal direction with peers (Language 3yr)", tag: "Review →", tagStyle: "bg-[rgba(232,134,10,.2)] text-[#f5b144] border border-[rgba(232,134,10,.3)]" },
];

export default function Observations() {
  return (
    <section className="py-24 bg-[#F0F7FC]" id="observations">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
              </svg>
              Teachers Will Love This
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight max-w-[500px]">
              Teachers should be watching children — not writing about them
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3.5 max-w-[500px]">
              Snap a photo. Leave a voice note. ChildWise drafts the observation, suggests the developmental milestones, and waits for the teacher to review and confirm every detail. The documentation gets done. The teacher stays present.
            </p>

            <div className="flex flex-col gap-5 mt-8">
              {points.map((item, i) => (
                <FadeIn key={item.title} delay={i as 0 | 1 | 2 | 3}>
                  <div className="flex gap-3.5 items-start p-[18px] bg-white border border-border rounded-[13px] transition-all duration-200 hover:shadow-s2 hover:translate-x-1">
                    <div className="w-10 h-10 rounded-[10px] bg-white border border-border flex items-center justify-center text-[19px] shrink-0 shadow-s1">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[15px] font-semibold text-ink mb-[3px]">{item.title}</div>
                      <div
                        className="text-[13px] text-slate leading-[1.55] [&_strong]:text-ink"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="flex gap-[13px] mt-8 flex-wrap">
              <a
                href="https://calendly.com/adam-heritagehollowllc/30min"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]"
              >
                Book a Demo
              </a>
              <a
                href="#ai-os"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-px"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right - Observation card */}
          <FadeIn>
            <div className="bg-ink rounded-[22px] overflow-hidden shadow-s4 relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_80%,rgba(10,191,188,.15)_0%,transparent_55%),radial-gradient(ellipse_40%_40%_at_90%_10%,rgba(232,134,10,.1)_0%,transparent_45%)] pointer-events-none" />

              {/* Header */}
              <div className="px-5 py-4 border-b border-white/[.09] flex items-center justify-between relative">
                <div className="flex items-center gap-2.5">
                  <div className="w-[34px] h-[34px] rounded-[9px] bg-teal flex items-center justify-center text-[17px]">👁️</div>
                  <div>
                    <div className="text-sm font-semibold text-white">AI Observation — Butterfly Room</div>
                    <div className="text-[11px] text-white/45">Ms. Johnson · March 5, 10:24am</div>
                  </div>
                </div>
                <span className="text-[10px] bg-[rgba(74,222,128,.2)] text-[#4ade80] px-[9px] py-[3px] rounded-full font-bold border border-[rgba(74,222,128,.3)]">
                  ● Live
                </span>
              </div>

              {/* Photo scene */}
              <div className="relative mx-[18px] mt-4 rounded-[14px] overflow-hidden bg-[#0d2140]">
                <div className="w-full h-[170px] bg-gradient-to-br from-[#1a3a5c] to-[#0f2545] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(13,58,107,.3)] to-[rgba(10,30,60,.7)]" />

                  {/* Table */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[120px] h-10 bg-white/[.12] rounded-lg border border-white/15" />

                  {/* Blocks */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] flex gap-[5px]">
                    <div className="w-4 h-5 rounded-[3px] bg-[#E8860A]" />
                    <div className="w-4 h-3.5 rounded-[3px] bg-teal" />
                    <div className="w-4 h-5 rounded-[3px] bg-[#E8860A] -mt-1.5" />
                    <div className="w-4 h-3 rounded-[3px] bg-ink" />
                  </div>

                  {/* Children */}
                  <div className="absolute bottom-[30px] left-[30%] w-12 h-12 rounded-full flex items-center justify-center text-[28px] bg-white/[.08]">👧</div>
                  <div className="absolute bottom-9 left-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[28px] bg-white/[.08]">👦</div>
                  <div className="absolute bottom-[26px] right-1/4 w-12 h-12 rounded-full flex items-center justify-center text-[28px] bg-white/[.08]">👧</div>

                  {/* Processing badge */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-[rgba(10,191,188,.3)] border border-[rgba(10,191,188,.4)] rounded-full py-1 px-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal" style={{ animation: "pulse2 1.2s ease-in-out infinite" }} />
                    <span className="text-[10px] text-white/80 font-semibold">AI analyzing…</span>
                  </div>

                  {/* Voice badge */}
                  <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 bg-[rgba(232,134,10,.25)] border border-[rgba(232,134,10,.4)] rounded-full py-1 px-2.5">
                    <div className="flex items-center gap-0.5">
                      {[6, 10, 7, 12, 6].map((h, i) => (
                        <div
                          key={i}
                          className="w-0.5 rounded-sm bg-[#f5b144]"
                          style={{
                            height: `${h}px`,
                            animation: "wave 0.8s ease-in-out infinite",
                            animationDelay: `${i * 0.15}s`,
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#f5b144] font-semibold">🎙️ Voice note · 0:14</span>
                  </div>
                </div>
              </div>

              {/* AI Output */}
              <div className="px-[18px] py-3.5 relative">
                <div className="text-[9px] font-bold uppercase tracking-[.1em] text-white/40 mb-2">
                  <svg viewBox="0 0 16 16" fill="none" className="w-2.5 h-2.5 inline mr-1">
                    <path d="M8 1l1.8 4.2L14 6.8l-3.2 2.7.9 4.5L8 11.8 4.3 14l.9-4.5L2 6.8l4.2-1.6L8 1z" fill="white" fillOpacity="0.4" />
                  </svg>
                  AI Draft — Pending Your Review
                </div>
                <div className="bg-white/[.07] border border-white/10 rounded-[11px] p-3.5 text-xs text-white/85 leading-relaxed mb-3">
                  <em className="not-italic text-white font-medium">Lila (3y 4m)</em> appeared engaged in cooperative block play, negotiating placement with peers and demonstrating color-sorting behavior. Maintained focus for an extended period and used verbal direction to coordinate with classmates. <span className="text-white/45 text-[11px] italic">— Edit freely before saving</span>
                </div>

                <div className="text-[9px] font-bold uppercase tracking-[.1em] text-white/40 mb-1">📍 Suggested Milestone Matches — Confirm or Adjust</div>
                <div className="flex flex-col gap-1.5">
                  {milestones.map((ms) => (
                    <div key={ms.text} className="flex items-center gap-2 py-2 px-[11px] bg-white/[.06] border border-white/[.08] rounded-lg">
                      <div className={`w-[7px] h-[7px] rounded-full shrink-0 ${ms.dot}`} />
                      <div className="text-[11px] text-white/80 flex-1">{ms.text}</div>
                      <span className={`text-[9px] font-bold py-0.5 px-[7px] rounded-full whitespace-nowrap ${ms.tagStyle}`}>
                        {ms.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-2.5 px-[18px] py-3 border-t border-white/[.08] bg-black/15">
                <span className="text-[11px] text-white/[.55] flex-1">
                  2 of 4 milestones confirmed · <strong className="text-white/80">Teacher approval required before saving</strong>
                </span>
                <button className="text-[11px] font-bold py-1.5 px-[13px] rounded-[7px] bg-teal text-ink border-none cursor-pointer font-body">
                  Approve &amp; Save →
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
