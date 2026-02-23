import Hero from "../../../components/ai-product-design/Hero";
import WhatIsAIFirst from "../../../components/ai-product-design/WhatIsAIFirst";
import WhyItMatters from "../../../components/ai-product-design/WhyItMatters";
import HowWeDesign from "../../../components/ai-product-design/HowWeDesign";
import CoreBenefits from "../../../components/ai-product-design/CoreBenefits";
import CTA from "../../../components/ai-product-design/CTA";

export const metadata = {
  title: "AI-First Product Design | SkilledHyre Labs",
  description:
    "Designing intelligent products where AI is at the core, not an afterthought.",
};

export default function AIProductDesignPage() {
  return (
    <>
      <Hero />
      <WhatIsAIFirst />
      <WhyItMatters />
      <HowWeDesign />
      <CoreBenefits />
      <CTA />
    </>
  );
}
