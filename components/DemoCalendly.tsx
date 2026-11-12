"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackDemoBooked } from "@/lib/tracking";

const CALENDLY_URL = "https://calendly.com/adam-childwise/30min?hide_gdpr_banner=1";

export default function DemoCalendly() {
  // Verified against Calendly's "Advanced embed for developers" doc: the
  // embed posts messages from origin https://calendly.com with
  // e.data.event = "calendly.event_scheduled" when an invitee books.
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if ((e.data as { event?: string } | null)?.event === "calendly.event_scheduled") {
        trackDemoBooked();
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="bg-white rounded-[18px] border border-border shadow-s3 overflow-hidden">
      {/* data-resize sizes the iframe to the embed's full page height, so the
          whole month grid and the time-zone line render with no inner
          scrollbar. The in-page "see the product first" cue is the preview
          card row in the left column, not a clipped calendar. */}
      <div
        className="calendly-inline-widget"
        data-url={CALENDLY_URL}
        data-resize="true"
        style={{ minWidth: "320px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
    </div>
  );
}
