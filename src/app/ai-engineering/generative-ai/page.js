import Hero from "../../../components/generative-ai/Hero";
import WhatIsGenerativeAI from "../../../components/generative-ai/WhatIsGenerativeAI";
import WhyItMatters from "../../../components/generative-ai/WhyItMatters";
import Approach from "../../../components/generative-ai/Approach";
import Applications from "../../../components/generative-ai/Applications";
import Security from "../../../components/generative-ai/Security";
import Advantages from "../../../components/generative-ai/Advantages";
import Industries from "../../../components/generative-ai/Industries";
import CTA from "../../../components/generative-ai/CTA";

export const metadata = {
  title: "AI Generative Solutions | SkilledHyre Labs",
  description:
    "Create. Automate. Personalize. Scale with Generative Intelligence.",
};

export default function GenerativeAIPage() {
  return (
    <>
      <Hero />
      <WhatIsGenerativeAI />
      <WhyItMatters />
      <Approach />
      <Applications />
      <Security />
      <Advantages />
      <Industries />
      <CTA />
    </>
  );
}
