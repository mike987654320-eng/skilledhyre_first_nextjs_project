import Hero from "../../../components/product-engineering/Hero";
import WhyProduct from "../../../components/product-engineering/WhyProduct";
import Approach from "../../../components/product-engineering/Approach";
import Capabilities from "../../../components/product-engineering/Capabilities";
import Security from "../../../components/product-engineering/Security";
import Benefits from "../../../components/product-engineering/Benefits";
import Industries from "../../../components/product-engineering/Industries";
import CTA from "../../../components/product-engineering/CTA";

export const metadata = {
  title: "Product Engineering | SkilledHyre Labs",
  description:
    "Build modern, scalable digital products with our comprehensive product engineering services. Engineered for impact by SkilledHyre Labs.",
};

export default function ProductEngineeringPage() {
  return (
    <>
      <Hero />
      <WhyProduct />
      <Approach />
      <Capabilities />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
