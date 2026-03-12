import Hero from "../../../components/travel-tourism/Hero";
import WhyTravel from "../../../components/travel-tourism/WhyTravel";
import Capabilities from "../../../components/travel-tourism/Capabilities";
import Approach from "../../../components/travel-tourism/Approach";
import Security from "../../../components/travel-tourism/Security";
import Benefits from "../../../components/travel-tourism/Benefits";
import CTA from "../../../components/travel-tourism/CTA";

export const metadata = {
  title: "Travel & Tourism | SkilledHyre Labs",
  description:
    "Engineering Digital Experiences for Modern Travelers. We empower travel agencies and operators with cutting-edge digital solutions.",
};

export default function TravelTourismPage() {
  return (
    <>
      <Hero />
      <WhyTravel />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
