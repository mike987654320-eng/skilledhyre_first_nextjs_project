import Hero from "../../../components/insurance/Hero";
import WhyInsurance from "../../../components/insurance/WhyInsurance";
import Capabilities from "../../../components/insurance/Capabilities";
import Approach from "../../../components/insurance/Approach";
import Security from "../../../components/insurance/Security";
import Benefits from "../../../components/insurance/Benefits";
import CTA from "../../../components/insurance/CTA";

export const metadata = {
  title: "Insurance | SkilledHyre Labs",
  description:
    "Transforming Insurance with Intelligent Digital Solutions. We help insurance companies and insurtech startups build advanced digital platforms.",
};

export default function InsurancePage() {
  return (
    <>
      <Hero />
      <WhyInsurance />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
