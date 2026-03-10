import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-teal via-[#0a7a96] to-navy relative overflow-hidden" style={{ backgroundImage: "linear-gradient(140deg, #0D8FAB 0%, #0a7a96 40%, #1B3A6B 100%)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_85%_50%,rgba(255,255,255,.07)_0%,transparent_50%)]" />
      <div className="relative text-center py-[92px] px-9">
        <div className="inline-flex items-center gap-[7px] text-[11px] font-semibold tracking-[.12em] uppercase text-white/90 px-3.5 py-[5px] bg-white/[.12] border border-white/25 rounded-full mb-[18px]">
          You deserve this
        </div>
        <h2 className="font-heading text-[clamp(30px,4vw,48px)] font-semibold text-white leading-[1.1] tracking-tight">
          The center you imagined when<br />you started is still possible.
        </h2>
        <p className="text-[17px] text-white/75 leading-[1.75] mt-3.5 mx-auto max-w-[510px] mb-[38px]">
          ChildWise gives you back the time, the clarity, and the confidence to actually run it. Hundreds of directors made the switch. Most tell us they wish they&apos;d done it sooner.
        </p>
        <div className="flex items-center justify-center gap-3.5 flex-wrap">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-white bg-white text-navy hover:bg-cream hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(0,0,0,.12)]"
          >
            Start Free 14-Day Trial →
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-[34px] py-[17px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:-translate-y-px"
          >
            Schedule a Demo
          </Link>
        </div>
        <p className="mt-[18px] text-[13px] text-white/50">
          No credit card required · Free data migration · Cancel anytime
        </p>
      </div>
    </section>
  );
}
