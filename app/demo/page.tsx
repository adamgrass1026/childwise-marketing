import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import DemoCalendly from "@/components/DemoCalendly";
import DemoHeroMedia from "@/components/DemoHeroMedia";

export const metadata: Metadata = {
  title: "Book a Live Demo",
  description:
    "See ChildWise in action — book a 30-minute live demo. Auto staff scheduling, built-in training, AI observations, and enrollment forecasting for childcare centers.",
  alternates: { canonical: "/demo" },
};

// Flip these on only when Adam supplies real content. Never invent reviews.
const SHOW_REVIEWS = false;
const REVIEWS: { quote: string; name: string }[] = [];
// Hero video: swap the DemoHeroMedia call in the hero to videoSrc when a
// file exists (see comment at the call site).
// Story 1 step 1 — parent "Usual Hours" phone screenshot not yet supplied.
const SHOW_PARENT_HOURS_STEP = false;
// Operator photo not yet supplied.
const SHOW_OPERATOR_PHOTO = false;
const OPERATOR_PHOTO_SRC = ""; // e.g. "/demo/adam-grass.jpg"

const PROOF_POINTS = [
  "Enrollment and paperwork, handled.",
  "Every teacher's training included.",
  "AI that already knows your program.",
];

const WALKTHROUGH = [
  "Your week's staff schedule built in front of you.",
  "Enrollment from first inquiry to signed paperwork.",
  "How billing, payments and training fit in one place.",
];

function Caption({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] text-white/70 leading-relaxed mt-3 text-center">{children}</p>;
}

function WebShot({
  src,
  mobileSrc,
  alt,
  width,
  height,
  mobileWidth,
  mobileHeight,
}: {
  src: string;
  mobileSrc?: string;
  alt: string;
  width: number;
  height: number;
  mobileWidth?: number;
  mobileHeight?: number;
}) {
  return (
    <>
      <div className={`rounded-[14px] overflow-hidden border border-white/15 shadow-s3 ${mobileSrc ? "hidden sm:block" : "hidden sm:block"}`}>
        <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
      </div>
      {mobileSrc ? (
        <div className="rounded-[14px] overflow-hidden border border-white/15 shadow-s3 sm:hidden max-w-[390px] mx-auto">
          <Image src={mobileSrc} alt={alt} width={mobileWidth} height={mobileHeight} className="w-full h-auto" />
        </div>
      ) : null}
    </>
  );
}

