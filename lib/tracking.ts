// Ad-measurement configuration and conversion events.
//
// The OpenAI Ads pixel snippet in app/layout.tsx reads these constants, and
// trackDemoBooked() is the single place a completed demo booking is reported
// to ad platforms.

export const OAIQ_PIXEL_ID = "13ZaqYKWxLGjZL4AbSzrh5";

// Single debug switch for the OpenAI pixel. Bookings confirmed arriving in
// the OpenAI Ads Event Stream on 11/11/2026; flip to true to debug again.
export const OAIQ_DEBUG = false;

declare global {
  interface Window {
    oaiq?: (...args: unknown[]) => void;
  }
}

let demoBooked = false;

// Fired by the /demo Calendly embed when Calendly posts
// "calendly.event_scheduled". Guarded so one booking produces one event
// even if Calendly re-posts the message.
export function trackDemoBooked() {
  if (demoBooked) return;
  demoBooked = true;

  window.oaiq?.("measure", "appointment_scheduled", { type: "customer_action" });

  // Meta parity (Adam, 11/11): the inline embed produces no outbound Calendly
  // click, so the Lead that other pages fire on click fires here on the
  // completed booking instead. Outbound-click Lead behavior elsewhere is
  // unchanged (components/MetaPixel.tsx).
  window.fbq?.("track", "Lead");

  // GOOGLE ADS: add the Google Ads conversion call here when the account/tag
  // exists. Do not add Google code before then.
}
