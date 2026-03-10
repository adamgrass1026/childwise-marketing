import FadeIn from "./FadeIn";

const beforeTools = [
  {
    icon: "🖥️",
    iconBg: "rgba(27,58,107,.08)",
    name: "Center Management Software",
    sub: "Scheduling, billing, attendance",
    price: "~$120/mo",
  },
  {
    icon: "🎓",
    iconBg: "rgba(232,134,10,.1)",
    name: "Separate CEU Training Platform",
    sub: "Teaching Strategies, etc.",
    price: "~$80/mo",
  },
  {
    icon: "📋",
    iconBg: "rgba(13,143,171,.08)",
    name: "Compliance Tracking",
    sub: "Spreadsheets or bolt-on tools",
    price: "~$40/mo",
  },
  {
    icon: "😫",
    iconBg: "rgba(220,38,38,.08)",
    name: "Manual Scheduling Time",
    sub: "Director hours every week",
    price: "Priceless",
  },
];

const includes = [
  "Center management — scheduling, billing, attendance, messaging",
  "AI staff assistant — answers questions, links to training instantly",
  { text: "Accredited CEU training — built in, no separate subscription", bold: true },
  { text: "CDA credential pathway — included", bold: true },
  "Automatic CEU compliance tracking — zero manual logging",
  "AI observations, predictive enrollment, incident reporting",
];

export default function Consolidation() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-wrap mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-[60px]">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-teal-pale border border-[rgba(13,143,171,.2)] rounded-full mb-[18px]">
              The only platform of its kind
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-navy leading-[1.1] tracking-tight">
              Every other platform sends you somewhere else for training.<br />
              ChildWise <em className="italic text-teal">is</em> the training.
            </h2>
            <p className="text-[17px] text-t2 leading-[1.75] mt-3.5 mx-auto max-w-[560px]">
              Accredited CEU courses — including a full CDA credential pathway — are built directly into ChildWise. No second subscription. No separate login. No hours lost to another platform. Nothing like this exists anywhere else in childcare.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-8 items-center mb-12">
            {/* BEFORE */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-t3 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#dc2626] inline-block" />
                What most directors pay today
              </div>
              {beforeTools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between px-5 py-4 bg-white border border-border rounded-xl shadow-s1 opacity-55"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-[9px] flex items-center justify-center text-lg shrink-0"
                      style={{ background: tool.iconBg }}
                    >
                      {tool.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-navy">{tool.name}</div>
                      <div className="text-[11px] text-t3 mt-px">{tool.sub}</div>
                    </div>
                  </div>
                  <div className="font-heading text-lg font-semibold text-t3 line-through">{tool.price}</div>
                </div>
              ))}
              <div className="flex items-center justify-between px-5 py-4 bg-[#fee2e2] border border-[rgba(220,38,38,.2)] rounded-xl">
                <div className="text-sm font-bold text-[#dc2626]">Total monthly cost</div>
                <div className="font-heading text-2xl font-bold text-[#dc2626]">$240+/mo — and still incomplete</div>
              </div>
            </div>

            {/* ARROW */}
            <div className="flex flex-row lg:flex-col items-center justify-center gap-2 py-2 lg:py-0">
              <div className="w-[60px] h-0.5 lg:w-0.5 lg:h-[60px] bg-gradient-to-r lg:bg-gradient-to-b from-border to-teal" />
              <div className="text-2xl">→</div>
              <div className="text-[11px] font-bold text-teal uppercase tracking-[.1em] text-center">
                Replace<br />it all
              </div>
              <div className="w-[60px] h-0.5 lg:w-0.5 lg:h-[60px] bg-gradient-to-r lg:bg-gradient-to-b from-teal to-border" />
            </div>

            {/* AFTER */}
            <div className="flex flex-col gap-3">
              <div className="text-[10px] font-extrabold uppercase tracking-[.14em] text-teal mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal inline-block" />
                With ChildWise Professional
              </div>
              <div className="bg-gradient-to-br from-navy to-[#1e4282] rounded-[20px] p-7 shadow-s4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_100%_0%,rgba(13,143,171,.25)_0%,transparent_55%)]" />

                {/* Logo */}
                <div className="flex items-center gap-2.5 mb-5 relative">
                  <div className="w-8 h-8 rounded-lg bg-white/[.12] flex items-center justify-center">
                    <svg viewBox="0 0 20 20" fill="none" className="w-[17px] h-[17px]">
                      <path
                        d="M10 2C7.5 2 5.5 3.8 5.5 6c0 1.4.8 2.6 1.9 3.3C5.5 10 4 11.8 4 14h12c0-2.2-1.5-4-3.4-4.7C13.7 8.6 14.5 7.4 14.5 6 14.5 3.8 12.5 2 10 2z"
                        fill="white"
                      />
                      <circle cx="16" cy="15" r="3" fill="#0D8FAB" />
                    </svg>
                  </div>
                  <span className="font-heading text-xl font-semibold text-white">
                    Child<span className="text-teal">Wise</span>
                  </span>
                  <span className="text-[10px] bg-teal text-white px-[9px] py-[3px] rounded-full font-extrabold tracking-wider">
                    ALL-IN-ONE
                  </span>
                </div>

                {/* Includes */}
                <div className="flex flex-col gap-2 mb-5 relative">
                  {includes.map((inc, i) => {
                    const text = typeof inc === "string" ? inc : inc.text;
                    const bold = typeof inc !== "string" && inc.bold;
                    return (
                      <div key={i} className="flex items-center gap-2.5 text-[13px] text-white/85">
                        <div className="w-[18px] h-[18px] rounded-full bg-teal flex items-center justify-center text-[10px] shrink-0">
                          <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                            <path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {bold ? <strong className="text-white">{text}</strong> : text}
                      </div>
                    );
                  })}
                </div>

                {/* Price */}
                <div className="flex items-end justify-between pt-[18px] border-t border-white/10 relative">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[22px] font-semibold text-white mt-[5px]">$</span>
                    <span className="font-heading text-[52px] font-semibold text-white leading-none tracking-tight">149</span>
                    <span className="text-sm text-white/50">/mo</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-white/50 mb-0.5">You save at least</div>
                    <div className="font-heading text-[22px] font-semibold text-[#4ade80]">$90+/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center p-7 bg-white border border-border rounded-card shadow-s1">
            <div className="font-heading text-[clamp(18px,2.5vw,24px)] font-semibold text-navy leading-[1.4] mb-2">
              No other childcare platform includes accredited CEU training.<br />
              <em className="italic text-teal">ChildWise is the only one.</em>
            </div>
            <div className="text-sm text-t3">
              And the only one where your AI assistant links directly to that training the moment a teacher needs it.
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
