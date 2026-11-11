import type { Metadata } from "next";
import DemoCalendly from "@/components/DemoCalendly";

export const metadata: Metadata = {
  title: "Book a Live Demo",
  description:
    "See ChildWise in action — book a 30-minute live demo. Auto staff scheduling, built-in training, AI observations, and enrollment forecasting for childcare centers.",
  alternates: { canonical: "/demo" },
};

// Flip these on only when Adam supplies real content. Never invent reviews.
const SHOW_REVIEWS = false;
const REVIEWS: { quote: string; name: string }[] = [];
const SHOW_VIDEO = false;
const VIDEO_SRC = ""; // e.g. "/videos/demo-overview.mp4"

const PROOF_POINTS = [
  "Enrollment and paperwork, handled.",
  "Every teacher's training included.",
  "AI that already knows your program.",
];

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-ink">
      <div className="max-w-wrap mx-auto px-6 sm:px-9 py-8 lg:py-12">
        {/* Logo only — no nav, no footer links. The only action here is booking. */}
        <div className="font-heading text-[26px] font-bold tracking-tight">
          <span className="text-white">Child</span>
          <span className="text-teal">Wise</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-10 lg:gap-16 items-start mt-8 lg:mt-14">
          {/* Copy */}
          <div className="max-w-[560px]">
            <h1 className="font-heading text-[clamp(32px,4vw,48px)] font-bold text-white leading-[1.08] tracking-tight">
              It&apos;s not just software. This is your{" "}
              <span className="text-teal">assistant director</span>.
            </h1>
            <p className="text-[19px] text-white/75 leading-relaxed mt-4">
              One price. A whole front office.
            </p>

            <ul className="flex flex-col gap-4 mt-8">
              {PROOF_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                      <path d="M3 8.5l3.2 3.2L13 5" stroke="#0ABFBC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[17px] text-white/90 font-medium">{point}</span>
                </li>
              ))}
            </ul>

            {/* Video slot — hidden until Adam supplies a file. */}
            {SHOW_VIDEO && VIDEO_SRC ? (
              <div className="mt-10 rounded-[18px] overflow-hidden border border-white/15 shadow-s3">
                <video src={VIDEO_SRC} controls playsInline className="w-full h-auto" />
              </div>
            ) : null}

            {/* Reviews — hidden until Adam supplies real review text. */}
            {SHOW_REVIEWS && REVIEWS.length > 0 ? (
              <div className="mt-10 flex flex-col gap-4">
                {REVIEWS.map((r) => (
                  <figure key={r.name} className="bg-white/[.06] border border-white/10 rounded-[14px] p-5">
                    <blockquote className="text-[15px] text-white/85 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                    <figcaption className="text-[13px] text-white/50 mt-3">{r.name}</figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
          </div>

          {/* Booking — the page's one action */}
          <DemoCalendly />
        </div>
      </div>
    </main>
  );
}
