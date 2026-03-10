import FadeIn from "./FadeIn";

const cells = [
  {
    num: "01",
    icon: "📅",
    title: "Built your schedule before Monday arrived",
    desc: 'Parents submitted their drop-off and pickup times. ChildWise built a <strong>fully compliant staff schedule</strong> — right ratios, zero overtime — and left it on your desk to confirm.',
    tag: "Auto Scheduling",
  },
  {
    num: "02",
    icon: "🤖",
    title: "Answered your teacher's question — and taught her something",
    desc: 'A teacher asked how to handle a child\'s emotional outburst. AI answered her — and <strong>linked directly to the accredited training module</strong> that covers it. She\'s already enrolled.',
    tag: "AI Assistant",
  },
  {
    num: "03",
    icon: "🏠",
    title: "Onboarded a new family — without the director sending a single email",
    desc: 'A waitlisted family accepted their spot. ChildWise instantly sent a <strong>pre-filled intake form, document checklist, and start-date timeline</strong> — and is tracking every missing form so you don\'t have to.',
    tag: "Enrollment Intake",
  },
  {
    num: "04",
    icon: "👁️",
    title: "Drafted Lila's developmental observation from a photo",
    desc: 'Her teacher snapped a photo during block play and left a voice note. AI drafted the observation, <strong>suggested four developmental milestones</strong>, and is waiting for the teacher to review and confirm.',
    tag: "AI Observations",
  },
  {
    num: "05",
    icon: "📈",
    title: "Flagged an enrollment gap — six weeks before it hits revenue",
    desc: 'Three Toddler Room families are predicted to age out by May. ChildWise <strong>surfaced three waitlisted families</strong> that match perfectly and suggested you reach out this week.',
    tag: "Predictive Enrollment",
  },
  {
    num: "06",
    icon: "⚠️",
    title: "Caught that Ms. Davis is 2 hours short of her required annual CEUs",
    desc: 'Her renewal is in 23 days. ChildWise caught it, <strong>identified the right course, and queued it for her</strong> — before you knew there was anything to worry about.',
    tag: "Training Compliance",
  },
];

export default function AiOs() {
  return (
    <section className="py-24 bg-navy-dk relative overflow-hidden" id="ai-os">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(13,143,171,.15)_0%,transparent_55%),radial-gradient(ellipse_40%_40%_at_5%_90%,rgba(232,134,10,.08)_0%,transparent_50%)]" />

      <div className="max-w-wrap mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-white/90 px-3.5 py-[5px] bg-white/[.12] border border-white/25 rounded-full mb-[18px]">
              ChildWise AI
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-white leading-[1.1] tracking-tight max-w-[700px] mx-auto">
              Six things happening in your center right now — none of them requiring you
            </h2>
            <p className="text-[17px] text-white/60 leading-[1.75] mt-4 mx-auto max-w-[580px]">
              Most software waits for you to act. ChildWise AI runs underneath everything — watching, building, guiding, and catching — while you lead.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/[.06] rounded-[20px] overflow-hidden mb-12">
            {cells.map((cell) => (
              <div
                key={cell.num}
                className="bg-navy-dk p-7 relative transition-colors duration-200 hover:bg-[#0f2040] group"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="font-heading text-[13px] font-semibold text-white/20 mb-4 tracking-wider">
                  {cell.num}
                </div>
                <span className="text-[28px] mb-3.5 block">{cell.icon}</span>
                <div className="font-heading text-lg font-semibold text-white leading-[1.2] mb-2.5 tracking-tight">
                  {cell.title}
                </div>
                <p
                  className="text-[13px] text-white/55 leading-[1.65] [&_strong]:text-white/85 [&_strong]:font-medium"
                  dangerouslySetInnerHTML={{ __html: cell.desc }}
                />
                <span className="inline-flex items-center gap-[5px] mt-3.5 text-[10px] font-bold tracking-wider uppercase text-teal px-2.5 py-[3px] bg-[rgba(13,143,171,.15)] rounded-full border border-[rgba(13,143,171,.25)]">
                  {cell.tag}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center p-12 bg-white/[.03] border border-white/[.07] rounded-[20px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(13,143,171,.1)_0%,transparent_60%)]" />
            <p className="font-heading text-[clamp(18px,2.5vw,26px)] font-medium text-white leading-[1.5] mb-1.5 relative">
              All six happened today. In every center running ChildWise.<br />
              <em className="italic text-teal">Without a single director lifting a finger.</em>
            </p>
            <p className="text-sm text-white/40 relative">
              This is what an intelligent operating system looks like.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
