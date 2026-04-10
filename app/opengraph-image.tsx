import { ImageResponse } from "next/og";

export const alt =
  "ChildWise — AI childcare management software for centers and in-home daycares";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0D1B2A",
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(27,108,168,0.25) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(10,191,188,0.18) 0%, transparent 55%)",
          color: "#FFFFFF",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0ABFBC",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            C
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, display: "flex" }}>
            <span style={{ color: "#FFFFFF" }}>Child</span>
            <span style={{ color: "#0ABFBC" }}>Wise</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 4,
              color: "#0ABFBC",
            }}
          >
            AI Childcare Management Software
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#FFFFFF",
              maxWidth: 1000,
            }}
          >
            The intelligent operating system built for childcare centers.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            AI scheduling · Accredited training · Observations · Predictive enrollment
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ fontSize: 22, color: "rgba(255,255,255,0.55)" }}>
            childwisesoftware.com
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#0D1B2A",
              background: "#0ABFBC",
              padding: "14px 28px",
              borderRadius: 12,
            }}
          >
            Book a Demo →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
