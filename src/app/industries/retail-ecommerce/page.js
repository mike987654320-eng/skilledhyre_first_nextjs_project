import Hero from "../../../components/retail-ecommerce/Hero";
import WhyRetail from "../../../components/retail-ecommerce/WhyRetail";
import Capabilities from "../../../components/retail-ecommerce/Capabilities";
import Approach from "../../../components/retail-ecommerce/Approach";
import Security from "../../../components/retail-ecommerce/Security";
import Benefits from "../../../components/retail-ecommerce/Benefits";
import CTA from "../../../components/retail-ecommerce/CTA";

export const metadata = {
  title: "Retail & E-commerce | SkilledHyre Labs",
  description:
    "Engineer intelligent retail and e-commerce solutions with our omni-channel, secure, and data-driven approach. Explore our retail technology capabilities.",
};

export default function RetailEcommercePage() {
  return (
    <>
      <Hero />
      <WhyRetail />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
