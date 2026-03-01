import Hero from "../../components/tech-talent/Hero";
import WhyMatter from "../../components/tech-talent/WhyMatter";
import EngagementModels from "../../components/tech-talent/EngagementModels";
import Expertise from "../../components/tech-talent/Expertise";
import Security from "../../components/tech-talent/Security";
import Benefits from "../../components/tech-talent/Benefits";
import Industries from "../../components/tech-talent/Industries";
import CTA from "../../components/tech-talent/CTA";

export const metadata = {
  title: "Tech Talent Solutions | SkilledHyre Labs",
  description:
    "Access elite technology experts and accelerate innovation. Explore our flexible engagement models for your engineering needs.",
};

export default function TechTalentPage() {
  return (
    <>
      <Hero />
      <WhyMatter />
      <EngagementModels />
      <Expertise />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
