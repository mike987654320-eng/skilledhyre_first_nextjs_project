import Hero from "../../../components/cloud-architecture/Hero";
import WhatIsCloudNative from "../../../components/cloud-architecture/WhatIsCloudNative";
import WhyItMatters from "../../../components/cloud-architecture/WhyItMatters";
import EngineeringApproach from "../../../components/cloud-architecture/EngineeringApproach";
import BuiltInSecurity from "../../../components/cloud-architecture/BuiltInSecurity";
import BusinessBenefits from "../../../components/cloud-architecture/BusinessBenefits";
import Industries from "../../../components/cloud-architecture/Industries";
import MigrationVsNative from "../../../components/cloud-architecture/MigrationVsNative";
import TechCapabilities from "../../../components/cloud-architecture/TechCapabilities";
import CTA from "../../../components/cloud-architecture/CTA";

export const metadata = {
  title: "Cloud-Native Architecture | SkilledHyre Labs",
  description:
    "Build scalable, resilient & future-ready digital systems with Cloud-Native Architecture.",
};

export default function CloudArchitecturePage() {
  return (
    <>
      <Hero />
      <WhatIsCloudNative />
      <WhyItMatters />
      <EngineeringApproach />
      <BuiltInSecurity />
      <BusinessBenefits />
      <Industries />
      <MigrationVsNative />
      <TechCapabilities />
      <CTA />
    </>
  );
}
