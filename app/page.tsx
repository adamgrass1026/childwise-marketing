import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import AiOs from "@/components/AiOs";
import Consolidation from "@/components/Consolidation";
import BeforeAfter from "@/components/BeforeAfter";
import Scheduler from "@/components/Scheduler";
import AiAssistant from "@/components/AiAssistant";
import Observations from "@/components/Observations";
import Training from "@/components/Training";
import Enrollment from "@/components/Enrollment";
import StandardFeatures from "@/components/StandardFeatures";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Wave transition: dark hero → light body */}
      <div style={{ background: "#0D1B2A", marginTop: "-2px", lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <path
            d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z"
            fill="#F0F7FC"
          />
        </svg>
      </div>

      <ProofStrip />
      <AiOs />
      <Consolidation />
      <BeforeAfter />

      {/* Divider between dark sections */}
      <div className="bg-ink">
        <div className="max-w-[600px] mx-auto h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      </div>

      <Scheduler />
      <AiAssistant />
      <Observations />
      <Training />
      <Enrollment />
      <StandardFeatures />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CtaBanner />
      <Footer />
    </>
  );
}
