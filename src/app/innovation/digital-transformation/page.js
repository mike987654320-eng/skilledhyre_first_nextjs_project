import Hero from "../../../components/digital-transformation/Hero";
import WhyTransform from "../../../components/digital-transformation/WhyTransform";
import StrategicImpact from "../../../components/digital-transformation/StrategicImpact";
import Roadmap from "../../../components/digital-transformation/Roadmap";
import CTA from "../../../components/digital-transformation/CTA";

export const metadata = {
  title: "Digital Transformation | SkilledHyre Labs",
  description:
    "Modernize core systems with cloud-native technologies and AI. Digital Transformation reimagined by SkilledHyre Labs.",
};

export default function DigitalTransformationPage() {
  return (
    <>
      <Hero />
      <WhyTransform />
      <StrategicImpact />
      <Roadmap />
      <CTA />
    </>
  );
}
