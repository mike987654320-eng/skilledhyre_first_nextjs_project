import Hero from "../../../components/automation-intelligent-systems/Hero";
import WhatIsIA from "../../../components/automation-intelligent-systems/WhatIsIA";
import WhyNeed from "../../../components/automation-intelligent-systems/WhyNeed";
import Framework from "../../../components/automation-intelligent-systems/Framework";
import Security from "../../../components/automation-intelligent-systems/Security";
import Benefits from "../../../components/automation-intelligent-systems/Benefits";
import IndustryUseCases from "../../../components/automation-intelligent-systems/IndustryUseCases";
import CTA from "../../../components/automation-intelligent-systems/CTA";

export const metadata = {
  title: "Intelligent Automation Systems | Innovation | SkilledHyre Labs",
  description:
    "Streamline operations, accelerate productivity, and scale with intelligence. Discover our AI-powered automation frameworks and industry use cases.",
};

export default function AutomationSystemsPage() {
  return (
    <>
      <Hero />
      <WhatIsIA />
      <WhyNeed />
      <Framework />
      <Security />
      <Benefits />
      <IndustryUseCases />
      <CTA />
    </>
  );
}
