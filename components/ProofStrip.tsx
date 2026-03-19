import FadeIn from "./FadeIn";

const stats = [
  { icon: "🏫", num: "500+", label: "Active centers" },
  { icon: "👶", num: "28K+", label: "Children managed" },
  { icon: "⏱️", num: "12 hrs", label: "Saved per week" },
  { icon: "🎓", num: "2,400+", label: "CEU hours completed" },
  { icon: "✅", num: "100%", label: "License audit pass rate" },
];

export default function ProofStrip() {
  return (
    <div className="py-[22px] border-t border-b border-border bg-white">
      <div className="max-w-wrap mx-auto px-9">
        <div className="flex items-center justify-center gap-9 flex-wrap">
          {stats.map((stat, i) => (
            <div key={stat.label} className="contents">
              <FadeIn delay={i as 0 | 1 | 2 | 3 | 4}>
                <div className="flex items-center gap-[9px]">
                  <div className="w-8 h-8 rounded-lg bg-mist flex items-center justify-center text-base">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-heading text-xl font-semibold text-ink leading-none">{stat.num}</div>
                    <div className="text-[11px] text-slate/60">{stat.label}</div>
                  </div>
                </div>
              </FadeIn>
              {i < stats.length - 1 && (
                <div className="w-px h-[30px] bg-border hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
