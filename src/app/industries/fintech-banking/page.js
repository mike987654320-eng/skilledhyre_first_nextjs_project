import Hero from "../../../components/fintech-banking/Hero";
import WhyFinTech from "../../../components/fintech-banking/WhyFinTech";
import Capabilities from "../../../components/fintech-banking/Capabilities";
import Approach from "../../../components/fintech-banking/Approach";
import Security from "../../../components/fintech-banking/Security";
import Benefits from "../../../components/fintech-banking/Benefits";
import CTA from "../../../components/fintech-banking/CTA";

export const metadata = {
  title: "FinTech & Banking | SkilledHyre Labs",
  description:
    "Engineer intelligent finance solutions with our secure, compliant, and data-driven approach. Explore our fintech and banking technology capabilities.",
};

export default function FinTechBankingPage() {
  return (
    <>
      <Hero />
      <WhyFinTech />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
