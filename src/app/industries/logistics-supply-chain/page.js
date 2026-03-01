import Hero from "../../../components/logistics-supply-chain/Hero";
import WhyLogistics from "../../../components/logistics-supply-chain/WhyLogistics";
import Capabilities from "../../../components/logistics-supply-chain/Capabilities";
import Approach from "../../../components/logistics-supply-chain/Approach";
import Security from "../../../components/logistics-supply-chain/Security";
import Benefits from "../../../components/logistics-supply-chain/Benefits";
import CTA from "../../../components/logistics-supply-chain/CTA";

export const metadata = {
  title: "Logistics & Supply Chain | SkilledHyre Labs",
  description:
    "Engineer intelligent logistics solutions with our integrated, secure, and data-driven approach. Explore our supply chain technology capabilities.",
};

export default function LogisticsSupplyChainPage() {
  return (
    <>
      <Hero />
      <WhyLogistics />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
