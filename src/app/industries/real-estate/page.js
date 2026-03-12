import Hero from "../../../components/real-estate/Hero";
import WhyRealEstate from "../../../components/real-estate/WhyRealEstate";
import Capabilities from "../../../components/real-estate/Capabilities";
import Approach from "../../../components/real-estate/Approach";
import Security from "../../../components/real-estate/Security";
import Benefits from "../../../components/real-estate/Benefits";
import CTA from "../../../components/real-estate/CTA";

export const metadata = {
  title: "Real Estate | SkilledHyre Labs",
  description:
    "Building Smart Digital Platforms for Modern Real Estate. We empower real estate businesses to deliver smarter property experiences.",
};

export default function RealEstatePage() {
  return (
    <>
      <Hero />
      <WhyRealEstate />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
