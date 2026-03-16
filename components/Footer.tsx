import Link from "next/link";

const footerColumns = [
  {
    title: "AI Features",
    links: [
      { label: "Auto Staff Scheduling", href: "#sched" },
      { label: "AI Assistant", href: "#ai" },
      { label: "AI Observations", href: "#observations" },
      { label: "Training Compliance", href: "#training" },
      { label: "Predictive Enrollment", href: "#enrollment" },
      { label: "ChildWise Learning", href: "https://childwiselearning.com" },
      { label: "CDA Pathway", href: "#training" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Child Management", href: "#" },
      { label: "Attendance", href: "#" },
      { label: "Billing & Invoicing", href: "#" },
      { label: "Parent Messaging", href: "#" },
      { label: "Incident Reports", href: "#" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "https://app.childwisesoftware.com/login" },
      { label: "Security & HIPAA", href: "#" },
      { label: "ChildWise Learning ↗", href: "https://childwiselearning.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1827] text-white pt-[68px] pb-[34px]">
      <div className="max-w-wrap mx-auto px-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-11 mb-14">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-[13px]">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-white/[.08] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-[19px] h-[19px]">
                  <path
                    d="M10 2C7.5 2 5.5 3.8 5.5 6c0 1.4.8 2.6 1.9 3.3C5.5 10 4 11.8 4 14h12c0-2.2-1.5-4-3.4-4.7C13.7 8.6 14.5 7.4 14.5 6 14.5 3.8 12.5 2 10 2z"
                    fill="white"
                  />
                  <circle cx="16" cy="15" r="3" fill="#0D8FAB" />
                </svg>
              </div>
              <span className="font-heading text-[19px] font-semibold text-white">
                Child<span className="text-teal">Wise</span>
              </span>
            </Link>
            <p className="text-sm text-white/45 leading-[1.7] my-3 mb-5">
              The complete childcare management platform for directors who want to spend less time on paperwork and more time with children.
            </p>
            <a
              href="https://childwiselearning.com"
              className="inline-flex items-center gap-[7px] px-3.5 py-[9px] bg-[rgba(13,143,171,.13)] border border-[rgba(13,143,171,.27)] rounded-[9px] text-xs font-medium text-[#5dd0e8] no-underline transition-all duration-150 hover:bg-[rgba(13,143,171,.22)]"
            >
              🎓 &nbsp;ChildWise Learning — Accredited CEU &amp; CDA Training →
            </a>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="text-[10px] font-bold uppercase tracking-[.12em] text-white/[.33] mb-4">
                {col.title}
              </div>
              <ul className="list-none flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="text-[13px] text-white/50 no-underline transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-[13px] text-white/50 no-underline transition-colors duration-150 hover:text-white"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[.07] pt-[26px] flex items-center justify-between flex-wrap gap-3.5">
          <div className="text-xs text-white/30">© 2026 ChildWise Software. All rights reserved.</div>
          <div className="flex items-center gap-[7px] text-[11px] text-white/[.28]">
            <span>childwisesoftware.com</span>
            <div className="w-1 h-1 bg-white/20 rounded-full" />
            <a href="https://childwiselearning.com" className="text-white/[.28] no-underline">
              childwiselearning.com
            </a>
          </div>
          <div className="flex gap-5">
            {["Privacy", "Terms", "HIPAA", "Security"].map((link) => (
              <a key={link} href="#" className="text-xs text-white/30 no-underline hover:text-white/60">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
