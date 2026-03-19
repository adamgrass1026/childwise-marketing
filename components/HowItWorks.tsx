import FadeIn from "./FadeIn";

const steps = [
  { num: "1", title: "Import your data", desc: "Bring children, families, and staff from your current system. We handle the migration.", color: "bg-teal" },
  { num: "2", title: "Configure your center", desc: "Set up classrooms, ratios, billing schedules, and your state's licensing requirements.", color: "bg-ink" },
  { num: "3", title: "Invite your team", desc: "Add directors, teachers, and office staff with role-based permissions in minutes.", color: "bg-[#E8860A]" },
  { num: "4", title: "Let ChildWise run", desc: "Schedules build themselves, training tracks itself, AI keeps watch. You just lead.", color: "bg-gradient-to-br from-teal to-ink" },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F0F7FC]">
      <div className="max-w-wrap mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-[60px]">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              Getting started
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight">
              Up and running in days
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3 mx-auto max-w-[460px]">
              We handle the migration so your team gets back to children faster.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[26px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px bg-gradient-to-r from-teal to-ink opacity-[.18]" />

          {steps.map((step, i) => (
            <FadeIn key={step.num} delay={i as 0 | 1 | 2 | 3}>
              <div className="text-center px-2.5">
                <div className={`w-[52px] h-[52px] rounded-full flex items-center justify-center font-heading text-xl font-semibold text-white mx-auto mb-[18px] relative z-[1] ${step.color}`}>
                  {step.num}
                </div>
                <div className="font-heading text-base font-semibold text-ink mb-[7px]">{step.title}</div>
                <p className="text-[13px] text-slate leading-relaxed">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
