import FadeIn from "./FadeIn";

const testimonials = [
  {
    text: "The auto-scheduling alone saved me 8 hours a week. I used to spend every Sunday building the schedule from scratch. Now ChildWise builds it from parent submissions and I spend five minutes confirming. It genuinely changed how I spend my weekends.",
    name: "Sarah Mitchell",
    role: "Director · Sunshine Learning Center · Tampa, FL",
    avatar: "S",
    avatarBg: "bg-teal-pale",
    avatarColor: "text-teal",
    featured: false,
  },
  {
    text: "We had a state licensing audit two months after switching. The inspector was genuinely impressed — every training hour, incident report, and attendance record was right there. We passed with zero findings for the first time in years. ChildWise made us audit-proof.",
    name: "Dr. Diana Reyes",
    role: "Owner · Little Wonders Academy · Austin, TX",
    avatar: "D",
    avatarBg: "bg-white/[.12]",
    avatarColor: "text-white",
    featured: true,
  },
  {
    text: "The AI training assistant changed how my staff grows. A new teacher asked about a child's developmental concern — the AI answered her and linked her to the exact CDA course. That kind of instant, relevant guidance is something I used to provide manually for hours.",
    name: "Marcus Thompson",
    role: "Director · Bright Futures CDC · Atlanta, GA",
    avatar: "M",
    avatarBg: "bg-amber-pale",
    avatarColor: "text-amber",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-wrap mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-[52px]">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-teal-pale border border-[rgba(13,143,171,.2)] rounded-full mb-[18px]">
              From directors like you
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-navy leading-[1.1] tracking-tight">
              Centers that run better with ChildWise
            </h2>
            <p className="text-[17px] text-t2 leading-[1.75] mt-3 mx-auto max-w-[480px]">
              Real results from directors who made the switch.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[22px]">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i as 0 | 1 | 2}>
              <div
                className={`p-7 rounded-card border transition-all duration-200 ${
                  t.featured
                    ? "bg-gradient-to-br from-navy to-navy-mid border-transparent hover:shadow-s3"
                    : "bg-white border-border hover:shadow-s3 hover:-translate-y-0.5"
                }`}
              >
                <div className={`text-[13px] mb-3 ${t.featured ? "text-white/40" : "text-amber"}`}>★★★★★</div>
                <div className={`font-heading text-[32px] leading-none mb-3 ${t.featured ? "text-white/25" : "text-teal"}`}>&ldquo;</div>
                <p className={`text-[13px] leading-[1.75] italic mb-5 ${t.featured ? "text-white/80" : "text-t2"}`}>
                  {t.text}
                </p>
                <div className="flex items-center gap-2.5">
                  <div className={`w-[38px] h-[38px] rounded-full flex items-center justify-center font-heading text-[15px] font-semibold shrink-0 ${t.avatarBg} ${t.avatarColor}`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className={`text-[13px] font-semibold ${t.featured ? "text-white" : "text-t1"}`}>{t.name}</div>
                    <div className={`text-[11px] ${t.featured ? "text-white/40" : "text-t3"}`}>{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
