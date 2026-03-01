import Hero from "../../../components/mobile-app-development/Hero";
import WhyMobile from "../../../components/mobile-app-development/WhyMobile";
import Approach from "../../../components/mobile-app-development/Approach";
import AppTypes from "../../../components/mobile-app-development/AppTypes";
import Security from "../../../components/mobile-app-development/Security";
import Benefits from "../../../components/mobile-app-development/Benefits";
import Industries from "../../../components/mobile-app-development/Industries";
import CTA from "../../../components/mobile-app-development/CTA";

export const metadata = {
  title: "Mobile App Development | SkilledHyre Labs",
  description:
    "Build engaging mobile experiences and drive user growth with our native and cross-platform mobile app development services.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <Hero />
      <WhyMobile />
      <Approach />
      <AppTypes />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
