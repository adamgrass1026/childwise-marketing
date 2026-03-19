import Link from "next/link";
import FadeIn from "./FadeIn";

const beforeItems = [
  { icon: "😩", title: "Sunday nights rebuilding the schedule", text: "Calling staff, checking availability, manually balancing ratios — every single week. Hoping nobody calls out Monday morning." },
  { icon: "📋", title: "Paperwork that never ends", text: "Incident reports on paper, attendance in binders, billing in spreadsheets. One licensing inspector and you're scrambling for hours." },
  { icon: "😰", title: "Dreading the licensing audit", text: "You think your staff training hours are current. You think. But you're not certain — and that uncertainty costs you sleep." },
  { icon: "🌀", title: "Reacting to everything", text: "A spot opens and you don't know until a family leaves. An enrollment gap hits your revenue before you even saw it coming." },
  { icon: "💔", title: "Barely time for the children", text: "You became a director because you love this work. But most days you barely step foot in a classroom — you're buried in administration." },
];

const afterItems = [
  { icon: "✅", title: "Schedule built before Monday arrives", text: "Parents submit their times. ChildWise builds the schedule automatically — compliant, optimized, ready. You confirm in five minutes." },
  { icon: "⚡", title: "Everything documented, instantly", text: "Incident reports, attendance, billing, observations — digital, searchable, audit-ready. An inspector walks in and you open a laptop." },
  { icon: "🛡️", title: "Audits you actually look forward to", text: "Every training hour tracked. Every certification current. AI alerts you weeks before anything lapses. You walk in confident." },
  { icon: "📈", title: "Ahead of enrollment shifts — always", text: "AI predicts openings weeks out, surfaces waitlisted families, and helps you plan staffing before the gap ever hits your revenue." },
  { icon: "❤️", title: "Back in the classroom where you belong", text: "Directors tell us they spend more time with children and staff in the first month than they had in the previous year." },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_60%_at_100%_50%,rgba(10,191,188,.1)_0%,transparent_55%),radial-gradient(ellipse_40%_40%_at_0%_0%,rgba(27,108,168,.07)_0%,transparent_50%)]" />

      <div className="max-w-wrap mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-[60px] relative">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-white/90 px-3.5 py-[5px] bg-white/[.12] border border-white/25 rounded-full mb-[18px]">
              The honest truth
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-white leading-[1.1] tracking-tight">
              What running a childcare center<br />actually looks like — before and after ChildWise
            </h2>
            <p className="text-[17px] text-white/60 leading-[1.75] mt-3.5 mx-auto max-w-[520px]">
              Directors who switch tell us the same thing: they didn&apos;t realize how much time they were losing until it came back.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[3px] rounded-[20px] overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-ink border-2 border-white/15 rounded-full flex items-center justify-center text-[11px] font-extrabold text-white/50 tracking-wider hidden sm:flex">
              VS
            </div>

            <div className="p-8 bg-ink-mid rounded-t-[20px] sm:rounded-l-[20px] sm:rounded-tr-none">
              <div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-white/30 mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                Before ChildWise
              </div>
              <div className="flex flex-col gap-3.5">
                {beforeItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3.5 px-4 rounded-xl bg-white/[.04] border border-white/[.06]">
                    <div className="text-lg shrink-0 mt-px">{item.icon}</div>
                    <div className="text-sm leading-[1.55] text-white/55">
                      <strong className="block text-[13px] font-bold text-white/40 mb-0.5">{item.title}</strong>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#0a3a4a] to-ink-light rounded-b-[20px] sm:rounded-r-[20px] sm:rounded-bl-none">
              <div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-teal mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal" />
                After ChildWise
              </div>
              <div className="flex flex-col gap-3.5">
                {afterItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3.5 px-4 rounded-xl bg-[rgba(10,191,188,.1)] border border-[rgba(10,191,188,.18)]">
                    <div className="text-lg shrink-0 mt-px">{item.icon}</div>
                    <div className="text-sm leading-[1.55] text-white/85">
                      <strong className="block text-[13px] font-bold text-white mb-0.5">{item.title}</strong>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mt-12 relative">
            <p className="font-heading text-[clamp(20px,3vw,28px)] font-semibold text-white leading-[1.3] mb-7">
              The work you do is <em className="italic text-teal">too important</em><br />
              to be buried under the work you do to do it.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Link
                href="https://app.childwisesoftware.com/login"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]"
              >
                Start Free Trial →
              </Link>
              <Link
                href="https://app.childwisesoftware.com/login"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:-translate-y-px"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
