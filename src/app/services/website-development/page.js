import Hero from "../../../components/website-development/Hero";
import WhyMatter from "../../../components/website-development/WhyMatter";
import Approach from "../../../components/website-development/Approach";
import Types from "../../../components/website-development/Types";
import Security from "../../../components/website-development/Security";
import Benefits from "../../../components/website-development/Benefits";
import Industries from "../../../components/website-development/Industries";
import CTA from "../../../components/website-development/CTA";

export const metadata = {
  title: "Website Development | SkilledHyre Labs",
  description:
    "Build powerful digital experiences and drive engagement with our high-performance website development services.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <Hero />
      <WhyMatter />
      <Approach />
      <Types />
      <Security />
      <Benefits />
      <Industries />
      <CTA />
    </>
  );
}
