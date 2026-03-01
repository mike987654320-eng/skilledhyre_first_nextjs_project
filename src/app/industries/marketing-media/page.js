import Hero from "../../../components/marketing-media/Hero";
import WhyMarketing from "../../../components/marketing-media/WhyMarketing";
import Capabilities from "../../../components/marketing-media/Capabilities";
import Approach from "../../../components/marketing-media/Approach";
import Security from "../../../components/marketing-media/Security";
import Benefits from "../../../components/marketing-media/Benefits";
import CTA from "../../../components/marketing-media/CTA";

export const metadata = {
  title: "Marketing & Media | SkilledHyre Labs",
  description:
    "Engineer intelligent marketing and media solutions with our engaging, secure, and data-driven approach. Explore our media technology capabilities.",
};

export default function MarketingMediaPage() {
  return (
    <>
      <Hero />
      <WhyMarketing />
      <Capabilities />
      <Approach />
      <Security />
      <Benefits />
      <CTA />
    </>
  );
}
