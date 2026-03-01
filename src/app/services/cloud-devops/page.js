import Hero from "../../../components/cloud-devops/Hero";
import WhyCloud from "../../../components/cloud-devops/WhyCloud";
import Approach from "../../../components/cloud-devops/Approach";
import Capabilities from "../../../components/cloud-devops/Capabilities";
import Security from "../../../components/cloud-devops/Security";
import Benefits from "../../../components/cloud-devops/Benefits";
import Industries from "../../../components/cloud-devops/Industries";
import CTA from "../../../components/cloud-devops/CTA";

export const metadata = {
  title: "Cloud & DevOps Engineering | SkilledHyre Labs",
  description:
    "Scale with confidence and automate with precision. Explore our resilient and cost-optimized Cloud & DevOps Engineering solutions.",
};

export default function CloudDevOpsPage() {
  return (
    <>
      <Hero />
      <WhyCloud />
      <Approach />
      <Capabilities />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
