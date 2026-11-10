import Image from "next/image";
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

export default function Observations() {
  return (
    <section className="py-24 bg-[#F0F7FC]" id="observations">
      <div className="max-w-wrap mx-auto px-9">
        {/* Text content */}
        <div className="text-center max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
            </svg>
            Teachers Will Love This
          </div>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight">
            Teachers should be watching children — not writing about them
          </h2>
          <p className="text-[17px] text-slate leading-[1.75] mt-3.5">
            Your assistant director matches every observation to your state&apos;s learning benchmarks and builds each child&apos;s portfolio automatically — the teacher just reviews and confirms. The documentation gets done. The teacher stays present.
          </p>
        </div>

        {/* Full-width screenshot */}
        <FadeIn>
          <div className="rounded-[22px] overflow-hidden shadow-s3 border border-border mt-12">
            <Image
              src="/images/observations-review-drafts.png"
              alt="ChildWise Review Drafts screen showing AI-drafted observations from feed photos queued for teacher review, each matched to learning benchmarks"
              width={1800}
              height={971}
              className="w-full h-auto"
              priority={false}
            />
          </div>
          <p className="text-[13px] text-slate/80 text-center mt-3">
            AI-drafted from the day&apos;s photos — nothing reaches a family or a portfolio without the teacher&apos;s confirmation.
          </p>
        </FadeIn>

        {/* Point cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
          {points.map((item, i) => (
            <FadeIn key={item.title} delay={i as 0 | 1 | 2 | 3}>
              <div className="flex gap-3.5 items-start p-[18px] bg-white border border-border rounded-[13px] transition-all duration-200 hover:shadow-s2 hover:translate-y-[-2px] h-full">
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

        {/* CTAs */}
        <div className="flex gap-[13px] mt-10 flex-wrap justify-center">
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
    </section>
  );
}
