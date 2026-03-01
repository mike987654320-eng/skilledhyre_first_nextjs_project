import Hero from "../../../components/custom-software/Hero";
import WhyCustom from "../../../components/custom-software/WhyCustom";
import Approach from "../../../components/custom-software/Approach";
import ProductTypes from "../../../components/custom-software/ProductTypes";
import Security from "../../../components/custom-software/Security";
import Benefits from "../../../components/custom-software/Benefits";
import Industries from "../../../components/custom-software/Industries";
import CTA from "../../../components/custom-software/CTA";

export const metadata = {
  title: "Custom Software Development | SkilledHyre Labs",
  description:
    "Tailored, scalable, and high-performance applications designed specifically for your business workflows. Engineered for impact by SkilledHyre Labs.",
};

export default function CustomSoftwarePage() {
  return (
    <>
      <Hero />
      <WhyCustom />
      <Approach />
      <ProductTypes />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
