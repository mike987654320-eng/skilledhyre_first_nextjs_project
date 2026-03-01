import Hero from "../../../components/healthcare/Hero";
import WhyHealthcare from "../../../components/healthcare/WhyHealthcare";
import Capabilities from "../../../components/healthcare/Capabilities";
import Approach from "../../../components/healthcare/Approach";
import Security from "../../../components/healthcare/Security";
import Benefits from "../../../components/healthcare/Benefits";
import CTA from "../../../components/healthcare/CTA";

export const metadata = {
  title: "Healthcare & Life Sciences | SkilledHyre Labs",
  description:
    "Engineer intelligent healthcare solutions with our patient-centric, secure, and data-driven approach. Explore our healthcare technology capabilities.",
};

export default function HealthcarePage() {
  return (
    <>
      <Hero />
      <WhyHealthcare />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
