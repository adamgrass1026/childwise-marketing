import Link from "next/link";
import FadeIn from "./FadeIn";

const cdaCourses = [
  { icon: "🧒", iconBg: "bg-teal-pale", name: "Child Development Milestones", meta: "3.0 CEU hrs · CDA Unit 1 · Accredited", status: "complete" },
  { icon: "🚨", iconBg: "bg-amber-pale", name: "Health, Safety & Nutrition", meta: "2.5 CEU hrs · CDA Unit 2 · Accredited", progress: 72 },
  { icon: "🌱", iconBg: "bg-[#e8faf0]", name: "Nurturing Early Literacy", meta: "2.0 CEU hrs · CDA Unit 3 · Accredited", progress: 0 },
  { icon: "🤝", iconBg: "bg-[rgba(27,58,107,.07)]", name: "Family & Community Relations", meta: "1.5 CEU hrs · CDA Unit 4 · Accredited", status: "complete" },
];

const compliance = [
  { name: "Ms. Johnson", hours: "18 / 20 hrs · renewal Apr 15", status: "warn", label: "2 hrs needed" },
  { name: "Mr. Torres", hours: "20 / 20 hrs · renewal May 1", status: "ok", label: "✓ Complete" },
  { name: "Ms. Davis", hours: "8 / 10 hrs · renewal Mar 28", status: "due", label: "⚠ Urgent" },
];

const statusColors: Record<string, string> = {
  ok: "bg-[#e8f9f0] text-[#15803d]",
  warn: "bg-amber-pale text-[#c05c00]",
  due: "bg-[#fee2e2] text-[#dc2626]",
};

export default function Training() {
  return (
    <section className="py-24 bg-cream" id="training">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left text */}
          <div>
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-amber px-3.5 py-[5px] bg-amber-pale border border-[rgba(232,134,10,.25)] rounded-full mb-[18px]">
              🎓 Accredited Training Platform
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-navy leading-[1.1] tracking-tight max-w-[500px]">
              Never walk into a licensing audit wondering if your staff hours are current
            </h2>
            <p className="text-[17px] text-t2 leading-[1.75] mt-3.5 max-w-[500px]">
              ChildWise Learning tracks every training hour, every certification, every renewal deadline — automatically. Directors get alerts weeks before anything lapses. And staff can earn a CDA credential without ever leaving your platform.
            </p>

            {/* CDA Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-br from-amber-pale to-[#fff9f0] border border-[rgba(232,134,10,.25)] rounded-xl p-3 px-4 mt-[22px] mb-1.5">
              <div className="text-[22px]">🏆</div>
              <div>
                <div className="text-sm font-bold text-navy">CDA Credential Pathway Available</div>
                <div className="text-xs text-t3 mt-px">State-approved, accredited modules that count toward the Child Development Associate — the gold standard in early childhood education</div>
              </div>
            </div>

            <div className="flex flex-col gap-3.5 mt-[26px]">
              {[
                { text: '<strong>AI-linked answers</strong> — Staff get answers to childcare questions with direct links to the exact training module, automatically logged for compliance.' },
                { text: '<strong>Auto compliance tracking</strong> — Every CEU hour syncs to staff profiles in real time. Licensing audits become a formality, not a panic.' },
                { text: '<strong>CDA pathway courses</strong> — Accredited modules that build toward the Child Development Associate credential — motivating staff to grow their careers at your center.' },
                { text: '<strong>Proactive renewal alerts</strong> — Directors are notified weeks before a staff member\'s hours fall short — never the morning of their renewal.' },
                { text: '<strong>Single sign-on</strong> — Staff access ChildWise Learning directly through ChildWise. One platform, one login, zero friction.' },
              ].map((item, i) => (
                <FadeIn key={i} delay={i as 0 | 1 | 2 | 3 | 4}>
                  <div className="flex items-start gap-[11px]">
                    <div className="w-[21px] h-[21px] rounded-full bg-teal flex items-center justify-center text-[10px] text-white font-bold shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                        <path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div
                      className="text-sm text-t2 leading-[1.55] [&_strong]:text-navy"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="flex gap-[13px] mt-8 flex-wrap">
              <a
                href="https://childwiselearning.com"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-white hover:bg-teal-lt hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(13,143,171,.35)]"
              >
                Explore ChildWise Learning →
              </a>
              <Link
                href="https://app.childwisesoftware.com/login"
                className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-navy bg-transparent text-navy hover:bg-navy hover:text-white hover:-translate-y-px"
              >
                View CDA Pathway
              </Link>
            </div>
          </div>

          {/* Right - Learning card */}
          <FadeIn>
            <div className="border border-border rounded-[22px] overflow-hidden shadow-s3">
              {/* Header */}
              <div className="bg-navy px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="font-heading text-[15px] font-semibold text-white">
                    Child<span className="text-teal">Wise</span> Learning
                  </span>
                  <span className="text-[9px] bg-teal text-white px-2 py-0.5 rounded-full font-extrabold tracking-wider">
                    LIVE
                  </span>
                </div>
                <span className="text-[11px] text-white/30">childwiselearning.com</span>
              </div>

              {/* CDA Pathway */}
              <div className="px-[18px] py-3.5 border-b border-border">
                <div className="text-[9px] font-bold uppercase tracking-[.1em] text-t3 mb-2.5">🏆 CDA Pathway — Ms. Johnson</div>
                {cdaCourses.map((course) => (
                  <div key={course.name} className="flex items-center gap-2.5 py-[9px] border-b border-[#f5f3f0] last:border-b-0">
                    <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center text-lg shrink-0 ${course.iconBg}`}>
                      {course.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-t1">{course.name}</div>
                      <div className="text-[10px] text-t3 mt-px">{course.meta}</div>
                    </div>
                    <div className="ml-auto text-right">
                      {course.status === "complete" ? (
                        <div className="text-[9px] text-[#15803d] font-bold">✓ Complete</div>
                      ) : (
                        <>
                          <div className="w-[52px] h-1 bg-border rounded-sm overflow-hidden mb-0.5">
                            <div className="h-full bg-teal rounded-sm" style={{ width: `${course.progress}%` }} />
                          </div>
                          <div className="text-[9px] text-t3 font-semibold">
                            {course.progress === 0 ? "Not started" : `${course.progress}%`}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compliance */}
              <div className="px-[18px] py-3.5">
                <div className="text-[9px] font-bold uppercase tracking-[.1em] text-t3 mb-2.5">Staff Compliance — March 2026</div>
                {compliance.map((row) => (
                  <div key={row.name} className="flex items-center justify-between py-[7px] border-b border-[#f5f3f0] last:border-b-0">
                    <div>
                      <div className="text-[11px] font-medium text-t1">{row.name}</div>
                      <div className="text-[10px] text-t3 mt-px">{row.hours}</div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${statusColors[row.status]}`}>
                      {row.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-[18px] py-[13px] bg-gradient-to-r from-[rgba(232,134,10,.06)] to-[rgba(232,134,10,.1)] border-t border-[rgba(232,134,10,.15)] flex items-center gap-[9px]">
                <span className="text-[17px]">📊</span>
                <div className="text-xs text-amber font-medium flex-1">
                  <strong>Team compliance this quarter</strong><br />9 of 12 staff fully current · 3 need hours
                </div>
                <div className="font-heading text-[22px] font-semibold text-amber">75%</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
