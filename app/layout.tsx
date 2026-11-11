import type { Metadata, Viewport } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import MetaPixel from "@/components/MetaPixel";
import { OAIQ_PIXEL_ID, OAIQ_DEBUG } from "@/lib/tracking";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://www.childwisesoftware.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "ChildWise — AI Childcare Management Software for Centers & Daycares",
    template: "%s | ChildWise",
  },
  description:
    "ChildWise is the AI childcare management software that auto-builds staff schedules, tracks licensing and CEU training, drafts observations, and forecasts enrollment. Built for childcare centers, preschools, and in-home daycares. Founder pricing $79.99/mo.",
  applicationName: "ChildWise",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "AI childcare management software",
    "childcare management software",
    "childcare center management software",
    "daycare management software",
    "daycare scheduling software",
    "childcare scheduling software",
    "preschool management software",
    "child care software",
    "in-home daycare software",
    "childcare attendance app",
    "CDA training tracker",
    "childcare licensing compliance software",
    "childcare billing software",
    "Brightwheel alternative",
    "Procare alternative",
    "Lillio alternative",
    "ChildWise",
  ],
  authors: [{ name: "ChildWise Software", url: SITE_URL }],
  creator: "ChildWise Software",
  publisher: "ChildWise Software",
  category: "Business Software",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "ChildWise",
    title:
      "ChildWise — AI Childcare Management Software for Centers & Daycares",
    description:
      "Auto staff scheduling, built-in CEU training, AI observations, and predictive enrollment — the intelligent operating system built for childcare centers. Founder pricing $79.99/mo.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ChildWise — AI Childcare Management Software",
    description:
      "Auto scheduling, training compliance, observations, and enrollment forecasting for childcare centers. Founder pricing $79.99/mo.",
    creator: "@childwise",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body className="font-body leading-relaxed">
        {/* OpenAI Ads pixel — beforeInteractive renders it into the initial
            document <head>, once per page, ahead of hydration. Config lives
            in lib/tracking.ts (single debug flag). */}
        <Script id="openai-pixel" strategy="beforeInteractive">
          {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"${OAIQ_PIXEL_ID}",debug:${OAIQ_DEBUG}});`}
        </Script>
        <MetaPixel />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
