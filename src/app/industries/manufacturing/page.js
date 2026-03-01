import Hero from "../../../components/manufacturing/Hero";
import WhyManufacturing from "../../../components/manufacturing/WhyManufacturing";
import Capabilities from "../../../components/manufacturing/Capabilities";
import Approach from "../../../components/manufacturing/Approach";
import Security from "../../../components/manufacturing/Security";
import Benefits from "../../../components/manufacturing/Benefits";
import CTA from "../../../components/manufacturing/CTA";

export const metadata = {
  title: "Manufacturing & Industrial | SkilledHyre Labs",
  description:
    "Engineer intelligent manufacturing solutions with our integrated, secure, and data-driven approach. Explore our industrial technology capabilities.",
};

export default function ManufacturingPage() {
  return (
    <>
      <Hero />
      <WhyManufacturing />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