function PhoneShot({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <div className="rounded-[26px] overflow-hidden border border-white/15 shadow-s3 max-w-[300px] mx-auto">
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
    </div>
  );
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-ink">
      <div className="max-w-wrap mx-auto px-6 sm:px-9 py-8 lg:py-12">
        {/* Logo only — no nav, no footer links. The only action here is booking. */}
        <div className="font-heading text-[26px] font-bold tracking-tight">
          <span className="text-white">Child</span>
          <span className="text-teal">Wise</span>
        </div>

        {/* HERO — product first; booking lives at #book, last on the page.
            DOM order gives the mobile stack (H1 → sub → button → media →
            proof points); on lg the media spans both rows of column 2. */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center mt-8 lg:mt-14">
          <div className="max-w-[560px] lg:col-start-1 lg:row-start-1">
            <h1 className="font-heading text-[clamp(32px,4vw,48px)] font-bold text-white leading-[1.08] tracking-tight">
              It&apos;s not just software. This is your{" "}
              <span className="text-teal">assistant director</span>.
            </h1>
            <p className="text-[19px] text-white/75 leading-relaxed mt-4">
              One price. A whole front office.
            </p>
            <a
              href="#book"
              className="inline-flex w-full sm:w-auto min-h-[48px] items-center justify-center gap-2 mt-8 px-[38px] py-[15px] rounded-xl font-body text-base font-semibold cursor-pointer transition-all duration-200 no-underline border-2 border-teal bg-teal text-ink hover:bg-teal-light hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(10,191,188,.3)]"
            >
              Book a demo
            </a>
          </div>

          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            {/* Swap to video later: <DemoHeroMedia videoSrc="/videos/….mp4" alt="…" /> */}
            <DemoHeroMedia
              imageSrc="/demo/schedule-room.png"
              alt="ChildWise room schedule for one week — children's expected hours above the staff shifts built to cover them"
              width={1800}
              height={1166}
            />
          </div>

          <ul className="flex flex-col gap-4 lg:col-start-1 lg:row-start-2 max-w-[560px]">
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
        </div>

        {/* ───────────────────── 1. PRODUCT VISUALS ───────────────────── */}
        <section id="product-proof" className="mt-16 lg:mt-20" style={{ scrollMarginTop: "24px" }}>
          <h2 className="font-heading text-[clamp(28px,3.5vw,42px)] font-semibold text-white leading-[1.12] tracking-tight text-center">
            See it before the call
          </h2>

          {/* Story 1 — Schedules that build themselves */}
          <div id="story-scheduling" className="mt-14" style={{ scrollMarginTop: "24px" }}>
            <h3 className="font-heading text-[22px] font-semibold text-teal text-center">
              Schedules that build themselves
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-center mt-8">
              {/* Phone leads on mobile; sits beside the web shot on desktop */}
              <div className="lg:order-2">
                <PhoneShot
                  src="/demo/teacher-rooms-phone.png"
                  alt="ChildWise teacher app showing a room's daily schedule — each child's expected hours and every staff shift"
                  width={929}
                  height={1900}
                />
                <Caption>Teachers see their room&apos;s schedule on their phone.</Caption>
              </div>
              <div className="lg:order-1">
                {SHOW_PARENT_HOURS_STEP ? (
                  <div className="mb-8">
                    <PhoneShot src="/demo/parent-usual-hours-phone.png" alt="ChildWise parent app screen where families set the usual weekly hours their child attends" width={900} height={1584} />
                    <Caption>Parents set the hours their child attends.</Caption>
                  </div>
                ) : null}
                <WebShot
                  src="/demo/schedule-room.png"
                  mobileSrc="/demo/schedule-room-mobile.png"
                  alt="ChildWise room schedule for one week — children's expected hours above the staff shifts built to cover them"
                  width={1800}
                  height={1166}
                  mobileWidth={858}
                  mobileHeight={1850}
                />
                <Caption>ChildWise builds each room&apos;s staff schedule from those hours.</Caption>
              </div>
            </div>
          </div>

          {/* Story 2 — Observations written for you */}
          <div id="story-observations" className="mt-20" style={{ scrollMarginTop: "24px" }}>
            <h3 className="font-heading text-[22px] font-semibold text-teal text-center">
              Observations written for you
            </h3>
            <div className="max-w-[880px] mx-auto mt-8">
              <WebShot
                src="/demo/review-drafts.png"
                mobileSrc="/demo/review-drafts-mobile.png"
                alt="ChildWise Review Drafts queue — AI-drafted observations from classroom photos awaiting teacher approval"
                width={1800}
                height={1166}
                mobileWidth={890}
                mobileHeight={1185}
              />
              <Caption>
                AI drafts each child&apos;s observation from classroom photos and maps it to your state&apos;s learning standards. Nothing reaches a family until you approve it.
              </Caption>
            </div>
          </div>

          {/* Story 3 — An assistant for every teacher */}
          <div id="story-assistant" className="mt-20" style={{ scrollMarginTop: "24px" }}>
            <h3 className="font-heading text-[22px] font-semibold text-teal text-center">
              An assistant for every teacher
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-12 items-center mt-8">
              <div className="lg:order-2">
                <PhoneShot
                  src="/demo/staff-assistant-phone.png"
                  alt="ChildWise Staff Assistant on a phone answering a teacher's question about a child biting"
                  width={929}
                  height={1900}
                />
                <Caption>The same help on their phone, in the classroom.</Caption>
              </div>
              {/* Chat text can't stay legible at 390px by cropping alone, so the
                  phone shot (same conversation) carries mobile; web shows ≥sm. */}
              <div className="lg:order-1 hidden sm:block">
                <WebShot
                  src="/demo/staff-assistant.png"
                  alt="ChildWise Staff Assistant on the web answering a question about biting with steps grounded in state licensing rules"
                  width={1800}
                  height={1166}
                />
                <Caption>Teachers ask a question and get an answer based on your licensing rules.</Caption>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────── 2. WHAT YOU'LL SEE ───────────────────── */}
        <section className="mt-24 max-w-[640px] mx-auto text-center">
          <h2 className="font-heading text-[clamp(26px,3vw,36px)] font-semibold text-white leading-[1.15] tracking-tight">
            What you&apos;ll see in 30 minutes
          </h2>
          <ul className="flex flex-col gap-3 mt-7 text-left">
            {WALKTHROUGH.map((item) => (
              <li key={item} className="flex items-center gap-3 bg-white/[.05] border border-white/10 rounded-[12px] px-5 py-4">
                <span className="w-6 h-6 rounded-full bg-teal/15 border border-teal/40 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                    <path d="M3 8.5l3.2 3.2L13 5" stroke="#0ABFBC" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[16px] text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-[16px] text-white/60 italic mt-6">It&apos;s a walkthrough, not a sales pitch.</p>
        </section>

        {/* ───────────────────── 3. WHO'S ON THE CALL ───────────────────── */}
        <section className="mt-24 max-w-[640px] mx-auto text-center">
          <h2 className="font-heading text-[clamp(26px,3vw,36px)] font-semibold text-white leading-[1.15] tracking-tight">
            You&apos;ll talk to an operator
          </h2>
          {SHOW_OPERATOR_PHOTO && OPERATOR_PHOTO_SRC ? (
            <div className="mt-7 w-[120px] h-[120px] rounded-full overflow-hidden border-2 border-teal/50 mx-auto">
              <Image src={OPERATOR_PHOTO_SRC} alt="Adam Grass, founder of ChildWise" width={240} height={240} className="w-full h-full object-cover" />
            </div>
          ) : null}
          <p className="text-[17px] text-white/80 leading-[1.75] mt-6">
            I&apos;m Adam Grass. I own and run licensed childcare centers in Michigan, and I built
            ChildWise for my own programs. You&apos;ll be talking to someone who does your job.
          </p>
        </section>

        {/* ───────────────────── 4. REVIEWS (hidden until real text exists) ───────────────────── */}
        {SHOW_REVIEWS && REVIEWS.length > 0 ? (
          <section className="mt-24 max-w-[720px] mx-auto">
            <div className="flex flex-col gap-4">
              {REVIEWS.map((r) => (
                <figure key={r.name} className="bg-white/[.06] border border-white/10 rounded-[14px] p-5">
                  <blockquote className="text-[15px] text-white/85 leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  <figcaption className="text-[13px] text-white/50 mt-3">{r.name}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {/* ───────────────────── 5. BOOKING ───────────────────── */}
        <section id="book" className="mt-24 max-w-[720px] mx-auto" style={{ scrollMarginTop: "24px" }}>
          <h2 className="font-heading text-[clamp(26px,3vw,36px)] font-semibold text-white leading-[1.15] tracking-tight text-center">
            Pick a time
          </h2>
          <p className="text-[16px] text-white/70 text-center mt-3">
            Free onboarding and free data migration from your current software.
          </p>
          {/* min-height matches the embed's final rendered height so Calendly's
              late iframe resize doesn't change page height mid smooth-scroll
              (which made the hero button land short of #book). */}
          <div className="mt-8 min-h-[904px]">
            <DemoCalendly />
          </div>
        </section>

        {/* ───────────────────── 6. CLOSING LINK ───────────────────── */}
        <section className="mt-14 mb-10 flex flex-col items-center">
          <Link href="/" className="text-[14px] text-white/60 underline underline-offset-4 hover:text-teal">
            See everything ChildWise does
          </Link>
        </section>
      </div>
    </main>
  );
}
