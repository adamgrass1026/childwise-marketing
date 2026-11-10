import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Scheduler() {
  return (
    <section className="py-24 bg-[#F0F7FC] relative overflow-hidden" id="sched">
      <div className="max-w-wrap mx-auto px-9">
        {/* Text content */}
        <div className="text-center max-w-[680px] mx-auto">
          <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
              <path d="M8 2a5.5 5.5 0 00-2 10.6V14l2-1.5 2 1.5v-1.4A5.5 5.5 0 008 2z" fill="#E8860A" />
            </svg>
            Game-Changing Feature
          </div>
          <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight">
            No more Sunday nights rebuilding next week&apos;s schedule
          </h2>
          <p className="text-[17px] text-slate leading-[1.75] mt-3.5">
            Your assistant director builds next week&apos;s schedule around ratios, time off, and your rules — before you&apos;ve finished your coffee. You review and confirm in minutes. That&apos;s it.
          </p>
        </div>

        {/* Full-width screenshot — room week */}
        <FadeIn>
          <div className="rounded-[22px] overflow-hidden shadow-s3 border border-border mt-12">
            <Image
              src="/images/schedule-room-week.png"
              alt="ChildWise Schedule screen showing a room's week — every child's expected hours and the staff shifts built to cover them"
              width={1800}
              height={971}
              className="w-full h-auto"
              priority={false}
            />
          </div>
          <p className="text-[13px] text-slate/80 text-center mt-3">
            Every child&apos;s expected hours and the staff shifts built to cover them — one room, one week, always within ratio.
          </p>
        </FadeIn>

        {/* Parent app + printables */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-14 items-center mt-16">
          <FadeIn className="lg:col-span-2">
            <div className="flex flex-col items-center">
              <div className="rounded-[26px] overflow-hidden shadow-s3 border border-border max-w-[380px]">
                <Image
                  src="/images/parent-usual-hours.png"
                  alt="ChildWise parent app screen where families set the usual weekly hours their child attends"
                  width={900}
                  height={1584}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[13px] text-slate/80 text-center mt-3 max-w-[340px]">
                Parents set usual hours — or week-by-week changes — right in the parent app. No phone calls, no paper forms.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={1} className="lg:col-span-3">
            <div>
              <div className="rounded-[16px] overflow-hidden shadow-s3 border border-border">
                <Image
                  src="/images/schedule-print-room.png"
                  alt="Print-ready weekly room schedule with children's expected hours, staff shifts, and a director sign-off line"
                  width={1600}
                  height={1235}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-[13px] text-slate/80 text-center mt-3">
                …and the week prints itself: the room&apos;s schedule with a director sign-off line, ready for the clipboard.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Staff hours printable */}
        <FadeIn>
          <div className="max-w-[880px] mx-auto mt-14">
            <div className="rounded-[16px] overflow-hidden shadow-s3 border border-border">
              <Image
                src="/images/schedule-print-staff.png"
                alt="Print-ready center-wide staff hours sheet for the week"
                width={1600}
                height={1212}
                className="w-full h-auto"
              />
            </div>
            <p className="text-[13px] text-slate/80 text-center mt-3">
              Center-wide staff hours for the week, one click to print — ready for payroll or the licensing visit.
            </p>
          </div>
        </FadeIn>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
          {[
            { icon: "👨‍👩‍👧", title: "Parents drive the schedule", desc: "Families submit weekly times through the parent app — ChildWise does the rest. No phone calls, no guessing." },
            { icon: "⚡", title: "AI builds, you approve in minutes", desc: "Instant schedule generation accounting for qualifications, state ratios, overtime rules, and staff availability." },
            { icon: "📋", title: "Always ratio-compliant", desc: "ChildWise knows your state's child-to-staff ratio rules. Every schedule is compliant before it reaches your desk." },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i as 0 | 1 | 2}>
              <div className="flex gap-[13px] items-start p-[18px] bg-white border border-border rounded-[13px] shadow-s1 transition-all duration-200 hover:shadow-s2 h-full">
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

        {/* CTAs */}
        <div className="flex gap-[13px] mt-10 flex-wrap justify-center">
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
