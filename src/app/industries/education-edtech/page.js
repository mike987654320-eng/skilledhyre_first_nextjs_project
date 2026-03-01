import Hero from "../../../components/education-edtech/Hero";
import WhyEdTech from "../../../components/education-edtech/WhyEdTech";
import Capabilities from "../../../components/education-edtech/Capabilities";
import Approach from "../../../components/education-edtech/Approach";
import Security from "../../../components/education-edtech/Security";
import Benefits from "../../../components/education-edtech/Benefits";
import CTA from "../../../components/education-edtech/CTA";

export const metadata = {
  title: "Education & EdTech | SkilledHyre Labs",
  description:
    "Engineer intelligent learning solutions with our engaging, secure, and data-driven approach. Explore our edtech technology capabilities.",
};

export default function EducationEdTechPage() {
  return (
    <>
      <Hero />
      <WhyEdTech />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
