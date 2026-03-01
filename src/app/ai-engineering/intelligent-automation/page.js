import Hero from "../../../components/intelligent-automation/Hero";
import WhatIsIA from "../../../components/intelligent-automation/WhatIsIA";
import WhyMatter from "../../../components/intelligent-automation/WhyMatter";
import Framework from "../../../components/intelligent-automation/Framework";
import Applications from "../../../components/intelligent-automation/Applications";
import Security from "../../../components/intelligent-automation/Security";
import Benefits from "../../../components/intelligent-automation/Benefits";
import Industries from "../../../components/intelligent-automation/Industries";
import CTA from "../../../components/intelligent-automation/CTA";

export const metadata = {
  title: "Intelligent Automation | SkilledHyre Labs",
  description:
    "Automate processes and augment intelligence with our data-driven, self-optimizing systems. Explore Intelligent Automation at SkilledHyre Labs.",
};

export default function IntelligentAutomationPage() {
  return (
    <>
      <Hero />
      <WhatIsIA />
      <WhyMatter />
      <Framework />
      <Applications />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
