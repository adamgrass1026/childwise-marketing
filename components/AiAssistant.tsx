import Image from "next/image";
import FadeIn from "./FadeIn";

export default function AiAssistant() {
  return (
    <section className="py-24 bg-white" id="ai">
      <div className="max-w-wrap mx-auto px-9">
        {/* Text content */}
        <div className="text-center max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
            </svg>
            AI-Powered Intelligence
          </div>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight">
            Your staff shouldn&apos;t have to wonder. Now they don&apos;t have to.
          </h2>
          <p className="text-[17px] text-slate leading-[1.75] mt-3.5">
            Licensing question at 6:45am? Your assistant director answers from your own state&apos;s handbook — and points each teacher to the exact training they need. The whole center runs with less second-guessing and more confidence.
          </p>
        </div>

        {/* Full-width screenshot — real answer */}
        <FadeIn>
          <div className="rounded-[22px] overflow-hidden shadow-s3 border border-border mt-12">
            <Image
              src="/images/staff-assistant-answer.png"
              alt="ChildWise Staff Assistant answering a teacher's question about a child biting, with step-by-step guidance grounded in state licensing rules"
              width={1800}
              height={971}
              className="w-full h-auto"
              priority={false}
            />
          </div>
          <p className="text-[13px] text-slate/80 text-center mt-3">
            A real moment: &quot;Please help, I have a child biting&quot; — answered in seconds from your state&apos;s licensing rules, with citations to verify.
          </p>
        </FadeIn>

        {/* Steps + home screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-16">
          <div className="flex flex-col gap-6">
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

          <FadeIn>
            <div className="rounded-[18px] overflow-hidden shadow-s3 border border-border">
              <Image
                src="/images/staff-assistant-home.png"
                alt="ChildWise Staff Assistant home screen with suggested topics including staff-to-child ratios, emergency procedures, professional development courses, and medication administration"
                width={1800}
                height={971}
                className="w-full h-auto"
              />
            </div>
            <p className="text-[13px] text-slate/80 text-center mt-3">
              Policies, licensing rules, and the ChildWise Learning catalog — one place to ask.
            </p>
          </FadeIn>
        </div>

        {/* CTAs */}
        <div className="flex gap-[13px] mt-12 flex-wrap justify-center">
          <a href="https://calendly.com/adam-childwise/30min" className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]">
            Book a Demo
          </a>
          <a href="https://calendly.com/adam-childwise/30min" className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white hover:-translate-y-px">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
