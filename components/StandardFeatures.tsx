import FadeIn from "./FadeIn";

const features = [
  { icon: "👶", title: "Child & Family Management", desc: "Complete profiles, medical records, authorized pickups, and family communication in one place." },
  { icon: "✅", title: "Attendance Tracking", desc: "Digital check-in, real-time rosters, absence alerts, and licensing-ready attendance reports." },
  { icon: "💳", title: "Billing & Invoicing", desc: "Automated tuition, subsidy management, online payments, and late fees — zero paperwork." },
  { icon: "💬", title: "Parent Messaging", desc: "Secure in-app messaging, daily reports, photo sharing, and emergency alerts." },
  { icon: "🚨", title: "Incident Reporting", desc: "Digital reports with photos, parent notifications, and a full audit trail for inspectors." },
  { icon: "👥", title: "Ratio Management", desc: "Real-time ratio monitoring with alerts before any classroom goes out of compliance." },
  { icon: "📊", title: "Reports & Analytics", desc: "Director dashboards, licensing reports, and financial summaries ready in seconds." },
  { icon: "🔒", title: "HIPAA-Compliant Security", desc: "End-to-end encryption, role-based access, and SOC 2 compliance protecting every child record." },
];

export default function StandardFeatures() {
  return (
    <section className="py-24 bg-[#F0F7FC]">
      <div className="max-w-wrap mx-auto px-9">
        <FadeIn>
          <div className="text-center mb-11">
            <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-teal px-3.5 py-[5px] bg-mist border border-[rgba(10,191,188,.2)] rounded-full mb-[18px]">
              Complete platform
            </div>
            <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-ink leading-[1.1] tracking-tight">
              Everything else your center needs — included
            </h2>
            <p className="text-[17px] text-slate leading-[1.75] mt-3 mx-auto max-w-[500px]">
              Every core tool that runs a childcare center, in every ChildWise plan.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-[18px] overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 px-5 transition-colors duration-200 hover:bg-[#fafcfe]">
                <div className="text-2xl mb-2.5">{f.icon}</div>
                <div className="text-sm font-semibold text-ink mb-[5px] font-heading">{f.title}</div>
                <p className="text-xs text-slate leading-[1.55]">{f.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
