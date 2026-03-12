import Hero from "../../../components/hr-recruitment/Hero";
import WhyHR from "../../../components/hr-recruitment/WhyHR";
import Capabilities from "../../../components/hr-recruitment/Capabilities";
import Approach from "../../../components/hr-recruitment/Approach";
import Security from "../../../components/hr-recruitment/Security";
import Benefits from "../../../components/hr-recruitment/Benefits";
import CTA from "../../../components/hr-recruitment/CTA";

export const metadata = {
  title: "HR & Recruitment | SkilledHyre Labs",
  description:
    "Building Intelligent Talent Acquisition Platforms. We develop powerful HR technology solutions.",
};

export default function HRRecruitmentPage() {
  return (
    <>
      <Hero />
      <WhyHR />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
