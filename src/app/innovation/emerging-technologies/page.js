import Hero from "../../../components/emerging-technologies/Hero";
import WhatAreThey from "../../../components/emerging-technologies/WhatAreThey";
import WhyMatter from "../../../components/emerging-technologies/WhyMatter";
import Approach from "../../../components/emerging-technologies/Approach";
import FocusAreas from "../../../components/emerging-technologies/FocusAreas";
import Benefits from "../../../components/emerging-technologies/Benefits";
import Industries from "../../../components/emerging-technologies/Industries";
import CTA from "../../../components/emerging-technologies/CTA";

export const metadata = {
  title: "Emerging Technologies | SkilledHyre Labs",
  description:
    "Innovate Beyond the Present. Engineer the Future with Emerging Technologies.",
};

export default function EmergingTechnologiesPage() {
  return (
    <>
      <Hero />
      <WhatAreThey />
      <WhyMatter />
      <Approach />
      <FocusAreas />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
